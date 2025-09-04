import { motion } from "framer-motion";
import Samuel from "@/assets/images/profile/samuel.jpg";
import David from "@/assets/images/profile/david.jpg";
import Femi from "@/assets/images/profile/femi.jpg";
import SectionHeader from "../common/SectionHeader";

const AdvisorySection = () => {
  const advisoryCouncil = [
    {
      name: "Samuel Omosuyi",
      role: "Finance Advisor",
      bio: "Samuel is a seasoned banker and financial services expert with a proven record of championing innovative solutions in the banking industry. Over the years, he has held key management roles across diverse segments of the financial sector, driving transformation, operational excellence, and sustainable growth. Samuel brings a wealth of industry knowledge and leadership experience that strengthens institutional governance and fosters inclusive financial systems.",
      linkedin: "https://www.linkedin.com/in/samuel-omosuyi-6b5238149",
      image: Samuel,
    },
    {
      name: "David Nwosu",
      role: "Operations Advisor",
      bio: "David is a distinguished leader in the financial technology and payments industry, having successfully led both technical and operational initiatives for business growth and sector-wide innovation. Recognized nationally for excellence and contributions to the fintech ecosystem, he has fostered impactful collaborations that have shaped the future of digital finance. David brings to the Council a unique blend of vision, execution, and industry-wide recognition.",
      linkedin: "https://www.linkedin.com/in/nwosudavid",
      image: David,
    },
    {
      name: "Olufemi Otenaike",
      role: "Finance Advisor",
      bio: "Femi is an accomplished professional in Nigeria’s capital market ecosystem, with years of experience at the Central Securities Clearing System (CSCS). He has played a pivotal role in advancing transparency, efficiency, and best practices in market operations, contributing to the stability and growth of Nigeria’s financial sector. Femi offers the Council deep expertise in finance, regulation, and institutional governance.",
      linkedin: "https://www.linkedin.com/in/nwosudavid",
      image: Femi,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-8 lg:px-24 lg:py-16"
    >
      <SectionHeader title="Advisory Council" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisoryCouncil.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-1">
                {member.name}
              </h3>
              <p className="font-dmsans text-oghosa-gold mb-2">{member.role}</p>
              <p className="font-dmsans text-gray-600 text-sm">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AdvisorySection;
