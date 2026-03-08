const Footer = () => {
  return (
    <footer id="contacto" className="relative bg-negro py-16 overflow-hidden">
      {/* Tobacco texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q50 25 40 40 Q30 55 40 70' stroke='%238B4513' fill='none' stroke-width='0.8'/%3E%3Cpath d='M20 5 Q30 20 20 35 Q10 50 20 65' stroke='%238B4513' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-cinzel font-black text-2xl tracking-[0.12em] text-crema">
              CUBANE<span className="relative inline-block">O<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-crema rounded-full" /></span>.ORG
            </span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-2 font-montserrat text-sm font-light text-crema/60">
            <a href="#" className="hover:text-ambar transition-colors">Home</a>
            <span className="text-ambar/30">|</span>
            <a href="#propiedades" className="hover:text-ambar transition-colors">Listings</a>
            <span className="text-ambar/30">|</span>
            <a href="#zonas" className="hover:text-ambar transition-colors">About</a>
            <span className="text-ambar/30">|</span>
            <a href="#contacto" className="hover:text-ambar transition-colors">Contact</a>
          </div>

          {/* Isotipo */}
          <div className="w-14 h-14 rounded-full border-2 border-ambar flex items-center justify-center">
            <span className="font-cinzel font-black text-2xl text-ambar">C</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ambar/10 text-center">
          <p className="font-montserrat font-extralight text-xs text-crema/40 tracking-wider">
            © 2026 Cubaneo.org — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
