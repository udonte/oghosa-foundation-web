import EducationHero from "@/assets/images/education-program1.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import MissionSection from "@/lib/components/Work/education/EducationMissionSection";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import ProjectsSection from "@/lib/components/Work/ProjectSection";
import TestimonialsSection from "@/lib/components/Work/TestimonialsSection";
import GallerySection from "@/lib/components/Work/GallerySection";
import FAQSection from "@/lib/components/Work/FAQSection";
import Quote from "@/lib/components/Work/Quote";
import ImageSection from "@/lib/components/Work/ImageSection";
import {
  faqItems,
  focusAreas,
  galleryItems,
  impactStatsData,
  projects,
  testimonials,
} from "@/lib/constants/work/education";

const Education = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <SubHeroSection
        title="Education Programs"
        subtitle="Breaking cycles of poverty through quality education and learning opportunities"
        image={EducationHero}
      />

      <MissionSection />
      <ImageSection
        imageSrc={EducationHero}
        imageDescription="Free Education program for kids at Kano State"
      />
      <Quote
        content="When you educate a child, you don't just change their test
            scores—you change their entire trajectory in life. I've seen
            firsthand how education can turn hopelessness into possibility."
        name="Dr. Amina Yusuf"
        position="Education Director"
      />
      <KeyFocusAreas focusAreas={focusAreas} />
      <ImpactSection stats={impactStatsData} />

      <ProjectsSection
        projects={projects}
        title="Projects"
        subtitle="Transforming communities through sustainable initiatives"
        tagClass="bg-green-100 text-green-800"
      />

      <TestimonialsSection
        testimonials={testimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold"
      />
      <GallerySection
        items={galleryItems}
        title="Work in Action"
        subtitle="See the impact through these moments"
        columns={2}
        gap="gap-6"
        imageHeight="h-72"
      />
      <FAQSection
        items={faqItems}
        title="FAQs"
        subtitle="Answers to common questions about our education programs"
        itemClass="shadow-sm"
        defaultOpenId={1}
      />
    </div>
  );
};

export default Education;
