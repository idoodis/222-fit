import { BookNowButton } from "@/components/BookNowButton";
import { SectionHeader } from "@/components/SectionHeader";

interface BookingSectionProps {
  title?: string;
  description?: string;
  embedCode?: string;
  className?: string;
}

export function BookingSection({
  title = "Ready to Start Your Fitness Journey?",
  description = "Book your session today and take the first step towards achieving your fitness goals.",
  embedCode,
  className,
}: BookingSectionProps) {
  return (
    <section className={`bg-secondary py-16 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            title={title}
            description={description}
            className="mb-8"
          />
          {embedCode ? (
            <div
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: embedCode }}
            />
          ) : (
            <div className="mt-8">
              <BookNowButton size="lg" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

