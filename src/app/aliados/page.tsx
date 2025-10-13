import { aliadosProposalContent } from "@/content/aliados-deck";
import { AliadosHero } from "@/components/aliados/aliados-hero";
import { AliadosPartnership } from "@/components/aliados/aliados-partnership";
import { AliadosHowItWorks } from "@/components/aliados/aliados-how-it-works";
import { AliadosPricing } from "@/components/aliados/aliados-pricing";
import { AliadosRequirements } from "@/components/aliados/aliados-requirements";
import { AliadosTimeline } from "@/components/aliados/aliados-timeline";
import { AliadosMedia } from "@/components/aliados/aliados-media";
import { AliadosTeam } from "@/components/aliados/aliados-team";
import { AliadosInvestors } from "@/components/aliados/aliados-investors";

export const metadata = {
  title: "Avatares de IA en Tiempo Real | Camaral",
  description:
    "Transformamos la manera en que las empresas interactúan con sus clientes mediante avatares de IA hiperrealistas.",
  robots: "noindex, nofollow",
};

export default function AliadosDeckPage() {
  const content = aliadosProposalContent;

  return (
    <main className="min-h-screen bg-white">
      <AliadosHero
        clientName={content.client.name}
        greeting={content.intro.greeting}
        subtitle={content.intro.subtitle}
      />

      <AliadosPartnership
        heading={content.partnership.heading}
        whiteLion={content.partnership.whiteLion}
        camaral={content.partnership.camaral}
      />

      <AliadosHowItWorks
        heading={content.howItWorks.heading}
        steps={content.howItWorks.steps}
      />

      <AliadosPricing
        heading={content.pricingStructure.heading}
        description={content.pricingStructure.description}
        plans={content.pricingStructure.plans}
        customization={content.pricingStructure.customization}
        videoProduction={content.pricingStructure.videoProduction}
      />

      <AliadosRequirements
        heading={content.requirements.heading}
        sections={content.requirements.sections}
      />

      <AliadosTimeline
        heading={content.timeline.heading}
        items={content.timeline.items}
      />

      <AliadosMedia
        heading={content.media.heading}
        caption={content.media.caption}
        items={content.media.items}
      />

      <AliadosTeam
        heading={content.team.heading}
        caption={content.team.caption}
        members={content.team.members}
      />

      <AliadosInvestors
        heading={content.investors.heading}
        caption={content.investors.caption}
        people={content.investors.people}
      />
    </main>
  );
}
