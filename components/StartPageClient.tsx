"use client";

import { useState } from "react";
import Link from "next/link";
import { BOOKING_MEMBERSHIPS_URL } from "@/lib/constants";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Select } from "@/components/ui/select";

export function StartPageClient() {
  const [goal, setGoal] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");

  const buildBookingUrl = () => {
    const params = new URLSearchParams();
    if (goal) params.append("goal", goal);
    if (experience) params.append("experience", experience);
    if (availability) params.append("availability", availability);
    const queryString = params.toString();
    return queryString ? `${BOOKING_MEMBERSHIPS_URL}?${queryString}` : BOOKING_MEMBERSHIPS_URL;
  };

  const handleScheduleClick = () => {
    // TODO: Add analytics tracking
    // gtag('event', 'click', { event_category: 'Booking', event_label: 'Schedule Free Consultation' });
    window.open(buildBookingUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            {/* Left Column: What to Expect */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Quick 5–10 minute consult</p>
                      <p className="text-sm text-muted-foreground">
                        We'll understand your goals and answer any questions you have.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Personalized plan recommendation</p>
                      <p className="text-sm text-muted-foreground">
                        We'll recommend the best plan for your schedule and fitness level.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Clear next steps</p>
                      <p className="text-sm text-muted-foreground">
                        You'll leave with a clear next step and a training plan tailored to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Start Card */}
            <div className="relative">
              <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Quick Start</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      What's your primary goal?
                    </label>
                    <Select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full"
                    >
                      <option value="">Select your goal</option>
                      <option value="strength">Strength</option>
                      <option value="fat-loss">Fat Loss</option>
                      <option value="performance">Performance</option>
                      <option value="confidence">Confidence</option>
                      <option value="general-fitness">General Fitness</option>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      What's your experience level?
                    </label>
                    <Select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      When are you typically available?
                    </label>
                    <Select
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      className="w-full"
                    >
                      <option value="">Select availability</option>
                      <option value="mornings">Mornings</option>
                      <option value="midday">Midday</option>
                      <option value="evenings">Evenings</option>
                      <option value="weekends">Weekends</option>
                    </Select>
                  </div>

                  <button
                    onClick={handleScheduleClick}
                    className="w-full inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <p className="text-center">
                    <Link
                      href="/contact"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Have questions? Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

