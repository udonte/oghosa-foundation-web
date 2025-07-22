import SubHeroSection from "@/lib/components/common/SubHeroSection";
import galleryHero from "@/assets/images/locations/gallery/gallery-hero.jpg";
import GallerySection from "@/lib/components/locations/gallery/GallerySection";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import { galleryImpactStats } from "@/lib/constants/locations/gallery";
import CTASection from "@/lib/components/Home/CTASection";

const GalleryHighlights = () => {
  return (
    <main>
      <SubHeroSection
        image={galleryHero}
        title=" Gallery Highlights"
        subtitle="Witness the impact of our work across various locations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: "Gallery Highlights" },
        ]}
      />
      <GallerySection />
      <ImpactSection stats={galleryImpactStats} />
      <CTASection />
    </main>
  );
};

export default GalleryHighlights;
