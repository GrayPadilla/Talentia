const courses = [
  {
    id: "gestion-talento-humano",
    category: "Gestión de Personas",
    title: "Gestión de Talento Humano",
    description: "Atrae, desarrolla y retiene el mejor talento en las organizaciones.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "assets/course-talento.png"
  },
  {
    id: "marketing-digital-empresas",
    category: "Marketing y Ventas",
    title: "Marketing Digital para Empresas",
    description: "Estrategias y herramientas para hacer crecer tu negocio digital.",
    hours: 30,
    modality: "Online",
    level: "Básico",
    image: "assets/course-marketing.png"
  },
  {
    id: "business-intelligence",
    category: "Datos y Tecnología",
    title: "Business Intelligence",
    description: "Convierte datos en decisiones estratégicas para tu organización.",
    hours: 20,
    modality: "Online",
    level: "Intermedio",
    image: "assets/course-bi.png"
  },
  {
    id: "seguridad-salud-trabajo",
    category: "Salud y Seguridad",
    title: "Seguridad y Salud en el Trabajo",
    description: "Genera entornos laborales más seguros, saludables y productivos.",
    hours: 24,
    modality: "Online",
    level: "Básico",
    image: "assets/course-seguridad.png"
  },
  {
    id: "finanzas-no-financieros",
    category: "Finanzas",
    title: "Finanzas para No Financieros",
    description: "Comprende y aplica conceptos financieros clave en tu empresa.",
    hours: 24,
    modality: "Online",
    level: "Básico",
    image: "assets/course-finanzas.png"
  },
  {
    id: "gestion-proyectos-agiles",
    category: "Gestión de Proyectos",
    title: "Gestión de Proyectos con Metodologías Ágiles",
    description: "Planifica, ejecuta y lidera proyectos con enfoque práctico.",
    hours: 30,
    modality: "Online",
    level: "Intermedio",
    image: "assets/course-proyectos.png"
  },
  {
    id: "innovacion-design-thinking",
    category: "Innovación",
    title: "Innovación y Design Thinking",
    description: "Desarrolla soluciones creativas para los desafíos de tu negocio.",
    hours: 20,
    modality: "Online",
    level: "Básico",
    image: "assets/course-innovacion.png"
  },
  {
    id: "tecnicas-ventas-negociacion",
    category: "Ventas",
    title: "Técnicas de Ventas y Negociación",
    description: "Potencia tus habilidades comerciales y alcanza mejores resultados.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "assets/course-ventas.png"
  },
  {
    id: "seleccion-personal-competencias",
    category: "Recursos Humanos",
    title: "Selección de Personal por Competencias",
    description: "Aprende a identificar y seleccionar el talento ideal.",
    hours: 20,
    modality: "Online",
    level: "Intermedio",
    image: "assets/course-seleccion.png"
  }
];

function courseCard(course, compact = false) {
  return `
    <article class="course-card ${compact ? "catalog-card" : ""}">
      <div class="course-visual">
        <img src="${course.image}" alt="${course.title}" loading="lazy">
      </div>
      <div class="course-body">
        <span class="course-tag">${course.category}</span>
        <h3>${course.title}</h3>
        <p class="body">${course.description}</p>
        <p class="course-meta">${course.hours} horas · ${course.modality}</p>
        <a class="btn btn-primary" href="curso.html?id=${course.id}">Ver curso →</a>
      </div>
    </article>
  `;
}

function renderFeaturedCourses() {
  const container = document.querySelector("[data-featured-courses]");
  if (!container) return;
  container.innerHTML = courses.slice(0, 4).map((course) => courseCard(course)).join("");
}

renderFeaturedCourses();
