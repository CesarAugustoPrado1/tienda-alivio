import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { productos } from "../lib/productos";

export default function Home() {
    const destacado = productos[0];

  return (
        <>
          <Head>
            <title>alivio — recuperación y bienestar</title>
          <meta
            name="description"
            content="Productos para el alivio del dolor y la recuperación muscular. Envíos a todo el país."
          />
              </Head>

      <Header />

                    <section className="hero">
                      <div className="container hero-grid">
                        <div>
                          <span className="eyebrow">Bienestar diario</span>
              <h1>Volvé a moverte sin dolor.</h1>
              <p className="lede">
                            Herramientas pensadas para el alivio del dolor y la recuperación
                muscular después de entrenar, trabajar o simplemente vivir el
                día a día.
                  </p>
              <Link href="#productos" className="btn-primary">
                                Ver productos →
                  </Link>
              <div
                className="mono"
                style={{
                                  marginTop: 18,
                                  fontSize: 13,
                                  color: "var(--primary)",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                }}
            >
              <span className="tag">Envío a todo el país</span>
              calculado según tu provincia, sin sorpresas
                </div>
                </div>
          <div className="hero-visual">
                            <div className="ripple" />
                            <div className="ripple" />
                            <div className="ripple" />
                            <img src={destacado.imagen} alt={destacado.nombre} />
                </div>
                </div>
                </section>

      <section className="section" id="productos">
                        <div className="container">
                          <div className="section-head">
                            <h2>Productos</h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--ink-soft)" }}>
{productos.length} disponibles
  </span>
  </div>
          <div className="grid">
{productos.map((p) => (
                <Link href={`/producto/${p.slug}`} key={p.slug} className="card">
                  <div className="card-media">
                    <img src={p.imagen} alt={p.nombre} />
  </div>
                <div className="card-body">
                    <div className="card-sub">{p.subtitulo}</div>
                  <div className="card-title">{p.nombre}</div>
                  <div className="card-price">
                      <span className="price">
                        ${p.precio.toLocaleString("es-AR")}
</span>
                    <span className="tag">+ envío</span>
  </div>
  </div>
  </Link>
            ))}
              </div>
              </div>
              </section>

      <Footer />
              </>
  );
}
