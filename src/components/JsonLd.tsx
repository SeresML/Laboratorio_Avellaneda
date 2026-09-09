import { site } from "@/lib/site";

/** Datos estructurados para Google (ficha local, teléfono, dirección). */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DiagnosticLab",
    name: site.name,
    url: site.url,
    logo: `${site.url}${site.logo}`,
    image: `${site.url}/images/og.png`,
    description: site.description,
    email: site.email,
    telephone: ["+54 11 3067-0949", "+54 11 3889-4437", "+54 11 4201-6829"],
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    hasMap: site.address.mapsUrl,
    sameAs: [site.social.facebook, site.social.instagram],
    // TODO: completar horarios reales de atención.
    // openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", ...], opens: "07:00", closes: "12:00" }],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
