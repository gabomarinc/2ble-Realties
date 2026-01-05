
import { ContentData } from './types';

export const CONTENT: Record<'en' | 'es', ContentData> = {
  en: {
    nav: {
      about: "The Vision",
      properties: "Listings",
      services: "Concierge",
      invest: "Investments",
      contact: "Connect"
    },
    hero: {
      slogan: "Double the Standard",
      title: <>Elevate<br />Your<br /><i className="font-serif italic text-white/90">Investment</i><br />in<br />Panama</>,
      subtitle: "Beyond square footage, we secure your status and freedom. Intelligent assets for the visionary investor.",
      cta: "Experience the Difference"
    },
    developments: {
      title: "The Boldest New Developments",
      subtitle: "Explore transformative new buildings that elevate modern luxury living in Panama City.",
      items: [
        { id: 'd1', title: 'Santa Maria Court', location: 'Costa del Este', description: 'The pinnacle of golf-side residential elegance.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
        { id: 'd2', title: 'Ocean Reef Villas', location: 'Ocean Reef Islands', description: 'Island living within the city limits. Unmatched privacy.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200' },
        { id: 'd3', title: 'Yoo Panama', location: 'Avenida Balboa', description: 'Iconic design meeting the Pacific Ocean horizon.', image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200' },
        { id: 'd4', title: 'The Reserve', location: 'Santa Maria', description: 'Surrounded by nature and the worlds finest greens.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    properties: {
      title: "Featured Estates",
      subtitle: "Hand-picked opportunities for extraordinary living.",
      cta: "View Collection",
      items: [
        { id: '1', title: 'The Sky Villa', location: 'Ocean Reef Islands', price: '$3.2M', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200', tag: 'Limited Edition' },
        { id: '2', title: 'Veranda House', location: 'Costa del Este', price: '$1.8M', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', tag: 'Exclusive' },
        { id: '3', title: 'Azure Penthouse', location: 'Punta Pacifica', price: '$4.5M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', tag: 'New Listing' }
      ]
    },
    reversePurchase: {
      title: "The Relief Engineering",
      subtitle: "You Rest, We Hunt.",
      description: "Searching for luxury shouldn't be a second job. We manage the noise so you only see the extraordinary. Our 'Reverse Purchase' method is designed for those whose time is their most valuable asset.",
      steps: [
        { title: "Strategic Briefing", desc: "We define your legacy goals, mapping out every emotional and financial requirement." },
        { title: "The Market Hunt", desc: "Access to off-market inventory and exclusive pre-sales before the general public." },
        { title: "Flawless Execution", desc: "White-glove negotiation and complete legal peace of mind. We handle the friction; you enjoy the result." }
      ]
    },
    authority: {
      title: "Architects of Capital",
      subtitle: "Experts in International Real Estate Investment",
      team: [
        { name: "Adrian Varela", role: "Chief Investment Strategist", desc: "Bridging the gap between global capital and Panama's most exclusive opportunities." }
      ]
    },
    missionVision: {
      subTitle: "Legacy & Vision",
      title: <>Our Soul<br /><i className="font-serif italic text-white/50">Defines</i> the<br />Standard</>,
      mission: {
        title: "Our Manifest",
        desc: "We don't close deals; we secure legacies. Our mission is to dismantle the ordinary, providing a sanctuary of intelligence and status for those who demand Panama's absolute best."
      },
      vision: {
        title: "The North Star",
        desc: "To orchestrate the future of luxury living in the tropics, where every property we touch becomes a benchmark of global excellence and a fortress for your wealth."
      }
    },
    benefits: {
      title: "The Inner Circle",
      items: [
        { title: "Asset Protection", desc: "Navigate the Panama legal landscape with absolute certainty and elite advisors." },
        { title: "High Yield Portfolios", desc: "Data-driven selections in Costa del Este and Ocean Reef with proven ROI." },
        { title: "Lifestyle Concierge", desc: "VIP relocation services that make moving feel like a five-star vacation." }
      ]
    },
    referral: {
      title: "Shared Success Community",
      desc: "Success is better when shared. Refer a peer and expand the circle of elite investment in Panama. This is not just a network; it's a community of high-impact visionaries.",
      cta: "Join the Elite Circle"
    },
    contact: {
      title: "Define Your Vision",
      subtitle: "Let's discuss your next move in absolute confidence.",
      name: "Your Name",
      email: "Email Address",
      message: "How can we elevate your portfolio?",
      submit: "Send Inquiry"
    }
  },
  es: {
    nav: {
      about: "La Visión",
      properties: "Propiedades",
      services: "Conserjería",
      invest: "Inversiones",
      contact: "Conectar"
    },
    hero: {
      slogan: "Double the Standard",
      title: <>Eleve<br />su<br /><i className="font-serif italic text-white/80 font-light">Inversión</i><br />en<br />Panamá</>,
      subtitle: "Más allá de metros cuadrados, aseguramos su estatus y libertad. Activos inteligentes para el inversor visionario.",
      cta: "Viva la Diferencia"
    },
    developments: {
      title: "Los Desarrollos Más Audaces",
      subtitle: "Explore edificios transformadores que elevan el estilo de vida de lujo moderno en la Ciudad de Panamá.",
      items: [
        { id: 'd1', title: 'Santa Maria Court', location: 'Costa del Este', description: 'El pináculo de la elegancia residencial frente al golf.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
        { id: 'd2', title: 'Ocean Reef Villas', location: 'Ocean Reef Islands', description: 'Vida isleña dentro de los límites de la ciudad. Privacidad inigualable.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200' },
        { id: 'd3', title: 'Yoo Panama', location: 'Avenida Balboa', description: 'Diseño icónico encontrándose con el horizonte del Pacífico.', image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200' },
        { id: 'd4', title: 'The Reserve', location: 'Santa Maria', description: 'Rodeado de naturaleza y los mejores greens del mundo.', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200' }
      ]
    },
    properties: {
      title: "Propiedades Destacadas",
      subtitle: "Oportunidades seleccionadas para una vida extraordinaria.",
      cta: "Ver Colección",
      items: [
        { id: '1', title: 'The Sky Villa', location: 'Ocean Reef Islands', price: '$3.2M', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200', tag: 'Edición Limitada' },
        { id: '2', title: 'Veranda House', location: 'Costa del Este', price: '$1.8M', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', tag: 'Exclusiva' },
        { id: '3', title: 'Azure Penthouse', location: 'Punta Pacifica', price: '$4.5M', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', tag: 'Nuevo Listado' }
      ]
    },
    reversePurchase: {
      title: "La Ingeniería del Alivio",
      subtitle: "Tú Descansa, Nosotros Cazamos.",
      description: "Buscar lujo no debe ser un segundo trabajo. Filtramos el ruido para que solo vea lo extraordinario. Nuestro método de 'Compra Inversa' está diseñado para quienes valoran su tiempo por encima de todo.",
      steps: [
        { title: "Briefing Estratégico", desc: "Definimos sus metas de legado, mapeando cada requerimiento emocional y financiero." },
        { title: "La Cacería de Mercado", desc: "Acceso a inventario fuera de mercado y preventas exclusivas antes que el público general." },
        { title: "Ejecución Impecable", desc: "Negociación de guante blanco y paz mental legal total. Nosotros gestionamos la fricción; usted disfruta el resultado." }
      ]
    },
    authority: {
      title: "Arquitectos de Capital",
      subtitle: "Expertos en Inversión Inmobiliaria Internacional",
      team: [
        { name: "Adrian Varela", role: "Estratega Jefe de Inversión", desc: "Cerrando la brecha entre el capital global y las oportunidades más exclusivas de Panamá." }
      ]
    },
    missionVision: {
      subTitle: "Legado y Visión",
      title: <>Nuestra Alma<br /><i className="font-serif italic text-white/50">Define</i> el<br />Estándar</>,
      mission: {
        title: "Nuestro Manifiesto",
        desc: "No cerramos tratos; aseguramos legados. Nuestra misión es desmantelar lo ordinario, brindando un santuario de inteligencia y estatus para quienes exigen lo mejor de Panamá."
      },
      vision: {
        title: "La Estrella Polar",
        desc: "Orquestar el futuro del lujo en el trópico, donde cada propiedad que tocamos se convierta en un referente de excelencia global y una fortaleza para su patrimonio."
      }
    },
    benefits: {
      title: "El Círculo Interno",
      items: [
        { title: "Protección de Activos", desc: "Navegue el panorama legal panameño con absoluta certeza y asesores de élite." },
        { title: "Portafolios de Alto Rendimiento", desc: "Selecciones basadas en datos en Costa del Este y Ocean Reef con retorno probado." },
        { title: "Concierge de Estilo de Vida", desc: "Servicios VIP de reubicación que hacen que mudarse parezca unas vacaciones de cinco estrellas." }
      ]
    },
    referral: {
      title: "Comunidad de Éxito Compartido",
      desc: "El éxito es mejor cuando se comparte. Refiera a un colega y expanda el círculo de inversión de élite en Panamá. No es solo una red; es una comunidad de visionarios de alto impacto.",
      cta: "Únase al Círculo de Élite"
    },
    contact: {
      title: "Defina Su Visión",
      subtitle: "Hablemos de su próximo paso en absoluta confidencialidad.",
      name: "Su Nombre",
      email: "Correo Electrónico",
      message: "¿Cómo podemos elevar su portafolio?",
      submit: "Enviar Consulta"
    }
  }
};
