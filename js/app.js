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

function renderCatalog() {
  const container = document.querySelector("[data-catalog]");
  const search = document.querySelector("[data-search]");
  const category = document.querySelector("[data-category]");
  const duration = document.querySelector("[data-duration]");
  if (!container) return;

  function draw() {
    const query = (search?.value || "").toLowerCase().trim();
    const categoryValue = category?.value || "all";
    const durationValue = duration?.value || "all";

    const filtered = courses.filter((course) => {
      const matchesQuery = [course.title, course.description, course.category].join(" ").toLowerCase().includes(query);
      const matchesCategory = categoryValue === "all" || course.category === categoryValue;
      const matchesDuration =
        durationValue === "all" ||
        (durationValue === "short" && course.hours <= 20) ||
        (durationValue === "medium" && course.hours > 20 && course.hours <= 28) ||
        (durationValue === "long" && course.hours > 28);
      return matchesQuery && matchesCategory && matchesDuration;
    });

    container.innerHTML = filtered.map((course) => courseCard(course, true)).join("");
    document.querySelector("[data-result-count]").textContent = `${filtered.length} cursos encontrados`;
  }

  [search, category, duration].forEach((item) => item?.addEventListener("input", draw));
  draw();
}

function renderCourseDetail() {
  const title = document.querySelector("[data-course-title]");
  if (!title) return;

  const params = new URLSearchParams(window.location.search);
  const selected = courses.find((course) => course.id === params.get("id")) || courses[0];

  document.querySelectorAll("[data-course-title]").forEach((node) => {
    node.textContent = selected.title;
  });
  document.querySelector("[data-course-category]").textContent = selected.category.toUpperCase();
  document.querySelector("[data-course-description]").textContent =
    "Aprende a gestionar el talento y desarrollar estrategias efectivas para atraer, retener y potenciar el capital humano en las organizaciones.";
  document.querySelector("[data-course-hours]").textContent = `${selected.hours} horas`;
  document.querySelector("[data-course-modality]").textContent = selected.modality;
  document.querySelector("[data-course-level]").textContent = selected.level;
}

async function submitLead(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const message = form.querySelector("[data-message]");

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error("No se pudo registrar");
    form.reset();
    message.textContent = "Listo. Te contactaremos pronto.";
  } catch {
    const saved = JSON.parse(localStorage.getItem("talentiaLeads") || "[]");
    saved.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem("talentiaLeads", JSON.stringify(saved));
    form.reset();
    message.textContent = "Listo. Guardamos tu solicitud localmente para la demo.";
  }
}

function bindForms() {
  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitLead(form);
    });
  });
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
renderCatalog();
renderCourseDetail();
bindForms();