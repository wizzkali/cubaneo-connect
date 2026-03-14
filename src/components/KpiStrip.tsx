import { useState } from "react";
import { X } from "lucide-react";

const kpis = [
  {
    icon: "◉",
    label: "Buscador Inteligente",
    shortDesc: "IA que aprende tus preferencias",
    fullTitle: "Buscador con Inteligencia Artificial",
    fullDesc: "Nuestro motor de búsqueda aprende de tus consultas y comportamiento para mostrarte primero las propiedades que más se ajustan a tu perfil. Cuanto más lo uses, mejores resultados obtendrás. Filtra por época colonial, precio, zona, superficie y características únicas de Cuba.",
    features: ["Aprende de tus búsquedas", "Sugerencias personalizadas", "Filtros únicos para Cuba"],
  },
  {
    icon: "✦",
    label: "Sello de Verificación",
    shortDesc: "Propiedades auditadas y verificadas",
    fullTitle: "Sello de Verificación Cubaneo",
    fullDesc: "Cada propiedad con sello ha sido verificada por nuestro equipo en Cuba. Comprobamos la existencia real del inmueble, la titularidad del vendedor y la coherencia del precio con el mercado actual. Solo el 30% de las propiedades reciben esta distinción.",
    features: ["Verificación presencial en Cuba", "Documentación revisada", "Precio validado con el mercado"],
  },
  {
    icon: "◆",
    label: "Filtro Época Colonial",
    shortDesc: "1850–1959 · Art Déco · Republicana",
    fullTitle: "Filtro de Arquitectura Histórica",
    fullDesc: "Cuba tiene el mayor catálogo de arquitectura colonial y Art Déco del Caribe. Nuestro filtro te permite buscar por período histórico exacto: Colonial (1850–1900), Republicana (1900–1930), Art Déco (1930–1959). Una funcionalidad única que ningún otro portal ofrece.",
    features: ["Colonial (1850–1900)", "Republicana (1900–1930)", "Art Déco (1930–1959)"],
  },
  {
    icon: "☎",
    label: "Contacto Directo",
    shortDesc: "Sin intermediarios. Sin comisiones ocultas",
    fullTitle: "Contacto Directo con el Vendedor",
    fullDesc: "Conectamos directamente al comprador de la diáspora con el propietario o su representante en Cuba. Sin intermediarios que encarezcan la operación. Comunicación vía WhatsApp, email o llamada. Transparencia total en cada paso del proceso.",
    features: ["Contacto directo por WhatsApp", "Sin comisiones ocultas", "Representante legal disponible"],
  },
];

const KpiStrip = () => {
  const [activeKpi, setActiveKpi] = useState<number | null>(null);

  return (
    <>
      <section className="bg-negro border-y border-ambar/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ambar/15">
            {kpis.map((kpi, i) => (
              <button
                key={i}
                onClick={() => setActiveKpi(i)}
                className="flex flex-col items-center text-center px-6 py-6 group hover:bg-verde/25 transition-colors duration-300 cursor-pointer w-full"
              >
                <span className="text-ambar text-xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {kpi.icon}
                </span>
                <h3 className="font-montserrat font-semibold text-xs uppercase tracking-wider text-crema mb-1">
                  {kpi.label}
                </h3>
                <p className="font-montserrat font-light text-[10px] text-crema/50 leading-relaxed hidden sm:block">
                  {kpi.shortDesc}
                </p>
                <span className="font-montserrat text-[9px] text-ambar/60 mt-2 hidden sm:block group-hover:text-ambar transition-colors">
                  Saber más →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeKpi !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-negro/80 backdrop-blur-sm px-4"
          onClick={() => setActiveKpi(null)}
        >
          <div
            className="bg-negro border border-ambar/30 max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveKpi(null)}
              className="absolute top-4 right-4 text-crema/40 hover:text-crema transition-colors"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <span className="text-ambar text-3xl block mb-4">{kpis[activeKpi].icon}</span>

            {/* Title */}
            <h3 className="font-cinzel font-bold text-xl text-crema mb-3 tracking-wide">
              {kpis[activeKpi].fullTitle}
            </h3>

            {/* Divider */}
            <div className="w-12 h-px bg-ambar/50 mb-4" />

            {/* Description */}
            <p className="font-montserrat font-light text-sm text-crema/70 leading-relaxed mb-5">
              {kpis[activeKpi].fullDesc}
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {kpis[activeKpi].features.map((f, fi) => (
                <li key={fi} className="flex items-center gap-2 font-montserrat text-xs text-crema/60">
                  <span className="text-ambar text-xs">◆</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => setActiveKpi(null)}
              className="mt-6 w-full bg-ambar text-negro font-montserrat font-bold text-xs uppercase tracking-widest py-3 hover:bg-ambar/90 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default KpiStrip;
