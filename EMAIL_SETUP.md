# EmailJS Setup Guide

This guide will help you configure EmailJS for your contact form to receive emails from visitors.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. Go to the EmailJS Dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure (make sure the variable names match exactly):

```
Subject: New Contact Form Message: {{user_subject}}

Hi {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}

Message:
{{user_message}}

---
This message was sent from your portfolio website.
Reply directly to: {{user_email}}
```

**Important:** The variable names in your template must match exactly:

- `{{user_name}}` - for the sender's name
- `{{user_email}}` - for the sender's email
- `{{user_subject}}` - for the message subject
- `{{user_message}}` - for the message content
- `{{to_name}}` - for your name (recipient)

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Copy your **Public Key**

## Step 5: Update Environment Variables

Update your `.env` file with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Update Email Address

In the Contact component, update the `to_email` in templateParams to your actual email address:

```typescript
to_email: 'your.email@example.com', // Replace with your actual email
```

## Testing

1. Restart your development server after updating the .env file
2. Fill out and submit the contact form
3. Check your email for the message

## Troubleshooting

- Make sure your .env file is in the root directory of your project
- Restart the dev server after changing environment variables
- Check the browser console for any error messages
- Verify your EmailJS service, template, and public key are correct

## Demo Mode

If EmailJS is not configured (missing environment variables), the form will work in demo mode - it will show success messages but won't actually send emails. This is useful for development and testing.
