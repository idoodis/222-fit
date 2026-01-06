import { SectionHeader } from "@/components/SectionHeader";
import { BookNowButton } from "@/components/BookNowButton";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Thank You",
  description: "Thank you for contacting 222 Fit. We'll be in touch soon.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <SectionHeader
          title="Thank You!"
          description="We've received your message and will get back to you as soon as possible."
        />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <BookNowButton size="lg" />
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


