import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Header() {
    const { count } = useCart();
    const [open, setOpen] = useState(false);

  return (
        <header className="site-header">
          <div className="container header-row">
            <Link href="/" className="brand" onClick={() => setOpen(false)}>
          aliv<span>io</span>
            </Link>

        <nav className="nav-links">
                      <Link href="/">Inicio</Link>
          <Link href="/#productos">Productos</Link>
          <Link href="/notas">Notas</Link>
            </nav>

        <div className="header-actions">
                      <Link href="/carrito" className="cart-link">
                        Carrito {count > 0 ? `(${count})` : ""}
</Link>
          <button
            className="menu-toggle"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
                          <span />
                          <span />
                          <span />
              </button>
              </div>
              </div>

{open && (
          <nav className="mobile-nav">
            <Link href="/" onClick={() => setOpen(false)}>
            Inicio
              </Link>
          <Link href="/#productos" onClick={() => setOpen(false)}>
            Productos
              </Link>
          <Link href="/notas" onClick={() => setOpen(false)}>
            Notas
              </Link>
              </nav>
      )}
</header>
  );
}
