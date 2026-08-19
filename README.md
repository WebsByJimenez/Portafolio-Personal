# 🚀 Developer Portfolio Template

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://WebsByJimenez.github.io/Portafolio-Personal/)

Una plantilla web moderna, ligera y completamente adaptable, diseñada para que cualquier desarrollador pueda crear su portfolio en cuestión de minutos.

Construida con **HTML5, CSS3 (Variables `:root`) y JavaScript Vanilla (ES6+)**, sin frameworks ni dependencias externas pesadas.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge)](./LICENSE)

---

## ✨ Características

- 🎨 **Fácil Personalización (`config.js`):** Modifica tus datos personales, redes y proyectos desde un solo archivo JS sin tocar el HTML.
- 📱 **100% Responsive Design:** Adaptado para smartphones, tablets y pantallas de escritorio.
- 🌙 **Estilo Dark Mode:** Paleta oscura profesional con acentos neón configurables.
- ⚡ **Rendimiento Máximo:** Sin dependencias externas. Carga ultra rápida a 60 FPS.
- 👁️ **IntersectionObserver:** Animaciones fluidas al hacer scroll.
- ♿ **Accesible (a11y):** Semántica limpia y atributos ARIA configurados para lectores de pantalla.

---

## 🛠️ Cómo Usar esta Plantilla

## 1. Clona o Descarga el Repositorio

```bash

git clone [https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPOSITORIO.git](https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPOSITORIO.git)

```

## 2. Personaliza tus Datos

Abre el archivo js/config.js y edita el objeto con tu información personal:

```bash
const PORTFOLIO_DATA = {
  personal: {
    nombre: "Tu Nombre",
    titulo: "Desarrollador Web Front-End",
    email: "tu@email.com",
  },
};

```

## 3. Cambia los Colores (Opcional)

Abre css/estilo.css y modifica las variables del bloque :root para adaptar la paleta a tu gusto:

```bash
:root {
--accent-color: #00f2fe; /_ Color neón principal _/
--bg-primary: #0a0e17; /_ Color de fondo _/
}

```

📂 Estructura del Proyecto

```bash
├── css/
│   └── estilo.css       # Estilos generales y variables de color (:root)
├── js/
│   ├── config.js        # Panel de configuración con tus datos
│   └── main.js          # Lógica de la interfaz e IntersectionObserver
├── img/                 # Carpeta para las imágenes de la plantilla
├── .gitignore           # Evita subir archivos basura o del sistema a Git
├── index.html           # Estructura principal
├── LICENSE              # Licencia MIT
└── README.md            # Documentación del proyecto
```

## 🚀 Instalación y Uso Local

No requiere la instalación de dependencias ni servidores externos. Únicamente clona el repositorio u obtén los archivos y abre index.html en cualquier navegador web moderno.

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

Desarrollado por WebsByJiménez.
