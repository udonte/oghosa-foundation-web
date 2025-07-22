import SubHeroSection from "@/lib/components/common/SubHeroSection";
import CommunityHero from "@/assets/images/locations/communities/community-hero.jpg";
import { EventCalendar } from "@/lib/components/locations/communities/EventCalendar";
import CTASection from "@/lib/components/Home/CTASection";
import { RegionSelector } from "@/lib/components/locations/communities/RegionalSelector";
import { CommunityHighlight } from "@/lib/components/locations/communities/CommunityHighlight";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import { CommunityHighlightStats } from "@/lib/constants/locations/communities";
import { ProgramBreakdown } from "@/lib/components/locations/communities/ProgramBreakdown";
import { PartnershipTestimonialsData } from "@/lib/constants/support/support";
import PartnershipTestimonials from "@/lib/components/support/PartnershipTestimonials";

const Communities = () => {
  return (
    <main>
      <SubHeroSection
        image={CommunityHero}
        title="The Communities we've touched"
        subtitle="Discover how OGF’s grassroots initiatives create sustainable change across Nigeria."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Work", href: "/locations" },
          { label: "Communities" },
        ]}
      />
      <RegionSelector />
      <CommunityHighlight />
      <ImpactSection
        stats={CommunityHighlightStats}
        title="Overall Impact"
        subtitle="Measuring the Community Impact of Our Programs"
      />
      <ProgramBreakdown />
      <PartnershipTestimonials testimonials={PartnershipTestimonialsData} />
      <EventCalendar />
      <CTASection />
    </main>
  );
};

export default Communities;
