import Link from "next/link";

const iconProps = {
        width: 18,
        height: 18,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "var(--ink-soft)",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
};

function InstagramIcon() {
        return (
                  <svg {...iconProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
        );
}

function FacebookIcon() {
        return (
                  <svg {...iconProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
        );
}

function TiktokIcon() {
        return (
                  <svg {...iconProps}>
              <path d="M14 4v12" />
                        <circle cx="10" cy="16" r="4" />
                        <path d="M14 8a4 4 0 0 0 4-4" />
              </svg>
        );
}

function YoutubeIcon() {
        return (
                  <svg {...iconProps}>
      <rect x="2" y="5" width="20" height="14" rx="4" ry="4" />
                    <polygon points="10 9 15 12 10 15 10 9" fill="var(--ink-soft)" stroke="none" />
              </svg>
        );
}

              const socialLinks = [
                    { name: "Instagram", href: "https://instagram.com/alivio.ar", Icon: InstagramIcon },
                    { name: "Facebook", href: "https://facebook.com/alivio.ar", Icon: FacebookIcon },
                    { name: "TikTok", href: "https://tiktok.com/@alivio.ar", Icon: TiktokIcon },
                    { name: "YouTube", href: "https://youtube.com/@alivio.ar", Icon: YoutubeIcon },
                    ];

export default function Footer() {
        return (
                  <footer>
                    <div
              className="container"
              style={{
                              display: "grid",
                              gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
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
            <a
              href="https://wa.me/5491164204981"
              target="_blank"
              rel="noopener noreferrer"
            >
                                  WhatsApp
                    </a>
            <span style={{ color: "var(--ink-soft)" }}>Pagos con Mercado Pago</span>
                    </div>
                    </div>

        <div>
                              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>Redes</div>
          <div style={{ display: "flex", gap: 12 }}>
{socialLinks.map(({ name, href, Icon }) => (
                    <a
                                 key={name}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label={name}
               >
                                       <Icon />
                       </a>
             ))}
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
