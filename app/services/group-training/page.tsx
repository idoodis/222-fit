import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: `Group Training Classes in ${DEFAULT_CITY}`,
  description: `Motivating group fitness classes in ${DEFAULT_CITY}. High-energy workouts for all fitness levels. Join a class today.`,
  path: "/services/group-training",
});

const benefits = [
  "Motivating group atmosphere",
  "Cost-effective training option",
  "Variety of class formats and intensities",
  "Suitable for all fitness levels",
  "Regular schedule with multiple class times",
  "Fun and engaging workout experience",
];

export default function GroupTrainingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Group Training", url: "/services/group-training" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Group Training Classes"
          subtitle="Train Together"
          description={`High-energy group fitness classes in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Why Join Group Training?
            </h2>
            <p className="text-muted-foreground">
              Our group training classes combine the motivation of working out
              with others and the expertise of our certified trainers. These
              high-energy sessions are designed to push you to your limits
              while having fun and building community.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">What's Included</h3>
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
            <h3 className="mb-4 text-xl font-semibold">Class Formats</h3>
            <p className="text-muted-foreground">
              We offer a variety of group training formats including HIIT
              (High-Intensity Interval Training), strength training circuits,
              cardio conditioning, and functional fitness. Each class is
              designed to challenge you while accommodating different fitness
              levels.
            </p>
          </div>
        </div>
      </div>

      <BookingSection />
    </>
  );
}


