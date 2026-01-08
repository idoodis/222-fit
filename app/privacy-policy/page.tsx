import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for 222 Fit personal training in Carol Stream, IL.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated: January 8, 2026
          </p>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <p>
                At 222 Fit ("we," "our," or "us"), we respect your privacy and
                are committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, and safeguard your
                information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Information We Collect
              </h2>
              <p className="mb-3">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact Form:</strong> When you submit our contact
                  form, we collect your name, email address, phone number
                  (optional), and message.
                </li>
                <li>
                  <strong>Booking Inquiries:</strong> Information related to
                  scheduling consultations or training sessions.
                </li>
                <li>
                  <strong>Analytics:</strong> We may collect anonymous usage
                  data through analytics tools (such as Google Analytics) to
                  understand how visitors use our website. This includes
                  information like page views, time spent on pages, and general
                  location data (city/region level, not specific addresses).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Schedule consultations and training sessions</li>
                <li>Send you information about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Cookies and Analytics
              </h2>
              <p className="mb-3">
                Our website may use cookies and similar tracking technologies to
                enhance your experience. We use basic analytics tools to
                understand website traffic and usage patterns. These tools
                collect anonymous data and do not personally identify you.
              </p>
              <p>
                You can control cookies through your browser settings. However,
                disabling cookies may affect your ability to use certain features
                of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Information Sharing
              </h2>
              <p className="mb-3">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Service Providers:</strong> We may share information
                  with trusted service providers who assist us in operating our
                  website, conducting business, or serving our clients (such as
                  hosting providers, email services, and analytics platforms).
                  These providers are contractually obligated to protect your
                  information.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required by law or to protect our rights,
                  property, or safety.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. This
                includes retaining information to respond to your inquiries,
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Security
              </h2>
              <p>
                We implement reasonable security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately, and we will take
                steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Your Choices
              </h2>
              <p className="mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:bri@222fit.com"
                  className="text-primary hover:underline"
                >
                  bri@222fit.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-1">222 Fit</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bri@222fit.com"
                    className="text-primary hover:underline"
                  >
                    bri@222fit.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

