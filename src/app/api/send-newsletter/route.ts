import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST() {
  const { data: emails, error } = await supabase
    .from("newsletter")
    .select("email");

  if (error) {
    console.error("Error searching emails:", error);
    return NextResponse.json(
      { success: false, message: "Error searching emails." },
      { status: 500 }
    );
  }

  if (!emails || emails.length === 0) {
    return NextResponse.json(
      { success: false, message: "No emails found." },
      { status: 404 }
    );
  }

  const recipientList = emails.map((e) => e.email);

  try {
    const emailResponse = await resend.emails.send({
      from: "VisView Blog <noreply@seu-dominio.com>",
      to: recipientList,
      subject: "New post published on VisView!",
      html: `
        <h1>🎉 We have news on the blog!</h1>
        <p>A new post was recently published.</p>
        <p><a href="https://seublog.com/posts">Click here to check</a></p>
      `,
    });

    return NextResponse.json({ success: true, data: emailResponse });
  } catch (e: any) {
    console.error("Error sending email:", e);
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 500 }
    );
  }
}
