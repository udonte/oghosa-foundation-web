import SubHeroSection from "@/lib/components/common/SubHeroSection";
import OutreachMissionSection from "@/lib/components/Work/outreach/OutReachMissionSection";
import OutreachHero from "@/assets/images/work/outreach/outreach1.jpg";
import OutreachImage from "@/assets/images/work/outreach/outreach2.jpg";
import ImageSection from "@/lib/components/Work/ImageSection";
import Quote from "@/lib/components/Work/Quote";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import {
  outreachFaqItems,
  outreachFocusAreas,
  outreachProjects,
  outreachStatsData,
  outreachTestimonials,
} from "@/lib/constants/work/outreach";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import ProjectsSection from "@/lib/components/Work/ProjectSection";
import TestimonialsSection from "@/lib/components/Work/TestimonialsSection";
import FAQSection from "@/lib/components/Work/FAQSection";

const Outreach = () => {
  return (
    <div>
      <SubHeroSection
        title=" Outreach Programs"
        subtitle="Empowering communities through compassionate outreach and support"
        image={OutreachHero}
      />
      <OutreachMissionSection />
      <ImageSection
        imageSrc={OutreachImage}
        imageDescription="Community Outreach Program in Okokomaiko, Lagos, Nigeria"
      />
      <Quote
        content="When we reach out to those in need, we don't just provide aid—we restore dignity and hope. Our outreach programs are a testament to the power of community and compassion. "
        name="Dr. Ngozi Okafor"
        position="Outreach Director"
      />
      <KeyFocusAreas focusAreas={outreachFocusAreas} />
      <ImpactSection
        subtitle="Our outreach programs have reached over 100,000 people across Nigeria, providing essential support and resources to those in need."
        stats={outreachStatsData}
      />
      <ProjectsSection
        projects={outreachProjects}
        title="Projects"
        subtitle="Transforming communities through sustainable initiatives"
        tagClass="bg-green-100 text-green-800"
      />
      <TestimonialsSection
        testimonials={outreachTestimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold"
      />
      <FAQSection
        items={outreachFaqItems}
        title="FAQs"
        subtitle="Common questions about our outreach programs"
        itemClass="shadow-sm"
        defaultOpenId={1}
      />
    </div>
  );
};

export default Outreach;
