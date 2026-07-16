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
- Generar un enlace de WhatsApp.
- Copiar el enlace al portapapeles.
- Abrir/probar el enlace en una nueva pestaña.

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

## Nota

Actualmente la lógica de construcción del enlace en `index.html` usa este formato en el código:

- `https://wa.me{cleanPhone}`

Para que sea un enlace válido de `wa.me`, debería incluir la barra:

- `https://wa.me/${cleanPhone}`
