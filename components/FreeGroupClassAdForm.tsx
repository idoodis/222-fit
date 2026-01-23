"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const freeClassSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  goal: z.string().min(5, "Please share a short fitness goal"),
  source: z.string().optional(),
  offer: z.string().optional(),
  companyWebsite: z.string().optional(),
});

type FreeClassFormData = z.infer<typeof freeClassSchema>;

function trackFreeClassLead() {
  if (typeof window === "undefined") {
    return;
  }

  const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") {
    return;
  }

  try {
    gtag("event", "free_group_class_lead", {
      source: "google_ads",
    });
  } catch (error) {
    // Fail silently if analytics isn't available.
  }
}

export function FreeGroupClassAdForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FreeClassFormData>({
    resolver: zodResolver(freeClassSchema),
    defaultValues: {
      source: "google_ads",
      offer: "complimentary_group_class",
      companyWebsite: "",
    },
  });

  const onSubmit = async (data: FreeClassFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/free-group-class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          email: data.email,
          phone: data.phone || undefined,
          goal: data.goal,
          source: data.source || "google_ads",
          offer: data.offer || "complimentary_group_class",
          companyWebsite: data.companyWebsite || undefined,
          pageUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit the form");
      }

      setIsSuccess(true);
      trackFreeClassLead();
      reset();
    } catch (error) {
      setErrorMessage(
        "Something went wrong. Please try again or email bri@222fit.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-primary/20 bg-background/70 p-6 shadow-lg">
      {isSuccess ? (
        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold">
            You’re all set! Bri will reach out shortly to confirm your
            complimentary group class.
          </p>
          <p className="text-sm text-muted-foreground">
            Already know your schedule?{" "}
            <a
              href="https://www.vagaro.com/222fit/memberships"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Book directly here
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            {...register("companyWebsite")}
            className="absolute opacity-0 pointer-events-none"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
            }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <input
            type="hidden"
            {...register("source")}
            defaultValue="google_ads"
          />
          <input
            type="hidden"
            {...register("offer")}
            defaultValue="complimentary_group_class"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="Your first name"
                className="mt-1"
                disabled={isSubmitting}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="you@email.com"
                className="mt-1"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="(224) 493-4062"
              className="mt-1"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="goal">
              Primary Fitness Goal <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="goal"
              {...register("goal")}
              placeholder="Tell us what you want to improve..."
              rows={3}
              className="mt-1"
              disabled={isSubmitting}
            />
            {errors.goal && (
              <p className="mt-1 text-sm text-destructive">
                {errors.goal.message}
              </p>
            )}
          </div>

          {errorMessage && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Claim Your Complimentary Class"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We’ll only use your info to confirm your class.
          </p>
        </form>
      )}
    </div>
  );
}
