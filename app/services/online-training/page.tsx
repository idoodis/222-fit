import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata = generateMetadata({
  title: `Online Training in ${DEFAULT_CITY}`,
  description: `Virtual fitness coaching from home or gym in ${DEFAULT_CITY}. Online personal training and group classes. Train anywhere, anytime.`,
  path: "/services/online-training",
});

const benefits = [
  "Train from the comfort of your home or gym",
  "Flexible scheduling to fit your lifestyle",
  "Personalized workout plans and guidance",
  "Regular check-ins and progress tracking",
  "Access to video library of exercises",
  "Cost-effective training option",
];

export default function OnlineTrainingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Online Training", url: "/services/online-training" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Online Training"
          subtitle="Train Anywhere"
          description={`Virtual fitness coaching from ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Why Choose Online Training?
            </h2>
            <p className="text-muted-foreground">
              Our online training programs bring professional fitness coaching
              directly to you, whether you're at home, traveling, or prefer to
              work out on your own schedule. With live virtual sessions,
              personalized workout plans, and ongoing support, you'll get the
              guidance you need to achieve your goals.
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
            <h3 className="mb-4 text-xl font-semibold">How It Works</h3>
            <p className="text-muted-foreground">
              Our online training includes live one-on-one or small group
              sessions via video call, customized workout plans delivered
              through our app, regular progress check-ins, form corrections and
              technique guidance, and access to our exercise video library. All
              you need is a device with a camera and internet connection.
            </p>
          </div>
        </div>
      </div>

      <BookingSection />
    </>
  );
}


