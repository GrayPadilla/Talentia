import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { renderCatalog } from "../../js/app.js";

function Cursos() {
  useEffect(() => {
        renderCatalog();
  }, []);
  
  return (
    <>
      <Header />
      <main> 
      <section class="page-hero"> 
        <div class="container catalog-hero">
          <div class="catalog-hero-content">
            <p class="eyebrow"> 
              APRENDIZAJE PARA UN MEJOR <br /> MAÑANA 
            </p> 
            <p class="hero-subtitle">Todos los cursos</p> 
            <p class="hero-subtitle"> 
              Explora programas diseñados para potenciar tu desarrollo profesional. 
            </p>
          </div> 

          <div className="hero-center-badge">
            <span>Tu próximo paso</span>
            <span>empieza aquí</span>
          </div>

          <div class="image-panel"> 
            <div className="image-wrapper">
              <img 
              src="../assets/images/chica-cursos.png" 
              alt="Talentia" 
              class="image-panel-img"
              /> 
            </div>
            <div className="panel-text">
              <p>Más conocimiento.</p>
              <p>Más posibilidades.</p>
            </div>
          </div> 
        </div> 
        <div class="container filters"> 
          <input 
            data-search 
            type="text" 
            placeholder="Busca un curso, habilidad o tema..." 
          /> 
          <select data-category> 
            <option value="all"> Categoría </option> 
            <option> Gestión de Personas </option>
            <option> Marketing y Ventas </option> 
            <option> Datos y Tecnología </option> 
            <option> Salud y Seguridad </option> 
            <option> Finanzas</option> 
            <option> Gestión de Proyectos </option> 
            <option> Innovación </option> 
            <option> Ventas </option> 
            <option> Recursos Humanos </option>
            <option> Habilidades Blandas</option>
            <option> Productividad </option>
            <option> Calidad </option>
            <option> Transformación Digital </option>
          </select> 
  
          <select> 
            <option> Modalidad </option> 
            <option> Online </option> 
            <option> Presencial </option> 
          </select> 

          <select data-duration> 
 
            <option value="all"> 
              Duración 
            </option> 
 
            <option value="short"> 
              Hasta 20 horas 
            </option> 
 
            <option value="medium"> 
              21 a 28 horas 
            </option> 
 
            <option value="long"> 
              Más de 28 horas 
            </option> 
 
          </select> 

          <select> 
 
            <option> 
              Nivel 
            </option> 
 
            <option> 
              Básico 
            </option> 
 
            <option> 
              Intermedio 
            </option> 
 
          </select> 
 
        </div> 
 
      </section> 

      <section class="section"> 
 
        <div class="container"> 
 
          <div class="section-header"> 
 
            <p 
              class="section-subtitle" 
              data-result-count 
            > 
              13 cursos encontrados 
            </p> 
 
            <a href="cursos.html"> 
              Limpiar filtros 
            </a> 
 
          </div> 

          <div 
            class="catalog-grid" 
            data-catalog 
          ></div> 

          <div 
            class="catalog-pagination"
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
