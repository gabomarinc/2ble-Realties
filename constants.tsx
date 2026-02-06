
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
      title: <><i className="font-serif italic text-white/80 font-light">Invest</i> in Panama</>,
      subtitle: "Beyond square meters, our vision is to find together with you that smart investment with an immediate return.",
      cta: "Live the Difference"
    },
    developments: {
      title: "The most exclusive zones",
      subtitle: "Whether in the city or the outskirts, we always find the best for you.",
      items: [
        {
          id: 'd1',
          title: 'Panama Pacifico',
          location: 'Panama West',
          description: 'Combines nature, modern design, security and sustainability.',
          image: '/fotos-2bleweb/Panama Pacifico/portada.jpeg',
          fullDescription: 'Combines nature, modern design, security and sustainability, with a sense of open spaces and green areas like no other, ideal for those who value quality of life.',
          gallery: [
            { image: '/fotos-2bleweb/Panama Pacifico/centriqo-188.jpg', title: 'Centriquo', price: 'From $188.000' },
            { image: '/fotos-2bleweb/Panama Pacifico/explora-603.jpg', title: 'Explora', price: 'From $603.000' },
            { image: '/fotos-2bleweb/Panama Pacifico/lotes-sanctuary-880.jpeg', title: 'Sanctuary Lots', price: 'From $880.000' }
          ],
          highlights: ['Master Plan', 'International Airport']
        },
        {
          id: 'd2',
          title: 'Santa Maria',
          location: 'Costa del Este',
          description: 'Luxury and nature in one of the most exclusive sectors.',
          image: '/fotos-2bleweb/Santa Maria/portada.jpg',
          fullDescription: 'One of the most exclusive and sought-after residential sectors in the country where luxury combines with nature, achieving a unique lifestyle.',
          gallery: [
            { image: '/fotos-2bleweb/Santa Maria/bosco-475.jpg', title: 'Bosco', price: 'From $475.000' },
            { image: '/fotos-2bleweb/Santa Maria/celeste-630.jpg', title: 'Celeste', price: 'From $630.000' },
            { image: '/fotos-2bleweb/Santa Maria/corotu-550.jpg', title: 'Corotu', price: 'From $550.000' },
            { image: '/fotos-2bleweb/Santa Maria/the-woods-1060.jpg', title: 'The Woods', price: 'From $1.060.000' }
          ],
          highlights: ['Golf Course', 'Private Club']
        },
        {
          id: 'd3',
          title: 'Panama City',
          location: 'Panama City',
          description: 'Vibrant, modern and cultural lifestyle.',
          image: '/fotos-2bleweb/Ciudad/portada.jpg',
          fullDescription: 'Vibrant lifestyle close to everything, with first-world infrastructure and services, making it a modern city with great cultural wealth.',
          gallery: [
            { image: '/fotos-2bleweb/Ciudad/costanera-2-aqua-325.jpeg', title: 'Costanera / Aqua', price: 'From $325.000' },
            { image: '/fotos-2bleweb/Ciudad/ipanema-300.jpg', title: 'Ipanema', price: 'From $300.000' },
            { image: '/fotos-2bleweb/Ciudad/ocean-reef-the-palms-1350.jpg', title: 'The Palms (Ocean Reef)', price: 'From $1.350.000' }
          ],
          highlights: ['Global connectivity', 'Financial and logistics hub']
        },
        {
          id: 'd4',
          title: 'Investment',
          location: 'Panama',
          description: 'The best country to invest and retire.',
          image: '/fotos-2bleweb/Inversion/portada-nautilus-205.jpg',
          fullDescription: 'Considered the best country to invest and retire thanks to its stable and dollarized economy, becoming one of the real estate markets with the highest demand.',
          gallery: [
            { image: '/fotos-2bleweb/Inversion/portada-nautilus-205.jpg', title: 'Nautilus', price: 'From $205.000' },
            { image: '/fotos-2bleweb/Inversion/boquete-pino-alto-224.jpg', title: 'Pino Alto (Boquete)', price: 'From $224.000' },
            { image: '/fotos-2bleweb/Inversion/the-westin-residences-424.jpg', title: 'The Westin Residences', price: 'From $424.000' },
            { image: '/fotos-2bleweb/Inversion/the-westin-residences-424-2.jpg', title: 'The Westin Sembrador', price: 'From $424.000' }
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
      title: "You Rest, We Hunt",
      subtitle: "Have you wondered how to start buying a house or apartment?",
      description: "We know your time is very valuable, that's why we created the 'Reverse Purchase' method, which is designed to make your real estate life easier and your purchase much simpler.",
      steps: [
        { title: "Strategic Briefing", desc: "We define your legacy goals, mapping out every emotional and financial requirement." },
        { title: "The Market Hunt", desc: "Access to off-market inventory and exclusive pre-sales before the general public." },
        { title: "Flawless Execution", desc: "White-glove negotiation and complete legal peace of mind. We handle the friction; you enjoy the result." }
      ]
    },
    authority: {
      slides: [
        {
          title: "2Ble Realty",
          mainTitle: <>Strategic <span className="italic font-extralight text-slate-300">Allies</span></>,
          description: "Here you will find the experts who will guide you in every step you take.",
          image: "/logos-aliados-2.jpg",
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
              value: <a href="https://wa.me/50763145710" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl lg:text-2xl hover:text-champagne transition-colors"><Phone className="w-5 h-5 lg:w-6 lg:h-6 text-champagne" /> <span>+507 6314-5710</span></a>,
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
              value: <a href="https://wa.me/50767635522" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl lg:text-2xl hover:text-champagne transition-colors"><Phone className="w-5 h-5 lg:w-6 lg:h-6 text-champagne" /> <span>+507 6763-5522</span></a>,
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
              value: <a href="https://wa.me/50762801439" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl lg:text-2xl hover:text-champagne transition-colors"><Phone className="w-5 h-5 lg:w-6 lg:h-6 text-champagne" /> <span>+507 6280-1439</span></a>,
            }
          ]
        }
      ]
    },
    missionVision: {
      subTitle: "Legacy & Vision",
      title: <>Our Soul<br /><i className="font-serif italic text-white/50">Defines</i> the<br />Standard</>,
      mission: {
        title: "Mission",
        desc: "Reinventing the way people invest in the real estate market, integrating technology and experience, setting the new standard for real estate in Panama."
      },
      vision: {
        title: "Vision",
        desc: "Leading the new era of real estate in Panama, transforming the way we live and invest."
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
          image: '/fotos-2bleweb/Panama Pacifico/portada.jpeg',
          fullDescription: 'Combina naturaleza, diseño moderno, seguridad y sostenibilidad, con una sensación de espacios abiertos y áreas verdes como ninguna otra, ideal para los que valoran calidad de vida.',
          gallery: [
            { image: '/fotos-2bleweb/Panama Pacifico/centriqo-188.jpg', title: 'Centriquo', price: 'Desde $188.000' },
            { image: '/fotos-2bleweb/Panama Pacifico/explora-603.jpg', title: 'Explora', price: 'Desde $603.000' },
            { image: '/fotos-2bleweb/Panama Pacifico/lotes-sanctuary-880.jpeg', title: 'Lotes Sanctuary', price: 'Desde $880.000' }
          ],
          highlights: ['Master Plan', 'Aeropuerto internacional']
        },
        {
          id: 'd2',
          title: 'Santa María',
          location: 'Costa del Este',
          description: 'Lujo y naturaleza en uno de los sectores más exclusivos.',
          image: '/fotos-2bleweb/Santa Maria/portada.jpg',
          fullDescription: 'Uno de los sectores residenciales mas exclusivos y cotizados del país donde se combina el lujo con la naturaleza, logrando un estilo de vida único.',
          gallery: [
            { image: '/fotos-2bleweb/Santa Maria/bosco-475.jpg', title: 'Bosco', price: 'Desde $475.000' },
            { image: '/fotos-2bleweb/Santa Maria/celeste-630.jpg', title: 'Celeste', price: 'Desde $630.000' },
            { image: '/fotos-2bleweb/Santa Maria/corotu-550.jpg', title: 'Corotu', price: 'Desde $550.000' },
            { image: '/fotos-2bleweb/Santa Maria/the-woods-1060.jpg', title: 'The Woods', price: 'Desde $1.060.000' }
          ],
          highlights: ['Cancha de Golf', 'Club Privado']
        },
        {
          id: 'd3',
          title: 'Ciudad de Panamá',
          location: 'Ciudad de Panamá',
          description: 'Estilo de vida vibrante, moderno y cultural.',
          image: '/fotos-2bleweb/Ciudad/portada.jpg',
          fullDescription: 'Estilo de vida vibrante y cerca de todo, con infraestructura y servicios de primer mundo, convirtiéndola en una ciudad moderna y de gran riqueza cultural.',
          gallery: [
            { image: '/fotos-2bleweb/Ciudad/costanera-2-aqua-325.jpeg', title: 'Costanera / Aqua', price: 'Desde $325.000' },
            { image: '/fotos-2bleweb/Ciudad/ipanema-300.jpg', title: 'Ipanema', price: 'Desde $300.000' },
            { image: '/fotos-2bleweb/Ciudad/ocean-reef-the-palms-1350.jpg', title: 'The Palms (Ocean Reef)', price: 'Desde $1.350.000' }
          ],
          highlights: ['Conectividad global', 'Hub financiero y logistico']
        },
        {
          id: 'd4',
          title: 'Inversión',
          location: 'Panamá',
          description: 'El mejor país para invertir y retirarse.',
          image: '/fotos-2bleweb/Inversion/portada-nautilus-205.jpg',
          fullDescription: 'Considerado el mejor país para invertir y retirarse gracias a su economía estable y dolarizada, convirtiéndose en unos de los mercados con mayor demanda en bienes raíces.',
          gallery: [
            { image: '/fotos-2bleweb/Inversion/portada-nautilus-205.jpg', title: 'Nautilus', price: 'Desde $205.000' },
            { image: '/fotos-2bleweb/Inversion/boquete-pino-alto-224.jpg', title: 'Pino Alto (Boquete)', price: 'Desde $224.000' },
            { image: '/fotos-2bleweb/Inversion/the-westin-residences-424.jpg', title: 'The Westin Residences', price: 'Desde $424.000' },
            { image: '/fotos-2bleweb/Inversion/the-westin-residences-424-2.jpg', title: 'The Westin Sembrador', price: 'Desde $424.000' }
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
      title: "Tú Descansa, Nosotros Cazamos",
      subtitle: "¿Te has preguntado como iniciar la compra de una casa o apto?",
      description: "Sabemos que tu tiempo es muy valioso, por eso creamos el método de ¨Compra inversa¨, el cual está diseñado para hacer tu vida inmobiliaria más fácil y tu compra mucho más sencilla.",
      steps: [
        { title: "Briefing Estratégico", desc: "Definimos sus metas de legado, mapeando cada requerimiento emocional y financiero." },
        { title: "La Cacería de Mercado", desc: "Acceso a inventario fuera de mercado y preventas exclusivas antes que el público general." },
        { title: "Ejecución Impecable", desc: "Negociación de guante blanco y paz mental legal total. Nosotros gestionamos la fricción; usted disfruta el resultado." }
      ]
    },
    authority: {
      slides: [
        {
          title: "2Ble Realty",
          mainTitle: <>Aliados <span className="italic font-extralight text-slate-300">Estratégicos</span></>,
          description: "Aquí encontrarás a los expertos que te guiarán en cada paso que des.",
          image: "/logos-aliados-2.jpg",
          logoOverlay: false,
          stats: [
            { value: "+10", label: "Años de Experiencia" },
            { value: "+$75M", label: "En Ventas" },
            { value: "+250", label: "Hogares" }
          ]
        },
        {
          title: "Alcance Global",
          mainTitle: <>Jonathan<br /><span className="italic font-extralight text-slate-300">Valverde</span></>,
          description: "Accediendo a una extensa red de inversores internacionales y propiedades premium.",
          image: "/foto-jonathan.jpg",
          stats: [
            {
              value: <a href="https://wa.me/50763145710" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl lg:text-2xl hover:text-champagne transition-colors"><Phone className="w-5 h-5 lg:w-6 lg:h-6 text-champagne" /> <span>+507 6314-5710</span></a>,
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
              value: <a href="https://wa.me/50767635522" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl lg:text-2xl hover:text-champagne transition-colors"><Phone className="w-5 h-5 lg:w-6 lg:h-6 text-champagne" /> <span>+507 6763-5522</span></a>,
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
              value: <a href="https://wa.me/50762801439" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xl lg:text-2xl hover:text-champagne transition-colors"><Phone className="w-5 h-5 lg:w-6 lg:h-6 text-champagne" /> <span>+507 6280-1439</span></a>,
            }
          ]
        }
      ]
    },
    missionVision: {
      subTitle: "Legado y Visión",
      title: <>Nuestra Alma<br /><i className="font-serif italic text-white/50">Define</i> el<br />Estándar</>,
      mission: {
        title: "Misión",
        desc: "Reinventar la forma en que las personas invierten en el mercado inmobiliario, integrando tecnología y experiencia, logrando marcar el nuevo estándar de real estate en Panamá."
      },
      vision: {
        title: "Visión",
        desc: "Liderar la nueva era del real estate en Panamá, transformando la forma de vivir e invertir."
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
      gallery: "Propiedades de Interés",
      inquireInterest: "Solicitar Información",
      privatePortfolio: "Portafolio Privado",
      clickInquiry: "Clic para consultar",
      curated: "100% Curado",
      since2010: "Desde 2010"
    }
  }
};
