import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiTarget,
  FiHeart,
  FiUsers,
  FiShield,
  FiAward,
} from "react-icons/fi";
import Team from "@/assets/images/team.jpg";
import Vision from "@/assets/images/vision.jpg";
import Mission from "@/assets/images/mission.jpg";
import boy from "@/assets/images/boy-eating.jpg";

const Profile = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-oghosa-green text-white py-24 overflow-hidden">
        <div className="absolute inset-0  opacity-20 ">
          <img
            src={Team}
            alt="team photo"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-montserrat text-4xl md:text-5xl font-bold mb-6"
          >
            About Oghosa Godson Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-dmsans text-xl md:text-2xl max-w-3xl mx-auto text-oghosa-gold"
          >
            Compassion in action. Sustainable impact. Community transformation.
          </motion.p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 bg-white container max-w-4xl mx-auto">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <div className="flex flex-col">
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
                  Who We Are
                </h2>
                <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
              </div>
            </motion.div>

            <div className="font-dmsans text-gray-700 text-lg leading-relaxed space-y-4  ">
              <p>
                <span className="font-bold text-oghosa-green font-montserrat text-xl">
                  OGHOSA GODSON FOUNDATION
                </span>{" "}
                is a purpose-driven organization committed to transforming lives
                through education, health advocacy, and community empowerment.
              </p>
              <p>
                Guided by compassion and a deep sense of responsibility, we work
                tirelessly to address societal challenges by fostering
                sustainable solutions that empower individuals and uplift
                communities.
              </p>
              <p>
                With a special focus on{" "}
                <span className="text-oghosa-gold font-medium">
                  education, health, sickle cell support, food security,
                  vocational training,
                </span>{" "}
                and{" "}
                <span className="text-oghosa-gold font-medium">
                  charitable initiatives
                </span>
                , we are dedicated to creating opportunities for all.
              </p>
            </div>

            <div className={`relative w-full h-64 md:h-auto mt-8`}>
              <img
                src={Vision}
                alt={"vision"}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Vision */}
          <section className="my-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className={`flex flex-col gap-8 bg-white  overflow-hidden  transition-all duration-300 h-auto min-h-[400px] 
             `}
            >
              {/* Content Container (60% width) */}
              <div className="w-full flex flex-col justify-start">
                <div className="flex flex-col mx-auto">
                  <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
                    Our Vision
                  </h2>
                  <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
                </div>
                <p className="font-dmsans text-gray-700 text-lg leading-relaxed space-y-4">
                  We have a vision to transform lives by providing access to
                  quality education, healthcare, and opportunities for a
                  dignified life, while working to reduce hunger, poverty, and
                  preventable health challenges for as many people as possible.
                </p>
              </div>

              {/* Image Container (40% width) */}
              <div className={`relative w-full h-64 md:h-auto`}>
                <img
                  src={boy}
                  alt={"boy"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </section>
          {/* Mission */}
          <section className=" my-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className={`flex flex-col gap-8 bg-white  overflow-hidden  transition-all duration-300 h-auto min-h-[400px] 
             `}
            >
              <div className="w-full flex flex-col justify-start">
                <div className="flex flex-col mx-auto">
                  <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
                    Our Mission
                  </h2>
                  <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
                </div>
                <p className="font-dmsans text-gray-700 text-lg leading-relaxed space-y-4">
                  <p className="font-dmsans text-gray-700">
                    Our mission ultimately is to inspire hope and improve lives
                    by:
                  </p>
                  <ul className="font-dmsans text-gray-700 mt-2 space-y-2 list-disc list-inside">
                    <p className="flex md:items-center">
                      <div className="bg-oghosa-gold text-white font-montserrat font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 ">
                        1
                      </div>
                      Promoting education
                    </p>
                    <p className="flex md:items-center">
                      <div className="bg-oghosa-gold text-white font-montserrat font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 ">
                        2
                      </div>
                      Enhancing health awareness
                    </p>
                    <p className="flex items-center">
                      <div className="bg-oghosa-gold text-white font-montserrat font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 ">
                        3
                      </div>
                      Supporting sickle cell patients
                    </p>
                    <p className="flex items-center">
                      <div className="bg-oghosa-gold text-white font-montserrat font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 ">
                        4
                      </div>
                      Ensuring food security
                    </p>
                    <p className="flex items-center">
                      <div className="bg-oghosa-gold text-white font-montserrat font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 ">
                        5
                      </div>
                      Equipping communities with sustainable skills
                    </p>
                  </ul>
                </p>
              </div>
              <div className={`relative w-full h-64 md:h-auto`}>
                <img
                  src={Mission}
                  alt={"vision"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </section>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-col my-4">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4 text-center">
                Core Values
              </h2>
              <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: <FiHeart className="text-2xl text-oghosa-gold" />,
                  title: "Compassion",
                  description: "We prioritize care and empathy in all we do.",
                },
                {
                  icon: <FiShield className="text-2xl text-oghosa-gold" />,
                  title: "Integrity",
                  description: "We uphold transparency and accountability.",
                },
                {
                  icon: <FiUsers className="text-2xl text-oghosa-gold" />,
                  title: "Collaboration",
                  description: "We value partnerships for meaningful change.",
                },
                {
                  icon: <FiAward className="text-2xl text-oghosa-gold" />,
                  title: "Empowerment",
                  description: "We help individuals realize their potential.",
                },
                {
                  icon: <FiArrowRight className="text-2xl text-oghosa-gold" />,
                  title: "Sustainability",
                  description: "We focus on long-term, lasting impact.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-oghosa-gold/30"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3">{value.icon}</div>
                    <h4 className="font-montserrat font-bold text-oghosa-green mb-2">
                      {value.title}
                    </h4>
                    <p className="font-dmsans text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mx-auto">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4 text-center">
                Our Strategic Objectives
              </h2>
              <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
            </div>
            <div className="space-y-6">
              {[
                "Provide access to quality education and learning resources for underserved communities.",
                "Raise awareness and provide support for individuals living with sickle cell disease.",
                "Enhance access to healthcare and promote wellness through community health programs.",
                "Combat hunger by ensuring food security through feeding programs and agricultural initiatives.",
                "Equip individuals with practical vocational skills for economic empowerment.",
                "Conduct charitable outreach to support vulnerable populations.",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-oghosa-gold text-white font-montserrat font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="font-dmsans text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-oghosa-green/5">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat text-3xl font-bold text-oghosa-green mb-6"
          >
            Ready to Join Our Mission?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-dmsans text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Discover how you can be part of transforming lives and communities.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/get-involved"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Get Involved
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-oghosa-green text-oghosa-green hover:bg-white font-montserrat font-bold px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
