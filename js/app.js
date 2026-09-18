
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebase.js";


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

export async function renderFeaturedCourses() {

  const container =
    document.querySelector("[data-featured-courses]");

  if (!container) return;

  try {

    const snapshot =
      await getDocs(collection(db, "Cursos"));

    const firebaseCourses =
      snapshot.docs.map((documento) => ({
        id: documento.id,
        ...documento.data()
      }));


    /* MOSTRAR SOLO 4 CURSOS */

    const cursosDestacados =
      firebaseCourses.slice(0, 4);


    container.innerHTML =
      cursosDestacados
        .map((course) =>
          courseCard(course)
        )
        .join("");


    console.log(
      "Cursos destacados obtenidos desde Firebase:",
      cursosDestacados
    );


  } catch (error) {

    console.error(
      "Error al obtener cursos destacados:",
      error
    );

  }

}

/* =========================================================
   CATÁLOGO + FILTROS + PAGINACIÓN
   ========================================================= */

export async function renderCatalog() {

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
     OBTENER CURSOS DESDE FIREBASE
     ======================================================= */

  let firebaseCourses = [];

  try {

    const snapshot =
      await getDocs(collection(db, "Cursos"));

    firebaseCourses = snapshot.docs.map((documento) => ({
      id: documento.id,
      ...documento.data()
    }));

    console.log(
      "Cursos obtenidos desde Firebase:",
      firebaseCourses
    );

  } catch (error) {

    console.error(
      "Error al obtener cursos desde Firebase:",
      error
    );

    container.innerHTML =
      "<p>No se pudieron cargar los cursos.</p>";

    return;
  }


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

    const filtered =
      firebaseCourses.filter((course) => {

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
       OBTENER CURSOS DE LA PÁGINA ACTUAL
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