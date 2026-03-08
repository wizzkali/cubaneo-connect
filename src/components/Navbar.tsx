import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { label: "INICIO", href: "#" },
  { label: "PROPIEDADES", href: "#propiedades" },
  { label: "ZONAS", href: "#zonas" },
  { label: "AGENTES", href: "#agentes" },
  { label: "CONTACTO", href: "#contacto" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-t-2 border-ambar bg-verde/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-cinzel text-lg font-black tracking-[0.12em] text-crema leading-none">
            CUBANE<span className="relative">O<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-crema rounded-full" /></span>
          </span>
          <span className="font-montserrat text-[8px] font-extralight tracking-[0.4em] text-crema/70 uppercase mt-0.5">
            Portal Inmobiliario
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-montserrat text-xs font-light tracking-[0.15em] text-crema/80 uppercase hover:text-ambar transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-crema/50" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-negro/60 border border-ambar/40 text-crema pl-9 pr-4 py-2 text-sm font-montserrat font-light placeholder:text-crema/40 focus:outline-none focus:border-ambar transition-colors w-48"
            />
          </div>
          <button className="bg-ambar text-negro font-montserrat font-semibold text-xs uppercase tracking-wider px-5 py-2 hover:bg-ambar/90 transition-colors">
            Buscar
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-crema"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-verde/98 border-t border-ambar/20 px-4 pb-4">
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
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="flex-1 bg-negro/60 border border-ambar/40 text-crema px-4 py-2 text-sm font-montserrat font-light placeholder:text-crema/40 focus:outline-none focus:border-ambar"
            />
            <button className="bg-ambar text-negro font-montserrat font-semibold text-xs uppercase tracking-wider px-5 py-2">
              Buscar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
