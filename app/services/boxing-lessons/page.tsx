import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: `Boxing Lessons in ${DEFAULT_CITY}`,
  description: `Learn boxing techniques and get in shape in ${DEFAULT_CITY}. Professional boxing training for fitness and skill development.`,
  path: "/services/boxing-lessons",
});

const benefits = [
  "Learn proper boxing techniques and form",
  "Improve cardiovascular fitness and endurance",
  "Build strength and power",
  "Enhance coordination and agility",
  "Stress relief and confidence building",
  "Full-body workout that's fun and engaging",
];

export default function BoxingLessonsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Boxing Lessons", url: "/services/boxing-lessons" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Boxing Lessons"
          subtitle="Fight Fit"
          description={`Professional boxing training in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Why Try Boxing?
            </h2>
            <p className="text-muted-foreground">
              Boxing is one of the most effective full-body workouts available.
              Our boxing lessons combine technique training with high-intensity
              conditioning to help you get in incredible shape while learning a
              valuable skill. Whether you're interested in boxing for fitness or
              want to develop your skills, our experienced trainers will guide
              you every step of the way.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">What You'll Learn</h3>
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
            <h3 className="mb-4 text-xl font-semibold">Training Approach</h3>
            <p className="text-muted-foreground">
              Our boxing lessons cover fundamental techniques including stance,
              footwork, punches (jab, cross, hook, uppercut), defensive moves,
              and combinations. Each session includes technique work, bag
              training, pad work, and conditioning exercises. No prior
              experience is necessary - we welcome all skill levels.
            </p>
          </div>
        </div>
      </div>

      <BookingSection />
    </>
  );
}


