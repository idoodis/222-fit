import { SectionHeader } from "@/components/SectionHeader";
import { DEFAULT_CITY, ADDRESS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = generateMetadata({
  title: "About Us",
  description: `Learn about 222 Fit and our mission to help you achieve your fitness goals in ${DEFAULT_CITY}.`,
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="About 222 Fit"
          subtitle="Our Story"
          description={`Premium fitness training in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground">
              At 222 Fit, we believe that everyone deserves access to
              high-quality fitness training that delivers real results. Our
              mission is to help you transform your body and your life through
              personalized training, expert guidance, and unwavering support.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">What Sets Us Apart</h2>
            <p className="text-muted-foreground">
              We're not just another gym. We're a community of fitness
              professionals dedicated to your success. Our certified trainers
              bring years of experience and a passion for helping people achieve
              their goals. We combine proven training methods with personalized
              attention to ensure you get results.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Approach</h2>
            <p className="text-muted-foreground">
              Every client is unique, and so is every training program. We take
              the time to understand your goals, assess your current fitness
              level, and create a customized plan that works for you. Whether
              you're training one-on-one, in a group, or online, you'll receive
              the same level of expertise and care.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Location & Service Area</h2>
            <p className="mb-4 text-muted-foreground">
              We're located at <strong>{ADDRESS.full}</strong> in {DEFAULT_CITY}. We proudly serve {DEFAULT_CITY} and the surrounding areas. Our
              trainers are available for in-person sessions at our facility or
              at your preferred location. We also offer online training for
              clients who prefer to work out from home or while traveling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

