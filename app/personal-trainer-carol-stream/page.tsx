import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { TrustBar } from "@/components/TrustBar";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { FeaturedReviews } from "@/components/FeaturedReviews";
import { SERVICES, ADDRESS, DEFAULT_CITY, SITE_NAME } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { facebookReviews } from "@/lib/facebook-reviews";
import { featuredReviews } from "@/lib/featuredReviews";
import { env } from "@/lib/env";
import {
  Dumbbell,
  Users,
  Activity,
  Box,
  Monitor,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

const serviceIcons = {
  "personal-training": Dumbbell,
  "group-training": Users,
  "mat-pilates": Activity,
  "boxing-lessons": Box,
  "online-training": Monitor,
};

const faqs = [
  {
    question: "Do you offer personal training in Carol Stream?",
    answer:
      "Yes! 222 Fit is located in Carol Stream, IL at 503 Thornhill Dr. We offer one-on-one personal training sessions, small group classes, mat Pilates, boxing lessons, and online coaching. All services are available to residents of Carol Stream and surrounding areas.",
  },
  {
    question: "How do I get started with a personal trainer in Carol Stream?",
    answer:
      "Getting started is easy! Book a free consultation through our contact form or call us at (224) 493-4062. During your consultation, we'll discuss your fitness goals, assess your current level, and recommend the best training program for you. No prior experience is necessary - we work with clients of all fitness levels.",
  },
  {
    question: "What makes 222 Fit different from other gyms in Carol Stream?",
    answer:
      "222 Fit offers personalized attention in a supportive, non-intimidating environment. With over 8 years of experience, certified trainer Briana Orozco creates customized programs tailored to each client's goals and lifestyle. We focus on sustainable results, proper form, and building confidence - not just physical transformation, but long-term success.",
  },
  {
    question: "Do I need to be in shape before starting personal training?",
    answer:
      "Absolutely not! Our personal training programs are designed for people of all fitness levels, from complete beginners to advanced athletes. We meet you where you are and create a program that's appropriate for your current fitness level. Many of our clients start with no prior gym experience.",
  },
  {
    question: "What areas do you serve besides Carol Stream?",
    answer:
      "While we're based in Carol Stream, we proudly serve clients from Wheaton, Glen Ellyn, and surrounding DuPage County areas. We also offer online training for clients who prefer to work out from home or are located further away.",
  },
  {
    question: "How much does personal training cost in Carol Stream?",
    answer:
      "We offer flexible pricing options to fit different budgets and goals. Packages range from drop-in classes at $30 per session to comprehensive monthly packages. Contact us for a free consultation to discuss pricing options and find the best plan for your needs.",
  },
];

export const metadata = generateMetadata({
  title: "Personal Trainer in Carol Stream, IL | 222 Fit",
  description:
    "Find the best personal trainer in Carol Stream, IL. One-on-one training, group classes, and online coaching. Book your free consultation today. Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.",
  path: "/personal-trainer-carol-stream",
});

export default function PersonalTrainerCarolStreamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Personal Trainer Carol Stream", url: "/personal-trainer-carol-stream" },
  ]);

  const faqSchema = generateFAQSchema(faqs);
  const featuredReviewSchema =
    featuredReviews.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_NAME,
          url: env.NEXT_PUBLIC_SITE_URL,
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS.street,
            addressLocality: ADDRESS.city,
            addressRegion: ADDRESS.state,
            postalCode: ADDRESS.zip,
            addressCountry: "US",
          },
          review: featuredReviews.map((review) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.author,
            },
            datePublished: review.date,
            reviewBody: review.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating,
              bestRating: "5",
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {featuredReviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredReviewSchema) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/3 py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl relative z-10">
              Personal Trainer in Carol Stream, IL
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl relative z-10">
              Transform your body and your life with personalized fitness training in Carol Stream. One-on-one sessions, small group classes, and online coaching designed for sustainable results.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <TrustBar />
          </div>
        </div>
      </section>

      {/* Why 222 Fit Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              title="Why Choose 222 Fit in Carol Stream?"
              subtitle="Trusted Personal Training"
              description="Experience the difference of personalized fitness coaching in Carol Stream"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">8+ Years of Experience</h3>
                  <p className="text-muted-foreground">
                    Certified personal trainer Briana Orozco brings over 8 years of experience helping clients in Carol Stream and surrounding areas achieve their fitness goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Programs</h3>
                  <p className="text-muted-foreground">
                    Every training program is customized to meet you where you are, ensuring you feel supported, heard, and guided throughout your fitness journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Results</h3>
                  <p className="text-muted-foreground">
                    We focus on building a fitness routine that enhances your lifestyle, not controls it. Our approach values consistency, structure, and a healthy relationship with food.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local & Convenient</h3>
                  <p className="text-muted-foreground">
                    Located in Carol Stream at 503 Thornhill Dr, we're easily accessible to residents of Carol Stream, Wheaton, Glen Ellyn, and surrounding DuPage County areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Personal Training Services in Carol Stream"
            subtitle="Our Services"
            description="Comprehensive fitness solutions tailored to your needs in Carol Stream, IL"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
              return (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  href={`/services/${service.slug}`}
                  icon={Icon && <Icon className="h-8 w-8" />}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Clients in Carol Stream Are Saying"
            subtitle="Client Reviews"
            description="Real feedback from clients who train with 222 Fit in Carol Stream and surrounding areas"
          />
          {facebookReviews.length > 0 && (
            <div className="mt-12 mx-auto max-w-4xl">
              <TestimonialCarousel
                testimonials={facebookReviews}
                autoRotate={true}
                rotateInterval={5000}
              />
            </div>
          )}
          <div className="mt-12">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold">Featured Google Reviews</h3>
              <p className="text-muted-foreground">
                Trusted by local clients in Carol Stream
              </p>
            </div>
            <FeaturedReviews />
          </div>
          <div className="mt-6 flex justify-center">
            <GoogleReviewsBadge />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Service Area Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              title="Serving Carol Stream & Surrounding Areas"
              subtitle="Location & Service Area"
              description="Conveniently located in Carol Stream, IL"
            />
            <div className="mt-12 space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Our Location</p>
                      <p className="text-muted-foreground">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS.full)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {ADDRESS.full}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+12244934062"
                          className="hover:text-primary transition-colors"
                        >
                          (224) 493-4062
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:bri@222fit.com"
                          className="hover:text-primary transition-colors"
                        >
                          bri@222fit.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Service Areas</h3>
                <p className="text-muted-foreground mb-3">
                  We proudly serve clients from the following areas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Carol Stream, IL</li>
                  <li>Wheaton, IL</li>
                  <li>Glen Ellyn, IL</li>
                  <li>Surrounding DuPage County areas</li>
                </ul>
                <p className="text-muted-foreground mt-4 text-sm">
                  We also offer online training for clients located outside our immediate service area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="FAQ"
            description="Common questions about personal training in Carol Stream"
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Fitness Journey in Carol Stream?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free consultation today and discover how personalized training can help you achieve your fitness goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

