# Registro del Proyecto Ink & Steel Landing Page

Este documento sirve como un registro detallado de las acciones, decisiones y el estado actual del proyecto de la landing page de Ink & Steel. Su propósito es facilitar la transferencia de contexto entre sesiones de chat y asegurar un progreso eficiente.

---

## 1. Visión General del Proyecto

*   **Objetivo Principal:** Desarrollar y lanzar una landing page para "Ink & Steel" que sirva como embudo de ventas para packs de arte digital NSFW y suscripciones, con un enfoque en pagos cripto y Fanvue.
*   **Marca:** Ink & Steel.
*   **Producto:** "Unlocked Collections" (packs de personajes) y suscripciones a "La Forja".
*   **Estrategia de Entrega de Contenido:** Acceso a una "Página Privada" (Discord como MVP) tras la compra/suscripción, en lugar de descarga directa de archivos.
*   **Tecnologías de la Landing Page:** React, Vite, Tailwind CSS.

---

## 2. Estado Actual de la Landing Page

*   **Diseño General:** Completo y aprobado.
*   **Sección Hero:** Imagen de fondo `hero-pagan-final.jpeg` y texto bilingüe.
*   **Sección "Colección Actual":**
    *   Layout de dos columnas: Imágenes a la izquierda, detalles/pago a la derecha.
    *   Texto bilingüe.
*   **Sección "Galería":** Imágenes cargadas, texto bilingüe, título "Próximamente...".
*   **Sección "Suscripción":** Texto bilingüe.
*   **Sección "CTA Final":** Texto bilingüe.
*   **Internacionalización (i18n):**
    *   Configurada para inglés (por defecto) y español.
    *   Detección automática del idioma del navegador activada.
    *   Selector de idioma (banderas 🇬🇧/🇪🇸) en la sección Hero.
    *   **TODO:** Asegurar que todas las traducciones estén completas y correctas.

---

## 3. Estrategia de Pagos con Criptomonedas (Rediseño Actual)

*   **Objetivo:** Hacer la sección de pago más visual, atractiva e integrada con las imágenes del producto.
*   **Implementación:** Grid de opciones de criptomonedas, donde cada opción es un AccordionItem.
    *   **Trigger:** Moneda personalizada (grande) + icono oficial (pequeño) + nombre de la moneda.
    *   **Efecto Hover:** Borde neón verde al pasar el cursor.
    *   **Content:** QR (grande) + instrucciones + dirección de wallet + botón de copiar.
*   **Monedas y Redes a Soportar (Total 16 Opciones):**
    1.  **USDT (Polygon):** Dirección: `0x695353289c863184c44933145e3da4a8c2b64025`
    2.  **USDT (BSC):** Dirección: `0x695353289c863184c44933145e3da4a8c2b64025`
    3.  **USDC (Polygon):**
    4.  **USDC (BSC):**
    5.  **BCH (Native):**
    6.  **BCH (BSC):**
    7.  **DOGE (Native):**
    8.  **DOGE (BSC):**
    9.  **SHIB (BSC):**
    10. **SHIB (Solana):**
    11. **SOL (Native):**
    12. **ADA (Native):**
    13. **ADA (BSC):**
    14. **XRP (Native):**
    15. **XRP (BSC):**
    16. **XRP (Solana):**

---

## 4. Recursos Pendientes del Usuario

Para cada una de las 16 opciones de pago (excepto USDT Polygon/BSC que ya están en el código), necesito:

*   **Dirección de Wallet:** La dirección exacta para esa criptomoneda en esa red.
*   **QR Code:** El archivo de imagen del código QR correspondiente a esa dirección. (Guardar en `/home/zukunf/Documentos/InkAndSteel_Projects/InkAndSteel_Landing_Page/src/assets/` con nombres como `qr_usdc_polygon.png`, `qr_bch_native.png`, etc.)

---

## 5. Próximos Pasos (Agente)

1.  **Integración de Monedas (Paso a Paso):** Una vez que el usuario proporcione la información para cada opción de pago, la integraré en `CollectionSection.tsx` y en los archivos de traducción.
2.  **Traducciones Completas:** Asegurar que todas las nuevas instrucciones de pago estén traducidas en `en.json` y `es.json`.
3.  **Despliegue en Vercel:** Una vez que la landing page esté 100% completa y aprobada, procederemos con el despliegue a través de GitHub y Vercel.

---

## 6. Estrategia de Control de Versiones (Git/GitHub)

Para asegurar la estabilidad del proyecto y permitir la reversión de cambios si es necesario, utilizaremos el siguiente flujo de trabajo con Git y GitHub:

1.  **Inicialización y Conexión:** Conectar el proyecto local con el repositorio remoto de GitHub.
2.  **Commits Iterativos:** Después de cada conjunto de cambios funcionales y aprobados, se realizará un `commit` con un mensaje descriptivo.
3.  **Push a GitHub:** Los cambios se subirán al repositorio remoto para mantener una copia de seguridad y un historial de versiones.

---

## 7. Historial de Cambios Recientes

*   **[2025-10-31]** Implementación de la funcionalidad bilingüe (i18n) con `react-i18next`.
*   **[2025-10-31]** Rediseño de la sección de pago con criptomonedas a un sistema de acordeón visual.
*   **[2025-10-31]** Corrección de errores de `export default` en componentes que causaban página en blanco.
*   **[2025-10-31]** Documentación de prompts para generar imágenes de monedas personalizadas (USDT, LTC, SOL, ADA, XRP, USDC, DOGE, SHIB).
*   **[2025-10-31]** Decisión de proceder con la integración de pagos cripto uno por uno.

---

## 8. Instrucciones para Transferencia de Contexto (Nueva Instancia de Chat)

Para que una nueva instancia de chat obtenga el contexto esencial del proyecto, debe ejecutar el siguiente comando:

```python
print(default_api.read_many_files(paths=[
    "project_log.md",
    "src/App.tsx",
    "src/main.tsx",
    "src/components/CollectionSection.tsx",
    "src/components/HeroInkSteel.tsx",
    "src/components/GallerySection.tsx",
    "src/components/SubscriptionSection.tsx",
    "src/components/FinalCTA.tsx",
    "src/locales/en.json",
    "src/locales/es.json",
    "package.json"
]))
```
