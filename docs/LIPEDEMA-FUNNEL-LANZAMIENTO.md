# Funnel GHC Academy · Lipedema — checklist de lanzamiento

## Estado
- Página nueva: `/lipedema`. Actualmente solo en rama `feat/lipedema-funnel-preview-20261008`, sin modificar producción.
- Segmentación: `?perfil=consciente` para los anuncios a mujeres que ya buscan cómo entrenar/comer; `?perfil=descubre` para quienes todavía no conocen estas herramientas.
- Producto: ebook digital `Lipedema: que no decida por ti`, precio acordado de **33 €** (una única compra).
- Página pospago: `/lipedema/gracias?session_id=...`.
- Entrega protegida: `/api/lipedema/descargar` valida en Stripe el pago y crea URL temporal en un bucket privado de Supabase.
- No se ha creado ningún cobro activo: la API falla con 503 hasta configurar las credenciales y el producto real.
- Sin urgencias falsas, cifras de resultados inventadas ni promesas de curación.

## Variables necesarias en Vercel para habilitar ventas
- `STRIPE_SECRET_KEY`: clave secreta de la cuenta propia de cobros.
- `STRIPE_LIPEDEMA_PRICE_ID`: ID de un **Stripe Price** activo, pago único, **33,00 EUR**. La API vuelve a comprobar moneda e importe y rechaza otras cantidades.
- `NEXT_PUBLIC_SITE_URL`: `https://www.ghctraining.com` en producción; asignar URL real de la preview solo para pruebas aisladas.
- `NEXT_PUBLIC_SUPABASE_URL`: URL del proyecto de Supabase seleccionado.
- `SUPABASE_SERVICE_ROLE_KEY`: clave de servidor, nunca expuesta al cliente.
- `LIPEDEMA_SUPABASE_STORAGE_BUCKET`: bucket privado, sugerido `ghc-ebooks`.
- `LIPEDEMA_SUPABASE_STORAGE_PATH`: ruta **privada** de la versión final del PDF; por ejemplo `lipedema/GHC_Lipedema_Que_No_Decida_Por_Ti_FINAL.pdf`. No poner el PDF en `public/`.

Nota: la web actual tiene enlaces SumUp para otros productos. El flujo de este ebook utiliza Stripe con validación del pago y entrega privada; no reutiliza enlaces SumUp ajenos.

## Opcionales de contenido
- `NEXT_PUBLIC_LIPEDEMA_PRESENTACION_VIDEO_URL`: URL HTTPS del futuro vídeo de presentación de Alby. Mientras falte se muestra el espacio reservado.
- Imágenes aprobadas para producción: subir los estáticos ganadores sin modificarlos, y si se incorporan escenas de los vídeos, utilizar las piezas facilitadas por el usuario. No generar imágenes sin instrucción expresa.
- El ebook final debe confirmarse visualmente (imágenes incrustadas y composición) antes de cargarlo al bucket.

## Meta Ads · campaña y destinos
- Público 1 (ya sabe que entrenar y comer adecuadamente importa):
  `https://www.ghctraining.com/lipedema?perfil=consciente&utm_source=meta&utm_medium=paid_social&utm_campaign=lipedema&utm_content=perfil1_video`.
- Público 2 (descubrimiento):
  `https://www.ghctraining.com/lipedema?perfil=descubre&utm_source=meta&utm_medium=paid_social&utm_campaign=lipedema&utm_content=perfil2_video`.
- Para estáticos usar `perfil1_estatico` y `perfil2_estatico` en `utm_content`.
- El cliente calcula atributos UTM y se entregan al checkout como metadata; nunca acepta importes del cliente.
- `LipedemaLandingView` → evento Meta `ViewContent`.
- `LipedemaCheckoutStart` → `InitiateCheckout`, solo cuando se inicia checkout.
- Falta configurar el evento `Purchase` a partir de Stripe confirmado, evitando dobles conteos con CAPI / deduplicación por ID.

## Antes de publicar
1. Confirmar la portada/creativos definitivos y subir media web optimizada con permiso.
2. Grabar vídeo personal y asignar `NEXT_PUBLIC_LIPEDEMA_PRESENTACION_VIDEO_URL`.
3. Revisar que el PDF final sea exactamente el aprobado y cargarlo en Supabase Storage en un **bucket privado**.
4. Crear Stripe Product/Price fijo 33 EUR (modo prueba primero) y configurar secretos de entorno por separado.
5. Revisar los textos de aviso legal, privacidad, cookies y las condiciones de desistimiento para contenido digital en España; no activar tracking no esencial antes del consentimiento cuando aplique.
6. Establecer política y automatización de correo de acceso (Resend u otro proveedor) con manejo de reintentos. Por ahora, la entrega depende de la pantalla de gracias.
7. Ejecutar pago real o en test con importe 33 €, validación de regreso, descarga con URL firmada, enlace expirado y bloqueo de sesión no pagada.
8. Verificar mobile 360/390 px, Meta Pixel, atribución y envío de eventos, enlaces de compra, FAQs, y accesibilidad.
9. Aprobar PR y fusionar a `main` solo después del QA. Retirar `noindex` cuando la landing esté lista para indexarse.

## Consideraciones
- GHC Academy es marca educativa; la URL pertenece a GHC Training.
- El contenido educativo no es diagnóstico, tratamiento clínico ni plan individualizado.
- La web principal no se altera hasta la revisión y fusión de esta rama.
