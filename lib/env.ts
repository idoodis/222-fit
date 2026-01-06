import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_VAGARO_BOOKING_URL: z.string().url().optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  RESEND_TO_EMAIL: z.string().email().optional(),
});

const envVars = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  NEXT_PUBLIC_VAGARO_BOOKING_URL: process.env.NEXT_PUBLIC_VAGARO_BOOKING_URL,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
};

// Use safeParse to handle optional values gracefully
const result = envSchema.safeParse(envVars);

export const env = result.success
  ? result.data
  : {
      NEXT_PUBLIC_SITE_URL: envVars.NEXT_PUBLIC_SITE_URL,
      NEXT_PUBLIC_VAGARO_BOOKING_URL: undefined,
      NEXT_PUBLIC_GA_MEASUREMENT_ID: undefined,
      NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: undefined,
      RESEND_API_KEY: undefined,
      RESEND_FROM_EMAIL: undefined,
      RESEND_TO_EMAIL: undefined,
    };
