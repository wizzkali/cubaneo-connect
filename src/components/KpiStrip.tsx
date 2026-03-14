const kpis = [
  {
    icon: "◉",
    label: "Buscador Inteligente",
    desc: "IA que aprende tus preferencias",
  },
  {
    icon: "✦",
    label: "Sello Verificación TUP",
    desc: "Propiedades auditadas y verificadas",
  },
  {
    icon: "◆",
    label: "Filtro Época Colonial",
    desc: "1850–1959 · Art Déco · Republicana",
  },
  {
    icon: "☎",
    label: "Contacto Directo",
    desc: "Sin intermediarios. Sin comisiones ocultas",
  },
];

const KpiStrip = () => {
  return (
    <section className="bg-negro border-y border-ambar/20 py-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ambar/15">
          {kpis.map((kpi, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6 py-6 group hover:bg-verde/20 transition-colors duration-300 cursor-default"
            >
              <span className="text-ambar text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {kpi.icon}
              </span>
              <h3 className="font-montserrat font-semibold text-xs uppercase tracking-wider text-crema mb-1">
                {kpi.label}
              </h3>
              <p className="font-montserrat font-light text-[10px] text-crema/40 leading-relaxed hidden sm:block">
                {kpi.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpiStrip;
