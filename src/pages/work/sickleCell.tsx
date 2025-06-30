import SubHeroSection from "@/lib/components/common/SubHeroSection";
import SickelCellHero from "@/assets/images/work/sickel-cell/sickel-cell1.jpg";
import SickleMissionSection from "@/lib/components/Work/sickle-cell/SickelCellMissionSection";
import ImageSection from "@/lib/components/Work/ImageSection";
import sickleImage from "@/assets/images/work/sickel-cell/sickle1.jpg";
import Quote from "@/lib/components/Work/Quote";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import {
  sickleCellFaqItems,
  sickleCellFocusAreas,
  sickleCellProjects,
  sickleCellStatsData,
  sickleCellTestimonials,
} from "@/lib/constants/work/sickleCell";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import ProjectsSection from "@/lib/components/Work/ProjectSection";
import TestimonialsSection from "@/lib/components/Work/TestimonialsSection";
import FAQSection from "@/lib/components/Work/FAQSection";

const SickleCell = () => {
  return (
    <div>
      <SubHeroSection
        title="Sickle Cell Support"
        subtitle="Care, education, and community for those affected by sickle cell disease"
        image={SickelCellHero}
      />
      <SickleMissionSection />
      <ImageSection
        imageSrc={sickleImage}
        imageDescription="Support campaign at Edo State for kids living with Sickle Cell Disease "
      />
      <Quote
        content="When I couldn't walk from the pain, I dreamed of walking for others. Now this foundation will be my legs."
        name="Oghosa Godson"
      />
      <KeyFocusAreas focusAreas={sickleCellFocusAreas} />
      <ImpactSection stats={sickleCellStatsData} />
      <ProjectsSection
        projects={sickleCellProjects}
        title="Projects"
        subtitle="Support initiatives towards Sickle Cell"
        tagClass="bg-green-100 text-green-800"
      />
      <TestimonialsSection
        testimonials={sickleCellTestimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold"
      />
      <FAQSection
        items={sickleCellFaqItems}
        title="FAQs"
        subtitle="Answers to common questions about our education programs"
        itemClass="shadow-sm"
        defaultOpenId={1}
      />
    </div>
  );
};

export default SickleCell;
