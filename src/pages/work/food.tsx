import SubHeroSection from "@/lib/components/common/SubHeroSection";
import FoodMissionSection from "@/lib/components/Work/food/FoodMissionSection";
// import FoodHero from "@/assets/images/work/food/food1.jpg";
import Food1 from "@/assets/images/work/food/food2.jpg";
import Food10 from "@/assets/images/work/food/food10.jpg";
import ImageSection from "@/lib/components/Work/ImageSection";
import Quote from "@/lib/components/Work/Quote";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import {
  foodSecurityFaqItems,
  foodSecurityFocusAreas,
  foodSecurityProjects,
  foodSecurityStatsData,
  foodSecurityTestimonials,
} from "@/lib/constants/work/food";
import ImpactSection from "@/lib/components/Work/ImpactSection";
import ProjectsSection from "@/lib/components/Work/ProjectSection";
import TestimonialsSection from "@/lib/components/Work/TestimonialsSection";
import FAQSection from "@/lib/components/Work/FAQSection";

const Food = () => {
  return (
    <div>
      <SubHeroSection
        title="Food Security"
        subtitle="Empowering communities through sustainable food initiatives"
        image={Food1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Do", href: "/work" },
          { label: "Food Security" },
        ]}
      />
      <FoodMissionSection />
      <ImageSection
        imageSrc={Food10}
        imageDescription="Food distribution program at Oshodi, providing meals to children in need."
      />
      <Quote
        content="Food is not just about sustenance; it's about dignity, health, and community. Our programs aim to ensure that no child goes to bed hungry."
        name="Samuel Oghosa"
        position="Food Planning Director"
      />
      <KeyFocusAreas focusAreas={foodSecurityFocusAreas} />
      <ImpactSection stats={foodSecurityStatsData} />
      <ProjectsSection
        projects={foodSecurityProjects}
        title="Projects"
        subtitle="Transforming communities through sustainable initiatives"
        tagClass="bg-green-100 text-green-800"
      />
      <TestimonialsSection
        testimonials={foodSecurityTestimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold"
      />
      <FAQSection
        items={foodSecurityFaqItems}
        title="FAQs"
        subtitle="Common questions about our food security initiatives"
        itemClass="shadow-sm"
        defaultOpenId={1}
      />
    </div>
  );
};

export default Food;
