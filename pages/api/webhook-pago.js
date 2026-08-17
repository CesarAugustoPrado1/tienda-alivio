import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const { type, data } = req.body;

    // Solo nos interesan las notificaciones de pago
    if (type !== "payment") {
      return res.status(200).send("Evento ignorado");
    }

    // 1. Traemos el pago completo desde Mercado Pago
    const payment = new Payment(client);
    const pago = await payment.get({ id: data.id });

    if (pago.status !== "approved") {
      return res.status(200).send("Pago no aprobado todavía");
    }

    const { envio, productos } = pago.metadata || {};
    if (!envio || !productos) {
      console.error("Webhook: falta metadata de envío/productos en el pago", pago.id);
      return res.status(200).send("Sin metadata");
    }

    // 2. Armamos el pedido para Dropi (mismo formato que ya validamos)
    const dropiPayload = {
      calculate_costs_and_shiping: true,
      state: envio.provincia,
      city: envio.ciudad,
      client_email: pago.payer?.email || "",
      name: envio.nombre.split(" ")[0] || envio.nombre,
      surname: envio.nombre.split(" ").slice(1).join(" ") || "-",
      dir: envio.direccion,
      notes: `Pedido web alivio - Pago MP #${pago.id}`,
      payment_method_id: 1,
      phone: envio.telefono,
      type: "FINAL_ORDER",
      products: productos.map((p) => ({
        id: p.dropiId,
        price: p.precio,
        variation_id: null,
        quantity: p.cantidad,
      })),
    };

    // 3. Creamos el pedido en Dropi
    const dropiRes = await fetch("https://api.dropi.ar/api/orders/myorders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "dropi-integration-key": process.env.DROPI_TOKEN,
      },
      body: JSON.stringify(dropiPayload),
    });

    const dropiResult = await dropiRes.json();

    if (!dropiRes.ok) {
      console.error("Error creando pedido en Dropi:", JSON.stringify(dropiResult));
      return res.status(200).send("Error en Dropi, revisar logs");
    }

    console.log(`Pedido creado en Dropi para el pago ${pago.id}`, JSON.stringify(dropiResult));
    return res.status(200).send("OK");
  } catch (error) {
    console.error("Error en webhook de pago:", error);
    return res.status(200).send("Error interno");
  }
}
