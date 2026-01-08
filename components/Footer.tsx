import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, DEFAULT_CITY, ADDRESS, BOOKING_MEMBERSHIPS_URL } from "@/lib/constants";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { href: "/services/personal-training", label: "Personal Training" },
      { href: "/services/group-training", label: "Group Training" },
      { href: "/services/mat-pilates", label: "Mat Pilates" },
      { href: "/services/boxing-lessons", label: "Boxing Lessons" },
      { href: "/services/online-training", label: "Online Training" },
    ],
    company: [
      { href: "/about", label: "About Us" },
      { href: "/pricing", label: "Pricing" },
      { href: "/testimonials", label: "Results" },
      { href: "/faq", label: "FAQ" },
    ],
    legal: [
      { href: "/contact", label: "Contact" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  };

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt={`${SITE_NAME} Logo`}
                width={350}
                height={105}
                className="h-20 md:h-28 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Premium fitness training in {DEFAULT_CITY}. Transform your body,
              transform your life.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  {ADDRESS.full}
                </p>
              </div>
              <p className="text-xs text-muted-foreground pl-6">
                Personal Training in Carol Stream, IL
              </p>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+12244934062" 
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  (224) 493-4062
                </a>
              </div>
              <p className="text-xs text-muted-foreground pt-1">
                Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

