// Test endpoint to verify Resend is working
// Visit: http://localhost:3000/api/test-email

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/lib/env";

export async function GET() {
  try {
    // Check configuration
    if (!env.RESEND_API_KEY) {
      return NextResponse.json({
        success: false,
        error: "RESEND_API_KEY not configured",
        config: {
          hasApiKey: false,
          fromEmail: env.RESEND_FROM_EMAIL || "NOT SET",
          toEmail: env.RESEND_TO_EMAIL || "NOT SET",
        }
      }, { status: 500 });
    }

    if (!env.RESEND_FROM_EMAIL || !env.RESEND_TO_EMAIL) {
      return NextResponse.json({
        success: false,
        error: "Email addresses not configured",
        config: {
          hasApiKey: true,
          fromEmail: env.RESEND_FROM_EMAIL || "NOT SET",
          toEmail: env.RESEND_TO_EMAIL || "NOT SET",
        }
      }, { status: 500 });
    }

    // Try to send a test email
    const resend = new Resend(env.RESEND_API_KEY);
    
    console.log("Sending test email...");
    console.log("From:", env.RESEND_FROM_EMAIL);
    console.log("To:", env.RESEND_TO_EMAIL);

    const result = await resend.emails.send({
      from: `222 Fit <${env.RESEND_FROM_EMAIL}>`,
      to: env.RESEND_TO_EMAIL,
      subject: "Test Email from 222 Fit Contact Form",
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify Resend is working correctly.</p>
        <p><strong>From:</strong> ${env.RESEND_FROM_EMAIL}</p>
        <p><strong>To:</strong> ${env.RESEND_TO_EMAIL}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      emailResult: result,
      config: {
        hasApiKey: true,
        fromEmail: env.RESEND_FROM_EMAIL,
        toEmail: env.RESEND_TO_EMAIL,
      }
    });

  } catch (error: any) {
    console.error("Test email failed:", error);
    
    return NextResponse.json({
      success: false,
      error: "Failed to send test email",
      errorMessage: error?.message,
      errorType: error?.constructor?.name,
      errorDetails: error?.response?.data || error?.data,
      config: {
        hasApiKey: !!env.RESEND_API_KEY,
        fromEmail: env.RESEND_FROM_EMAIL || "NOT SET",
        toEmail: env.RESEND_TO_EMAIL || "NOT SET",
      }
    }, { status: 500 });
  }
}

