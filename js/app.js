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
    image: "assets/images/seguridad.png"
  },
  {
    id: "finanzas-no-financieros",
    category: "Finanzas",
    title: "Finanzas para No Financieros",
    description: "Comprende y aplica conceptos financieros clave en tu empresa.",
    hours: 24,
    modality: "Online",
    level: "Básico",
    image: "/assets/images/finanzas.png"
  },
  {
    id: "gestion-proyectos-agiles",
    category: "Gestión de Proyectos",
    title: "Gestión de Proyectos con Metodologías Ágiles",
    description: "Planifica, ejecuta y lidera proyectos con enfoque práctico.",
    hours: 30,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/gestion-proyectos.png"
  },
  {
    id: "innovacion-design-thinking",
    category: "Innovación",
    title: "Innovación y Design Thinking",
    description: "Desarrolla soluciones creativas para los desafíos de tu negocio.",
    hours: 20,
    modality: "Online",
    level: "Básico",
    image: "/assets/images/innovacion.png"
  },
  {
    id: "tecnicas-ventas-negociacion",
    category: "Ventas",
    title: "Técnicas de Ventas y Negociación",
    description: "Potencia tus habilidades comerciales y alcanza mejores resultados.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/tecnicas-ventas.png"
  },
  {
    id: "seleccion-personal-competencias",
    category: "Recursos Humanos",
    title: "Selección de Personal por Competencias",
    description: "Aprende a identificar y seleccionar el talento ideal.",
    hours: 20,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/seleccion-personal.png"
  },
  {
    id: "liderazgo-comunicacion",
    category: "Habilidades Blandas",
    title: "Liderazgo y Comunicación",
    description: "Inspira, comunica y genera equipos de alto desempeño.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/liderazgo.png"
  },

  {
    id: "excel-empresarial",
    category: "Productividad",
    title: "Excel Empresarial",
    description: "Domina Excel y lleva tu productividad al siguiente nivel.",
    hours: 18,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/excel.png"
  },

  {
    id: "gestion-calidad",
    category: "Calidad",
    title: "Gestión de la Calidad",
    description: "Implementa sistemas de calidad para mejorar procesos y resultados.",
    hours: 24,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/gestion-calidad.png"
  },

  {
    id: "transformacion-digital",
    category: "Transformación Digital",
    title: "Transformación Digital en las Organizaciones",
    description: "Impulsa el cambio y adapta tu empresa a la era digital.",
    hours: 20,
    modality: "Online",
    level: "Intermedio",
    image: "/assets/images/transformacion-digital.png"
  }
];

/* =========================================================
   TARJETAS DE CURSOS
   ========================================================= */

function courseCard(course, compact = false) {

  return `
    <article class="course-card ${compact ? "catalog-card" : "featured-card"}">

      <div class="course-visual">
        <img src="${course.image}" alt="${course.title}" loading="lazy">
      </div>

      <div class="course-body">

        ${compact ? `<span class="course-tag">${course.category}</span>` : ""}

        <h3>${course.title}</h3>

        ${compact ? `<p class="body">${course.description}</p>` : ""}

        <p class="course-meta">
          ${course.hours} horas · ${course.modality}
        </p>

        <a
          class="btn btn-primary course-action"
          href="/curso/${course.id}"
        >
          Ver curso
        </a>

      </div>

    </article>
  `;
}


/* =========================================================
   CURSOS DESTACADOS
   ========================================================= */

export function renderFeaturedCourses() {

  const container =
    document.querySelector("[data-featured-courses]");

  if (!container) return;

  container.innerHTML = courses
    .slice(0, 4)
    .map((course) => courseCard(course))
    .join("");
}


/* =========================================================
   CATÁLOGO + FILTROS + PAGINACIÓN
   ========================================================= */

export function renderCatalog() {

  const container =
    document.querySelector("[data-catalog]");

  const search =
    document.querySelector("[data-search]");

  const category =
    document.querySelector("[data-category]");

  const duration =
    document.querySelector("[data-duration]");

  const pagination =
    document.querySelector("[data-pagination]");

  if (!container) return;


  /* =======================================================
     CONFIGURACIÓN DE PAGINACIÓN
     ======================================================= */

  const coursesPerPage = 9;

  let currentPage = 1;


  /* =======================================================
     DIBUJAR CURSOS
     ======================================================= */

  function draw() {

    const query =
      (search?.value || "")
        .toLowerCase()
        .trim();

    const categoryValue =
      category?.value || "all";

    const durationValue =
      duration?.value || "all";


    /* =====================================================
       FILTRAR CURSOS
       ===================================================== */

    const filtered = courses.filter((course) => {

      const matchesQuery = [
        course.title,
        course.description,
        course.category
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);


      const matchesCategory =
        categoryValue === "all" ||
        course.category === categoryValue;


      const matchesDuration =

        durationValue === "all" ||

        (
          durationValue === "short" &&
          course.hours <= 20
        ) ||

        (
          durationValue === "medium" &&
          course.hours > 20 &&
          course.hours <= 28
        ) ||

        (
          durationValue === "long" &&
          course.hours > 28
        );


      return (
        matchesQuery &&
        matchesCategory &&
        matchesDuration
      );

    });


    /* =====================================================
       TOTAL DE PÁGINAS
       ===================================================== */

    const totalPages =
      Math.ceil(filtered.length / coursesPerPage);


    /* =====================================================
       CONTROL DE PÁGINA ACTUAL
       ===================================================== */

    if (currentPage > totalPages) {

      currentPage =
        Math.max(totalPages, 1);

    }


    /* =====================================================
       OBTENER LOS CURSOS DE LA PÁGINA ACTUAL
       ===================================================== */

    const start =
      (currentPage - 1) * coursesPerPage;

    const end =
      start + coursesPerPage;


    const coursesToShow =
      filtered.slice(start, end);


    /* =====================================================
       MOSTRAR LAS TARJETAS
       ===================================================== */

    container.innerHTML =
      coursesToShow
        .map((course) =>
          courseCard(course, true)
        )
        .join("");


    /* =====================================================
       ACTUALIZAR CONTADOR
       ===================================================== */

    const resultCount =
      document.querySelector("[data-result-count]");


    if (resultCount) {

      resultCount.textContent =
        `${filtered.length} cursos encontrados`;

    }


    /* =====================================================
       CREAR PAGINACIÓN
       ===================================================== */

    if (pagination) {

      pagination.innerHTML = "";


      /* BOTONES 1, 2, 3... */

      for (
        let page = 1;
        page <= totalPages;
        page++
      ) {

        const button =
          document.createElement("button");


        button.type = "button";

        button.textContent = page;


        /* Página seleccionada */

        if (page === currentPage) {

          button.classList.add("active");

        }


        /* Al hacer clic */

        button.addEventListener(
          "click",
          () => {

            currentPage = page;

            draw();

            container.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }
        );


        pagination.appendChild(button);

      }


      /* ===================================================
         BOTÓN SIGUIENTE ›
         =================================================== */

      if (currentPage < totalPages) {

        const nextButton =
          document.createElement("button");


        nextButton.type = "button";

        nextButton.textContent = "›";


        nextButton.addEventListener(
          "click",
          () => {

            currentPage++;

            draw();

            container.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }
        );


        pagination.appendChild(nextButton);

      }

    }

  }


  /* =======================================================
     EVENTOS DE LOS FILTROS
     ======================================================= */

  [search, category, duration]
    .forEach((item) => {

      item?.addEventListener(
        "input",
        () => {

          /*
            Cuando se utiliza un filtro,
            regresamos automáticamente
            a la página 1.
          */

          currentPage = 1;

          draw();

        }
      );

    });


  /* Primera carga */

  draw();

}


/* =========================================================
   DETALLE DEL CURSO
   ========================================================= */

export function renderCourseDetail() {

  const title =
    document.querySelector("[data-course-title]");

  if (!title) return;


  const pathParts =
    window.location.pathname
      .split("/")
      .filter(Boolean);

  const courseId =
    pathParts[pathParts.length - 1];

  const selected =
    courses.find(
      (course) => course.id === courseId
    ) || courses[0];


  document
    .querySelectorAll("[data-course-title]")
    .forEach((node) => {
      node.textContent = selected.title;
    });


  document.querySelector(
    "[data-course-category]"
  ).textContent =
    selected.category.toUpperCase();


  document.querySelector(
    "[data-course-description]"
  ).textContent =
    selected.description;


  document.querySelector(
    "[data-course-hours]"
  ).textContent =
    `${selected.hours} horas`;


  document.querySelector(
    "[data-course-modality]"
  ).textContent =
    selected.modality;


  document.querySelector(
    "[data-course-level]"
  ).textContent =
    selected.level;

  const categoryInfo =
    document.querySelector(
      "[data-course-category-info]"
    );

  if (categoryInfo) {
    categoryInfo.textContent =
      selected.category;
  }

  const image =
    document.querySelector(
      "[data-course-image]"
    );

  if (image) {
    image.src = selected.image;
    image.alt =
      `Presentación del curso ${selected.title}`;
  }

}


/* =========================================================
   FORMULARIO
   ========================================================= */

async function submitLead(form) {

  const data =
    Object.fromEntries(
      new FormData(form).entries()
    );


  const message =
    form.querySelector("[data-message]");


  try {

    const response =
      await fetch("/api/leads", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(data)

      });


    if (!response.ok)
      throw new Error(
        "No se pudo registrar"
      );


    form.reset();

    message.textContent =
      "Listo. Te contactaremos pronto.";


  } catch {

    const saved =
      JSON.parse(
        localStorage.getItem(
          "talentiaLeads"
        ) || "[]"
      );


    saved.push({

      ...data,

      createdAt:
        new Date().toISOString()

    });


    localStorage.setItem(
      "talentiaLeads",
      JSON.stringify(saved)
    );


    form.reset();


    message.textContent =
      "Listo. Guardamos tu solicitud localmente para la demo.";

  }

}


/* =========================================================
   FORMULARIOS
   ========================================================= */

export function bindForms() {

  document
    .querySelectorAll("[data-lead-form]")
    .forEach((form) => {

      form.addEventListener(
        "submit",
        (event) => {

          event.preventDefault();

          submitLead(form);

        }
      );

    });

}


/* =========================================================
   MENÚ RESPONSIVE
   ========================================================= */

const menuToggle =
  document.querySelector("[data-menu-toggle]");

const mobileNavigation =
  document.querySelector("#mobile-navigation");


if (menuToggle && mobileNavigation) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mobileNavigation.classList.toggle(
          "open"
        );


      menuToggle.classList.toggle(
        "active",
        isOpen
      );


      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Cerrar menú"
          : "Abrir menú"
      );

    }
  );


  mobileNavigation
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          mobileNavigation
            .classList.remove("open");


          menuToggle
            .classList.remove("active");


          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );


          menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
          );

        }
      );

    });


  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 860) {

        mobileNavigation
          .classList.remove("open");


        menuToggle
          .classList.remove("active");


        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );


        menuToggle.setAttribute(
          "aria-label",
          "Abrir menú"
        );

      }

    }
  );

}