
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
        {
          id: 'd1',
          title: 'Santa Maria Court',
          location: 'Costa del Este',
          description: 'The pinnacle of golf-side residential elegance.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Santa Maria Court sets a new benchmark for luxury living in Panama. Nestled within the prestigious Santa Maria Golf & Country Club, these residences offer an unparalleled blend of modern sophistication and serene natural beauty. Residents enjoy exclusive access to world-class amenities, including a Jack Nicklaus-designed golf course, making it the ultimate sanctuary for those seeking privacy and prestige.',
          gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Direct Golf Course Access', 'Private Concierge Service', 'Olympic-sized Pool', 'State-of-the-Art Gym']
        },
        {
          id: 'd2',
          title: 'Ocean Reef Villas',
          location: 'Ocean Reef Islands',
          description: 'Island living within the city limits. Unmatched privacy.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Experience the unique privilege of island living moments from the heart of the city. Ocean Reef Villas offer a private marina lifestyle with spectacular ocean views. This is more than a home; it is a retreat designed for the elite, featuring private yacht slips and an exclusive club dedicated to the finest things in life.',
          gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Private Marina', 'Helipad Access', 'Yacht Club Membership', 'Oceanfront Terraces']
        },
        {
          id: 'd3',
          title: 'Yoo Panama',
          location: 'Avenida Balboa',
          description: 'Iconic design meeting the Pacific Ocean horizon.',
          image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Inspired by Starck, Yoo Panama stands as a beacon of design and luxury on Avenida Balboa. With breathtaking views of the Pacific Ocean and the Panama Canal, these residences are a masterpiece of whimsical interior design and modern architecture, providing a vibrant and sophisticated lifestyle.',
          gallery: [
            'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Interiors by Phillippe Starck', 'Full-Service Spa', 'Valet Parking', 'Award-Winning Restaurants']
        },
        {
          id: 'd4',
          title: 'The Reserve',
          location: 'Santa Maria',
          description: 'Surrounded by nature and the worlds finest greens.',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'The Reserve is a tranquil oasis located within Santa Maria, designed for families who value nature and space. Surrounded by lush greenery and the perfectly manicured fairways of the golf course, it offers a peaceful respite from the city with lagoon-style pools and walking trails.',
          gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Lagoon Pools', 'Walking Trails', 'Playgrounds', '24/7 Security']
        }
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
      slides: [
        {
          title: "Architects of Capital",
          mainTitle: <>Double <span className="italic font-extralight text-slate-300">the Standard</span></>,
          description: "Bridging the gap between global capital and Panama's most exclusive opportunities.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
          stats: [
            { value: "$450M+", label: "Advisory" },
            { value: "15+", label: "Market Cycles" }
          ]
        },
        {
          title: "Global Reach",
          mainTitle: <>Worldwide <span className="italic font-extralight text-slate-300">Connections</span></>,
          description: "Accessing an extensive network of international investors and premium properties.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
          stats: [
            { value: "30+", label: "Countries" },
            { value: "24/7", label: "Availability" }
          ]
        },
        {
          title: "Elite Advisory",
          mainTitle: <>Strategic <span className="italic font-extralight text-slate-300">Insight</span></>,
          description: "Providing data-driven insights to maximize your investment potential.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
          stats: [
            { value: "12%", label: "Avg. Yield" },
            { value: "100%", label: "Satisfaction" }
          ]
        }
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
        {
          id: 'd1',
          title: 'Santa Maria Court',
          location: 'Costa del Este',
          description: 'El pináculo de la elegancia residencial frente al golf.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Santa Maria Court establece un nuevo estándar para la vida de lujo en Panamá. Ubicado dentro del prestigioso Santa Maria Golf & Country Club, estas residencias ofrecen una mezcla inigualable de sofisticación moderna y belleza natural. Los residentes disfrutan de acceso exclusivo a amenidades de clase mundial, incluyendo un campo de golf diseñado por Jack Nicklaus.',
          gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Acceso Directo al Golf', 'Servicio de Conserjería', 'Piscina Olímpica', 'Gimnasio de Alta Gama']
        },
        {
          id: 'd2',
          title: 'Ocean Reef Villas',
          location: 'Ocean Reef Islands',
          description: 'Vida isleña dentro de los límites de la ciudad. Privacidad inigualable.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Experimente el privilegio único de la vida en una isla a minutos del corazón de la ciudad. Ocean Reef Villas ofrece un estilo de vida de marina privada con vistas espectaculares al océano. Esto es más que un hogar; es un refugio diseñado para la élite, con muelles privados y un club exclusivo.',
          gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Marina Privada', 'Acceso a Helipuerto', 'Membresía Yacht Club', 'Terrazas Frente al Mar']
        },
        {
          id: 'd3',
          title: 'Yoo Panama',
          location: 'Avenida Balboa',
          description: 'Diseño icónico encontrándose con el horizonte del Pacífico.',
          image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Inspirado por Starck, Yoo Panama se erige como un faro de diseño y lujo en la Avenida Balboa. Con impresionantes vistas del Océano Pacífico y el Canal de Panamá, estas residencias son una obra maestra de diseño interior caprichoso y arquitectura moderna.',
          gallery: [
            'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Interiores por Phillippe Starck', 'Spa Completo', 'Valet Parking', 'Restaurantes Premiados']
        },
        {
          id: 'd4',
          title: 'The Reserve',
          location: 'Santa Maria',
          description: 'Rodeado de naturaleza y los mejores greens del mundo.',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'The Reserve es un oasis tranquilo ubicado dentro de Santa Maria, diseñado para familias que valoran la naturaleza y el espacio. Rodeado de exuberante vegetación y los fairways perfectamente cuidados del campo de golf.',
          gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Piscinas Tipo Laguna', 'Senderos para Caminar', 'Parques Infantiles', 'Seguridad 24/7']
        }
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
      slides: [
        {
          title: "Arquitectos de Capital",
          mainTitle: <>Double <span className="italic font-extralight text-slate-300">the Standard</span></>,
          description: "Cerrando la brecha entre el capital global y las oportunidades más exclusivas de Panamá.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
          stats: [
            { value: "$450M+", label: "Advisory" },
            { value: "15+", label: "Ciclos de Mercado" }
          ]
        },
        {
          title: "Alcance Global",
          mainTitle: <>Conexiones <span className="italic font-extralight text-slate-300">Mundiales</span></>,
          description: "Accediendo a una extensa red de inversores internacionales y propiedades premium.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
          stats: [
            { value: "30+", label: "Países" },
            { value: "24/7", label: "Disponibilidad" }
          ]
        },
        {
          title: "Asesoría Élite",
          mainTitle: <>Perspectiva <span className="italic font-extralight text-slate-300">Estratégica</span></>,
          description: "Proporcionando información basada en datos para maximizar su potencial de inversión.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
          stats: [
            { value: "12%", label: "Rentabilidad Prom." },
            { value: "100%", label: "Satisfacción" }
          ]
        }
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
