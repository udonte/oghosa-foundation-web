import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaHandHoldingHeart,
  FaLanguage,
} from "react-icons/fa";
import SectionHeader from "../../common/SectionHeader";
import { Link } from "react-router";

export const VolunteerSpotlight = () => {
  const volunteerSkills = [
    {
      category: "Medical",
      icon: <FaHeartbeat className="text-red-500 text-2xl" />,
      needs: ["Doctors", "Nurses", "Health Educators", "Counselors"],
      urgency: "High",
    },
    {
      category: "Education",
      icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />,
      needs: ["Teachers", "Tutors", "Curriculum Developers", "Librarians"],
      urgency: "High",
    },
    {
      category: "Technology",
      icon: <FaLaptopCode className="text-purple-500 text-2xl" />,
      needs: ["Web Developers", "Data Analysts", "IT Trainers", "UX Designers"],
      urgency: "Medium",
    },
    {
      category: "Community",
      icon: <FaHandHoldingHeart className="text-green-500 text-2xl" />,
      needs: [
        "Field Coordinators",
        "Social Workers",
        "Event Planners",
        "Fundraisers",
      ],
      urgency: "Ongoing",
    },
    {
      category: "Language",
      icon: <FaLanguage className="text-yellow-500 text-2xl" />,
      needs: [
        "Translators (Hausa/Yoruba)",
        "Sign Language Experts",
        "ESL Instructors",
      ],
      urgency: "Medium",
    },
  ];

  return (
    <section className="px-4 py-12 sm:py-16 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <SectionHeader
          title="Volunteer Spotlight"
          subtitle="Join Our Changemakers"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/ypKJRGUTtmQ?si=7RVINCzQ7M4EPsL9"
                title="A Day in the Life of an OGF Volunteer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-96"
                allowFullScreen
              />
            </div>
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Behind the Scenes</h3>
              <p className="text-gray-600">
                Follow volunteer Aisha through her day at our Lagos health
                clinic and community school.
              </p>
            </div>
          </motion.div>

          {/* Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Skills We Need
            </h3>
            <div className="space-y-6">
              {volunteerSkills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100 pb-6 last:border-0"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-full bg-gray-100">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{skill.category}</h4>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          skill.urgency === "High"
                            ? "bg-red-100 text-red-800"
                            : skill.urgency === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {skill.urgency} Need
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.needs.map((need) => (
                      <span
                        key={need}
                        className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 text-center"
            >
              <Link
                to="/volunteer/apply"
                className="inline-block bg-oghosa-green text-white px-8 py-3 rounded-full font-medium hover:bg-oghosa-gold transition-colors"
              >
                Apply Your Skills
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
