const papeleria = {
  categoria: "Oficina",
  productos: [
    {
      nombre: "Bloc de notas",
      precio: 2.5,
      disponible: true,
      descripcion: {
        hojas: 100,
        tamano: "A5",
        color: "blanco",
      },
      comentarios: [
        {
          autor: "Juan Pérez",
          texto: "Muy útil para tomar apuntes en clase",
        },
        {
          autor: "María López",
          texto: "Me gusta el diseño de la portada",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Carpeta clasificadora",
      precio: 6.99,
      disponible: false,
      descripcion: {
        material: "cartón",
        tamaño: "A4",
        color: "azul",
      },
      comentarios: [
        {
          autor: "Pedro García",
          texto: "La calidad del material es muy buena",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Lápices",
      precio: 0.5,
      disponible: true,
      descripcion: {
        tipo: "HB",
        marca: "Staedtler",
        color: "gris",
      },
      comentarios: [
        {
          autor: "Ana Torres",
          texto: "Estos lápices son mis favoritos",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Calculadora",
      precio: 12.99,
      disponible: true,
      descripcion: {
        tipo: "científica",
        marca: "Casio",
        color: "negro",
      },
      comentarios: [
        {
          autor: "Miguel Rodríguez",
          texto: "Muy útil para cálculos complejos",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Grapadora",
      precio: 4.5,
      disponible: true,
      descripcion: {
        capacidad: 50,
        tipo: "de escritorio",
        marca: "Rapesco",
      },
      comentarios: [
        {
          autor: "Luisa Fernández",
          texto: "Funciona muy bien, no se atasca",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Post-its",
      precio: 1.99,
      disponible: true,
      descripcion: {
        tamaño: "3x3 pulgadas",
        color: "amarillo",
        cantidad: 100,
      },
      comentarios: [
        {
          autor: "Elena Gómez",
          texto: "Me encanta usar estos para tomar notas",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros `);
      },
    },
    {
      nombre: "Tijeras",
      precio: 2.99,
      disponible: true,
      descripcion: {
        tamaño: "8 pulgadas",
        material: "acero inoxidable",
        color: "plateado",
      },
      comentarios: [
        {
          autor: "Pablo Jiménez",
          texto: "Muy afiladas, cortan muy bien",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Máquina de escribir",
      precio: 399.99,
      disponible: false,
      descripcion: {
        marca: "Brother",
        modelo: "SX-4000",
        color: "gris",
      },
      comentarios: [
        {
          autor: "Manuel Sánchez",
          texto: "Una reliquia para los amantes de la escritura",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Corrector líquido",
      precio: 1.49,
      disponible: true,
      descripcion: {
        marca: "Pritt",
        contenido: "20 ml",
        color: "blanco",
      },
      comentarios: [
        {
          autor: "Marina Torres",
          texto: "Este corrector es muy efectivo",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
  ],
};

const hogar = {
  categoria: "Hogar",
  productos: [
    {
      nombre: "Toallas de baño",
      precio: 15.99,
      disponible: true,
      descripcion: {
        tamaño: "70x140 cm",
        material: "algodón",
        color: "blanco",
      },
      comentarios: [
        {
          autor: "Luisa Pérez",
          texto: "Muy suaves y absorbentes",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Juego de sábanas",
      precio: 49.99,
      disponible: true,
      descripcion: {
        tamaño: "matrimonial",
        material: "algodón",
        color: "gris",
      },
      comentarios: [
        {
          autor: "Andrea Sánchez",
          texto: "Muy cómodas para dormir",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Alfombra",
      precio: 29.99,
      disponible: true,
      descripcion: {
        tamaño: "80x150 cm",
        material: "poliéster",
        color: "beige",
      },
      comentarios: [
        {
          autor: "Marta García",
          texto: "Se ve muy elegante en mi sala",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Lámpara de mesa",
      precio: 19.99,
      disponible: true,
      descripcion: {
        tipo: "de sobremesa",
        material: "metal",
        color: "negro",
      },
      comentarios: [
        {
          autor: "Carlos Jiménez",
          texto: "Buena iluminación para trabajar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Cortinas",
      precio: 39.99,
      disponible: true,
      descripcion: {
        tamaño: "120x180 cm",
        material: "tela",
        color: "blanco",
      },
      comentarios: [
        {
          autor: "Sara Rodríguez",
          texto: "Muy bonitas y elegantes",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Cojín decorativo",
      precio: 12.99,
      disponible: true,
      descripcion: {
        tamaño: "40x40 cm",
        material: "algodón",
        color: "amarillo",
      },
      comentarios: [
        {
          autor: "Ana Gómez",
          texto: "Le da un toque de color a mi sofá",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Báscula digital",
      precio: 24.99,
      disponible: true,
      descripcion: {
        tipo: "de baño",
        material: "vidrio",
        color: "blanco",
      },
      comentarios: [
        {
          autor: "Juan Pérez",
          texto: "Muy precisa y fácil de usar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Cubiertos",
      precio: 29.99,
      disponible: true,
      descripcion: {
        tipo: "juego de 24 piezas",
        material: "acero inoxidable",
        color: "plateado",
      },
      comentarios: [
        {
          autor: "María Torres",
          texto: "Muy resistentes y fáciles de limpiar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
  ],
};

const electronica = {
  categoria: "Electrónica",
  productos: [
    {
      nombre: "Smartphone",
      precio: 599.99,
      disponible: true,
      descripcion: {
        marca: "Samsung",
        modelo: "Galaxy S21",
        color: "negro",
        almacenamiento: "128GB",
      },
      comentarios: [
        {
          autor: "Pedro Rodríguez",
          texto: "Excelente teléfono, muy rápido y con gran calidad de imagen",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Smartwatch",
      precio: 199.99,
      disponible: true,
      descripcion: {
        marca: "Apple",
        modelo: "Watch Series 7",
        color: "plata",
        tamaño: "40mm",
      },
      comentarios: [
        {
          autor: "Lorena González",
          texto: "Me encanta, muy práctico y fácil de usar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Tablet",
      precio: 399.99,
      disponible: true,
      descripcion: {
        marca: "Microsoft",
        modelo: "Surface Pro 8",
        color: "negro",
        almacenamiento: "256GB",
      },
      comentarios: [
        {
          autor: "José Martínez",
          texto: "Ideal para trabajar y ver películas",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Auriculares inalámbricos",
      precio: 89.99,
      disponible: true,
      descripcion: {
        marca: "Sony",
        modelo: "WH-1000XM4",
        color: "negro",
        tipo: "over-ear",
      },
      comentarios: [
        {
          autor: "María Fernández",
          texto: "La cancelación de ruido es impresionante",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Altavoz Bluetooth",
      precio: 69.99,
      disponible: true,
      descripcion: {
        marca: "JBL",
        modelo: "Flip 5",
        color: "azul",
        batería: "12 horas",
      },
      comentarios: [
        {
          autor: "Juan García",
          texto: "Muy buen sonido para su tamaño",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Monitor",
      precio: 249.99,
      disponible: true,
      descripcion: {
        marca: "ASUS",
        modelo: "VP249QGR",
        tamaño: "23.8 pulgadas",
        resolución: "Full HD",
      },
      comentarios: [
        {
          autor: "Sofía Pérez",
          texto: "Excelente calidad de imagen y muy fácil de configurar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Impresora",
      precio: 149.99,
      disponible: true,
      descripcion: {
        marca: "HP",
        modelo: "OfficeJet Pro 9025",
        tecnologia: "Inkjet",
        conexion: "Wifi",
      },
      comentarios: [
        {
          autor: "Carlos Ruiz",
          texto: "Muy rápida y fácil de usar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Cámara de acción",
      precio: 299.99,
      disponible: true,
      descripcion: {
        marca: "GoPro",
        modelo: "Hero 9 Black",
        resolucion: "5K",
        estabilizacion: true,
      },
      comentarios: [
        {
          autor: "Ana Martínez",
          texto: "Increíble calidad de video y muy resistente",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Laptop",
      precio: 1099.99,
      disponible: true,
      descripcion: {
        marca: "Dell",
        modelo: "XPS 13",
        procesador: "Intel Core i7",
        almacenamiento: "512GB SSD",
      },
      comentarios: [
        {
          autor: "Pablo Fernández",
          texto: "Una de las mejores laptops que he tenido",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Consola de videojuegos",
      precio: 399.99,
      disponible: true,
      descripcion: {
        marca: "Sony",
        modelo: "PlayStation 5",
        almacenamiento: "825GB SSD",
        resolucion: "4K",
      },
      comentarios: [
        {
          autor: "Lucía González",
          texto: "Excelente rendimiento y muy fácil de usar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Router",
      precio: 89.99,
      disponible: true,
      descripcion: {
        marca: "TP-Link",
        modelo: "Archer C7",
        velocidad: "1750 Mbps",
        bandas: "Dual band",
      },
      comentarios: [
        {
          autor: "Jorge Pérez",
          texto: "Muy fácil de configurar y excelente rendimiento",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Smart TV",
      precio: 799.99,
      disponible: true,
      descripcion: {
        marca: "Samsung",
        modelo: "UE55TU7105",
        tamaño: "55 pulgadas",
        resolucion: "4K",
        conexion: "Wifi",
      },
      comentarios: [
        {
          autor: "María García",
          texto:
            "La calidad de imagen es espectacular y tiene muchas funciones",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Altavoz inteligente",
      precio: 79.99,
      disponible: true,
      descripcion: {
        marca: "Amazon",
        modelo: "Echo Dot (4ª generación)",
        conexion: "Wifi",
        asistente: "Alexa",
      },
      comentarios: [
        {
          autor: "Juan Pérez",
          texto: "Muy útil para controlar otros dispositivos en el hogar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Reloj inteligente",
      precio: 199.99,
      disponible: true,
      descripcion: {
        marca: "Apple",
        modelo: "Watch Series 7",
        tamaño: "45mm",
        resistencia: "50 metros bajo el agua",
      },
      comentarios: [
        {
          autor: "Lucía Hernández",
          texto: "Muy elegante y útil para hacer deporte",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Tablet",
      precio: 349.99,
      disponible: true,
      descripcion: {
        marca: "Samsung",
        modelo: "Galaxy Tab S7+",
        tamaño: "12.4 pulgadas",
        almacenamiento: "128GB",
        conexion: "4G",
      },
      comentarios: [
        {
          autor: "Sergio Ruiz",
          texto: "Excelente calidad de pantalla y muy rápida",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
    {
      nombre: "Smartwatch",
      precio: 139.99,
      disponible: true,
      descripcion: {
        marca: "Huawei",
        modelo: "Watch GT 2",
        tamaño: "46mm",
        resistencia: "5ATM",
      },
      comentarios: [
        {
          autor: "Marina Fernández",
          texto: "Muy completo y fácil de usar",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
  ],
};

const cocina = {
  categoria: "Cocina",
  productos: [
  {
    nombre: "Licuadora",
    precio: 59.99,
    disponible: true,
    descripcion: {
      marca: "Oster",
      modelo: "BLSTMG-B00-051",
      potencia: "450 W",
      capacidad: "1.25 litros",
      material: "Vidrio",
    },
    comentarios: [
      {
        autor: "Ana Martínez",
        texto: "Hace unos zumos deliciosos y se limpia fácilmente",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Cafetera",
    precio: 29.99,
    disponible: true,
    descripcion: {
      marca: "Krups",
      modelo: "XP1000",
      capacidad: "10 tazas",
      potencia: "800 W",
      tipo: "Café molido",
    },
    comentarios: [
      {
        autor: "Pedro López",
        texto: "Fácil de usar y hace un café excelente",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Robot de cocina",
    precio: 199.99,
    disponible: true,
    descripcion: {
      marca: "Taurus",
      modelo: "Mycook Easy",
      potencia: "1600 W",
      capacidad: "2 litros",
      funciones: ["Cocina", "Amasa", "Pica", "Emulsiona"],
    },
    comentarios: [
      {
        autor: "Luisa Fernández",
        texto: "Es una maravilla, ahorra tiempo y esfuerzo en la cocina",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Aspiradora",
    precio: 149.99,
    disponible: true,
    descripcion: {
      marca: "Dyson",
      modelo: "V11 Absolute Extra Pro",
      potencia: "185 AW",
      autonomía: "Hasta 60 minutos",
      tipo: "Inalámbrica",
    },
    comentarios: [
      {
        autor: "Marta Sánchez",
        texto: "Muy potente y cómoda de usar, ideal para hogares con mascotas",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Batidora de mano",
    precio: 39.99,
    disponible: true,
    descripcion: {
      marca: "Bosch",
      modelo: "MSM2620B",
      potencia: "600 W",
      velocidades: "12 + turbo",
      accesorios: ["Vaso de mezclas", "Picador", "Varilla batidora"],
    },
    comentarios: [
      {
        autor: "Pablo García",
        texto: "Muy versátil y resistente, la recomiendo",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Plancha",
    precio: 79.99,
    disponible: true,
    descripcion: {
      marca: "Philips",
      modelo: "GC5039/30",
      potencia: "3000 W",
      vapor: "Hasta 65 g/min",
      función: "Anti-goteo",
      material: "Suela SteamGlide Advanced",
    },
    comentarios: [
      {
        autor: "Lucía Rodríguez",
        texto: "Muy cómoda de usar, plancha bien y no gotea",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Cafetera de cápsulas",
    precio: 99.99,
    disponible: true,
    descripcion: {
      marca: "Nespresso",
      modelo: "Essenza Mini",
      potencia: "1150 W",
      capacidad: "0,6 litros",
      tipo: "Cápsulas Nespresso",
      tamaños: ["Espresso", "Lungo"],
    },
    comentarios: [
      {
        autor: "Juan Pérez",
        texto: "Café delicioso y muy fácil de usar, muy recomendable",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Batidora de vaso",
    precio: 89.99,
    disponible: true,
    descripcion: {
      marca: "Moulinex",
      modelo: "LM430110",
      potencia: "800 W",
      capacidad: "1,25 litros",
      velocidades: "2 + función Pulse",
      material: "Cuchillas de acero inoxidable",
    },
    comentarios: [
      {
        autor: "Sofía González",
        texto:
          "Muy resistente y fácil de usar, las cuchillas trituran muy bien",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Secadora de ropa",
    precio: 299.99,
    disponible: true,
    descripcion: {
      marca: "Bosch",
      modelo: "WTG87249ES",
      capacidad: "9 kg",
      tipo: "Condensación",
      programas: [
        "Algodón",
        "Sintéticos",
        "Delicados",
        "Plumas",
        "Toallas",
        "Antiarrugas",
      ],
    },
    comentarios: [
      {
        autor: "Mario Ruiz",
        texto: "Seca muy bien y tiene muchos programas, es muy completa",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Robot de limpieza",
    precio: 199.99,
    disponible: true,
    descripcion: {
      marca: "iRobot",
      modelo: "Roomba 692",
      autonomía: "Hasta 90 minutos",
      tipo: "Robot aspirador",
      tecnología: "Dirt Detect",
    },
    comentarios: [
      {
        autor: "María Gómez",
        texto: "Es una maravilla, limpia muy bien y me ahorra mucho tiempo y esfuerzo",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Aspiradora sin cable",
    precio: 149.99,
    disponible: true,
    descripcion: {
      marca: "Dyson",
      modelo: "V11 Absolute Extra Pro",
      autonomía: "Hasta 60 minutos",
      tipo: "Aspiradora sin cable",
      tecnología: "Motor digital Dyson V11",
      accesorios: [
        "Cepillo de alta torque",
        "Cepillo suave",
        "Minicepillo motorizado",
      ],
    },
    comentarios: [
      {
        autor: "Carlos García",
        texto: "La mejor aspiradora que he tenido, muy potente y práctica",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Horno eléctrico",
    precio: 129.99,
    disponible: true,
    descripcion: {
      marca: "Cecotec",
      modelo: "Horno Convection 2500",
      potencia: "2500 W",
      capacidad: "45 litros",
      temperaturas: "Hasta 230 °C",
      programas: ["Asado", "Horneado", "Grill", "Descongelado", "Convección"],
    },
    comentarios: [
      {
        autor: "Ana Martínez",
        texto: "Muy buen horno, funciona muy bien y es fácil de limpiar",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Freidora sin aceite",
    precio: 79.99,
    disponible: true,
    descripcion: {
      marca: "Taurus",
      modelo: "Air Fry Digital 3L",
      potencia: "1500 W",
      capacidad: "3 litros",
      temperaturas: "Hasta 200 °C",
      programas: ["Freír", "Asar", "Hornear", "Grill", "Recalentar"],
    },
    comentarios: [
      {
        autor: "Laura Hernández",
        texto: "Muy práctica y saludable, cocina muy bien y sin aceite",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Robot de cocina",
    precio: 349.99,
    disponible: true,
    descripcion: {
      marca: "Moulinex",
      modelo: "i-Companion XL Gourmet",
      potencia: "1550 W",
      capacidad: "4,5 litros",
      temperaturas: "Hasta 150 °C",
      programas: [
        "Cocción lenta",
        "Cocción al vapor",
        "Masas",
        "Salsas",
        "Postres",
      ],
      accesorios: [
        "Cuchilla de picar",
        "Cuchilla para amasar",
        "Batidor",
        "Cesta de cocción al vapor",
      ],
      comentarios: [
        {
          autor: "Lucía González",
          texto:
            "Fantástico robot de cocina, me ha hecho la vida mucho más fácil en la cocina",
        },
      ],
      comprar: function () {
        console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
      },
    },
  },
  {
    nombre: "Batidora de mano",
    precio: 39.99,
    disponible: true,
    descripcion: {
      marca: "Bosch",
      modelo: "MaxoMixx MSM88110",
      potencia: "800 W",
      velocidad: "12 niveles",
      accesorios: [
        "Pie de acero inoxidable",
        "Varilla batidora",
        "Picador",
        "Vaso medidor",
      ],
    },
    comentarios: [
      {
        autor: "Marcela Pérez",
        texto: "Muy potente y versátil, me encanta",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Cafetera de cápsulas",
    precio: 79.99,
    disponible: true,
    descripcion: {
      marca: "Krups",
      modelo: "Nespresso Inissia",
      potencia: "1260 W",
      capacidad: "0,7 litros",
      presión: "Hasta 19 bares",
      programas: ["Espresso", "Lungo"],
    },
    comentarios: [
      {
        autor: "Antonio Ramírez",
        texto: "Muy fácil de usar y el café sale delicioso",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  },
  {
    nombre: "Exprimidor eléctrico",
    precio: 29.99,
    disponible: true,
    descripcion: {
      marca: "Philips",
      modelo: "Viva Collection",
      potencia: "500 W",
      capacidad: "0,5 litros",
      velocidad: "1 velocidad",
      accesorios: ["Jarra", "Cepillo de limpieza"],
    },
    comentarios: [
      {
        autor: "María López",
        texto: "Me encanta, exprime muy bien y es muy fácil de limpiar",
      },
    ],
    comprar: function () {
      console.log(`Compraste ${this.nombre} por ${this.precio} euros`);
    },
  }
]
};
