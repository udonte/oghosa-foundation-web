import SubHeroSection from "@/lib/components/common/SubHeroSection";
import donationHero from "@/assets/images/support/donation/donation-hero.jpg";
import ImpactVisualization from "@/lib/components/support/donate/ImpactVisualization";
import TransparencyFinancials from "@/lib/components/support/donate/TransparencyFinancials";
import DonationMethods from "@/lib/components/support/donate/DonationMethods";
import CorporateGiving from "@/lib/components/support/donate/CorporateGiving";
import FAQSection from "@/lib/components/Work/FAQSection";
import { donationFAQs } from "@/lib/constants/support/support";
import CTASection from "@/lib/components/Home/CTASection";
import DonationMissionSection from "@/lib/components/support/donate/DonationMissionSection";

const Donation = () => {
  return (
    <main>
      <SubHeroSection
        title="Change a Life Today"
        subtitle="Your donation provides education, meals, and healthcare to underserved communities"
        image={donationHero}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Donate", href: "/donate" },
        ]}
      />
      <DonationMissionSection />
      <ImpactVisualization />
      <DonationMethods />
      <TransparencyFinancials />
      <CorporateGiving />
      <FAQSection
        title="Donation FAQs"
        subtitle="Common questions about our donation process"
        items={donationFAQs}
      />
      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Join us in transforming lives through your generous support."
        buttonOneText="Donate with your Card"
        buttonOneLink="/support/donate#"
      />
    </main>
  );
};

export default Donation;
