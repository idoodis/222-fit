import { SectionHeader } from "@/components/SectionHeader";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for 222 Fit",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <SectionHeader title="Privacy Policy" />
      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        <p className="text-muted-foreground">
          This privacy policy will be updated with your specific privacy
          practices. Please consult with a legal professional to ensure
          compliance with applicable laws.
        </p>
      </div>
    </div>
  );
}


