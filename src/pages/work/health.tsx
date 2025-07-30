import SubHeroSection from "@/lib/components/common/SubHeroSection";
import HealthHero from "@/assets/images/work/health/health-hero.png";
import HealthImage from "@/assets/images/work/health/health-image.jpg";
import HealthMissionSection from "@/lib/components/Work/health/HealthMissionSection";
import ImageSection from "@/lib/components/Work/ImageSection";
import Quote from "@/lib/components/Work/Quote";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import {
  healthFaqItems,
  healthFocusAreas,
  healthProjects,
  healthStatsData,
  healthTestimonials,
} from "@/lib/constants/work/health";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import ProjectsSection from "@/lib/components/Work/ProjectSection";
import FAQSection from "@/lib/components/Work/FAQSection";
import TestimonialsSection from "@/lib/components/Work/TestimonialsSection";

const Health = () => {
  return (
    <div>
      <SubHeroSection
        title="Health Initiatives"
        subtitle="Empowering communities through accessible healthcare and wellness programs"
        image={HealthHero}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Do", href: "/work" },
          { label: "Health" },
        ]}
      />
      <HealthMissionSection />
      <ImageSection
        imageSrc={HealthImage}
        imageDescription="Annual health fair providing free medical services to the community"
      />
      <Quote
        content="When it comes to global health, there is no 'them'... only 'us"
        name="Global Health Council"
      />
      <KeyFocusAreas focusAreas={healthFocusAreas} />
      <ImpactSection stats={healthStatsData} />
      <TestimonialsSection
        testimonials={healthTestimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold"
      />
      <ProjectsSection
        projects={healthProjects}
        title="Projects"
        subtitle="Transforming communities through sustainable health initiatives"
        tagClass="bg-green-100 text-green-800"
      />
      <FAQSection
        items={healthFaqItems}
        title="FAQs"
        subtitle="Answers to common questions about our health initiatives"
        itemClass="shadow-sm"
        defaultOpenId={1}
      />
    </div>
  );
};

export default Health;
