import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

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
  console.log("CONTACT API HIT");
  
  try {
    const body = await request.json();

    // Honeypot check - only early-return when hp contains a non-empty string
    if (typeof body.hp === "string" && body.hp.trim().length > 0) {
      // Silently return success for bots - don't log or send emails
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate the request
    const validatedData = contactSchema.parse(body);

    // Check if Resend is configured
    console.log("Has RESEND_API_KEY:", !!process.env.RESEND_API_KEY);
    console.log("RESEND_FROM_EMAIL:", process.env.RESEND_FROM_EMAIL);
    console.log("RESEND_TO_EMAIL:", process.env.RESEND_TO_EMAIL);

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
      console.error("RESEND_FROM_EMAIL or RESEND_TO_EMAIL not configured");
      return NextResponse.json(
        { error: "Email configuration incomplete" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const firstName = getFirstName(validatedData.name);
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Send internal notification email
    console.log("Sending internal email");
    try {
      const internalResult = await resend.emails.send({
        from: `222 Fit <${process.env.RESEND_FROM_EMAIL}>`,
        to: process.env.RESEND_TO_EMAIL!,
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
        `,
      });
      console.log("✅ Internal email sent successfully:", JSON.stringify(internalResult, null, 2));
    } catch (emailError: any) {
      console.error("❌ Failed to send internal notification email:");
      console.error("Error:", emailError?.message || emailError);
      console.error("Full error:", JSON.stringify(emailError, Object.getOwnPropertyNames(emailError), 2));
      // Continue to try auto-reply even if internal email fails
    }

    // Send auto-reply confirmation email to submitter
    console.log("Sending auto-reply");
    try {
      const autoReplyResult = await resend.emails.send({
        from: `222 Fit <${process.env.RESEND_FROM_EMAIL}>`,
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
      console.log("✅ Auto-reply email sent successfully:", JSON.stringify(autoReplyResult, null, 2));
    } catch (emailError: any) {
      console.error("❌ Failed to send auto-reply email:");
      console.error("Error:", emailError?.message || emailError);
      console.error("Full error:", JSON.stringify(emailError, Object.getOwnPropertyNames(emailError), 2));
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
