(() => {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const projects = [
    // =========================
    // UÑAS
    // =========================
    {
      id: 1,
      category: "uñas",
      title: "Fucsia Perlada",
      subtitle: "Esmaltado semipermanente · Efecto perlado",
      description: "Manicura semipermanente en un intenso tono fucsia con acabado perlado y reflejos metalizados. Las uñas presentan una elegante forma almendrada y longitud media, destacando por su superficie lisa y sus espectaculares reflejos luminosos. El efecto cromático aporta profundidad, brillo y un acabado sofisticado que transforma un color vibrante en una propuesta llena de personalidad.",
      image: "imgs/uñas/semipermanentePerlado.png",
      alt: "Uñas semipermanentes de forma almendrada en color fucsia intenso con acabado perlado metalizado y reflejos brillantes."
    },{
      id: 2,
      category: "uñas",
      title: "French Floral Coral",
      subtitle: "Uñas esculpidas · Francesa · Nail Art",
      description: "Diseño de uñas esculpidas con forma cuadrada y acabado brillante. Combina una elegante manicura francesa tradicional en tonos nude y blanco con otras uñas en base rosa malva y puntas naranja coral con glitter. La decoración incluye delicados motivos florales blancos pintados a mano, pequeños detalles de purpurina plateada y destellos que aportan luminosidad y personalidad al conjunto. Una manicura original que mezcla elegancia, color y creatividad.",
      image: "imgs/uñas/esculpidas.png",
      alt: "Uñas esculpidas largas de forma cuadrada con manicura francesa blanca, puntas naranja coral con glitter, base nude rosada y decoración floral blanca con detalles plateados."
    },
    {
      id: 3,
      category: "uñas",
      title: "Rojo Cereza",
      subtitle: "Esmaltado semipermanente · Rojo intenso",
      description: "Manicura semipermanente en un elegante tono rojo cereza con acabado ultrabrillante. Presenta uñas de longitud media y forma ovalada ligeramente almendrada, con una aplicación uniforme que aporta intensidad y profundidad al color. Un diseño clásico, sofisticado y atemporal, perfecto para quienes buscan unas manos elegantes con un toque de personalidad.",
      image: "imgs/uñas/semipermanenteNatural.png",
      alt: "Manicura semipermanente en color rojo cereza intenso con uñas de forma ovalada almendrada y acabado brillante."
    },
    {
      id: 4,
      category: "uñas",
      title: "Coral Floral",
      subtitle: "Esmaltado semipermanente · Nail Art",
      description: "Manicura semipermanente en un favorecedor tono coral rosado con acabado brillante. El diseño combina un esmaltado liso y uniforme en la mayoría de las uñas con delicadas decoraciones florales en tonos amarillo, naranja, rojo y verde. Las pequeñas flores aportan un aire alegre, fresco y primaveral, creando una manicura divertida y femenina sin perder la elegancia.",
      image: "imgs/uñas/semipermanenteNatural2.png",
      alt: "Uñas cortas de forma cuadrada con esmalte semipermanente coral rosado brillante y pequeñas flores decorativas multicolor."
    },
    /*{
      id: 5,
      category: "uñas",
      title: "Nude Abstracto",
      subtitle: "Esmaltado semipermanente · Decoración metalizada",
      description: "Manicura semipermanente sobre una delicada base rosa nude translúcida con acabado brillante. Cada uña incorpora pequeños trazos curvos y formas abstractas en tonos plateados y efecto cromado, creando un diseño artístico y moderno. La combinación de tonos naturales con detalles metalizados aporta luminosidad y sofisticación sin recargar el conjunto. Ideal para quienes buscan una manicura discreta con un toque original.",
      image: "imgs/uñas/semipermanenteNatural3.png",
      alt: "Manicura semipermanente en tono nude rosado con uñas cortas redondeadas y decoración abstracta plateada de efecto cromado."
    },*/
    {
      id: 6,
      category: "uñas",
      title: "Burgundy Floral",
      subtitle: "Semipermanente con refuerzo · Nail Art",
      description: "Manicura semipermanente con refuerzo que combina la elegancia del burdeos intenso con la delicadeza del rosa empolvado. El diseño alterna uñas en tonos vino y nude rosado, incorporando detalles de manicura francesa invertida y delicadas flores decorativas en tonos burdeos y blanco. Las uñas presentan una forma almendrada y un acabado brillante que realza el contraste entre ambos colores. Una propuesta romántica, elegante y con personalidad.",
      image: "imgs/uñas/semipermanenteRefu.png",
      alt: "Manicura semipermanente con refuerzo en uñas almendradas, combinando esmalte burdeos, rosa empolvado, detalles de manicura francesa y decoración floral blanca y burdeos."
    },
  // =========================
  // FACIAL
  // =========================
    
  {
    id: 7,
    category: "facial",
    title: "Limpieza Facial Premium",
    subtitle: "Punta de diamante · Ultrasonidos",
    description: "Tratamiento facial de limpieza profunda que combina la exfoliación mediante punta de diamante con la tecnología de la paleta de ultrasonidos. Ayuda a eliminar células muertas, retirar impurezas y mejorar la textura de la piel. Una experiencia de renovación facial que deja el rostro más suave, luminoso y con una agradable sensación de frescura.",
    image: "https://images.pexels.com/photos/29648627/pexels-photo-29648627.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento profesional de microdermoabrasión facial con aparatología en un centro de estética."
  },

  {
    id: 8,
    category: "facial",
    title: "Hidrafacial",
    subtitle: "Limpieza profunda · Hidratación",
    description: "Tratamiento facial con aparatología especializada que combina limpieza, exfoliación e hidratación. Mediante diferentes fases de aplicación se trabaja la eliminación de impurezas y la renovación superficial de la piel, aportando una apariencia más fresca, uniforme y luminosa. Ideal para quienes buscan mejorar el aspecto de su rostro y disfrutar de una piel cuidada y revitalizada.",
    image: "https://images.pexels.com/photos/18209809/pexels-photo-18209809.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento Hydrafacial realizado por una profesional mediante aparatología estética en una cabina moderna."
  },

  {
    id: 9,
    category: "facial",
    title: "Microneedling con Exosomas",
    subtitle: "Hidratación profunda · Renovación facial",
    description: "Tratamiento facial avanzado que combina la técnica de microneedling con la aplicación de productos cosméticos con exosomas. Mediante un dispositivo de microagujas se trabaja la superficie cutánea para favorecer la penetración de los activos cosméticos. Un tratamiento orientado al cuidado, la hidratación y la mejora de la apariencia y textura de la piel.",
    image: "https://images.pexels.com/photos/30809949/pexels-photo-30809949.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Procedimiento profesional de microneedling facial con dispositivo de microagujas en una clínica estética."
  },

  {
    id: 10,
    category: "facial",
    title: "IPL Facial",
    subtitle: "Luz pulsada intensa · Cuidado de la piel",
    description: "Tratamiento facial mediante tecnología IPL (luz pulsada intensa), orientado a mejorar el aspecto general de la piel. La luz pulsada permite trabajar diferentes preocupaciones estéticas, como la apariencia de manchas y rojeces, siempre tras una valoración previa de la piel. Una tecnología avanzada para personalizar los tratamientos faciales.",
    image: "https://images.pexels.com/photos/32078961/pexels-photo-32078961.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento facial de luz y tecnología estética aplicado por una profesional en una cabina de belleza."
  },

  {
    id: 11,
    category: "facial",
    title: "Peeling Químico",
    subtitle: "Exfoliación química · Renovación cutánea",
    description: "Tratamiento facial basado en la aplicación controlada de activos exfoliantes que ayudan a renovar las capas superficiales de la piel. Se adapta a las necesidades y características de cada rostro, trabajando la textura, luminosidad y uniformidad del tono. Una opción para quienes desean mejorar el aspecto de su piel mediante un protocolo personalizado.",
    image: "https://images.pexels.com/photos/37229298/pexels-photo-37229298.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Sesión de tratamiento facial profesional en cabina estética con aplicación de productos cosméticos."
  },

  {
    id: 12,
    category: "facial",
    title: "Bellaction Duo Facial",
    subtitle: "Aparatología estética · Tratamiento facial",
    description: "Tratamiento facial realizado con aparatología estética Bellaction Duo. Una experiencia de cuidado personalizado que trabaja la zona facial mediante técnicas de estimulación y masaje mecánico. El protocolo se adapta a las características y necesidades de cada persona, ofreciendo una sesión de cuidado y bienestar facial.",
    image: "https://images.pexels.com/photos/3736280/pexels-photo-3736280.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Aparatología estética profesional preparada para realizar tratamientos faciales en un centro de belleza."
  },

  {
    id: 13,
    category: "facial",
    title: "INDIBA Facial",
    subtitle: "Radiofrecuencia · Rejuvenecimiento estético",
    description: "Tratamiento facial con tecnología INDIBA basado en radiofrecuencia a una frecuencia específica para el cuidado de la piel. Se trabaja mediante un protocolo personalizado orientado a mejorar el aspecto, la elasticidad y la luminosidad del rostro. Una experiencia de bienestar facial que combina tecnología avanzada y cuidado profesional.",
    image: "https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento facial con aparatología estética en una cabina profesional de belleza."
  },

  {
    id: 14,
    category: "facial",
    title: "Lifting de Pestañas",
    subtitle: "Curvatura natural · Mirada definida",
    description: "Tratamiento de belleza diseñado para realzar las pestañas naturales mediante una técnica de elevación y curvatura desde la raíz. Permite conseguir una mirada más abierta y unas pestañas visualmente más largas y definidas, sin necesidad de extensiones. El resultado es una mirada natural, elegante y cuidada.",
    image: "https://images.pexels.com/photos/5128222/pexels-photo-5128222.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Profesional realizando un tratamiento de lifting de pestañas en una clienta."
  },

  {
    id: 15,
    category: "facial",
    title: "Lifting y Laminado de Cejas",
    subtitle: "Diseño de cejas · Efecto peinado",
    description: "Tratamiento de diseño y laminado de cejas que permite moldear y fijar el vello para conseguir una apariencia más definida, ordenada y uniforme. Se trabaja la dirección de cada pelo para conseguir un efecto de mayor volumen y unas cejas visualmente más estructuradas, respetando la forma natural del rostro.",
    image: "https://images.pexels.com/photos/33580445/pexels-photo-33580445.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Profesional realizando un tratamiento de diseño y cuidado de cejas en un centro de estética."
  },

  {
    id: 16,
    category: "facial",
    title: "Depilación Facial",
    subtitle: "Hilo · Cera · Pinzas",
    description: "Servicio de depilación facial personalizada mediante diferentes técnicas de eliminación del vello, como hilo, cera o pinzas. Se trabaja cuidadosamente cada zona para conseguir un acabado limpio y definido, respetando las características de la piel y la forma natural del rostro. Ideal para mantener unas cejas perfectamente perfiladas y una piel cuidada.",
    image: "https://images.pexels.com/photos/8558244/pexels-photo-8558244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento profesional de depilación facial con hilo para definir las cejas."
  },

  // =========================
  // CORPORAL
  // =========================

  {
    id: 17,
    category: "corporal",
    title: "INDIBA Corporal",
    subtitle: "Radiofrecuencia · Bienestar corporal",
    description: "Tratamiento corporal realizado mediante tecnología INDIBA, basado en radiofrecuencia para trabajar diferentes zonas del cuerpo. Se desarrolla mediante sesiones personalizadas que combinan aparatología y técnicas profesionales de aplicación, orientadas al cuidado corporal y a mejorar el aspecto de la piel.",
    image: "https://images.pexels.com/photos/3736521/pexels-photo-3736521.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Aparatología estética moderna utilizada para tratamientos corporales en una cabina profesional."
  },

  {
    id: 18,
    category: "corporal",
    title: "Bellaction Duo Corporal",
    subtitle: "Aparatología estética · Remodelación corporal",
    description: "Tratamiento corporal con aparatología Bellaction Duo, diseñado para trabajar distintas zonas del cuerpo mediante estimulación y masaje mecánico. Se realiza siguiendo un protocolo adaptado a las necesidades de cada persona, ofreciendo una experiencia de cuidado corporal y bienestar.",
    image: "https://images.pexels.com/photos/3736280/pexels-photo-3736280.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Equipamiento profesional de aparatología estética para tratamientos corporales."
  },

  {
    id: 19,
    category: "corporal",
    title: "Masajes Corporales",
    subtitle: "Drenantes · Liporeductores · Relajantes",
    description: "Experiencias de cuidado corporal adaptadas a diferentes necesidades mediante técnicas manuales de masaje. Los masajes drenantes están orientados a favorecer el bienestar y la sensación de ligereza; los liporeductores trabajan zonas corporales específicas mediante maniobras especializadas; y los relajantes proporcionan un momento de desconexión y descanso. Cada sesión se personaliza según las preferencias y objetivos de la persona.",
    image: "https://images.pexels.com/photos/6628655/pexels-photo-6628655.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Sesión de masaje corporal profesional en una cabina de estética y bienestar."
  },

  {
    id: 20,
    category: "corporal",
    title: "Maderoterapia",
    subtitle: "Masaje corporal · Instrumentos de madera",
    description: "Tratamiento corporal que utiliza diferentes instrumentos de madera diseñados para realizar maniobras de masaje sobre distintas zonas del cuerpo. Mediante movimientos y presiones controladas se trabaja el bienestar corporal y el aspecto de la piel. Una técnica manual que combina tradición, cuidado y una experiencia de masaje personalizada.",
    image: "https://images.pexels.com/photos/10893346/pexels-photo-10893346.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento corporal de maderoterapia realizado con rodillo de madera sobre la espalda de una clienta."
  },

  {
    id: 21,
    category: "corporal",
    title: "Fotodepilación IPL",
    subtitle: "Luz pulsada intensa · Depilación",
    description: "Tratamiento de fotodepilación mediante tecnología IPL (luz pulsada intensa), que utiliza pulsos de luz para actuar sobre el folículo piloso. Se aplica en las zonas corporales seleccionadas siguiendo un protocolo personalizado y una valoración previa de la piel y del vello. Una alternativa tecnológica para quienes buscan reducir progresivamente el crecimiento del vello.",
    image: "https://images.pexels.com/photos/10822318/pexels-photo-10822318.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Tratamiento de fotodepilación IPL realizado con un dispositivo de luz pulsada sobre el brazo."
  },
  // =========================
  // MAQUILLAJES
  // =========================
   {
    id: 22,
    category: "maquillaje",
    title: "Flamenca Floral",
    subtitle: "Maquillaje de fiesta · Estilo flamenco",
    description: "Maquillaje de inspiración flamenca que combina sombras en tonos rosados y malvas con un delineado negro intenso que realza la mirada. El acabado incluye una piel luminosa y uniforme, mejillas suavemente definidas y labios en un favorecedor tono rosa. El conjunto se complementa con un elegante recogido adornado con grandes flores en tonos fucsia y naranja, creando un look lleno de personalidad, color y tradición.",
    image: "imgs/maquillajes/flamenca.jpg",
    alt: "Maquillaje de fiesta con sombras rosadas y malvas, delineado negro, labios rosa y recogido decorado con grandes flores fucsias y naranjas."
  },
  {
    id: 23,
    category: "maquillaje",
    title: "Belleza Natural",
    subtitle: "Maquillaje social · Acabado natural",
    description: "Maquillaje social de acabado natural que realza los rasgos del rostro sin perder frescura y elegancia. Se combina una piel uniforme y luminosa con sombras en tonos neutros, una mirada suavemente definida y labios en un tono rosa natural. El resultado se completa con un peinado de rizos voluminosos y definidos, aportando movimiento y un estilo femenino y sofisticado.",
    image: "imgs/maquillajes/belleza-natural.jpg",
    alt: "Maquillaje social natural con sombras neutras, piel luminosa, labios rosados y cabello rubio rizado con volumen."
  },

  {
    id: 24,
    category: "maquillaje",
    title: "Fantasy Editorial",
    subtitle: "Maquillaje artístico · Caracterización",
    description: "Propuesta de maquillaje artístico y editorial que apuesta por el contraste de colores y la creatividad. Destacan las amplias aplicaciones de sombra blanca alrededor de los ojos, trabajadas con formas gráficas que crean un efecto visual atrevido y original. El look se completa con labios rojos intensos y una piel luminosa, consiguiendo una composición de inspiración fantasía y alta caracterización.",
    image: "imgs/maquillajes/fantasy-editorial.jpg",
    alt: "Maquillaje artístico editorial con grandes aplicaciones de sombra blanca alrededor de los ojos, labios rojos intensos y acabado luminoso."
  },
  {
    id: 25,
    category: "maquillaje",
    title: "Smokey Glam",
    subtitle: "Maquillaje de noche · Ojos ahumados",
    description: "Maquillaje de noche sofisticado protagonizado por unos intensos ojos ahumados en tonos negros, grises y marrones. El difuminado se extiende hacia el exterior del ojo para conseguir una mirada profunda y elegante, acompañado de un delineado definido y pestañas destacadas. La piel mantiene un acabado natural y luminoso, mientras que los labios en tonos nude equilibran el conjunto y dejan todo el protagonismo a la mirada.",
    image: "imgs/maquillajes/smokey-glam.jpg",
    alt: "Maquillaje de noche con ojos ahumados en tonos oscuros, delineado negro, pestañas definidas y labios nude."
  },
  {
    id: 26,
    category: "maquillaje",
    title: "Elegancia Atemporal",
    subtitle: "Maquillaje social · Piel natural",
    description: "Maquillaje social elegante y favorecedor, diseñado para realzar la belleza natural y respetar los rasgos del rostro. Se trabaja una piel uniforme con un acabado luminoso, sombras en tonos tierra y una mirada suavemente delineada. Los labios en tonos nude rosados aportan equilibrio y naturalidad. Una propuesta sofisticada y versátil que demuestra que la elegancia no depende de la intensidad del maquillaje.",
    image: "imgs/maquillajes/elegancia-atemporal.jpg",
    alt: "Maquillaje social elegante con sombras marrones suaves, delineado discreto, piel luminosa y labios nude rosados."
  },
  {
    id: 27,
    category: "maquillaje",
    title: "Dark Glam",
    subtitle: "Maquillaje de noche · Estilo dramático",
    description: "Maquillaje de inspiración dramática que combina una mirada intensa con unos labios rojos profundos. Los ojos se trabajan con sombras oscuras y difuminados que aportan profundidad, mientras que la piel mantiene un acabado cuidado y natural. El contraste entre los labios rojos y la intensidad de la mirada crea un resultado sofisticado, atrevido y con mucha personalidad.",
    image: "imgs/maquillajes/image.png",
    alt: "Maquillaje de estilo dramático con ojos oscuros ahumados, labios rojo intenso y acabado sofisticado sobre un fondo oscuro."
  }
];
    //TRATAMIENTOS
    
    //FACIAL
    //Limpiezas de con punta de diamante y paleta de ultrasonidos
    //Limpiezas con aparatologia hidrafacial
    //Tratamientos de hidratacion microneedling con exosomas
    //Tratamientos de IPL luz pulsada intensa
    //Tratamientos de peeling quimicos
    //Tratamientos con bellaction duo
    //Tratamientos con INDIBA
    //Lifting de pestañas
    //Lifting y laminado de cejas
    //Depilacion con hilo/cera/pinzas
    
    //CORPORAL
    //Tratamientos con INDIBA
    //Tratamientos con bellaction duo
    //Masajes corporales drenantes, liporeductores, relajantes
    //Tratamientos de maderoterapia
    //Fotodepilacion con IPL


    //{ id: 13, category: "uñas", title: "Nude elegance", subtitle: "Manicura · Esmaltado", description: "Una manicura delicada en tonos nude, con acabado brillante y una forma cuidada para un resultado limpio, elegante y atemporal.", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=85", alt: "Manicura en tonos suaves" },
    //{ id: 2, category: "uñas", title: "Pink details", subtitle: "Nail art · Diseño", description: "Diseño femenino con pequeños detalles decorativos. Una propuesta sutil para dar personalidad a tus uñas sin perder elegancia.", image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=85", alt: "Diseño de uñas rosa" },
    //{ id: 3, category: "uñas", title: "Classic red", subtitle: "Manicura · Color", description: "El clásico rojo reinventado: un color intenso, uniforme y sofisticado que nunca pasa de moda.", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=85", alt: "Manicura roja" },
    //{ id: 4, category: "peluqueria", title: "Soft waves", subtitle: "Peinado · Ondas", description: "Ondas suaves con movimiento y brillo natural. Un acabado versátil, perfecto tanto para una ocasión especial como para un look diario.", image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=900&q=85", alt: "Cabello con ondas suaves" },
    //{ id: 5, category: "peluqueria", title: "Golden glow", subtitle: "Color · Luminosidad", description: "Un trabajo de color pensado para aportar dimensión, luz y naturalidad, respetando la armonía del cabello.", image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=900&q=85", alt: "Resultado de peluquería" },
    //{ id: 6, category: "peluqueria", title: "The perfect finish", subtitle: "Styling · Acabado", description: "Un peinado pulido y elegante donde el acabado y el movimiento son los protagonistas.", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&q=85", alt: "Peinado profesional" },
    //{ id: 7, category: "maquillaje", title: "Natural glow", subtitle: "Maquillaje · Natural", description: "Piel luminosa, tonos suaves y un acabado fresco que realza los rasgos sin ocultar la belleza natural.", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&q=85", alt: "Maquillaje natural" },
    //{ id: 8, category: "maquillaje", title: "Golden hour", subtitle: "Maquillaje · Evento", description: "Una propuesta cálida y sofisticada para ocasiones especiales, con luz, definición y equilibrio.", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=900&q=85", alt: "Productos de maquillaje y belleza" },
    //{ id: 9, category: "maquillaje", title: "Soft glam", subtitle: "Maquillaje · Glam", description: "Un look soft glam con ojos definidos, piel trabajada y labios equilibrados. Elegante y favorecedor.", image: "https://images.unsplash.com/photo-1522335789203-aefd1fc54bc9?w=900&q=85", alt: "Look de maquillaje" },
    //{ id: 10, category: "tratamientos", title: "Skin ritual", subtitle: "Facial · Cuidado", description: "Un momento dedicado a la piel: preparación, cuidado y una rutina adaptada a las necesidades de cada persona.", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85", alt: "Tratamiento facial en cabina" },
    //{ id: 11, category: "tratamientos", title: "Pure relaxation", subtitle: "Bienestar · Facial", description: "Una experiencia relajante para desconectar y dedicar tiempo al cuidado personal en un ambiente tranquilo.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbece2?w=900&q=85", alt: "Ambiente de spa y bienestar" },
    //{ id: 22, category: "tratamientos", title: "Glow care", subtitle: "Piel · Hidratación", description: "Cuidado orientado a aportar confort e hidratación, con atención personalizada y productos adecuados a cada piel.", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900&q=85", alt: "Productos para el cuidado de la piel" }
 

  const track = document.querySelector("#portfolio-track");
  const count = document.querySelector("#portfolio-count");
  const dialog = document.querySelector("#project-dialog");
  const toast = document.querySelector("#toast");
  let toastTimer;

  const categoryNames = {
  "uñas": "Uñas",
  "peluqueria": "Peluquería",
  "maquillaje": "Maquillaje",
  "tratamientos": "Tratamientos",
  "facial": "Tratamientos faciales",
  "corporal": "Tratamientos corporales"
};
  function renderProjects(filter = "todos") {
    if (!track) return;
    const filtered = filter === "todos" ? projects : projects.filter(p => p.category === filter);
    track.replaceChildren();
    filtered.forEach((project, index) => {
      const article = document.createElement("article");
      article.className = "project-card";
      article.tabIndex = 0;
      article.setAttribute("role", "button");
      article.setAttribute("aria-label", `Ver ${project.title}`);
      article.innerHTML = `
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.alt}" loading="lazy">
          <div class="project-overlay"><span>VER PROYECTO</span><span class="project-open" aria-hidden="true"></span></div>
        </div>
        <div class="project-meta">
          <div><h3>${project.title}</h3><p>${categoryNames[project.category]} · ${project.subtitle}</p></div>
          <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        </div>`;
      article.addEventListener("click", () => openProject(project));
      article.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject(project);
        }
      });
      track.appendChild(article);
    });
    if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? "proyecto" : "proyectos"}`;
  }

function openProject(project) {

  const categoryName =
    categoryNames[project.category] || project.category;

  const image = document.querySelector("#dialog-image");
  const category = document.querySelector("#dialog-category");
  const title = document.querySelector("#dialog-title");
  const description = document.querySelector("#dialog-description");

  image.src = project.image;
  image.alt = project.alt || project.title;

  category.textContent = categoryName.toUpperCase();
  title.textContent = project.title;
  description.textContent = project.description;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }
}

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderProjects(button.dataset.filter);
      track.scrollTo({ left: 0, behavior: "smooth" });
    });
  });

  document.querySelectorAll("[data-filter-link]").forEach(link => {
    link.addEventListener("click", () => {
      const filter = link.dataset.filterLink;
      const target = document.querySelector(`.filter-button[data-filter="${filter}"]`);
      if (target) target.click();
    });
  });

  document.querySelector(".dialog-close")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  dialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("is-open", open);
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menú");
  }));

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  const whatsapp = String(config.whatsappNumber || "").replace(/\D/g, "");
  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    if (whatsapp.length >= 10) {
      link.href = `https://wa.me/${whatsapp}?text=${encodeURIComponent(config.bookingMessage || "Hola, quiero contactar contigo para saber mas de ti y de su situación de empleo actual.")}`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.href = "#contacto";
      link.addEventListener("click", event => {
        event.preventDefault();
        showToast("Configura el número de WhatsApp en js/config.js para activar las reservas.");
      });
    }
  });

  document.querySelectorAll("[data-instagram]").forEach(link => {
    if (config.instagramUrl) link.href = config.instagramUrl;
    if (config.instagramHandle) link.textContent = `${config.instagramHandle} `;
  });
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = config.location || "Añade tu ubicación");
  document.querySelectorAll("[data-hours]").forEach(el => el.textContent = config.hours || "Con cita previa");
  document.querySelector("#year").textContent = new Date().getFullYear();

  renderProjects();
})();
