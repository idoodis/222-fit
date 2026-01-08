# DNS Troubleshooting for Email Delivery

## Could Old DNS Records Be Causing Issues?

**Yes, potentially!** Old DNS records from your previous GoDaddy website could interfere with email delivery.

## Common DNS Conflicts

### 1. SPF Record Conflicts

Your current SPF record (from the screenshot) shows:
```
v=spf1 include:spf.em.secureserver.net include:secureserver.net -all
```

**Problem:** This SPF record only allows GoDaddy/Microsoft 365 to send emails. If you add Resend, you need to include Resend in your SPF record.

**Solution:** Update your SPF record to include Resend:
```
v=spf1 include:spf.em.secureserver.net include:secureserver.net include:_spf.resend.com -all
```

### 2. Multiple SPF Records

**Problem:** You can only have ONE SPF record per domain. If you have multiple SPF records, email will fail.

**Solution:** 
- Check GoDaddy DNS for multiple TXT records with `v=spf1`
- Combine them into a single SPF record
- Include all services you need (Microsoft 365 + Resend)

### 3. DKIM Records

**Problem:** Resend requires DKIM records for email authentication. If these conflict with old records, emails might be rejected.

**Solution:**
- Resend will provide specific DKIM records when you verify your domain
- Add them as separate TXT records in GoDaddy
- These won't conflict with your existing records (they're different)

## How to Check for Conflicts

### Step 1: Check Current DNS Records

1. Go to GoDaddy DNS management
2. Look for:
   - Multiple SPF records (TXT records with `v=spf1`)
   - Old DKIM records from previous services
   - Conflicting MX records

### Step 2: Verify Resend Domain Status

1. Go to https://resend.com/domains
2. Check if `222fit.com` shows:
   - ✅ Green checkmark = Verified
   - ⚠️ Yellow warning = DNS records missing/incorrect
   - ❌ Red X = Not verified

### Step 3: Test Email Sending

1. Visit: `http://localhost:3000/api/test-email`
2. Check the response for error details
3. Check your terminal logs for detailed error messages

## Most Likely Issues

### Issue 1: SPF Record Doesn't Include Resend

**Symptom:** Emails fail with "SPF validation failed" or similar

**Fix:** Update SPF to include Resend:
```
v=spf1 include:spf.em.secureserver.net include:secureserver.net include:_spf.resend.com -all
```

### Issue 2: Domain Not Fully Verified in Resend

**Symptom:** Resend shows domain as verified, but emails still fail

**Fix:**
- Check Resend dashboard for any warnings
- Verify all DKIM records are added correctly
- Wait 24-48 hours for DNS propagation

### Issue 3: Wrong "From" Email Address

**Symptom:** Emails fail with "unauthorized" or "domain not verified"

**Fix:**
- Make sure `RESEND_FROM_EMAIL` matches the verified domain exactly
- If you verified `222fit.com`, use `hello@222fit.com` (not `hello@send.222fit.com`)

## Testing Steps

1. **Test Resend directly:**
   - Visit `http://localhost:3000/api/test-email`
   - Check the response for error details

2. **Check terminal logs:**
   - Submit the contact form
   - Look for detailed error messages in terminal
   - Copy the full error details

3. **Check Resend dashboard:**
   - Go to https://resend.com/emails
   - Look for failed emails
   - Click on failed emails to see error details

4. **Check DNS records:**
   - Use a DNS checker: https://mxtoolbox.com/spf.aspx
   - Verify your SPF record is correct
   - Check for multiple SPF records

## Quick Fix Checklist

- [ ] Verify `222fit.com` is verified in Resend (green checkmark)
- [ ] Update SPF record to include `include:_spf.resend.com`
- [ ] Ensure only ONE SPF record exists
- [ ] Add all DKIM records Resend provides
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Test with `/api/test-email` endpoint
- [ ] Check terminal logs for detailed errors
- [ ] Verify `RESEND_FROM_EMAIL` matches verified domain

