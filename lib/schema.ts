import { SITE_NAME, DEFAULT_CITY, ADDRESS } from "./constants";
import { env } from "./env";

export function generateLocalBusinessSchema(city: string = DEFAULT_CITY) {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL;
  
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: `Premium personal training in ${city}, IL. One-on-one training, small group classes, and online coaching.`,
    image: siteUrl ? `${siteUrl}/images/logo.png` : undefined,
    logo: siteUrl ? `${siteUrl}/images/logo.png` : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Carol Stream",
      },
      {
        "@type": "City",
        name: "Wheaton",
      },
      {
        "@type": "City",
        name: "Glen Ellyn",
      },
    ],
    telephone: "(555) 123-4567", // Update with actual phone number
    url: siteUrl,
    priceRange: "$$",
    // Add sameAs for social media if available
    // sameAs: [
    //   "https://www.facebook.com/222fit",
    //   "https://www.instagram.com/222fit",
    // ],
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

