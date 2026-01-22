import { SectionHeader } from "@/components/SectionHeader";
import { BookingSection } from "@/components/BookingSection";
import { ADDRESS, BOOKING_MEMBERSHIPS_URL, DEFAULT_CITY } from "@/lib/constants";
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
  const groupClassEvents = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Tone & Transform Group Training",
      description:
        "High-energy strength and conditioning sessions focused on building lean muscle, improving endurance, and creating sustainable habits.",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-01-27T05:00:00-06:00",
      eventSchedule: [
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Tuesday"],
          startTime: "05:00",
          scheduleTimezone: "America/Chicago",
        },
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Tuesday"],
          startTime: "06:10",
          scheduleTimezone: "America/Chicago",
        },
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Tuesday"],
          startTime: "18:40",
          scheduleTimezone: "America/Chicago",
        },
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Thursday"],
          startTime: "05:00",
          scheduleTimezone: "America/Chicago",
        },
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Thursday"],
          startTime: "06:10",
          scheduleTimezone: "America/Chicago",
        },
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Thursday"],
          startTime: "17:30",
          scheduleTimezone: "America/Chicago",
        },
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Thursday"],
          startTime: "18:40",
          scheduleTimezone: "America/Chicago",
        },
      ],
      location: {
        "@type": "Place",
        name: "222 Fit",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "222 Fit",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Mat Pilates",
      description:
        "A focused, low-impact class designed to improve core strength, posture, mobility, and body awareness.",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-01-27T17:30:00-06:00",
      eventSchedule: [
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Tuesday"],
          startTime: "17:30",
          scheduleTimezone: "America/Chicago",
        },
      ],
      location: {
        "@type": "Place",
        name: "222 Fit",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "222 Fit",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Power Hour",
      description:
        "A full-body workout combining strength, conditioning, and intensity for those who want maximum results in minimal time.",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-01-24T09:00:00-06:00",
      eventSchedule: [
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Saturday"],
          startTime: "09:00",
          scheduleTimezone: "America/Chicago",
        },
      ],
      location: {
        "@type": "Place",
        name: "222 Fit",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "222 Fit",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "Virtual Sunday Foundations",
      description:
        "A guided virtual session focused on movement fundamentals, mobility, and long-term progression — perfect for building consistency.",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      startDate: "2026-01-25T08:30:00-06:00",
      eventSchedule: [
        {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["https://schema.org/Sunday"],
          startTime: "08:30",
          scheduleTimezone: "America/Chicago",
        },
      ],
      location: {
        "@type": "Place",
        name: "222 Fit",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          addressRegion: ADDRESS.state,
          postalCode: ADDRESS.zip,
          addressCountry: "US",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "222 Fit",
      },
    },
  ];
  const firstClassFreeUrl = `${BOOKING_MEMBERSHIPS_URL}?source=first_class_free`;

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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(groupClassEvents),
            }}
          />
          <div className="mt-10 space-y-10">
            <div className="mx-auto max-w-4xl">
              <Image
                src="/images/group-class-schedule.png"
                alt="222 Fit group class schedule in Carol Stream including Tone & Transform, Mat Pilates, Power Hour, and Virtual Foundations"
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

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Tone & Transform</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  High-energy strength and conditioning sessions focused on
                  building lean muscle, improving endurance, and creating
                  sustainable habits.
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Tuesdays:</span>{" "}
                    5:00 AM, 6:10 AM, 6:40 PM (Coach Bri)
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Thursdays:</span>{" "}
                    5:00 AM, 6:10 AM (Coach Brandon), 5:30 PM, 6:40 PM (Coach Bri)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Mat Pilates</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A focused, low-impact class designed to improve core strength,
                  posture, mobility, and body awareness.
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Tuesdays:</span>{" "}
                    5:30 PM (Coach Bri)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Power Hour</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A full-body workout combining strength, conditioning, and
                  intensity for those who want maximum results in minimal time.
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Saturdays:</span>{" "}
                    9:00 AM (Coach Bri)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Virtual Sunday Foundations</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A guided virtual session focused on movement fundamentals,
                  mobility, and long-term progression — perfect for building
                  consistency.
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Sundays:</span>{" "}
                    8:30 AM (Coach Brandon)
                  </li>
                </ul>
              </div>
            </div>

            <FirstClassFreeCta href={firstClassFreeUrl} />
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}


