import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { notas, notaEstaPublicada, hoyISO, formatearFecha } from "../lib/notas";

export default function NotasPage() {
        const [hoy, setHoy] = useState(null);

  useEffect(() => {
            setHoy(hoyISO());
  }, []);

  const notasPublicadas = hoy
          ? notas
                .filter((n) => notaEstaPublicada(n, hoy))
                .sort((a, b) => b.fecha.localeCompare(a.fecha))
            : [];

  return (
            <>
              <Head>
                <title>Notas de bienestar - alivio</title>
              <meta
                name="description"
                content="Consejos sobre alivio del dolor, postura y recuperacion muscular."
              />
                      </Head>
            <Header />
                            <div className="container" style={{ padding: "56px 24px 24px" }}>
        <span className="eyebrow">Consejos y buenos habitos</span>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>Notas de bienestar</h1>
        <p style={{ color: "var(--ink-soft)", maxWidth: "60ch", marginBottom: 40 }}>
          Ideas simples para cuidar tu cuerpo en el dia a dia: recuperacion
          muscular, postura y descanso. Publicamos notas nuevas de lunes a
          viernes.
                </p>
        <div className="grid">
          {notasPublicadas.map((n) => (
                            <Link href={`/notas/${n.slug}`} className="card" key={n.slug}>
              <div className="card-media">
                                <img
                  src={n.imagen}
                  alt={n.titulo}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                      </div>
              <div className="card-body">
                                      <div
                  className="mono"
                  style={{ fontSize: 11, color: "var(--ink-soft)", marginBottom: 6 }}
                >
{formatearFecha(n.fecha)}
</div>
                <div className="card-title" style={{ fontSize: 17 }}>
{n.titulo}
</div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6 }}>
{n.resumen}
</p>
      </div>
      </Link>
          ))}
                </div>
                </div>
      <Footer />
                </>
  );
}
