import { notas } from "../../lib/notas";

function hoyArgentinaISO() {
    const ahora = new Date();
    const horaArgentina = new Date(ahora.getTime() - 3 * 60 * 60 * 1000);
    const anio = horaArgentina.getUTCFullYear();
    const mes = String(horaArgentina.getUTCMonth() + 1).padStart(2, "0");
    const dia = String(horaArgentina.getUTCDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
}

function escapeXml(texto) {
    return String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
}

export default function handler(req, res) {
    const hoy = hoyArgentinaISO();
    const publicadas = notas
      .filter((n) => n.fecha <= hoy)
      .sort((a, b) => b.fecha.localeCompare(a.fecha));

  const siteUrl = "https://tienda-alivio.vercel.app";

  const items = publicadas
      .map((n) => {
              const link = `${siteUrl}/notas/${n.slug}`;
              const pubDate = new Date(`${n.fecha}T12:00:00-03:00`).toUTCString();
              return `
                  <item>
                        <title>${escapeXml(n.titulo)}</title>
                              <link>${link}</link>
                                    <guid isPermaLink="true">${link}</guid>
                                          <pubDate>${pubDate}</pubDate>
                                                <description>${escapeXml(n.resumen)}</description>
                                                      <enclosure url="${n.imagen}" type="image/jpeg" />
                                                          </item>`;
      })
      .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
        <title>alivio - Notas de bienestar</title>
            <link>${siteUrl}/notas</link>
                <description>Consejos sobre alivio del dolor, postura y recuperacion muscular.</description>
                    <language>es-ar</language>${items}
                      </channel>
                      </rss>`;

  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
    res.status(200).send(xml);
}
