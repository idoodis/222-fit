# Deployment Guide for 222 Fit

## Quick Start

1. **Set up environment variables** in your deployment platform (Vercel recommended):
   - Copy the variables from `.env.example` (see README.md)
   - Add them to your Vercel project settings

2. **Deploy to Vercel**:
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js
   - Add environment variables in project settings
   - Deploy!

## Environment Variables Checklist

### Required
- [ ] `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://222fit.com)

### Recommended
- [ ] `NEXT_PUBLIC_VAGARO_BOOKING_URL` - Your Vagaro booking page
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics ID
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console code

### Optional (for contact form)
- [ ] `RESEND_API_KEY` - Resend API key
- [ ] `RESEND_FROM_EMAIL` - Sender email
- [ ] `RESEND_TO_EMAIL` - Recipient email

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Verify "Book Now" buttons link to Vagaro
- [ ] Check sitemap.xml is accessible at `/sitemap.xml`
- [ ] Check robots.txt is accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test mobile responsiveness
- [ ] Verify analytics tracking (if enabled)
- [ ] Update city/area in `lib/constants.ts` if needed

## Customization After Deployment

### Update City/Area
Edit `lib/constants.ts`:
```typescript
export const DEFAULT_CITY = "Your Actual City";
```

### Update Contact Information
Edit `app/contact/page.tsx` - update phone and email

### Update Content
- Service descriptions: `app/services/*/page.tsx`
- Testimonials: `app/testimonials/page.tsx`
- FAQ: `app/faq/page.tsx`
- About: `app/about/page.tsx`

## Troubleshooting

### Build Fails
- Check all environment variables are set
- Verify Node.js version is 18+
- Check for TypeScript errors: `npm run build`

### Contact Form Not Working
- Verify Resend API key is set
- Check email addresses are valid
- Check Vercel function logs

### Booking Links Not Working
- Verify `NEXT_PUBLIC_VAGARO_BOOKING_URL` is set correctly
- Test the URL in a browser

## Support

For deployment issues, check:
- Vercel deployment logs
- Next.js documentation
- Project README.md


