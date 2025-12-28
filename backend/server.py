from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class LeadCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    platform: str
    monthlyGMV: Optional[str] = ""
    message: Optional[str] = ""
    
    @validator('name')
    def name_must_not_be_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('Name cannot be empty')
        return v.strip()
    
    @validator('phone')
    def phone_must_be_valid(cls, v):
        if not v or not v.strip():
            raise ValueError('Phone cannot be empty')
        return v.strip()
    
    @validator('platform')
    def platform_must_be_valid(cls, v):
        valid_platforms = ['amazon', 'flipkart', 'meesho', 'jiomart', 'multiple', 'planning']
        if v not in valid_platforms:
            raise ValueError(f'Platform must be one of {valid_platforms}')
        return v

class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
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


# Email sending function
async def send_lead_notification_email(lead: Lead):
    """Send email notification when a new lead is submitted"""
    try:
        # Get email configuration from environment
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER')
        smtp_password = os.environ.get('SMTP_PASSWORD')
        business_email = os.environ.get('BUSINESS_EMAIL', 'info@soloscale.in')
        
        # If SMTP credentials are not configured, log and skip email
        if not smtp_user or not smtp_password:
            logger.warning("SMTP credentials not configured. Skipping email notification.")
            return
        
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Lead from SoloScale Website - {lead.name}'
        msg['From'] = smtp_user
        msg['To'] = business_email
        
        # Create email body
        text_body = f"""
New Lead Submission from SoloScale Website

Contact Details:
----------------
Name: {lead.name}
Email: {lead.email}
Phone: {lead.phone}
Platform: {lead.platform.upper()}
Monthly GMV: {lead.monthly_gmv if lead.monthly_gmv else 'Not provided'}

Message:
--------
{lead.message if lead.message else 'No message provided'}

Submission Details:
------------------
Lead ID: {lead.id}
Submitted At: {lead.submitted_at.strftime('%d %B %Y, %I:%M %p')}

---
SoloScale Lead Management System
        """
        
        html_body = f"""
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">New Lead from SoloScale Website</h2>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td>
                    <td style="padding: 8px 0;">{lead.name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:{lead.email}" style="color: #2563eb;">{lead.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                    <td style="padding: 8px 0;"><a href="tel:{lead.phone}" style="color: #2563eb;">{lead.phone}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Platform:</td>
                    <td style="padding: 8px 0;"><span style="background-color: #dbeafe; color: #2563eb; padding: 4px 8px; border-radius: 4px; font-weight: 500;">{lead.platform.upper()}</span></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; font-weight: bold;">Monthly GMV:</td>
                    <td style="padding: 8px 0;">{lead.monthly_gmv if lead.monthly_gmv else '<em style="color: #6b7280;">Not provided</em>'}</td>
                </tr>
            </table>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="margin: 0; color: #4b5563;">{lead.message if lead.message else '<em style="color: #6b7280;">No message provided</em>'}</p>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Submission Details</h3>
            <p style="margin: 5px 0; color: #6b7280; font-size: 14px;">
                <strong>Lead ID:</strong> {lead.id}<br>
                <strong>Submitted At:</strong> {lead.submitted_at.strftime('%d %B %Y, %I:%M %p')}
            </p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            SoloScale Lead Management System
        </div>
    </div>
</body>
</html>
        """
        
        # Attach both text and HTML versions
        part1 = MIMEText(text_body, 'plain')
        part2 = MIMEText(html_body, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        # Send email
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        logger.info(f"Email notification sent successfully for lead {lead.id}")
        
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        # Don't raise exception - we still want to save the lead even if email fails

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()