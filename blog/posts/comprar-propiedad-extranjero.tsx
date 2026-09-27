import React from 'react';
import { Post } from '../types';
import { Figure, Tip } from '../ui';
import { postPath, SLUGS } from '../paths';

const KEY = 'comprar-extranjero';
const DATE = '2026-09-27';

export const es: Post = {
    key: KEY,
    lang: 'es',
    slug: SLUGS.comprarExtranjero.es,
    title: 'Cómo comprar una propiedad en Panamá siendo extranjero: guía paso a paso',
    seoTitle: 'Cómo comprar una propiedad en Panamá siendo extranjero (guía)',
    description:
        'Guía paso a paso para comprar una propiedad en Panamá siendo extranjero: requisitos, documentos, proceso legal, formas de pago y errores que debes evitar.',
    category: 'Guía de compra',
    keywords: ['comprar propiedad en Panamá siendo extranjero', 'extranjeros comprar casa en Panamá', 'proceso de compra de inmuebles en Panamá', 'invertir en bienes raíces en Panamá'],
    datePublished: DATE,
    dateModified: DATE,
    author: 'jonathan',
    image: 'img/zonas/ciudad/ocean-reef-the-palms-1350.webp',
    imageAlt: 'Muelle y marina de Ocean Reef al atardecer, en Ciudad de Panamá',
    ogImage: 'og/comprar-propiedad-extranjero.jpg',
    readingMinutes: 8,
    answer:
        'Sí, un extranjero puede comprar una propiedad en Panamá con los mismos derechos que un panameño y sin necesidad de ser residente: basta con su pasaporte. El proceso suele incluir elegir la propiedad, verificar el título en el Registro Público, firmar un contrato de promesa de compraventa, formalizar la escritura pública ante notario e inscribirla a tu nombre.',
    takeaways: [
        'No necesitas residencia ni cédula panameña para comprar: puedes hacerlo con tu pasaporte.',
        'La propiedad queda a tu nombre (o de una sociedad) cuando la escritura se inscribe en el Registro Público de Panamá.',
        'Antes de pagar, verifica que el título esté limpio y sin gravámenes: es el paso más importante.',
        'Puedes comprar de contado, con financiamiento bancario o con un plan de pagos de preventa, según el proyecto.',
        'Un abogado idóneo en Panamá debe acompañarte en toda la compraventa.',
    ],
    sections: [
        {
            id: 'puede-un-extranjero-comprar',
            title: '¿Puede un extranjero comprar una propiedad en Panamá?',
            content: (
                <>
                    <p>
                        <strong>Sí.</strong> La legislación panameña permite que los extranjeros compren y sean dueños de bienes inmuebles con los mismos derechos
                        que los ciudadanos panameños. No necesitas ser residente ni tener cédula panameña: puedes comprar con tu pasaporte.
                    </p>
                    <p>
                        Existen algunas excepciones: la propiedad de tierras por parte de extranjeros tiene restricciones en zonas cercanas a las fronteras y en
                        ciertas islas. Para la gran mayoría de propiedades residenciales en la ciudad y sus alrededores esto no representa un obstáculo, pero tu
                        abogado siempre debe confirmarlo en cada caso.
                    </p>
                    <p>
                        Además, en Panamá el dólar estadounidense es moneda de curso legal. Si tus ingresos o ahorros están en dólares, compras sin riesgo
                        cambiario, algo que muchos inversionistas extranjeros valoran.
                    </p>
                </>
            ),
        },
        {
            id: 'documentos',
            title: '¿Qué documentos necesitas para comprar?',
            content: (
                <>
                    <p>
                        Los requisitos exactos dependen de cómo compres (de contado o con financiamiento) y de las entidades que intervengan, pero en general te
                        pedirán:
                    </p>
                    <ul>
                        <li><strong>Pasaporte vigente.</strong> Es el documento con el que te identificas en el contrato y en la escritura.</li>
                        <li>
                            <strong>Información sobre el origen de los fondos.</strong> Bancos, notarías y promotoras aplican normas de prevención de blanqueo de
                            capitales (debida diligencia o “conozca a su cliente”), por lo que es normal que soliciten referencias bancarias, estados de cuenta u
                            otros documentos que respalden de dónde proviene el dinero.
                        </li>
                        <li><strong>Documentos de la sociedad</strong>, si compras a través de una persona jurídica.</li>
                        <li>
                            <strong>Requisitos del banco</strong>, si vas a financiar: comprobantes de ingresos, historial de crédito y lo que defina cada entidad.
                        </li>
                    </ul>
                    <Tip label="Consejo">
                        Si vives fuera de Panamá, reúne con tiempo los documentos que te pidan desde tu país y pregunta si deben ir apostillados. Así evitas
                        retrasos al momento del cierre.
                    </Tip>
                </>
            ),
        },
        {
            id: 'paso-a-paso',
            title: 'Paso a paso: así es el proceso de compra',
            content: (
                <>
                    <h3>Paso 1: Define tu objetivo y presupuesto</h3>
                    <p>
                        ¿Vas a vivir, alquilar, tener una segunda vivienda o planear tu retiro? Tu objetivo define la zona, el tipo de propiedad y si te conviene
                        una preventa o algo terminado. Incluye en tu presupuesto los gastos de cierre y los costos recurrentes, como la cuota de mantenimiento, los
                        impuestos y los seguros.
                    </p>
                    <h3>Paso 2: Elige la zona y la propiedad</h3>
                    <p>
                        Compara zonas por conectividad, servicios, entorno y perfil de quienes viven allí. Te lo explicamos en detalle en nuestra guía de{' '}
                        <a href={postPath('es', SLUGS.mejoresZonas.es)}>mejores zonas para invertir en Panamá</a>.
                    </p>
                    <h3>Paso 3: Separa la propiedad y negocia</h3>
                    <p>
                        En proyectos en preventa es habitual firmar un acuerdo de reserva y pagar un monto de separación. En propiedades terminadas se presenta una
                        oferta al vendedor. Las condiciones cambian en cada caso, así que léelas con calma antes de pagar.
                    </p>
                    <h3>Paso 4: Verifica la propiedad (debida diligencia)</h3>
                    <p>
                        Es el paso más importante. Tu abogado debe revisar en el <strong>Registro Público de Panamá</strong> quién es el propietario y que la finca no
                        tenga hipotecas, embargos ni otros gravámenes pendientes, además de confirmar que estén al día los paz y salvos correspondientes (por
                        ejemplo, impuesto de inmueble y agua).
                    </p>
                    <p>
                        Si el apartamento está en un edificio bajo régimen de propiedad horizontal (PH), revisa también el reglamento, las cuotas de mantenimiento y
                        si se permiten alquileres de corto plazo. En preventas, investiga la trayectoria del promotor y el estado de los permisos del proyecto.
                    </p>
                    <Figure
                        src="img/foto-interior.webp"
                        alt="Sala de un apartamento de lujo con vista a la Ciudad de Panamá"
                        caption="Una buena asesoría te ahorra tiempo y errores durante todo el proceso."
                    />
                    <h3>Paso 5: Firma la promesa de compraventa</h3>
                    <p>
                        Es el contrato que fija el precio, la forma y las fechas de pago, el plazo de entrega y qué ocurre si alguna de las partes incumple. Debe
                        revisarlo tu abogado antes de que lo firmes.
                    </p>
                    <h3>Paso 6: Pago o financiamiento</h3>
                    <p>
                        Los pagos suelen hacerse por transferencia bancaria. Si financias, el banco evalúa tu solicitud y, una vez aprobada, normalmente emite una
                        carta de promesa de pago a favor del vendedor, que respalda el desembolso al momento del traspaso.
                    </p>
                    <h3>Paso 7: Escritura pública e inscripción</h3>
                    <p>
                        La compraventa se formaliza en una escritura pública ante notario y luego se inscribe en el Registro Público. Desde la inscripción, la
                        propiedad queda legalmente a tu nombre.
                    </p>
                </>
            ),
        },
        {
            id: 'formas-de-pago',
            title: '¿Cómo puedes pagar la propiedad?',
            content: (
                <>
                    <h3>De contado</h3>
                    <p>
                        Es la vía más rápida y sencilla, porque no depende de la aprobación de un banco. Aun así, la verificación del título y la revisión legal
                        son igual de necesarias.
                    </p>
                    <h3>Con financiamiento bancario</h3>
                    <p>
                        En Panamá hay bancos que ofrecen hipotecas a extranjeros, residentes o no. Las condiciones (porcentaje de financiamiento, abono inicial,
                        tasa y plazo) dependen de cada banco y de tu perfil. Puedes hacer una primera estimación con la{' '}
                        <a href="/#calculator">calculadora hipotecaria de Davivienda</a> en nuestra web.
                    </p>
                    <h3>Con plan de pagos en preventa</h3>
                    <p>
                        Muchos proyectos en construcción permiten pagar un porcentaje durante la obra y el saldo a la entrega, de contado o con hipoteca. Puede
                        facilitar la entrada, pero revisa bien el plazo de entrega, qué pasa si la obra se retrasa y las demás condiciones del contrato.
                    </p>
                </>
            ),
        },
        {
            id: 'persona-o-sociedad',
            title: '¿Comprar a tu nombre o a través de una sociedad?',
            content: (
                <p>
                    Puedes comprar como persona natural o mediante una persona jurídica (por ejemplo, una sociedad anónima o una fundación de interés privado).
                    Cada opción tiene implicaciones distintas en sucesión, impuestos y administración, y lo que conviene depende de tu situación y de las leyes de
                    tu país de residencia. Esta decisión debes tomarla con tu abogado y, si aplica, con tu asesor fiscal.
                </p>
            ),
        },
        {
            id: 'errores-comunes',
            title: 'Errores comunes que debes evitar',
            content: (
                <ul>
                    <li>Pagar sin verificar el título en el Registro Público.</li>
                    <li>Firmar documentos sin que los revise un abogado idóneo en Panamá.</li>
                    <li>Olvidar los gastos de cierre y los costos recurrentes en tu presupuesto.</li>
                    <li>No leer el reglamento del PH, sobre todo si piensas alquilar por plataformas de corto plazo.</li>
                    <li>Decidir solo por fotos o renders, sin comparar ubicación, acabados y trayectoria del promotor.</li>
                    <li>Asumir que comprar una propiedad te da la residencia de forma automática (lo explicamos en las preguntas frecuentes).</li>
                </ul>
            ),
        },
        {
            id: 'como-te-acompanamos',
            title: '¿Cómo te acompañamos en 2Ble Realty?',
            content: (
                <>
                    <p>
                        Con nuestro método de <strong>Compra Inversa</strong>, tú nos cuentas qué buscas y nosotros hacemos el trabajo: filtramos las opciones que
                        se ajustan a tu objetivo y presupuesto (incluidas preventas e inventario exclusivo), coordinamos las visitas, te acompañamos en la
                        negociación y trabajamos junto a tu abogado hasta el cierre.
                    </p>
                    <p>Si estás evaluando comprar en Panamá desde el exterior, escríbenos y te orientamos sin compromiso.</p>
                </>
            ),
        },
    ],
    faq: [
        {
            q: '¿Necesito ser residente para comprar una propiedad en Panamá?',
            a: 'No. Un extranjero puede comprar una propiedad en Panamá con su pasaporte, sin ser residente ni tener cédula panameña, y con los mismos derechos de propiedad que un ciudadano panameño.',
        },
        {
            q: '¿Puedo comprar una propiedad en Panamá sin viajar?',
            a: 'En muchos casos es posible completar la compra a distancia, por ejemplo otorgando un poder a un apoderado en Panamá. Los requisitos dependen de cada operación, por lo que debes confirmarlo con tu abogado.',
        },
        {
            q: '¿Cuánto tiempo tarda el proceso de compra?',
            a: 'Depende del tipo de operación. Una compra de contado de una propiedad terminada suele ser más rápida que una con financiamiento bancario, y en una preventa la entrega depende del avance de la obra. Tu asesor y tu abogado pueden darte un estimado para tu caso.',
        },
        {
            q: '¿Comprar una propiedad me da la residencia en Panamá?',
            a: 'No de forma automática. Existen visas de residencia que consideran la inversión en bienes raíces como uno de sus requisitos, pero los montos y condiciones cambian con la normativa. Consulta con un abogado de migración antes de tomar una decisión basada en la residencia.',
        },
    ],
};

export const en: Post = {
    key: KEY,
    lang: 'en',
    slug: SLUGS.comprarExtranjero.en,
    title: 'How to Buy Property in Panama as a Foreigner: A Step-by-Step Guide',
    seoTitle: 'How to Buy Property in Panama as a Foreigner (Step-by-Step)',
    description:
        'A step-by-step guide to buying property in Panama as a foreigner: requirements, documents, the legal process, payment options and mistakes to avoid.',
    category: 'Buying guide',
    keywords: ['buy property in Panama as a foreigner', 'can foreigners buy property in Panama', 'Panama real estate buying process', 'invest in Panama real estate'],
    datePublished: DATE,
    dateModified: DATE,
    author: 'jonathan',
    image: 'img/zonas/ciudad/ocean-reef-the-palms-1350.webp',
    imageAlt: 'Ocean Reef boardwalk and marina at sunset in Panama City',
    ogImage: 'og/comprar-propiedad-extranjero.jpg',
    readingMinutes: 8,
    answer:
        'Yes. Foreigners can buy property in Panama with the same rights as Panamanian citizens and without being residents: a passport is enough. The process usually involves choosing the property, checking the title at the Public Registry, signing a purchase promise agreement, executing the public deed before a notary and registering it in your name.',
    takeaways: [
        'You do not need Panamanian residency or a local ID to buy: your passport is enough.',
        'The property is legally yours (or your company’s) once the deed is registered at Panama’s Public Registry.',
        'Before paying, make sure the title is clean and free of liens: this is the most important step.',
        'You can pay cash, use bank financing or follow a pre-construction payment plan, depending on the project.',
        'A licensed Panamanian attorney should guide you throughout the purchase.',
    ],
    sections: [
        {
            id: 'can-foreigners-buy',
            title: 'Can foreigners buy property in Panama?',
            content: (
                <>
                    <p>
                        <strong>Yes.</strong> Panamanian law allows foreigners to buy and own real estate with the same rights as Panamanian citizens. You do not
                        need to be a resident or hold a Panamanian ID: you can buy with your passport.
                    </p>
                    <p>
                        There are some exceptions: land ownership by foreigners is restricted in areas near the borders and on certain islands. For the vast
                        majority of residential properties in and around Panama City this is not an obstacle, but your attorney should always confirm it for each
                        purchase.
                    </p>
                    <p>
                        Panama also uses the US dollar as legal tender. If your income or savings are in dollars, you buy with no currency risk, something many
                        foreign investors value.
                    </p>
                </>
            ),
        },
        {
            id: 'documents',
            title: 'What documents do you need?',
            content: (
                <>
                    <p>The exact requirements depend on how you buy (cash or financing) and on the institutions involved, but you will generally be asked for:</p>
                    <ul>
                        <li><strong>A valid passport.</strong> It identifies you in the contract and in the deed.</li>
                        <li>
                            <strong>Proof of the source of funds.</strong> Banks, notaries and developers apply anti-money-laundering rules (due diligence or
                            “know your customer”), so it is normal to be asked for bank references, statements or other documents showing where the money comes
                            from.
                        </li>
                        <li><strong>Company documents</strong>, if you buy through a legal entity.</li>
                        <li><strong>Bank requirements</strong>, if you finance: proof of income, credit history and whatever each bank requires.</li>
                    </ul>
                    <Tip label="Tip">
                        If you live abroad, gather the documents requested from your home country early and ask whether they need to be apostilled. This avoids
                        delays at closing.
                    </Tip>
                </>
            ),
        },
        {
            id: 'step-by-step',
            title: 'Step by step: how the buying process works',
            content: (
                <>
                    <h3>Step 1: Define your goal and budget</h3>
                    <p>
                        Will you live there, rent it out, use it as a second home or plan your retirement? Your goal determines the area, the type of property and
                        whether a pre-construction or a finished unit makes more sense. Include closing costs and recurring costs such as maintenance fees, taxes
                        and insurance in your budget.
                    </p>
                    <h3>Step 2: Choose the area and the property</h3>
                    <p>
                        Compare areas by connectivity, services, surroundings and the profile of the people who live there. We cover this in detail in our guide to
                        the <a href={postPath('en', SLUGS.mejoresZonas.en)}>best areas to invest in Panama real estate</a>.
                    </p>
                    <h3>Step 3: Reserve the property and negotiate</h3>
                    <p>
                        In pre-construction projects it is common to sign a reservation agreement and pay a reservation deposit. For finished properties, you make
                        an offer to the seller. Terms vary in each case, so read them carefully before paying.
                    </p>
                    <h3>Step 4: Check the property (due diligence)</h3>
                    <p>
                        This is the most important step. Your attorney should check at <strong>Panama’s Public Registry</strong> who the owner is and that the
                        property has no mortgages, liens or other encumbrances, and confirm that the relevant clearance certificates (for example, property tax and
                        water) are up to date.
                    </p>
                    <p>
                        If the apartment is in a condominium (PH, horizontal property regime), also review the bylaws, the maintenance fees and whether short-term
                        rentals are allowed. For pre-construction, look into the developer’s track record and the status of the project’s permits.
                    </p>
                    <Figure
                        src="img/foto-interior.webp"
                        alt="Luxury apartment living room overlooking Panama City"
                        caption="Good advice saves you time and mistakes throughout the process."
                    />
                    <h3>Step 5: Sign the purchase promise agreement</h3>
                    <p>
                        This contract sets the price, payment method and dates, delivery date and what happens if either party fails to comply. Your attorney
                        should review it before you sign.
                    </p>
                    <h3>Step 6: Payment or financing</h3>
                    <p>
                        Payments are usually made by bank transfer. If you finance, the bank reviews your application and, once approved, typically issues a
                        payment commitment letter to the seller that backs the disbursement at transfer.
                    </p>
                    <h3>Step 7: Public deed and registration</h3>
                    <p>
                        The sale is formalized in a public deed before a notary and then registered at the Public Registry. From registration onward, the property
                        is legally yours.
                    </p>
                </>
            ),
        },
        {
            id: 'payment-options',
            title: 'How can you pay for the property?',
            content: (
                <>
                    <h3>Cash</h3>
                    <p>
                        The fastest and simplest route, since it does not depend on bank approval. Title checks and legal review are still just as necessary.
                    </p>
                    <h3>Bank financing</h3>
                    <p>
                        Some banks in Panama offer mortgages to foreigners, whether residents or not. Terms (loan-to-value, down payment, rate and term) depend on
                        each bank and your profile. You can get a first estimate with the <a href="/en/#calculator">Davivienda mortgage calculator</a> on our
                        website.
                    </p>
                    <h3>Pre-construction payment plan</h3>
                    <p>
                        Many projects under construction let you pay a percentage during construction and the balance at delivery, in cash or with a mortgage. It
                        can make entry easier, but check the delivery date, what happens if construction is delayed and the rest of the contract terms.
                    </p>
                </>
            ),
        },
        {
            id: 'personal-or-company',
            title: 'Buy in your own name or through a company?',
            content: (
                <p>
                    You can buy as an individual or through a legal entity (for example, a corporation or a private interest foundation). Each option has
                    different implications for inheritance, taxes and management, and the right choice depends on your situation and the laws of your country of
                    residence. Make this decision with your attorney and, if applicable, your tax advisor.
                </p>
            ),
        },
        {
            id: 'common-mistakes',
            title: 'Common mistakes to avoid',
            content: (
                <ul>
                    <li>Paying before checking the title at the Public Registry.</li>
                    <li>Signing documents without review by a licensed Panamanian attorney.</li>
                    <li>Leaving closing costs and recurring costs out of your budget.</li>
                    <li>Not reading the condominium bylaws, especially if you plan to rent on short-term platforms.</li>
                    <li>Deciding from photos or renderings alone, without comparing location, finishes and the developer’s track record.</li>
                    <li>Assuming that buying property automatically grants residency (see the FAQ below).</li>
                </ul>
            ),
        },
        {
            id: 'how-we-help',
            title: 'How does 2Ble Realty help you?',
            content: (
                <>
                    <p>
                        With our <strong>Reverse Purchase</strong> method, you tell us what you are looking for and we do the work: we shortlist options that fit
                        your goal and budget (including pre-sales and exclusive inventory), coordinate visits, support you in negotiation and work alongside your
                        attorney until closing.
                    </p>
                    <p>If you are considering buying in Panama from abroad, message us and we will guide you with no obligation.</p>
                </>
            ),
        },
    ],
    faq: [
        {
            q: 'Do I need to be a resident to buy property in Panama?',
            a: 'No. A foreigner can buy property in Panama with a passport, without being a resident or holding a Panamanian ID, and with the same ownership rights as a Panamanian citizen.',
        },
        {
            q: 'Can I buy property in Panama without traveling?',
            a: 'In many cases the purchase can be completed remotely, for example by granting a power of attorney to a representative in Panama. Requirements depend on each transaction, so confirm with your attorney.',
        },
        {
            q: 'How long does the buying process take?',
            a: 'It depends on the transaction. A cash purchase of a finished property is usually faster than one with bank financing, and in pre-construction the delivery depends on construction progress. Your advisor and attorney can give you an estimate for your case.',
        },
        {
            q: 'Does buying property give me residency in Panama?',
            a: 'Not automatically. Some residency visas consider real estate investment as one of their requirements, but amounts and conditions change with regulations. Consult an immigration attorney before making a decision based on residency.',
        },
    ],
};
