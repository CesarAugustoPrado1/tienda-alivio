import { MercadoPagoConfig, Preference } from "mercadopago";
import { getProducto } from "../../lib/productos";
import { getZonaPorProvincia } from "../../lib/zonas";

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
    if (!envio || !envio.nombre || !envio.direccion || !envio.provincia) {
          return res.status(400).json({ error: "Faltan datos de envío" });
    }

  // IMPORTANTE: nunca confiamos en precios que vengan del navegador.
  // Recalculamos todo acá, desde nuestros propios datos, para que nadie
  // pueda manipular el precio final desde las herramientas de desarrollador.
  const itemsValidados = [];
    for (const item of items) {
          const producto = getProducto(item.slug);
          if (!producto) {
                  return res.status(400).json({ error: `Producto inválido: ${item.slug}` });
          }
          const cantidad = Math.max(1, parseInt(item.cantidad) || 1);
          itemsValidados.push({ ...producto, cantidad });
    }

  const zona = getZonaPorProvincia(envio.provincia);
    const costoEnvio = zona.envio;

  try {
        const preference = new Preference(client);

      const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;

      const mpItems = itemsValidados.map((item) => ({
              id: item.slug,
              title: item.nombre,
              quantity: item.cantidad,
              unit_price: item.precio,
              currency_id: "ARS",
      }));

      // El envío se cobra como un ítem más, así el cliente ve el desglose
      // también dentro de Mercado Pago.
      mpItems.push({
              id: "envio",
              title: `Envío — ${zona.nombre}`,
              quantity: 1,
              unit_price: costoEnvio,
              currency_id: "ARS",
      });

      const result = await preference.create({
              body: {
                        items: mpItems,
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
                                    productos: itemsValidados.map((item) => ({
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
