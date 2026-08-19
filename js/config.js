/**
 * ARCHIVO DE CONFIGURACIÓN DEL PORTFOLIO
 * Modifica estos valores para personalizar tu sitio web.
 */

const PORTFOLIO_DATA = {
  // Datos Personales
  informacionPersonal: {
    nombre: "Tu Nombre Aquí",
    titulo: "Desarrollador Web Front-End",
    bio: "Apasionado por crear experiencias digitales accesibles, rápidas y visualmente atractivas. Especializado en JavaScript, HTML5 y CSS3.",
    email: "tu.email@ejemplo.com",
    ubicacion: "Madrid, España",
    disponibleParaTrabajar: true,
  },

  // Redes Sociales
  redesSociales: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    twitter: "https://twitter.com/tu-usuario",
  },

  // Habilidades (Skills)
  habilidades: [
    { nombre: "HTML5 / CSS3", nivel: "Avanzado" },
    { nombre: "JavaScript (ES6+)", nivel: "Avanzado" },
    { nombre: "Git & GitHub", nivel: "Intermedio" },
    { nombre: "Responsive Design", nivel: "Avanzado" },
    { nombre: "UI/UX & Accesibilidad", nivel: "Intermedio" },
  ],

  // Lista de Proyectos
  proyectos: [
    {
      titulo: "E-Commerce App",
      descripcion: "Tienda en línea completa con carrito de compras y pasarela de pago simulada.",
      tecnologias: ["HTML", "CSS", "JS"],
      enlaceDemo: "https://ejemplo.com",
      enlaceCodigo: "https://github.com/tu-usuario/proyecto-1",
      imagen: "img/proyectos/proyecto1.jpg",
    },
    {
      titulo: "Dashboard de Clima",
      descripcion: "Aplicación meteorológica que consume la API de OpenWeather.",
      tecnologias: ["JS", "API Rest", "CSS"],
      enlaceDemo: "https://ejemplo.com",
      enlaceCodigo: "https://github.com/tu-usuario/proyecto-2",
      imagen: "img/proyectos/proyecto2.jpg",
    },
  ],
};
