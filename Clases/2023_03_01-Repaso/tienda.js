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