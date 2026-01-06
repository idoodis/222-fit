import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  Dumbbell,
  Users,
  Activity,
  Box,
  Monitor,
} from "lucide-react";

const serviceIcons = {
  "personal-training": Dumbbell,
  "group-training": Users,
  "mat-pilates": Activity,
  "boxing-lessons": Box,
  "online-training": Monitor,
};

export const metadata = generateMetadata({
  title: "Our Services",
  description: `Comprehensive fitness services in ${DEFAULT_CITY}. Personal training, group classes, Pilates, boxing, and online coaching.`,
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
          title="Our Services"
          subtitle="What We Offer"
          description={`Premium fitness training services in ${DEFAULT_CITY}. Choose the program that fits your goals.`}
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
    </>
  );
}


