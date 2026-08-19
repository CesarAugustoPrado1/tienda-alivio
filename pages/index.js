import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { productos } from "../lib/productos";
import { ZONAS } from "../lib/zonas";

const ENVIO_REFERENCIA = ZONAS.caba_gba.envio;

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
                <div className="free-shipping-badge">Envío gratis a todo el país</div>
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
                  <div className="free-shipping-badge free-shipping-badge--sm">
                        Envío gratis
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

      <Footer />
                </>
  );
}
