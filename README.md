# 222 Fit - Premium Fitness Training Website

A modern, SEO-optimized Next.js website for 222 Fit, a premium fitness training business. Built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- ✅ Next.js 16 (App Router) with TypeScript
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ SEO optimized (metadata, JSON-LD schemas, sitemap, robots.txt)
- ✅ Vagaro booking integration
- ✅ Lead capture form with validation
- ✅ Responsive, mobile-first design
- ✅ Analytics ready (GA4)
- ✅ Vercel deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 222_fit
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_VAGARO_BOOKING_URL=https://your-vagaro-url.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@222fit.com
RESEND_TO_EMAIL=bri@222fit.com
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

### Required
- `NEXT_PUBLIC_SITE_URL` - Your site's URL (e.g., https://222fit.com)

### Optional
- `NEXT_PUBLIC_VAGARO_BOOKING_URL` - Vagaro booking page URL
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 measurement ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification code
- `RESEND_API_KEY` - Resend API key for email functionality
- `RESEND_FROM_EMAIL` - Email address to send from
- `RESEND_TO_EMAIL` - Email address to receive leads

## Project Structure

```
222_fit/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── services/          # Service pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── BookNowButton.tsx # Booking button component
│   └── ...
├── lib/                   # Utility functions
│   ├── constants.ts      # Site constants
│   ├── env.ts            # Environment variables
│   ├── seo.ts            # SEO utilities
│   └── schema.ts         # JSON-LD schemas
└── public/               # Static assets
```

## Customization

### Update City/Area

Edit `lib/constants.ts`:
```typescript
export const DEFAULT_CITY = "Your City";
```

### Update Services

Edit `lib/constants.ts` - modify the `SERVICES` array.

### Update Content

- **Homepage**: Edit `app/page.tsx`
- **Service Pages**: Edit files in `app/services/`
- **About Page**: Edit `app/about/page.tsx`
- **FAQ**: Edit `app/faq/page.tsx`
- **Testimonials**: Edit `app/testimonials/page.tsx`

### Update Branding

- **Site Name**: Edit `lib/constants.ts` - `SITE_NAME`
- **Colors**: Edit `app/globals.css` - CSS variables
- **Fonts**: Edit `app/layout.tsx` - font imports

## Deployment

### Deploy to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Run `npm run build`
- Deploy your site

### Build Locally

```bash
npm run build
npm start
```

## SEO Features

- ✅ Unique metadata per page (title, description, canonical)
- ✅ Open Graph and Twitter Card metadata
- ✅ JSON-LD structured data (LocalBusiness, FAQPage, BreadcrumbList)
- ✅ Sitemap.xml generation
- ✅ Robots.txt
- ✅ Semantic HTML structure
- ✅ Optimized images (next/image)

## Forms

The contact form includes:
- Client-side validation (Zod + React Hook Form)
- Honeypot spam protection
- Email sending via Resend (optional)
- Success/error handling

## Booking Integration

The site integrates with Vagaro for booking:
- `BookNowButton` component used throughout
- Opens Vagaro booking page in new tab
- Configurable via `NEXT_PUBLIC_VAGARO_BOOKING_URL`

## Analytics

Google Analytics 4 is integrated and can be enabled by setting `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Accessibility

- Keyboard navigation support
- Proper heading hierarchy
- ARIA labels where needed
- Semantic HTML
- Focus states on interactive elements

## Performance

- Next.js Image optimization
- Font optimization (next/font)
- Code splitting
- Optimized bundle size

## Support

For issues or questions, please contact the development team.

## License

Private - All rights reserved.
