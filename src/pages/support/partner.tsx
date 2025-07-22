import SubHeroSection from "@/lib/components/common/SubHeroSection";
import PartnershipMissionSection from "@/lib/components/support/partnerships/PartnershipMissionSection";
import partnerHero from "@/assets/images/support/partner/partner-hero.jpg";
import PartnerBenefits from "@/lib/components/support/partnerships/PartnerBenefits";
import PartnershipModels from "@/lib/components/support/partnerships/ParnershipModels";
import PartnersDisplay from "@/lib/components/support/partnerships/PartnersDisplay";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import {
  partnerImpactStats,
  partnerTestimonialsData,
} from "@/lib/constants/support/support";
import CTASection from "@/lib/components/Home/CTASection";
import PartnershipProcess from "@/lib/components/support/partnerships/PartnershipProcess";
import PartnershipTestimonials from "@/lib/components/support/PartnershipTestimonials";

const Partner = () => {
  return (
    <main>
      <SubHeroSection
        image={partnerHero}
        title="Partner With Us"
        subtitle="Together, we can create lasting change in our communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Partner", href: "/partner" },
        ]}
      />
      <PartnershipMissionSection />
      <PartnerBenefits />
      <PartnershipModels />
      <PartnersDisplay />
      <ImpactSection
        title="Our Impact"
        subtitle="See how our partnerships are transforming lives"
        stats={partnerImpactStats}
      />
      <PartnershipProcess />
      <PartnershipTestimonials testimonials={partnerTestimonialsData} />
      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Join us in our mission to uplift communities through strategic partnerships."
        buttonOneText="Start Your Partnership Journey"
        buttonOneLink="/support/partner#partner-form"
      />
    </main>
  );
};

export default Partner;
