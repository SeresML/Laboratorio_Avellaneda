# Laboratorio Avellaneda — sitio web (Next.js)

Migración del sitio https://analisisclinicos.com.ar (WordPress + Elementor) a Next.js 15 para desplegar en Vercel.
Se mantienen las mismas URLs del sitio anterior (con barra final) para no perder posicionamiento en Google.

## Páginas

| URL | Archivo |
|---|---|
| `/` | `app/page.tsx` |
| `/nosotros/` | `app/nosotros/page.tsx` |
| `/servicios/` | `app/servicios/page.tsx` |
| `/analisis-clinicos/`, `/estudios-de-adn/`, `/microbiologia-y-virologia/`, `/estudio-prenatal-no-invasivo/`, `/extraccion-a-domicilio/` | `app/[slug]/page.tsx` (una plantilla, contenido en `lib/services.ts`) |
| `/contacto/` | `app/contacto/page.tsx` |
| `/api/contact` | Envío del formulario (`app/api/contact/route.ts`) |
| `/sitemap.xml`, `/robots.txt` | Generados automáticamente |

## Dónde se edita cada cosa (sin tocar componentes)

- **Teléfonos, mail, WhatsApp, dirección, redes:** `lib/site.ts`
- **Textos de los 5 servicios:** `lib/services.ts`
- **Preguntas frecuentes:** `lib/faq.ts`
- **Texto de Nosotros:** `app/nosotros/page.tsx` (array `paragraphs`)
- **Colores y tipografía:** bloque `@theme` en `app/globals.css`
- **Imágenes:** ver `public/images/README.md`

## Correr en local

```bash
npm install
cp .env.example .env.local   # completar las variables
npm run dev                  # http://localhost:3000
```

## Formulario "Escribinos"

Envía los mensajes por mail usando [Resend](https://resend.com) (plan gratuito alcanza).
Variables de entorno (en `.env.local` y en Vercel):

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de Resend |
| `CONTACT_TO_EMAIL` | Casilla que recibe las consultas |
| `CONTACT_FROM_EMAIL` | Remitente. Hasta verificar el dominio en Resend usar `onboarding@resend.dev` |

Si el formulario falla o no está configurado, el usuario ve un aviso con botón directo a WhatsApp: ninguna consulta se pierde.
Incluye campo oculto anti-spam (honeypot).

## Deploy en Vercel

1. Subir el repo a GitHub: `git init && git add . && git commit -m "Sitio Laboratorio Avellaneda" && git push`
2. En Vercel: **Add New Project** → importar el repo. Detecta Next.js solo; no hay que cambiar nada.
3. **Settings → Environment Variables:** cargar las 3 variables del formulario.
4. **Settings → Domains:** agregar `analisisclinicos.com.ar` y `www.analisisclinicos.com.ar`, y apuntar el DNS según indique Vercel.

## Checklist antes de dar de baja el WordPress

- [ ] Copiar imágenes y logos (`public/images/README.md`)
- [ ] Ajustar colores/tipografía al logo real (`app/globals.css`)
- [ ] Verificar dominio en Resend y probar el formulario en producción
- [ ] Verificar que las URLs viejas respondan 200 (son las mismas, no hacen falta redirecciones)
- [ ] Enviar el nuevo sitemap en Google Search Console
- [ ] Revisar `robots.txt` y metadatos con la extensión/pestaña de red del navegador

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, react-icons (Font Awesome, mismo set que usaba el sitio original), Poppins vía @fontsource.
