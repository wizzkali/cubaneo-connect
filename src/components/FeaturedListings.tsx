import { ArrowRight, BedDouble, Bath, Maximize } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const listings = [
  {
    image: property1,
    badge: "Premium",
    title: "Mansión Colonial en Vedado",
    beds: 5,
    baths: 3,
    area: 420,
    tag: "Época Colonial",
    price: "$1,200,000",
  },
  {
    image: property2,
    badge: "Premium",
    title: "Penthouse Art Déco en Miramar",
    beds: 3,
    baths: 2,
    area: 280,
    tag: "Art Déco",
    price: "$890,000",
  },
  {
    image: property3,
    badge: "Destacada",
    title: "Villa Frente al Mar en Varadero",
    beds: 4,
    baths: 3,
    area: 350,
    tag: "Contemporánea",
    price: "$750,000",
  },
];

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
          {listings.map((listing) => (
            <div
              key={listing.title}
              className="group bg-negro overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={listing.image}
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
                    <BedDouble size={14} /> {listing.beds} Bedrooms
                  </span>
                  <span className="flex items-center gap-1 font-montserrat text-xs">
                    <Bath size={14} /> {listing.baths} Bathrooms
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
                    <button className="w-9 h-9 rounded-full bg-ambar flex items-center justify-center hover:bg-ambar/80 transition-colors">
                      <ArrowRight size={16} className="text-negro" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
