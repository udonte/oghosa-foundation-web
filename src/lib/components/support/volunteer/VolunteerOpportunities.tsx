// components/VolunteerOpportunities.tsx
import { motion } from "framer-motion";
import {
  FiPackage,
  FiBook,
  FiMonitor,
  FiCalendar,
  FiMapPin,
  FiClock,
  FiFileText,
  FiHeart,
  FiTool,
  FiCloud,
} from "react-icons/fi";
import SectionHeader from "../../common/SectionHeader";

const opportunities = [
  {
    title: "Education Mentorship",
    icon: <FiBook className="text-oghosa-gold" />,
    desc: "Provide academic support and career guidance to students in underserved schools.",
    schedule: "Weekdays after school hours",
    commitment: "2-3 hours weekly",
  },
  {
    title: "Skills Training",
    icon: <FiTool className="text-oghosa-gold" />,
    desc: "Teach vocational skills (coding, crafts, trades) to empower youth and adults.",
    schedule: "Weekends, 10AM-2PM",
    commitment: "Monthly workshops",
  },
  {
    title: "Community Development",
    icon: <FiMapPin className="text-oghosa-gold" />,
    desc: "Participate in infrastructure projects and community improvement initiatives.",
    schedule: "Quarterly Saturday events",
    commitment: "Full day projects",
  },
  {
    title: "Health Awareness",
    icon: <FiHeart className="text-oghosa-gold" />,
    desc: "Educate communities on disease prevention and healthy living practices.",
    schedule: "Monthly health drives",
    commitment: "4-6 hours per event",
  },
  {
    title: "Food Distribution",
    icon: <FiPackage className="text-oghosa-gold" />,
    desc: "Sort, pack, and distribute food packages to families in underserved communities.",
    schedule: "Saturdays, 8AM-12PM",
    commitment: "Weekly or bi-weekly",
  },
  {
    title: "Digital Literacy",
    icon: <FiMonitor className="text-oghosa-gold" />,
    desc: "Train seniors and youth in basic computer skills and internet safety.",
    schedule: "Weekday mornings",
    commitment: "Flexible hours",
  },
  {
    title: "Administrative Support",
    icon: <FiFileText className="text-oghosa-gold" />,
    desc: "Assist with office operations, data entry, and program coordination.",
    schedule: "Weekdays, 9AM-3PM",
    commitment: "Minimum 4 hours weekly",
  },
  {
    title: "Virtual Volunteering",
    icon: <FiCloud className="text-oghosa-gold" />,
    desc: "Remote opportunities in fundraising, social media, and research.",
    schedule: "Flexible",
    commitment: "Project-based",
  },
];

const VolunteerOpportunities = () => {
  return (
    <section className="px-4 py-16 lg:px-24 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Volunteer Opportunities"
          subtitle="Join our community of changemakers and make a difference"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="border border-oghosa-green/20 rounded-lg p-8 hover:shadow-lg hover:border-oghosa-gold transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl text-oghosa-gold">{opp.icon}</div>
                <h3 className="font-montserrat text-2xl font-semibold text-oghosa-green">
                  {opp.title}
                </h3>
              </div>

              <p className="font-dmsans text-gray-700 mb-4 leading-relaxed">
                {opp.desc}
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-center text-sm">
                  <FiCalendar className="mr-2 text-oghosa-green" />
                  <span>{opp.schedule}</span>
                </div>
                <div className="flex items-center text-sm">
                  <FiClock className="mr-2 text-oghosa-green" />
                  <span>{opp.commitment}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#register"
            className="inline-block border-2 border-oghosa-green text-oghosa-green hover:bg-oghosa-green hover:text-white font-montserrat font-bold py-3 px-8 rounded-md transition-colors"
          >
            Join Our Volunteer Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerOpportunities;
