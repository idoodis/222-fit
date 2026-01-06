# How to Add Facebook Reviews to Your Testimonials Page

## Rotating Carousel Feature ✨

Your Facebook reviews now display in a **rotating carousel** (similar to your existing site at https://222fit.com/about-coach-bri) that:
- Automatically rotates through reviews every 5 seconds
- Shows profile pictures of reviewers
- Has navigation arrows and dot indicators
- Pauses on hover so you can read
- Matches your premium brand design

## Option 1: Manual Entry (Recommended - Easiest)

1. Go to your Facebook reviews page: https://www.facebook.com/100082665914539/reviews/
2. Copy each review (name, text, and rating)
3. Open `lib/facebook-reviews.ts`
4. Add each review in this format:

```typescript
{
  name: "Reviewer Name",
  content: "The review text goes here...",
  rating: 5, // 1-5 stars
  date: "2024-01-15", // Optional
  role: "Optional additional info", // Optional
  image: "https://...", // Optional: profile image URL from Facebook
},
```

**Example with Profile Image:**
```typescript
export const facebookReviews: FacebookReview[] = [
  {
    name: "John Smith",
    content: "Amazing training experience! The trainers are professional and really know their stuff. I've seen great results in just a few weeks.",
    rating: 5,
    date: "2024-01-15",
    image: "https://scontent.xx.fbcdn.net/v/t1.18169-1/...", // Facebook profile picture
  },
  {
    name: "Jane Doe",
    content: "Best fitness studio in Carol Stream! The group classes are motivating and the personal training is top-notch.",
    rating: 5,
    image: "https://scontent.xx.fbcdn.net/v/t1.18169-1/...", // Facebook profile picture
  },
  // Add your other 8 reviews here...
];
```

### How to Get Profile Images:

1. Go to the reviewer's Facebook profile (click their name on the review)
2. Right-click their profile picture
3. Select "Copy image address" or "Copy image URL"
4. Paste it in the `image` field in your review data

**Note:** If you don't add an image, a nice initial avatar (first letter of their name) will be shown instead.

## Option 2: Facebook Reviews Widget (Embed)

If you prefer to embed Facebook reviews directly, you can use Facebook's embedded reviews widget. However, this requires:

1. Getting a Facebook Page Plugin code from: https://developers.facebook.com/docs/plugins/page-plugin
2. Adding it to your testimonials page

**Note:** Facebook's embedded reviews widget may have limitations and requires your page to be public.

## Option 3: Third-Party Widget

You can also use third-party services like:
- Elfsight Facebook Reviews Widget
- TrustPilot
- Other review aggregation services

These typically provide embed codes that you can add to your page.

## Current Setup

The testimonials page is already configured to:
- Display Facebook reviews from `lib/facebook-reviews.ts`
- Show a link to your Facebook reviews page
- Display both Facebook reviews and your original testimonials

Just add your reviews to the `facebookReviews` array in `lib/facebook-reviews.ts` and they'll automatically appear on the testimonials page!

