import Link from "next/link";
import { useCart } from "./CartContext";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="brand">
          aliv<span>io</span>
        </Link>
        <nav className="nav-links">
          <Link href="/">Inicio</Link>
          <Link href="/#productos">Productos</Link>
              <Link href="/notas">Notas</Link>
        </nav>
        <Link href="/carrito" className="cart-link">
          Carrito {count > 0 ? `(${count})` : ""}
        </Link>
      </div>
    </header>
  );
}
