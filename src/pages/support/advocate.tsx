import SubHeroSection from "@/lib/components/common/SubHeroSection";
import advocateHero from "@/assets/images/support/advocate/advocate-hero.jpg";
import AdvocacyMissionSection from "@/lib/components/support/advocacy/AdvocacyMissionSection";
import AdvocacyReasonsSection from "@/lib/components/support/advocacy/AdvocacyReasonSection";
import AdvocacyMethodsSection from "@/lib/components/support/advocacy/AdvocacyMethodsSections";
import CTASection from "@/lib/components/Home/CTASection";
import PartnerShowcase from "@/lib/components/Home/PartnerShowcase";
const Advocate = () => {
  return (
    <main>
      <SubHeroSection
        image={advocateHero}
        title="Amplify Your Voice"
        subtitle="Join our movement to drive systemic change through policy and public awareness"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "advocate", href: "/advocate" },
        ]}
      />
      <AdvocacyMissionSection />
      <AdvocacyReasonsSection />
      <AdvocacyMethodsSection />
      <PartnerShowcase />
      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Your voice matters. Join us in advocating for a better future."
        buttonOneText="Advocate Now"
        buttonOneLink="/support/advocate"
        buttonTwoText="Share Your Story"
        buttonTwoLink="/contact"
      />
    </main>
  );
};

export default Advocate;
