import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { notas, getNota, notaEstaPublicada, hoyISO, formatearFecha } from "../../lib/notas";

export async function getStaticPaths() {
      return {
              paths: notas.map((n) => ({ params: { slug: n.slug } })),
              fallback: false,
      };
}

export async function getStaticProps({ params }) {
      const nota = getNota(params.slug);
      return { props: { nota } };
}

export default function NotaPage({ nota }) {
      const [hoy, setHoy] = useState(null);

  useEffect(() => {
          setHoy(hoyISO());
  }, []);

  if (hoy === null) {
          return (
                    <>
                      <Header />
                      <div className="container" style={{ padding: "40px 24px" }} />
            <Footer />
      </>
        );
}

  const publicada = notaEstaPublicada(nota, hoy);

  return (
          <>
            <Head>
              <title>{nota.titulo} - alivio</title>
        <meta name="description" content={nota.resumen} />
      </Head>
      <Header />
            <div className="container" style={{ padding: "40px 24px 24px", maxWidth: 760 }}>
        <Link
          href="/notas"
          className="mono"
          style={{ fontSize: 13, color: "var(--ink-soft)" }}
        >
          Volver a notas
              </Link>

{!publicada ? (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
            <h1 style={{ fontSize: 26, marginBottom: 12 }}>
              Esta nota todavia no esta disponible
    </h1>
             <p style={{ color: "var(--ink-soft)" }}>
              Se publica el {formatearFecha(nota.fecha)}. Volve a visitarnos
              ese dia.
                  </p>
                  </div>
        ) : (
                      <>
                        <h1 style={{ fontSize: 32, margin: "16px 0 6px" }}>{nota.titulo}</h1>
            <div
              className="mono"
              style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 20 }}
            >
              Publicado el {formatearFecha(nota.fecha)}
</div>
            <div
              style={{
                                  width: "100%",
                                  aspectRatio: "16 / 9",
                                  overflow: "hidden",
                                  marginBottom: 28,
                                  background: "var(--surface)",
                                  border: "1px solid var(--line)",
              }}
            >
              <img
                src={nota.imagen}
                alt={nota.titulo}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
                  </div>
{nota.contenido.map((parrafo, i) => (
                  <p
                                    key={i}
                 style={{
                                       fontSize: 16,
                                       lineHeight: 1.75,
                                       color: "var(--ink)",
                                       marginBottom: 20,
                 }}
              >
{parrafo}
</p>
            ))}
                </>
        )}
</div>
      <Footer />
            </>
  );
}
