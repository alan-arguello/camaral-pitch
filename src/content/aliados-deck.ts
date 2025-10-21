export interface AliadosProposal {
  client: {
    name: string;
    logo: string;
  };
  intro: {
    greeting: string;
    subtitle: string;
  };
  partnership: {
    heading: string;
    whiteLion: {
      title: string;
      description: string;
      strengths: string[];
    };
    camaral: {
      title: string;
      description: string;
      strengths: string[];
    };
  };
  howItWorks: {
    heading: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  pricingStructure: {
    heading: string;
    description: string;
    plans: Array<{
      name: string;
      price: string;
      minutes: string;
      features: string[];
    }>;
    customization: {
      title: string;
      description: string;
      pricing: string;
    };
    videoProduction: {
      title: string;
      description: string;
      pricing: string[];
    };
  };
  requirements: {
    heading: string;
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
  timeline: {
    heading: string;
    items: Array<{
      phase: string;
      duration: string;
      description: string;
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
  contact: {
    name: string;
    phone: string;
    email: string;
  };
}

export const aliadosProposalContent: AliadosProposal = {
  client: {
    name: "White Lion + Camaral",
    logo: "/whitelion.png",
  },
  intro: {
    greeting: "Soluciones de Avatares de IA",
    subtitle:
      "Tecnología de vanguardia en avatares de IA que transforman la manera en que tu empresa interactúa con clientes, automatiza procesos y escala operaciones 24/7.",
  },
  partnership: {
    heading: "Alianza Estratégica",
    whiteLion: {
      title: "White Lion",
      description: "Tu Partner de Confianza",
      strengths: [
        "Gestión integral de proyectos enterprise",
        "Implementación y acompañamiento continuo",
        "Consultoría en transformación digital",
      ],
    },
    camaral: {
      title: "Camaral",
      description: "Tecnología de Vanguardia",
      strengths: [
        "Plataforma de avatares de IA líder en el mercado",
        "Respaldo de inversores de Rappi y Microsoft",
        "Infraestructura escalable y segura",
      ],
    },
  },
  howItWorks: {
    heading: "¿Cómo Funciona?",
    steps: [
      {
        title: "Análisis de necesidades",
        description:
          "Entendemos tus objetivos y casos de uso específicos para diseñar la solución ideal.",
      },
      {
        title: "Propuesta personalizada",
        description:
          "Creamos una propuesta a medida con precios y funcionalidades adaptadas a tu empresa.",
      },
      {
        title: "Demo funcional",
        description:
          "Desarrollamos un avatar de prueba en 2-3 días para que veas la tecnología en acción.",
      },
      {
        title: "Implementación y soporte",
        description:
          "Desplegamos la solución completa con capacitación y soporte continuo para tu equipo.",
      },
    ],
  },
  pricingStructure: {
    heading: "Estructura de Precios",
    description:
      "Planes flexibles adaptados a las necesidades de cada empresa. Ninguno incluye avatares personalizados.",
    plans: [
      {
        name: "Starter",
        price: "$78/mes",
        minutes: "100 minutos",
        features: [
          "100 minutos de llamadas mensuales",
          "Avatar estándar (no personalizado)",
          "Integración con Zoom y Teams",
          "Soporte por email",
        ],
      },
      {
        name: "Professional",
        price: "$198/mes",
        minutes: "500 minutos",
        features: [
          "500 minutos de llamadas mensuales",
          "Avatar estándar (no personalizado)",
          "Integración con Zoom y Teams",
          "Soporte prioritario",
          "Analytics básicos",
        ],
      },
    ],
    customization: {
      title: "Avatares Personalizados",
      description:
        "Para avatares customizados con la imagen, voz y conocimiento específico del cliente.",
      pricing:
        "Desde $600 USD en adelante (dependiendo de complejidad, tiempo requerido y especificaciones del cliente)",
    },
    videoProduction: {
      title: "Producción de Videos Personalizados",
      description:
        "Generación de contenido con avatares de IA, guiones personalizados y voces clonadas para campañas de marketing, capacitación interna o comunicación corporativa.",
      pricing: [
        "Precios desde $20 USD por minuto finalizado",
        "El costo final depende del nivel de personalización y la complejidad de producción",
      ],
    },
  },
  requirements: {
    heading: "Requisitos para Avatares Personalizados",
    sections: [
      {
        title: "Material visual",
        items: [
          "Al menos 1 foto de alta calidad (idealmente 3 fotos diferentes)",
          "Formato horizontal preferiblemente",
          "Persona mirando al frente, como en videollamada",
        ],
      },
      {
        title: "Material de audio",
        items: [
          "Clonación rápida: 5 minutos de audio",
          "Clonación de alta calidad: 2 horas de audio",
          "Audio debe incluir el acento y cadencia natural de la persona",
        ],
      },
      {
        title: "Base de conocimiento",
        items: [
          "Documentos, PDFs o contenido sobre temas que el avatar debe conocer",
          "Guía de marca (si aplica)",
          "Restricciones de temas: qué NO debe responder el avatar",
          "Frases específicas o saludos personalizados",
        ],
      },
    ],
  },
  timeline: {
    heading: "Tiempos de Entrega",
    items: [
      {
        phase: "Demo básico",
        duration: "2-3 días",
        description:
          "Avatar funcional con clonación rápida para presentar al cliente",
      },
      {
        phase: "Customización completa",
        duration: "5-7 días",
        description:
          "Avatar completamente personalizado con voz de alta calidad y base de conocimiento entrenada",
      },
      {
        phase: "Iteraciones",
        duration: "Variable",
        description:
          "Ajustes basados en feedback del cliente hasta lograr el resultado ideal",
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
  team: {
    heading: "Nuestro Equipo",
    caption: "Un equipo fundador totalmente técnico",
    members: [
      {
        name: "Samuel Santa",
        role: "Chief Executive Officer",
        summary:
          "Fundador, operador e ingeniero enfocado en automatizar el trabajo de agencias.",
        highlights: [
          "Founder & CEO de Suuper, el sistema operativo para agencias respaldado por Andrés Bilbao",
          "Co-founder & CTO de Grayola, escaló el servicio de diseño a $250k ARR en 18 meses sin inversión",
          "Software engineer en Accenture implementando soluciones de CX",
          "Licenciatura en Ciencias de la Computación",
        ],
        linkedin: "https://www.linkedin.com/in/devsanta/",
      },
      {
        name: "Alan Arguello",
        role: "Chief Revenue Officer",
        summary:
          "Operador y builder liderando programas de CX, comunidades venture y crecimiento B2B.",
        highlights: [
          "Co-fundó un programa para founders bootstrapped con Alexander Torrenegra, alcanzando $250k ARR",
          "Equipo fundador en Makers Fellowship junto al cofundador de Rappi, Andrés Bilbao",
          "Co-founder en Trendi (Platanus Ventures), lanzó productos educativos a $85k ARR",
          "Software engineer en Beek (YC W17) y National Western Life Insurance",
          "Ingeniero electricista y MBA",
        ],
        linkedin: "https://www.linkedin.com/in/alan-arguello/",
      },
      {
        name: "Octavio Razo",
        role: "Chief Technology Officer",
        summary:
          "Líder de ingeniería escalando plataformas de GenAI para contact centers y startups.",
        highlights: [
          "Engineering manager en Vozy durante 9 años, creció el equipo de 1 a 120+ y soportó 2M llamadas diarias",
          "Tech lead en Terapify (YC W21) coordinando entregas durante Y Combinator",
          "Co-founder & CTO en Trazo Software entregando software a medida",
          "Licenciatura en Ciencias de la Computación y Maestría en Management",
        ],
        linkedin: "https://www.linkedin.com/in/octaviorazoverduzco",
      },
    ],
  },
  investors: {
    heading: "Respaldo de inversores de clase mundial",
    caption:
      "Inversionistas que han escalado compañías icónicas de consumo y enterprise.",
    people: [
      {
        name: "Andrés Bilbao",
        title: "Inversionista, cofundador de Rappi ($5.2B)",
        highlights: [
          "Cofundador de Rappi",
          "Ángel inversionista en 60+ startups como Trii, Ontop, Morado y Truora",
        ],
        linkedin: "https://www.linkedin.com/in/ahbilbao/",
      },
      {
        name: "Martha Hurtado",
        title: "Inversionista, ex gerente en Microsoft",
        highlights: [
          "Ex gerente en Microsoft liderando programas enterprise",
          "Ángel inversionista en más de 10 compañías",
        ],
        linkedin: "https://www.linkedin.com/in/marthahurtadocarrasco/",
      },
      {
        name: "Alberto Aramayo",
        title: "Inversionista, Head of Sales en Diio",
        highlights: [
          "Head of Sales en Diio",
          "Ángel inversionista en 5 compañías en LATAM",
        ],
        linkedin: "https://www.linkedin.com/in/albertoaramayo/",
      },
    ],
  },
  contact: {
    name: "Alan Arguello",
    phone: "+52 55 4470 2523",
    email: "a@camaral.ai",
  },
};
