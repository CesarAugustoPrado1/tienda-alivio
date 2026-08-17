import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";

const inputStyle = {
  padding: "12px 14px",
  border: "1px solid var(--line)",
  borderRadius: 2,
  fontFamily: "inherit",
  fontSize: 14,
  background: "#fff",
};

const CAMPOS_VACIOS = {
  nombre: "",
  telefono: "",
  direccion: "",
  ciudad: "",
  provincia: "",
};

export default function Carrito() {
  const { items, updateQty, removeItem, total } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [envio, setEnvio] = useState(CAMPOS_VACIOS);

  function handleEnvioChange(campo, valor) {
    setEnvio((prev) => ({ ...prev, [campo]: valor }));
  }

  function envioCompleto() {
    return Object.values(envio).every((v) => v.trim().length > 0);
  }

  async function handleCheckout() {
    if (!envioCompleto()) {
      setError("Completá todos los datos de envío antes de pagar.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/crear-preferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, envio }),
      });
      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        setError("No se pudo iniciar el pago. Probá de nuevo en unos segundos.");
      }
    } catch (e) {
      setError("Error de conexión. Probá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Tu carrito — alivio</title>
      </Head>
      <Header />
      <div className="container" style={{ padding: "48px 24px" }}>
        <h1 style={{ fontSize: 32, marginBottom: 32 }}>Tu carrito</h1>

        {items.length === 0 ? (
          <div className="empty-state">
            <p>Todavía no agregaste productos.</p>
            <Link href="/#productos" className="btn-primary" style={{ marginTop: 16 }}>
              Ver productos
            </Link>
          </div>
        ) : (
          <>
            <div>
              {items.map((item) => (
                <div className="cart-row" key={item.slug}>
                  <img src={item.imagen} alt={item.nombre} />
                  <div>
                    <div style={{ fontWeight: 500 }}>{item.nombre}</div>
                    <div className="mono" style={{ fontSize: 14, color: "var(--ink-soft)" }}>
                      ${item.precio.toLocaleString("es-AR")}
                    </div>
                  </div>
                  <input
                    type="number"
                    min="1"
                    className="qty-input"
                    value={item.cantidad}
                    onChange={(e) => updateQty(item.slug, parseInt(e.target.value) || 1)}
                  />
                  <button
                    onClick={() => removeItem(item.slug)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--ink-soft)",
                      fontSize: 13,
                      textDecoration: "underline",
                    }}
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <span>Total</span>
              <span className="mono">${total.toLocaleString("es-AR")}</span>
            </div>

            <div style={{ marginTop: 32 }}>
              <h2 style={{ fontSize: 20, marginBottom: 16 }}>Datos de envío</h2>
              <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 1fr" }}>
                <input
                  placeholder="Nombre y apellido"
                  value={envio.nombre}
                  onChange={(e) => handleEnvioChange("nombre", e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder="Teléfono"
                  value={envio.telefono}
                  onChange={(e) => handleEnvioChange("telefono", e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder="Dirección (calle y número)"
                  value={envio.direccion}
                  onChange={(e) => handleEnvioChange("direccion", e.target.value)}
                  style={{ ...inputStyle, gridColumn: "1 / -1" }}
                />
                <input
                  placeholder="Ciudad"
                  value={envio.ciudad}
                  onChange={(e) => handleEnvioChange("ciudad", e.target.value)}
                  style={inputStyle}
                />
                <input
                  placeholder="Provincia"
                  value={envio.provincia}
                  onChange={(e) => handleEnvioChange("provincia", e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>

            {error && (
              <p style={{ color: "#a6432e", marginTop: 16, fontSize: 14 }}>{error}</p>
            )}

            <button
              className="btn-primary"
              style={{ marginTop: 24, width: "100%", justifyContent: "center" }}
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? "Redirigiendo a Mercado Pago…" : "Pagar con Mercado Pago"}
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
