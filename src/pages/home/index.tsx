import HeroSection from "@/lib/components/Home/HeroSection";
import Image1 from "@/assets/images/pexels-mjombadii-1446504.jpg";
import Image2 from "@/assets/images/moment5.jpg";
import Image3 from "@/assets/images/pexels-victor-chijioke-350220031-20054482.jpg";
import StatsSection from "@/lib/components/Home/StatSection";
import ProgramsSection from "@/lib/components/Home/ProgramSection";
import FounderSection from "@/lib/components/Home/FounderSection";
import VideoTestimonials from "@/lib/components/Home/VidTestimonialSection";
import PartnerShowcase from "@/lib/components/Home/PartnerShowcase";
import EventSection from "@/lib/components/Home/EventSection";
import CTASection from "@/lib/components/Home/CTASection";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: Image1,
      title: "Empowering Through Education",
      subtitle:
        "Providing scholarships and learning resources to underserved communities",
      ctaText: "Support a Child",
      ctaLink: "/donate",
    },
    {
      id: 2,
      image: Image2,
      title: "Fighting Sickle Cell Disease",
      subtitle:
        "Awareness campaigns and free medical support for affected families",
      ctaText: "Join Our Cause",
      ctaLink: "/volunteer",
    },
    {
      id: 3,
      image: Image3,
      title: "Ensuring Food Security",
      subtitle: "Sustainable agriculture programs to combat hunger",
      ctaText: "Donate Now",
      ctaLink: "/food-drive",
    },
  ];

  return (
    <main className="">
      <HeroSection slides={slides} />
      <StatsSection />
      <ProgramsSection />
      <FounderSection />
      <VideoTestimonials />
      <PartnerShowcase />
      <EventSection />
      <CTASection />
    </main>
  );
};

export default Home;
