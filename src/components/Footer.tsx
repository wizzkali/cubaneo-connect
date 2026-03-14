const footerLinks = [
  { label: "Inicio", href: "#" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Zonas", href: "#zonas" },
  { label: "Agentes", href: "#agentes" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => {
  return (
    <footer id="contacto" className="relative bg-negro py-16 overflow-hidden">
      {/* Tobacco texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q50 25 40 40 Q30 55 40 70' stroke='%238B4513' fill='none' stroke-width='0.8'/%3E%3Cpath d='M20 5 Q30 20 20 35 Q10 50 20 65' stroke='%238B4513' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-cinzel font-black text-2xl tracking-[0.12em] text-crema">
              CUBANE
              <span className="relative inline-block">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-crema rounded-full" />
              </span>
              .ORG
            </span>
            <p className="font-montserrat font-extralight text-[9px] tracking-[0.35em] text-crema/40 uppercase mt-1">
              Portal Inmobiliario · Cuba
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 font-montserrat text-xs font-light text-crema/50">
            {footerLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                <a href={link.href} className="hover:text-ambar transition-colors duration-200">
                  {link.label}
                </a>
                {i < footerLinks.length - 1 && (
                  <span className="text-ambar/20">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Isotipo */}
          <div className="w-16 h-16 overflow-hidden rounded-sm hover:opacity-90 transition-opacity duration-300">
            <img src="/favicon.png" alt="Cubaneo logo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-ambar/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-montserrat font-extralight text-xs text-crema/30 tracking-wider">
            © 2026 Cubaneo.org — Todos los derechos reservados
          </p>
          <p className="font-montserrat font-extralight text-xs text-crema/20 tracking-wider">
            cubaneo.org · 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

