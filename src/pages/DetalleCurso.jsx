import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { db } from "../firebase";


function DetalleCurso() {

  const { id } = useParams();

  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");


  /* =========================================================
     OBTENER CURSO DESDE FIREBASE
     ========================================================= */

  useEffect(() => {

    async function obtenerCurso() {

      try {

        setCargando(true);
        setError("");

        const referenciaCurso =
          doc(db, "Cursos", id);

        const documentoCurso =
          await getDoc(referenciaCurso);

        if (!documentoCurso.exists()) {

          setError("El curso no fue encontrado.");
          setCurso(null);

          return;
        }

        const datosCurso = {
          id: documentoCurso.id,
          ...documentoCurso.data()
        };

        setCurso(datosCurso);

        console.log(
          "Curso obtenido desde Firebase:",
          datosCurso
        );

      } catch (error) {

        console.error(
          "Error al obtener el curso:",
          error
        );

        setError(
          "No se pudo cargar la información del curso."
        );

      } finally {

        setCargando(false);

      }

    }


    if (id) {
      obtenerCurso();
    } else {
      setError("No se encontró el identificador del curso.");
      setCargando(false);
    }

  }, [id]);


  /* =========================================================
     CARGANDO
     ========================================================= */

  if (cargando) {

    return (
      <>
        <Header />

        <main>
          <section className="section">
            <div className="container">
              <p>Cargando curso...</p>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );

  }


  /* =========================================================
     ERROR
     ========================================================= */

  if (error || !curso) {

    return (
      <>
        <Header />

        <main>
          <section className="section">
            <div className="container">
              <h1>Curso no encontrado</h1>

              <p>
                {error || "No se pudo encontrar este curso."}
              </p>

              <a
                className="btn btn-primary"
                href="/Cursos"
              >
                Volver a cursos
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );

  }


  /* =========================================================
     FECHA DE ACTUALIZACIÓN
     ========================================================= */

  const fechaActualizacion = curso.fecha_actualizacion
    ? new Date(
        `${curso.fecha_actualizacion}T00:00:00`
      ).toLocaleDateString(
        "es-PE",
        {
          month: "long",
          year: "numeric"
        }
      )
    : "No especificada";


  /* =========================================================
     INTERFAZ DEL CURSO
     ========================================================= */

  return (

    <>

      <Header />


      <main>

        {/* =====================================================
            BREADCRUMB
            ===================================================== */}

        <div className="course-breadcrumb">

          <div className="container">

            Inicio › Cursos ›{" "}

            <span>
              {curso.title}
            </span>

          </div>

        </div>


        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="detail-hero">

          <div className="container detail-grid">


            <div className="course-cover">

              <img
                src={curso.image}
                alt={`Presentación del curso ${curso.title}`}
              />

            </div>


            <div className="course-intro">

              <p className="eyebrow">
                {curso.category}
              </p>


              <h1>
                {curso.title}
              </h1>


              <p>
                {curso.description}
              </p>


              <div
                className="course-rating"
                aria-label="Calificación del curso"
              >

                <span className="rating-stars">
                  ★★★★★
                </span>

                <span>
                  4.8 (320 valoraciones)
                </span>

              </div>


              <div className="course-badges">


                <span>

                  <iconify-icon
                    class="course-badge-icon"
                    icon="mdi:clock-outline"
                  ></iconify-icon>

                  <strong>
                    {curso.hours} horas
                  </strong>

                </span>


                <span>

                  <iconify-icon
                    class="course-badge-icon"
                    icon="mdi:laptop"
                  ></iconify-icon>

                  <strong>
                    {curso.modality}
                  </strong>

                </span>


                <span>

                  <iconify-icon
                    class="course-badge-icon"
                    icon="mdi:signal-cellular-3"
                  ></iconify-icon>

                  <strong>
                    Nivel {curso.level}
                  </strong>

                </span>


                {curso.certificado && (

                  <span>

                    <iconify-icon
                      class="course-badge-icon"
                      icon="mdi:certificate-outline"
                    ></iconify-icon>

                    <strong>
                      Certificado
                    </strong>

                  </span>

                )}


              </div>


              <a
                className="btn btn-primary"
                href="#contacto"
              >
                Solicitar más información
              </a>


            </div>

          </div>

        </section>


        {/* =====================================================
            INFORMACIÓN PRINCIPAL
            ===================================================== */}

        <section className="course-detail-section">


          <div className="container detail-layout">


            <div className="detail-main">


              {/* =================================================
                  DESCRIPCIÓN
                  ================================================= */}

              <article className="course-description">

                <h2>
                  Descripción del curso
                </h2>


                <p>
                  {curso.descripcion_larga || curso.description}
                </p>


                <div className="audience-card">

                  <img
                    src="/assets/images/icon/meta-icon.svg"
                    alt=""
                  />


                  <div>

                    <h3>
                      Dirigido a
                    </h3>

                    <p>
                      {curso.dirigido_a}
                    </p>

                  </div>

                </div>

              </article>


              {/* =================================================
                  QUÉ APRENDERÁS
                  ================================================= */}

              <article className="learning-section">

                <h2>
                  ¿Qué aprenderás?
                </h2>


                <ul className="learning-grid">

                  {curso.que_aprenderas?.map(
                    (aprendizaje, index) => (

                      <li key={index}>
                        {aprendizaje}
                      </li>

                    )
                  )}

                </ul>

              </article>


              {/* =================================================
                  MÓDULOS
                  ================================================= */}

              <article className="modules-section">

                <h2>
                  Contenido del curso
                </h2>


                <div className="module-list">

                  {curso.modulos?.map(
                    (modulo, index) => (

                      <div
                        className="module-row"
                        key={index}
                      >

                        <span>

                          <strong>
                            {String(
                              modulo.numero || index + 1
                            ).padStart(2, "0")}
                          </strong>

                          Módulo{" "}
                          {modulo.numero || index + 1}:{" "}
                          {modulo.titulo}

                        </span>


                        <span>

                          <b aria-hidden="true">
                            ◷
                          </b>

                          {" "}
                          {modulo.horas} horas

                          {" "}

                          <i></i>

                          {" "}

                          {modulo.clases}{" "}
                          {modulo.clases === 1
                            ? "clase"
                            : "clases"}

                        </span>

                      </div>

                    )
                  )}

                </div>

              </article>


            </div>


            {/* ===================================================
                INFORMACIÓN DEL CURSO
                =================================================== */}

            <aside className="sidebar">


              <article className="info-card">

                <h2>
                  Información del curso
                </h2>


                <div className="info-list">


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:clock-outline"
                      ></iconify-icon>

                      Duración

                    </span>

                    <strong>
                      {curso.hours} horas
                    </strong>

                  </div>


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:laptop"
                      ></iconify-icon>

                      Modalidad

                    </span>

                    <strong>
                      {curso.modality}
                    </strong>

                  </div>


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:signal-cellular-3"
                      ></iconify-icon>

                      Nivel

                    </span>

                    <strong>
                      {curso.level}
                    </strong>

                  </div>


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:certificate-outline"
                      ></iconify-icon>

                      Certificación

                    </span>

                    <strong>
                      {curso.certificado ? "Sí" : "No"}
                    </strong>

                  </div>


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:translate"
                      ></iconify-icon>

                      Idioma

                    </span>

                    <strong>
                      {curso.idioma || "Español"}
                    </strong>

                  </div>


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:view-grid-outline"
                      ></iconify-icon>

                      Categoría

                    </span>

                    <strong>
                      {curso.category}
                    </strong>

                  </div>


                  <div className="info-item">

                    <span>

                      <iconify-icon
                        class="course-info-icon"
                        icon="mdi:history"
                      ></iconify-icon>

                      Última actualización

                    </span>

                    <strong>
                      {fechaActualizacion}
                    </strong>

                  </div>


                </div>

              </article>


              {/* =================================================
                  CERTIFICADO
                  ================================================= */}

              {curso.certificado && (

                <article className="certificate-card">

                  <img
                    src="/assets/images/icon/certificado-icon.svg"
                    alt=""
                  />

                  <div>

                    <h2>
                      Certificado digital
                    </h2>

                    <p>
                      Al finalizar el curso recibirás un
                      certificado emitido por Talentia.
                    </p>

                  </div>

                </article>

              )}


            </aside>

          </div>


          {/* =====================================================
              DOCENTE
              ===================================================== */}

          {curso.docente && (

            <div className="container instructor-section">

              <h2>
                Docente del curso
              </h2>


              <article className="instructor-card">


                <img
                  src={curso.docente.foto}
                  alt={curso.docente.nombre}
                />


                <div className="instructor-profile">

                  <h3>
                    {curso.docente.nombre}
                  </h3>

                  <span>
                    {curso.docente.especialidad}
                  </span>

                  <p>
                    {curso.docente.descripcion}
                  </p>

                </div>


                <div className="instructor-experience">

                  <h3>
                    Experiencia destacada
                  </h3>


                  <ul>

                    {curso.docente.experiencia?.map(
                      (experiencia, index) => (

                        <li key={index}>
                          {experiencia}
                        </li>

                      )
                    )}

                  </ul>

                </div>


              </article>

            </div>

          )}


        </section>


        {/* =====================================================
            CONTACTO
            ===================================================== */}

        <section
          className="contact-section"
          id="contacto"
        >

          <div className="container">


            <div className="contact-header">

              <h2>
                Conecta con Talentia
              </h2>

              <div className="contact-underline"></div>

            </div>


            <div className="forms-grid">


              {/* EMPRESA */}

              <article className="form-card company-card">


                <div className="form-card-header">


                  <div className="form-icon">

                    <iconify-icon
                      icon="lucide:building-2"
                    ></iconify-icon>

                  </div>


                  <div>

                    <h3>
                      ¿Tu empresa necesita
                      <br />
                      capacitar a su equipo?
                    </h3>

                    <p>
                      Programas de formación a medida para
                      potenciar el talento de tu organización.
                    </p>

                  </div>


                </div>


                <div className="form-content">


                  <form data-lead-form>

                    <input
                      name="ruc"
                      type="text"
                      placeholder="RUC de la empresa"
                    />

                    <input
                      name="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                    />

                    <input
                      name="contacto"
                      type="text"
                      placeholder="Nombre de contacto"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Correo corporativo"
                    />

                    <input
                      name="telefono"
                      type="text"
                      placeholder="Teléfono"
                    />


                    <select name="interes">

                      <option>
                        ¿En qué está interesado?
                      </option>

                      <option>
                        Capacitación corporativa
                      </option>

                      <option>
                        Programa personalizado
                      </option>

                    </select>


                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Solicitar información
                    </button>


                    <span
                      className="small"
                      data-message
                    ></span>

                  </form>


                  <div className="form-benefits">

                    <div>
                      <strong>✓</strong>
                      <span>
                        Programas
                        <br />
                        personalizados
                      </span>
                    </div>

                    <div>
                      <strong>✓</strong>
                      <span>
                        Capacitaciones
                        <br />
                        en empresa
                      </span>
                    </div>

                    <div>
                      <strong>✓</strong>
                      <span>
                        Acompañamiento
                        <br />
                        especializado
                      </span>
                    </div>

                  </div>


                </div>

              </article>


              {/* PROFESIONAL */}

              <article className="form-card professional-card">


                <div className="form-card-header">


                  <div className="form-icon">

                    <iconify-icon
                      icon="lucide:graduation-cap"
                    ></iconify-icon>

                  </div>


                  <div>

                    <h3>
                      ¿Quieres seguir
                      <br />
                      aprendiendo?
                    </h3>

                    <p>
                      Regístrate y forma parte de nuestra
                      comunidad. Accede a cursos, programas
                      y novedades.
                    </p>

                  </div>


                </div>


                <div className="form-content">


                  <form data-lead-form>

                    <input
                      name="nombre"
                      type="text"
                      placeholder="Nombre completo"
                    />

                    <input
                      name="dni"
                      type="text"
                      placeholder="DNI"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Correo electrónico"
                    />

                    <input
                      name="telefono"
                      type="text"
                      placeholder="Teléfono"
                    />


                    <select name="interes">

                      <option>
                        ¿Qué te interesa?
                      </option>

                      <option>
                        Cursos
                      </option>

                      <option>
                        Certificados
                      </option>

                      <option>
                        Capacitaciones
                      </option>

                    </select>


                    <button
                      className="btn btn-dark"
                      type="submit"
                    >
                      Solicitar Cuenta
                    </button>


                    <span
                      className="small"
                      data-message
                    ></span>

                  </form>


                  <div className="form-benefits">

                    <div>
                      <strong>✓</strong>
                      <span>
                        Acceso a cursos y
                        <br />
                        talleres
                      </span>
                    </div>

                    <div>
                      <strong>✓</strong>
                      <span>
                        Certificación digital
                      </span>
                    </div>

                    <div>
                      <strong>✓</strong>
                      <span>
                        Contenido
                        <br />
                        actualizado
                      </span>
                    </div>

                    <div>
                      <strong>✓</strong>
                      <span>
                        Acompañamiento
                        <br />
                        docente
                      </span>
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