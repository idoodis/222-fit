import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import {
  Dumbbell,
  Users,
  Activity,
  Box,
  Monitor,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const serviceIcons = {
  "personal-training": Dumbbell,
  "group-training": Users,
  "mat-pilates": Activity,
  "boxing-lessons": Box,
  "online-training": Monitor,
};

export const metadata = generateMetadata({
  title: "Personal Training Services in Carol Stream, IL",
  description: `Premium personal training services in Carol Stream, IL. One-on-one training, small group classes, mat Pilates, boxing lessons, and online coaching. Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.`,
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Personal Training Services in Carol Stream, IL"
          subtitle="Our Services"
          description={`Premium fitness training services in ${DEFAULT_CITY}, IL. Whether you're looking for one-on-one personal training, motivating group classes, or flexible online coaching, we have a program designed to help you achieve your goals. Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.`}
        />

        {/* Local SEO Link */}
        <div className="mt-8 text-center">
          <Link
            href="/personal-trainer-carol-stream"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Personal Trainer in Carol Stream, IL →
          </Link>
        </div>

        {/* Overview Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Who Are These Services For?</h2>
          <p className="text-muted-foreground mb-6">
            Our services are designed for anyone looking to build strength, improve confidence, and create a sustainable fitness routine that fits their lifestyle. Whether you're a complete beginner, returning to fitness after a break, or an experienced athlete looking to level up, we meet you where you are.
          </p>
          <p className="text-muted-foreground mb-8">
            Every program is tailored to your individual needs, ensuring you feel supported, heard, and guided throughout your journey. Our goal isn't just physical transformation—it's long-term success built on confidence, education, and self-development.
          </p>
        </div>

        {/* Services Grid */}
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

        {/* Benefits Section */}
        <div className="mt-16 bg-secondary py-12 rounded-lg">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose 222 Fit?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Personalized Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Every program is tailored to meet you where you are, ensuring you feel supported and guided.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Sustainable Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Build a fitness routine that enhances your lifestyle, not controls it.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Accountability & Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get the motivation and guidance you need to stay consistent and achieve your goals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Lifestyle-Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Flexible scheduling and online options that work with your busy life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your goals and find the perfect training plan for you.
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


