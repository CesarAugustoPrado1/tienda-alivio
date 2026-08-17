import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Fallo() {
  return (
    <>
      <Head>
        <title>Pago no completado — alivio</title>
      </Head>
      <Header />
      <div className="container empty-state" style={{ padding: "96px 24px" }}>
        <span className="eyebrow">Pago no completado</span>
        <h1 style={{ fontSize: 32, margin: "16px 0" }}>Algo salió mal</h1>
        <p style={{ marginBottom: 32 }}>
          Tu pago no se pudo procesar. Tu carrito sigue intacto, podés
          intentarlo de nuevo.
        </p>
        <Link href="/carrito" className="btn-primary">
          Volver al carrito
        </Link>
      </div>
      <Footer />
    </>
  );
}
