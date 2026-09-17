/* =========================================================
   CURSO · Trabajo Seguro en Riesgo Eléctrico
   ---------------------------------------------------------
   Cliente:  Waygroup
   Audiencia: trabajadores, supervisores y responsables de programa que ejecutan, autorizan o supervisan trabajos con riesgo eléctrico
   Duración: 4 horas
   Preset visual: ver fuente/paleta.css (copiado de skin/presets/)
   ========================================================= */
module.exports = {
  brand: {
    name: '', sub: '',
    logo:       'assets/img/logos/waygroup-for-education-h.svg',
    logoMobile: 'assets/img/logos/waygroup-w-only.svg',
  },
  course: {
    code: '', name: 'Trabajo Seguro en Riesgo Eléctrico', subtitle: '', duration: '4 horas',
    iso: 'ISO 9001:2015', licencia: 'Creative Commons BY-NC-SA 4.0',
    preset: 'waygroup', pdf: 'assets/downloads/Curso_Riesgo_Electrico.pdf',   // insumos/Cartilla/, sin tilde en el nombre
    portadaFullBleed: true,        // el estándar Waygroup desde TSA
  },
  /* MENÚ · estándar Waygroup: Portada, Presentación, temas numerados (1, 2…) con
     subtemas como secciones ancladas dentro del tema (1.1, 1.2… los numera el build),
     Evaluación (cuando el cliente la entrega), Glosario y Referencias.
     Las especiales llevan el icono fijo del motor: no se declara `icon`. */
  menu: [
    { id: 'inicio',       titulo: 'Inicio',        tipo: 'especial' },
    { id: 'presentacion', titulo: 'Presentación',  tipo: 'especial' },
    { id: 'tema1', titulo: 'Definición, marco normativo y roles en riesgo eléctrico', tipo: 'tema',
      secciones: [
        { titulo: 'Qué es el riesgo eléctrico y cómo se clasifica',                       ancla: 'que-es-riesgo' },
        { titulo: 'La normatividad eléctrica en Colombia explicada de forma simple',       ancla: 'normatividad' },
        { titulo: 'Quién es quién: los responsables en un trabajo con riesgo eléctrico',   ancla: 'roles' },
        { titulo: 'Zonas y distancias de aproximación al riesgo eléctrico',                ancla: 'zonas-distancias' },
      ] },
    { id: 'tema2', titulo: 'Identificación de peligros y evaluación del riesgo eléctrico', tipo: 'tema',
      secciones: [
        { titulo: 'Qué peligros existen en el trabajo con electricidad',                            ancla: 'peligros' },
        { titulo: 'Qué tan grave es el riesgo: niveles de tensión y categorías de riesgo de arco',  ancla: 'nivel-riesgo' },
        { titulo: 'La energía incidente: por qué se calcula antes de acercarse a un tablero',       ancla: 'energia-incidente' },
        { titulo: 'Otros peligros del entorno que agravan el riesgo eléctrico',                     ancla: 'entorno' },
      ] },
    { id: 'tema3', titulo: 'Elementos de protección y herramientas para riesgo eléctrico', tipo: 'tema',
      secciones: [
        { titulo: 'Guantes dieléctricos y ropa de protección: para qué sirven y cuándo se usan',  ancla: 'guantes-ropa' },
        { titulo: 'Herramientas certificadas para maniobras con riesgo eléctrico',                ancla: 'herramientas' },
        { titulo: 'Cómo revisar el equipo antes de usarlo',                                       ancla: 'revisar-equipo' },
        { titulo: 'Delimitar y señalizar la zona de trabajo antes de empezar',                    ancla: 'delimitar-zona' },
      ] },
    { id: 'tema4', titulo: 'Procedimiento de trabajo seguro: consignación y las cinco reglas de oro', tipo: 'tema',
      secciones: [
        { titulo: 'La consignación del circuito: qué es y quién la autoriza',            ancla: 'consignacion' },
        { titulo: 'Las cinco reglas de oro, paso a paso',                                ancla: 'cinco-reglas' },
        { titulo: 'Si algo sale mal: contacto eléctrico y atención de emergencias',      ancla: 'emergencias' },
        { titulo: 'Cuándo NO se autoriza o se detiene el trabajo',                       ancla: 'cuando-no' },
      ] },
    // El DI lo titula "7. Cierre" (numera glosario y referencias como 5 y 6); en el estándar Waygroup
    // el Cierre es el último tema numerado, antes del glosario (TSA: tema6, RCP: tema10).
    { id: 'tema5', titulo: 'Cierre', tipo: 'tema' },
    { id: 'evaluacion',   titulo: 'Evaluación',    tipo: 'especial' },   // 10 reactivos del banco: insumos/MAPA-EVALUACION.md
    { id: 'glosario',     titulo: 'Glosario',      tipo: 'especial' },
    { id: 'referencias',  titulo: 'Referencias',   tipo: 'especial' },
  ],
  /* GLOSARIO · tabla "Palabra, término o abreviatura | Significado" del DI, literal, en orden alfabético */
  glosario: [
    { letra: 'A', termino: 'Arco eléctrico',
      definicion: 'Descarga de energía a través del aire, generalmente durante una maniobra o una falla, que libera calor extremo, luz intensa y una onda de presión, sin necesidad de contacto directo con un conductor.' },
    { letra: 'B', termino: 'Bloqueo y señalización (segunda regla de oro)',
      definicion: 'Conjunto de dispositivos físicos y etiquetas que impiden la reconexión accidental de un circuito mientras se ejecuta una tarea sobre él.' },
    { letra: 'C', termino: 'Cañuela',
      definicion: 'Fusible corta circuito instalado en un poste de distribución; retirarlo y asegurarlo con una guaya es la forma física de aplicar la segunda regla de oro en redes de distribución.' },
    { letra: 'C', termino: 'Centro de control / operador de red',
      definicion: 'Cuando aplique, participa en la operación y coordinación de maniobras de acuerdo con las responsabilidades y procedimientos establecidos.' },
    { letra: 'C', termino: 'Consignación',
      definicion: 'Procedimiento mediante el cual una instalación o parte de ella se deja en condiciones seguras para ejecutar un trabajo, de acuerdo con el procedimiento operativo aplicable.' },
    { letra: 'C', termino: 'Contacto directo',
      definicion: 'Contacto de una persona con una parte que normalmente está energizada, como un conductor pelado o un terminal sin cubierta.' },
    { letra: 'C', termino: 'Contacto indirecto',
      definicion: 'Contacto de una persona con una parte que no debería estar energizada, pero lo está debido a una falla de aislamiento.' },
    { letra: 'C', termino: 'Corte efectivo (primera regla de oro)',
      definicion: 'Asegurar el corte de todas las fuentes de tensión y evitar su cierre intempestivo antes de continuar con las demás reglas.' },
    { letra: 'D', termino: 'Distancia de seguridad o aproximación',
      definicion: 'Distancia que debe mantenerse respecto de partes energizadas según el nivel de tensión, la condición de trabajo y los requisitos técnicos aplicables.' },
    { letra: 'E', termino: 'Energía incidente',
      definicion: 'Energía térmica por unidad de superficie que podría recibir una persona a una distancia de trabajo determinada durante un arco eléctrico.' },
    { letra: 'E', termino: 'Equipo portátil de puesta a tierra',
      definicion: 'Elemento que conecta un circuito desenergizado a tierra durante una intervención, para derivar cualquier tensión accidental.' },
    { letra: 'F', termino: 'Frontera de aproximación limitada',
      definicion: 'Límite que restringe el acceso de personas no calificadas a una parte energizada, conforme a los criterios de aproximación aplicables.' },
    { letra: 'F', termino: 'Frontera de aproximación restringida',
      definicion: 'Zona más cercana a la parte energizada que exige personal competente y controles específicos de acuerdo con el método de trabajo.' },
    { letra: 'F', termino: 'Frontera de protección contra arco',
      definicion: 'Distancia calculada para limitar la exposición térmica del arco eléctrico, de acuerdo con la metodología utilizada.' },
    { letra: 'G', termino: 'Gancho de maniobra',
      definicion: 'Herramienta aislada para operaciones específicas sobre líneas o equipos energizados, usada también para realizar la puesta a tierra y en cortocircuito.' },
    { letra: 'G', termino: 'Guante aislante',
      definicion: 'Equipo de protección para las manos destinado a proporcionar aislamiento eléctrico, seleccionado según la tensión máxima de uso y la norma aplicable.' },
    { letra: 'I', termino: 'IEEE 1584',
      definicion: 'Metodología técnica de origen internacional usada como referencia para calcular la energía incidente de un arco eléctrico.' },
    { letra: 'N', termino: 'NFPA 70E',
      definicion: 'Norma técnica de origen internacional usada como referencia complementaria para las prácticas de seguridad en trabajo eléctrico.' },
    { letra: 'N', termino: 'NTC 2050',
      definicion: 'Código Eléctrico Colombiano. Su aplicación debe entenderse en conjunto con el RETIE y con los requisitos que este reglamento incorpore, adapte o haga exigibles.' },
    { letra: 'O', termino: 'Observador o compañero de trabajo',
      definicion: 'Rol presente en tareas de mayor complejidad, encargado de estar atento durante la intervención y activar el protocolo de emergencia si algo sale mal.' },
    { letra: 'P', termino: 'Peligro de arco eléctrico',
      definicion: 'Condición peligrosa asociada a la liberación de energía durante un arco eléctrico. Su evaluación considera las características del sistema y la tarea.' },
    { letra: 'P', termino: 'Persona técnicamente y legalmente competente',
      definicion: 'Persona que cuenta con la formación, competencias y habilitación legal necesarias para dirigir, supervisar o ejecutar la actividad eléctrica correspondiente.' },
    { letra: 'P', termino: 'Pértiga',
      definicion: 'Herramienta aislada y telescópica que permite operar interruptores o realizar maniobras a distancia sobre una instalación eléctrica.' },
    { letra: 'P', termino: 'Proteger y delimitar la zona de trabajo (quinta regla de oro)',
      definicion: 'Cubrir o proteger los elementos adyacentes que permanezcan energizados y delimitar la zona de trabajo.' },
    { letra: 'P', termino: 'Prueba de inflado con aire',
      definicion: 'Verificación que se hace a un guante dieléctrico antes de su uso, inflándolo con aire para detectar perforaciones no visibles a simple vista.' },
    { letra: 'P', termino: 'Puesta a tierra y en cortocircuito (cuarta regla de oro)',
      definicion: 'Conexión del punto de trabajo a tierra, para que cualquier tensión accidental se derive de inmediato sin exponer a la persona.' },
    { letra: 'R', termino: 'RETIE',
      definicion: 'Reglamento Técnico de Instalaciones Eléctricas. Su versión vigente fue modificada mediante la Resolución 40284 del 23 de junio de 2026.' },
    { letra: 'S', termino: 'Supervisor de la tarea',
      definicion: 'Rol que coordina la intervención en el sitio, verifica que el equipo de protección y las herramientas certificadas se encuentren disponibles, y tiene la autoridad para detener el trabajo si algo no está en orden.' },
    { letra: 'V', termino: 'Verificador de ausencia de tensión',
      definicion: 'Instrumento que confirma si un conductor está o no energizado antes de tocarlo, y que debe probarse en una fuente conocida antes y después de su uso.' },
  ],

  /* REFERENCIAS · "Referencias bibliográficas y fuentes" del DI, literal */
  referencias: [
    { texto: 'American Society for Testing and Materials (ASTM). ASTM D120, Standard Specification for Rubber Insulating Gloves.' },
    { texto: 'American Society for Testing and Materials (ASTM). ASTM F496, Standard Specification for In-Service Care of Insulating Gloves and Sleeves.' },
    { texto: 'American Society for Testing and Materials (ASTM). ASTM F711, Standard Specification for Fiberglass-Reinforced Plastic (FRP) Rod and Tube Used in Live Line Tools.' },
    { texto: 'Congreso de la República de Colombia. (1979). Ley 9 de 1979, por la cual se dictan medidas sanitarias.' },
    { texto: 'Congreso de la República de Colombia. (2012). Ley 1562 de 2012, por la cual se modifica el sistema de riesgos laborales.' },
    { texto: 'Institute of Electrical and Electronics Engineers (IEEE). IEEE 1584, Guide for Performing Arc Flash Hazard Calculations.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2012). GTC 45, Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). NTC 2050, Código Eléctrico Colombiano, Segunda Actualización.' },
    { texto: 'Ministerio de Minas y Energía de Colombia. (2013). Resolución 90708 de 2013, Reglamento Técnico de Instalaciones Eléctricas (RETIE). Antecedente normativo.' },
    { texto: 'Ministerio de Minas y Energía de Colombia. (2024). Resolución 40117 de 2024, por la cual se modifica el Reglamento Técnico de Instalaciones Eléctricas (RETIE). Antecedente normativo.' },
    { texto: 'Ministerio de Minas y Energía de Colombia. (2025). Resolución 40304 de 2025, por la cual se modifican disposiciones transitorias y determinados apartados del Libro 3 del RETIE.' },
    { texto: 'Ministerio de Minas y Energía de Colombia. (2026). Resolución 40284 de 2026, por la cual se modifica el Reglamento Técnico de Instalaciones Eléctricas (RETIE). Última versión vigente del RETIE.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo.' },
    { texto: 'National Fire Protection Association (NFPA). NFPA 70E, Standard for Electrical Safety in the Workplace.' },
    { texto: 'Occupational Safety and Health Administration (OSHA). Electric-Arc Flash Hazards. Fuente complementaria para conceptos generales de seguridad eléctrica; no sustituye la normativa colombiana aplicable.' },
  ],

  creditos: [],
};
