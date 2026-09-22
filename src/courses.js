const courses = [
  {
    id: "gestion-planillas-remuneraciones-beneficios-laborales",
    category: "Recursos Humanos y Gestión Laboral",
    title: "Especialización en Gestión de Planillas, Remuneraciones y Beneficios Laborales",
    description: "Aprende a calcular, revisar y gestionar planillas y beneficios laborales con casos prácticos.",
    hours: 8,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/course-talento.png",
    descripcion_larga:
    "Programa práctico orientado a desarrollar las habilidades necesarias para gestionar remuneraciones, beneficios sociales y liquidaciones. Combina fundamentos técnicos con ejercicios aplicados, casos laborales y herramientas de trabajo. El participante culmina resolviendo un caso integral de planilla y liquidación.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Profesionales y estudiantes de Recursos Humanos, Administración, Contabilidad y carreras afines.",
      "Asistentes y analistas de RR. HH., planillas, administración de personal y compensaciones.",
      "Personas que desean incorporarse al área de administración de personal o fortalecer su perfil profesional.",
      "Emprendedores y responsables administrativos que necesitan comprender la gestión de remuneraciones."
    ],

    que_aprenderas: [
      "Identificar y clasificar los principales conceptos remunerativos y no remunerativos.",
      "Elaborar y revisar una planilla considerando remuneraciones, descuentos y aportes.",
      "Calcular beneficios sociales como CTS, gratificaciones y vacaciones.",
      "Determinar los conceptos que corresponden en una liquidación de beneficios sociales.",
      "Detectar errores frecuentes en cálculos de planilla, beneficios y liquidaciones.",
      "Resolver un caso integral de gestión de planillas y sustentar los resultados obtenidos."
    ],

    cantidad_modulos: 4,

    modulos: [
      {
        numero: 1,
        titulo: "Gestión de remuneraciones y estructura de planillas",
        horas: 2,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Cálculo de CTS, gratificaciones y vacaciones",
        horas: 2,
        clases: 5
      },
      {
        numero: 3,
        titulo: "Liquidación de beneficios sociales",
        horas: 2,
        clases: 5
      },
      {
        numero: 4,
        titulo: "Taller integrador de planillas y liquidaciones",
        horas: 2,
        clases: 4
      }
    ],

    docente: {
      nombre: "Mg. Carlos Mendoza",
      especialidad: "Especialista en Gestión del Talento Humano",
      descripcion:
        "Magíster en Recursos Humanos con más de 10 años de experiencia en gestión del talento y desarrollo organizacional.",
      foto: "/assets/images/instructor-carlos-mendoza.png",
      experiencia: [
        "Consultor en desarrollo organizacional",
        "Ex Gerente de RRHH en empresas líderes",
        "Docente en programas de posgrado",
        "Speaker en conferencias de talento humano"
      ]
    }
  },

  {
    id: "contabilidad-practica-gestion-mypes",
    category: "Contabilidad, Tributación y Gestión Empresarial",
    title: "Especialización en Contabilidad Práctica para la Gestión de MYPES",
    description: "Aprende a gestionar las operaciones contables y tributarias de una MYPE desde la práctica.",
    hours: 8,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/course-marketing.png",

    descripcion_larga: "Este curso introduce las principales estrategias de marketing digital aplicadas al entorno empresarial. Aprenderás a comprender el comportamiento del consumidor, definir objetivos digitales, desarrollar contenidos y utilizar diferentes canales para fortalecer la presencia de una organización en Internet.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Emprendedores y propietarios de MYPES.",
      "Asistentes administrativos, contables y financieros.",
      "Profesionales y estudiantes de Contabilidad, Administración y carreras afines.",
      "Personas que necesitan gestionar operaciones básicas de un negocio y comprender sus obligaciones."
    ],

    que_aprenderas: [
      "Diferenciar los principales comprobantes de pago y determinar cuándo corresponde utilizar cada uno.",
      "Registrar correctamente operaciones de compras, ventas y gastos de una MYPE.",
      "Comprender el crédito fiscal, débito fiscal y la determinación del IGV.",
      "Identificar las principales obligaciones tributarias según el régimen aplicable.",
      "Detectar errores frecuentes en comprobantes y registros que pueden generar contingencias.",
      "Resolver un caso mensual integrando comprobantes, registros y determinación tributaria."
    ],

    cantidad_modulos: 4,

    modulos: [
      {
        numero: 1,
        titulo: "Emisión y gestión de comprobantes electrónicos",
        horas: 2,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Registro de compras, ventas y gastos",
        horas: 2,
        clases: 5
      },
      {
        numero: 3,
        titulo: "IGV y obligaciones tributarias de la MYPE",
        horas: 2,
        clases: 5
      },
      {
        numero: 4,
        titulo: "Taller integral de gestión contable de una MYPE",
        horas: 2,
        clases: 5
      }
    ],

    docente: {
      nombre: "Lic. Andrea Salazar",
      especialidad: "Especialista en Marketing Digital",
      descripcion:
        "Licenciada en Marketing con experiencia en estrategias digitales, gestión de contenidos y posicionamiento de marcas.",
      foto: "/assets/images/instructor-andrea-salazar.png",
      experiencia: [
        "Consultora de marketing digital",
        "Especialista en estrategia de contenidos",
        "Gestora de campañas digitales",
        "Docente de marketing y comunicación"
      ]
    }
  },

  {
    id: "gestion-subsidios-licencias-laborales",
    category: "Recursos Humanos y Legislación Laboral",
    title: "Especialización en Gestión de Subsidios y Licencias Laborales",
    description: "Aprende a identificar, calcular, gestionar y hacer seguimiento a subsidios y licencias laborales.",
    hours: 8,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/course-bi.png",
    descripcion_larga: "Programa práctico para profesionales que gestionan incidencias laborales, licencias y subsidios. Se trabaja desde la identificación del derecho y el cálculo hasta la preparación documental, seguimiento y recuperación de prestaciones. Incluye casos de incapacidad temporal y maternidad.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Analistas y asistentes de Recursos Humanos.",
      "Responsables de administración de personal, bienestar y compensaciones.",
      "Profesionales y estudiantes de RR. HH., Administración, Psicología Organizacional y carreras afines.",
      "Personas que gestionan descansos médicos, licencias y trámites laborales ante entidades correspondientes."
    ],

    que_aprenderas: [
      "Identificar las principales licencias y situaciones que generan gestión administrativa para RR. HH.",
      "Determinar qué información y documentación debe revisarse en cada caso.",
      "Comprender la lógica de cálculo de los principales subsidios laborales.",
      "Calcular un subsidio a partir de la información remunerativa y los periodos correspondientes.",
      "Organizar un expediente y establecer una ruta de gestión, seguimiento y subsanación.",
      "Resolver casos integrales de subsidios y licencias desde la recepción del caso hasta su seguimiento."
    ],

    cantidad_modulos: 4,

    modulos: [
      {
        numero: 1,
        titulo: "Gestión de licencias, descansos médicos y ausencias",
        horas: 2,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Cálculo de subsidios por incapacidad temporal",
        horas: 2,
        clases: 5
      },
      {
        numero: 3,
        titulo: "Gestión y recuperación de subsidios",
        horas: 2,
        clases: 6
      },
      {
        numero: 4,
        titulo: "Taller integral de subsidios y licencias",
        horas: 2,
        clases: 5
      }
    ],

    docente: {
      nombre: "Ing. Diego Ramírez",
      especialidad: "Especialista en Analítica y Business Intelligence",
      descripcion:
        "Ingeniero especializado en análisis de datos, inteligencia de negocios y generación de reportes para la toma de decisiones.",
      foto: "/assets/images/instructor-diego-ramirez.png",
      experiencia: [
        "Consultor en Business Intelligence",
        "Analista de datos empresariales",
        "Especialista en visualización de información",
        "Docente de analítica de datos"
      ]
    }
  },

  {
    id: "atraccion-seleccion-talento-ia-ats-evaluacion-competencias",
    category: "Gestión del Talento y Atracción de Personas",
    title: "Especialización en Atracción y Selección de Talento con IA, ATS y Evaluación por Competencias",
    description: "Aprende a reclutar, filtrar y evaluar talento utilizando ATS, IA y herramientas de selección por competencias.",
    hours: 8,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/seguridad.png",
    descripcion_larga: "Programa actualizado y práctico para fortalecer la gestión de atracción y selección de talento. Integra perfilamiento, sourcing, ATS, inteligencia artificial, entrevistas y evaluación por competencias. El participante culmina con un proceso completo de selección y una recomendación sustentada.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Recruiters, analistas y asistentes de selección.",
      "Profesionales y estudiantes de Psicología, Recursos Humanos, Administración y carreras afines.",
      "Consultores y profesionales que participan en procesos de atracción y evaluación.",
      "Personas que desean actualizarse en ATS, IA y herramientas modernas de selección."
    ],

    que_aprenderas: [
      "Construir perfiles de puesto con funciones, requisitos y competencias claramente definidos.",
      "Diseñar estrategias de atracción y sourcing según el tipo de vacante.",
      "Comprender cómo funcionan los ATS y aplicar criterios de screening y matching.",
      "Utilizar IA como herramienta de apoyo en reclutamiento y evaluación, manteniendo criterio profesional.",
      "Diseñar y aplicar entrevistas estructuradas y por competencias con matrices de evaluación.",
      "Integrar evidencias de selección para comparar candidatos y sustentar una recomendación final."
    ],

    cantidad_modulos: 4,

    modulos: [
      {
        numero: 1,
        titulo: "Perfilamiento y estrategia de atracción de talento",
        horas: 2,
        clases: 5
      },
      {
        numero: 2,
        titulo: "ATS, sourcing y screening de candidatos",
        horas: 2,
        clases: 6
      },
      {
        numero: 3,
        titulo: "Entrevista y evaluación por competencias",
        horas: 2,
        clases: 6
      },
      {
        numero: 4,
        titulo: "Assessment y decisión de selección",
        horas: 2,
        clases: 6
      }
    ],

    docente: {
      nombre: "Ing. Luis Torres",
      especialidad: "Especialista en Seguridad y Salud en el Trabajo",
      descripcion:
        "Ingeniero con experiencia en gestión preventiva, evaluación de riesgos y capacitación en seguridad laboral.",
      foto: "/assets/images/instructor-luis-torres.png",
      experiencia: [
        "Consultor en seguridad laboral",
        "Especialista en prevención de riesgos",
        "Supervisor de seguridad",
        "Capacitador en SST"
      ]
    }
  },

  {
    id: "excel-desde-cero-principiante-profesional",
    category: "Excel, Productividad y Gestión de Datos",
    title: "Especialización en Excel desde Cero: de Principiante a Profesional",
    description: "Aprende Excel desde cero y conviértelo en una herramienta para trabajar mejor, analizar información y resolver problemas reales.",
    hours: 40,
    modality: "Online sincrónico",
    level: "Inicial / Intermedio",
    image: "/assets/images/finanzas.png",
    descripcion_larga: "Programa práctico para personas que necesitan aprender Excel desde las bases y avanzar progresivamente hacia un uso profesional. Combina fundamentos, fórmulas, análisis, reportes, tablas dinámicas y aplicaciones laborales.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Personas que tienen conocimientos básicos o nulos de Excel.",
      "Estudiantes y egresados que desean fortalecer su perfil laboral.",
      "Asistentes y analistas administrativos, RR. HH., ventas y áreas operativas.",
      "Profesionales que necesitan utilizar Excel con mayor seguridad y autonomía."
    ],

    que_aprenderas: [
      "Crear y organizar archivos profesionales desde cero.",
      "Utilizar fórmulas y funciones esenciales para automatizar cálculos.",
      "Gestionar bases de datos mediante tablas, filtros y validaciones.",
      "Analizar información con tablas dinámicas e indicadores.",
      "Crear reportes y dashboards básicos para comunicar resultados.",
      "Resolver un caso laboral integral utilizando Excel."
    ],

    cantidad_modulos: 10,

    modulos: [
      {
        numero: 1,
        titulo: "Fundamentos de Excel: domina la herramienta desde cero",
        horas: 4,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Fórmulas esenciales para trabajar con datos",
        horas: 4,
        clases: 5
      },
      {
        numero: 3,
        titulo: "Excel para gestión y control",
        horas: 4,
        clases: 5
      },
      {
        numero: 4,
        titulo: "Funciones que te hacen trabajar más rápido",
        horas: 4,
        clases: 5
      },
      {
        numero: 5,
        titulo: "Tablas dinámicas y análisis básico",
        horas: 4,
        clases: 5
      },
      {
        numero: 6,
        titulo: "Gráficos e informes ejecutivos",
        horas: 4,
        clases: 5
      },
      {
        numero: 7,
        titulo: "Excel aplicado a Recursos Humanos y Administración",
        horas: 4,
        clases: 5
      },
      {
        numero: 8,
        titulo: "Excel aplicado a ventas y gestión comercial",
        horas: 4,
        clases: 5
      },
      {
        numero: 9,
        titulo: "Proyecto integrador: de la base de datos al reporte",
        horas: 4,
        clases: 5
      },
      {
        numero: 10,
        titulo: "Reto final: Excel para resolver problemas reales",
        horas: 4,
        clases: 5
      }
    ],

    docente: {
      nombre: "Mg. Patricia Herrera",
      especialidad: "Especialista en Finanzas Empresariales",
      descripcion:
        "Magíster en Finanzas con experiencia en análisis financiero y gestión empresarial.",
      foto: "/assets/images/instructor-patricia-herrera.png",
      experiencia: [
        "Consultora financiera",
        "Analista de gestión empresarial",
        "Especialista en planificación financiera",
        "Docente de finanzas"
      ]
    }
  },

  {
    id: "excel-profesional-analisis-automatizacion-business-intelligence",
    category: "Excel Avanzado, Análisis de Datos y Business Intelligence",
    title: "Especialización en Excel Profesional: Análisis, Automatización y Business Intelligence",
    description: "Domina Excel para analizar datos, automatizar procesos y construir soluciones profesionales para la toma de decisiones.",
    hours: 40,
    modality: "Online sincrónico",
    level: "Inicial / Intermedio",
    image: "/assets/images/gestion-proyectos.png",
    descripcion_larga: "Programa avanzado orientado a profesionales que ya manejan Excel y quieren llevarlo a un nivel de análisis, modelamiento y automatización. Integra funciones avanzadas, dashboards, Power Query, Power Pivot, DAX, macros y modelos aplicados a gestión.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Analistas, coordinadores y profesionales que utilizan Excel diariamente.",
      "Profesionales de Finanzas, RR. HH., Administración, Comercial y Operaciones.",
      "Personas que ya manejan fórmulas y herramientas básicas/intermedias de Excel.",
      "Profesionales que buscan fortalecer su perfil en análisis de datos y automatización."
    ],

    que_aprenderas: [
      "Construir modelos avanzados con fórmulas y funciones combinadas.",
      "Transformar y depurar grandes volúmenes de información.",
      "Crear dashboards ejecutivos e indicadores de gestión.",
      "Utilizar Power Query y Power Pivot para modelar datos.",
      "Automatizar tareas repetitivas mediante macros y VBA.",
      "Desarrollar una solución integral de análisis y gestión en Excel."
    ],

    cantidad_modulos: 10,

    modulos: [
      {
        numero: 1,
        titulo: "Excel Profesional: fórmulas y funciones avanzadas",
        horas: 4,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Excel para análisis de datos y toma de decisiones",
        horas: 4,
        clases: 5
      },
      {
        numero: 3,
        titulo: "Tablas dinámicas avanzadas y dashboards",
        horas: 4,
        clases: 5
      },
      {
        numero: 4,
        titulo: "Power Query: transforma y automatiza tus datos",
        horas: 4,
        clases: 5
      },
      {
        numero: 5,
        titulo: "Modelamiento de datos y Power Pivot",
        horas: 4,
        clases: 5
      },
      {
        numero: 6,
        titulo: "Automatización de tareas con macros y VBA",
        horas: 4,
        clases: 5
      },
      {
        numero: 7,
        titulo: "Excel para finanzas y control de gestión",
        horas: 4,
        clases: 5
      },
      {
        numero: 8,
        titulo: "Excel para RR. HH. y People Analytics",
        horas: 4,
        clases: 5
      },
      {
        numero: 9,
        titulo: "Optimización de modelos y resolución de problemas",
        horas: 4,
        clases: 5
      },
      {
        numero: 10,
        titulo: "Proyecto integrador: Excel Professional Challenge",
        horas: 4,
        clases: 5
      }
    ],

    docente: {
      nombre: "Ing. Javier Castillo",
      especialidad: "Especialista en Gestión Ágil de Proyectos",
      descripcion:
        "Ingeniero con experiencia en dirección de proyectos, metodologías ágiles y gestión de equipos multidisciplinarios.",
      foto: "/assets/images/instructor-javier-castillo.png",
      experiencia: [
        "Scrum Master",
        "Consultor en gestión de proyectos",
        "Líder de equipos ágiles",
        "Instructor en metodologías ágiles"
      ]
    }
  },

  {
    id: "team-building-conecta-colabora-logra",
    category: "Cultura, Integración y Trabajo en Equipo",
    title: "Team Building: Conecta, Colabora y Logra",
    description: "Fortalece la confianza, mejora la comunicación y convierte a tu equipo en una verdadera red de colaboración.",
    hours: 4,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/innovacion.png",
    descripcion_larga: "Taller experiencial orientado a fortalecer la integración, comunicación y colaboración entre los miembros de un equipo. A través de dinámicas, retos y ejercicios prácticos, los participantes identificarán fortalezas, oportunidades de mejora y acuerdos concretos para trabajar mejor juntos.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Equipos de trabajo y áreas comerciales, operativas y administrativas.",
      "Equipos nuevos o recientemente integrados.",
      "Organizaciones que atraviesan cambios, crecimiento o reestructuración.",
      "Líderes que buscan fortalecer la cohesión y colaboración de sus equipos."
    ],

    que_aprenderas: [
      "Reconocer fortalezas individuales y colectivas del equipo.",
      "Identificar factores que facilitan o dificultan la colaboración.",
      "Aplicar herramientas de comunicación y escucha activa.",
      "Fortalecer confianza, coordinación y corresponsabilidad.",
      "Gestionar desacuerdos de manera constructiva.",
      "Construir acuerdos concretos para mejorar la dinámica del equipo."
    ],

    cantidad_modulos: 4,

    modulos: [
      {
        numero: 1,
        titulo: "Conociendo nuestro equipo",
        horas: 1,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Comunicación que conecta",
        horas: 1,
        clases: 5
      },
      {
        numero: 3,
        titulo: "Retos colaborativos",
        horas: 1,
        clases: 4
      },
      {
        numero: 4,
        titulo: "Nuestro acuerdo de equipo",
        horas: 1,
        clases: 4
      }
    ],

    docente: {
      nombre: "Mg. Valeria Rojas",
      especialidad: "Especialista en Innovación y Design Thinking",
      descripcion:
        "Magíster en innovación con experiencia en diseño de soluciones, facilitación y desarrollo de proyectos centrados en el usuario.",
      foto: "/assets/images/instructor-valeria-rojas.png",
      experiencia: [
        "Consultora de innovación",
        "Facilitadora de Design Thinking",
        "Especialista en desarrollo de productos",
        "Docente de innovación"
      ]
    }
  },

  {
    id: "liderazgo-en-accion-equipo-resultados",
    category: "Liderazgo y Gestión de Personas",
    title: "Liderazgo en Acción: Del Equipo a los Resultados",
    description: "Lidera conversaciones, moviliza personas y convierte los objetivos del equipo en resultados.",
    hours: 4,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/tecnicas-ventas.png",
    descripcion_larga: "Taller práctico dirigido a líderes y mandos medios que necesitan fortalecer sus habilidades para gestionar personas, comunicar expectativas, entregar feedback y enfrentar situaciones difíciles. Se trabaja mediante casos, role play y simulaciones de situaciones reales.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Jefes, supervisores y coordinadores.",
      "Mandos medios y líderes de equipos comerciales u operativos.",
      "Profesionales que asumirán posiciones de liderazgo.",
      "Responsables de equipos que necesitan fortalecer gestión y desempeño."
    ],

    que_aprenderas: [
      "Reconocer el impacto del estilo de liderazgo en el equipo.",
      "Adaptar la comunicación a diferentes situaciones y colaboradores.",
      "Delegar responsabilidades con claridad y seguimiento.",
      "Entregar feedback efectivo y orientado a la mejora.",
      "Gestionar conversaciones difíciles y situaciones de bajo desempeño.",
      "Movilizar al equipo hacia compromisos y resultados."
    ],

    cantidad_modulos: 4,

    modulos: [
      {
        numero: 1,
        titulo: "El líder como movilizador",
        horas: 1,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Comunicación y feedback",
        horas: 1,
        clases: 5
      },
      {
        numero: 3,
        titulo: "Delegación y gestión del desempeño",
        horas: 1,
        clases: 5
      },
      {
        numero: 4,
        titulo: "Conversaciones difíciles",
        horas: 1,
        clases: 5
      }
    ],

    docente: {
      nombre: "Lic. Roberto Vargas",
      especialidad: "Especialista en Ventas y Negociación",
      descripcion:
        "Licenciado en Administración con experiencia en gestión comercial, negociación y desarrollo de equipos de ventas.",
      foto: "/assets/images/instructor-roberto-vargas.png",
      experiencia: [
        "Gerente comercial",
        "Consultor de ventas",
        "Especialista en negociación",
        "Capacitador comercial"
      ]
    }
  },

  {
    id: "seguridad-salud-trabajo-cultura-preventiva-gestion-riesgos",
    category: "Seguridad, Salud Ocupacional y Gestión Preventiva",
    title: "Seguridad y Salud en el Trabajo: Cultura Preventiva y Gestión de Riesgos",
    description: "De cumplir una obligación a construir una verdadera cultura de prevención.",
    hours: 6,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/seleccion-personal.png",
    descripcion_larga: "Curso práctico orientado a fortalecer la cultura preventiva y brindar herramientas para identificar peligros, evaluar riesgos y promover comportamientos seguros en el trabajo. Se desarrollan casos y situaciones aplicables a diferentes entornos laborales.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Líderes y supervisores.",
      "Profesionales de Recursos Humanos.",
      "Responsables, comités y supervisores de SST.",
      "Personal administrativo y operativo.",
      "Organizaciones que buscan reforzar su cultura preventiva."
    ],

    que_aprenderas: [
      "Reconocer los fundamentos de una cultura preventiva.",
      "Identificar peligros presentes en distintos entornos de trabajo.",
      "Diferenciar peligro, riesgo y medidas de control.",
      "Aplicar herramientas básicas para evaluar riesgos.",
      "Analizar actos y condiciones inseguras.",
      "Proponer acciones preventivas y de mejora."
    ],

    cantidad_modulos: 3,

    modulos: [
      {
        numero: 1,
        titulo: "Cultura preventiva y responsabilidades",
        horas: 2,
        clases: 5
      },
      {
        numero: 2,
        titulo: "Identificación de peligros y evaluación de riesgos",
        horas: 2,
        clases: 6
      },
      {
        numero: 3,
        titulo: "Prevención aplicada al trabajo",
        horas: 2,
        clases: 6
      }
    ],

    docente: {
      nombre: "Mg. Diana Flores",
      especialidad: "Especialista en Selección por Competencias",
      descripcion:
        "Magíster en Gestión de Recursos Humanos con experiencia en selección, evaluación y desarrollo de talento.",
      foto: "/assets/images/instructor-diana-flores.png",
      experiencia: [
        "Consultora de recursos humanos",
        "Especialista en selección",
        "Evaluadora de competencias",
        "Docente de gestión humana"
      ]
    }
  },

  {
    id: "inteligencia-artificial-productividad-laboral",
    category: "Innovación, Tecnología y Productividad",
    title: "Inteligencia Artificial para la Productividad Laboral",
    description: "Aprende a utilizar IA para trabajar mejor, más rápido y con mayor impacto.",
    hours: 6,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/liderazgo.png",
    descripcion_larga: "Curso práctico orientado a incorporar herramientas de inteligencia artificial en actividades cotidianas de trabajo. Los participantes aprenderán a crear prompts, generar y analizar información, mejorar documentos y diseñar flujos de trabajo que eleven su productividad.",
    certificado: true,
    idioma: "Español",
    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Profesionales de todas las áreas.",
      "Líderes y supervisores.",
      "Equipos administrativos, comerciales y de Recursos Humanos.",
      "Marketing y comunicaciones.",
      "Personas que desean incorporar IA a sus tareas laborales."
    ],

    que_aprenderas: [
      "Comprender las principales aplicaciones de IA generativa en el trabajo.",
      "Crear prompts claros, específicos y reutilizables.",
      "Usar IA para redactar, resumir, organizar y analizar información.",
      "Identificar tareas repetitivas susceptibles de optimización.",
      "Diseñar flujos de trabajo apoyados por IA.",
      "Aplicar criterios de validación, privacidad y uso responsable."
    ],

    cantidad_modulos: 3,

    modulos: [
      {
        numero: 1,
        titulo: "IA aplicada al trabajo y prompting",
        horas: 2,
        clases: 5
      },
      {
        numero: 2,
        titulo: "IA para productividad y generación de contenidos",
        horas: 2,
        clases: 5
      },
      {
        numero: 3,
        titulo: "IA para procesos y toma de decisiones",
        horas: 2,
        clases: 6
      }
    ],

    docente: {
      nombre: "Mg. Fernando Paredes",
      especialidad: "Especialista en Liderazgo Organizacional",
      descripcion:
        "Magíster en Desarrollo Organizacional con experiencia en liderazgo, comunicación y gestión de equipos.",
      foto: "/assets/images/instructor-fernando-paredes.png",
      experiencia: [
        "Consultor organizacional",
        "Coach de equipos",
        "Facilitador de liderazgo",
        "Docente de habilidades blandas"
      ]
    }
  },

  {
    id: "customer-experience-service-excellence",
    category: "Experiencia del Cliente y Servicio",
    title: "Customer Experience & Service Excellence: Excelencia en Servicio",
    description: "No se trata solo de atender: se trata de crear experiencias que el cliente quiera volver a vivir.",
    hours: 6,
    modality: "Online sincrónico",
    level: "Intermedio",
    image: "/assets/images/excel.png",

    descripcion_larga: "Programa práctico orientado a fortalecer las competencias de atención y servicio, integrando comunicación, empatía, manejo de emociones, resolución de problemas y gestión de clientes difíciles. Los participantes trabajan situaciones reales mediante casos, simulaciones y role play.",

    certificado: true,
    idioma: "Español",

    fecha_registro: "2026-09-18",
    fecha_actualizacion: "2026-09-18",

    dirigido_a: [
      "Equipos de atención y servicio al cliente.",
      "Ejecutivos comerciales y equipos de ventas.",
      "Call center y contact center.",
      "Personal de recepción, front office y retail.",
      "Supervisores y líderes de equipos de servicio.",
      "Empresas que buscan fortalecer su experiencia de cliente."
    ],

    que_aprenderas: [
      "Identificar los momentos críticos que impactan la experiencia del cliente.",
      "Aplicar técnicas de comunicación, escucha activa y empatía.",
      "Adaptar la atención a diferentes perfiles y necesidades.",
      "Gestionar reclamos y situaciones de tensión.",
      "Aplicar técnicas de recuperación del servicio.",
      "Convertir una interacción difícil en una oportunidad de fidelización."
    ],

    cantidad_modulos: 3,

    modulos: [
      {
        numero: 1,
        titulo: "Customer Experience: el cliente en el centro",
        horas: 2,
        clases: 6
      },
      {
        numero: 2,
        titulo: "Comunicación que conecta",
        horas: 2,
        clases: 6
      },
      {
        numero: 3,
        titulo: "Clientes difíciles, reclamos y recuperación del servicio",
        horas: 2,
        clases: 6
      }
    ],

    docente: {
      nombre: "Ing. Martín Aguilar",
      especialidad: "Especialista en Excel y Productividad",
      descripcion:
        "Ingeniero con experiencia en automatización de procesos administrativos, análisis de información y capacitación en Excel.",
      foto: "/assets/images/instructor-martin-aguilar.png",
      experiencia: [
        "Analista de procesos",
        "Especialista en Excel",
        "Consultor de productividad",
        "Instructor empresarial"
      ]
    }
  }
];

export default courses;