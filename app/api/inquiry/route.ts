import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, companyName, email, product, country, volume, incoterm, phone, message } = body;

    // Log the inquiry (in production, use Resend SDK)
    console.log("New Trade Inquiry:", {
      fullName,
      companyName,
      email,
      phone,
      country,
      product,
      volume,
      incoterm,
      message,
    });

    // TODO: Integrate Resend SDK when API key is available
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Yaa Mucaad <noreply@yaamucaad.com>',
    //   to: process.env.CONTACT_EMAIL!,
    //   replyTo: email,
    //   subject: `New Trade Inquiry — ${product} — ${country}`,
    //   html: `...formatted HTML...`,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry error:", error);
    return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
  }
}
