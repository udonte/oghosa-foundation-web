import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBook,
  FiUsers,
  FiAward,
  FiCalendar,
  FiMapPin,
  FiDroplet,
  FiPackage,
} from "react-icons/fi";
import EducationHero from "@/assets/images/education-program1.jpg";
import ProjectImage1 from "@/assets/images/education-program1.jpg";
import ProjectImage2 from "@/assets/images/education-program1.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import EducationDescription from "@/lib/components/Work/education/Quote";
import EduGallery1 from "@/assets/images/work/programs/work1.jpg";
import EduGallery2 from "@/assets/images/work/programs/work2.jpg";
import EduGallery3 from "@/assets/images/work/programs/work3.jpg";
import EduGallery4 from "@/assets/images/work/programs/work4.jpg";
import EduGallery5 from "@/assets/images/work/programs/work5.jpg";
import EduGallery6 from "@/assets/images/work/programs/work6.jpg";

import MissionSection from "@/lib/components/Work/MissionSection";
import KeyFocusAreas from "@/lib/components/Work/KeyFocusAreas";
import ImpactSection from "@/lib/components/ImpactSection";
import ProjectsSection from "@/lib/components/ProjectsSection";
import VideoTestimonials from "@/lib/components/Home/VidTestimonialSection";
import TestimonialsSection from "@/lib/components/TestimonialsSection";
import CTASection from "@/lib/components/Home/CTASection";
import GallerySection from "@/lib/components/GallerySection";
import FAQSection from "@/lib/components/FAQSection";

const Education = () => {
  const impactStatsData = [
    {
      id: 1,
      value: 100,
      label: "Digital Literacy Initiatives",
      icon: <FiUsers className="stat-icon" />,
      suffix: "+",
    },
    {
      id: 2,
      value: 58,
      label: "Schools Partnered",
      icon: <FiMapPin className="stat-icon" />,
      suffix: "+",
    },
    {
      id: 3,
      value: 632,
      label: "Scholarships Awarded",
      icon: <FiDroplet className="stat-icon" />,
      suffix: "+",
    },
    {
      id: 4,
      value: 3,
      label: "Increase in college enrollment in partner communities",
      icon: <FiPackage className="stat-icon" />,
      suffix: "x",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "School Supplies Initiative",
      description: "Providing teaching supplies to in underserved communities",
      location: "Northern Nigeria",
      date: "2022 - Present",
      imageUrl: ProjectImage1,
      tags: ["Teaching", "School"],
      status: "ongoing",
    },
    {
      id: 2,
      title: "Coding for Kids",
      description:
        "Empowering children with digital skills through coding workshops",
      location: "Eastern Region",
      date: "2020 - 2021",
      imageUrl: ProjectImage2,
      tags: ["Technology", "Education"],
      status: "completed",
    },
    {
      id: 3,
      title: "Teacher Training Program",
      description:
        "Professional development workshops for teachers in rural areas",
      location: "Southern Nigeria",
      date: "2021 - 2022",
      imageUrl: ProjectImage1,
      tags: ["Training", "Education"],
      status: "completed",
    },
    {
      id: 4,
      title: "Community Learning Centers",
      date: "2020 - Present",
      location: "5 states",
      imageUrl: ProjectImage2,
      tags: ["Community", "Education"],
      status: "ongoing",
      description:
        "Establishing safe learning spaces in underserved communities with libraries and computer labs",
    },
    {
      id: 5,
      title: "Back-to-School Drives",
      date: "Annually since 2018",
      location: "Nationwide",
      imageUrl: ProjectImage1,
      tags: ["Education", "Community"],
      status: "ongoing",
      description:
        "Providing school uniforms, bags, and supplies to children in need before each school date",
    },
    {
      id: 6,
      title: "E-learning Program",
      date: "2021 - Present",
      location: "10 schools",
      imageUrl: ProjectImage2,
      tags: ["Technology", "Education"],
      status: "ongoing",
      description:
        "Digital education initiative providing tablets and online learning resources",
    },
    {
      id: 7,
      title: "School Renovation Projects",
      date: "2019 - 2022",
      location: "8 schools",
      imageUrl: ProjectImage1,
      tags: ["Infrastructure", "Education"],
      status: "completed",
      description:
        "Complete renovation of dilapidated school buildings with modern facilities",
    },
  ];

  const testimonials = [
    {
      id: 1,
      image: "/images/testimonial1.jpg",
      name: "Amina Mohammed",
      role: "Parent, Lagos Community School",
      quote:
        "The education program transformed my daughter's life. She now dreams of becoming a doctor thanks to the quality teaching she received.",
    },
    {
      id: 2,
      image: "/images/testimonial2.jpg",
      name: "David Okafor",
      role: "Community Leader",
      quote:
        "We've seen a 60% increase in school attendance since Oghosa started their programs in our village. The children are thriving.",
    },
    // Add more testimonials...
  ];

  const galleryItems = [
    {
      id: 1,
      image: EduGallery1,
      description: "Students participating in our science program",
      altText: "Students conducting experiments",
    },
    {
      id: 2,
      image: EduGallery2,
      description: "Community health screening event",
    },
    {
      id: 3,
      image: EduGallery3,
      description: "Teachers attending a professional development workshop",
    },
    {
      id: 4,
      image: EduGallery4,
      description: "Students receiving school supplies",
    },
    {
      id: 5,
      image: EduGallery5,
      description: "Digital literacy training in progress",
    },
    {
      id: 6,
      image: EduGallery6,
      description: "Community learning center inauguration",
    },
  ];

  const faqItems = [
    {
      id: 1,
      question: "What age groups do your education programs serve?",
      answer:
        "Our programs serve children and youth aged 5-18 years old, with specialized curricula designed for different developmental stages. We have early childhood programs (5-8), primary education (9-12), and secondary programs (13-18).",
    },
    {
      id: 2,
      question:
        "How do you ensure quality education in underserved communities?",
      answer:
        "We implement a three-pillar approach: 1) Training local teachers through our professional development program, 2) Providing standardized learning materials aligned with national curricula, and 3) Regular monitoring and evaluation by our education specialists.",
    },
    {
      id: 3,
      question: "Are your programs aligned with the national curriculum?",
      answer:
        "Yes, all our educational content is developed in collaboration with education experts and aligned with the national curriculum. We supplement core subjects with life skills and digital literacy training to prepare students for the modern world.",
    },
    {
      id: 4,
      question: "Do you provide scholarships or financial aid for students?",
      answer:
        "We offer need-based scholarships covering tuition, uniforms, and learning materials for exceptional students from low-income families. Applications are reviewed twice annually by our scholarship committee.",
    },
    {
      id: 5,
      question: "How do you measure the impact of your education programs?",
      answer:
        "We track multiple metrics including: student attendance rates, academic performance on standardized tests, teacher competency assessments, school completion rates, and post-program success indicators like higher education enrollment.",
    },
    {
      id: 6,
      question: "What subjects are covered in your programs?",
      answer:
        "Core subjects include Mathematics, English, Sciences, and Social Studies. We also offer vocational training, computer literacy, financial education, and leadership development for older students.",
    },
    {
      id: 7,
      question: "How can I volunteer as a teacher in your programs?",
      answer:
        "We welcome qualified educators to join our volunteer corps. Requirements include a teaching certification, 2+ years experience, and commitment to a minimum 6-month placement. Visit our Volunteer page to apply.",
    },
    {
      id: 8,
      question: "Do you provide meals or nutrition support for students?",
      answer:
        "Yes, all our school programs include a daily nutritious meal through our School Feeding Initiative. We also conduct regular health check-ups and nutrition education for students and parents.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <SubHeroSection
        title="Education Programs"
        subtitle="Breaking cycles of poverty through quality education and learning opportunities"
        image={EducationHero}
      />

      <MissionSection />
      <EducationDescription />
      <KeyFocusAreas />
      <ImpactSection stats={impactStatsData} />
      <ProjectsSection
        projects={projects}
        title="Our Projects"
        subtitle="Transforming communities through sustainable initiatives"
        tagClass="bg-green-100 text-green-800"
      />

      <TestimonialsSection
        testimonials={testimonials}
        title="Transforming Lives"
        subtitle="Hear from those we've impacted directly"
        rotationInterval={4000}
        cardClass="md:border-l-4 border-oghosa-gold" // Additional styling
      />
      <CTASection />
      <GallerySection
        items={galleryItems}
        title="Our Work in Action"
        subtitle="See the impact through these moments"
        columns={3}
        gap="gap-6"
        imageHeight="h-72"
        containerClass=""
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
