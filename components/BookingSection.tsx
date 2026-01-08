import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

