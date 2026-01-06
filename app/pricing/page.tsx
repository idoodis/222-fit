import { SectionHeader } from "@/components/SectionHeader";
import { BookNowButton } from "@/components/BookNowButton";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle, Crown } from "lucide-react";

export const metadata = generateMetadata({
  title: "Pricing & Packages",
  description: `Affordable fitness training packages in ${DEFAULT_CITY}. Flexible pricing options for personal training, group classes, and online coaching.`,
  path: "/pricing",
});

const packages = [
  {
    name: "Standard Pack",
    price: "$100",
    period: "per month",
    description: "Perfect for getting started",
    features: [
      "1 class / week",
      "($25/class)",
      "1 month rollover",
    ],
  },
  {
    name: "Premium Pack",
    price: "$160",
    period: "per month",
    description: "Great value for regular training",
    features: [
      "2 classes / week",
      "($20/class)",
      "1 month rollover",
    ],
    popular: true,
  },
  {
    name: "Elite Pack",
    price: "$200",
    period: "per month",
    description: "Maximum training frequency",
    features: [
      "3 classes / week",
      "($16.50/class)",
      "10% off products",
      "1 month rollover",
    ],
  },
  {
    name: "Ultimate Pack",
    price: "$380",
    period: "per month",
    description: "Complete fitness solution",
    features: [
      "1 Personal Training session per week",
      "2 classes / week",
      "Access to personal training app experience",
      "10% off products",
      "1 month rollover",
    ],
    premium: true,
  },
  {
    name: "Drop In",
    price: "$30",
    period: "per class",
    description: "Try a class without commitment",
    features: [
      "Single class access",
      "No commitment required",
      "Perfect for trying us out",
    ],
  },
];

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Choose Your Group Training Plan"
          subtitle="Pricing & Packages"
          description="Elevate your fitness journey with a variety of group training classes that will leave you feeling inspired and motivated to transform your body and mind."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-lg border bg-card p-8 ${
                pkg.popular
                  ? "border-primary shadow-lg ring-2 ring-primary"
                  : pkg.premium
                  ? "border-primary shadow-lg ring-2 ring-primary"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              {pkg.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    <Crown className="h-4 w-4" />
                    Premium
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pkg.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground"> {pkg.period}</span>
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookNowButton className="w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All packages can be customized. Contact us for individual session
            pricing or custom packages.
          </p>
        </div>
      </div>
    </>
  );
}


