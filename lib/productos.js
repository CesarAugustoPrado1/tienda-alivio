// Catalogo de productos. dropiId y dropiCost son los datos que el conector
// necesita para crear el pedido en Dropi automaticamente cuando se paga.
export const productos = [
  {
        slug: "pistola-masajeadora",
        nombre: "Pistola Masajeadora de Percusion",
        subtitulo: "Fisioterapia profesional en casa",
        descripcion:
                "Herramienta profesional para recuperacion muscular, alivio del dolor y relajacion profunda. Reduce la tension, mejora la circulacion y acelera la recuperacion gracias a sus multiples velocidades y cabezales especializados.",
        beneficios: [
                "Alivio inmediato del dolor y contracturas",
                "Multiples velocidades e intensidades",
                "4 cabezales intercambiables",
                "Ideal despues de entrenar o tras un dia largo",
              ],
        precio: 37900,
        dropiId: 2284,
        dropiCost: 18500,
        imagen:
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/2284/1758751649pistola%20masajeadora.jpg",
  },
  {
        slug: "corrector-postura",
        nombre: "Corrector de Postura Espalda y Hombros",
        subtitulo: "Alivio para el dolor de espalda",
        descripcion:
                "Faja correctora de postura profesional. Ayuda a alinear espalda y hombros, alivia dolores por mala postura y brinda soporte durante el trabajo, el estudio o el entrenamiento. Ajustable, comoda y de uso diario.",
        beneficios: [
                "Alinea espalda y hombros progresivamente",
                "Alivia el dolor por mala postura",
                "Ajustable a cualquier contextura",
                "Comoda para uso durante todo el dia",
              ],
        precio: 23900,
        dropiId: 6330,
        dropiCost: 11900,
        imagen:
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6330/1764343360MAyK%20Design%20(38).jpg",
  },
  ];

export function getProducto(slug) {
    return productos.find((p) => p.slug === slug);
}
