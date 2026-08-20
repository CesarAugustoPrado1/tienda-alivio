import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { notas, getNota } from "../../lib/notas";

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
        <h1 style={{ fontSize: 32, margin: "16px 0 24px" }}>{nota.titulo}</h1>
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
          </div>
      <Footer />
          </>
  );
}
