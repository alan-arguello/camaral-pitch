import { andeProposalContent } from "@/content/ande-deck";
import { AndeHero } from "@/components/ande/ande-hero";
import { AndeDeliverables } from "@/components/ande/ande-deliverables";
import { AndeRequirements } from "@/components/ande/ande-requirements";
import { AndeEventInfo } from "@/components/ande/ande-event-info";
import { AndePricing } from "@/components/ande/ande-pricing";
import { AndeTeam } from "@/components/ande/ande-team";
import { AndeInvestors } from "@/components/ande/ande-investors";
import { AndeContact } from "@/components/ande/ande-contact";

export const metadata = {
  title: `Propuesta para ${andeProposalContent.client.name} | Camaral`,
  description:
    "Propuesta comercial de Camaral para implementar avatares de IA en tiempo real en el congreso del Sindicato ANDE.",
  robots: "noindex, nofollow",
};

export default function AndeDeckPage() {
  const content = andeProposalContent;

  return (
    <main className="min-h-screen bg-white">
      <AndeHero
        clientName={content.client.name}
        clientLogo={content.client.logo}
        greeting={content.intro.greeting}
        subtitle={content.intro.subtitle}
      />

      <AndeDeliverables
        heading={content.deliverables.heading}
        items={content.deliverables.items}
      />

      <AndeRequirements
        heading={content.requirements.heading}
        sections={content.requirements.sections}
      />

      <AndeEventInfo
        heading={content.eventInfo.heading}
        items={content.eventInfo.items}
      />

      <AndePricing
        heading={content.pricing.heading}
        amount={content.pricing.amount}
        paymentLink={content.pricing.paymentLink}
        note={content.pricing.note}
      />

      <AndeTeam
        heading={content.team.heading}
        caption={content.team.caption}
        members={content.team.members}
      />

      <AndeInvestors
        heading={content.investors.heading}
        caption={content.investors.caption}
        people={content.investors.people}
      />

      <AndeContact
        name={content.contact.name}
        phone={content.contact.phone}
        email={content.contact.email}
      />
    </main>
  );
}
