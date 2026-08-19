/**
 * Main JavaScript File - Portfolio Template
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar datos desde config.js
  cargarInformacion();

  // 2. Control del Menú Móvil
  const btnMenu = document.getElementById("btn-menu");
  if (btnMenu) {
    btnMenu.addEventListener("click", toggleMenu);
  }

  const enlacesNav = document.querySelectorAll("#nav a");
  enlacesNav.forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
  });

  // 3. Envío del Formulario
  const formContacto = document.getElementById("form-contacto");
  if (formContacto) {
    formContacto.addEventListener("submit", manejarEnvioFormulario);
  }

  // 4. Inicializar animaciones de Scroll con IntersectionObserver
  inicializarAnimacionesScroll();
});

/* ==========================================
 * CARGA DE DATOS DINÁMICOS
 * ========================================== */
function cargarInformacion() {
  if (typeof PORTFOLIO_DATA === "undefined") return;

  const { personal, redes, skills, proyectos } = PORTFOLIO_DATA;

  // Inyectar datos en el HTML usando los atributos data-info
  const elNombre = document.querySelector("[data-info='nombre']");
  const elTitulo = document.querySelector("[data-info='titulo']");
  const elBio = document.querySelector("[data-info='bio']");

  if (elNombre) elNombre.textContent = personal.nombre;
  if (elTitulo) elTitulo.textContent = personal.titulo;
  if (elBio) elBio.textContent = personal.bio;

  // Inyectar Lista de Proyectos Dinámicamente
  const contenedorProyectos = document.getElementById("contenedor-proyectos");
  if (contenedorProyectos && proyectos) {
    contenedorProyectos.innerHTML = proyectos
      .map(
        (p) => `
      <article class="proyecto-card revelar">
        <img src="${p.imagen}" alt="${p.titulo}" loading="lazy">
        <div class="proyecto-info">
          <h3>${p.titulo}</h3>
          <p>${p.descripcion}</p>
          <div class="tags">
            ${p.tecnologias.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="links">
            <a href="${p.demo}" target="_blank" rel="noopener">Demo</a>
            <a href="${p.codigo}" target="_blank" rel="noopener">Código</a>
          </div>
        </div>
      </article>
    `,
      )
      .join("");
  }
}

/* ==========================================
 * NAVEGACIÓN Y MENÚ MÓVIL
 * ========================================== */
function toggleMenu() {
  const nav = document.getElementById("nav");
  const btnMenu = document.getElementById("btn-menu");
  if (!nav || !btnMenu) return;

  const isOpen = nav.classList.toggle("responsive");
  btnMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function cerrarMenu() {
  const nav = document.getElementById("nav");
  const btnMenu = document.getElementById("btn-menu");

  if (nav && nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    if (btnMenu) btnMenu.setAttribute("aria-expanded", "false");
  }
}

/* ==========================================
 * ANIMACIÓN DE ENTRADA AL HACER SCROLL
 * ========================================== */
function inicializarAnimacionesScroll() {
  const observador = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  const elementosAAnimar = document.querySelectorAll(".skill-card, .proyecto-card, .revelar");
  elementosAAnimar.forEach((el) => {
    el.classList.add("revelar");
    observador.observe(el);
  });
}

/* ==========================================
 * FORMULARIO DE CONTACTO
 * ========================================== */
function manejarEnvioFormulario(e) {
  e.preventDefault();

  const form = e.target;
  const mensajeExito = document.getElementById("mensaje-exito");
  const botonEnviar = form.querySelector(".btn-enviar");

  botonEnviar.disabled = true;
  botonEnviar.style.opacity = "0.6";

  setTimeout(() => {
    if (mensajeExito) mensajeExito.style.display = "flex";

    form.reset();

    botonEnviar.disabled = false;
    botonEnviar.style.opacity = "1";

    setTimeout(() => {
      if (mensajeExito) mensajeExito.style.display = "none";
    }, 6000);
  }, 800);
}
