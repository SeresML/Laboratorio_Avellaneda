# Imágenes a copiar desde el WordPress

El sitio funciona sin estas imágenes (muestra reemplazos automáticos), pero para que quede igual al original hay que copiarlas
desde el panel de WordPress (Medios) o por FTP desde `wp-content/uploads/`, con estos nombres exactos:

| Archivo | Dónde se usa | Origen conocido |
|---|---|---|
| `logo.png` | Header, footer, imagen para redes | https://analisisclinicos.com.ar/wp-content/uploads/2025/07/1.png |
| `hero.jpg` | Imagen principal de la Home | Foto del hero actual |
| `nosotros.jpg` | Página Nosotros (imagen grande) | Imagen "WhatsApp 2025-07-04 15.03.35" |
| `nosotros-1.jpg`, `nosotros-2.jpg`, `nosotros-3.jpg` | Galería al pie de Nosotros | Las 3 fotos de la página Nosotros |
| `servicios/analisis-clinicos.jpg` | Página Análisis Clínicos | |
| `servicios/estudios-de-adn.jpg` | Página Estudios de ADN | |
| `servicios/microbiologia-y-virologia.jpg` | Página Microbiología | |
| `servicios/estudio-prenatal-no-invasivo.jpg` | Página Estudio Prenatal | |
| `servicios/extraccion-a-domicilio.jpg` | Página Extracción a Domicilio | |
| `obras-sociales/fatsa.png`, `galeno.png`, `ioma.png`, `osde.png`, `pami.png`, `sancor.png`, `swiss-medical.png` | Franja de obras sociales en la Home | Logos actuales del sitio |

Favicon: reemplazar `app/icon.svg` por `app/icon.png` (el actual es
https://analisisclinicos.com.ar/wp-content/uploads/2023/12/cropped-cropped-Diseno-sin-titulo-2-270x270.png).

Recomendación: fotos en JPG o WebP, máximo 1600 px de ancho; logos en PNG con fondo transparente.
