import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const tabs = ["Comprar", "Invertir"];
const tiposPropiedad = ["Mansión Colonial", "Apartamento", "Villa", "Penthouse", "Casa", "Local comercial"];
const ubicaciones = ["Miramar", "Vedado", "Centro Habana", "Varadero", "Santiago de Cuba", "Trinidad"];
const precios = [
  { label: "Desde $5,000", value: "0-5" },
  { label: "$5,000 – $10,000", value: "5-10" },
  { label: "$10,000 – $50,000", value: "10-50" },
  { label: "$50,000 – $200,000", value: "50-200" },
  { label: "$200,000 – $500,000", value: "200-500" },
  { label: "$500,000 – $1M", value: "500-1000" },
  { label: "$1M+", value: "1000+" },
];
const habitaciones = ["1+", "2+", "3+", "4+", "5+"];
const epocas = ["1850–1900", "1900–1930", "1930–1959", "1960–1990", "Post-1990"];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Comprar");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    tipo: "", precio: "", ubicacion: "",
    habitaciones: "", epoca: "", superficieMin: "", superficieMax: "",
  });

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;
  const clearFilters = () => setFilters({ tipo: "", precio: "", ubicacion: "", habitaciones: "", epoca: "", superficieMin: "", superficieMax: "" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Patio colonial cubano" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,18,8,0.82)] via-[rgba(10,18,8,0.68)] to-[rgba(5,10,4,0.80)]" />
      </div>
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-ambar/30 hidden md:block" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-ambar/30 hidden md:block" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 w-full max-w-4xl mx-auto">

        {/* LEMA */}
        <p className="font-montserrat text-xs font-light tracking-[0.4em] text-crema/75 uppercase mb-6 italic">
          La isla que llevas dentro
        </p>

        {/* Logo */}
        <h1 className="font-cinzel font-black text-5xl md:text-7xl lg:text-8xl tracking-[0.12em] text-crema leading-none drop-shadow-[0_2px_20px_rgba(218,165,32,0.15)]">
          CUBANE<span className="relative inline-block">O<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-crema rounded-full" /></span>
        </h1>
        <p className="font-montserrat font-extralight text-sm md:text-base tracking-[0.4em] text-crema/85 uppercase mt-3">
          Portal Inmobiliario
        </p>

        <div className="flex items-center gap-4 mt-8 mb-8">
          <div className="w-16 h-px bg-ambar/60" />
          <span className="text-ambar text-xs">◆</span>
          <div className="w-16 h-px bg-ambar/60" />
        </div>

        <div className="w-full">
          {/* Tabs */}
          <div className="flex items-center gap-0 mb-0">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`font-montserrat text-xs font-semibold uppercase tracking-widest px-7 py-2.5 transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-ambar text-negro"
                    : "bg-negro/70 text-crema/75 hover:text-crema border border-b-0 border-ambar/30"
                }`}>
                {tab}
              </button>
            ))}
            <span className="ml-3 font-montserrat text-[9px] text-crema/55 tracking-wider hidden sm:block">
              {activeTab === "Invertir" ? "· Rentabilidad · Oportunidades de mercado" : "· 170+ propiedades verificadas"}
            </span>
          </div>

          {/* Campos buscador */}
          <div className="flex flex-col sm:flex-row items-stretch gap-0 w-full border border-ambar/40 bg-negro/80 backdrop-blur-sm">
            <select value={filters.tipo} onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
              className="flex-1 bg-transparent border-r border-ambar/25 text-crema/90 px-4 py-4 font-montserrat text-sm font-light appearance-none cursor-pointer focus:outline-none focus:bg-negro/50 transition-colors">
              <option value="" className="bg-negro">Tipo de propiedad</option>
              {tiposPropiedad.map((t) => <option key={t} value={t} className="bg-negro">{t}</option>)}
            </select>
            <select value={filters.precio} onChange={(e) => setFilters({ ...filters, precio: e.target.value })}
              className="flex-1 bg-transparent border-r border-ambar/25 text-crema/90 px-4 py-4 font-montserrat text-sm font-light appearance-none cursor-pointer focus:outline-none focus:bg-negro/50 transition-colors">
              <option value="" className="bg-negro">Precio</option>
              {precios.map((p) => <option key={p.value} value={p.value} className="bg-negro">{p.label}</option>)}
            </select>
            <select value={filters.ubicacion} onChange={(e) => setFilters({ ...filters, ubicacion: e.target.value })}
              className="flex-1 bg-transparent border-r border-ambar/25 text-crema/90 px-4 py-4 font-montserrat text-sm font-light appearance-none cursor-pointer focus:outline-none focus:bg-negro/50 transition-colors">
              <option value="" className="bg-negro">Ubicación</option>
              {ubicaciones.map((u) => <option key={u} value={u} className="bg-negro">{u}</option>)}
            </select>
            <button className="bg-ambar text-negro font-montserrat font-bold text-sm uppercase tracking-widest px-10 py-4 hover:bg-ambar/90 active:scale-[0.98] transition-all whitespace-nowrap">
              Buscar
            </button>
          </div>

          {/* Toggle filtros */}
          <div className="flex items-center justify-between mt-2.5">
            <button onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 font-montserrat text-xs text-crema/65 hover:text-ambar transition-colors">
              <SlidersHorizontal size={13} />
              Más filtros
              {activeFiltersCount > 0 && (
                <span className="bg-ambar text-negro text-[9px] font-bold px-1.5 py-0.5">{activeFiltersCount}</span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button onClick={clearFilters}
                className="flex items-center gap-1 font-montserrat text-[10px] text-crema/55 hover:text-crema/80 transition-colors">
                <X size={11} /> Borrar filtros
              </button>
            )}
          </div>

          {showFilters && (
            <div className="mt-1.5 bg-negro/90 backdrop-blur-md border border-ambar/25 p-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div>
                  <p className="font-montserrat text-[9px] uppercase tracking-widest text-ambar/70 mb-2.5">Habitaciones</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {habitaciones.map((h) => (
                      <button key={h} onClick={() => setFilters({ ...filters, habitaciones: filters.habitaciones === h ? "" : h })}
                        className={`font-montserrat text-xs px-3 py-1.5 border transition-all duration-150 ${
                          filters.habitaciones === h ? "bg-ambar text-negro border-ambar" : "border-ambar/30 text-crema/75 hover:border-ambar/60"
                        }`}>
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-montserrat text-[9px] uppercase tracking-widest text-ambar/70 mb-2.5">Época de Construcción</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {epocas.map((e) => (
                      <button key={e} onClick={() => setFilters({ ...filters, epoca: filters.epoca === e ? "" : e })}
                        className={`font-montserrat text-[10px] px-2.5 py-1.5 border transition-all duration-150 ${
                          filters.epoca === e ? "bg-ambar text-negro border-ambar" : "border-ambar/30 text-crema/75 hover:border-ambar/60"
                        }`}>
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-montserrat text-[9px] uppercase tracking-widest text-ambar/70 mb-2.5">Superficie (m²)</p>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="Mín" value={filters.superficieMin}
                      onChange={(e) => setFilters({ ...filters, superficieMin: e.target.value })}
                      className="w-20 bg-negro/60 border border-ambar/30 text-crema/90 px-3 py-1.5 font-montserrat text-xs focus:outline-none focus:border-ambar" />
                    <span className="text-crema/40 text-xs">—</span>
                    <input type="number" placeholder="Máx" value={filters.superficieMax}
                      onChange={(e) => setFilters({ ...filters, superficieMax: e.target.value })}
                      className="w-20 bg-negro/60 border border-ambar/30 text-crema/90 px-3 py-1.5 font-montserrat text-xs focus:outline-none focus:border-ambar" />
                  </div>
                </div>
                <div>
                  <p className="font-montserrat text-[9px] uppercase tracking-widest text-ambar/70 mb-2.5">Estado</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {["Listo para entrar", "Para reformar", "En proyecto"].map((estado) => (
                      <button key={estado}
                        className="font-montserrat text-[10px] px-2.5 py-1.5 border border-ambar/30 text-crema/75 hover:border-ambar/60 transition-all duration-150">
                        {estado}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="font-montserrat text-[10px] text-crema/45 tracking-wider mt-3 text-left">
            170+ propiedades verificadas · Actualizado diariamente
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-ambar/60 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
