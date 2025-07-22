import SubHeroSection from "@/lib/components/common/SubHeroSection";
import volunteerHero from "@/assets/images/support/volunteer/volunteer-hero.jpg";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import {
  PartnershipTestimonialsData,
  volunteerFAQs,
  volunteerStatsData,
} from "@/lib/constants/support/support";
import WhyVolunteer from "@/lib/components/support/volunteer/WhyVolunteer";
import VolunteerOpportunities from "@/lib/components/support/volunteer/VolunteerOpportunities";
import FAQSection from "@/lib/components/Work/FAQSection";
import VolunteerMissionSection from "@/lib/components/support/volunteer/VolunteerMissionSection";
import PartnershipTestimonials from "@/lib/components/support/PartnershipTestimonials";

const Volunteer = () => {
  return (
    <main>
      <SubHeroSection
        image={volunteerHero}
        title="Volunteer With Us"
        subtitle="Join our mission to empower communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support", href: "/support" },
          { label: "Volunteer", href: "/volunteer" },
        ]}
      />
      <VolunteerMissionSection />
      <ImpactSection
        stats={volunteerStatsData}
        title="Our Volunteer Impact"
        subtitle="See how our volunteers are making a difference"
      />
      <WhyVolunteer />
      <VolunteerOpportunities />
      <PartnershipTestimonials testimonials={PartnershipTestimonialsData} />
      <FAQSection
        title="Volunteer FAQs"
        subtitle="Common questions about volunteering with us"
        items={volunteerFAQs}
      />
    </main>
  );
};

export default Volunteer;
