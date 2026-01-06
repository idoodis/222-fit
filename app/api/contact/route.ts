import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/lib/env";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  hp: z.string().optional(), // Honeypot field
});

// Extract first name from full name
function getFirstName(fullName: string): string {
  const trimmed = fullName.trim();
  if (!trimmed) return "there";
  
  const parts = trimmed.split(/\s+/);
  return parts[0] || "there";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check - if hp has any value, return success immediately
    if (body.hp && body.hp.trim().length > 0) {
      // Silently return success for bots - don't log or send emails
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate the request
    const validatedData = contactSchema.parse(body);

    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Rate limiting: 5 submissions per 10 minutes per IP
    const rateLimitResult = await checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

    if (!rateLimitResult.success) {
      console.log(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Check if Resend is configured
    if (!env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const firstName = getFirstName(validatedData.name);
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Send internal notification email to bri@222fit.com
    try {
      await resend.emails.send({
        from: "222 Fit <hello@send.222fit.com>",
        to: "bri@222fit.com",
        replyTo: validatedData.email,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small><strong>Submitted:</strong> ${timestamp}</small></p>
          <p><small><strong>IP Address:</strong> ${ip}</small></p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send internal notification email:", emailError);
      // Continue to send auto-reply even if internal email fails
    }

    // Send auto-reply confirmation email to submitter
    try {
      await resend.emails.send({
        from: "222 Fit <hello@send.222fit.com>",
        to: validatedData.email,
        subject: "We received your message 💪 — 222 Fit",
        html: `
          <p>Hi ${firstName},</p>
          
          <p>Thanks so much for reaching out to 222 Fit — I'm excited to connect with you!</p>
          
          <p>I've received your message and will personally review it as soon as possible. Whether you're looking to build strength, improve confidence, or create a sustainable fitness routine that fits your lifestyle, you're in the right place.</p>
          
          <p>If you're ready to take the next step, you can explore training options or book your consultation here:<br>
          <a href="https://www.vagaro.com/222fit/memberships">https://www.vagaro.com/222fit/memberships</a></p>
          
          <p>Otherwise, keep an eye on your inbox — you'll hear back from me shortly.</p>
          
          <p>Talk soon,<br>
          Bri<br>
          Founder & Coach, 222 Fit</p>
          
          <p><em>Transform your body. Transform your life.</em></p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send auto-reply email:", emailError);
      // Still return success if auto-reply fails (internal email was sent)
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.issues);
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
