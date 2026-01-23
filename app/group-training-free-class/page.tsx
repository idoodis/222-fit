import { FreeGroupClassAdForm } from "@/components/FreeGroupClassAdForm";
import { DEFAULT_CITY } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Complimentary Group Training Class in Carol Stream | 222 Fit",
  description:
    "Try a complimentary group training class at 222 Fit. Coach-led sessions in Carol Stream designed for all fitness levels.",
  path: "/group-training-free-class",
});

export default function GroupTrainingFreeClassPage() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
            Complimentary First Class
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Try a Complimentary Group Training Class at 222 Fit
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Coach-led group training in {DEFAULT_CITY}. All levels welcome.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            ⭐ 5★ Google Reviews • Local Carol Stream Studio
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <FreeGroupClassAdForm />
        </div>

        <div className="mx-auto mt-10 grid gap-8 max-w-4xl md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-secondary/70 p-6">
            <h2 className="text-xl font-semibold">Why Group Training Works</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Coach-led sessions with real-time guidance</li>
              <li>Progressive workouts that build strength and confidence</li>
              <li>Community energy that keeps you consistent</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/60 bg-secondary/70 p-6">
            <h2 className="text-xl font-semibold">Schedule Preview</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Morning and evening classes during the week, a Saturday power
              session, plus a Sunday virtual foundations option. We’ll help you
              find the best fit during your follow-up.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-border/60 bg-secondary/70 p-6 md:p-8">
          <h2 className="text-xl font-semibold">What Clients Say</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
              “The group classes are always high energy and fun — you leave
              feeling stronger every time.” — Yadira B.
            </div>
            <div className="rounded-lg border border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
              “Supportive people, good vibes, and amazing trainers. Bri and
              Brandon genuinely care about your growth.” — Julyanna G.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
