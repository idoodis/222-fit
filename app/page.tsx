import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BookNowButton } from "@/components/BookNowButton";
import { LeadForm } from "@/components/LeadForm";
import { ResultsGallery } from "@/components/ResultsGallery";
import { TrainerPhoto } from "@/components/TrainerPhoto";
import { TrustBar } from "@/components/TrustBar";
import { SERVICES, DEFAULT_CITY } from "@/lib/constants";
import { generateLocalBusinessSchema } from "@/lib/schema";
import {
  Dumbbell,
  Users,
  Activity,
  Box,
  Monitor,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const serviceIcons = {
  "personal-training": Dumbbell,
  "group-training": Users,
  "mat-pilates": Activity,
  "boxing-lessons": Box,
  "online-training": Monitor,
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Lost 30 lbs",
    content:
      "222 Fit transformed my life. The personal training sessions are intense but so rewarding. I've never felt stronger!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Marathon Runner",
    content:
      "The group training classes keep me motivated. The trainers are knowledgeable and push you to be your best.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Pilates Enthusiast",
    content:
      "Mat Pilates at 222 Fit has improved my flexibility and core strength dramatically. Highly recommend!",
    rating: 5,
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Book Your Session",
    description:
      "Choose your preferred service and book a session through our easy online booking system.",
  },
  {
    step: "2",
    title: "Meet Your Trainer",
    description:
      "Get to know your trainer and discuss your fitness goals during your first session.",
  },
  {
    step: "3",
    title: "Transform Your Body",
    description:
      "Follow your personalized training plan and watch as you achieve your fitness goals.",
  },
];

export const metadata: Metadata = {
  title: "Personal Training in Carol Stream, IL | 222 Fit",
  description: "Premium personal training in Carol Stream, IL. One-on-one training, small group classes, and online coaching designed for sustainable results. Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.",
};

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/3 py-20 md:py-32">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-4xl max-h-4xl">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              className="object-contain opacity-[0.085] brightness-110 contrast-90 blur-[2px]"
              style={{
                filter: 'brightness(1.1) contrast(0.9) blur(2px)',
              }}
              sizes="(max-width: 768px) 100vw, 80vw"
              unoptimized
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/25 to-background/40 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl relative z-10">
              Transform Your Body, Transform Your Life
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl relative z-10">
              Premium personal training in Carol Stream, IL. One-on-one training, small group classes, and online coaching designed for sustainable results.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center relative z-10">
              <Link
                href="/start"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Start Here
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-transparent px-8 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <TrustBar />
          </div>
        </div>
      </section>

      {/* Meet the Trainer Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Trainer Photo */}
              <TrainerPhoto />

              {/* Trainer Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold md:text-4xl">Meet the Trainer</h2>
                  <div className="mt-4 space-y-2">
                    <p className="text-lg font-semibold text-primary">
                      Certified Personal Trainer & Group Fitness Instructor
                    </p>
                    <p className="text-muted-foreground">
                      Bachelor's Degree in Exercise Science
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 italic">
                      Serving Carol Stream, Wheaton, Glen Ellyn, and surrounding areas.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over 8 years of experience in personal training and group fitness, 
                    Briana Orozco is passionate about helping people build a sustainable, 
                    confident relationship with exercise. Her coaching philosophy is rooted in 
                    a balanced approach to fitness—one that values consistency, structure, 
                    self-care, and a healthy relationship with food, while still allowing room 
                    to enjoy life.
                  </p>
                  <p>
                    She believes fitness should enhance your lifestyle, not control it. Every 
                    program is tailored to meet clients where they are, ensuring they feel 
                    supported, heard, and guided throughout their journey. Her goal is not just 
                    physical transformation, but long-term success built on confidence, education, 
                    and self-development.
                  </p>
                  <p>
                    What she loves most about fitness is the community it creates—the lifelong 
                    relationships, personal growth beyond the gym, and the powerful, life-changing 
                    transformations that happen along the way.
                  </p>
                  <p>
                    Outside of training, she enjoys traveling, competing in HYROX races, running, 
                    lifting, boxing, and discovering new coffee shops.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-transparent px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary"
                  >
                    Train With Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Personal Training Services in Carol Stream"
            subtitle="Our Services"
            description="Comprehensive fitness solutions tailored to your needs"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
              return (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  href={`/services/${service.slug}`}
                  icon={Icon && <Icon className="h-8 w-8" />}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="How It Works"
            subtitle="Simple Process"
            description="Get started on your fitness journey in three easy steps"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Success Stories"
            subtitle="Testimonials"
            description="See what our clients have achieved"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="text-sm font-medium text-primary hover:underline"
            >
              View all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Results Gallery"
            subtitle="Real Results"
            description="See the transformations our clients have achieved"
          />
          <div className="mt-12">
            {/* Add your result images to public/results/ folder */}
            {/* Name them: result-1.png, result-2.png, result-3.png, etc. */}
            {/* Supported formats: .jpg, .jpeg, .png, .webp */}
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
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="FAQ"
            description="Common questions about our services"
          />
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Teaser */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <SectionHeader
              title="Get Started Today"
              subtitle="Contact Us"
              description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            />
            <div className="mt-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
