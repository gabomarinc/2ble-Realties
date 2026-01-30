
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { ContentData } from './types';

export const CONTENT: Record<'en' | 'es', ContentData> = {
  en: {
    nav: {
      about: "The Vision",
      properties: "Listings",
      developments: "Zones",
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
      title: "The Boldest Zones",
      subtitle: "Explore transformative zones that elevate the lifestyle in Panama City.",
      items: [
        {
          id: 'd1',
          title: 'Panama Pacifico',
          location: 'Panama West',
          description: 'Combines nature, modern design, security and sustainability.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Combines nature, modern design, security and sustainability, with a sense of open spaces and green areas like no other, ideal for those who value quality of life.',
          gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Master Plan', 'International Airport']
        },
        {
          id: 'd2',
          title: 'Santa Maria',
          location: 'Costa del Este',
          description: 'Luxury and nature in one of the most exclusive sectors.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'One of the most exclusive and sought-after residential sectors in the country where luxury combines with nature, achieving a unique lifestyle.',
          gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Golf Course', 'Private Club']
        },
        {
          id: 'd3',
          title: 'Panama City',
          location: 'Panama City',
          description: 'Vibrant, modern and cultural lifestyle.',
          image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Vibrant lifestyle close to everything, with first-world infrastructure and services, making it a modern city with great cultural wealth.',
          gallery: [
            'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Global connectivity', 'Financial and logistics hub']
        },
        {
          id: 'd4',
          title: 'Investment',
          location: 'Panama',
          description: 'The best country to invest and retire.',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Considered the best country to invest and retire thanks to its stable and dollarized economy, becoming one of the real estate markets with the highest demand.',
          gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['High appreciation', 'Dynamic real estate market', 'High demand']
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
          description: "Swipe to meet the experts redefining the standard of luxury real estate.",
          image: "/logos.png",
          logoOverlay: false,
          stats: [
            { value: "10+", label: "Years Experience" },
            { value: "$75M+", label: "In Sales" },
            { value: "250+", label: "Homes" }
          ]
        },
        {
          title: "Global Reach",
          mainTitle: <>Jonathan<br /><span className="italic font-extralight text-slate-300">Valverde</span></>,
          description: "Accessing an extensive network of international investors and premium properties.",
          image: "/foto-jonathan.jpg",
          stats: [
            {
              value: <div className="flex items-center gap-4 text-3xl lg:text-4xl"><Phone className="w-8 h-8 lg:w-10 lg:h-10 text-champagne" /> <span>+507 6314-5710</span></div>,
            }
          ]
        },
        {
          title: "Elite Advisory",
          mainTitle: <>Yiniva<br /><span className="italic font-extralight text-slate-300">Cedeño</span></>,
          description: "Providing data-driven insights to maximize your investment potential.",
          image: "/foto-yiniva.jpg",
          stats: [
            {
              value: <div className="flex items-center gap-4 text-3xl lg:text-4xl"><Phone className="w-8 h-8 lg:w-10 lg:h-10 text-champagne" /> <span>+507 6763-5522</span></div>,
            }
          ]
        },
        {
          title: "New Section",
          mainTitle: <>Prospero<br /><span className="italic font-extralight text-slate-300">Lasso</span></>,
          description: "Placeholder text for the fourth section. Description goes here.",
          image: "/foto-prospero.jpg",
          stats: [
            {
              value: <div className="flex items-center gap-4 text-3xl lg:text-4xl"><Phone className="w-8 h-8 lg:w-10 lg:h-10 text-champagne" /> <span>+507 6280-1439</span></div>,
            }
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
    },
    ui: {
      premiumAsset: "Premium Asset",
      discoverMore: "Discover More",
      keyFeatures: "Key Features",
      gallery: "Gallery",
      inquireInterest: "Inquire Interest",
      privatePortfolio: "Private Portfolio",
      clickInquiry: "Click for inquiry",
      curated: "100% Curated",
      since2010: "Since 2010"
    }
  },
  es: {
    nav: {
      about: "La Visión",
      properties: "Propiedades",
      developments: "Zonas",
      invest: "Inversiones",
      contact: "Conectar"
    },
    hero: {
      slogan: "Double the Standard",
      title: <><i className="font-serif italic text-white/80 font-light">Invierte</i> en Panamá</>,
      subtitle: "Más allá de metros cuadrados, nuestra visión es encontrar junto a ti esa inversión inteligente con un retorno inmediato.",
      cta: "Viva la Diferencia"
    },
    developments: {
      title: "Las zonas más exclusivas",
      subtitle: "Ya sea en la ciudad o en las afueras, encontramos siempre lo mejor para ti.",
      items: [
        {
          id: 'd1',
          title: 'Panamá Pacífico',
          location: 'Panamá Oeste',
          description: 'Combina naturaleza, diseño moderno, seguridad y sostenibilidad.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Combina naturaleza, diseño moderno, seguridad y sostenibilidad, con una sensación de espacios abiertos y áreas verdes como ninguna otra, ideal para los que valoran calidad de vida.',
          gallery: [
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Master Plan', 'Aeropuerto internacional']
        },
        {
          id: 'd2',
          title: 'Santa María',
          location: 'Costa del Este',
          description: 'Lujo y naturaleza en uno de los sectores más exclusivos.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Uno de los sectores residenciales mas exclusivos y cotizados del país donde se combina el lujo con la naturaleza, logrando un estilo de vida único.',
          gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Cancha de Golf', 'Club Privado']
        },
        {
          id: 'd3',
          title: 'Ciudad de Panamá',
          location: 'Ciudad de Panamá',
          description: 'Estilo de vida vibrante, moderno y cultural.',
          image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Estilo de vida vibrante y cerca de todo, con infraestructura y servicios de primer mundo, convirtiéndola en una ciudad moderna y de gran riqueza cultural.',
          gallery: [
            'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Conectividad global', 'Hub financiero y logistico']
        },
        {
          id: 'd4',
          title: 'Inversión',
          location: 'Panamá',
          description: 'El mejor país para invertir y retirarse.',
          image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
          fullDescription: 'Considerado el mejor país para invertir y retirarse gracias a su economía estable y dolarizada, convirtiéndose en unos de los mercados con mayor demanda en bienes raíces.',
          gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200'
          ],
          highlights: ['Alta valorización', 'Mercado inmobiliario dinámico', 'Alta demanda']
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
          description: "Deslice para conocer a los expertos que redefinen el estándar del lujo inmobiliario.",
          image: "/logos.png",
          logoOverlay: false,
          stats: [
            { value: "10+", label: "Años de Experiencia" },
            { value: "$75M+", label: "En Ventas" },
            { value: "250+", label: "Hogares" }
          ]
        },
        {
          title: "Alcance Global",
          mainTitle: <>Jonathan<br /><span className="italic font-extralight text-slate-300">Valverde</span></>,
          description: "Accediendo a una extensa red de inversores internacionales y propiedades premium.",
          image: "/foto-jonathan.jpg",
          stats: [
            {
              value: <div className="flex items-center gap-4 text-3xl lg:text-4xl"><Phone className="w-8 h-8 lg:w-10 lg:h-10 text-champagne" /> <span>+507 6314-5710</span></div>,
            }
          ]
        },
        {
          title: "Asesoría Élite",
          mainTitle: <>Yiniva<br /><span className="italic font-extralight text-slate-300">Cedeño</span></>,
          description: "Proporcionando información basada en datos para maximizar su potencial de inversión.",
          image: "/foto-yiniva.jpg",
          stats: [
            {
              value: <div className="flex items-center gap-4 text-3xl lg:text-4xl"><Phone className="w-8 h-8 lg:w-10 lg:h-10 text-champagne" /> <span>+507 6763-5522</span></div>,
            }
          ]
        },
        {
          title: "Nueva Sección",
          mainTitle: <>Prospero<br /><span className="italic font-extralight text-slate-300">Lasso</span></>,
          description: "Texto de ejemplo para la cuarta sección. Aquí puedes colocar la descripción que desees.",
          image: "/foto-prospero.jpg",
          stats: [
            {
              value: <div className="flex items-center gap-4 text-3xl lg:text-4xl"><Phone className="w-8 h-8 lg:w-10 lg:h-10 text-champagne" /> <span>+507 6280-1439</span></div>,
            }
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
    },
    ui: {
      premiumAsset: "Activo Premium",
      discoverMore: "Descubrir Más",
      keyFeatures: "Características Clave",
      gallery: "Galería",
      inquireInterest: "Solicitar Información",
      privatePortfolio: "Portafolio Privado",
      clickInquiry: "Clic para consultar",
      curated: "100% Curado",
      since2010: "Desde 2010"
    }
  }
};
