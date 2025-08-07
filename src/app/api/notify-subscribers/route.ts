import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { postTitle, postUrl } = body;

  const { data: subscribers, error } = await supabase
    .from("newsletter")
    .select("email");

  if (error) {
    return Response.json({ success: false, error: error.message });
  }

  const emails = subscribers.map((sub) => sub.email);

  try {
    const { data } = await resend.emails.send({
      from: "VisView <onboarding@resend.dev>",
      to: emails,
      subject: `New post on VisView: ${postTitle}`,
      html: `<p>We just published a new post: <strong>${postTitle}</strong>.</p>
             <p><a href="${postUrl}" target="_blank">Click here to read now</a>.</p>`,
    });

    return Response.json({ success: true, sent: data });
  } catch (err) {
    let errorMessage = "An unknown error occurred.";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "string") {
      errorMessage = err;
    }

    return Response.json({ success: false, error: errorMessage });
  }
}
