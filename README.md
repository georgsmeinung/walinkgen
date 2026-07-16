# WhatsApp Link Generator

Generador Open Source de enlaces de WhatsApp en una **Single-File App**.

## Qué contiene este repositorio

Este repositorio contiene una aplicación web estática en un solo archivo:

- `index.html`: interfaz, estilos y lógica JavaScript para generar enlaces `wa.me`.
- `README.md`: documentación del proyecto.

## Funcionalidad actual

La app permite:

- Introducir un número de teléfono (con código de país, solo dígitos).
- (Opcional) Añadir un mensaje predefinido.
- Generar un enlace de WhatsApp válido (`https://wa.me/${cleanPhone}`).
- Copiar el enlace al portapapeles.
- Abrir/probar el enlace en una nueva pestaña.
- Precargar valores desde parámetros de URL (`phone` y `message`).

## Demo / pruebas

Puedes probar la app en:

- https://georgsmeinung.github.io/walinkgen

## Uso con parámetros de URL

La app soporta parámetros en la query string:

- `phone`: número de teléfono (se limpia para dejar solo dígitos).
- `message`: mensaje predefinido (opcional).

Ejemplos:

- https://georgsmeinung.github.io/walinkgen?phone=555123456
- https://georgsmeinung.github.io/walinkgen?phone=555123456&message=Hola%20Jorge

Si `phone` está presente y es válido, la app autogenera el enlace al cargar la página.

## Tecnologías

- **HTML5**
- **JavaScript (vanilla)**
- **Tailwind CSS vía CDN**

No requiere build, dependencias ni backend.

## Uso local

1. Clona el repositorio.
2. Abre `index.html` en tu navegador.
3. Escribe el teléfono y, si quieres, un mensaje.
4. Genera y copia el enlace.
