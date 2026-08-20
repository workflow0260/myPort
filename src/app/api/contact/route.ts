import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message, tierInterest } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid corporate email address." },
        { status: 400 }
      );
    }

    // In a production app, this would route to a CRM or dispatch an email via Resend/SendGrid
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Our enterprise solutions team will contact you within 2 business hours.",
        ticketId: `REQ-${Math.floor(100000 + Math.random() * 900000)}`,
        data: {
          name,
          email,
          company: company || "Undisclosed",
          tierInterest: tierInterest || "Enterprise",
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error submitting contact inquiry." },
      { status: 500 }
    );
  }
}
