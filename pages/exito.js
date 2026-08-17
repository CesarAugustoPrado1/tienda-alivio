import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";

export default function Exito() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>¡Compra confirmada! — alivio</title>
      </Head>
      <Header />
      <div className="container empty-state" style={{ padding: "96px 24px" }}>
        <span className="eyebrow">Pago aprobado</span>
        <h1 style={{ fontSize: 32, margin: "16px 0" }}>¡Gracias por tu compra!</h1>
        <p style={{ marginBottom: 32 }}>
          Ya estamos preparando tu pedido para despacharlo. Te va a llegar un
          mail con la confirmación.
        </p>
        <Link href="/" className="btn-primary">
          Volver a la tienda
        </Link>
      </div>
      <Footer />
    </>
  );
}
