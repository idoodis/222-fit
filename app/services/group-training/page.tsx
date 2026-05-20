import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { DEFAULT_CITY } from "@/lib/constants";
import { FirstClassFreeCta } from "@/components/FirstClassFreeCta";
import { generateMetadata } from "@/lib/seo";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = generateMetadata({
  title: `Group Training Classes in ${DEFAULT_CITY}`,
  description: `Motivating group fitness classes in ${DEFAULT_CITY}. High-energy workouts for all fitness levels. Join a class today.`,
  path: "/services/group-training",
});

const benefits = [
  "Motivating group atmosphere",
  "Cost-effective training option",
  "Variety of class formats and intensities",
  "Suitable for all fitness levels",
  "Regular schedule with multiple class times",
  "Fun and engaging workout experience",
];

export default function GroupTrainingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Group Training", url: "/services/group-training" },
  ]);
  const firstClassFreeUrl = "/group-training-free-class";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <SectionHeader
          title="Group Training Classes"
          subtitle="Train Together"
          description={`High-energy group fitness classes in ${DEFAULT_CITY}`}
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Why Join Group Training?
            </h2>
            <p className="text-muted-foreground">
              Our group training classes combine the motivation of working out
              with others and the expertise of our certified trainers. These
              high-energy sessions are designed to push you to your limits
              while having fun and building community.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">What's Included</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">Class Formats</h3>
            <p className="text-muted-foreground">
              We offer a variety of group training formats including HIIT
              (High-Intensity Interval Training), strength training circuits,
              cardio conditioning, and functional fitness. Each class is
              designed to challenge you while accommodating different fitness
              levels.
            </p>
          </div>
        </div>
      </div>

      <section id="group-class-schedule" className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Group Class Schedule"
            subtitle="Current Schedule"
            description="A premium weekly lineup of coach-led group training classes."
          />
          <div className="mt-10 space-y-10">
            <div className="mx-auto max-w-4xl">
              <Image
                src="/images/group-class-schedule.jpeg"
                alt="222 Fit weekly group class schedule in Carol Stream — Lower Body, Upper Body + Core, Full Body, Mat Pilates, Power Hour, and virtual Stretch + Mobility"
                width={1545}
                height={1999}
                priority={false}
                sizes="(max-width: 768px) 100vw, 720px"
                className="h-auto w-full rounded-lg border border-primary/20 bg-background/40 object-contain shadow-lg"
              />
            </div>

            <p className="mx-auto max-w-3xl text-center text-muted-foreground">
              At 222 Fit, our group training classes are intentionally designed
              to deliver results while fostering accountability, confidence, and
              community. Every class is coach-led, scalable for all fitness
              levels, and structured to help you move better, feel stronger, and
              stay consistent.
            </p>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground">
              All group classes are held at 222 Fit in Carol Stream, IL. Our
              group training programs are designed for all fitness levels and
              led by experienced coaches.
            </p>

            <FirstClassFreeCta href={firstClassFreeUrl} />
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}


