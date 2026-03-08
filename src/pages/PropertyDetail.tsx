import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, BedDouble, Bath, Maximize, Calendar, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPropertyBySlug } from "@/data/properties";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  phone: z.string().trim().min(1, "El teléfono es obligatorio").max(20, "Máximo 20 caracteres"),
  message: z.string().trim().min(1, "El mensaje es obligatorio").max(1000, "Máximo 1000 caracteres"),
});

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const property = getPropertyBySlug(slug || "");
  const { toast } = useToast();

  const [currentImage, setCurrentImage] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-cinzel text-3xl text-foreground mb-4">Propiedad no encontrada</h1>
          <Link to="/" className="font-montserrat text-primary hover:underline">
            ← Volver al inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({
      title: "Mensaje enviado",
      description: `Gracias ${result.data.name}, el agente ${property.agent.name} se pondrá en contacto contigo pronto.`,
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Back link */}
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-montserrat text-sm font-light text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Volver a propiedades
          </Link>
        </div>

        {/* Gallery */}
        <section className="container mx-auto px-4 mb-12">
          <div className="relative aspect-[16/9] max-h-[560px] overflow-hidden bg-negro">
            <img
              src={property.images[currentImage]}
              alt={`${property.title} — foto ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-primary text-primary-foreground font-montserrat font-semibold text-xs uppercase tracking-wider px-4 py-1.5">
              {property.badge}
            </span>
            {/* Nav arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-negro/60 border border-primary/30 flex items-center justify-center text-crema hover:bg-negro/80 transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-negro/60 border border-primary/30 flex items-center justify-center text-crema hover:bg-negro/80 transition-colors"
              aria-label="Siguiente foto"
            >
              <ChevronRight size={20} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentImage ? "bg-primary" : "bg-crema/40"
                  }`}
                  aria-label={`Ver foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 mt-3">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`flex-1 aspect-[16/9] max-h-20 overflow-hidden border-2 transition-colors ${
                  i === currentImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>

        {/* Content grid */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Title & Price */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-montserrat text-[10px] uppercase tracking-wider text-primary border border-primary/30 px-2 py-1">
                    {property.tag}
                  </span>
                  <span className="font-montserrat text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin size={12} /> {property.location}
                  </span>
                </div>
                <h1 className="font-cinzel font-bold text-3xl md:text-4xl text-foreground mb-3">
                  {property.title}
                </h1>
                <p className="font-cinzel font-bold text-3xl text-primary">{property.price}</p>
              </div>

              {/* Specs */}
              <div className="flex flex-wrap gap-6 py-6 border-y border-border">
                <div className="flex items-center gap-2 text-foreground">
                  <BedDouble size={20} className="text-primary" />
                  <div>
                    <span className="font-cinzel font-bold text-lg">{property.beds}</span>
                    <span className="font-montserrat text-xs text-muted-foreground ml-1">Habitaciones</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Bath size={20} className="text-primary" />
                  <div>
                    <span className="font-cinzel font-bold text-lg">{property.baths}</span>
                    <span className="font-montserrat text-xs text-muted-foreground ml-1">Baños</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Maximize size={20} className="text-primary" />
                  <div>
                    <span className="font-cinzel font-bold text-lg">{property.area}</span>
                    <span className="font-montserrat text-xs text-muted-foreground ml-1">m²</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <span className="font-cinzel font-bold text-lg">{property.year}</span>
                    <span className="font-montserrat text-xs text-muted-foreground ml-1">Año</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-cinzel font-bold text-xl text-foreground mb-4">Descripción</h2>
                {property.description.split("\n\n").map((p, i) => (
                  <p key={i} className="font-montserrat text-sm font-light text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div>
                <h2 className="font-cinzel font-bold text-xl text-foreground mb-4">Características</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      <span className="font-montserrat text-sm font-light text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="font-cinzel font-bold text-xl text-foreground mb-4">Ubicación</h2>
                <div className="aspect-[16/9] bg-negro/10 border border-border overflow-hidden">
                  <iframe
                    src={property.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${property.title}`}
                  />
                </div>
              </div>
            </div>

            {/* Right: Contact sidebar */}
            <aside className="space-y-6">
              {/* Agent card */}
              <div className="bg-secondary p-6">
                <h3 className="font-cinzel font-bold text-lg text-secondary-foreground mb-4">Agente</h3>
                <div className="space-y-3">
                  <p className="font-montserrat font-medium text-secondary-foreground">{property.agent.name}</p>
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-2 font-montserrat text-sm font-light text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    <Phone size={14} /> {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${encodeURIComponent(property.agent.email)}`}
                    className="flex items-center gap-2 font-montserrat text-sm font-light text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    <Mail size={14} /> {property.agent.email}
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-secondary p-6">
                <h3 className="font-cinzel font-bold text-lg text-secondary-foreground mb-4">Contactar</h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre completo"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-input border border-ring/40 text-secondary-foreground px-4 py-3 font-montserrat text-sm font-light placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ring transition-colors"
                      maxLength={100}
                    />
                    {errors.name && <p className="font-montserrat text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-input border border-ring/40 text-secondary-foreground px-4 py-3 font-montserrat text-sm font-light placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ring transition-colors"
                      maxLength={255}
                    />
                    {errors.email && <p className="font-montserrat text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-input border border-ring/40 text-secondary-foreground px-4 py-3 font-montserrat text-sm font-light placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ring transition-colors"
                      maxLength={20}
                    />
                    {errors.phone && <p className="font-montserrat text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <textarea
                      placeholder="Mensaje"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-input border border-ring/40 text-secondary-foreground px-4 py-3 font-montserrat text-sm font-light placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ring transition-colors resize-none"
                      maxLength={1000}
                    />
                    {errors.message && <p className="font-montserrat text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-montserrat font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:bg-primary/90 transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>

              {/* CTA buttons */}
              <button className="w-full bg-secondary text-secondary-foreground border border-ring/30 font-montserrat font-semibold text-sm uppercase tracking-wider px-6 py-3 hover:border-ring transition-colors">
                Más Información
              </button>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
