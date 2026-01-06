"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { SERVICES } from "@/lib/constants";

const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  goal: z.string().min(1, "Please select a goal"),
  preferredService: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your name"
            className="mt-1"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
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
            placeholder="your@email.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="phone">
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="(555) 123-4567"
          className="mt-1"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="goal">
          What's your primary goal? <span className="text-destructive">*</span>
        </Label>
        <Select id="goal" {...register("goal")} className="mt-1">
          <option value="">Select a goal</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
          <option value="strength">Strength Building</option>
          <option value="endurance">Endurance</option>
          <option value="flexibility">Flexibility</option>
          <option value="general-fitness">General Fitness</option>
          <option value="sport-specific">Sport-Specific Training</option>
        </Select>
        {errors.goal && (
          <p className="mt-1 text-sm text-destructive">{errors.goal.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="preferredService">
          Preferred Service <span className="text-destructive">*</span>
        </Label>
        <Select
          id="preferredService"
          {...register("preferredService")}
          className="mt-1"
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </Select>
        {errors.preferredService && (
          <p className="mt-1 text-sm text-destructive">
            {errors.preferredService.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about yourself and your fitness goals..."
          rows={4}
          className="mt-1"
        />
      </div>

      {submitStatus && (
        <div
          className={`rounded-md p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}


