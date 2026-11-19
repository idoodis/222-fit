import { SectionHeader } from "@/components/SectionHeader";
import { PricingCard } from "@/components/pricing/PricingCard";
import { EveryClassCallout } from "@/components/pricing/EveryClassCallout";
import { Reveal } from "@/components/pricing/Reveal";
import styles from "@/components/pricing/pricing.module.css";
import { PRICING_PACKAGES } from "@/lib/pricing";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Lock } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Pricing & Packages | Personal Training in Carol Stream, IL",
  description: `Affordable fitness training packages in Carol Stream, IL. Flexible pricing options for personal training, group classes, mat Pilates, boxing lessons, and online coaching. Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.`,
  path: "/pricing",
});

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

        <div
          className={`${styles.grid} mx-auto mt-14 grid max-w-7xl gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5`}
        >
          {PRICING_PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 80} className="h-full">
              <div
                className={styles.enter}
                style={{ "--enter-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <PricingCard pkg={pkg} />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Lock
            className="mr-1.5 inline h-4 w-4 -translate-y-px align-middle text-primary"
            aria-hidden="true"
          />
          Purchases are completed securely on Mindbody.
        </p>

        <div className="mx-auto max-w-7xl">
          <EveryClassCallout />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All packages can be customized.{" "}
            <Link
              href="/contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact us
            </Link>{" "}
            for individual session pricing or custom packages.
          </p>
        </div>
      </div>
    </>
  );
}
