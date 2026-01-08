# Debugging Email Issues

## Quick Checklist

### 1. Verify `.env.local` File Exists and Has Correct Values

Your `.env.local` should have:

```env
RESEND_API_KEY=re_JPtuh5AE_AuXSa6cdvXfEscM9iQ1Pb519
RESEND_FROM_EMAIL=hello@send.222fit.com
RESEND_TO_EMAIL=bri@222fit.com
```

**Important:** 
- Make sure there are NO spaces around the `=` sign
- Make sure there are NO quotes around the values
- Make sure the file is in the root directory (same level as `package.json`)

### 2. Restart Your Dev Server

After creating/updating `.env.local`, you MUST restart the dev server:

```bash
# Stop the server (Ctrl+C)
npm run dev
```

### 3. Check Server Logs

When you submit the form, check your terminal/console for error messages. You should see:

**If working:**
```
Internal notification email sent successfully: { id: '...' }
Auto-reply email sent successfully: { id: '...' }
```

**If failing:**
```
Failed to send internal notification email:
Error details: ...
Error message: ...
```

### 4. Common Issues

#### Issue: "RESEND_FROM_EMAIL or RESEND_TO_EMAIL not configured"

**Solution:** 
- Check `.env.local` exists and has these variables
- Restart dev server
- Make sure no typos in variable names

#### Issue: "Domain not verified" or "Unauthorized" error

**Solution:**
- Go to https://resend.com/domains
- Verify `222fit.com` or `send.222fit.com` is verified (green checkmark)
- If not verified, add the DNS records Resend provides to GoDaddy
- Wait 5-30 minutes for DNS propagation

#### Issue: Emails fail silently

**Solution:**
- Check terminal logs for error messages
- Check Resend dashboard → Emails → Logs
- Look for failed emails and error details

### 5. Test the API Directly

You can test the API route directly using curl or Postman:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

Check the response and server logs.

### 6. Verify Resend Dashboard

1. Go to https://resend.com/emails
2. Check if emails appear in the logs
3. If they appear but show "Failed", click on them to see the error

### 7. Check Environment Variables Are Loaded

Add this temporary debug endpoint to verify env vars are loaded:

```typescript
// app/api/debug-env/route.ts (temporary - delete after testing)
import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function GET() {
  return NextResponse.json({
    hasApiKey: !!env.RESEND_API_KEY,
    fromEmail: env.RESEND_FROM_EMAIL,
    toEmail: env.RESEND_TO_EMAIL,
    // Don't expose the actual API key!
  });
}
```

Visit `http://localhost:3000/api/debug-env` to see if env vars are loaded.

