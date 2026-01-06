import { SectionHeader } from "@/components/SectionHeader";
import { LeadForm } from "@/components/LeadForm";
import { DEFAULT_CITY, ADDRESS } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = generateMetadata({
  title: "Contact Us",
  description: `Get in touch with 222 Fit in ${DEFAULT_CITY}. Book a session, ask questions, or learn more about our services.`,
  path: "/contact",
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Contact Us"
          subtitle="Get In Touch"
          description={`We'd love to hear from you. Send us a message and we'll respond as soon as possible.`}
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {ADDRESS.full}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">
                      <a href="tel:+1234567890" className="hover:underline">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:contact@222fit.com"
                        className="hover:underline"
                      >
                        contact@222fit.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold">Service Area</h3>
                <p className="text-muted-foreground">
                  We proudly serve {DEFAULT_CITY} and the surrounding areas.
                  Contact us to see if we service your location.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>
              <LeadForm />
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-semibold">Find Us</h2>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-border">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS.full)}&output=embed`}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="222 Fit location at 503 Thornhill Dr, Carol Stream, IL 60188"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {ADDRESS.full}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

