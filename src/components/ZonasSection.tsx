import { ArrowRight } from "lucide-react";

const zonas = [
  {
    name: "Miramar",
    description: "Embajadas, mansiones y vida cosmopolita",
    properties: 48,
    priceRange: "$200K – $2M",
    emoji: "🌴",
  },
  {
    name: "Vedado",
    description: "Art Déco, universidad y bohemia cultural",
    properties: 62,
    priceRange: "$150K – $1.5M",
    emoji: "🏛",
  },
  {
    name: "Centro Habana",
    description: "Colonial auténtico, la esencia de Cuba",
    properties: 35,
    priceRange: "$80K – $500K",
    emoji: "🏠",
  },
  {
    name: "Varadero",
    description: "Playas de ensueño y resorts exclusivos",
    properties: 29,
    priceRange: "$300K – $3M",
    emoji: "🌊",
  },
];

const ZonasSection = () => {
  return (
    <section id="zonas" className="py-20 bg-verde overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-montserrat text-[10px] font-light tracking-[0.5em] text-ambar/60 uppercase mb-3">
            ✦ Mercados Principales ✦
          </p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-crema tracking-wide">
            Zonas Exclusivas
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-px bg-ambar/40" />
            <span className="text-ambar text-xs">◆</span>
            <div className="w-12 h-px bg-ambar/40" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {zonas.map((zona) => (
            <div
              key={zona.name}
              className="group relative bg-negro/25 border border-ambar/15 border-b-2 border-b-ambar p-6 hover:bg-negro/50 hover:shadow-[0_0_40px_rgba(218,165,32,0.08)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover accent line top */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-ambar group-hover:w-full transition-all duration-500" />

              <span className="text-2xl mb-4 block">{zona.emoji}</span>

              <h3 className="font-cinzel font-bold text-xl text-crema mb-2 group-hover:text-ambar transition-colors duration-300">
                {zona.name}
              </h3>
              <p className="font-montserrat text-sm font-light text-crema/55 mb-5 leading-relaxed">
                {zona.description}
              </p>

              <div className="h-px bg-ambar/15 mb-4" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-montserrat text-xs text-crema/40 mb-0.5">
                    {zona.properties} propiedades
                  </p>
                  <p className="font-montserrat text-sm font-medium text-ambar">
                    {zona.priceRange}
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full border border-ambar/40 flex items-center justify-center group-hover:bg-ambar group-hover:border-ambar transition-all duration-300">
                  <ArrowRight size={14} className="text-ambar group-hover:text-negro transition-colors duration-300" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasSection;
