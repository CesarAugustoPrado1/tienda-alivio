// Catalogo de productos. dropiId y dropiCost son los datos que el conector
// necesita para crear el pedido en Dropi automaticamente cuando se paga.
export const productos = [
  {
        slug: "pistola-masajeadora",
        nombre: "Pistola Masajeadora de Percusion",
        subtitulo: "Fisioterapia de alta intensidad",
        descripcion:
                "Herramienta profesional para recuperacion muscular, alivio del dolor y relajacion profunda. Reduce la tension, mejora la circulacion y acelera la recuperacion gracias a sus multiples velocidades y cabezales especializados.",
        beneficios: [
                "Alivio inmediato del dolor y contracturas: ideal para post entrenamiento, estres muscular o rehabilitacion",
                "6 niveles de velocidad + 5 cabezales profesionales: masaje ajustado a cada zona y necesidad",
                "Mejora la circulacion sanguinea y linfatica: disminuye la inflamacion",
                "Potencia real de 36W: vibracion profunda y eficaz para resultados visibles",
                "Diseno ergonomico y silencioso: comoda, eficiente y apta para uso diario",
                "Portatil y practica: perfecta para casa, gimnasio, kinesiologia o viajes",
              ],
        especificaciones: [
          { label: "Potencia", valor: "36W" },
          { label: "Velocidades", valor: "6 niveles" },
          { label: "Cabezales incluidos", valor: "5 unidades" },
          { label: "Incluye", valor: "Cable USB y manual de uso" },
              ],
        precio: 37900,
        dropiId: 2284,
        dropiCost: 18500,
        imagenes: [
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/2284/1758751649pistola%20masajeadora.jpg",
              ],
        imagen:
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/2284/1758751649pistola%20masajeadora.jpg",
  },
  {
        slug: "corrector-postura",
        nombre: "Corrector de Postura Ergonomico",
        subtitulo: "Alivio del dolor y alineacion espinal - Talla XL",
        descripcion:
                "Mejora tu postura y reduci las molestias diarias con este corrector de postura ergonomico, disenado para ofrecer soporte efectivo en cuello, hombros y zona lumbar. Su sistema de correas ajustables y acolchadas ayuda a mantener la columna alineada, favoreciendo una postura saludable tanto sentado como de pie.",
        beneficios: [
                "Reduce la tension en la zona lumbar, hombros y cuello",
                "Mejora la circulacion, favoreciendo el bienestar general",
                "Diseno ergonomico que se adapta al cuerpo sin incomodidades",
                "Soporte para cuello y espalda baja que corrige la postura de forma progresiva",
                "Alinea la columna vertebral y evita malas posiciones",
                "Unisex, discreto bajo la ropa e ideal para usar sentado durante horas",
              ],
        especificaciones: [
          { label: "Material", valor: "Correa elastica de nylon y algodon, resistente y flexible" },
          { label: "Relleno", valor: "Acolchado para mayor comodidad" },
          { label: "Ajuste", valor: "Totalmente ajustable a distintas anatomias" },
          { label: "Talla", valor: "XL (unisex)" },
              ],
        precio: 23900,
        dropiId: 6330,
        dropiCost: 11900,
        imagenes: [
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6330/1764343360MAyK%20Design%20(38).jpg",
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6330/1764343360MAyK%20Design%20(39).jpg",
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6330/1764343360MAyK%20Design%20(40).jpg",
              ],
        imagen:
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6330/1764343360MAyK%20Design%20(38).jpg",
  },
  {
        slug: "parche-masajeador",
        nombre: "Parche Masajeador Recargable",
        subtitulo: "Electroestimulacion muscular EMS",
        descripcion:
                "Masajeador electrico con tecnologia EMS (electroestimulacion muscular) disenado para aliviar dolores cronicos, mejorar la circulacion y acelerar la recuperacion muscular tras actividades fisicas intensas. Sus impulsos de estimulacion actuan directamente sobre los musculos, brindando una sensacion profunda de relajacion, bienestar y firmeza. Con 8 modalidades y 19 niveles de intensidad, se adapta a cualquier necesidad: relajacion, tonificacion o alivio muscular.",
        beneficios: [
                "Tecnologia EMS avanzada: estimula los musculos mediante micro impulsos",
                "Alivio muscular inmediato: ideal para contracturas, cansancio y tensiones",
                "Recuperacion post-entreno: reduce rigidez y ayuda a la recuperacion fisica",
                "Tono y firmeza muscular: estimula y activa fibras musculares",
                "Recargable por USB, sin necesidad de pilas",
                "Compacto y portatil: ideal para casa, oficina o viajes",
              ],
        especificaciones: [
          { label: "Modalidades", valor: "8" },
          { label: "Intensidades", valor: "19 niveles" },
          { label: "Bateria", valor: "200 mAh, recargable por USB" },
          { label: "Auto-apagado", valor: "30 seg sin contacto con la piel" },
              ],
        precio: 7900,
        dropiId: 6156,
        dropiCost: 3750,
        imagenes: [
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6156/1763763401MAyK%20Design%20(25).jpg",
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6156/1763763401MAyK%20Design%20(26).jpg",
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6156/1767731677MAyK%20Design%20(32).png",
              ],
        imagen:
                "https://d33yjn72e20ec6.cloudfront.net/argentina/products/6156/1763763401MAyK%20Design%20(25).jpg",
  },
  ];

export function getProducto(slug) {
    const producto = productos.find((p) => p.slug === slug);
    return producto ? { ...producto, imagen: producto.imagenes[0] } : undefined;
}
