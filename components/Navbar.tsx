"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookNowButton } from "@/components/BookNowButton";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Results" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="222 Fit logo"
                width={400}
                height={120}
                className="h-24 md:h-32 w-auto"
                priority
                unoptimized
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <BookNowButton size="sm" />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-accent hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <BookNowButton size="sm" className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

