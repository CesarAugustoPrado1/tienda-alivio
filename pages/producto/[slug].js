import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { productos, getProducto } from "../../lib/productos";
import { useCart } from "../../components/CartContext";

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
            <title>{producto.nombre} — alivio</title>
  </Head>
      <Header />
        <div className="container pd-grid">
          <div className="pd-media">
            <img src={producto.imagen} alt={producto.nombre} />
  </div>
        <div className="pd-info">
            <span className="eyebrow">{producto.subtitulo}</span>
          <h1>{producto.nombre}</h1>
          <div className="pd-price">${producto.precio.toLocaleString("es-AR")}</div>
          <div
            className="mono"
            style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}
          >
            <span className="tag">Envío a todo el país</span>
            desde ${(9500).toLocaleString("es-AR")} según tu provincia
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
{agregado ? "Agregado ✓" : "Agregar al carrito"}
</button>
  </div>
    <p className="mono" style={{ marginTop: 16, fontSize: 12, color: "var(--ink-soft)" }}>Precio final para Buenos Aires y GBA. Para otras provincias, el total se ajusta automaticamente en el carrito.</p>
  </div>
  </div>
      <Footer />
  </>
  );
}
