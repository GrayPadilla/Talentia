import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { renderCatalog } from "../../js/app.js";

function Cursos() {
  useEffect(() => {
        renderCatalog();
  }, []);

  const clearFilters = () => {
    const search = document.querySelector("[data-search]");
    const category = document.querySelector("[data-category]");
    const modality = document.querySelector("[data-modality]");
    const duration = document.querySelector("[data-duration]");
    const level = document.querySelector("[data-level]");

    if (search) search.value = "";
    if (category) category.value = "all";
    if (modality) modality.selectedIndex = 0;
    if (duration) duration.value = "all";
    if (level) level.selectedIndex = 0;

    search?.dispatchEvent(new Event("input", { bubbles: true }));
  };

  return (
    <>
      <Header />
      <main>
      <section className="page-hero">
        <div className="container catalog-hero">
          <div className="catalog-hero-content">
            <p className="eyebrow">
              APRENDIZAJE PARA UN MEJOR <br /> MAÑANA
            </p>
            <h1 className="catalog-title">Todos los cursos</h1>
            <p className="catalog-description">
              Explora programas diseñados para potenciar tu desarrollo profesional.
            </p>
          </div>

          <div className="hero-center-badge">
            <span>Tu próximo paso</span>
            <span>empieza aquí</span>
          </div>

          <div className="image-panel">
            <img
              src="/assets/images/banner-cursos.png"
              alt="Estudiante de Talentia"
              className="image-panel-img"
            />
            <div className="panel-text">
              <p>Más conocimiento.</p>
              <p>Más posibilidades.</p>
            </div>
          </div>
        </div>
        <div className="container catalog-controls">
          <div className="filters">
            <div className="filter-search">
              <iconify-icon icon="lucide:search" aria-hidden="true"></iconify-icon>
              <input
                data-search
                type="search"
                aria-label="Buscar cursos"
                placeholder="Busca un curso, habilidad o tema..."
              />
            </div>

            <select data-category aria-label="Filtrar por categoría">
              <option value="all">Categoría</option>
              <option>Gestión de Personas</option>
              <option>Marketing y Ventas</option>
              <option>Datos y Tecnología</option>
              <option>Salud y Seguridad</option>
              <option>Finanzas</option>
              <option>Gestión de Proyectos</option>
              <option>Innovación</option>
              <option>Ventas</option>
              <option>Recursos Humanos</option>
              <option>Habilidades Blandas</option>
              <option>Productividad</option>
              <option>Calidad</option>
              <option>Transformación Digital</option>
            </select>

            <select data-modality aria-label="Filtrar por modalidad">
              <option>Modalidad</option>
              <option>Online</option>
              <option>Presencial</option>
            </select>

            <select data-duration aria-label="Filtrar por duración">
              <option value="all">Duración</option>
              <option value="short">Hasta 20 horas</option>
              <option value="medium">21 a 28 horas</option>
              <option value="long">Más de 28 horas</option>
            </select>

            <select data-level aria-label="Filtrar por nivel">
              <option>Nivel</option>
              <option>Básico</option>
              <option>Intermedio</option>
            </select>

            <button className="filters-clear" type="button" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>

          <div className="catalog-controls-meta">
            <p data-result-count>13 cursos encontrados</p>

            <label className="catalog-sort">
              <span>Ordenar por:</span>
              <select aria-label="Ordenar cursos">
                <option>Más relevantes</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="section catalog-section">
        <div className="container">
          <div
            className="catalog-grid"
            data-catalog
          ></div>

          <div
            className="catalog-pagination"
            data-pagination
          ></div>

        </div>

      </section>

    </main>

    <Footer />
    </>
  );
}

export default Cursos;
