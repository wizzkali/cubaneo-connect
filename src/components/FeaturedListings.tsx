import { useState } from "react";
import { ArrowRight, BedDouble, Bath, Maximize, MapPin, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";

type SortKey = "recientes" | "precio-asc" | "precio-desc" | "m2-asc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recientes", label: "Más recientes" },
  { value: "precio-asc", label: "Precio ↑" },
  { value: "precio-desc", label: "Precio ↓" },
  { value: "m2-asc", label: "Mayor superficie" },
];

const parsePrice = (price: string) => Number(price.replace(/[$,]/g, ""));

const CardGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);
  const prev = (e: React.MouseEvent) => { e.preventDefault(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.preventDefault(); setCurrent((c) => (c + 1) % images.length); };

  return (
    <div className="relative h-52 overflow-hidden group/gallery">
      <img src={images[current]} alt={title} className="w-full h-full object-cover transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-negro/50 to-transparent" />
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-negro/60 hover:bg-negro/80 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200">
            <ChevronLeft size={16} className="text-crema" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-negro/60 hover:bg-negro/80 flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200">
            <ChevronRight size={16} className="text-crema" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all ${i === current ? "bg-ambar w-3" : "bg-crema/40 w-1"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FeaturedListings = () => {
  const [sortBy, setSortBy] = useState<SortKey>("recientes");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setFavorites((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  };

  const sorted = [...properties].sort((a, b) => {
    if (sortBy === "precio-asc") return parsePrice(a.price) - parsePrice(b.price);
    if (sortBy === "precio-desc") return parsePrice(b.price) - parsePrice(a.price);
    if (sortBy === "m2-asc") return b.area - a.area;
    return 0;
  });

  return (
    <section id="propiedades" className="relative py-20 bg-crema overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 35 30 45 Q35 55 30 60' stroke='%238B4513' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }} />

      <div className="container mx-auto px-4 relative">
        {/* Header + ordenación */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="font-montserrat text-[10px] font-light tracking-[0.5em] text-tabaco/60 uppercase mb-2">✦ Selección Curada ✦</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-negro tracking-wide">Propiedades Destacadas</h2>
            <p className="font-montserrat text-xs text-negro/50 mt-1">{sorted.length} propiedades encontradas</p>
          </div>

          {/* Ordenar — texto negro/opaco sobre crema */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-montserrat text-[10px] uppercase tracking-widest text-negro/60">Ordenar:</span>
            <div className="flex gap-1 flex-wrap">
              {sortOptions.map((opt) => (
                <button key={opt.value} onClick={() => setSortBy(opt.value)}
                  className={`font-montserrat text-[10px] px-3 py-1.5 border transition-all duration-150 ${
                    sortBy === opt.value
                      ? "bg-negro text-crema border-negro"
                      : "border-negro/30 text-negro/60 hover:border-negro/60 hover:text-negro"
                  }`}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((listing) => {
            const precioM2 = Math.round(parsePrice(listing.price) / listing.area).toLocaleString();
            const isFav = favorites.has(listing.id);
            return (
              <Link to={`/propiedad/${listing.slug}`} key={listing.id}
                className="group bg-negro overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 block relative">
                <div className="relative">
                  <CardGallery images={listing.images} title={listing.title} />
                  <span className="absolute top-3 left-3 bg-ambar text-negro font-montserrat font-bold text-[9px] uppercase tracking-wider px-3 py-1 z-10">
                    {listing.badge}
                  </span>
                  <button onClick={(e) => toggleFav(e, listing.id)}
                    className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center z-10 transition-all duration-200 ${isFav ? "bg-ambar" : "bg-negro/60 hover:bg-negro/80"}`}>
                    <Heart size={14} className={isFav ? "text-negro fill-negro" : "text-crema"} />
                  </button>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-negro/65 backdrop-blur-sm px-2 py-1 z-10">
                    <MapPin size={10} className="text-ambar" />
                    <span className="font-montserrat text-[10px] text-crema/90">{listing.location}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-cinzel font-bold text-base text-crema mb-3 leading-snug group-hover:text-ambar transition-colors duration-300">
                    {listing.title}
                  </h3>
                  <div className="flex items-center gap-4 text-crema/55 mb-4">
                    <span className="flex items-center gap-1 font-montserrat text-xs"><BedDouble size={13} className="text-ambar/60" /> {listing.beds} Hab</span>
                    <span className="flex items-center gap-1 font-montserrat text-xs"><Bath size={13} className="text-ambar/60" /> {listing.baths} Baños</span>
                    <span className="flex items-center gap-1 font-montserrat text-xs"><Maximize size={13} className="text-ambar/60" /> {listing.area} m²</span>
                  </div>
                  <div className="h-px bg-ambar/10 mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-montserrat text-[9px] uppercase tracking-wider text-ambar border border-ambar/40 px-2 py-1 block mb-1.5">{listing.tag}</span>
                      <span className="font-montserrat text-[9px] text-crema/35">${precioM2}/m²</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-cinzel font-bold text-lg text-crema">{listing.price}</span>
                      <span className="w-8 h-8 rounded-full bg-ambar flex items-center justify-center group-hover:bg-ambar/80 transition-colors shrink-0">
                        <ArrowRight size={14} className="text-negro" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block font-montserrat font-semibold text-xs uppercase tracking-widest px-10 py-3 border border-negro/30 text-negro hover:bg-negro hover:text-crema transition-all duration-300">
            Ver todas las propiedades
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
