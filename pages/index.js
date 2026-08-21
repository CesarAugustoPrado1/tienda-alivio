import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { productos, esProductoNuevo, tieneStockBajo } from "../lib/productos";
import { ZONAS } from "../lib/zonas";
import { useCart } from "../components/CartContext";

const ENVIO_REFERENCIA = ZONAS.caba_gba.envio;

const iconProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

function TruckIcon() {
    return (
          <svg {...iconProps}>
      <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
}

function LockIcon() {
    return (
          <svg {...iconProps}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
}

function ChatIcon() {
    return (
          <svg {...iconProps}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
}

export default function Home() {
    const destacado = productos[0];
    const { addItem } = useCart();
    const router = useRouter();

  function handleComprar(e, producto) {
        e.preventDefault();
        e.stopPropagation();
        addItem(producto, 1);
        router.push("/carrito");
  }

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
            <TruckIcon />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>Envio a todo el pais</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                Calculado segun tu provincia
                  </div>
                  </div>
                  </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <LockIcon />
                              <div>
                                <div style={{ fontWeight: 600, fontSize: 14 }}>Pago seguro</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                Procesado por Mercado Pago
                  </div>
                  </div>
                  </div>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <ChatIcon />
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
{esProductoNuevo(p.slug) && (
                      <span className="tag new-badge">Nuevo</span>
                   )}
</div>
                <div className="card-body">
                    <div className="card-sub">{p.subtitulo}</div>
                  <div className="card-title">{p.nombre}</div>
                  <div style={{ marginTop: 10 }}>
                    <button
                      className="btn-primary"
                      style={{ padding: "8px 16px", fontSize: 13 }}
                      onClick={(e) => handleComprar(e, p)}
                    >
                      Comprar
                        </button>
                    <div
                      style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                                marginTop: 8,
                      }}
                    >
                      <span className="price">
                                              ${(p.precio + ENVIO_REFERENCIA).toLocaleString("es-AR")}
</span>
                      <span style={{ fontSize: 13, color: "var(--ink-soft)" }}>
                        Envio gratis
                          </span>
                          </div>
{tieneStockBajo(p) && (
                        <div className="stock-badge" style={{ marginTop: 8 }}>
                        Ultimas unidades
                          </div>
                    )}
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
