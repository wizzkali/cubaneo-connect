import { Search, ShieldCheck, Clock, Phone } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Buscador Inteligente",
    description: "Encuentra propiedades con filtros avanzados por época, zona y tipo.",
  },
  {
    icon: ShieldCheck,
    title: "Sello Verificación TUP",
    description: "Cada propiedad verificada con título único de propiedad.",
  },
  {
    icon: Clock,
    title: "Filtro de Época Colonial",
    description: "Filtra por período arquitectónico: colonial, art déco, moderno.",
  },
  {
    icon: Phone,
    title: "Contacto Directo",
    description: "Comunícate directamente con propietarios y agentes.",
  },
];

const FeaturesStrip = () => {
  return (
    <section className="relative z-10 bg-negro pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center px-6 py-4 ${
                index < features.length - 1 ? "lg:border-r border-ambar/30" : ""
              }`}
            >
              <feature.icon className="w-8 h-8 text-ambar mb-3" strokeWidth={1.5} />
              <h3 className="font-cinzel font-bold text-sm tracking-wider text-crema mb-2">
                {feature.title}
              </h3>
              <p className="font-montserrat text-xs font-light text-crema/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
