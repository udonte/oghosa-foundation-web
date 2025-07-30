import SubHeroSection from "@/lib/components/common/SubHeroSection";
import skills1 from "@/assets/images/work/skills/skills1.jpg";
import skills3 from "@/assets/images/work/skills/skills3.jpg";
import SkillsMissionSection from "@/lib/components/Work/skills/SkillsMissionSection";
import ImageSection from "@/lib/components/Work/ImageSection";
import Quote from "@/lib/components/Work/Quote";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import {
  skillsFaqItems,
  skillsFocusAreas,
  skillsProjects,
  skillsStatsData,
  skillsTestimonials,
} from "@/lib/constants/work/skills";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import ProjectsSection from "@/lib/components/Work/ProjectSection";
import TestimonialsSection from "@/lib/components/Work/TestimonialsSection";
import FAQSection from "@/lib/components/Work/FAQSection";

const SkillsTraining = () => {
  return (
    <div>
      {/* Hero */}
      <SubHeroSection
        title="Skills Training"
        subtitle="Empowering communities through vocational skills and entrepreneurship"
        image={skills3}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Do", href: "/work" },
          { label: "Skills Training" },
        ]}
      />
      <SkillsMissionSection />
      <ImageSection
        imageSrc={skills1}
        imageDescription="Phone Repair Training for Youths at Computer Village, Ikeja "
      />
      <Quote
        content="What we’ve built isn’t just training iniatives – it’s launchpads for economic freedom. Every graduate isn’t just skilled; they’re equipped to rewrite their family’s future."
        name="Dr. Adebayo Johnson"
        position="Skills Development Director"
      />
      <KeyFocusAreas focusAreas={skillsFocusAreas} />
      <ImpactSection stats={skillsStatsData} />
      <ProjectsSection
        projects={skillsProjects}
        title="Projects"
        subtitle="Transforming communities through sustainable initiatives"
        tagClass="bg-green-100 text-green-800"
      />
      <TestimonialsSection
        testimonials={skillsTestimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold"
      />
      <FAQSection
        items={skillsFaqItems}
        title="FAQs"
        subtitle="Common questions about our skills training programs"
        itemClass="shadow-sm"
        defaultOpenId={1}
      />
    </div>
  );
};

export default SkillsTraining;
