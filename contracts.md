# SoloScale Website - API Contracts & Integration Plan

## Current State: Frontend with Mock Data
The frontend is fully functional with mock data stored in `/app/frontend/src/mock.js`. The contact form currently:
- Stores submissions in localStorage
- Simulates async form submission
- Shows success messages

## Backend Implementation Requirements

### 1. Database Models

#### Lead/Contact Model
```python
{
    "id": "auto-generated",
    "name": str,
    "phone": str,
    "email": str,
    "platform": str,  # amazon, flipkart, meesho, jiomart, multiple, planning
    "monthly_gmv": str (optional),
    "message": str (optional),
    "submitted_at": datetime,
    "status": str (default: "new"),  # new, contacted, qualified, converted
}
```

### 2. API Endpoints to Implement

#### POST /api/contact
**Purpose**: Submit contact form and send email notification

**Request Body**:
```json
{
    "name": "string",
    "phone": "string",
    "email": "string",
    "platform": "string",
    "monthlyGMV": "string (optional)",
    "message": "string (optional)"
}
```

**Response**:
```json
{
    "success": true,
    "message": "Thank you! We'll contact you within 24 hours.",
    "lead_id": "string"
}
```

**Backend Actions**:
1. Validate input data
2. Store lead in MongoDB
3. Send email notification to business owner
4. Return success response

#### GET /api/leads (Admin endpoint - optional)
**Purpose**: Retrieve all leads for admin review

**Response**:
```json
{
    "leads": [
        {
            "id": "string",
            "name": "string",
            "email": "string",
            "phone": "string",
            "platform": "string",
            "monthly_gmv": "string",
            "message": "string",
            "submitted_at": "datetime",
            "status": "string"
        }
    ],
    "count": number
}
```

### 3. Email Integration Requirements

**Email Service**: Need to configure email service (SMTP or service like SendGrid/AWS SES)

**Email Template** (to business owner):
```
Subject: New Lead from SoloScale Website

A new lead has submitted a contact form:

Name: {name}
Email: {email}
Phone: {phone}
Platform: {platform}
Monthly GMV: {monthly_gmv}
Message: {message}

Submitted at: {timestamp}

---
SoloScale Lead Management System
```

**Required Environment Variables**:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
BUSINESS_EMAIL=business-owner@soloscale.com  # Recipient email
```

### 4. Frontend Integration Changes

**File to Update**: `/app/frontend/src/pages/Contact.jsx`

**Change Required**:
Replace the mock submission:
```javascript
// OLD (mock)
import { submitContactForm } from '../mock';

// NEW (backend integration)
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const response = await axios.post(`${API}/contact`, formData);
        if (response.data.success) {
            setIsSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                platform: '',
                monthlyGMV: '',
                message: ''
            });
            setTimeout(() => setIsSubmitted(false), 5000);
        }
    } catch (error) {
        console.error('Form submission error:', error);
        // Handle error display
    } finally {
        setIsSubmitting(false);
    }
};
```

### 5. Mock Data to Remove

**File**: `/app/frontend/src/mock.js`
- Keep the static data (services, platforms, whyChoose, cities, etc.)
- Remove `submitContactForm` function after backend integration

### 6. Testing Checklist

**Backend Testing**:
- [ ] POST /api/contact endpoint works
- [ ] Lead data saved correctly in MongoDB
- [ ] Email sent successfully to business owner
- [ ] Error handling for invalid data
- [ ] Email delivery confirmation

**Frontend Testing**:
- [ ] Form submission works with backend
- [ ] Success message displayed correctly
- [ ] Error handling displayed to user
- [ ] Form resets after successful submission
- [ ] Loading states work properly

**Integration Testing**:
- [ ] End-to-end flow: Form → Backend → Database → Email
- [ ] Verify email received with correct data
- [ ] Test with different form inputs
- [ ] Test error scenarios (network failure, validation errors)

### 7. Email Configuration Options

**Option 1: Gmail SMTP** (Easiest for testing)
- Use Gmail account with App Password
- Free for low volume

**Option 2: SendGrid** (Recommended for production)
- Free tier: 100 emails/day
- Better deliverability
- Easy API integration

**Option 3: AWS SES** (For high volume)
- Pay per use
- Requires AWS account setup

## Implementation Order

1. **Backend Setup**
   - Create Lead model in server.py
   - Implement POST /api/contact endpoint
   - Add email functionality with SMTP

2. **Email Configuration**
   - Add required env variables
   - Test email sending

3. **Frontend Integration**
   - Update Contact.jsx to use backend API
   - Remove mock function

4. **Testing**
   - Test full flow
   - Verify email delivery
   - Test error scenarios

5. **Optional Enhancements**
   - Admin dashboard to view leads (GET /api/leads)
   - Lead status management
   - Email templates with HTML formatting
