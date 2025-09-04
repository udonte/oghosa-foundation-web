import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { FiMail, FiAward } from "react-icons/fi";
import ExecutiveDirector from "@/assets/images/profile/esohe.jpg";
import ProgramDirector from "@/assets/images/profile/George.jpg";
import Obotor from "@/assets/images/profile/obotor.jpg";

const ExecutiveTeam = () => {
  const executiveTeam = [
    {
      name: "Esohe Oriakhi",
      role: "Executive Director",
      bio: "A visionary leader with 11+ years of pan-African legal and compliance experience, Esohe guides our mission to empower communities through innovative, compliant, and scalable social impact programs. She combines deep regulatory expertise with a passion for justice and inclusion to create lasting change across Africa. With a proven track record of building frameworks that enable organizations to thrive in complex environments, she now applies that experience to driving community-focused initiatives that deliver lasting impact. She champions inclusivity, accountability, and the transformative power of innovation to uplift underserved communities.",
      image: ExecutiveDirector,
      social: {
        linkedin: "https://www.linkedin.com/in/esohe-o-4565a6105/",
        twitter: "#",
        email: "eseohe.oriakhi@gmail.com",
      },
      tenure: "Since 2025",
      achievements: [],
    },
    {
      name: "George Udonte",
      role: "Program Director",
      bio: "A creative and impact-driven leader, George brings a unique blend of technology, design, and program management expertise to his role as Program Director. With experience delivering solutions across multiple industries, he leverages his background in development, user experience, and community engagement to design and implement scalable initiatives that meet real human needs. George is passionate about using tech to create opportunities, empower communities, and drive sustainable impact. At the Foundation, he ensures programs are not only effective but also inclusive, adaptable, and aligned with our mission of uplifting underserved communities.",
      image: ProgramDirector,
      social: {
        email: "georgeudonte@gmail.com",
      },
      tenure: "Since 2025",
      achievements: [],
    },
    {
      name: "Celia Dolor Obotor",
      role: "Company Secretary",
      bio: "Obotor is a dedicated legal professional with extensive experience in legislative processes and governance. With a strong background in law and policy within Nigeria’s national legislative framework, she has contributed significantly to shaping frameworks that strengthen democratic institutions and promote social development. Obotor brings valuable expertise in governance, compliance, and public service to the Council.",
      image: Obotor,
      social: {
        email: "#",
      },
      tenure: "Since 2025",
      achievements: [],
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
      <SectionHeader title="Meet Our Executive Team" />

      <div className="grid md:grid-cols-3 gap-8">
        {executiveTeam.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="font-montserrat text-2xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="font-dmsans text-oghosa-gold">{member.role}</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-dmsans text-sm text-oghosa-gold bg-oghosa-green/10 px-3 py-1 rounded-full">
                  {member.tenure}
                </span>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.social.email}`}
                    target="_blank"
                    className="text-gray-400 hover:text-oghosa-green transition-colors"
                  >
                    <FiMail className="text-xl" />
                  </a>
                </div>
              </div>

              <p className="font-dmsans text-gray-700 mb-6">{member.bio}</p>
              {member?.achievements?.length > 0 && (
                <div>
                  <h4 className="font-montserrat font-bold text-oghosa-green mb-3 flex items-center">
                    <FiAward className="mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="font-dmsans text-gray-600 space-y-2 list-disc list-inside">
                    {member.achievements?.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExecutiveTeam;
