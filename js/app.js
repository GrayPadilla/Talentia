const courses = [
  {
    id: "gestion-talento-humano",
    category: "Gestión de Personas",
    title: "Gestión de Talento Humano",
    description: "Atrae, desarrolla y retiene el mejor talento en las organizaciones.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "assets/images/course-talento.png"
  },
  {
    id: "marketing-digital-empresas",
    category: "Marketing y Ventas",
    title: "Marketing Digital para Empresas",
    description: "Estrategias y herramientas para hacer crecer tu negocio digital.",
    hours: 30,
    modality: "Online",
    level: "Básico",
    image: "assets/images/course-marketing.png"
  },
  {
    id: "business-intelligence",
    category: "Datos y Tecnología",
    title: "Business Intelligence",
    description: "Convierte datos en decisiones estratégicas para tu organización.",
    hours: 20,
    modality: "Online",
    level: "Intermedio",
    image: "assets/images/course-bi.png"
  },
  {
    id: "seguridad-salud-trabajo",
    category: "Salud y Seguridad",
    title: "Seguridad y Salud en el Trabajo",
    description: "Genera entornos laborales más seguros, saludables y productivos.",
    hours: 24,
    modality: "Online",
    level: "Básico",
    image: "assets/images/course-seguridad.png"
  },
  {
    id: "finanzas-no-financieros",
    category: "Finanzas",
    title: "Finanzas para No Financieros",
    description: "Comprende y aplica conceptos financieros clave en tu empresa.",
    hours: 24,
    modality: "Online",
    level: "Básico",
    image: "../assets/images/course-finanzas.png"
  },
  {
    id: "gestion-proyectos-agiles",
    category: "Gestión de Proyectos",
    title: "Gestión de Proyectos con Metodologías Ágiles",
    description: "Planifica, ejecuta y lidera proyectos con enfoque práctico.",
    hours: 30,
    modality: "Online",
    level: "Intermedio",
    image: "../assets/images/course-proyectos.png"
  },
  {
    id: "innovacion-design-thinking",
    category: "Innovación",
    title: "Innovación y Design Thinking",
    description: "Desarrolla soluciones creativas para los desafíos de tu negocio.",
    hours: 20,
    modality: "Online",
    level: "Básico",
    image: "../assets/images/course-innovacion.png"
  },
  {
    id: "tecnicas-ventas-negociacion",
    category: "Ventas",
    title: "Técnicas de Ventas y Negociación",
    description: "Potencia tus habilidades comerciales y alcanza mejores resultados.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "../assets/images/course-ventas.png"
  },
  {
    id: "seleccion-personal-competencias",
    category: "Recursos Humanos",
    title: "Selección de Personal por Competencias",
    description: "Aprende a identificar y seleccionar el talento ideal.",
    hours: 20,
    modality: "Online",
    level: "Intermedio",
    image: "../assets/images/course-seleccion.png"
  }
];

function courseCard(course, compact = false) {
  return `
    <article class="course-card ${compact ? "catalog-card" : "featured-card"}">

      <div class="course-visual">
        <img src="${course.image}" alt="${course.title}" loading="lazy">
      </div>
      <div class="course-body">
        ${compact ? `<span class="course-tag">${course.category}</span> ` : ""}
        
        <h3>${course.title}</h3>
        ${compact ? `<p class="body">${course.description}</p>` : ""}

        <p class="course-meta">
          ${course.hours} horas · ${course.modality}
        </p>

        <a
          class="btn btn-primary course-action"
          href="curso.html?id=${course.id}"
        >
          Ver curso
        </a>

      </div>
    </article>
  `;
}

function renderFeaturedCourses() {
  const container = document.querySelector("[data-featured-courses]");
  if (!container) return;
  container.innerHTML = courses.slice(0, 4).map((course) => courseCard(course)).join("");
}

/* =========================================================
   MENÚ RESPONSIVE
   ========================================================= */

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNavigation = document.querySelector("#mobile-navigation");

if (menuToggle && mobileNavigation) {
  menuToggle.addEventListener("click", () => {

    const isOpen = mobileNavigation.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });


  mobileNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {

      mobileNavigation.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
      menuToggle.setAttribute(
        "aria-label",
        "Abrir menú"
      );

    });
  });


  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {

      mobileNavigation.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
      menuToggle.setAttribute(
        "aria-label",
        "Abrir menú"
      );
    }
  });
}

renderFeaturedCourses();