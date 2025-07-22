import SubHeroSection from "@/lib/components/common/SubHeroSection";
import impactHero from "@/assets/images/locations/impacts/impact-hero.jpg";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import { impactStats } from "@/lib/constants/locations/impact";
import { FeaturedImpactStories } from "@/lib/components/locations/impact/FeaturedImpactStories";
import { GeographicImpactMap } from "@/lib/components/locations/impact/GeographicImpactMap";
import PartnerShowcase from "@/lib/components/Home/PartnerShowcase";
import CTASection from "@/lib/components/Home/CTASection";

const Impact = () => {
  return (
    <main>
      <SubHeroSection
        image={impactHero}
        title="Transforming Lives, One Community at a Time"
        subtitle="Reached 50,000+ lives across 10 communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Work", href: "/locations" },
          { label: "Impact Areas & Stories" },
        ]}
      />
      <ImpactSection
        stats={impactStats}
        title="Community Impact"
        subtitle="Celebrating the achievements and milestones of our beneficiaries"
      />
      <FeaturedImpactStories />
      <GeographicImpactMap />
      <PartnerShowcase />
      <CTASection />
    </main>
  );
};

export default Impact;
