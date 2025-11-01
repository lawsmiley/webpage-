# 📧 EmailJS Setup Guide

## What is EmailJS?

EmailJS allows you to send emails directly from your client-side JavaScript without a backend server. Perfect for contact forms!

---

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free!)
3. Verify your email address
4. Log in to your dashboard

### 2. Add Email Service

1. In the EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - **Custom SMTP**
4. Connect your email account
5. **Important**: Copy your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Template Variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Message content

5. **Important**: Copy your **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Click "Account" in the dashboard
2. Go to "API Keys" section
3. **Important**: Copy your **Public Key** (e.g., `AbcDEfGHijKLmNoP`)

### 5. Update Your Code

Open `src/components/Contact.jsx` and find this section (around line 31):

```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // ← Replace this
  'YOUR_TEMPLATE_ID',   // ← Replace this
  formRef.current,
  'YOUR_PUBLIC_KEY'     // ← Replace this
);
```

Replace with your credentials:

```javascript
await emailjs.sendForm(
  'service_abc123',       // Your Service ID
  'template_xyz789',      // Your Template ID
  formRef.current,
  'AbcDEfGHijKLmNoP'     // Your Public Key
);
```

---

## Complete Example

Here's what it should look like after setup:

```javascript
// src/components/Contact.jsx (line ~25-40)

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    await emailjs.sendForm(
      'service_1a2b3c4',        // Your actual Service ID
      'template_x9y8z7',        // Your actual Template ID
      formRef.current,
      'user_AbC123XyZ789'       // Your actual Public Key
    );

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('Error sending email:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  }
};
```

---

## Testing Your Contact Form

### 1. Start Development Server
```bash
npm run dev
```

### 2. Navigate to Contact Section
Scroll down to the contact form or click "Contact" in the navbar.

### 3. Fill Out Form
- Enter a name
- Enter an email
- Write a message

### 4. Submit
Click "Send Message" button.

### 5. Check Results

**Success:**
- Green success message appears
- Form clears
- Check your email inbox for the message

**Error:**
- Red error message appears
- Check browser console (F12) for error details
- Verify credentials are correct

---

## Common Issues & Solutions

### Issue: "Failed to send message"

**Solutions:**
1. Check credentials match exactly (no extra spaces)
2. Verify Service ID, Template ID, and Public Key are correct
3. Check browser console for specific error
4. Make sure email service is connected in EmailJS dashboard
5. Check EmailJS account is verified

### Issue: "Unauthorized"

**Solution:**
- Public Key is incorrect or not copied correctly
- Go to EmailJS dashboard → Account → API Keys
- Copy the Public Key again

### Issue: Template variables not showing

**Solution:**
- Make sure template uses `{{name}}`, `{{email}}`, `{{message}}`
- Variable names must match exactly (case-sensitive)
- Check template preview in EmailJS dashboard

### Issue: Emails not arriving

**Solutions:**
1. Check spam/junk folder
2. Verify email service is properly connected
3. Test email service in EmailJS dashboard
4. Check monthly email quota (100 emails/month on free plan)

---

## EmailJS Dashboard Quick Reference

### Where to Find Each Credential

1. **Service ID**
   - Dashboard → Email Services
   - Listed under each service name
   - Format: `service_xxxxxx`

2. **Template ID**
   - Dashboard → Email Templates
   - Listed under each template
   - Format: `template_xxxxxx`

3. **Public Key**
   - Dashboard → Account → API Keys
   - Listed as "Public Key" or "User ID"
   - Format: Random alphanumeric string

---

## Alternative: Using Environment Variables

For better security, you can use environment variables:

### 1. Create `.env.local` file in project root:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbcDEfGHijKLmNoP
```

### 2. Update `Contact.jsx`:

```javascript
await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

### 3. On Vercel:

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Redeploy

**Note**: `.env.local` is already in `.gitignore`

---

## EmailJS Free Plan Limits

- ✅ 200 emails/month
- ✅ 2 email services
- ✅ 3 email templates
- ✅ All features included

Perfect for a portfolio site! 🎉

---

## Pro Tips

1. **Test thoroughly** before deploying
2. **Use real email** to test (send to yourself)
3. **Check spam folder** on first test
4. **Add auto-reply** template for better UX
5. **Monitor usage** in EmailJS dashboard
6. **Upgrade plan** if you need more emails

---

## What Happens When Someone Submits?

1. User fills out form on your site
2. Clicks "Send Message"
3. EmailJS sends email to your inbox
4. User sees success message
5. You receive email with their details
6. You can reply directly to their email

---

## Need Help?

- **EmailJS Docs**: https://www.emailjs.com/docs/
- **EmailJS Support**: Dashboard → Help
- **Test Email**: Use dashboard's built-in email tester

---

## Checklist

- [ ] Created EmailJS account
- [ ] Added email service
- [ ] Created email template with variables
- [ ] Copied Service ID
- [ ] Copied Template ID
- [ ] Copied Public Key
- [ ] Updated `Contact.jsx` with credentials
- [ ] Tested form locally
- [ ] Received test email
- [ ] Verified success message shows
- [ ] Ready to deploy!

---

**Once configured, your contact form will work perfectly! 📧✨**

**Estimated setup time: 5-10 minutes**

