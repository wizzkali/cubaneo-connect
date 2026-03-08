import { ArrowRight, BedDouble, Bath, Maximize } from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";

const FeaturedListings = () => {
  return (
    <section id="propiedades" className="relative py-20 bg-crema">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 35 30 45 Q35 55 30 60' stroke='%238B4513' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative">
        <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-negro text-center mb-12 tracking-wide">
          Propiedades Destacadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((listing) => (
            <Link
              to={`/propiedad/${listing.slug}`}
              key={listing.id}
              className="group bg-negro overflow-hidden hover:shadow-2xl transition-all duration-500 block"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 right-3 bg-ambar text-negro font-montserrat font-semibold text-[10px] uppercase tracking-wider px-3 py-1">
                  {listing.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-cinzel font-bold text-lg text-crema mb-3 leading-snug">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-4 text-crema/60 mb-4">
                  <span className="flex items-center gap-1 font-montserrat text-xs">
                    <BedDouble size={14} /> {listing.beds} Hab
                  </span>
                  <span className="flex items-center gap-1 font-montserrat text-xs">
                    <Bath size={14} /> {listing.baths} Baños
                  </span>
                  <span className="flex items-center gap-1 font-montserrat text-xs">
                    <Maximize size={14} /> {listing.area} m²
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-[10px] uppercase tracking-wider text-ambar/80 border border-ambar/30 px-2 py-1">
                    {listing.tag}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-cinzel font-bold text-xl text-crema">
                      {listing.price}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-ambar flex items-center justify-center group-hover:bg-ambar/80 transition-colors">
                      <ArrowRight size={16} className="text-negro" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
