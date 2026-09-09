"use client";

import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

type Props = {
  title?: string;
  context?: string;
};

const inputClass =
  "w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[15px] text-[#333] placeholder:text-gray-400 focus:border-[#00bcd4] focus:outline-none transition-colors";

export default function ContactForm({ title = "Escribinos", context, showMap = true, darkVariant = false }: Props & { showMap?: boolean, darkVariant?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, context }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "No pudimos enviar el mensaje.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "No pudimos enviar el mensaje.");
    }
  }

  return (
    <div id="escribinos" className={showMap ? "grid lg:grid-cols-2 gap-10 lg:gap-16 items-start" : "w-full"}>
      {/* Columna Izquierda: Formulario */}
      <div>
        <h2 className={`font-bold mb-6 ${darkVariant ? "text-white text-[32px] sm:text-[40px]" : "text-[#333] text-[28px] sm:text-[32px]"}`}>
          {title}
        </h2>
        
        {status === "sent" ? (
          <div role="status" className="rounded-lg border border-green-200 bg-green-50 p-5 text-green-800">
            <p className="font-bold text-[16px]">¡Mensaje enviado con éxito!</p>
            <p className="mt-1 text-[15px]">Gracias por escribirnos. Te vamos a responder a la brevedad.</p>
            <button type="button" className="mt-4 text-[#00bcd4] hover:underline font-semibold" onClick={() => setStatus("idle")}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4" noValidate={false}>
            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <input
              name="nombre"
              type="text"
              required
              autoComplete="name"
              maxLength={120}
              placeholder="Nombre y Apellido"
              className={inputClass}
            />

            <input
              name="telefono"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              maxLength={40}
              placeholder="Teléfono"
              className={inputClass}
            />

            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={160}
              placeholder="Correo electrónico"
              className={inputClass}
            />

            <textarea
              name="mensaje"
              required
              rows={4}
              maxLength={3000}
              placeholder="Consulta"
              className={`${inputClass} resize-none`}
            />

            {status === "error" && (
              <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800 text-[14px]">
                <p className="font-semibold">{error}</p>
                <a
                  href={site.whatsapp.turnos.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-semibold underline"
                >
                  <FaWhatsapp aria-hidden="true" /> Escribinos por WhatsApp
                </a>
              </div>
            )}

            <div>
              <button 
                type="submit" 
                className="bg-[#0073b1] hover:bg-[#005f92] text-white text-[14px] font-bold py-2 px-6 rounded-md transition-colors mt-2" 
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Columna Derecha: Mapa */}
      {showMap && (
        <div className="w-full h-[400px] lg:h-[450px] shadow-sm bg-gray-200 mt-2 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.957790514068!2d-58.36836472403666!3d-34.68102377292671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3333333333333%3A0x123456789abcdef!2sSan%20Mart%C3%ADn%201221%2C%20Avellaneda!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Laboratorio Avellaneda"
          ></iframe>
        </div>
      )}
    </div>
  );
}
