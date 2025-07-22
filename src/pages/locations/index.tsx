import NigeriaMap from "@/assets/images/locations/index/nigeria.jpg"; // Adjust import path as needed
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import CTASection from "@/lib/components/Home/CTASection";
import CommunitySpotlights from "@/lib/components/locations/index/CommunitySpotlights";
import ThreePanelNavigation from "@/lib/components/locations/index/ThreePanelNavigation";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import { communityStats } from "@/lib/constants/locations/locations";

const Locations = () => {
  return (
    <div>
      <SubHeroSection
        title="Rooted in Every Community"
        subtitle=" Our impact spans across Nigeria, with a focus on empowering local communities through sustainable initiatives."
        image={NigeriaMap}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Work", href: "/locations" },
        ]}
      />
      <ThreePanelNavigation />
      <CommunitySpotlights />
      <ImpactSection
        title="Community Impact"
        subtitle=" We measure our success by the lives transformed and communities uplifted. Our impact is felt in every corner of Nigeria, from rural villages to urban centers."
        stats={communityStats}
      />
      <CTASection
        title="Want us to expand to your community?"
        subtitle="Every action—whether donating, volunteering, or sharing our mission—helps build a future where compassion creates lasting change."
        buttonOneText="Nominate Your Area"
        buttonOneLink="/advocate"
        buttonTwoText="Fund a New Location"
        buttonTwoLink="/donate"
      />
    </div>
  );
};

export default Locations;
