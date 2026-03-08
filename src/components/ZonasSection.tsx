const zonas = [
  {
    name: "Miramar",
    description: "Embajadas, mansiones y vida cosmopolita",
    properties: 48,
    priceRange: "$200K – $2M",
  },
  {
    name: "Vedado",
    description: "Art Déco, universidad y bohemia cultural",
    properties: 62,
    priceRange: "$150K – $1.5M",
  },
  {
    name: "Centro Habana",
    description: "Colonial auténtico, la esencia de Cuba",
    properties: 35,
    priceRange: "$80K – $500K",
  },
  {
    name: "Varadero",
    description: "Playas de ensueño y resorts exclusivos",
    properties: 29,
    priceRange: "$300K – $3M",
  },
];

const ZonasSection = () => {
  return (
    <section id="zonas" className="py-20 bg-verde">
      <div className="container mx-auto px-4">
        <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-crema text-center mb-12 tracking-wide">
          Zonas Exclusivas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonas.map((zona) => (
            <div
              key={zona.name}
              className="group bg-negro/30 border border-ambar/15 p-6 border-b-2 border-b-ambar hover:bg-negro/50 hover:shadow-[0_0_30px_rgba(218,165,32,0.1)] transition-all duration-500 cursor-pointer"
            >
              <span className="text-ambar text-2xl mb-3 block">◆</span>
              <h3 className="font-cinzel font-bold text-xl text-crema mb-2">
                {zona.name}
              </h3>
              <p className="font-montserrat text-sm font-light text-crema/60 mb-4 leading-relaxed">
                {zona.description}
              </p>
              <p className="font-montserrat text-xs text-crema/50 mb-1">
                {zona.properties} propiedades
              </p>
              <p className="font-montserrat text-sm italic text-ambar">
                {zona.priceRange}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasSection;
