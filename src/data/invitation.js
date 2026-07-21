const invitation = {
  // Datos usados por Welcome.jsx
  name: "Valentina",
  eventName: "Mis XV años",
  dateLabel: "21 de noviembre de 2026",

  // Datos principales de la quinceañera
  quinceanera: {
    nombre: "Valentina",

    nombreCompleto: "Valentina Hernández García",

    inicial: "V",

    frasePrincipal:
      "Una noche mágica, un sueño cumplido y un recuerdo para toda la vida.",

    mensaje:
      "Hay momentos inolvidables que se guardan para siempre en el corazón. Con mucha alegría quiero compartir contigo la celebración de mis XV años.",
  },

  // Fecha general del evento
  evento: {
    // Countdown.jsx necesita una fecha válida para new Date()
    fecha: "2026-11-21T18:00:00",

    fechaTexto: "21 de noviembre de 2026",

    dia: "21",
    mes: "Noviembre",
    anio: "2026",
  },

  // Información de la familia
  familia: {
    titulo: "Con la bendición de mis padres y padrinos",

    padres: [
      "Nombre del padre",
      "Nombre de la madre",
    ],

    padrinos: [
      "Nombre del padrino",
      "Nombre de la madrina",
    ],
  },

  // Ceremonia religiosa
  ceremonia: {
    titulo: "Ceremonia religiosa",
    hora: "6:00 p. m.",
    lugar: "Templo de San Juan",
    direccion: "León, Guanajuato",

    // EventDetails.jsx usa específicamente la propiedad maps
    maps: "https://maps.google.com",
  },

  // Recepción
  recepcion: {
    titulo: "Recepción",
    hora: "8:00 p. m.",
    lugar: "Salón Jardín Imperial",
    direccion: "León, Guanajuato",

    // EventDetails.jsx usa específicamente la propiedad maps
    maps: "https://maps.google.com",
  },

  // Código de vestimenta
  vestimenta: {
    codigo: "Formal",

    descripcion:
      "Agradecemos asistir con vestimenta formal para acompañarnos en esta noche tan especial.",

    // DressCode.jsx aplica .join(" y "), por eso debe ser un arreglo
    coloresReservados: [
      "azul",
      "plateado",
    ],
  },

  // Mesa de regalos
  regalos: {
    mensaje:
      "Tu presencia es nuestro mejor regalo. Si deseas tener un detalle conmigo, puedes hacerlo mediante la siguiente opción.",

    tienda: "Transferencia bancaria",

    numeroEvento: "000000",

    enlace: "https://www.google.com",
  },

  // Confirmación mediante WhatsApp
  rsvp: {
    mensaje:
      "Hola, confirmo mi asistencia a los XV años de Valentina.",

    // Solo números: sin espacios, guiones ni símbolo +
    telefono: "524770000000",

    fechaLimite: "1 de noviembre de 2026",
  },

  // Timeline.jsx usa invitation.itinerario.map()
  itinerario: [
    {
      hora: "6:00 p. m.",
      titulo: "Ceremonia religiosa",
      descripcion: "Acompáñanos a recibir la bendición.",
    },
    {
      hora: "8:00 p. m.",
      titulo: "Recepción",
      descripcion: "Bienvenida a nuestros invitados.",
    },
    {
      hora: "9:00 p. m.",
      titulo: "Cena",
      descripcion: "Disfrutemos juntos de una cena especial.",
    },
    {
      hora: "10:00 p. m.",
      titulo: "Vals",
      descripcion: "El momento más esperado de la noche.",
    },
    {
      hora: "10:30 p. m.",
      titulo: "Fiesta",
      descripcion: "Comienza la celebración.",
    },
  ],
}

// Permitimos las dos formas de importación
export { invitation }
export default invitation