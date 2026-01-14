import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ResultsGallery } from "@/components/ResultsGallery";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { facebookReviews } from "@/lib/facebook-reviews";

export const metadata = generateMetadata({
  title: "Client Results & Testimonials | 222 Fit Carol Stream, IL",
  description: `See real results from our clients in Carol Stream, IL. Read testimonials and success stories from 222 Fit members. View transformation photos and Facebook reviews from clients in Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.`,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Testimonials", url: "/testimonials" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Client Results & Testimonials"
          subtitle="Success Stories"
          description={`Real results from real clients in ${DEFAULT_CITY}`}
        />

        {/* Facebook Reviews Carousel Section */}
        {facebookReviews.length > 0 && (
          <div className="mt-12">
            <div className="mb-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">Facebook Reviews</h3>
              <p className="text-muted-foreground">
                See what our clients are saying on{" "}
                <a
                  href="https://www.facebook.com/100082665914539/reviews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Facebook
                </a>
              </p>
            </div>
            <div className="mx-auto max-w-4xl">
              <TestimonialCarousel
                testimonials={facebookReviews}
                autoRotate={true}
                rotateInterval={5000}
              />
            </div>
            <div className="mt-6 flex justify-center">
              <GoogleReviewsBadge />
            </div>
          </div>
        )}

        {/* Results Gallery */}
        <div className="mt-12">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">Results Gallery</h3>
            <p className="text-muted-foreground">
              See the transformations our clients have achieved
            </p>
          </div>
          <ResultsGallery
            images={[
              "/results/result-1.png",
              "/results/result-2.png",
              "/results/result-3.png",
              "/results/result-4.png",
              "/results/result-5.png",
              "/results/result-6.png",
            ]}
          />
        </div>

        {/* Facebook Reviews Embed Option */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            View all reviews on our Facebook page
          </p>
          <a
            href="https://www.facebook.com/100082665914539/reviews/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-transparent px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary"
          >
            View All Facebook Reviews
          </a>
        </div>
      </div>
    </>
  );
}

