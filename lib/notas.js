// Notas de bienestar: contenido tipo blog.
// El orden del array es CRONOLOGICO (la primera nota agregada va primero).
// En la pagina de listado se muestran ordenadas por fecha, la mas nueva
// arriba, y SOLO se muestran las que ya llegaron a su fecha de publicacion
// (el chequeo se hace en el navegador de quien visita, comparando con la
// fecha real de su dispositivo, para no depender de un redespliegue diario).
//
// Para agregar una nota nueva: sumarla al final del array con su propio
// slug unico y su fecha en formato "YYYY-MM-DD". Se va a ocultar sola
// hasta que llegue esa fecha.

export const notas = [
  {
        slug: "estirar-despues-de-entrenar",
        fecha: "2026-08-15",
        titulo: "Por que estirar despues de entrenar",
        resumen:
                "Estirar al terminar de entrenar ayuda a que el musculo se recupere mas rapido, reduce la rigidez del dia siguiente y mejora la circulacion en la zona trabajada.",
        contenido: [
                "Durante el ejercicio, el musculo se contrae repetidamente y se generan pequenos microdesgarros en las fibras.",
                "El estiramiento ayuda de dos formas: mejora el flujo de sangre y le devuelve al musculo su rango de movimiento habitual.",
                "No es lo mismo estirar antes que despues de entrenar. Despues, lo ideal es mantener cada estiramiento entre 20 y 30 segundos.",
                "La percusion no reemplaza el estiramiento, pero lo complementa muy bien.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1540206053318-4d6a23b349dd?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "postura-en-el-escritorio",
        fecha: "2026-08-16",
        titulo: "Postura correcta en el escritorio: 3 habitos simples",
        resumen:
                "Pasar muchas horas sentado es una de las causas mas comunes de dolor de espalda y cuello. Ajusta la altura de la pantalla, apoya los pies en el piso y hace pausas cortas.",
        contenido: [
                "Pasar muchas horas en la misma posicion hace que ciertos musculos se mantengan contraidos, generando dolor.",
                "Tres ajustes tienen el mayor impacto: la altura de la pantalla, el apoyo de los pies, y la altura de la silla.",
                "Moverse cada 45 a 60 minutos es mas efectivo que una sola sesion larga de estiramiento al final del dia.",
                "Un corrector de postura funciona como recordatorio fisico para que el cuerpo aprenda a corregirse solo.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1737729991003-521d47240eb3?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "importancia-del-descanso",
        fecha: "2026-08-18",
        titulo: "La importancia del descanso en la recuperacion muscular",
        resumen:
                "El musculo no se recupera mientras entrenas, se recupera mientras descansas. Dormir bien es tan importante como el estiramiento o el masaje.",
        contenido: [
                "La reparacion muscular mas importante ocurre durante el sueno profundo, cuando el cuerpo libera hormona de crecimiento.",
                "Entrenar sin dormir lo suficiente no permite que el proceso de reparacion se complete.",
                "Algunas senales de descanso insuficiente: dolor que persiste mas de tres dias, o sensacion de pesadez constante.",
                "Sumar herramientas de alivio activo en los dias de descanso ayuda a acelerar la circulacion local.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1688382576107-5f39f9e5ae53?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "bienestar-y-pareja",
        fecha: "2026-08-19",
        titulo: "Bienestar y pareja",
        resumen:
                "El bienestar no es solo individual: compartir momentos de cuidado en pareja tambien reduce el estres y fortalece el vinculo.",
        contenido: [
                "El contacto fisico genera liberacion de oxitocina, una hormona que reduce el cortisol y mejora el estado de animo.",
                "Rutinas simples: turnarse para un masaje corto en hombros y cuello, salir a caminar juntos sin el celular.",
                "Cuando el cuidado se vuelve un habito compartido, es mas facil sostenerlo en el tiempo.",
                "No hace falta una rutina elaborada. Preguntarse como esta el cuerpo del otro antes de dormir ya es bienestar compartido.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1604881991720-f91add269bed?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "hidratacion-y-musculos",
        fecha: "2026-08-20",
        titulo: "La importancia de la hidratacion para los musculos",
        resumen:
                "El agua representa gran parte del tejido muscular y su falta afecta directamente el rendimiento y la recuperacion.",
        contenido: [
                "El musculo esta compuesto en gran parte por agua. Perderla sin reponerla aumenta el riesgo de calambres y fatiga.",
                "La hidratacion cumple un rol clave en el transporte de nutrientes y en la eliminacion de desechos metabolicos.",
                "No hace falta esperar a tener sed: lo ideal es hidratarse de forma constante a lo largo del dia.",
                "Sumar hidratacion al usar herramientas de alivio potencia el efecto de la circulacion mejorada.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1645894262578-0fa7076d9e0b?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "calor-para-relajar-musculos",
        fecha: "2026-08-21",
        titulo: "El poder de un bano caliente para relajar los musculos",
        resumen:
                "El calor dilata los vasos sanguineos y mejora la circulacion local, lo que ayuda a relajar musculos tensos.",
        contenido: [
                "El calor provoca vasodilatacion, aumentando el flujo de sangre y ayudando a relajar fibras musculares tensas.",
                "A diferencia del frio, el calor funciona mejor para tension muscular cronica o rigidez acumulada.",
                "Un bano o ducha caliente de 10 a 15 minutos en la zona mas cargada puede ser suficiente.",
                "Si una zona esta inflamada o con dolor agudo reciente, es mejor consultar antes de aplicar calor.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1709315610148-f4b341aed9d4?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "movilidad-para-empezar-la-semana",
        fecha: "2026-08-24",
        titulo: "Como armar una rutina de movilidad para arrancar la semana",
        resumen:
                "Empezar el lunes con una breve rutina de movilidad articular prepara al cuerpo y reduce la rigidez del fin de semana.",
        contenido: [
                "Despues de un fin de semana con menos movimiento, es comun sentir mas rigidez el lunes.",
                "Una rutina simple: rotaciones de cuello y hombros, circulos de cadera, sentadillas suaves sin peso.",
                "Diez minutos alcanzan para notar la diferencia, apenas te levantas antes del primer cafe.",
                "Si la rigidez es marcada en alguna zona, sumar percusion antes de la rutina ayuda a que los estiramientos sean mas comodos.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "alimentacion-y-recuperacion",
        fecha: "2026-08-25",
        titulo: "Alimentacion y recuperacion muscular: lo basico",
        resumen:
                "Lo que comes despues de entrenar influye directamente en que tan rapido se recupera el musculo.",
        contenido: [
                "La proteina aporta los aminoacidos necesarios para reparar el tejido que se desgasta con el ejercicio.",
                "Los carbohidratos reponen las reservas de glucogeno que el musculo usa como energia durante el esfuerzo.",
                "La hidratacion y los electrolitos completan el cuadro, especialmente tras sesiones con mucha transpiracion.",
                "Alcanza con priorizar comidas completas dentro de las horas posteriores al esfuerzo fisico.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1555243896-c709bfa0b564?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "respiracion-y-tension",
        fecha: "2026-08-26",
        titulo: "Respiracion y tension: la conexion que no vemos",
        resumen:
                "La forma en la que respiras esta directamente relacionada con el nivel de tension muscular, especialmente en cuello y hombros.",
        contenido: [
                "Cuando estamos estresados, la respiracion se vuelve corta y superficial, manteniendo activados los musculos del cuello.",
                "La respiracion diafragmatica activa el sistema nervioso parasimpatico, el que le indica al cuerpo que puede relajarse.",
                "Un ejercicio simple: inhalar contando hasta 4, sostener 2 segundos, exhalar contando hasta 6.",
                "Practicarlo antes de dormir puede hacer una diferencia notable en como se siente el cuerpo.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1758272422634-e8ed8e252a14?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "dolor-de-cabeza-por-tension",
        fecha: "2026-08-27",
        titulo: "Dolor de cabeza por tension: por que aparece y como aliviarlo",
        resumen:
                "El dolor de cabeza por tension es uno de los mas comunes y suele originarse en la musculatura del cuello y los hombros.",
        contenido: [
                "A diferencia de la migrana, se siente como una presion constante y su origen esta en el cuello y los hombros, no en el cerebro.",
                "Las causas mas comunes son la mala postura frente a una pantalla, el estres, y la falta de descanso.",
                "Aliviar la tension en el origen suele ser mas efectivo que tratar solo el sintoma.",
                "Si el dolor de cabeza es frecuente o muy intenso, es importante consultar a un profesional.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1758876019128-e76eebf402bd?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "mitos-del-estiramiento",
        fecha: "2026-08-28",
        titulo: "Mitos comunes sobre el estiramiento",
        resumen:
                "No todo lo que se dice sobre estirar es cierto. Repasamos algunos mitos comunes que pueden llevar a hacerlo de forma poco efectiva.",
        contenido: [
                "Mito 1: hay que estirar siempre antes de entrenar. Antes de entrenar es mejor un calentamiento dinamico.",
                "Mito 2: mas dolor significa mejor estiramiento. La sensacion correcta es de tension suave, nunca de dolor.",
                "Mito 3: la flexibilidad se logra rapido. Mejora con constancia a lo largo de semanas, no de un dia para el otro.",
                "Mito 4: todos los cuerpos necesitan estirar lo mismo. Cada cuerpo tiene un punto de partida distinto.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1572432332292-6ec3392bee00?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  {
        slug: "cuando-consultar-un-profesional",
        fecha: "2026-08-31",
        titulo: "Como saber si tu dolor necesita atencion profesional",
        resumen:
                "No todo dolor muscular se resuelve con descanso y herramientas de alivio en casa. Reconocer las senales de alarma ayuda a saber cuando consultar.",
        contenido: [
                "El dolor muscular leve que mejora con descanso en pocos dias generalmente no es motivo de alarma.",
                "Senales de alarma: dolor que dura mas de una semana, hinchazon visible, perdida de fuerza, o dolor que se irradia.",
                "Las herramientas de alivio en casa son excelentes para la tension cotidiana, pero no reemplazan un diagnostico profesional.",
                "Ante la duda, consultar a un kinesiologo o medico deportivo es siempre la opcion mas segura.",
              ],
        imagen:
                "https://images.unsplash.com/photo-1758691462954-e6fa5005474b?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  },
  ];

export function getNota(slug) {
    return notas.find((n) => n.slug === slug);
}

export function notaEstaPublicada(nota, hoyISO) {
    if (!hoyISO) return false;
    return nota.fecha <= hoyISO;
}

export function hoyISO() {
    const d = new Date();
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const dia = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mes}-${dia}`;
}

export function formatearFecha(fechaISO) {
    const [anio, mes, dia] = fechaISO.split("-").map(Number);
    const fecha = new Date(anio, mes - 1, dia);
    return fecha.toLocaleDateString("es-AR", {
          day: "numeric",
          month: "long",
          year: "numeric",
    });
}
