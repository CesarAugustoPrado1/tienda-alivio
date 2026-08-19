import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { notas } from "../lib/notas";

export default function NotasPage() {
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
          muscular, postura y descanso.
            </p>
        <div className="grid">
          {notas.map((n) => (
                        <article className="card" key={n.titulo} style={{ cursor: "default" }}>
              <div className="card-media">
                            <img
                  src={n.imagen}
                  alt={n.titulo}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                  </div>
              <div className="card-body">
                                  <div className="card-title" style={{ fontSize: 17 }}>
{n.titulo}
</div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6 }}>
{n.resumen}
</p>
  </div>
  </article>
          ))}
            </div>
            </div>
      <Footer />
            </>
  );
}
