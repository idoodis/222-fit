# Email Configuration Guide for 222 Fit

## Overview
The contact form uses **Resend** to send emails. To receive form submissions at `bri@222fit.com`, you need to configure Resend with your domain.

## Step 1: Create a Resend Account

1. Go to https://resend.com
2. Sign up for a free account (free tier includes 3,000 emails/month)
3. Verify your email address

## Step 2: Get Your Resend API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Name it (e.g., "222 Fit Website")
4. Copy the API key (starts with `re_`)

## Step 3: Verify Your Domain in Resend

Since you're using Microsoft 365 email (`bri@222fit.com`), you have two options:

### Option A: Use Resend for Sending (Recommended)
This allows Resend to send emails on behalf of your domain.

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter `222fit.com`
4. Resend will provide DNS records to add:
   - **DKIM records** (for email authentication)
   - **SPF record** (may need to update your existing SPF)
   - **DMARC record** (optional but recommended)

5. Add these DNS records in GoDaddy:
   - Go to your DNS management
   - Add the DKIM records provided by Resend
   - Update your SPF record to include Resend (if needed)

6. Wait for DNS propagation (usually 5-30 minutes)
7. Resend will verify your domain automatically

### Option B: Use Microsoft 365 SMTP (Alternative)
If you prefer to use Microsoft 365 directly, you'd need to modify the code to use SMTP instead of Resend. This is more complex and not recommended unless you have specific requirements.

## Step 4: Configure Environment Variables

### For Local Development (.env.local)

Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=noreply@222fit.com
RESEND_TO_EMAIL=bri@222fit.com
```

**Important Notes:**
- `RESEND_FROM_EMAIL`: Should be from your verified domain (`222fit.com`)
  - Use `noreply@222fit.com` or `contact@222fit.com` (not `bri@222fit.com` to avoid confusion)
- `RESEND_TO_EMAIL`: This is where form submissions will be sent (`bri@222fit.com`)

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these three variables:
   - `RESEND_API_KEY` = `re_your_api_key_here`
   - `RESEND_FROM_EMAIL` = `noreply@222fit.com`
   - `RESEND_TO_EMAIL` = `bri@222fit.com`
4. Make sure to add them for **Production**, **Preview**, and **Development** environments
5. Redeploy your site after adding the variables

## Step 5: Test the Contact Form

1. Fill out the contact form on your website
2. Check `bri@222fit.com` inbox for the form submission
3. Check spam folder if you don't see it immediately

## Troubleshooting

### Emails Not Arriving?

1. **Check Resend Dashboard:**
   - Go to **Logs** in Resend dashboard
   - Look for any failed email attempts
   - Check error messages

2. **Verify Domain Status:**
   - In Resend dashboard → **Domains**
   - Ensure `222fit.com` shows as "Verified" (green checkmark)

3. **Check DNS Records:**
   - Ensure all DKIM records are added correctly
   - Verify SPF record includes Resend (if required)

4. **Check Environment Variables:**
   - Verify all three variables are set correctly
   - Make sure there are no extra spaces or quotes
   - Restart your dev server after changing `.env.local`

5. **Check Email Provider:**
   - Since you're using Microsoft 365, check:
     - Spam/Junk folder
     - Quarantine in Microsoft 365 admin center
     - Email rules that might filter messages

### Domain Verification Issues?

- DNS records can take up to 48 hours to propagate (usually much faster)
- Use a DNS checker tool to verify records are live
- Make sure you're adding records in the correct format (no extra spaces)

## Current Configuration

- **Recipient Email:** `bri@222fit.com`
- **From Email:** Should be `noreply@222fit.com` or `contact@222fit.com` (configured in env vars)
- **Email Service:** Resend
- **Domain:** `222fit.com` (needs verification in Resend)

## Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- Keep your Resend API key secret
- Rotate API keys periodically
- Use different API keys for development and production if possible

