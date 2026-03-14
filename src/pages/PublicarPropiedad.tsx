import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, X, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pdmfccjatjbssbxjneic.supabase.co",
  "sb_publishable_iVb3RnrT3hIIYchzfh5uiQ_SFMMeLWS"
);

const tipos = ["Mansión Colonial", "Apartamento", "Villa", "Penthouse", "Casa", "Local comercial"];
const provincias = ["La Habana", "Santiago de Cuba", "Holguín", "Camagüey", "Villa Clara", "Matanzas", "Cienfuegos", "Granma", "Las Tunas", "Guantánamo", "Pinar del Río", "Artemisa", "Mayabeque", "Sancti Spíritus", "Ciego de Ávila", "Isla de la Juventud"];
const estados = ["Listo para entrar", "Para reformar", "En proyecto"];
const epocas = ["1850–1900", "1900–1930", "1930–1959", "1960–1990", "Post-1990"];

const steps = ["Propiedad", "Características", "Fotos", "Contacto"];

const gradient = { background: "linear-gradient(180deg, #F5D878 0%, #C8922A 35%, #A06818 70%, #6A3E08 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" };

export default function PublicarPropiedad() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const [form, setForm] = useState({
    tipo: "", provincia: "", municipio: "", direccion: "",
    precio_usd: "", superficie: "", habitaciones: "", banos: "",
    ano_construccion: "", estado: "", descripcion: "",
    nombre_contacto: "", whatsapp: "", email: "", es_propietario: true,
  });

  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).slice(0, 10);
    setFiles(selected);
    setPreviews(selected.map(f => URL.createObjectURL(f)));
  };

  const removePhoto = (i: number) => {
    setFiles(f => f.filter((_, idx) => idx !== i));
    setPreviews(p => p.filter((_, idx) => idx !== i));
  };

  const uploadFotos = async (): Promise<string[]> => {
    const urls: string[] = [];
    for (const file of files) {
      const ext = file.name.split(".").pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error } = await supabase.storage.from("property-photos").upload(path, file);
      if (!error) {
        const { data } = supabase.storage.from("property-photos").getPublicUrl(path);
        urls.push(data.publicUrl);
      }
    }
    return urls;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const fotos = files.length > 0 ? await uploadFotos() : [];
      const { error: dbError } = await supabase.from("properties").insert([{
        tipo: form.tipo, provincia: form.provincia, municipio: form.municipio,
        direccion: form.direccion, precio_usd: Number(form.precio_usd),
        superficie: Number(form.superficie), habitaciones: Number(form.habitaciones),
        banos: Number(form.banos), ano_construccion: Number(form.ano_construccion),
        estado: form.estado, descripcion: form.descripcion,
        nombre_contacto: form.nombre_contacto, whatsapp: form.whatsapp,
        email: form.email, es_propietario: form.es_propietario,
        fotos, status: "pendiente",
      }]);
      if (dbError) throw dbError;
      setSuccess(true);
    } catch (e: any) {
      setError("Error al enviar. Por favor intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-negro/70 border border-ambar/25 text-ambar/85 placeholder:text-ambar/30 px-4 py-3 font-montserrat text-sm font-light focus:outline-none focus:border-ambar transition-colors";
  const labelClass = "font-montserrat text-[9px] uppercase tracking-widest text-ambar/60 mb-1.5 block";

  if (success) return (
    <div className="min-h-screen bg-negro flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-ambar/10 border border-ambar/30 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-ambar" />
        </div>
        <h2 className="font-cinzel font-bold text-2xl mb-3" style={gradient}>Propiedad Enviada</h2>
        <p className="font-montserrat text-sm font-light text-crema/60 mb-8">
          Tu propiedad está en revisión. La publicaremos en un plazo de 24–48 horas tras verificar la información.
        </p>
        <button onClick={() => navigate("/")}
          className="font-montserrat font-semibold text-xs uppercase tracking-widest px-10 py-3 bg-ambar text-negro hover:bg-ambar/90 transition-colors">
          Volver al portal
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-negro pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-montserrat text-[10px] tracking-[0.4em] text-ambar/50 uppercase mb-3">✦ Cubaneo ✦</p>
          <h1 className="font-cinzel font-black text-3xl md:text-4xl tracking-wide mb-2" style={gradient}>
            Publicar Propiedad
          </h1>
          <p className="font-montserrat text-xs text-ambar/45 tracking-wider">Publicación gratuita · Revisión en 24–48h</p>
        </div>

        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-0 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex flex-col items-center`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-montserrat font-semibold transition-all ${
                  i < step ? "bg-ambar text-negro" : i === step ? "border-2 border-ambar text-ambar" : "border border-ambar/20 text-ambar/30"
                }`}>
                  {i < step ? <Check size={12} /> : i + 1}
                </div>
                <span className={`font-montserrat text-[9px] tracking-wider mt-1 ${i === step ? "text-ambar" : "text-ambar/30"}`}>{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`w-12 h-px mx-1 mb-4 ${i < step ? "bg-ambar/60" : "bg-ambar/15"}`} />}
            </div>
          ))}
        </div>

        {/* STEP 0 — Propiedad */}
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Tipo de propiedad</label>
              <select value={form.tipo} onChange={e => set("tipo", e.target.value)} className={inputClass}>
                <option value="" className="bg-negro">Seleccionar...</option>
                {tipos.map(t => <option key={t} value={t} className="bg-negro">{t}</option>)}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Provincia</label>
                <select value={form.provincia} onChange={e => set("provincia", e.target.value)} className={inputClass}>
                  <option value="" className="bg-negro">Seleccionar...</option>
                  {provincias.map(p => <option key={p} value={p} className="bg-negro">{p}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Municipio</label>
                <input type="text" placeholder="Vedado, Miramar..." value={form.municipio} onChange={e => set("municipio", e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Dirección</label>
              <input type="text" placeholder="Calle, número, referencias..." value={form.direccion} onChange={e => set("direccion", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Precio de venta (USD)</label>
              <input type="number" placeholder="0" value={form.precio_usd} onChange={e => set("precio_usd", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Descripción (opcional)</label>
              <textarea rows={4} placeholder="Describe tu propiedad..." value={form.descripcion} onChange={e => set("descripcion", e.target.value)} className={inputClass + " resize-none"} />
            </div>
          </div>
        )}

        {/* STEP 1 — Características */}
        {step === 1 && (
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className={labelClass}>Superficie (m²)</label>
                <input type="number" placeholder="0" value={form.superficie} onChange={e => set("superficie", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Habitaciones</label>
                <input type="number" placeholder="0" value={form.habitaciones} onChange={e => set("habitaciones", e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Baños</label>
                <input type="number" placeholder="0" value={form.banos} onChange={e => set("banos", e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label className={labelClass}>Época de construcción</label>
              <div className="flex gap-2 flex-wrap">
                {epocas.map(e => (
                  <button key={e} onClick={() => set("ano_construccion", e)}
                    className={`font-montserrat text-xs px-3 py-2 border transition-all ${form.ano_construccion === e ? "bg-ambar text-negro border-ambar" : "border-ambar/25 text-ambar/60 hover:border-ambar/50"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Estado</label>
              <div className="flex gap-2 flex-wrap">
                {estados.map(e => (
                  <button key={e} onClick={() => set("estado", e)}
                    className={`font-montserrat text-xs px-4 py-2 border transition-all ${form.estado === e ? "bg-ambar text-negro border-ambar" : "border-ambar/25 text-ambar/60 hover:border-ambar/50"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 — Fotos */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Fotos de la propiedad (máx. 10)</label>
              <label className="flex flex-col items-center justify-center border border-dashed border-ambar/30 py-10 cursor-pointer hover:border-ambar/60 transition-colors">
                <Upload size={24} className="text-ambar/40 mb-2" />
                <span className="font-montserrat text-xs text-ambar/40">Haz clic para subir fotos</span>
                <span className="font-montserrat text-[10px] text-ambar/25 mt-1">JPG, PNG — máx. 10 imágenes</span>
                <input type="file" multiple accept="image/*" className="hidden" onChange={handleFiles} />
              </label>
            </div>
            {previews.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {previews.map((src, i) => (
                  <div key={i} className="relative group">
                    <img src={src} alt="" className="w-full h-24 object-cover" />
                    <button onClick={() => removePhoto(i)}
                      className="absolute top-1 right-1 w-5 h-5 bg-negro/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <X size={10} className="text-crema" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="font-montserrat text-[10px] text-ambar/30">Las fotos pueden subirse después — no son obligatorias para publicar.</p>
          </div>
        )}

        {/* STEP 3 — Contacto */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Nombre completo</label>
              <input type="text" placeholder="Tu nombre" value={form.nombre_contacto} onChange={e => set("nombre_contacto", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>WhatsApp</label>
              <input type="text" placeholder="+53 5 XXX XXXX" value={form.whatsapp} onChange={e => set("whatsapp", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" placeholder="correo@ejemplo.com" value={form.email} onChange={e => set("email", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>¿Eres el propietario?</label>
              <div className="flex gap-3">
                {[true, false].map(v => (
                  <button key={String(v)} onClick={() => set("es_propietario", v)}
                    className={`font-montserrat text-xs px-5 py-2 border transition-all ${form.es_propietario === v ? "bg-ambar text-negro border-ambar" : "border-ambar/25 text-ambar/60 hover:border-ambar/50"}`}>
                    {v ? "Soy propietario" : "Soy representante"}
                  </button>
                ))}
              </div>
            </div>
            {error && <p className="font-montserrat text-xs text-red-400">{error}</p>}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          <button onClick={() => step === 0 ? navigate("/") : setStep(s => s - 1)}
            className="flex items-center gap-2 font-montserrat text-xs text-ambar/50 hover:text-ambar transition-colors">
            <ChevronLeft size={14} /> {step === 0 ? "Cancelar" : "Anterior"}
          </button>

          {step < 3 ? (
            <button onClick={() => setStep(s => s + 1)}
              className="flex items-center gap-2 bg-ambar text-negro font-montserrat font-bold text-xs uppercase tracking-widest px-8 py-3 hover:bg-ambar/90 transition-colors">
              Siguiente <ChevronRight size={14} />
            </button>
          ) : (
            <button onClick={handleSubmit} disabled={submitting}
              className="flex items-center gap-2 bg-ambar text-negro font-montserrat font-bold text-xs uppercase tracking-widest px-8 py-3 hover:bg-ambar/90 transition-colors disabled:opacity-50">
              {submitting ? "Enviando..." : "Publicar propiedad"} <Check size={14} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
