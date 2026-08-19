import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { productos, getProducto } from "../../lib/productos";
import { useCart } from "../../components/CartContext";
import { ZONAS } from "../../lib/zonas";

const ENVIO_REFERENCIA = ZONAS.caba_gba.envio;

export async function getStaticPaths() {
      return {
              paths: productos.map((p) => ({ params: { slug: p.slug } })),
              fallback: false,
      };
}

export async function getStaticProps({ params }) {
      const producto = getProducto(params.slug);
      return { props: { producto } };
}

export default function ProductoPage({ producto }) {
      const { addItem } = useCart();
      const router = useRouter();
      const [agregado, setAgregado] = useState(false);
      const [imagenActiva, setImagenActiva] = useState(producto.imagenes[0]);

  function handleAdd() {
          addItem(producto, 1);
          setAgregado(true);
          setTimeout(() => setAgregado(false), 1800);
  }

  function handleBuyNow() {
          addItem(producto, 1);
          router.push("/carrito");
  }

  return (
          <>
            <Head>
              <title>{producto.nombre} - alivio</title>
    </Head>
      <Header />
          <div className="container pd-grid">
            <div>
              <div className="pd-media">
                <img src={imagenActiva} alt={producto.nombre} />
    </div>
{producto.imagenes.length > 1 && (
                <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
{producto.imagenes.map((img) => (
                    <button
                                         key={img}
                   onClick={() => setImagenActiva(img)}
                   style={{
                                           width: 64,
                                           height: 64,
                                           padding: 0,
                                           background: "var(--surface)",
                                           border:
                                                                     img === imagenActiva
                                               ? "2px solid var(--primary)"
                                                                       : "1px solid var(--line)",
                                           cursor: "pointer",
                   }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                      </button>
              ))}
</div>
          )}
</div>
        <div className="pd-info">
                        <span className="eyebrow">{producto.subtitulo}</span>
          <h1>{producto.nombre}</h1>
          <div className="pd-price">
                          ${(producto.precio + ENVIO_REFERENCIA).toLocaleString("es-AR")}
</div>
          <div className="free-shipping-badge" style={{ marginTop: 0, marginBottom: 20 }}>
            Envio gratis a todo el pais
                </div>
          <p className="pd-desc">{producto.descripcion}</p>
          <ul className="pd-benefits">
            {producto.beneficios.map((b) => (
                              <li key={b}>{b}</li>
                                                 ))}
</ul>
          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn-primary" onClick={handleBuyNow}>
                  Comprar ahora
    </button>
            <button className="btn-secondary" onClick={handleAdd}>
{agregado ? "Agregado" : "Agregar al carrito"}
</button>
    </div>
          <p
            className="mono"
            style={{ marginTop: 16, fontSize: 12, color: "var(--ink-soft)" }}
          >
            Precio final para Buenos Aires y GBA. Para otras provincias, el
            total se ajusta automaticamente en el carrito.
                </p>

{producto.especificaciones && producto.especificaciones.length > 0 && (
                <div style={{ marginTop: 32 }}>
              <h2 style={{ fontSize: 18, marginBottom: 14 }}>Especificaciones</h2>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <tbody>
{producto.especificaciones.map((esp) => (
                        <tr key={esp.label} style={{ borderTop: "1px solid var(--line)" }}>
                                                     <td
                                                       style={{
                              padding: "10px 0",
                              fontWeight: 500,
                              width: "35%",
                              verticalAlign: "top",
}}
                      >
{esp.label}
</td>
                      <td style={{ padding: "10px 0", color: "var(--ink-soft)" }}>
{esp.valor}
</td>
    </tr>
                  ))}
                      </tbody>
                      </table>
                      </div>
          )}
</div>
              </div>
      <Footer />
              </>
  );
}
