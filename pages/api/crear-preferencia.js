import { MercadoPagoConfig, Preference } from "mercadopago";

// El Access Token se carga desde una variable de entorno en Vercel.
// NUNCA lo pongas escrito acá en el código.
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { items, envio } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: "Carrito vacío" });
  }
  if (!envio || !envio.nombre || !envio.direccion) {
    return res.status(400).json({ error: "Faltan datos de envío" });
  }

  try {
    const preference = new Preference(client);

    const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;

    const result = await preference.create({
      body: {
        items: items.map((item) => ({
          id: item.slug,
          title: item.nombre,
          quantity: item.cantidad,
          unit_price: item.precio,
          currency_id: "ARS",
        })),
        back_urls: {
          success: `${siteUrl}/exito`,
          failure: `${siteUrl}/fallo`,
          pending: `${siteUrl}/exito`,
        },
        auto_return: "approved",
        // El webhook avisa cuando el pago se aprueba, para crear el pedido en Dropi.
        notification_url: `${siteUrl}/api/webhook-pago`,
        // Guardamos acá los datos de envío y de Dropi de cada producto,
        // para no tener que buscarlos en ningún lado cuando llegue el webhook.
        metadata: {
          envio,
          productos: items.map((item) => ({
            dropiId: item.dropiId,
            cantidad: item.cantidad,
            precio: item.precio,
          })),
        },
      },
    });

    return res.status(200).json({ init_point: result.init_point });
  } catch (error) {
    console.error("Error creando preferencia de Mercado Pago:", error);
    return res.status(500).json({ error: "Error al crear el pago" });
  }
}
