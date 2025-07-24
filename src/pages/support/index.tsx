import SubHeroSection from "@/lib/components/common/SubHeroSection";
import supportHero from "@/assets/images/support/index/support-hero.jpg";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import {
  supportFaqData,
  supportImpactStats,
} from "@/lib/constants/support/support";
import SupportPathwaysGrid from "@/lib/components/support/index/SupportPathwaysGrid";
import DonationImpactCalculator from "@/lib/components/support/index/DonationImpactCalculator";
import { DonorRecognition } from "@/lib/components/support/index/DonorRecognition";
import { PaymentOptionsSection } from "@/lib/components/support/index/PaymentOptionsSection";
import { VolunteerSpotlight } from "@/lib/components/support/index/VolunteerSpotlight";
import { PartnershipTiers } from "@/lib/components/support/index/PartnershipTiers";
import FAQSection from "@/lib/components/Work/FAQSection";
import CTASection from "@/lib/components/Home/CTASection";
const Support = () => {
  return (
    <main>
      <SubHeroSection
        image={supportHero}
        title="Your Support Changes Lives"
        subtitle="Every contribution helps us empower more communities across Nigeria "
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
        ]}
      />
      <ImpactSection
        title="Impact From All Support Points"
        subtitle="Feel The Metrics of All the Efforts and Contributions We Recieved"
        stats={supportImpactStats}
      />
      <SupportPathwaysGrid />
      <DonationImpactCalculator />
      <DonorRecognition />
      <PaymentOptionsSection />
      <VolunteerSpotlight />
      <PartnershipTiers />
      <FAQSection
        title={"Support FAQs"}
        subtitle="Addressing all logistical concerns"
        items={supportFaqData}
      />
      <CTASection />
    </main>
  );
};

export default Support;
