import { FiPackage } from 'react-icons/fi';
import { FiDroplet } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { FAQItem, FocusArea,   GalleryItems,   Projects,   StatItem, Testimonials } from '@/lib/types/work';
import { FiUsers } from 'react-icons/fi';
import { FaChalkboardTeacher, FaFemale, FaGraduationCap, FaLaptop, FaUsers } from 'react-icons/fa';
import { MdScience } from 'react-icons/md';
import EduGallery1 from "@/assets/images/work/education/school-supplies.jpg";
import EduGallery2 from "@/assets/images/work/education/coding.jpg";
import EduGallery3 from "@/assets/images/work/education/teacher-training.png";
import EduGallery4 from "@/assets/images/work/education/learning-center.png";
import EduGallery5 from "@/assets/images/work/education/back-to-school.jpg";
import EduGallery6 from "@/assets/images/work/education/school-renovation.jpg";

  
  export const eduStatsData: StatItem[] = [
    {
      id: 1,
      value: 100,
      label: "Digital Literacy Initiatives",
      icon: FiUsers,
      suffix: "+",
    },
    {
      id: 2,
      value: 58,
      label: "Schools Partnered",
      icon: FiMapPin,
      suffix: "+",
    },
    {
      id: 3,
      value: 632,
      label: "Scholarships Awarded",
      icon: FiDroplet,
      suffix: "+",
    },
    {
      id: 4,
      value: 3,
      label: "Increase in college enrollment in partner communities",
      icon: FiPackage,
      suffix: "x",
    },
  ];

  export const educationFocusAreas: FocusArea[] = [
    {
      icon: FaGraduationCap,
      title: "Scholarship Programs",
      description:
        "Comprehensive support for deserving students at all education levels",
      initiatives: [
        "Full tuition coverage",
        "Mentorship pairing",
        "Career readiness workshops",
        "Alumni network",
      ],
    },
    {
      icon: FaLaptop,
      title: "Digital Literacy",
      description: "Bridging the technology gap in underserved communities",
      initiatives: [
        "Computer labs setup",
        "Coding bootcamps",
        "E-learning platforms",
        "Digital skills certification",
      ],
    },
    {
      icon: FaChalkboardTeacher,
      title: "Teacher Development",
      description: "Professional growth programs for educators",
      initiatives: [
        "Pedagogy workshops",
        "STEM training",
        "Leadership development",
        "Classroom resources",
      ],
    },
    {
      icon: FaFemale,
      title: "Girls' Education",
      description: "Special initiatives to support female students",
      initiatives: [
        "STEM scholarships",
        "Menstrual health programs",
        "Safety training",
        "Women mentors",
      ],
    },
    {
      icon: FaUsers,
      title: "Adult Education",
      description: "Literacy and vocational training programs",
      initiatives: [
        "Basic literacy classes",
        "Financial literacy",
        "Vocational certification",
        "Small business training",
      ],
    },
    {
      icon: MdScience,
      title: "STEM Education",
      description: "Advancing science and technology education",
      initiatives: [
        "Robotics clubs",
        "Science equipment grants",
        "University partnerships",
        "Research opportunities",
      ],
    },
  ];

  export const galleryItems: GalleryItems[] = [
    {
      id: 1,
      image: EduGallery1,
      description: "Students participating in our science program",
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

  export const eduTestimonials: Testimonials[] = [
    {
      id: 1,
      image: EduGallery1,
      name: "Amina Mohammed",
      role: "Parent, Lagos Community School",
      quote:
        "The education program transformed my daughter's life. She now dreams of becoming a doctor thanks to the quality teaching she received.",
    },
    {
      id: 2,
      image: EduGallery2,
      name: "David Okafor",
      role: "Community Leader",
      quote:
        "We've seen a 60% increase in school attendance since Oghosa started their programs in our village. The children are thriving.",
    },
  ];

  export const eduProjects: Projects[] = [
    {
      id: 1,
      title: "School Supplies Initiative",
      description: "Providing teaching supplies to in underserved communities",
      location: "Northern Nigeria",
      date: "2022 - Present",
      imageUrl: EduGallery1,
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
      imageUrl: EduGallery2,
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
      imageUrl: EduGallery3,
      tags: ["Training", "Education"],
      status: "completed",
    },
    {
      id: 4,
      title: "Community Learning Centers",
      date: "2020 - Present",
      location: "5 states",
      imageUrl: EduGallery4,
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
      imageUrl: EduGallery5,
      tags: ["Education", "Community"],
      status: "ongoing",
      description:
        "Providing school uniforms, bags, and supplies to children in need before each school date",
    },
    {
      id: 7,
      title: "School Renovation Projects",
      date: "2019 - 2022",
      location: "8 schools",
      imageUrl: EduGallery6,
      tags: ["Infrastructure", "Education"],
      status: "completed",
      description:
        "Complete renovation of dilapidated school buildings with modern facilities",
    },
  ];

  export const eduFaqItems: FAQItem[] = [
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