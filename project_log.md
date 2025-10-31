---

## 9. Notas de Desarrollo y Recomendaciones

*   **Optimización de Imágenes:** Durante el primer `push` a GitHub, se detectó que el archivo `hero-pagan-4.png` (52.18 MB) excede el tamaño recomendado por GitHub (50 MB). Aunque el archivo se subió correctamente, es una buena práctica optimizar las imágenes antes de subirlas al repositorio.
    *   **Recomendación:** Usar herramientas como **TinyPNG** o **Squoosh** para comprimir las imágenes de assets (fondos, monedas, etc.) antes de hacer `git add`. Esto mantendrá el repositorio ligero y rápido.