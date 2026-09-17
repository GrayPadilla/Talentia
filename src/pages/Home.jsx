import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { renderFeaturedCourses, bindForms } from "../../js/app.js";

function Home() {
    useEffect(() => {
        renderFeaturedCourses();
        bindForms();
    }, []);

    return (
        <>
            <Header />

            <main>
                <section class="hero" id="inicio">
                    <div class="container hero-content">
                    <h1>Bienvenido a Talentia<br />Centro Formativo</h1>

                    <p>
                        Centro especializado en capacitar profesionales para impulsar su desarrollo y aprendizaje en cada contexto laboral.
                    </p>

                    <div class="header-actions">
                        <a class="btn btn-primary" href="cursos.html">Comenzar ahora →</a>
                        <a class="btn btn-secondary" href="#contacto">Solicitar Cotización →</a>
                    </div>
                    </div>
                </section>

                <section class="stats-strip">
                    <div class="container stats">

                    <div class="stat">
                        <img
                        class="stat-icon student_icon"
                        src="assets/images/icon/student-icon.svg"
                        alt=""
                        aria-hidden="true" />

                        <div>
                        <strong>+5,000</strong>
                        <span>Estudiantes formados</span>
                        </div>
                    </div>


                    <div class="stat">
                        <img
                        class="stat-icon document_icon"
                        src="assets/images/icon/document-icon.svg"
                        alt=""
                        aria-hidden="true" />
                        
                        <div>
                        <strong>+120</strong>
                        <span>Cursos y programas</span>
                        </div>
                    </div>


                    <div class="stat">
                        <img
                        class="stat-icon"
                        src="assets/images/icon/happy-icon.svg"
                        alt=""
                        aria-hidden="true" />

                        <div>
                        <strong>95%</strong>
                        <span>Satisfacción</span>
                        </div>
                    </div>


                    <div class="stat">
                        <img
                        class="stat-icon"
                        src="assets/images/icon/company-icon.svg"
                        alt=""
                        aria-hidden="true" />

                        <div>
                        <strong>+200</strong>
                        <span>Empresas capacitadas</span>
                        </div>
                    </div>

                    </div>
                </section>

                <section class="section" id="nosotros">
                    <div class="container split">
                    <div>
                        <h2 class="section-title">¿Por qué elegir Talentia?</h2>
                        <p class="section-subtitle">Somos el centro formativo de Talentum enfocado en el desarrollo de profesionales y organizaciones mediante capacitación especializada.</p>
                        <ul class="check-list">
                        <li>Cursos y programas alineados al mercado actual</li>
                        <li>Metodología práctica y orientada a resultados</li>
                        <li>Docentes especialistas con experiencia real</li>
                        <li>Acompañamiento durante tu aprendizaje</li>
                        </ul>
                    </div>
                    <div class="image-panel" aria-label="Representación visual de aprendizaje profesional"></div>
                    </div>
                </section>

                <section class="section" id="nosotros-parte-dos">
                    <div class="container">
                    <h2 class="section-title">¿Qué ofrecemos en Talentia?</h2>
                    <div class="offer-grid">
                        <article class="offer-card">
                        <div class="offer-text">
                            <div class="offer-icon">
                            <iconify-icon icon="lucide:building-2"></iconify-icon>
                            </div>
                            <p class="offer-label">Para empresas</p>
                            <h3>Capacitaciones <span>Corporativas</span></h3>
                            <p>Programas diseñados a la medida de tu empresa para potenciar el talento de tus equipos y alcanzar mejores resultados.</p>
                            <ul>
                            <li>Programas personalizados</li>
                            <li>Desarrollo de habilidades clave</li>
                            <li>Modalidad presencial, virtual o híbrida</li>
                            <li>Metodologías centradas en resultados</li>
                            <li>Acompañamiento y evaluación de impacto</li>
                            </ul>
                        </div>
                        <div class="offer-img empresas"></div>
                        </article>
                        <article class="offer-card">
                        <div class="offer-text">
                            <div class="offer-icon">
                            <div class="offer-icon">
                                <iconify-icon icon="lucide:graduation-cap"></iconify-icon>
                            </div>
                            </div>
                            <p class="offer-label">Para profesionales</p>
                            <h3>Capacitaciones <span>Profesionales</span></h3>
                            <p>Contenido práctico para potenciar tus competencias y abrir nuevas oportunidades.</p>
                            <ul>
                            <li>Contenido práctico y aplicable</li>
                            <li>Docentes especialistas</li>
                            <li>Certificación al finalizar</li>
                            <li>Modalidad online y presencial</li>
                            <li>Desarrollo de competencias para tu futuro</li>
                            </ul>
                        </div>
                        <div class="offer-img profesionales"></div>
                        </article>
                    </div>
                    </div>
                </section>

                <section class="section featured-courses-section" id="cursos">
                    <div class="container">

                    <div class="section-header featured-courses-header">
                        <div>
                        <h2 class="section-title">Nuestros cursos más destacados</h2>
                        <p class="section-subtitle">Conoce programas diseñados para potenciar tu desarrollo profesional.</p>
                        </div>

                        <a class="btn btn-dark featured-courses-btn" href="Cursos">Ver todos los cursos</a>
                    </div>
                    <div class="courses-grid" data-featured-courses></div>

                    </div>
                </section>

                <section class="section process" id="experiencia">
                    <div class="container">
                    <div class="process-header">
                        <h2>¿Cómo es tu experiencia en Talentia?</h2>
                        <p>Un proceso simple para enfocarte en tu aprendizaje.</p>
                    </div>

                    <div class="steps">

                        <article class="step">
                        <div class="step-icon">
                            <img
                            src="assets/images/icon/explorar-cursos-icon.svg"
                            alt=""
                            aria-hidden="true" />
                        </div>

                        <h3>Explora los cursos</h3>
                        </article>

                        <div class="step-arrow" aria-hidden="true">→</div>


                        <article class="step">
                        <div class="step-icon">
                            <img
                            src="assets/images/icon/inscribete-icon.svg"
                            alt=""
                            aria-hidden="true" />   
                        </div>

                        <h3>Inscríbete</h3>
                        </article>


                        <div class="step-arrow" aria-hidden="true">→</div>

                        <article class="step">
                        <div class="step-icon">
                            <img
                            src="assets/images/icon/aprende-icon.svg"
                            alt=""
                            aria-hidden="true" />
                        </div>

                        <h3>Aprende</h3>
                        </article>

                        <div class="step-arrow" aria-hidden="true">→</div>

                        <article class="step">
                        <div class="step-icon">
                            <img
                            src="assets/images/icon/gorra-certificado-icon.svg"
                            alt=""
                            aria-hidden="true" />
                        </div>

                        <h3>Recibe tu certificado</h3>
                        </article>

                    </div>
                    </div>
                </section>

                <section class="section capacitaciones" id="capacitaciones">
                    <div class="container">

                    <div class="modalities-header">
                        <h2>Modalidades de capacitación</h2>
                        <p>Nos adaptamos a tus necesidades de aprendizaje.</p>
                    </div>

                    <div class="modalities-grid">

                        <article class="modality-card">

                        <div class="modality-icon">
                            <img
                            src="assets/images/icon/cursos-online-icon.svg"
                            alt=""
                            aria-hidden="true" /> 
                        </div>
                        <h3>Cursos Online</h3>
                        <p>Estudia desde cualquier lugar</p>

                        </article>


                        <article class="modality-card">

                        <div class="modality-icon">
                            <img
                            src="assets/images/icon/cursos-presenciales-icon.svg"
                            alt=""
                            aria-hidden="true" /> 
                        </div>

                        <h3>Cursos Presenciales</h3>
                        <p>Aprendizaje con nuestros expertos</p>

                        </article>


                        <article class="modality-card">

                        <div class="modality-icon">
                            <img
                            src="assets/images/icon/capacitaciones-cooporativas-icon.svg"
                            alt=""
                            aria-hidden="true" /> 
                        </div>

                        <h3>Capacitaciones Corporativas</h3>
                        <p>Programas a medida para empresas</p>

                        </article>

                    </div>
                    </div>
                </section>

                <section class="testimonials-section">
                    <div class="container">
                    <div class="testimonials-header">
                        <h2>Lo que dicen nuestros estudiantes</h2>
                        <div class="testimonials-underline"></div>
                    </div>

                    <div class="testimonials">
                        <article class="testimonial">
                        <div class="testimonial-content">
                            <img class="testimonial-avatar" src="assets/images/estudiante_testimonio_1.png" alt="Valeria Sánchez" />
                            <p class="testimonial-quote">
                            “Los cursos me ayudaron a mejorar mis habilidades profesionales y
                            conseguir nuevas oportunidades.”
                            </p>
                        </div>

                        <div class="testimonial-person">
                            <strong>Valeria Sánchez</strong>
                            <span>Estudiante de Marketing Digital</span>
                        </div>
                        <div class="testimonial-mark">❞</div>
                        </article>

                        <article class="testimonial">
                        <div class="testimonial-content">
                            <img class="testimonial-avatar" src="assets/images/estudiante_testimonio_2.png" alt="Diego Ramírez" />
                            <p class="testimonial-quote">
                            “Excelente metodología y docentes con mucha experiencia. 100%
                            recomendado.”
                            </p>
                        </div>
                        
                        <div class="testimonial-person">
                            <strong>Diego Ramírez</strong>
                            <span>Estudiante de Desarrollo Web</span>
                        </div>
                        <div class="testimonial-mark">❞</div>
                        </article>

                        <article class="testimonial">
                        <div class="testimonial-content">
                            <img class="testimonial-avatar" src="assets/images/estudiante_testimonio_3.png" alt="Camila Rojas" />
                            <p class="testimonial-quote">
                            “La capacitación superó mis expectativas. Los contenidos son
                            prácticos y muy útiles para el mundo real.”
                            </p>
                        </div>

                        <div class="testimonial-person">
                            <strong>Camila Rojas</strong>
                            <span>Estudiante de Gestión Empresarial</span>
                        </div>
                        <div class="testimonial-mark">❞</div>
                        </article>

                    </div>
                    </div>
                </section>

                <section class="contact-section" id="contacto">
                    <div class="container">

                    <div class="contact-header">
                        <h2>Conecta con Talentia</h2>
                        <div class="contact-underline"></div>
                    </div>

                    <div class="forms-grid">
                        {/*-- EMPRESAS */}
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

                        {/*-- PROFESIONALES -->*/}
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

            {/* CTA SOLO DEL HOME */}
            <section className="footer-cta">
                <div className="container footer-cta-content">
                <div>
                    <h2>Invierte en tu futuro hoy</h2>
                    <p>
                    Desarrolla nuevas habilidades, potencia tu talento y alcanza tus
                    objetivos.
                    </p>
                </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;