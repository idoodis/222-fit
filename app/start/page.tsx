import Link from "next/link";
import Image from "next/image";
import { BOOKING_MEMBERSHIPS_URL } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { StartPageClient } from "@/components/StartPageClient";

export const metadata = generateMetadata({
  title: "Start Your Journey",
  description: "Book a free consultation to find the right training plan for your goals, schedule, and experience level.",
  path: "/start",
});

export default function StartPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Start Here", url: "/start" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section with Watermark */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/3 py-20 md:py-32">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              className="object-contain opacity-[0.03]"
              sizes="(max-width: 768px) 100vw, 80vw"
              unoptimized
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-primary mb-4">START HERE</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Start Your 222 Fit Journey
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              Book a free consultation to find the right training plan for your goals, schedule, and experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <StartPageClient />
    </>
  );
}

