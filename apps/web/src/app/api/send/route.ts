const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function GET() {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "onboarding@lastconnect.cc",
      to: ["kitravee.swk@gmail.com"],
      subject: "hello world",
      html: "<strong>it works!</strong>",
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }
}
