import { motion } from "framer-motion";
import {
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";
import ExecutiveDirector from "@/assets/images/profile/esohe.jpg";
import ProgramDirector from "@/assets/images/profile/George.jpg";
import Team from "@/assets/images/team.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import SectionHeader from "@/lib/components/common/SectionHeader";
import Samuel from "@/assets/images/profile/samuel.jpg";
import David from "@/assets/images/profile/david.jpg";

const Leadership = () => {
  const executiveTeam = [
    {
      name: "Esohe Oriakhi",
      role: "Executive Director",
      bio: "Legal and Compliances Expert leveraging her 11+ years of pan-African fintech regulatory expertise to build legally sound, scalable social impact programs. Leads our mission to empower communities through innovative, compliant solutions. Visionary leader with a passion for social justice and community empowerment. She has a proven track record of building successful programs that create lasting impact.",
      image: ExecutiveDirector,
      social: {
        linkedin: "https://www.linkedin.com/in/esohe-o-4565a6105/",
        twitter: "#",
        email: "eseohe.oriakhi@gmail.com",
      },
      tenure: "Since 2024",
      achievements: [
        "Expanded programs to 5 new states",
        "Secured $2M+ in grants",
        "Implemented impact measurement system",
      ],
    },
    {
      name: "George Udonte",
      role: "Program Director",
      bio: "Tech Education Advocate blending technical expertise with a heart for community impact. Proven track record in developing scalable solutions and mentoring young innovators. Leads OGF's initiatives with a user-first approach that transforms lives through technology and education. Manages all field operations and program implementation.",
      image: ProgramDirector,
      social: {
        linkedin: "https://www.linkedin.com/in/george-udonte",
        twitter: "#",
        email: "georgeudonte@gmail.com",
      },
      tenure: "Since 2024",
      achievements: [
        "Designed 12 skills training programs",
        "Trained 200+ local facilitators",
        "85% graduate employment rate",
      ],
    },
  ];

  const boardMembers = [
    {
      name: "Esohe Oriakhi",
      role: "Board Chair",
      bio: "Legal & Compliance Professional. Social justice and community empowerment driver with a wealth of expertise in building compliant, scalable programs that create lasting impact.",
    },
  ];

  const advisoryCouncil = [
    {
      name: "Samuel Omosuyi",
      role: "Finance Advisor",
      linkedin: "https://www.linkedin.com/in/samuel-omosuyi-6b5238149",
      image: Samuel,
    },
    {
      name: "David Nwosu",
      role: "Operations Advisor",
      linkedin: "https://www.linkedin.com/in/nwosudavid",
      image: David,
    },
  ];

  const videoHighlights = [
    {
      title: "Day in the Life: Executive Director",
      duration: "2:45",
      description:
        "Follow Dr. Ada through her typical day leading the foundation",
      thumbnail: "/video-thumb-1.jpg",
      url: "https://www.youtube.com/embed/6KyHLSaICQ0",
    },
    {
      title: "Behind the Scenes: Program Team",
      duration: "4:12",
      description:
        "See how our field staff implement initiatives in rural communities",
      thumbnail: "/video-thumb-2.jpg",
      url: "https://www.youtube.com/embed/fGO6MCPpOBQ",
    },
    {
      title: "Board Perspectives",
      duration: "3:28",
      description: "Hear from our board members about governance and vision",
      thumbnail: "/video-thumb-3.jpg",
      url: "https://www.youtube.com/embed/v02AmOg8fIM",
    },
  ];

  return (
    <main className=" bg-gray-50">
      <SubHeroSection
        image={Team}
        title="Guided by Visionary Leadership"
        subtitle="Meet the passionate individuals driving OGF's mission forward"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/about" },
          { label: "Our Leadership", href: "/leadership" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Executive Team */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHeader title="Meet Our Executive Team" />

          <div className="grid md:grid-cols-2 gap-12">
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
                    <p className="font-dmsans text-oghosa-gold">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-dmsans text-sm text-oghosa-gold bg-oghosa-green/10 px-3 py-1 rounded-full">
                      {member.tenure}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-oghosa-green transition-colors"
                      >
                        <FiLinkedin className="text-xl" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-oghosa-green transition-colors"
                      >
                        <FiTwitter className="text-xl" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-oghosa-green transition-colors"
                      >
                        <FiMail className="text-xl" />
                      </a>
                    </div>
                  </div>

                  <p className="font-dmsans text-gray-700 mb-6">{member.bio}</p>

                  <div>
                    <h4 className="font-montserrat font-bold text-oghosa-green mb-3 flex items-center">
                      <FiAward className="mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="font-dmsans text-gray-600 space-y-2 list-disc list-inside">
                      {member.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Organizational Structure */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24 bg-white p-8 rounded-xl shadow-md"
        >
          <SectionHeader title="Our Structure" />

          <div className="relative">
            {/* Desktop Structure */}
            <div className="hidden lg:block">
              <div className="flex flex-col items-center">
                {/* Board */}
                <div className="bg-oghosa-green/10 p-6 rounded-xl mb-8 text-center w-1/2 border-2 border-oghosa-green/30">
                  <FiUsers className="text-oghosa-green text-3xl mx-auto mb-3" />
                  <h3 className="font-montserrat font-bold text-oghosa-green">
                    Board of Trustees
                  </h3>
                  <p className="font-dmsans text-gray-600">
                    Governance & Strategic Oversight
                  </p>
                </div>

                {/* Connector */}
                <div className="w-px h-12 bg-oghosa-gold/50"></div>

                {/* Executive Director */}
                <div className="bg-oghosa-gold/10 p-6 rounded-xl mb-8 text-center w-1/3 border-2 border-oghosa-gold/30">
                  <h3 className="font-montserrat font-bold text-oghosa-green">
                    Executive Director
                  </h3>
                  <p className="font-dmsans text-gray-600">
                    Day-to-Day Leadership
                  </p>
                </div>

                {/* Connector */}
                <div className="w-px h-12 bg-oghosa-gold/50"></div>

                {/* Departments */}
                <div className="flex justify-center gap-8">
                  {["Programs", "Finance", "Operations", "Development"].map(
                    (dept) => (
                      <div
                        key={dept}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center w-40"
                      >
                        <h4 className="font-montserrat font-medium text-oghosa-green">
                          {dept}
                        </h4>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Structure */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  level: "Board of Trustees",
                  role: "Governance & Strategic Oversight",
                  icon: <FiUsers className="text-oghosa-green text-2xl" />,
                },
                {
                  level: "Executive Director",
                  role: "Day-to-Day Leadership",
                  icon: <FiAward className="text-oghosa-green text-2xl" />,
                },
                // Add other levels...
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-oghosa-green/10 p-3 rounded-full mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-oghosa-green">
                      {item.level}
                    </h3>
                    <p className="font-dmsans text-gray-600">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Board of Trustees */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-oghosa-green/5 p-12 rounded-2xl"
        >
          <SectionHeader title="Board of Trustees" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="bg-oghosa-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="text-oghosa-green text-xl" />
                </div>
                <h3 className="font-montserrat font-bold text-oghosa-green mb-1">
                  {advisor.name}
                </h3>
                <p className="font-dmsans text-oghosa-gold text-sm mb-3">
                  {advisor.role}
                </p>
                <p className="font-dmsans text-gray-600 text-sm">
                  {advisor.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Advisory Council */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
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
                  <p className="font-dmsans text-oghosa-gold mb-2">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-oghosa-green transition-colors w-fit"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* leadership video tour */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
                Meet the Team Video Tour
              </h2>
              <p className="font-dmsans text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our work through the eyes of those who make it happen
                every day
              </p>
            </motion.div>

            {/* Main Featured Video */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-2xl relative">
                <iframe
                  src="https://www.youtube.com/embed/uyCKwQkrItU"
                  className="w-full h-full"
                  allowFullScreen
                />

                {/* Video Controls Overlay (example) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="font-dmsans text-white">
                        <span className="block">
                          Day in the Life: Executive Director
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Playlist */}
            <div className="grid md:grid-cols-3 gap-8">
              {videoHighlights.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-2xl relative">
                    <iframe
                      src="https://www.youtube.com/embed/uyCKwQkrItU"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="font-montserrat font-bold text-oghosa-green mb-1">
                    {video.title}
                  </h3>
                  <p className="font-dmsans text-gray-600">
                    {video.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a
                href="/about/team"
                className="inline-flex items-center border-2 border-oghosa-green text-oghosa-green hover:bg-oghosa-green hover:text-white font-montserrat font-bold py-3 px-8 rounded-lg transition-all duration-300 group"
              >
                View Full Team Profiles
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-6">
            Join Our Leadership Community
          </h2>
          <p className="font-dmsans text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're always seeking passionate professionals to guide our mission
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/contact#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Express Interest
            </motion.a>
            <motion.a
              href="/about/reports"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-oghosa-green text-oghosa-green hover:bg-white font-montserrat font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              See our Annual Report
            </motion.a>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Leadership;
