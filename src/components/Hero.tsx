import heroBg from "@/assets/hero-bg.png";

const kpis = [
  { icon: "🔍", label: "Buscador Inteligente" },
  { icon: "✓", label: "Sello Verificación TUP" },
  { icon: "◆", label: "Filtro de Época" },
  { icon: "☎", label: "Contacto Directo" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Patio colonial cubano con palmeras tropicales"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,18,8,0.75)] via-[rgba(10,18,8,0.60)] to-[rgba(5,10,4,0.55)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24">
        {/* Logo */}
        <h1 className="font-cinzel font-black text-5xl md:text-7xl lg:text-8xl tracking-[0.12em] text-crema text-shadow-hero leading-none">
          CUBANE<span className="relative inline-block">O<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-crema rounded-full" /></span>
        </h1>
        <p className="font-montserrat font-extralight text-sm md:text-base tracking-[0.4em] text-crema/80 uppercase mt-3">
          Portal Inmobiliario
        </p>

        {/* Separator */}
        <div className="w-24 h-[1px] bg-ambar mt-8 mb-8" />

        {/* KPIs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="flex items-center gap-2 bg-negro/40 border border-ambar/30 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-ambar text-lg">{kpi.icon}</span>
              <span className="font-montserrat text-xs font-light tracking-wider text-crema/90 uppercase">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-3xl">
          <select className="flex-1 bg-negro/60 border border-ambar/40 text-crema/80 px-4 py-3 font-montserrat text-sm font-light appearance-none cursor-pointer focus:outline-none focus:border-ambar">
            <option>Tipo de propiedad</option>
            <option>Mansión Colonial</option>
            <option>Apartamento</option>
            <option>Villa</option>
            <option>Penthouse</option>
          </select>
          <select className="flex-1 bg-negro/60 border border-ambar/40 text-crema/80 px-4 py-3 font-montserrat text-sm font-light appearance-none cursor-pointer focus:outline-none focus:border-ambar">
            <option>Precio</option>
            <option>$50,000 - $200,000</option>
            <option>$200,000 - $500,000</option>
            <option>$500,000 - $1,000,000</option>
            <option>$1,000,000+</option>
          </select>
          <select className="flex-1 bg-negro/60 border border-ambar/40 text-crema/80 px-4 py-3 font-montserrat text-sm font-light appearance-none cursor-pointer focus:outline-none focus:border-ambar">
            <option>Ubicación</option>
            <option>Miramar</option>
            <option>Vedado</option>
            <option>Centro Habana</option>
            <option>Varadero</option>
          </select>
          <button className="bg-ambar text-negro font-montserrat font-semibold text-sm uppercase tracking-wider px-8 py-3 hover:bg-ambar/90 transition-colors">
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
