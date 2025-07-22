import SubHeroSection from "@/lib/components/common/SubHeroSection";
import MediaHero from "@/assets/images/contact/media/media-hero.jpg";
import PressContactSection from "@/lib/components/Contact/media/PressContactSection";
import PressKitSection from "@/lib/components/Contact/media/PressKitSection";
import MediaSpotlight from "@/lib/components/Contact/media/MediaSpotlight";
import ThreePanelNavigation from "@/lib/components/Contact/media/ThreePanelNavigation";
import EmergencyMediaProtocol from "@/lib/components/Contact/media/EmergencyMediaProtocol";

const Media = () => {
  return (
    <div>
      <SubHeroSection
        title="Media Resources"
        subtitle="Access press materials, expert insights, and story opportunities"
        image={MediaHero}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Media Inquiries" },
        ]}
      />
      <PressContactSection />
      <PressKitSection />
      <MediaSpotlight />
      <EmergencyMediaProtocol />
      <ThreePanelNavigation />
    </div>
  );
};

export default Media;
