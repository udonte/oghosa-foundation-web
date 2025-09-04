import Team from "@/assets/images/team.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import ExecutiveTeam from "@/lib/components/About/ExecutiveTeam";
import AdvisorySection from "@/lib/components/About/AdvisorySection";
import ValuesGovernanceSection from "@/lib/components/About/ValuesGovernanceSection";
import FounderMessage from "@/lib/components/About/FounderMessage";

const Leadership = () => {
  return (
    <main className=" bg-gray-50">
      <SubHeroSection
        image={Team}
        title="Guided by Visionary Leadership"
        subtitle="Meet the passionate individuals driving OGF's mission forward"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/about" },
          { label: "Our Leadership", href: "/leadership" },
        ]}
      />
      <ExecutiveTeam />
      <AdvisorySection />
      <ValuesGovernanceSection />
      <FounderMessage />
    </main>
  );
};

export default Leadership;
