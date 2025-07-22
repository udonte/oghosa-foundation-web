import SubHeroSection from "@/lib/components/common/SubHeroSection";
import supportHero from "@/assets/images/support/index/support-hero.jpg";
const Support = () => {
  return (
    <main>
      <SubHeroSection
        image={supportHero}
        title="Transforming Lives, One Community at a Time"
        subtitle="Reached 50,000+ lives across 10 communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
        ]}
      />
    </main>
  );
};

export default Support;
