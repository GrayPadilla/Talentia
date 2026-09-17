import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { renderCourseDetail } from "../../js/app.js";

function DetalleCurso() {
  useEffect(() => {
        renderCourseDetail();
  }, []);

  return (
    <>
      <Header />

      <main>
      <div class="course-breadcrumb">
        <div class="container">Inicio › Cursos › <span data-course-title>Gestión de Talento Humano</span></div>
      </div>

      <section class="detail-hero">
        <div class="container detail-grid">
          <div class="course-cover">
            <img src="/assets/images/course-talento.png" alt="Presentación del curso Gestión de Talento Humano" />
          </div>
          <div class="course-intro">
            <p class="eyebrow" data-course-category>Gestión de Personas</p>
            <h1 data-course-title>Gestión de Talento Humano</h1>
            <p data-course-description>Aprende a gestionar el talento y desarrollar estrategias efectivas para atraer, retener y potenciar el capital humano en las organizaciones.</p>
            <div class="course-rating" aria-label="Calificación 4.8 de 5">
              <span class="rating-stars">★★★★★</span>
              <span>4.8 (320 valoraciones)</span>
            </div>
            <div class="course-badges">
              <span>
                <iconify-icon class="course-badge-icon" icon="mdi:clock-outline"></iconify-icon>
                <strong data-course-hours>24 horas</strong>
              </span>

              <span><iconify-icon class="course-badge-icon" icon="mdi:laptop"></iconify-icon>
                <strong data-course-modality>Online</strong>
              </span>

              <span>
                <iconify-icon class="course-badge-icon" icon="mdi:signal-cellular-3"> </iconify-icon>
                <strong>Nivel <span data-course-level>Intermedio</span>
                </strong>
              </span>

              <span>
                <iconify-icon class="course-badge-icon" icon="mdi:certificate-outline"> </iconify-icon>
                <strong>Certificado</strong>
              </span>
            </div>

            <a class="btn btn-primary" href="#contacto">Solicitar más información</a>
          </div>
        </div>
      </section>

      <section class="course-detail-section">
        <div class="container detail-layout">
          <div class="detail-main">
            <article class="course-description">
              <h2>Descripción del curso</h2>
              <p>Este curso brinda una visión integral de la gestión del talento humano, abarcando estrategias, herramientas y buenas prácticas para el reclutamiento, desarrollo, evaluación y retención del talento en las organizaciones. A través de un enfoque práctico, aprenderás a aplicar metodologías actuales que te permitirán impulsar el bienestar y productividad de los equipos.</p>
              <div class="audience-card">
              <img src="/assets/images/icon/meta-icon.svg" alt="" />
                <div>
                  <h3>Dirigido a</h3>
                  <p>Profesionales, estudiantes y personas interesadas en desarrollarse en el área de gestión del talento humano, recursos humanos y liderazgo organizacional.</p>
                </div>
              </div>
            </article>

            <article class="learning-section">
              <h2>¿Qué aprenderás?</h2>
              <ul class="learning-grid">
                <li>Aplicar estrategias de atracción y selección del talento.</li>
                <li>Implementar buenas prácticas de clima y cultura organizacional.</li>
                <li>Diseñar planes de desarrollo y evaluación del desempeño.</li>
                <li>Utilizar herramientas digitales de gestión de talento.</li>
                <li>Gestionar equipos de alto rendimiento.</li>
                <li>Desarrollar habilidades de liderazgo y comunicación.</li>
              </ul>
            </article>

            <article class="modules-section">
              <h2>Contenido del curso</h2>
              <div class="module-list">
                <div class="module-row"><span><strong>01</strong>Módulo 1: Introducción a la gestión del talento humano</span><span><b aria-hidden="true">◷</b> 3 horas <i></i> 4 clases</span></div>
                <div class="module-row"><span><strong>02</strong>Módulo 2: Reclutamiento y selección de personal</span><span><b aria-hidden="true">◷</b> 5 horas <i></i> 6 clases</span></div>
                <div class="module-row"><span><strong>03</strong>Módulo 3: Evaluación del desempeño</span><span><b aria-hidden="true">◷</b> 4 horas <i></i> 5 clases</span></div>
                <div class="module-row"><span><strong>04</strong>Módulo 4: Desarrollo y retención del talento</span><span><b aria-hidden="true">◷</b> 6 horas <i></i> 6 clases</span></div>
                <div class="module-row"><span><strong>05</strong>Módulo 5: Liderazgo y gestión de equipos</span><span><b aria-hidden="true">◷</b> 5 horas <i></i> 6 clases</span></div>
                <div class="module-row"><span><strong>06</strong>Módulo 6: Proyecto final</span><span><b aria-hidden="true">◷</b> 2 horas <i></i> 1 clase</span></div>
              </div>
            </article>
          </div>

          <aside class="sidebar">
            <article class="info-card">
              <h2>Información del curso</h2>
              <div class="info-list">
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:clock-outline"></iconify-icon>Duración</span><strong data-course-hours>24 horas</strong></div>
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:laptop"></iconify-icon>Modalidad</span><strong data-course-modality>Online</strong></div>
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:signal-cellular-3"></iconify-icon>Nivel</span><strong data-course-level>Intermedio</strong></div>
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:certificate-outline"></iconify-icon>Certificación</span><strong>Sí</strong></div>
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:translate"></iconify-icon>Idioma</span><strong>Español</strong></div>
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:view-grid-outline"></iconify-icon>Categoría</span><strong data-course-category-info>Gestión Empresarial</strong></div>
                <div class="info-item"><span><iconify-icon class="course-info-icon" icon="mdi:history"></iconify-icon>Última actualización</span><strong>Enero 2026</strong></div>
              </div>
            </article>
            <article class="certificate-card">
              <img src="../assets/images/icon/certificado-icon.svg" alt="" />
              <div>
                <h2>Certificado digital</h2>
                <p>Al finalizar el curso recibirás un certificado emitido por Talentia.</p>
              </div>
            </article>
          </aside>
        </div>

        <div class="container instructor-section">
          <h2>Docente del curso</h2>
          <article class="instructor-card">
            <img src="../assets/images/instructor-carlos-mendoza.png" alt="Mg. Carlos Mendoza" />
            <div class="instructor-profile">
              <h3>Mg. Carlos Mendoza</h3>
              <span>Especialista en Gestión del Talento Humano</span>
              <p>Magíster en Recursos Humanos con más de 10 años de experiencia en gestión del talento y desarrollo organizacional.</p>
            </div>
            <div class="instructor-experience">
              <h3>Experiencia destacada</h3>
              <ul>
                <li>Consultor en desarrollo organizacional</li>
                <li>Ex Gerente de RRHH en empresas líderes</li>
                <li>Docente en programas de posgrado</li>
                <li>Speaker en conferencias de talento humano</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section class="contact-section" id="contacto">
        <div class="container">
          <div class="contact-header">
            <h2>Conecta con Talentia</h2>
            <div class="contact-underline"></div>
          </div>

          <div class="forms-grid">
            <article class="form-card company-card">
              <div class="form-card-header">
                <div class="form-icon">
                  <iconify-icon icon="lucide:building-2"></iconify-icon>
                </div>

                <div>
                  <h3>¿Tu empresa necesita<br />capacitar a su equipo?</h3>
                  <p>
                    Programas de formación a medida para potenciar
                    el talento de tu organización.
                  </p>
                </div>
              </div>

              <div class="form-content">
                <form data-lead-form>
                  <input name="ruc" type="text" placeholder="RUC de la empresa"/>
                  <input name="empresa" type="text" placeholder="Nombre de la empresa"/>
                  <input name="contacto" type="text" placeholder="Nombre de contacto"/>
                  <input name="email" type="email" placeholder="Correo corporativo"/>
                  <input name="telefono" type="text" placeholder="Teléfono"/>

                  <select name="interes">
                    <option>¿En qué está interesado?</option>
                    <option>Capacitación corporativa</option>
                    <option>Programa personalizado</option>
                  </select>

                  <button class="btn btn-primary" type="submit">Solicitar información</button>

                  <span class="small" data-message></span>
                </form>

                <div class="form-benefits">
                  <div>
                    <strong>✓</strong>
                    <span>Programas<br />personalizados</span>
                  </div>
                  <div>
                    <strong>✓</strong>
                    <span>Capacitaciones<br />en empresa</span>
                  </div>
                  <div>
                    <strong>✓</strong>
                    <span>Acompañamiento<br />especializado</span>
                  </div>
                </div>
              </div>
            </article>

            <article class="form-card professional-card">
              <div class="form-card-header">
                <div class="form-icon">
                  <iconify-icon icon="lucide:graduation-cap"></iconify-icon>
                </div>

                <div>
                  <h3>¿Quieres seguir<br />aprendiendo?</h3>
                  <p>
                    Regístrate y forma parte de nuestra comunidad.
                    Accede a cursos, programas y novedades.
                  </p>
                </div>
              </div>

              <div class="form-content">
                <form data-lead-form>
                  <input name="nombre" type="text" placeholder="Nombre completo"/>
                  <input name="dni" type="text" placeholder="DNI"/>
                  <input name="email" type="email" placeholder="Correo electrónico"/>
                  <input name="telefono" type="text" placeholder="Teléfono"/>

                  <select name="interes">
                    <option>¿Qué te interesa?</option>
                    <option>Cursos</option>
                    <option>Certificados</option>
                    <option>Capacitaciones</option>
                  </select>

                  <button class="btn btn-dark" type="submit">Solicitar Cuenta</button>
                  <span class="small" data-message></span>
                </form>

                <div class="form-benefits">
                  <div>
                    <strong>✓</strong>
                    <span>Acceso a cursos y<br />talleres</span>
                  </div>
                  <div>
                    <strong>✓</strong>
                    <span>Certificación digital</span>
                  </div>
                  <div>
                    <strong>✓</strong>
                    <span>Contenido<br />actualizado</span>
                  </div>
                  <div>
                    <strong>✓</strong>
                    <span>Acompañamiento<br />docente</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}

export default DetalleCurso;
