from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import requests

# ----------------- LOAD ENV -----------------
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# ----------------- LOGGING -----------------
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("SoloScale-Backend")

# ----------------- FASTAPI APP -----------------
app = FastAPI()
api_router = APIRouter(prefix="/api")

# ----------------- MONGODB -----------------
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# ----------------- ZOHO CONFIG -----------------
ZOHO_CLIENT_ID = os.getenv("ZOHO_CLIENT_ID")
ZOHO_CLIENT_SECRET = os.getenv("ZOHO_CLIENT_SECRET")
ZOHO_REFRESH_TOKEN = os.getenv("ZOHO_REFRESH_TOKEN")
ZOHO_API_DOMAIN = os.getenv("ZOHO_API_DOMAIN")

# ----------------- EMAIL CONFIG -----------------
SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
BUSINESS_EMAIL = os.getenv("BUSINESS_EMAIL")

# ----------------- MODELS -----------------
class LeadCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    platform: str
    monthlyGMV: Optional[str] = ""
    message: Optional[str] = ""

    @validator("name")
    def validate_name(cls, v):
        if not v.strip():
            raise ValueError("Name is required")
        return v.strip()

    @validator("phone")
    def validate_phone(cls, v):
        if not v.strip():
            raise ValueError("Phone is required")
        return v.strip()

    @validator("platform")
    def validate_platform(cls, v):
        allowed = ["amazon", "flipkart", "meesho", "jiomart", "multiple", "planning"]
        if v not in allowed:
            raise ValueError(f"Platform must be one of {allowed}")
        return v


class Lead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str
    platform: str
    monthly_gmv: str = ""
    message: str = ""
    submitted_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "new"


class LeadResponse(BaseModel):
    success: bool
    message: str
    lead_id: str


# ----------------- ZOHO FUNCTIONS -----------------
def get_zoho_access_token():
    url = "https://accounts.zoho.in/oauth/v2/token"
    params = {
        "refresh_token": ZOHO_REFRESH_TOKEN,
        "client_id": ZOHO_CLIENT_ID,
        "client_secret": ZOHO_CLIENT_SECRET,
        "grant_type": "refresh_token"
    }

    response = requests.post(url, params=params)
    data = response.json()

    if "access_token" not in data:
        logger.error(f"Zoho token error: {data}")
        raise Exception("Failed to get Zoho access token")

    return data["access_token"]


def push_lead_to_zoho(lead: Lead):
    access_token = get_zoho_access_token()

    url = f"{ZOHO_API_DOMAIN}/crm/v2/Leads"
    headers = {
        "Authorization": f"Zoho-oauthtoken {access_token}",
        "Content-Type": "application/json"
    }

    payload = {
        "data": [
            {
                "Last_Name": lead.name,
                "Company": "SoloScale",
                "Email": lead.email,
                "Phone": lead.phone,
                "Description": lead.message,
                "Lead_Source": "Website",
                "Platform": lead.platform
            }
        ]
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code not in [200, 201]:
        logger.error(f"Zoho push failed: {response.text}")
        raise Exception("Zoho lead push failed")

    logger.info("Lead pushed to Zoho successfully")


# ----------------- EMAIL FUNCTION -----------------
def send_lead_email(lead: Lead):
    try:
        msg = MIMEMultipart()
        msg["From"] = SMTP_USER
        msg["To"] = BUSINESS_EMAIL
        msg["Subject"] = f"New Lead - {lead.name} (SoloScale Website)"

        body = f"""
New Lead Received

Name: {lead.name}
Email: {lead.email}
Phone: {lead.phone}
Platform: {lead.platform}
Monthly GMV: {lead.monthly_gmv}

Message:
{lead.message}

Lead ID: {lead.id}
Time: {lead.submitted_at}
        """

        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)

        logger.info("Email sent successfully")

    except Exception as e:
        logger.error(f"Email error: {str(e)}")


# ----------------- ROUTES -----------------
@api_router.get("/")
async def root():
    return {"status": "SoloScale API Running"}


@api_router.post("/contact", response_model=LeadResponse)
async def create_lead(input: LeadCreate):
    try:
        data = input.dict()
        data["monthly_gmv"] = data.pop("monthlyGMV", "")

        lead = Lead(**data)

        # Save to MongoDB
        doc = lead.dict()
        doc["submitted_at"] = doc["submitted_at"].isoformat()
        await db.leads.insert_one(doc)

        logger.info(f"Lead saved in MongoDB: {lead.id}")

        # Send Email
        send_lead_email(lead)

        # Push to Zoho
        push_lead_to_zoho(lead)

        return LeadResponse(
            success=True,
            message="Thank you! We'll contact you within 24 hours.",
            lead_id=lead.id
        )

    except Exception as e:
        logger.error(f"Lead creation error: {str(e)}")
        raise HTTPException(status_code=500, detail="Lead submission failed")


@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(1000)

    for lead in leads:
        if isinstance(lead["submitted_at"], str):
            lead["submitted_at"] = datetime.fromisoformat(lead["submitted_at"])

    return leads


# ----------------- MIDDLEWARE -----------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ORIGINS", "*").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

# ----------------- SHUTDOWN -----------------
@app.on_event("shutdown")
async def shutdown_event():
    client.close()
