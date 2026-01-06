import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: `Personal Training in ${DEFAULT_CITY}`,
  description: `One-on-one personal training in ${DEFAULT_CITY}. Customized workout plans tailored to your fitness goals. Book your session today.`,
  path: "/services/personal-training",
});

const benefits = [
  "Customized workout plans tailored to your goals",
  "One-on-one attention and guidance",
  "Flexible scheduling to fit your lifestyle",
  "Progress tracking and adjustments",
  "Nutrition guidance and support",
  "Accountability and motivation",
];

export default function PersonalTrainingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Personal Training", url: "/services/personal-training" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Personal Training"
          subtitle="One-on-One Training"
          description={`Transform your fitness with personalized training in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Why Choose Personal Training?
            </h2>
            <p className="text-muted-foreground">
              Our personal training sessions are designed to help you achieve
              your fitness goals faster and more effectively. Whether you're
              looking to lose weight, build muscle, improve athletic
              performance, or simply get in better shape, our certified
              trainers will create a customized program just for you.
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
            <h3 className="mb-4 text-xl font-semibold">Who It's For</h3>
            <p className="text-muted-foreground">
              Personal training is perfect for anyone who wants individualized
              attention, customized programming, and expert guidance. Whether
              you're a beginner just starting your fitness journey or an
              experienced athlete looking to break through plateaus, our trainers
              will help you reach your goals.
            </p>
          </div>
        </div>
      </div>

      <BookingSection />
    </>
  );
}


