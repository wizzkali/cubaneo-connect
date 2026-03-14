import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "INICIO", href: "#" },
  { label: "PROPIEDADES", href: "#propiedades" },
  { label: "ZONAS", href: "#zonas" },
  { label: "AGENTES", href: "#agentes" },
  { label: "CONTACTO", href: "#contacto" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-t-2 border-ambar transition-all duration-300 ${
        scrolled
          ? "bg-verde/98 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-verde/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-cinzel text-lg font-black tracking-[0.12em] leading-none" style={{background:"linear-gradient(180deg, #F5D878 0%, #C8922A 35%, #A06818 70%, #6A3E08 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>
            CUBANEO
          </span>
          <span className="font-montserrat text-[8px] font-extralight tracking-[0.4em] uppercase mt-0.5" style={{color:"#A06818", opacity:0.75}}">
            Portal Inmobiliario
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-montserrat text-xs font-light tracking-[0.15em] text-crema/80 uppercase hover:text-ambar transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-ambar group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button desktop */}
        <div className="hidden lg:block">
          <Link to="/publicar" className="font-montserrat font-semibold text-xs uppercase tracking-wider px-5 py-2 border border-ambar text-ambar hover:bg-ambar hover:text-negro transition-all duration-300">Publicar Propiedad</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-crema hover:text-ambar transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-verde/99 border-t border-ambar/20 px-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 font-montserrat text-sm font-light tracking-[0.15em] text-crema/80 uppercase hover:text-ambar transition-colors border-b border-ambar/10"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/publicar" className="block mt-4 text-center font-montserrat font-semibold text-xs uppercase tracking-wider px-5 py-3 border border-ambar text-ambar hover:bg-ambar hover:text-negro transition-all duration-300" onClick={() => setMobileOpen(false)}>Publicar Propiedad</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





