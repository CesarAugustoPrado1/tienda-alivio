import Link from "next/link";

export default function Footer() {
    return (
          <footer>
            <div
          className="container"
          style={{
                      display: "grid",
                      gridTemplateColumns: "1.3fr 1fr 1fr",
                      gap: 32,
                      paddingBottom: 32,
          }}
      >
        <div>
                  <div className="brand" style={{ marginBottom: 10 }}>
            aliv<span>io</span>
              </div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", maxWidth: "32ch" }}>
            Productos para el alivio del dolor y la recuperacion muscular.
                          Envios a todo el pais, calculados segun tu provincia.
              </p>
              </div>

        <div>
                        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>Tienda</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
            <Link href="/">Inicio</Link>
            <Link href="/#productos">Productos</Link>
            <Link href="/carrito">Carrito</Link>
              </div>
              </div>

        <div>
                        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>Contacto</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
            <a href="mailto:cesarprado@pirkastone.com">cesarprado@pirkastone.com</a>
            <span style={{ color: "var(--ink-soft)" }}>Pagos con Mercado Pago</span>
              </div>
              </div>
              </div>

      <div
        className="container"
        style={{
                    borderTop: "1px solid var(--line)",
                    paddingTop: 20,
                    fontSize: 12,
                    color: "var(--ink-soft)",
        }}
      >
        alivio - recuperacion y bienestar.
          </div>
          </footer>
  );
}
