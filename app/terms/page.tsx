import { SectionHeader } from "@/components/SectionHeader";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Terms of Service",
  description: "Terms of service for 222 Fit",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeader title="Terms of Service" />
      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        <p className="text-muted-foreground">
          These terms of service will be updated with your specific terms.
          Please consult with a legal professional to ensure compliance with
          applicable laws.
        </p>
      </div>
    </div>
  );
}


