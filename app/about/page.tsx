import { SectionHeader } from "@/components/SectionHeader";
import { DEFAULT_CITY, ADDRESS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = generateMetadata({
  title: "About Us | Personal Training in Carol Stream, IL",
  description: `Learn about 222 Fit and our mission to help you achieve your fitness goals in Carol Stream, IL. Meet Briana Orozco, certified personal trainer with 8+ years of experience. Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.`,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="About 222 Fit"
          subtitle="Our Story"
          description={`Premium fitness training in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              At 222 Fit, we believe that everyone deserves access to
              high-quality fitness training that delivers real results. Our
              mission is to help you transform your body and your life through
              personalized training, expert guidance, and unwavering support.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">What Sets Us Apart</h2>
            <p className="text-muted-foreground">
              We're not just another gym. We're a community of fitness
              professionals dedicated to your success. Our certified trainers
              bring years of experience and a passion for helping people achieve
              their goals. We combine proven training methods with personalized
              attention to ensure you get results.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
            <p className="text-muted-foreground">
              Every client is unique, and so is every training program. We take
              the time to understand your goals, assess your current fitness
              level, and create a customized plan that works for you. Whether
              you're training one-on-one, in a group, or online, you'll receive
              the same level of expertise and care.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Location & Service Area</h2>
            <p className="mb-4 text-muted-foreground">
              We're located at <strong>{ADDRESS.full}</strong> in {DEFAULT_CITY}. We proudly serve {DEFAULT_CITY}, Wheaton, Glen Ellyn, and the surrounding areas. Our
              trainers are available for in-person sessions at our facility or
              at your preferred location. We also offer online training for
              clients who prefer to work out from home or while traveling.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your fitness goals and learn how we can help you achieve them.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

