"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { navigation, services, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú móvil al navegar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Evita el scroll del fondo con el menú móvil abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const serviceIsActive = services.some((s) => pathname.startsWith(`/${s.slug}`));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#f0f8ff]">
      <div className="container-site flex h-[100px] items-center justify-between gap-6">
        <Link href="/" className="inline-flex" aria-label={`${site.name} — inicio`}>
          <Image
            src="/images/logo-microscopio.png"
            alt="Laboratorio Avellaneda"
            width={240}
            height={80}
            priority
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const active =
                isActive(pathname, item.href) || (item.children && serviceIsActive);
              return (
                <li key={item.href} className="group relative flex items-center h-[90px]">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-[13px] tracking-wider font-semibold uppercase transition-colors hover:text-[#0ba5e9] h-full ${
                      active ? "text-[#0ba5e9] border-b-[3px] border-[#0ba5e9]" : "text-[#4a5568] border-b-[3px] border-transparent"
                    }`}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  >
                    {item.label}
                    {item.children && (
                      <svg
                        aria-hidden="true"
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mt-px"
                      >
                        <path d="M5 8l5 5 5-5" />
                      </svg>
                    )}
                  </Link>

                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-50 min-w-[280px] rounded-b-xl border border-line bg-white p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}/`}
                            className={`block rounded-lg px-4 py-2 hover:bg-[#f0f8ff] ${
                              pathname.startsWith(`/${s.slug}`) ? "text-[#0ba5e9]" : "text-ink"
                            }`}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0ba5e9] text-[#0ba5e9]"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[90px] z-40 overflow-y-auto bg-white lg:hidden"
      >
        <nav className="container-site py-6" aria-label="Principal (móvil)">
          <ul className="flex flex-col divide-y divide-line text-lg">
            {navigation.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  className={`block py-3 font-semibold uppercase ${
                    isActive(pathname, item.href) ? "text-[#0ba5e9]" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-4 flex flex-col border-l-2 border-[#0ba5e9]">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}/`}
                          className={`block py-2.5 pl-4 text-base ${
                            pathname.startsWith(`/${s.slug}`) ? "text-[#0ba5e9]" : "text-muted"
                          }`}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a
            href={site.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8 w-full"
          >
            <FaWhatsapp aria-hidden="true" className="text-xl" />
            {site.cta.label} por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
