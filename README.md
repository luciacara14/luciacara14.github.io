# Éclat Beauty Studio — portfolio

Web estática responsive para una profesional de estética y belleza. Incluye portada con composición 3D CSS, presentación, servicios, portfolio filtrable, detalle de cada trabajo, contacto y páginas legales de plantilla.

## Estructura

```text
eclat-beauty-portfolio/
├── index.html
├── aviso-legal.html
├── privacidad.html
├── css/
│   └── styles.css
└── js/
    ├── config.js
    └── main.js
```

## Personalización obligatoria antes de publicar

1. Edita `js/config.js`:
   - `businessName`
   - `whatsappNumber`: formato internacional, solo números (por ejemplo `34600111222`).
   - `instagramUrl` e `instagramHandle`
   - `location` y `hours`
2. Sustituye el nombre provisional Éclat Beauty Studio por el nombre real en los HTML.
3. En `js/main.js`, sustituye los proyectos de ejemplo por trabajos reales. Cada elemento contiene `category`, `title`, `subtitle`, `description`, `image` y `alt`.
4. Reemplaza las fotografías de demostración por imágenes propias con autorización de uso. Para producción, es recomendable descargarlas, optimizarlas a WebP/AVIF y alojarlas en el propio hosting.
5. Completa `aviso-legal.html` y `privacidad.html` con los datos y tratamientos reales. Solicita revisión legal antes de publicar.
6. Actualiza la URL canónica, Open Graph, teléfono, dirección y datos estructurados en `index.html` cuando tengas el dominio definitivo.

## Ejecutar en local

Abre `index.html` en un navegador o sirve la carpeta mediante un servidor estático:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Publicación

Se puede desplegar en cualquier hosting estático (IONOS, GitHub Pages, Netlify, Vercel o similar). Sube la carpeta completa manteniendo la estructura. Activa HTTPS en el dominio.

## Notas técnicas

- No requiere Node.js, base de datos ni proceso de compilación.
- Los filtros y el diálogo de proyectos funcionan en el navegador.
- Las imágenes de ejemplo se cargan desde Unsplash y las fuentes desde Google Fonts; sustituir por recursos propios mejora control, rendimiento y privacidad.
- No hay formulario que recoja datos personales ni cookies analíticas instaladas por este proyecto.
- La animación respeta `prefers-reduced-motion` y la interfaz incluye navegación por teclado y etiquetas accesibles.
- Las páginas legales son plantillas, no asesoramiento jurídico.
