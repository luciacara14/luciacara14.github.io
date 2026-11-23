(() => {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const projects = [
/*

  _   _  /\/|   _    ____    _           _____  ___  
 | | | ||/\/   / \  / ___|  / |         |___ / / _ \ 
 | | | | \| | / _ \ \___ \  | |  _____    |_ \| | | |
 | |_| | .` |/ ___ \ ___) | | | |_____|  ___) | |_| |
  \___/|_|\_/_/   \_\____/  |_|         |____/ \___/ 
                                                     
 */
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
      id: 6,
      category: "uñas",
      title: "Burgundy Floral",
      subtitle: "Semipermanente con refuerzo · Nail Art",
      description: "Manicura semipermanente con refuerzo que combina la elegancia del burdeos intenso con la delicadeza del rosa empolvado. El diseño alterna uñas en tonos vino y nude rosado, incorporando detalles de manicura francesa invertida y delicadas flores decorativas en tonos burdeos y blanco. Las uñas presentan una forma almendrada y un acabado brillante que realza el contraste entre ambos colores. Una propuesta romántica, elegante y con personalidad.",
      image: "imgs/uñas/semipermanenteRefu.png",
      alt: "Manicura semipermanente con refuerzo en uñas almendradas, combinando esmalte burdeos, rosa empolvado, detalles de manicura francesa y decoración floral blanca y burdeos."
    },
    {
      id: 7,
      category: "uñas",
      title: "Star Wars Nail Art",
      subtitle: "Manicura masculina · Nail Art personalizado",
      description: "Manicura masculina con uñas cortas en esmalte negro brillante y decoración temática inspirada en el universo Star Wars. El diseño combina pequeños detalles de estrellas y motivos espaciales con ilustraciones de personajes icónicos como R2-D2 y Grogu, además de otros elementos característicos de la saga. Una propuesta original, creativa y personalizada que demuestra que el Nail Art no tiene límites.",
      image: "imgs/uñas/masculinas.png",
      alt: "Manicura masculina de uñas cortas con esmalte negro brillante, estrellas y diseños personalizados inspirados en Star Wars, incluyendo R2-D2 y Grogu."
    },
    {
      id: 8,
      category: "uñas",
      title: "French Snowflakes",
      subtitle: "Semipermanente francesa · Nail Art delicado",
      description: "Manicura semipermanente de estilo natural que combina una base rosa nude con delicadas puntas blancas siguiendo la técnica de manicura francesa. El diseño se completa con pequeños copos de nieve blancos decorativos sobre algunas uñas, aportando un toque invernal, elegante y sutil. Una propuesta clásica y sofisticada con pequeños detalles artísticos que realzan la belleza natural de las manos.",
      image: "imgs/uñas/semipermanenteFrancesa.png",
      alt: "Manicura semipermanente francesa con base rosa nude, puntas blancas y pequeños copos de nieve blancos decorativos."
    },
    {
      id: 9,
      category: "uñas",
      title: "Red Abstract Nail Art",
      subtitle: "Semipermanente con refuerzo · Decoración artística",
      description: "Manicura semipermanente con refuerzo que combina una base rosa translúcida con diferentes diseños decorativos en rojo intenso. Las uñas alternan detalles de líneas curvas, ondas y formas abstractas, creando una composición dinámica y original. Algunos diseños incorporan pequeños destellos dorados que aportan luminosidad al conjunto. Una propuesta moderna, atrevida y femenina que juega con el contraste entre el rosa natural y la intensidad del rojo.",
      image: "imgs/uñas/semipermanenteRefuerzo.png",
      alt: "Manicura semipermanente con refuerzo en base rosa translúcida, decoraciones abstractas de líneas y ondas rojas y pequeños detalles dorados."
    },
    {
      id: 10,
      category: "uñas",
      title: "Mauve Glitter Sculpted",
      subtitle: "Uñas esculpidas · Acabado glitter",
      description: "Uñas esculpidas de longitud larga con forma cuadrada suavemente redondeada y un elegante esmalte en tono malva rosado. El diseño incorpora partículas de purpurina plateada y rosada distribuidas por toda la superficie, creando un efecto brillante y luminoso que destaca especialmente bajo la luz. El acabado uniforme y de alto brillo aporta profundidad al color y un aspecto sofisticado. Una manicura ideal para quienes buscan unas uñas llamativas, delicadas y llenas de luz.",
      image: "imgs/uñas/esculpidas2.png",
      alt: "Uñas esculpidas largas de forma cuadrada con esmalte malva rosado, micropurpurina brillante y acabado glossy."
    },
    {
      id: 11,
      category: "uñas",
      title: "Botanical Marble Nails",
      subtitle: "Uñas esculpidas · Nail Art efecto mármol",
      description: "Manicura de uñas esculpidas que combina una base nude rosada con una elegante decoración en tonos blanco y verde. El diseño presenta detalles abstractos de efecto mármol y formas orgánicas que recuerdan a hojas y elementos botánicos, creando una composición artística sobre las puntas de las uñas. El contraste entre los tonos naturales, el blanco y el verde aporta frescura y sofisticación. Una propuesta delicada y original inspirada en la naturaleza.",
      image: "imgs/uñas/esculpidas3.png",
      alt: "Uñas esculpidas con base nude rosada y decoración de efecto mármol en blanco y verde, con motivos orgánicos y botánicos."
    },
/*

  _____ _    ____ ___    _    _       _____  ___             __    ___  
 |  ___/ \  / ___|_ _|  / \  | |     |___ / / _ \           / /_  / _ \ 
 | |_ / _ \| |    | |  / _ \ | |       |_ \| | | |  _____  | '_ \| | | |
 |  _/ ___ \ |___ | | / ___ \| |___   ___) | |_| | |_____| | (_) | |_| |
 |_|/_/   \_\____|___/_/   \_\_____| |____/ \___/           \___/ \___/ 
                                                                        

*/
    
  {
    id: 30,
    category: "facial",
    title: "Limpieza facial con punta de diamante y ultrasonidos",
    subtitle: "Exfoliación · Limpieza profunda · Renovación cutánea",
    description: "Realizo una limpieza facial profunda combinando la exfoliación con punta de diamante y la paleta de ultrasonidos. Comienzo eliminando los restos de maquillaje e impurezas y preparando la piel para el tratamiento. Utilizo la punta de diamante para exfoliar suavemente, retirar células muertas y mejorar la textura del rostro. Después trabajo con la paleta ultrasónica para facilitar la eliminación de residuos y completar la limpieza. Finalizo aplicando productos hidratantes y específicos según las necesidades de cada piel, consiguiendo un rostro más limpio, suave y luminoso.",
    image: "imgs/facial/punta-diamante.jpeg",
    alt: "Profesional realizando un tratamiento de limpieza facial."
  },

  {
    id: 31,
    category: "facial",
    title: "Limpieza facial con aparatología Hydrafacial",
    subtitle: "Hidratación · Extracción de impurezas · Luminosidad",
    description: "Realizo limpiezas faciales avanzadas utilizando aparatología Hydrafacial, que combina diferentes fases de exfoliación, extracción de impurezas e hidratación. Comienzo preparando la piel y seleccionando los productos y cabezales adecuados. A continuación, trabajo con el dispositivo realizando una limpieza progresiva que ayuda a eliminar células muertas, extraer residuos acumulados en los poros y aportar activos hidratantes. Adapto el tratamiento a las características de cada piel y finalizo con productos específicos para conseguir un rostro más hidratado, uniforme y luminoso.",
    image: "imgs/facial/hydrafacial.jpg",
    alt: "Tratamiento profesional de cuidado e hidratación facial."
  },

  {
    id: 32,
    category: "facial",
    title: "Hidratación facial con microneedling y exosomas",
    subtitle: "Microneedling · Hidratación · Cuidado intensivo",
    description: "Realizo tratamientos faciales de hidratación intensiva mediante microneedling, utilizando un dispositivo tipo Dermapen que incorpora microagujas para generar microcanales controlados en la superficie cutánea. Comienzo limpiando y preparando cuidadosamente el rostro y seleccionando los productos específicos con exosomas compatibles con el procedimiento. Trabajo las diferentes zonas mediante pasadas controladas, siguiendo el protocolo establecido y las condiciones de seguridad correspondientes. Este tratamiento está orientado a mejorar la textura, favorecer la renovación cutánea y potenciar el cuidado e hidratación de la piel.",
    image: "imgs/facial/DERMAPEN-CON-EXOSOMAS.webp",
    alt: "Tratamiento de cuidado facial realizado por una profesional de estética."
  },

  {
    id: 33,
    category: "facial",
    title: "Tratamiento facial con IPL",
    subtitle: "Luz pulsada intensa · Fotorejuvenecimiento · Cuidado cutáneo",
    description: "Realizo tratamientos faciales con IPL (luz pulsada intensa), una tecnología que utiliza pulsos de luz para trabajar diferentes alteraciones estéticas de la piel. Tras valorar el estado cutáneo y comprobar que no existan contraindicaciones, preparo el rostro y selecciono los parámetros adecuados según el objetivo del tratamiento. Aplico los pulsos de luz sobre las zonas indicadas utilizando la protección correspondiente. Esta técnica se utiliza principalmente para trabajar manchas, rojeces y signos del fotoenvejecimiento, buscando mejorar la uniformidad y el aspecto general de la piel. Finalizo con productos calmantes y protección solar.",
    image: "imgs/facial/facial-ipl.png",
    alt: "Productos y material utilizados en tratamientos estéticos faciales."
  },

  {
    id: 34,
    category: "facial",
    title: "Peelings químicos faciales",
    subtitle: "Exfoliación química · Renovación · Textura de la piel",
    description: "Realizo peelings químicos faciales mediante la aplicación controlada de soluciones exfoliantes que ayudan a eliminar las células muertas y favorecer la renovación superficial de la piel. Comienzo valorando las necesidades del rostro para seleccionar el tipo de peeling y su concentración. Limpio y preparo la zona antes de extender el producto de manera uniforme, respetando los tiempos de exposición y el protocolo correspondiente. Según el producto utilizado, realizo su neutralización o retirada y finalizo con cosméticos calmantes, hidratantes y protección solar. El objetivo es mejorar la textura, aportar luminosidad y conseguir una piel más uniforme.",
    image: "imgs/facial/peeling.jpg",
    alt: "Tratamiento de cuidado y renovación de la piel del rostro."
  },

  {
    id: 35,
    category: "facial",
    title: "Tratamiento facial con Bellaction Duo",
    subtitle: "Aparatología estética · Reafirmación · Drenaje facial",
    description: "Realizo tratamientos faciales con Bellaction Duo utilizando sus accesorios específicos para trabajar el tejido mediante técnicas de masaje y estimulación mecánica. Comienzo preparando la piel y aplicando el producto necesario para facilitar el deslizamiento del dispositivo. Trabajo las diferentes zonas del rostro mediante movimientos controlados, prestando especial atención a las áreas que necesitan un mayor cuidado, como el óvalo facial, las mejillas y la zona mandibular. El tratamiento está orientado a favorecer el drenaje, mejorar el aspecto de la piel y trabajar la firmeza y definición del rostro.",
    image: "imgs/facial/bellactionfacial.jpg",
    alt: "Sesión de tratamiento de belleza y cuidado facial."
  },

  {
    id: 36,
    category: "facial",
    title: "Tratamiento facial con INDIBA",
    subtitle: "Radiofrecuencia · Reafirmación · Calidad de la piel",
    description: "Realizo tratamientos faciales con INDIBA mediante tecnología de radiofrecuencia a 448 kHz. Utilizo los electrodos específicos junto con el producto conductor correspondiente, realizando movimientos suaves y continuos sobre las diferentes zonas del rostro. Trabajo especialmente áreas como las mejillas, el contorno facial, la frente y la zona mandibular, adaptando la sesión a las necesidades de cada piel. Esta tecnología genera un efecto térmico y biológico en los tejidos y se utiliza para mejorar el aspecto cutáneo, trabajar la firmeza y aportar una apariencia más revitalizada y uniforme al rostro.",
    image: "imgs/facial/facialIndiba.jpeg",
    alt: "Sesión de tratamiento estético y bienestar."
  },

  {
    id: 37,
    category: "facial",
    title: "Lifting de pestañas",
    subtitle: "Curvatura · Definición · Realce de la mirada",
    description: "Realizo lifting de pestañas para elevar y curvar las pestañas naturales desde la raíz, consiguiendo una mirada más abierta y definida sin necesidad de extensiones. Comienzo limpiando las pestañas y seleccionando el molde de silicona adecuado según su longitud y la curvatura deseada. Coloco las pestañas cuidadosamente sobre el molde y aplico los productos específicos para modificar y fijar su forma, respetando los tiempos de exposición. Para finalizar, retiro los productos y aplico un acondicionador que ayuda a mantener las pestañas cuidadas y con un acabado natural.",
    image: "imgs/facial/liftingPestañas.jpeg",
    alt: "Tratamiento de belleza para realzar las pestañas."
  },

  {
    id: 38,
    category: "facial",
    title: "Lifting y laminado de cejas",
    subtitle: "Diseño de cejas · Laminado · Definición",
    description: "Realizo tratamientos de lifting y laminado de cejas para moldear el pelo natural, conseguir una dirección más uniforme y dar mayor definición a la mirada. Comienzo estudiando la forma de las cejas y las características del rostro para determinar el diseño más adecuado. Limpio la zona, aplico los productos específicos de laminado y trabajo el peinado del pelo para conseguir la forma deseada. Después fijo el resultado, retiro los productos siguiendo el protocolo y finalizo acondicionando las cejas para conseguir un acabado definido, ordenado y natural.",
    image: "imgs/facial/liftingLaminado.jpeg",
    alt: "Trabajo de diseño y cuidado de cejas."
  },

  {
    id: 39,
    category: "facial",
    title: "Depilación facial con hilo, cera y pinzas",
    subtitle: "Depilación facial · Diseño · Definición",
    description: "Realizo servicios de depilación facial utilizando diferentes técnicas según la zona y las características de la piel. Trabajo con hilo para retirar el vello de forma precisa, especialmente en el diseño de cejas; utilizo cera para eliminar el vello de zonas como el labio superior y el mentón, y recurro a las pinzas para retirar pequeños pelos y perfeccionar el acabado. Preparo y limpio previamente la piel, cuido la simetría en el diseño de las cejas y adapto la técnica a cada zona. Finalizo aplicando productos calmantes para aliviar posibles rojeces y dejar la piel cuidada.",
    image: "imgs/facial/hilo.jpeg",
    alt: "Materiales y herramientas para tratamientos de belleza facial."
  },
/*

   ____ ___  ____  ____   ___  ____      _    _        __    ___             ___   ___  
  / ___/ _ \|  _ \|  _ \ / _ \|  _ \    / \  | |      / /_  / _ \           / _ \ / _ \ 
 | |  | | | | |_) | |_) | | | | |_) |  / _ \ | |     | '_ \| | | |  _____  | (_) | | | |
 | |__| |_| |  _ <|  __/| |_| |  _ <  / ___ \| |___  | (_) | |_| | |_____|  \__, | |_| |
  \____\___/|_| \_\_|    \___/|_| \_\/_/   \_\_____|  \___/ \___/             /_/ \___/ 
                                                                                        

*/
  {
    id: 60,
    category: "corporal",
    title: "Tratamiento corporal con INDIBA",
    subtitle: "Radiofrecuencia · Reafirmación · Bienestar corporal",
    description: "Realizo tratamientos corporales con INDIBA utilizando tecnología de radiofrecuencia a 448 kHz para trabajar diferentes zonas del cuerpo. Preparo la piel y aplico el producto conductor necesario antes de comenzar a utilizar los electrodos específicos del equipo. Trabajo mediante movimientos circulares y deslizamientos controlados sobre áreas como abdomen, piernas, glúteos y brazos, adaptando la técnica a las necesidades de cada persona. El tratamiento genera un efecto térmico en los tejidos y se utiliza para mejorar el aspecto de la piel, trabajar la firmeza y complementar los protocolos estéticos corporales.",
    image: "imgs/corporal/indiba-corporal.jpg",
    alt: "Tratamiento corporal realizado en un centro de estética."
  },

  {
    id: 61,
    category: "corporal",
    title: "Tratamiento corporal con Bellaction Duo",
    subtitle: "Aparatología estética · Drenaje · Remodelación corporal",
    description: "Realizo tratamientos corporales con Bellaction Duo utilizando sus diferentes accesorios para trabajar las zonas que presentan acumulación de tejido adiposo, retención de líquidos o falta de firmeza. Preparo la piel y aplico el producto necesario para facilitar el deslizamiento de la aparatología. Trabajo mediante movimientos rítmicos y controlados sobre áreas como abdomen, muslos, glúteos y brazos, siguiendo las técnicas y programas específicos del equipo. El tratamiento está orientado a favorecer el drenaje, estimular los tejidos y mejorar visualmente el aspecto y la textura de la piel.",
    image: "imgs/corporal/bellactionDuo.jpeg",
    alt: "Sesión de tratamiento corporal en un centro de estética."
  },

  {
    id: 62,
    category: "corporal",
    title: "Masajes corporales",
    subtitle: "Drenante · Liporreductor · Relajante",
    description: "Realizo diferentes tipos de masajes corporales adaptando las maniobras y la intensidad al objetivo de cada sesión. En los masajes drenantes utilizo movimientos suaves, rítmicos y específicos para favorecer el retorno de líquidos y aliviar la sensación de pesadez. En los masajes liporreductores trabajo las zonas localizadas mediante amasamientos, fricciones y maniobras más intensas orientadas al cuidado estético de los tejidos. Para los masajes relajantes utilizo movimientos lentos y envolventes que ayudan a liberar tensiones y proporcionar una sensación de bienestar. En todos ellos preparo previamente la piel y utilizo aceites o cremas de masaje adecuados.",
    image: "imgs/corporal/masajes.jpeg",
    alt: "Masaje corporal relajante realizado por una profesional."
  },

  {
    id: 63,
    category: "corporal",
    title: "Tratamiento corporal con maderoterapia",
    subtitle: "Masaje con madera · Drenaje · Remodelación estética",
    description: "Realizo tratamientos de maderoterapia utilizando diferentes instrumentos de madera diseñados para trabajar el cuerpo mediante masajes y maniobras específicas. Comienzo preparando la piel con un aceite o producto de masaje para facilitar el deslizamiento de los utensilios. Utilizo rodillos estriados, copas, tablas moldeadoras y otros accesorios para realizar movimientos repetitivos y controlados sobre zonas como abdomen, piernas y glúteos. Combino diferentes técnicas de masaje para favorecer el drenaje, estimular los tejidos y mejorar visualmente la textura y el aspecto de la piel.",
    image: "imgs/corporal/maderoterapia.jpeg",
    alt: "Tratamiento corporal de masaje y bienestar."
  },

  {
    id: 64,
    category: "corporal",
    title: "Fotodepilación corporal con IPL",
    subtitle: "Luz pulsada intensa · Depilación · Reducción progresiva del vello",
    description: "Realizo tratamientos de fotodepilación corporal mediante tecnología IPL (luz pulsada intensa), que utiliza pulsos de luz para actuar sobre la melanina del vello y alcanzar el folículo piloso. Antes de comenzar, valoro el fototipo de piel, las características del vello y las posibles contraindicaciones para seleccionar los parámetros adecuados. Preparo la zona, rasuro el vello cuando corresponde y aplico el equipo realizando disparos controlados sobre la superficie de la piel, utilizando las medidas de protección necesarias. El objetivo es debilitar progresivamente el crecimiento del vello mediante varias sesiones espaciadas y adaptadas a cada persona.",
    image: "imgs/corporal/corpo-ipl.png",
    alt: "Tratamiento de fotodepilación corporal mediante aparatología estética."
  },
  /**
  __  __    _    ___  _   _ ___ _     _        _       _ _____ ____     ___   ___            _ ____   ___  
 |  \/  |  / \  / _ \| | | |_ _| |   | |      / \     | | ____/ ___|   / _ \ / _ \          / |___ \ / _ \ 
 | |\/| | / _ \| | | | | | || || |   | |     / _ \ _  | |  _| \___ \  | (_) | | | |  _____  | | __) | | | |
 | |  | |/ ___ \ |_| | |_| || || |___| |___ / ___ \ |_| | |___ ___) |  \__, | |_| | |_____| | |/ __/| |_| |
 |_|  |_/_/   \_\__\_\\___/|___|_____|_____/_/   \_\___/|_____|____/     /_/ \___/          |_|_____|\___/ 
                                                                                                                                                                
   */
  {
    id: 90,
    category: "maquillaje",
    title: "Dark Glam",
    subtitle: "Maquillaje de noche · Estilo dramático",
    description: "Maquillaje de inspiración dramática que combina una mirada intensa con unos labios rojos profundos. Los ojos se trabajan con sombras oscuras y difuminados que aportan profundidad, mientras que la piel mantiene un acabado cuidado y natural. El contraste entre los labios rojos y la intensidad de la mirada crea un resultado sofisticado, atrevido y con mucha personalidad.",
    image: "imgs/maquillajes/image.png",
    alt: "Maquillaje de estilo dramático con ojos oscuros ahumados, labios rojo intenso y acabado sofisticado sobre un fondo oscuro."
  },
  {
    id: 91,
    category: "maquillaje",
    title: "Elegancia Atemporal",
    subtitle: "Maquillaje social · Piel natural",
    description: "Maquillaje social elegante y favorecedor, diseñado para realzar la belleza natural y respetar los rasgos del rostro. Se trabaja una piel uniforme con un acabado luminoso, sombras en tonos tierra y una mirada suavemente delineada. Los labios en tonos nude rosados aportan equilibrio y naturalidad. Una propuesta sofisticada y versátil que demuestra que la elegancia no depende de la intensidad del maquillaje.",
    image: "imgs/maquillajes/elegancia-atemporal.jpg",
    alt: "Maquillaje social elegante con sombras marrones suaves, delineado discreto, piel luminosa y labios nude rosados."
  },
    
  {
    id: 92,
    category: "maquillaje",
    title: "Flamenca Floral",
    subtitle: "Maquillaje de fiesta · Estilo flamenco",
    description: "Maquillaje de inspiración flamenca que combina sombras en tonos rosados y malvas con un delineado negro intenso que realza la mirada. El acabado incluye una piel luminosa y uniforme, mejillas suavemente definidas y labios en un favorecedor tono rosa. El conjunto se complementa con un elegante recogido adornado con grandes flores en tonos fucsia y naranja, creando un look lleno de personalidad, color y tradición.",
    image: "imgs/maquillajes/flamenca.jpg",
    alt: "Maquillaje de fiesta con sombras rosadas y malvas, delineado negro, labios rosa y recogido decorado con grandes flores fucsias y naranjas."
  },
  {
    id: 93,
    category: "maquillaje",
    title: "Belleza Natural",
    subtitle: "Maquillaje social · Acabado natural",
    description: "Maquillaje social de acabado natural que realza los rasgos del rostro sin perder frescura y elegancia. Se combina una piel uniforme y luminosa con sombras en tonos neutros, una mirada suavemente definida y labios en un tono rosa natural. El resultado se completa con un peinado de rizos voluminosos y definidos, aportando movimiento y un estilo femenino y sofisticado.",
    image: "imgs/maquillajes/belleza-natural.jpg",
    alt: "Maquillaje social natural con sombras neutras, piel luminosa, labios rosados y cabello rubio rizado con volumen."
  },

  {
    id: 94,
    category: "maquillaje",
    title: "Fantasy Editorial",
    subtitle: "Maquillaje artístico · Caracterización",
    description: "Propuesta de maquillaje artístico y editorial que apuesta por el contraste de colores y la creatividad. Destacan las amplias aplicaciones de sombra blanca alrededor de los ojos, trabajadas con formas gráficas que crean un efecto visual atrevido y original. El look se completa con labios rojos intensos y una piel luminosa, consiguiendo una composición de inspiración fantasía y alta caracterización.",
    image: "imgs/maquillajes/fantasy-editorial.jpg",
    alt: "Maquillaje artístico editorial con grandes aplicaciones de sombra blanca alrededor de los ojos, labios rojos intensos y acabado luminoso."
  },
  {
    id: 95,
    category: "maquillaje",
    title: "Smokey Glam",
    subtitle: "Maquillaje de noche · Ojos ahumados",
    description: "Maquillaje de noche sofisticado protagonizado por unos intensos ojos ahumados en tonos negros, grises y marrones. El difuminado se extiende hacia el exterior del ojo para conseguir una mirada profunda y elegante, acompañado de un delineado definido y pestañas destacadas. La piel mantiene un acabado natural y luminoso, mientras que los labios en tonos nude equilibran el conjunto y dejan todo el protagonismo a la mirada.",
    image: "imgs/maquillajes/smokey-glam.jpg",
    alt: "Maquillaje de noche con ojos ahumados en tonos oscuros, delineado negro, pestañas definidas y labios nude."
  }
];

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
// ===================================
// SERVICE IMAGE LIGHTBOX
// ===================================

const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeButton = document.querySelector(".lightbox-close");

const serviceCards = document.querySelectorAll(".service-card");

function openLightbox(image, title) {
    lightboxImage.src = image;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    lightboxImage.src = "";
}

serviceCards.forEach(card => {
    card.addEventListener("click", () => {
        const image = card.dataset.image;
        const title = card.dataset.title;

        if (image) {
            openLightbox(image, title);
        }
    });
});

// Cerrar con el botón
closeButton.addEventListener("click", closeLightbox);

// Cerrar pulsando fuera de la fotografía
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Cerrar pulsando ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
    }
});
})();
