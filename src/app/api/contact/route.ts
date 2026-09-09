import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  nombre?: string;
  telefono?: string;
  email?: string;
  mensaje?: string;
  context?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: si un bot completó el campo oculto, respondemos OK sin enviar nada.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const nombre = clean(body.nombre, 120);
  const telefono = clean(body.telefono, 40);
  const email = clean(body.email, 160);
  const mensaje = clean(body.mensaje, 3000);
  const context = clean(body.context, 120);

  if (!nombre || !telefono || !email || !mensaje) {
    return NextResponse.json(
      { ok: false, error: "Completá todos los campos obligatorios." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Laboratorio Avellaneda <onboarding@resend.dev>";

  const subject = `Nueva consulta web${context ? ` — ${context}` : ""}: ${nombre}`;
  const text = [
    `Nombre: ${nombre}`,
    `Teléfono: ${telefono}`,
    `Email: ${email}`,
    context ? `Página: ${context}` : null,
    "",
    "Mensaje:",
    mensaje,
    "",
    `Enviado desde ${site.url}`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contacto] RESEND_API_KEY no configurada. Mensaje recibido:\n" + text);
      return NextResponse.json({ ok: true, mocked: true });
    }
    return NextResponse.json(
      { ok: false, error: "El formulario no está disponible en este momento." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      console.error("[contacto] Resend respondió", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "No pudimos enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacto] Error enviando email", err);
    return NextResponse.json({ ok: false, error: "No pudimos enviar el mensaje." }, { status: 502 });
  }
}
