import React from 'react';
import { Post } from '../types';
import { Figure, Projects, Table, Tip } from '../ui';
import { postPath, SLUGS } from '../paths';

const KEY = 'mejores-zonas';
const DATE = '2026-09-27';

const PRICE_NOTE_ES = 'Precios referenciales “desde”, sujetos a cambios y disponibilidad. No incluyen gastos de cierre.';
const PRICE_NOTE_EN = 'Indicative “from” prices, subject to change and availability. Closing costs not included.';

export const es: Post = {
    key: KEY,
    lang: 'es',
    slug: SLUGS.mejoresZonas.es,
    title: 'Mejores zonas para invertir en bienes raíces en Panamá (2026)',
    seoTitle: 'Mejores zonas para invertir en bienes raíces en Panamá (2026)',
    description:
        'Panamá Pacífico, Santa María, Costa del Este, la Ciudad de Panamá y Boquete: comparamos las mejores zonas para invertir en bienes raíces en Panamá según tu objetivo y presupuesto.',
    category: 'Zonas e inversión',
    keywords: ['mejores zonas para invertir en Panamá', 'inversión inmobiliaria en Panamá', 'dónde invertir en bienes raíces en Panamá', 'Panamá Pacífico', 'Santa María', 'Costa del Este', 'Boquete'],
    datePublished: DATE,
    dateModified: DATE,
    author: 'yiniva',
    image: 'img/zonas/ciudad/portada.webp',
    imageAlt: 'Vista aérea del skyline de la Ciudad de Panamá y su marina',
    ogImage: 'og/mejores-zonas-invertir.jpg',
    readingMinutes: 9,
    answer:
        'No existe una única “mejor” zona: depende de tu objetivo. Para una comunidad planificada con áreas verdes, Panamá Pacífico; para lujo residencial con golf y club, Santa María y Costa del Este; para vida urbana y cercanía a todo, la Ciudad de Panamá; y para clima de montaña y retiro, Boquete.',
    takeaways: [
        'Define primero tu objetivo: vivir, alquilar a largo plazo, segunda vivienda o retiro.',
        'Panamá Pacífico: comunidad planificada junto a un aeropuerto internacional, con proyectos desde $188.000.',
        'Santa María y Costa del Este: sector residencial exclusivo con golf y club privado, desde $475.000.',
        'Ciudad de Panamá: conectividad y servicios de primer nivel, desde $300.000.',
        'Boquete: montaña, clima fresco y destino popular para el retiro, desde $224.000.',
    ],
    sections: [
        {
            id: 'que-hace-buena-una-zona',
            title: '¿Qué hace que una zona sea buena para invertir?',
            content: (
                <>
                    <p>
                        Antes de hablar de zonas concretas, conviene tener claros los criterios. Una buena zona para ti es la que encaja con tu estrategia, no la
                        que está de moda. Estos son los factores que revisamos con cada cliente:
                    </p>
                    <ul>
                        <li><strong>Conectividad e infraestructura:</strong> accesos, tiempos de traslado, cercanía a aeropuertos, colegios, hospitales y comercios.</li>
                        <li><strong>Perfil de quienes viven allí:</strong> familias, ejecutivos, jubilados… Define qué tipo de propiedad tiene más sentido.</li>
                        <li><strong>Planificación:</strong> las comunidades con un plan maestro suelen ofrecer un entorno más ordenado a largo plazo.</li>
                        <li><strong>Tipo de oferta:</strong> preventa o propiedad terminada, y la trayectoria del promotor.</li>
                        <li><strong>Reglas del edificio o comunidad:</strong> cuotas de mantenimiento y si se permiten alquileres de corto plazo.</li>
                    </ul>
                    <p>Con eso en mente, estas son las zonas en las que trabajamos y lo que ofrece cada una.</p>
                </>
            ),
        },
        {
            id: 'panama-pacifico',
            title: 'Panamá Pacífico: comunidad planificada y calidad de vida',
            content: (
                <>
                    <p>
                        Ubicada en Panamá Oeste, en los terrenos de la antigua base aérea de Howard, <strong>Panamá Pacífico</strong> es una comunidad planificada
                        que combina zonas residenciales, un área económica especial con empresas multinacionales y el Aeropuerto Internacional Panamá Pacífico.
                    </p>
                    <p>
                        Su propuesta combina naturaleza, diseño moderno, seguridad y sostenibilidad, con amplias áreas verdes y espacios abiertos. Es muy valorada
                        por familias y por profesionales que trabajan en la zona o que buscan más espacio del que ofrece la ciudad.
                    </p>
                    <Figure
                        src="img/zonas/panama-pacifico/portada.webp"
                        alt="Vista aérea de las comunidades residenciales de Panamá Pacífico rodeadas de áreas verdes"
                        caption="Panamá Pacífico: urbanismo planificado con amplias áreas verdes."
                    />
                    <p><strong>Ideal para:</strong> familias, ejecutivos y quienes priorizan espacio, naturaleza y seguridad.</p>
                    <Projects
                        note={PRICE_NOTE_ES}
                        items={[
                            { name: 'Cëntriqo', price: 'Desde $188.000', image: 'img/zonas/panama-pacifico/centriqo-188.webp', alt: 'Área social con piscina del proyecto Cëntriqo en Panamá Pacífico' },
                            { name: 'Explora', price: 'Desde $603.000', image: 'img/zonas/panama-pacifico/explora-603.webp', alt: 'Casa moderna con piscina del proyecto Explora en Panamá Pacífico' },
                            { name: 'Lotes Sanctuary', price: 'Desde $880.000', image: 'img/zonas/panama-pacifico/lotes-sanctuary-880.webp', alt: 'Residencia rodeada de naturaleza en Lotes Sanctuary, Panamá Pacífico' },
                        ]}
                    />
                    <p>
                        <strong>Ten en cuenta:</strong> está al otro lado del Canal. Si trabajas en la ciudad, considera los tiempos de traslado en horas pico.
                    </p>
                </>
            ),
        },
        {
            id: 'santa-maria-costa-del-este',
            title: 'Santa María y Costa del Este: lujo residencial y naturaleza',
            content: (
                <>
                    <p>
                        <strong>Santa María</strong> es uno de los sectores residenciales más exclusivos y cotizados del país. Su sello es la combinación de lujo y
                        naturaleza: campo de golf, club privado y amplias áreas verdes, que logran un estilo de vida único.
                    </p>
                    <p>
                        A su lado, <strong>Costa del Este</strong> reúne oficinas corporativas, colegios, comercios y restaurantes, lo que convierte a la zona en
                        una opción muy completa para familias que buscan vivir cerca de todo.
                    </p>
                    <Figure
                        src="img/zonas/santa-maria/portada.webp"
                        alt="Campo de golf y residencias de Santa María, junto a Costa del Este"
                        caption="Santa María: golf, club privado y áreas verdes junto a Costa del Este."
                    />
                    <p><strong>Ideal para:</strong> vivienda principal de largo plazo y compradores que priorizan exclusividad y amenidades.</p>
                    <Projects
                        note={PRICE_NOTE_ES}
                        items={[
                            { name: 'Bosco', price: 'Desde $475.000', image: 'img/zonas/santa-maria/bosco-475.webp', alt: 'Proyecto residencial Bosco en Santa María' },
                            { name: 'Corotú', price: 'Desde $550.000', image: 'img/zonas/santa-maria/corotu-550.webp', alt: 'Proyecto residencial Corotú en Santa María' },
                            { name: 'Celeste', price: 'Desde $630.000', image: 'img/zonas/santa-maria/celeste-630.webp', alt: 'Proyecto residencial Celeste en Santa María' },
                            { name: 'The Woods', price: 'Desde $1.060.000', image: 'img/zonas/santa-maria/the-woods-1060.webp', alt: 'Residencias The Woods en Santa María' },
                        ]}
                    />
                    <p>
                        <strong>Ten en cuenta:</strong> el ticket de entrada es más alto y las cuotas de mantenimiento van acordes con las amenidades.
                    </p>
                </>
            ),
        },
        {
            id: 'ciudad-de-panama',
            title: 'Ciudad de Panamá: vida urbana y conectividad global',
            content: (
                <>
                    <p>
                        La <strong>Ciudad de Panamá</strong> es un centro financiero y logístico con conectividad global gracias al Aeropuerto Internacional de
                        Tocumen. Ofrece infraestructura y servicios de primer mundo, una oferta gastronómica y cultural muy variada y todo a poca distancia.
                    </p>
                    <p>
                        Dentro de la ciudad destacan desarrollos frente al mar y proyectos exclusivos como <strong>Ocean Reef</strong>, islas residenciales privadas
                        con marina, junto a Punta Paitilla.
                    </p>
                    <p><strong>Ideal para:</strong> profesionales y ejecutivos, y para quienes quieren vivir cerca del trabajo, los servicios y la vida social.</p>
                    <Projects
                        note={PRICE_NOTE_ES}
                        items={[
                            { name: 'Ipanema', price: 'Desde $300.000', image: 'img/zonas/ciudad/ipanema-300.webp', alt: 'Proyecto Ipanema en Ciudad de Panamá' },
                            { name: 'Costanera / Aqua', price: 'Desde $325.000', image: 'img/zonas/ciudad/costanera-2-aqua-325.webp', alt: 'Proyecto Costanera / Aqua en Ciudad de Panamá' },
                            { name: 'The Palms (Ocean Reef)', price: 'Desde $1.350.000', image: 'img/zonas/ciudad/ocean-reef-the-palms-1350.webp', alt: 'Residencias The Palms en Ocean Reef, Ciudad de Panamá' },
                        ]}
                    />
                    <p>
                        <strong>Ten en cuenta:</strong> el tráfico en horas pico y, si piensas alquilar por plataformas de corto plazo, las reglas de cada edificio.
                    </p>
                </>
            ),
        },
        {
            id: 'boquete',
            title: 'Boquete: montaña, clima fresco y retiro',
            content: (
                <>
                    <p>
                        En las tierras altas de Chiriquí, <strong>Boquete</strong> es conocido por su clima fresco de montaña, sus fincas de café y su naturaleza.
                        Desde hace años es uno de los destinos preferidos por jubilados extranjeros en Panamá.
                    </p>
                    <Figure
                        src="img/zonas/inversion/boquete-pino-alto-224.webp"
                        alt="Proyecto Pino Alto en las montañas de Boquete, Chiriquí"
                        caption="Pino Alto, en Boquete: desde $224.000 (precio referencial)."
                    />
                    <p><strong>Ideal para:</strong> retiro, segunda vivienda y quienes buscan tranquilidad y naturaleza.</p>
                    <p>
                        <strong>Ten en cuenta:</strong> está lejos de la capital (se llega por carretera o en vuelo doméstico a David). Piensa en tu estilo de vida
                        y en el acceso a los servicios que necesitas.
                    </p>
                </>
            ),
        },
        {
            id: 'comparativa',
            title: 'Comparativa rápida de zonas',
            content: (
                <>
                    <Table
                        caption="Comparativa de zonas para invertir en Panamá"
                        head={['Zona', 'Ideal para', 'Estilo de vida', 'Proyectos desde']}
                        rows={[
                            ['Panamá Pacífico', 'Familias y ejecutivos', 'Comunidad planificada, áreas verdes', '$188.000'],
                            ['Santa María / Costa del Este', 'Vivienda principal de alto nivel', 'Golf, club privado, exclusividad', '$475.000'],
                            ['Ciudad de Panamá', 'Profesionales, vida urbana', 'Servicios, conectividad, frente al mar', '$300.000'],
                            ['Boquete', 'Retiro y segunda vivienda', 'Montaña, clima fresco, naturaleza', '$224.000'],
                        ]}
                    />
                    <p>
                        Además, manejamos otras oportunidades de inversión como <strong>Nautilus</strong> (desde $205.000) y <strong>The Westin Residences</strong>{' '}
                        (desde $424.000). Pregúntanos por su ubicación y condiciones.
                    </p>
                </>
            ),
        },
        {
            id: 'como-elegir',
            title: '¿Cómo elegir la zona correcta para ti?',
            content: (
                <>
                    <p>Antes de decidir, respóndete estas preguntas:</p>
                    <ol>
                        <li>¿Para qué compro: vivir, alquilar, segunda vivienda o retiro?</li>
                        <li>¿Cuál es mi presupuesto total, incluyendo gastos de cierre y cuotas de mantenimiento?</li>
                        <li>¿Prefiero una preventa con plan de pagos o una propiedad lista para usar?</li>
                        <li>¿Qué tan importante es para mí estar cerca del trabajo, colegios o el aeropuerto?</li>
                        <li>¿Qué permite el reglamento del edificio o de la comunidad?</li>
                    </ol>
                    <Tip label="Consejo">
                        Visita la zona en distintos horarios (o pídenos un recorrido) antes de decidir: el tráfico, el ruido y el ambiente cambian mucho entre la
                        mañana y la noche.
                    </Tip>
                    <p>
                        Si eres extranjero, te recomendamos leer también nuestra guía sobre{' '}
                        <a href={postPath('es', SLUGS.comprarExtranjero.es)}>cómo comprar una propiedad en Panamá siendo extranjero</a>.
                    </p>
                </>
            ),
        },
        {
            id: 'como-te-ayudamos',
            title: '¿Cómo te ayudamos a elegir?',
            content: (
                <p>
                    Con nuestro método de <strong>Compra Inversa</strong> analizamos tu objetivo y presupuesto, comparamos zonas y proyectos por ti (incluidas
                    preventas e inventario exclusivo) y te presentamos solo las opciones que tienen sentido para tu caso. Escríbenos y armamos juntos tu
                    comparativa.
                </p>
            ),
        },
    ],
    faq: [
        {
            q: '¿Cuál es la mejor zona para invertir en bienes raíces en Panamá?',
            a: 'Depende de tu objetivo. Panamá Pacífico destaca por su comunidad planificada, Santa María y Costa del Este por el lujo residencial, la Ciudad de Panamá por su conectividad y servicios, y Boquete por su clima de montaña para el retiro.',
        },
        {
            q: '¿Cuánto dinero necesito para invertir en bienes raíces en Panamá?',
            a: 'En nuestro portafolio actual hay proyectos desde $188.000 (precio referencial, sujeto a disponibilidad). A eso debes sumar los gastos de cierre y, si aplica, el abono inicial que pida el banco o el plan de pagos del proyecto.',
        },
        {
            q: '¿Es mejor comprar en preventa o una propiedad terminada?',
            a: 'Ambas opciones tienen ventajas. La preventa suele ofrecer planes de pago durante la obra, mientras que una propiedad terminada se puede usar o alquilar de inmediato. En preventa es clave revisar la trayectoria del promotor y el plazo de entrega.',
        },
        {
            q: '¿Puedo alquilar mi propiedad por plataformas de corto plazo como Airbnb?',
            a: 'Depende del reglamento de cada edificio o comunidad y de la normativa vigente. Muchos edificios lo restringen, por lo que debes verificarlo antes de comprar si esa es tu estrategia.',
        },
    ],
};

export const en: Post = {
    key: KEY,
    lang: 'en',
    slug: SLUGS.mejoresZonas.en,
    title: 'Best Areas to Invest in Panama Real Estate (2026)',
    seoTitle: 'Best Areas to Invest in Panama Real Estate (2026)',
    description:
        'Panama Pacifico, Santa Maria, Costa del Este, Panama City and Boquete: we compare the best areas to invest in Panama real estate based on your goal and budget.',
    category: 'Areas & investment',
    keywords: ['best areas to invest in Panama', 'Panama real estate investment', 'where to buy property in Panama', 'Panama Pacifico', 'Santa Maria Panama', 'Costa del Este', 'Boquete'],
    datePublished: DATE,
    dateModified: DATE,
    author: 'yiniva',
    image: 'img/zonas/ciudad/portada.webp',
    imageAlt: 'Aerial view of the Panama City skyline and marina',
    ogImage: 'og/mejores-zonas-invertir.jpg',
    readingMinutes: 9,
    answer:
        'There is no single “best” area: it depends on your goal. For a master-planned community with green space, Panama Pacifico; for luxury living with golf and a private club, Santa Maria and Costa del Este; for urban life close to everything, Panama City; and for mountain climate and retirement, Boquete.',
    takeaways: [
        'Start by defining your goal: living, long-term rental, second home or retirement.',
        'Panama Pacifico: master-planned community next to an international airport, with projects from $188,000.',
        'Santa Maria and Costa del Este: exclusive residential area with golf and a private club, from $475,000.',
        'Panama City: world-class connectivity and services, from $300,000.',
        'Boquete: mountains, cool climate and a popular retirement destination, from $224,000.',
    ],
    sections: [
        {
            id: 'what-makes-a-good-area',
            title: 'What makes an area good for investment?',
            content: (
                <>
                    <p>
                        Before looking at specific areas, it helps to be clear about the criteria. A good area for you is one that fits your strategy, not the one
                        that is trending. These are the factors we review with every client:
                    </p>
                    <ul>
                        <li><strong>Connectivity and infrastructure:</strong> access roads, commute times, proximity to airports, schools, hospitals and shops.</li>
                        <li><strong>Who lives there:</strong> families, executives, retirees… This defines which type of property makes the most sense.</li>
                        <li><strong>Planning:</strong> master-planned communities usually offer a more orderly environment over the long term.</li>
                        <li><strong>Type of offer:</strong> pre-construction or finished property, and the developer’s track record.</li>
                        <li><strong>Building or community rules:</strong> maintenance fees and whether short-term rentals are allowed.</li>
                    </ul>
                    <p>With that in mind, these are the areas we work in and what each one offers.</p>
                </>
            ),
        },
        {
            id: 'panama-pacifico',
            title: 'Panama Pacifico: master-planned community and quality of life',
            content: (
                <>
                    <p>
                        Located in Panama West, on the grounds of the former Howard Air Force Base, <strong>Panama Pacifico</strong> is a master-planned community
                        that combines residential neighborhoods, a special economic area with multinational companies and Panama Pacifico International Airport.
                    </p>
                    <p>
                        It blends nature, modern design, security and sustainability, with plenty of green areas and open spaces. It is highly valued by families
                        and by professionals who work in the area or want more space than the city offers.
                    </p>
                    <Figure
                        src="img/zonas/panama-pacifico/portada.webp"
                        alt="Aerial view of Panama Pacifico residential communities surrounded by green areas"
                        caption="Panama Pacifico: planned urban design with generous green areas."
                    />
                    <p><strong>Ideal for:</strong> families, executives and anyone who prioritizes space, nature and security.</p>
                    <Projects
                        note={PRICE_NOTE_EN}
                        items={[
                            { name: 'Cëntriqo', price: 'From $188,000', image: 'img/zonas/panama-pacifico/centriqo-188.webp', alt: 'Pool and social area at Cëntriqo, Panama Pacifico' },
                            { name: 'Explora', price: 'From $603,000', image: 'img/zonas/panama-pacifico/explora-603.webp', alt: 'Modern house with pool at Explora, Panama Pacifico' },
                            { name: 'Sanctuary Lots', price: 'From $880,000', image: 'img/zonas/panama-pacifico/lotes-sanctuary-880.webp', alt: 'Home surrounded by nature at Sanctuary Lots, Panama Pacifico' },
                        ]}
                    />
                    <p><strong>Keep in mind:</strong> it is on the other side of the Canal. If you work in the city, consider rush-hour commute times.</p>
                </>
            ),
        },
        {
            id: 'santa-maria-costa-del-este',
            title: 'Santa Maria and Costa del Este: luxury living and nature',
            content: (
                <>
                    <p>
                        <strong>Santa Maria</strong> is one of the most exclusive and sought-after residential areas in the country. Its hallmark is the blend of
                        luxury and nature: a golf course, a private club and generous green areas that create a unique lifestyle.
                    </p>
                    <p>
                        Next to it, <strong>Costa del Este</strong> brings together corporate offices, schools, shops and restaurants, making the area a very
                        complete option for families who want to live close to everything.
                    </p>
                    <Figure
                        src="img/zonas/santa-maria/portada.webp"
                        alt="Golf course and residences in Santa Maria, next to Costa del Este"
                        caption="Santa Maria: golf, private club and green areas next to Costa del Este."
                    />
                    <p><strong>Ideal for:</strong> a long-term primary residence and buyers who prioritize exclusivity and amenities.</p>
                    <Projects
                        note={PRICE_NOTE_EN}
                        items={[
                            { name: 'Bosco', price: 'From $475,000', image: 'img/zonas/santa-maria/bosco-475.webp', alt: 'Bosco residential project in Santa Maria' },
                            { name: 'Corotú', price: 'From $550,000', image: 'img/zonas/santa-maria/corotu-550.webp', alt: 'Corotú residential project in Santa Maria' },
                            { name: 'Celeste', price: 'From $630,000', image: 'img/zonas/santa-maria/celeste-630.webp', alt: 'Celeste residential project in Santa Maria' },
                            { name: 'The Woods', price: 'From $1,060,000', image: 'img/zonas/santa-maria/the-woods-1060.webp', alt: 'The Woods residences in Santa Maria' },
                        ]}
                    />
                    <p><strong>Keep in mind:</strong> the entry price is higher and maintenance fees reflect the amenities.</p>
                </>
            ),
        },
        {
            id: 'panama-city',
            title: 'Panama City: urban life and global connectivity',
            content: (
                <>
                    <p>
                        <strong>Panama City</strong> is a financial and logistics hub with global connectivity through Tocumen International Airport. It offers
                        first-world infrastructure and services, a varied food and cultural scene, and everything within a short distance.
                    </p>
                    <p>
                        Highlights include waterfront developments and exclusive projects such as <strong>Ocean Reef</strong>, private residential islands with a
                        marina next to Punta Paitilla.
                    </p>
                    <p><strong>Ideal for:</strong> professionals and executives, and anyone who wants to live close to work, services and social life.</p>
                    <Projects
                        note={PRICE_NOTE_EN}
                        items={[
                            { name: 'Ipanema', price: 'From $300,000', image: 'img/zonas/ciudad/ipanema-300.webp', alt: 'Ipanema project in Panama City' },
                            { name: 'Costanera / Aqua', price: 'From $325,000', image: 'img/zonas/ciudad/costanera-2-aqua-325.webp', alt: 'Costanera / Aqua project in Panama City' },
                            { name: 'The Palms (Ocean Reef)', price: 'From $1,350,000', image: 'img/zonas/ciudad/ocean-reef-the-palms-1350.webp', alt: 'The Palms residences at Ocean Reef, Panama City' },
                        ]}
                    />
                    <p><strong>Keep in mind:</strong> rush-hour traffic and, if you plan short-term rentals, each building’s rules.</p>
                </>
            ),
        },
        {
            id: 'boquete',
            title: 'Boquete: mountains, cool climate and retirement',
            content: (
                <>
                    <p>
                        In the highlands of Chiriquí, <strong>Boquete</strong> is known for its cool mountain climate, coffee farms and nature. For years it has been
                        one of the favorite destinations for foreign retirees in Panama.
                    </p>
                    <Figure
                        src="img/zonas/inversion/boquete-pino-alto-224.webp"
                        alt="Pino Alto project in the mountains of Boquete, Chiriquí"
                        caption="Pino Alto in Boquete: from $224,000 (indicative price)."
                    />
                    <p><strong>Ideal for:</strong> retirement, a second home and anyone seeking peace and nature.</p>
                    <p>
                        <strong>Keep in mind:</strong> it is far from the capital (reached by road or a domestic flight to David). Think about your lifestyle and
                        access to the services you need.
                    </p>
                </>
            ),
        },
        {
            id: 'comparison',
            title: 'Quick comparison of areas',
            content: (
                <>
                    <Table
                        caption="Comparison of areas to invest in Panama"
                        head={['Area', 'Ideal for', 'Lifestyle', 'Projects from']}
                        rows={[
                            ['Panama Pacifico', 'Families and executives', 'Master-planned, green areas', '$188,000'],
                            ['Santa Maria / Costa del Este', 'High-end primary residence', 'Golf, private club, exclusivity', '$475,000'],
                            ['Panama City', 'Professionals, urban life', 'Services, connectivity, waterfront', '$300,000'],
                            ['Boquete', 'Retirement and second home', 'Mountains, cool climate, nature', '$224,000'],
                        ]}
                    />
                    <p>
                        We also handle other investment opportunities such as <strong>Nautilus</strong> (from $205,000) and <strong>The Westin Residences</strong>{' '}
                        (from $424,000). Ask us about their location and terms.
                    </p>
                </>
            ),
        },
        {
            id: 'how-to-choose',
            title: 'How to choose the right area for you',
            content: (
                <>
                    <p>Before deciding, answer these questions:</p>
                    <ol>
                        <li>Why am I buying: to live, rent, have a second home or retire?</li>
                        <li>What is my total budget, including closing costs and maintenance fees?</li>
                        <li>Do I prefer pre-construction with a payment plan or a move-in-ready property?</li>
                        <li>How important is being close to work, schools or the airport?</li>
                        <li>What do the building or community rules allow?</li>
                    </ol>
                    <Tip label="Tip">
                        Visit the area at different times of day (or ask us for a tour) before deciding: traffic, noise and atmosphere change a lot between morning
                        and evening.
                    </Tip>
                    <p>
                        If you are a foreigner, we also recommend our guide on{' '}
                        <a href={postPath('en', SLUGS.comprarExtranjero.en)}>how to buy property in Panama as a foreigner</a>.
                    </p>
                </>
            ),
        },
        {
            id: 'how-we-help',
            title: 'How we help you choose',
            content: (
                <p>
                    With our <strong>Reverse Purchase</strong> method we analyze your goal and budget, compare areas and projects for you (including pre-sales and
                    exclusive inventory) and present only the options that make sense for your case. Message us and we will build your comparison together.
                </p>
            ),
        },
    ],
    faq: [
        {
            q: 'What is the best area to invest in Panama real estate?',
            a: 'It depends on your goal. Panama Pacifico stands out as a master-planned community, Santa Maria and Costa del Este for luxury living, Panama City for connectivity and services, and Boquete for its mountain climate and retirement lifestyle.',
        },
        {
            q: 'How much money do I need to invest in Panama real estate?',
            a: 'Our current portfolio includes projects from $188,000 (indicative price, subject to availability). Add closing costs and, if applicable, the bank’s down payment or the project’s payment plan.',
        },
        {
            q: 'Is it better to buy pre-construction or a finished property?',
            a: 'Both have advantages. Pre-construction often offers payment plans during construction, while a finished property can be used or rented right away. With pre-construction, it is key to check the developer’s track record and delivery date.',
        },
        {
            q: 'Can I rent my property on short-term platforms like Airbnb?',
            a: 'It depends on each building’s or community’s rules and current regulations. Many buildings restrict it, so verify before buying if that is your strategy.',
        },
    ],
};
