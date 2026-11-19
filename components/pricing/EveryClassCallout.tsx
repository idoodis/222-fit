import { Info, Layers, LayoutGrid, Shuffle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import styles from "./pricing.module.css";

const BENEFITS = [
  {
    icon: LayoutGrid,
    title: "Access to all class types",
    text: "Use your pack on any class on the 222 FIT schedule.",
  },
  {
    icon: Shuffle,
    title: "Mix and match workouts",
    text: "Switch it up from week to week, no plan change needed.",
  },
  {
    icon: Layers,
    title: "One package, many ways to train",
    text: "Explore different workouts and find what works for you.",
  },
];

/** Informational only: not a purchasable package (no price, no CTA). */
export function EveryClassCallout() {
  return (
    <section aria-labelledby="every-class-heading" className={styles.callout}>
      <div className={styles.calloutGlow} aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
        <Reveal>
          <p className={styles.calloutEyebrow}>
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Every Pack, Every Class
          </p>
          <h2 id="every-class-heading" className={styles.calloutTitle}>
            One Membership.{" "}
            <span className={styles.calloutTitleAccent}>Every Class.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            No matter which pack you choose, your classes can be used across
            any of our class offerings at 222 FIT. Enjoy the flexibility to
            explore different workouts and find what works best for you.
          </p>
        </Reveal>

        <ul className="grid gap-3 sm:gap-4">
          {BENEFITS.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 90} className={styles.benefit}>
                <span className={styles.benefitIcon} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className={styles.benefitTitle}>{title}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {text}
                  </span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.calloutNote}>
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>
          This is about class <em>types</em>, not class count. The Standard and
          Premium Packs keep their weekly class allowance. Use those classes on
          any class you like.
        </span>
      </p>
    </section>
  );
}
