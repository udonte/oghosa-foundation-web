import { StatItem } from "@/lib/types/work";
import { FiUsers, FiMapPin, FiClock, FiHeart } from "react-icons/fi";
import { 
  FaMapMarkerAlt, 
  FaUsers, 
  FaSchool, 
  FaHandsHelping,
  FaHeartbeat,
  FaGraduationCap,
  FaLightbulb,
  FaSeedling
} from "react-icons/fa";

import OutreachProject1 from "@/assets/images/work/outreach/outreach3.jpg";
import OutreachProject2 from "@/assets/images/work/outreach/outreach4.jpg";
import OutreachProject3 from "@/assets/images/work/outreach/outreach5.jpg";
import OutreachProject4 from "@/assets/images/work/outreach/outreach6.jpg";
import OutreachProject5 from "@/assets/images/work/outreach/outreach7.png";
import OutreachProject6 from "@/assets/images/work/outreach/outreach8.png";
import { PartnershipTestimonial } from "@/lib/types/support";




export const donationFAQs = [
    {
      id: 1,
      question: "What payment methods do you accept for donations?",
      answer: "We accept credit/debit cards (via Paystack and Flutterwave), bank transfers, mobile money, and cryptocurrency (Bitcoin)."
    },
    {
      id: 2,
      question: "Is my donation tax-deductible?",
      answer: "Yes, all donations to Oghosa Foundation are tax-deductible in Nigeria. We provide e-receipts immediately for online donations."
    },
    {
      id: 3,
      question: "How can I get a receipt for my donation?",
      answer: "Digital receipts are auto-generated for online donations. For bank transfers, email finance@oghosa.org with your payment details."
    },
    {
      id: 4,
      question: "What percentage of my donation goes directly to programs?",
      answer: "87% of donations fund programs, 10% supports administration, and 3% covers fundraising costs (2023 audited figures)."
    },
    {
      id: 5,
      question: "Can I donate goods instead of money?",
      answer: "Yes, we accept educational materials, medical supplies, and agricultural equipment. Contact donations@oghosa.org first."
    },
    {
      id: 6,
      question: "How do I update my recurring donation?",
      answer: "Log in to your donor portal or email donations@oghosa.org with your request at least 3 days before your next charge date."
    },
    {
      id: 7,
      question: "Do you accept international donations?",
      answer: "Yes, we accept USD via SWIFT transfers (see bank details) and cryptocurrency (Bitcoin wallet provided)."
    },
    {
      id: 8,
      question: "Is there a minimum donation amount?",
      answer: "No minimum for online donations. Bank transfers should be at least ₦1,000 for processing efficiency."
    },
    {
      id: 9,
      question: "How can I cancel my monthly donation?",
      answer: "Cancel anytime via your donor portal or by emailing donations@oghosa.org with 'Cancel Recurring Donation' in the subject."
    },
    {
      id: 10,
      question: "Where can I see your financial reports?",
      answer: "Our annual reports and audited financials are available at oghosa.org/transparency (2018-2023 reports currently available)."
    }
  ];

  // Volunteer 
  export const volunteerStatsData: StatItem[] = [
    {
      id: 1,
      value: 30000,
      label: "Volunteers",
      icon: FiUsers,
      suffix: "+",
    },
    {
      id: 2,
      value: 20,
      label: "Communities Reached",
      icon: FiMapPin,
      suffix: "+",
    },
    {
      id: 3,
      value: 140000,
      label: "Hours Served",
      icon: FiClock,
      suffix: "+",
    },
    {
      id: 4,
      value: 500000,
      label: "Families Impacted",
      icon: FiHeart,
      suffix: "+",
    },
  ];

 export const PartnershipTestimonialsData: PartnershipTestimonial[] = [
  {
    id: 1,
    quote:
      "Teaching digital skills through this foundation helped me discover my passion for community development. Seeing students grow is priceless.",
    name: "Adeola M.",
    role: "Digital Literacy Volunteer",
    image: OutreachProject1,
    program: "EDUFOOD Initiative",
  },
  {
    id: 2,
    quote:
      "As a medical student, volunteering in health awareness campaigns gave me real-world experience while serving my community. The gratitude we receive is humbling.",
    name: "Dr. Ibrahim K.",
    role: "Health Volunteer",
    image: OutreachProject2,
    program: "Community Health Drive",
  },
  {
    id: 3,
    quote:
      "Building classrooms in rural areas showed me the power of collective action. The joy on children's faces when they see their new school keeps me volunteering.",
    name: "Chioma A.",
    role: "Construction Volunteer",
    image: OutreachProject3,
    program: "Infrastructure Project",
  },
  {
    id: 4,
    quote:
      "Mentoring young girls in coding has been incredibly rewarding. Many of my students have gone on to pursue STEM careers thanks to this program.",
    name: "Ngozi E.",
    role: "STEM Mentor",
    image: OutreachProject4,
    program: "Girls Who Code",
  },
  {
    id: 5,
    quote:
      "Organizing the annual scholarship program helped me develop leadership skills while changing lives. We've supported over 200 students so far!",
    name: "Oluwaseun B.",
    role: "Program Coordinator",
    image: OutreachProject5,
    program: "Scholarship Program",
  },
  {
    id: 6,
    quote:
      "As a retired teacher, volunteering in literacy programs gives me purpose. The progress these children make in just a few months is astounding.",
    name: "Mr. Adebayo",
    role: "Literacy Volunteer",
    image: OutreachProject6,
    program: "Reading Initiative",
  },
];

  export const volunteerFAQs = [
    {
      id: 1,
      question: "How do I become a volunteer?",
      answer: "Complete our online registration form, attend a 30-minute orientation session, and choose your preferred program. You'll receive onboarding materials via email."
    },
    {
      id: 2,
      question: "What are the age requirements?",
      answer: "Volunteers must be at least 16 years old. Those aged 12-15 can participate with adult supervision during specific family-friendly activities."
    },
    {
      id: 3,
      question: "Is there a time commitment requirement?",
      answer: "Most programs require a minimum of 4 hours per month. Leadership roles may require 8+ hours monthly. One-time opportunities are also available."
    },
    {
      id: 4,
      question: "Do I need special skills or qualifications?",
      answer: "Most roles require no prior experience. Specialized positions (medical, legal, etc.) will specify requirements. Training is provided for all programs."
    },
    {
      id: 5,
      question: "Can I volunteer remotely?",
      answer: "Yes! We offer virtual opportunities in fundraising, social media management, graphic design, research, and program coordination."
    },
    {
      id: 6,
      question: "How do I track my volunteer hours?",
      answer: "Sign in/out at our volunteer portal or physical logbook. Hours are verified monthly. You can request a report anytime via email."
    },
    {
      id: 7,
      question: "What should I wear to volunteer activities?",
      answer: "Comfortable, modest clothing suitable for the activity (we'll provide specifics). Closed-toe shoes are required for fieldwork. Branded t-shirts are available for purchase."
    },
    {
      id: 8,
      question: "Can my company/organization volunteer as a group?",
      answer: "Absolutely! We accommodate corporate groups of 5-50 people. Contact our Partnerships team to schedule a customized service day."
    },
    {
      id: 9,
      question: "Do you provide volunteer certificates?",
      answer: "Yes, after completing 50+ hours. Certificates include service details and can be used for school/job applications. Request via our portal."
    },
    {
      id: 10,
      question: "What safety measures are in place?",
      answer: "All volunteers receive safety training. Field teams have first aid kits and emergency protocols. Virtual volunteers follow data protection guidelines."
    },
    {
      id: 11,
      question: "Can I volunteer if I have physical limitations?",
      answer: "Yes! We offer accessible roles in admin support, phone banking, mentoring (virtual), and other accommodating positions."
    },
    {
      id: 12,
      question: "How do I update my volunteer preferences?",
      answer: "Log in to your volunteer portal or email volunteer@oghosa-foundation.org with your updated availability/interests."
    }
  ];


  // Partnerships
export const partnerImpactStats = [
  {
    id: 1,
    value: 42,
    label: "Communities Engaged",
    icon: FaMapMarkerAlt,
    suffix: "+"
  },
  {
    id: 2,
    value: 500000,
    label: "Lives Impacted",
    icon: FaUsers,
    suffix: "+"
  },
  {
    id: 3,
    value: 78,
    label: "Schools Supported",
    icon: FaSchool,
    suffix: "+"
  },
  {
    id: 4,
    value: 12000,
    label: "Volunteers Mobilized",
    icon: FaHandsHelping,
    suffix: "+"
  },
  {
    id: 5,
    value: 24,
    label: "Health Clinics Established",
    icon: FaHeartbeat,
    suffix: "+"
  },
  {
    id: 6,
    value: 3200,
    label: "Scholarships Awarded",
    icon: FaGraduationCap,
    suffix: "+"
  },
  {
    id: 7,
    value: 15,
    label: "Innovation Hubs Built",
    icon: FaLightbulb,
    suffix: "+"
  },
  {
    id: 8,
    value: 1800,
    label: "Agricultural Projects",
    icon: FaSeedling,
    suffix: "+"
  }
];

export const partnerTestimonialsData = [
  {
    id: 1,
    quote: "Our partnership with Oghosa Foundation allowed us to amplify our CSR impact 3x beyond what we could achieve alone. Their community networks and implementation expertise are unmatched.",
    name: "First Bank Nigeria",
    role: "Corporate Social Responsibility Team",
    image: OutreachProject1,
    program: "Financial Literacy Program"
  },
  {
    id: 2,
    quote: "Collaborating on the EDUFOOD Initiative helped us reach 15,000 more students than projected. The Foundation's ground team made our funding work harder than we imagined possible.",
    name: "GTBank Foundation",
    role: "Education Partnerships Lead",
    image: OutreachProject2,
    program: "EDUFOOD Initiative"
  },
  {
    id: 3,
    quote: "As an international NGO, we valued Oghosa Foundation's ability to navigate local complexities while maintaining global standards. They became true partners, not just implementers.",
    name: "Save the Children International",
    role: "Country Director",
    image: OutreachProject3,
    program: "Child Nutrition Program"
  },
  {
    id: 4,
    quote: "The transparency and professionalism shown in our healthcare partnership set a new benchmark for how we evaluate NGO collaborations across Africa.",
    name: "MTN Foundation",
    role: "Health Initiative Manager",
    image: OutreachProject4,
    program: "Rural Clinics Project"
  },
  {
    id: 5,
    quote: "Through our joint vocational training centers, we've seen 82% of graduates secure sustainable livelihoods - a testament to the Foundation's focus on real outcomes.",
    name: "Dangote Group",
    role: "Community Development Head",
    image: OutreachProject5,
    program: "Skills Acquisition Program"
  },
  {
    id: 6,
    quote: "Oghosa Foundation's data-driven approach gave us confidence our funding created measurable change. Their impact reports are the most comprehensive we've seen.",
    name: "Shell Nigeria",
    role: "Social Investment Manager",
    image: OutreachProject6,
    program: "STEM Education Initiative"
  }
];