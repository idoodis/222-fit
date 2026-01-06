import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: `Mat Pilates Classes in ${DEFAULT_CITY}`,
  description: `Core strength and flexibility through Mat Pilates in ${DEFAULT_CITY}. Improve posture, balance, and overall fitness.`,
  path: "/services/mat-pilates",
});

const benefits = [
  "Improved core strength and stability",
  "Enhanced flexibility and mobility",
  "Better posture and alignment",
  "Low-impact, joint-friendly exercise",
  "Mind-body connection and stress relief",
  "Suitable for all fitness levels",
];

export default function MatPilatesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Mat Pilates", url: "/services/mat-pilates" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Mat Pilates"
          subtitle="Core Strength & Flexibility"
          description={`Transform your body through Pilates in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              What is Mat Pilates?
            </h2>
            <p className="text-muted-foreground">
              Mat Pilates is a form of exercise that focuses on core strength,
              flexibility, and body awareness. Using controlled movements and
              precise breathing, Pilates helps improve posture, balance, and
              overall body function. Our classes are suitable for all levels,
              from beginners to advanced practitioners.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">What to Expect</h3>
            <p className="text-muted-foreground">
              Our Mat Pilates classes focus on the fundamental principles of
              Pilates: concentration, control, centering, precision, breath, and
              flow. Each session includes a warm-up, main workout focusing on
              core exercises, and a cool-down. All you need is a mat and
              comfortable clothing.
            </p>
          </div>
        </div>
      </div>

      <BookingSection />
    </>
  );
}


