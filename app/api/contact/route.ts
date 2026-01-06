import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/lib/env";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  goal: z.string(),
  preferredService: z.string(),
  message: z.string().optional(),
  honeypot: z.string().max(0),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request
    const validatedData = contactSchema.parse(body);

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json(
        { error: "Bot detected" },
        { status: 400 }
      );
    }

    // Rate limiting (simple check - in production, use a proper rate limiter)
    // For now, we'll just process the request

    // Send email if Resend is configured
    if (env.RESEND_API_KEY && env.RESEND_FROM_EMAIL && env.RESEND_TO_EMAIL) {
      const resend = new Resend(env.RESEND_API_KEY);

      await resend.emails.send({
        from: env.RESEND_FROM_EMAIL,
        to: env.RESEND_TO_EMAIL,
        subject: `New Lead from ${validatedData.name} - ${validatedData.preferredService}`,
        html: `
          <h2>New Lead Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Goal:</strong> ${validatedData.goal}</p>
          <p><strong>Preferred Service:</strong> ${validatedData.preferredService}</p>
          ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ""}
        `,
      });
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}


