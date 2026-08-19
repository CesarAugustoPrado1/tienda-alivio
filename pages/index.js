import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { productos } from "../lib/productos";
import { ZONAS } from "../lib/zonas";
import { notas } from "../lib/notas";

const ENVIO_REFERENCIA = ZONAS.caba_gba.envio;

export default function Home() {
        const destacado = productos[0];

  return (
            <>
              <Head>
                <title>alivio - recuperacion y bienestar</title>
              <meta
                name="description"
                content="Productos para el alivio del dolor y la recuperacion muscular. Envios a todo el pais."
              />
                      </Head>

      <Header />

                            <section className="hero">
                              <div className="container hero-grid">
                                <div>
                                  <span className="eyebrow">Bienestar diario</span>
                  <h1>Volve a moverte sin dolor.</h1>
                  <p className="lede">
                                    Herramientas pensadas para el alivio del dolor y la recuperacion
                    muscular despues de entrenar, trabajar o simplemente vivir el
                    dia a dia.
                          </p>
                  <Link href="#productos" className="btn-primary">
                                        Ver productos
                          </Link>
                  <div className="free-shipping-badge">Envio gratis a todo el pais</div>
                          </div>
                <div className="hero-visual">
                                      <div className="ripple" />
                                      <div className="ripple" />
                                      <div className="ripple" />
                                      <img src={destacado.imagen} alt={destacado.nombre} />
      </div>
      </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--line)" }}>
        <div
          className="container"
          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: 24,
                            padding: "32px 24px",
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20 }}>[env]</span>
            <div>
                            <div style={{ fontWeight: 600, fontSize: 14 }}>Envio a todo el pais</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                Calculado segun tu provincia
                      </div>
                      </div>
                      </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20 }}>[pago]</span>
            <div>
                                    <div style={{ fontWeight: 600, fontSize: 14 }}>Pago seguro</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                Procesado por Mercado Pago
                      </div>
                      </div>
                      </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 20 }}>[chat]</span>
            <div>
                                    <div style={{ fontWeight: 600, fontSize: 14 }}>Atencion personalizada</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                Te acompanamos en toda la compra
                      </div>
                      </div>
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
                  <div className="free-shipping-badge free-shipping-badge--sm">
                          Envio gratis
      </div>
                  <div className="card-price" style={{ marginTop: 8 }}>
                    <span className="price">
                            ${(p.precio + ENVIO_REFERENCIA).toLocaleString("es-AR")}
</span>
      </div>
      </div>
      </Link>
            ))}
                  </div>
                  </div>
                  </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
                            <div className="section-head">
                              <h2>Notas de bienestar</h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--ink-soft)" }}>
              Consejos y buenos habitos
                    </span>
                    </div>
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
                  </section>

      <Footer />
                  </>
  );
}
