export interface AndeProposal {
  client: {
    name: string;
    logo: string;
  };
  intro: {
    greeting: string;
    subtitle: string;
  };
  deliverables: {
    heading: string;
    items: string[];
  };
  requirements: {
    heading: string;
    sections: Array<{
      title: string;
      items: string[];
    }>;
  };
  eventInfo: {
    heading: string;
    items: string[];
  };
  pricing: {
    heading: string;
    amount: string;
    paymentLink: string;
    note: string;
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

export const andeProposalContent: AndeProposal = {
  client: {
    name: "Sindicato ANDE",
    logo: "/ande.jpeg",
  },
  intro: {
    greeting: "Propuesta para el Congreso del Sindicato ANDE",
    subtitle:
      "Nos entusiasma colaborar como aliados en su próximo evento con tecnología de avatares de IA en tiempo real.",
  },
  deliverables: {
    heading: "Entregables",
    items: [
      "2 avatares personalizados en video (imagen y gestos) y en audio",
      "Minutos ilimitados de llamadas durante los 3 días del congreso",
      "Al finalizar, quedará activo un plan con 500 minutos para llamadas de los avatares, disponibles cuando los necesiten",
      "Soporte personalizado y prioritario para asegurar que superemos las expectativas",
    ],
  },
  requirements: {
    heading: "Requisitos para la personalización",
    sections: [
      {
        title: "Material de entrenamiento",
        items: [
          "Al menos 5 imágenes de cada persona a clonar",
          "Al menos 2 horas de audio de cada persona",
          "Contenido para entrenar la base de conocimiento del avatar",
        ],
      },
      {
        title: "Instrucciones y configuración",
        items: [
          "Temas restringidos y cómo deben objetarse",
          "Guía de marca, si aplica",
          "Requisitos especiales: frases, saludos o interacciones esperadas en distintos escenarios",
        ],
      },
    ],
  },
  eventInfo: {
    heading: "Información necesaria del congreso",
    items: [
      "Fecha del congreso",
      "Fecha ideal para contar con los avatares de prueba",
    ],
  },
  pricing: {
    heading: "Inversión y forma de pago",
    amount: "USD 1,800",
    paymentLink: "https://buy.stripe.com/3cI8wQ8AJ1MrfY6feY6Zy00",
    note: "Una vez recibido el pago, iniciaremos de inmediato la producción.",
  },
  team: {
    heading: "Nuestro equipo",
    caption:
      "Un equipo fundador que construye desde Silicon Valley con experiencia en startups de Y Combinator y empresas globales.",
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
