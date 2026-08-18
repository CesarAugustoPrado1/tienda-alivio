// Sistema de envio por zonas.
//
// En vez de cotizar en vivo (que requeriria una credencial de sesion que
// vence cada pocas horas), usamos 5 zonas con un precio fijo por zona.
// Cada precio ya incluye un 15% de colchon sobre la cotizacion real mas
// alta observada en esa zona, para no perder plata si el costo real sube
// un poco entre revision y revision.
//
// >>> Precios verificados: 18/08/2026 <<<
// Revisar mensualmente (dia 1 de cada mes): volver a cotizar 1 ciudad por
// zona en Dropi (simulador Enviar al cliente) y actualizar si hace falta.
// El deposito de origen esta en Flores, CABA.

export const ZONAS = {
    caba_gba: {
          nombre: "CABA y GBA",
          envio: 9500,
    },
    centro: {
          nombre: "Centro",
          envio: 17500,
    },
    cuyo_noa: {
          nombre: "Cuyo y NOA",
          envio: 21500,
    },
    nea: {
          nombre: "NEA",
          envio: 21500,
    },
    patagonia: {
          nombre: "Patagonia",
          envio: 25500,
    },
};

export const PROVINCIA_A_ZONA = {
    "Ciudad Autonoma de Buenos Aires": "caba_gba",
    "Buenos Aires": "caba_gba",

    "Santa Fe": "centro",
    "Cordoba": "centro",
    "Entre Rios": "centro",
    "La Pampa": "centro",

    "Mendoza": "cuyo_noa",
    "San Juan": "cuyo_noa",
    "San Luis": "cuyo_noa",
    "Salta": "cuyo_noa",
    "Jujuy": "cuyo_noa",
    "Tucuman": "cuyo_noa",
    "Santiago del Estero": "cuyo_noa",
    "Catamarca": "cuyo_noa",
    "La Rioja": "cuyo_noa",

    "Misiones": "nea",
    "Corrientes": "nea",
    "Chaco": "nea",
    "Formosa": "nea",

    "Neuquen": "patagonia",
    "Rio Negro": "patagonia",
    "Chubut": "patagonia",
    "Santa Cruz": "patagonia",
    "Tierra del Fuego": "patagonia",
};

export function getZonaPorProvincia(provincia) {
    const zonaKey = PROVINCIA_A_ZONA[provincia];
    return zonaKey ? ZONAS[zonaKey] : ZONAS.patagonia;
}

export const PROVINCIAS = Object.keys(PROVINCIA_A_ZONA);
