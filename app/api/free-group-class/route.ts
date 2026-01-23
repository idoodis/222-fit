import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const freeClassSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  goal: z.string().min(5, "Goal is required"),
  source: z.string().optional(),
  offer: z.string().optional(),
  companyWebsite: z.string().optional(),
  pageUrl: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (typeof body.companyWebsite === "string" && body.companyWebsite.trim()) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const validated = freeClassSchema.parse(body);

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "medium",
      timeStyle: "short",
    });
    const pageUrl = validated.pageUrl || request.headers.get("referer") || "";

    await resend.emails.send({
      from: `222 Fit <${process.env.RESEND_FROM_EMAIL}>`,
      to: "bri@222fit.com",
      replyTo: validated.email,
      subject: "New Google Ads Lead — Free Group Class",
      html: `
        <h2>New Google Ads Lead — Complimentary Group Class</h2>
        <p><strong>Name:</strong> ${validated.firstName}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        ${validated.phone ? `<p><strong>Phone:</strong> ${validated.phone}</p>` : ""}
        <p><strong>Goal:</strong> ${validated.goal.replace(/\n/g, "<br>")}</p>
        <p><strong>Source:</strong> Google Ads</p>
        ${pageUrl ? `<p><strong>Page URL:</strong> ${pageUrl}</p>` : ""}
        <hr>
        <p><small><strong>Submitted:</strong> ${timestamp}</small></p>
      `,
    });

    await resend.emails.send({
      from: `222 Fit <${process.env.RESEND_FROM_EMAIL}>`,
      to: validated.email,
      subject: "Thanks for reaching out — 222 Fit",
      html: `
        <p>Hi ${validated.firstName},</p>
        <p>Thanks for reaching out — Bri will contact you shortly to confirm your class.</p>
        <p>Talk soon,<br>Bri</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
