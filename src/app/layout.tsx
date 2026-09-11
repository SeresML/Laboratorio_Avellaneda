import type { Metadata, Viewport } from "next";
import "@fontsource-variable/figtree";
import "./globals.css";

import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Análisis clínicos en Avellaneda`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  keywords: [
    "laboratorio de análisis clínicos",
    "análisis clínicos Avellaneda",
    "laboratorio Avellaneda",
    "estudios de ADN",
    "extracción a domicilio",
    "estudio prenatal no invasivo",
    "PAMI",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Análisis clínicos en Avellaneda`,
    description: site.tagline,
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4c81",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-WNDW5VW";
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es-AR">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#contenido" className="skip-link">
          Ir al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <JsonLd />
      </body>
    </html>
  );
}
