# Environment Variables Setup Guide

## Local Development (.env.local)

Your `.env.local` file has been created with your Resend API key. This file is **already in `.gitignore`** and will **never be committed to Git**.

## Required Environment Variables

### ✅ Already Configured
- `RESEND_API_KEY` - Your Resend API key (configured)
- `RESEND_FROM_EMAIL` - Sender email address
- `RESEND_TO_EMAIL` - Recipient email (bri@222fit.com)

### ⚠️ Important: Resend Domain Verification

Before the contact form emails will work, you need to:

1. **Verify your domain in Resend:**
   - Go to https://resend.com/domains
   - Add `222fit.com` or verify `send.222fit.com`
   - Add the DNS records Resend provides to GoDaddy
   - Wait for verification (usually 5-30 minutes)

2. **Update `RESEND_FROM_EMAIL` if needed:**
   - If you verify a different domain, update the `from` email in `.env.local`
   - The email must match your verified domain in Resend
   - Current setting: `hello@send.222fit.com`

## Vercel Deployment Setup

**CRITICAL:** You must also add these environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables for **Production**, **Preview**, and **Development**:

```
RESEND_API_KEY=re_JPtuh5AE_AuXSa6cdvXfEscM9iQ1Pb519
RESEND_FROM_EMAIL=hello@send.222fit.com
RESEND_TO_EMAIL=bri@222fit.com
NEXT_PUBLIC_SITE_URL=https://www.222fit.com
```

4. **Redeploy** your site after adding variables

## Optional: Upstash Redis (Recommended for Production)

For better rate limiting in production, add Upstash Redis:

1. Create free account at https://upstash.com
2. Create a Redis database
3. Copy the REST URL and Token
4. Add to Vercel environment variables:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

## Testing

After setting up:

1. **Restart your dev server** (if running):
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

2. **Test the contact form:**
   - Fill out the form on your site
   - Submit it
   - Check `bri@222fit.com` for the notification email
   - Check the submitter's email for the auto-reply

3. **Check Resend dashboard:**
   - Go to https://resend.com/emails
   - You should see email logs and delivery status

## Security Notes

- ✅ `.env.local` is in `.gitignore` - your API key is safe
- ⚠️ Never commit `.env.local` to Git
- ⚠️ Never share your API key publicly
- ⚠️ Rotate your API key if it's ever exposed

## Troubleshooting

### Emails Not Sending?

1. **Check Resend Dashboard:**
   - Go to https://resend.com/emails
   - Look for failed emails and error messages

2. **Verify Domain:**
   - Ensure your domain is verified in Resend
   - Check DNS records are correct

3. **Check Environment Variables:**
   - Verify `RESEND_API_KEY` is set correctly
   - Restart dev server after changing `.env.local`

4. **Check Server Logs:**
   - Look for errors in terminal/console
   - Check Vercel function logs if deployed

### Rate Limiting Not Working?

- If you see rate limit errors, add Upstash Redis variables
- Or the in-memory fallback will work (but resets on server restart)

