export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

type CTA =
  | { type: "link"; label: string; href: string }
  | { type: "contact"; label: string; detail: string };

export interface DeckContent {
  localeName: string;
  nav: {
    pricing: string;
    demo: string;
    start: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: CTA & { type: "link" };
    secondaryCta: CTA & { type: "link" };
  };
  spotlight: string[];
  valueProp: string[];
  team: {
    heading: string;
    caption: string;
    members: Array<{
      name: string;
      role: string;
      summary: string;
      highlights: string[];
      linkedin: string;
    }>;
  };
  traction: {
    heading: string;
    caption: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
    image: string;
  };
  investors: {
    heading: string;
    caption: string;
    people: Array<{
      name: string;
      title: string;
      highlights: string[];
      linkedin: string;
    }>;
  };
  useCases: {
    heading: string;
    caption: string;
    cases: Array<{
      client: string;
      summary: string;
      link: string;
    }>;
  };
  media: {
    heading: string;
    caption: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  };
  pricing: {
    interactive: {
      heading: string;
      caption: string;
      plans: Array<{
        name: string;
        price: string;
        description: string;
        perks: string[];
      }>;
    };
    content: {
      heading: string;
      description: string;
      bullets: string[];
    };
  };
  contact: {
    heading: string;
    caption: string;
    ctas: CTA[];
  };
  footer: {
    rights: string;
  };
}

export const deckCopy: Record<Locale, DeckContent> = {
  en: {
    localeName: "English",
    nav: {
      pricing: "Pricing",
      demo: "Get a demo",
      start: "Start free trial",
    },
    hero: {
      eyebrow: "Camaral",
      title: "Real-time AI avatars.",
      subtitle:
        "We help customer experience and marketing teams deliver natural conversations at scale with AI agents.",
      primaryCta: {
        type: "link",
        label: "Book a demo",
        href: "https://cal.com/camaral/discovery-demo",
      },
      secondaryCta: {
        type: "link",
        label: "Meet the team",
        href: "#team",
      },
    },
    spotlight: [
      "Trusted by founders scaling CX and marketing automation",
      "Custom avatars trained on your knowledge, tone, and voice",
      "Realtime conversations on calls, video, and chat",
    ],
    valueProp: [
      "AI avatars that look, sound, and think like your team.",
      "Tailored onboarding, lead qualification, and support flows.",
      "Fast iteration powered by proprietary GenAI pipelines.",
    ],
    team: {
      heading: "A founding team building out of Silicon Valley",
      caption:
        "After founding companies and working at YC startups, we gained the experience to build world-class global companies.",
      members: [
        {
          name: "Samuel Santa",
          role: "Cofounder & CEO",
          summary:
            "Founder, operator, and engineer focused on automating agency workflows.",
          highlights: [
            "Founder & CEO of Suuper, the operating system for agencies backed by Andrés Bilbao.",
            "Co-founder & CTO of Grayola, scaled subscription design to $250k ARR in 18 months without funding.",
            "Software engineer at Accenture delivering enterprise CX solutions.",
            "Bachelor’s in Computer Science.",
          ],
          linkedin: "https://www.linkedin.com/in/devsanta/",
        },
        {
          name: "Alan Arguello",
          role: "Cofounder & President",
          summary:
            "Operator and builder leading CX programs, venture-backed communities, and B2B growth.",
          highlights: [
            "Co-founded a founder support program with Alexander Torrenegra, grew to $250k ARR bootstrapped.",
            "Founding team at Makers Fellowship with Rappi co-founder Andrés Bilbao.",
            "Co-founder at Trendi (Platanus Ventures), launched education products to $85k ARR.",
            "Software engineer at Beek (YC W17) and National Western Life Insurance.",
            "Bachelor’s in Electrical Engineering and MBA.",
          ],
          linkedin: "https://www.linkedin.com/in/alan-arguello/",
        },
        {
          name: "Octavio Razo",
          role: "Cofounder & CTO",
          summary:
            "Engineering leader scaling GenAI platforms for contact centers and startups.",
          highlights: [
            "Engineering manager at Vozy for 9 years, grew the team from 1 to 120+ while handling 2M calls daily.",
            "Tech lead at Terapify (YC W21) orchestrating product delivery during YC.",
            "Co-founder & CTO at Trazo Software delivering tailored software products.",
            "Bachelor’s in Computer Science and Master in Management.",
          ],
          linkedin: "https://www.linkedin.com/in/octaviorazoverduzco",
        },
      ],
    },
    traction: {
      heading: "Early traction and momentum",
      caption:
        "We're just getting started, but the results speak for themselves.",
      metrics: [
        {
          label: "Launched",
          value: "First week of October",
        },
        {
          label: "First paid clients",
          value: "7 ($250 MRR)",
        },
        {
          label: "One-off revenue",
          value: "$1,800 USD",
        },
        {
          label: "Raising",
          value: "$300k USD pre-seed",
        },
      ],
      image: "/team.jpeg",
    },
    investors: {
      heading: "Backed by world-class operators",
      caption:
        "Investors who have scaled iconic consumer and enterprise companies.",
      people: [
        {
          name: "Andrés Bilbao",
          title: "Investor, co-founder Rappi ($5.2B)",
          highlights: [
            "Co-founder of Rappi.",
            "Angel investor in 60+ startups including Trii, Ontop, Morado, and Truora.",
          ],
          linkedin: "https://www.linkedin.com/in/ahbilbao/",
        },
        {
          name: "Martha Hurtado",
          title: "Investor, former Microsoft manager",
          highlights: [
            "Former manager at Microsoft leading enterprise programs.",
            "Angel investor in 10+ companies.",
          ],
          linkedin: "https://www.linkedin.com/in/marthahurtadocarrasco/",
        },
        {
          name: "Alberto Aramayo",
          title: "Investor, Head of Sales at Diio",
          highlights: [
            "Head of Sales at Diio.",
            "Angel investor in 5 companies across LATAM.",
          ],
          linkedin: "https://www.linkedin.com/in/albertoaramayo/",
        },
      ],
    },
    useCases: {
      heading: "Real Camaral deployments",
      caption:
        "Teams across consulting, education, ecommerce, and proptech use avatars to stay close to their customers.",
      cases: [
        {
          client: "ANDE",
          summary:
            "The largest education union in Costa Rica hired us for their annual anniversary event, providing an avatar of Emma Gamboa, a deceased founder, to commemorate her in an interactive room where she explained her history in person.",
          link: "/ande",
        },
        {
          client: "Axel Jutoran",
          summary:
            "Creator with 180k+ followers clones himself with Camaral to qualify inbound leads and concentrate on premium engagements.",
          link: "https://www.instagram.com/axel_jutoran",
        },
        {
          client: "Educación Estrella",
          summary:
            "Educational fintech guides applicants through long financing forms with an avatar that converses like a human advisor.",
          link: "https://educacionestrella.com/",
        },
        {
          client: "Saees",
          summary:
            "High-growth Amazon enablement company automates demos and onboarding with avatars delivering consistent scripts 24/7.",
          link: "https://saees.tech/",
        },
        {
          client: "Construcción AI",
          summary:
            "Proptech founder uses an avatar to collect design requirements and simplify proposal requests.",
          link: "https://construccion.ai/",
        },
        {
          client: "Next Generation",
          summary:
            "Andrés Bilbao’s program scales parent onboarding with his Camaral avatar answering questions instantly.",
          link: "https://nextgen.build/",
        },
        {
          client: "Trazo",
          summary:
            "Consultancy produces training content by cloning their CEO, reducing production from months to weeks.",
          link: "https://www.trazo.pro/",
        },
      ],
    },
    media: {
      heading: "See it in action",
      caption: "Live demos and public launches showcasing Camaral avatars.",
      items: [
        {
          label: "Live interview with an AI avatar",
          href: "https://www.linkedin.com/posts/alan-arguello_ustedes-me-contratarían-muy-activity-7379906963805151233-niZL",
        },
        {
          label: "Generating content by cloning personas",
          href: "https://www.linkedin.com/posts/alan-arguello_creo-que-me-reemplazará-mi-propio-clon-activity-7380351528974479360-qE5Y",
        },
        {
          label: "Replacing actors in video campaigns",
          href: "https://www.linkedin.com/posts/alan-arguello_ahora-sí-a-levantar-capital-como-lobo-de-activity-7376625898961383424-qVHr",
        },
      ],
    },
    pricing: {
      interactive: {
        heading: "Real-time interactive avatars for calls",
        caption:
          "Choose a plan that matches your call volume and integration needs.",
        plans: [
          {
            name: "Starter",
            price: "$39/mo",
            description:
              "Ideal for solo operators and small teams introducing AI automation.",
            perks: [
              "1 AI avatar",
              "100 minutes per month",
              "$0.25 per extra minute",
              "Core integrations",
            ],
          },
          {
            name: "Pro",
            price: "$99/mo",
            description:
              "For growing teams ready to automate customer touchpoints at scale.",
            perks: [
              "Unlimited avatars",
              "500 minutes per month",
              "$0.22 per extra minute",
              "Summaries, recordings, and transcripts",
              "Priority support",
            ],
          },
          {
            name: "Scale",
            price: "$299/mo",
            description:
              "Designed for startups and SMBs scaling sales, interviews, and onboarding.",
            perks: [
              "Unlimited avatars",
              "1,600 minutes per month",
              "$0.20 per extra minute",
              "Custom integrations",
              "Advanced analytics",
              "Dedicated support",
            ],
          },
          {
            name: "Custom",
            price: "Talk to us",
            description:
              "For global organizations requiring secure, bespoke AI avatars.",
            perks: [
              "Meaningful volume discounts",
              "Custom voices",
              "Tailored AI avatars",
              "API access",
              "Flexible terms",
            ],
          },
        ],
      },
      content: {
        heading: "AI-powered content production",
        description:
          "End-to-end avatar-led content with bespoke scripting, voices, and delivery.",
        bullets: [
          "Pricing starts at $3 USD per finished minute.",
          "Final cost depends on customization depth and production complexity.",
        ],
      },
    },
    contact: {
      heading: "Start building with Camaral",
      caption:
        "Choose the touchpoint that matches your interest and we will reply quickly.",
      ctas: [
        {
          type: "link",
          label: "Schedule a demo",
          href: "https://cal.com/camaral/discovery-demo",
        },
        {
          type: "contact",
          label: "Investor relations",
          detail: "sam@camaral.ai",
        },
        {
          type: "contact",
          label: "Custom plans and sales",
          detail: "a@camaral.ai",
        },
        {
          type: "contact",
          label: "Technical inquiries",
          detail: "o@camaral.ai",
        },
      ],
    },
    footer: {
      rights: "© Camaral. All rights reserved.",
    },
  },
  es: {
    localeName: "Español",
    nav: {
      pricing: "Precios",
      demo: "Agenda una demo",
      start: "Comenzar gratis",
    },
    hero: {
      eyebrow: "Camaral",
      title: "Creamos avatares de IA en tiempo real.",
      subtitle:
        "Ayudamos a equipos de customer experience y marketing a ofrecer conversaciones humanas a escala con agentes de IA.",
      primaryCta: {
        type: "link",
        label: "Agenda una demo",
        href: "https://cal.com/camaral/discovery-demo",
      },
      secondaryCta: {
        type: "link",
        label: "Conoce al equipo",
        href: "#team",
      },
    },
    spotlight: [
      "Confiado por founders que escalan automatización de CX y marketing",
      "Avatares personalizados con tu conocimiento, tono y voz",
      "Conversaciones en tiempo real por llamada, video y chat",
    ],
    valueProp: [
      "Avatares de IA que se ven, suenan y piensan como tu equipo.",
      "Flujos de onboarding, calificación de leads y soporte a la medida.",
      "Iteración rápida con pipelines propietarios de GenAI.",
    ],
    team: {
      heading: "Un equipo fundador que construye desde Silicon Valley",
      caption:
        "Después de fundar compañías y trabajar en startups de YC, ganamos la experiencia para crear empresas globales world-class.",
      members: [
        {
          name: "Samuel Santa",
          role: "Chief Executive Officer",
          summary:
            "Fundador, operador e ingeniero enfocado en automatizar el trabajo de agencias.",
          highlights: [
            "Founder & CEO de Suuper, el sistema operativo para agencias respaldado por Andrés Bilbao.",
            "Co-founder & CTO de Grayola, escaló el servicio de diseño a $250k ARR en 18 meses sin inversión.",
            "Software engineer en Accenture implementando soluciones de CX.",
            "Licenciatura en Ciencias de la Computación.",
          ],
          linkedin: "https://www.linkedin.com/in/devsanta/",
        },
        {
          name: "Alan Arguello",
          role: "Chief Revenue Officer",
          summary:
            "Operador y builder liderando programas de CX, comunidades venture y crecimiento B2B.",
          highlights: [
            "Co-fundó un programa para founders bootstrapped con Alexander Torrenegra, alcanzando $250k ARR.",
            "Equipo fundador en Makers Fellowship junto al cofundador de Rappi, Andrés Bilbao.",
            "Co-founder en Trendi (Platanus Ventures), lanzó productos educativos a $85k ARR.",
            "Software engineer en Beek (YC W17) y National Western Life Insurance.",
            "Ingeniero electricista y MBA.",
          ],
          linkedin: "https://www.linkedin.com/in/alan-arguello/",
        },
        {
          name: "Octavio Razo",
          role: "Chief Technology Officer",
          summary:
            "Líder de ingeniería escalando plataformas de GenAI para contact centers y startups.",
          highlights: [
            "Engineering manager en Vozy durante 9 años, creció el equipo de 1 a 120+ y soportó 2M llamadas diarias.",
            "Tech lead en Terapify (YC W21) coordinando entregas durante Y Combinator.",
            "Co-founder & CTO en Trazo Software entregando software a medida.",
            "Licenciatura en Ciencias de la Computación y Maestría en Management.",
          ],
          linkedin: "https://www.linkedin.com/in/octaviorazoverduzco",
        },
      ],
    },
    traction: {
      heading: "Tracción temprana y momentum",
      caption:
        "Apenas estamos empezando, pero los resultados hablan por sí solos.",
      metrics: [
        {
          label: "Lanzamiento",
          value: "Primera semana de octubre",
        },
        {
          label: "Primeros clientes pagados",
          value: "7 ($250 MRR)",
        },
        {
          label: "Ingresos únicos",
          value: "$1,800 USD",
        },
        {
          label: "Levantando",
          value: "$300k USD pre-seed",
        },
      ],
      image: "/team.jpeg",
    },
    investors: {
      heading: "Con el apoyo de operadores de talla mundial",
      caption:
        "Inversionistas que han escalado compañías icónicas de consumo y enterprise.",
      people: [
        {
          name: "Andrés Bilbao",
          title: "Inversionista, cofundador de Rappi ($5.2B)",
          highlights: [
            "Cofundador de Rappi.",
            "Ángel inversionista en 60+ startups como Trii, Ontop, Morado y Truora.",
          ],
          linkedin: "https://www.linkedin.com/in/ahbilbao/",
        },
        {
          name: "Martha Hurtado",
          title: "Inversionista, ex gerente en Microsoft",
          highlights: [
            "Ex gerente en Microsoft liderando programas enterprise.",
            "Ángel inversionista en más de 10 compañías.",
          ],
          linkedin: "https://www.linkedin.com/in/marthahurtadocarrasco/",
        },
        {
          name: "Alberto Aramayo",
          title: "Inversionista, Head of Sales en Diio",
          highlights: [
            "Head of Sales en Diio.",
            "Ángel inversionista en 5 compañías en LATAM.",
          ],
          linkedin: "https://www.linkedin.com/in/albertoaramayo/",
        },
      ],
    },
    useCases: {
      heading: "Casos reales de Camaral",
      caption:
        "Equipos de consultoría, educación, ecommerce y proptech escalan experiencias humanas con avatares.",
      cases: [
        {
          client: "ANDE",
          summary:
            "El sindicato de educación más grande de Costa Rica nos contrató para su evento de aniversario anual, proporcionando un avatar de Emma Gamboa, una fundadora fallecida, para conmemorarla en una sala interactiva donde explicó su historia en persona.",
          link: "/ande",
        },
        {
          client: "Axel Jutoran",
          summary:
            "Creador con 180k+ seguidores usa su avatar Camaral para calificar leads e invertir su tiempo en oportunidades premium.",
          link: "https://www.instagram.com/axel_jutoran",
        },
        {
          client: "Educación Estrella",
          summary:
            "Fintech educativa guía a solicitantes en formularios extensos con un avatar que conversa como un asesor humano.",
          link: "https://educacionestrella.com/",
        },
        {
          client: "Saees",
          summary:
            "Empresa que impulsa negocios en Amazon automatiza demos y onboarding con guiones consistentes 24/7.",
          link: "https://saees.tech/",
        },
        {
          client: "Construcción AI",
          summary:
            "Proptech que usa un avatar para recopilar requisitos de diseño y simplificar solicitudes de propuesta.",
          link: "https://construccion.ai/",
        },
        {
          client: "Next Generation",
          summary:
            "Programa de Andrés Bilbao escala el onboarding de padres con su avatar respondiendo dudas al instante.",
          link: "https://nextgen.build/",
        },
        {
          client: "Trazo",
          summary:
            "Consultora produce capacitación interna clonando a su CEO y reduce producción de meses a semanas.",
          link: "https://www.trazo.pro/",
        },
      ],
    },
    media: {
      heading: "Míralo en acción",
      caption:
        "Demos en vivo y lanzamientos públicos que muestran los avatares de Camaral.",
      items: [
        {
          label: "Entrevista en vivo con un avatar de IA",
          href: "https://www.linkedin.com/posts/alan-arguello_ustedes-me-contratarían-muy-activity-7379906963805151233-niZL",
        },
        {
          label: "Generando contenido clonando personas",
          href: "https://www.linkedin.com/posts/alan-arguello_creo-que-me-reemplazará-mi-propio-clon-activity-7380351528974479360-qE5Y",
        },
        {
          label: "Reemplazo de actores en campañas de video",
          href: "https://www.linkedin.com/posts/alan-arguello_ahora-sí-a-levantar-capital-como-lobo-de-activity-7376625898961383424-qVHr",
        },
      ],
    },
    pricing: {
      interactive: {
        heading: "Avatares interactivos en tiempo real para llamadas",
        caption:
          "Selecciona el plan que se ajusta a tu volumen y necesidad de integraciones.",
        plans: [
          {
            name: "Inicial",
            price: "$39/mes",
            description:
              "Ideal para solopreneurs y equipos pequeños que empiezan con automatización IA.",
            perks: [
              "1 avatar de IA",
              "100 minutos por mes",
              "$0.25 por minuto adicional",
              "Integraciones básicas",
            ],
          },
          {
            name: "Pro",
            price: "$99/mes",
            description:
              "Para equipos en crecimiento listos para automatizar puntos de contacto a escala.",
            perks: [
              "Avatares ilimitados",
              "500 minutos por mes",
              "$0.22 por minuto adicional",
              "Resúmenes, grabaciones y transcripciones",
              "Soporte prioritario",
            ],
          },
          {
            name: "Escala",
            price: "$299/mes",
            description:
              "Diseñado para startups y PYMEs que escalan ventas, entrevistas y onboarding.",
            perks: [
              "Avatares ilimitados",
              "1,600 minutos por mes",
              "$0.20 por minuto adicional",
              "Integraciones personalizadas",
              "Analíticas avanzadas",
              "Soporte dedicado",
            ],
          },
          {
            name: "Custom",
            price: "Hablemos",
            description:
              "Para organizaciones globales que requieren avatares de IA seguros y a medida.",
            perks: [
              "Descuentos significativos por volumen",
              "Voces personalizadas",
              "Avatares de IA a medida",
              "Acceso API",
              "Términos personalizados",
            ],
          },
        ],
      },
      content: {
        heading: "Generación de contenido con IA",
        description:
          "Producción integral con avatares, guiones, voces y entregables personalizados.",
        bullets: [
          "Precios desde $3 USD por minuto finalizado.",
          "El costo final depende del nivel de personalización y la complejidad.",
        ],
      },
    },
    contact: {
      heading: "Construyamos con Camaral",
      caption:
        "Elige el canal que se ajusta a lo que buscas y responderemos rápido.",
      ctas: [
        {
          type: "link",
          label: "Agenda una demo",
          href: "https://cal.com/camaral/discovery-demo",
        },
        {
          type: "contact",
          label: "Relación con inversionistas",
          detail: "sam@camaral.ai",
        },
        {
          type: "contact",
          label: "Planes personalizados y ventas",
          detail: "a@camaral.ai",
        },
        {
          type: "contact",
          label: "Consultas técnicas",
          detail: "o@camaral.ai",
        },
      ],
    },
    footer: {
      rights: "© Camaral. Todos los derechos reservados.",
    },
  },
};

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && locales.includes(value as Locale);
}
