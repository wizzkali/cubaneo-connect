import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Property {
  id: string;
  slug: string;
  title: string;
  badge: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  tag: string;
  location: string;
  year: string;
  description: string;
  features: string[];
  images: string[];
  mapEmbed: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "mansion-colonial-vedado",
    title: "Mansión Colonial en Vedado",
    badge: "Premium",
    price: "$1,200,000",
    beds: 5,
    baths: 3,
    area: 420,
    tag: "Época Colonial",
    location: "Vedado, La Habana",
    year: "1928",
    description:
      "Espectacular mansión colonial de 1928 ubicada en el corazón del Vedado, una de las zonas más emblemáticas de La Habana. Esta propiedad histórica ha sido cuidadosamente preservada, manteniendo sus elementos arquitectónicos originales: techos de puntal alto con molduras de yeso, pisos de mosaico hidráulico importados de Barcelona, vitrales emplomados y una majestuosa escalera de mármol italiano.\n\nLa residencia cuenta con amplios salones de recepción bañados en luz natural, un comedor formal con capacidad para 12 personas, y una biblioteca con estanterías de caoba empotradas. El patio interior, típico de la arquitectura colonial cubana, presenta una fuente central rodeada de plantas tropicales y arcos de medio punto.\n\nLa cocina ha sido modernizada con electrodomésticos de última generación sin perder el encanto original. Las cinco habitaciones se distribuyen en dos niveles, cada una con baño privado y vistas al jardín tropical o a la calle arbolada del Vedado.",
    features: [
      "Techos de puntal alto (4.5m)",
      "Pisos de mosaico hidráulico original",
      "Vitrales emplomados",
      "Patio interior con fuente",
      "Escalera de mármol italiano",
      "Cocina modernizada",
      "Jardín tropical de 200m²",
      "Garage para 2 vehículos",
      "Terraza panorámica en azotea",
      "Sistema de seguridad moderno",
    ],
    images: [property1, property1, property1, property1],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5!2d-82.4!3d23.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzQ4LjAiTiA4MsKwMjQnMDAuMCJX!5e0!3m2!1ses!2s!4v1",
    agent: {
      name: "Carlos Menéndez",
      phone: "+53 5 234 5678",
      email: "carlos@cubaneo.org",
    },
  },
  {
    id: "2",
    slug: "penthouse-art-deco-miramar",
    title: "Penthouse Art Déco en Miramar",
    badge: "Premium",
    price: "$890,000",
    beds: 3,
    baths: 2,
    area: 280,
    tag: "Art Déco",
    location: "Miramar, La Habana",
    year: "1935",
    description:
      "Impresionante penthouse Art Déco en la exclusiva zona de Miramar, con vistas panorámicas al Malecón y al mar Caribe. Este apartamento ocupa la totalidad de la última planta de un edificio emblemático de los años 30, con líneas geométricas puras y detalles decorativos en bronce y cristal.\n\nLos espacios interiores combinan la elegancia del Art Déco original con comodidades contemporáneas. Amplios ventanales de piso a techo inundan cada estancia de luz tropical. La terraza envolvente de 80m² ofrece vistas inigualables del litoral habanero.\n\nCada detalle ha sido restaurado con maestría: las lámparas originales de cristal tallado, los tiradores de bronce geométrico, y los pisos de terrazzo con incrustaciones de mármol. Una joya arquitectónica para el conocedor más exigente.",
    features: [
      "Terraza panorámica de 80m²",
      "Vistas al mar Caribe",
      "Detalles Art Déco originales",
      "Ventanales de piso a techo",
      "Pisos de terrazzo con mármol",
      "Lámparas de cristal tallado",
      "Cocina de diseñador",
      "Ascensor privado",
    ],
    images: [property2, property2, property2, property2],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5!2d-82.42!3d23.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA4JzI0LjAiTiA4MsKwMjUnMTIuMCJX!5e0!3m2!1ses!2s!4v1",
    agent: {
      name: "María del Carmen Ruiz",
      phone: "+53 5 345 6789",
      email: "maria@cubaneo.org",
    },
  },
  {
    id: "3",
    slug: "villa-frente-mar-varadero",
    title: "Villa Frente al Mar en Varadero",
    badge: "Destacada",
    price: "$750,000",
    beds: 4,
    baths: 3,
    area: 350,
    tag: "Contemporánea",
    location: "Varadero, Matanzas",
    year: "2018",
    description:
      "Lujosa villa contemporánea con acceso directo a la playa de arena blanca de Varadero, considerada una de las mejores playas del Caribe. Esta propiedad combina diseño moderno con materiales naturales locales, creando espacios que fluyen sin esfuerzo entre interior y exterior.\n\nLa sala principal de doble altura se abre completamente hacia la piscina infinity y el mar turquesa. Cuatro habitaciones en suite ofrecen máxima privacidad, con la habitación principal ocupando toda un ala con vestidor, baño spa y terraza privada frente al mar.\n\nEl jardín tropical incluye piscina infinity con borde de piedra coralina, zona de barbacoa cubierta, y un camino privado que desciende directamente a la playa. Sistema domótico completo, paneles solares y cisterna propia garantizan autosuficiencia total.",
    features: [
      "Acceso directo a la playa",
      "Piscina infinity",
      "Sala de doble altura",
      "4 habitaciones en suite",
      "Sistema domótico completo",
      "Paneles solares",
      "Zona de barbacoa cubierta",
      "Jardín tropical privado",
      "Cisterna propia",
      "Estacionamiento para 3 vehículos",
    ],
    images: [property3, property3, property3, property3],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5!2d-81.25!3d23.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA5JzAwLjAiTiA4McKwMTUnMDAuMCJX!5e0!3m2!1ses!2s!4v1",
    agent: {
      name: "Roberto Fernández",
      phone: "+53 5 456 7890",
      email: "roberto@cubaneo.org",
    },
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined =>
  properties.find((p) => p.slug === slug);
