# Captura de Leads - Frontend

## Descripción
Este proyecto es el frontend de la aplicación "Captura de Leads", diseñado para complementar el backend desarrollado en Node.js, Express, y TypeScript. Construido con Astro y Tailwind CSS, este frontend es completamente responsivo y utiliza componentes modulares para facilitar el mantenimiento y la escalabilidad. Incluye un formulario en React para capturar leads (nombre y correo electrónico), que se integra con la API del backend para enviar datos de manera eficiente y segura.

El diseño está optimizado para dispositivos móviles, tabletas y escritorios, garantizando una experiencia de usuario consistente. Este frontend es ideal para proyectos de marketing o comerciales que requieren capturar información de leads de manera rápida y profesional.

## Tecnologías
- **Astro:** Framework para construir sitios rápidos y optimizados, utilizado para la estructura principal y el enrutamiento.
- **Tailwind CSS:** Framework de utilidad para estilos responsivos y personalizables.
- **React:** Utilizado específicamente para el formulario de captura de leads, aprovechando su reactividad y facilidad de integración.
- **Node.js:** Entorno necesario para el desarrollo y la instalación de dependencias.

## Funcionalidades
- **Formulario de captura de leads:**
  - Permite a los usuarios ingresar su nombre y correo electrónico.
  - Validación en el cliente para asegurar que los datos sean correctos antes de enviarlos al backend.
  - Integración con la API del backend (`POST /api/users/register`) para enviar los datos.
- **Diseño responsivo:**
  - Adaptado para dispositivos móviles, tabletas y escritorios, utilizando las utilidades de Tailwind CSS.
- **Componentes modulares:**
  - El frontend está organizado en componentes reutilizables (por ejemplo, formulario, encabezado, pie de página) para facilitar el mantenimiento.
- **Optimización de rendimiento:**
  - Astro genera páginas estáticas o híbridas (según la configuración), lo que mejora los tiempos de carga y el SEO.

## Pasos para instalar y ejecutar el proyecto
1. Clona este repositorio:
```
git clone https://github.com/juandejunin/galactic-gravity.git
```
2. Navega al directorio del proyecto:


3. Instala las dependencias:

```
npm install
```

4. Inicia el servidor de desarrollo:


5. Abre el navegador y navega a: http://localhost:4321
