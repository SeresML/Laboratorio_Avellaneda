import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El sitio WordPress usaba URLs con barra final (/nosotros/). Se mantiene
  // para conservar el posicionamiento y los enlaces ya indexados.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
