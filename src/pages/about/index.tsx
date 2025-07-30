import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Team from "@/assets/images/team.jpg";
import OurStory from "@/assets/images/event-volunteer.jpg";
import Reports from "@/assets/images/reports.jpg";
import Esohe from "@/assets/images/esohe.jpg";
import EventBg from "@/assets/images/vision.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";

const About = () => {
  const previewSections = [
    {
      title: "Our Story",
      description:
        "Discover how Oghosa Godson Foundation began and our journey to impact thousands of lives",
      link: "/about/profile",
      image: OurStory,
      bgColor: "bg-oghosa-green/5",
      items: [
        "Founded in 2015",
        "10,000+ lives impacted",
        "5 key program areas",
      ],
    },
    {
      title: "The Founder",
      description:
        "Meet Oghosa Godson and learn about the philosophy that drives our work",
      link: "/about/founder",
      image: Esohe,
      bgColor: "bg-oghosa-gold/5",
      items: [
        "Legacy of compassion",
        '"It will be" philosophy',
        "Timeline of impact",
      ],
    },
    {
      title: "Our Leadership",
      description: "Get to know the dedicated team guiding our mission forward",
      link: "/about/leadership",
      image: Team,
      bgColor: "bg-white",
      items: [
        "Experienced executives",
        "Passionate board members",
        "Global advisors",
      ],
    },
    {
      title: "Transparency",
      description: "See how we maintain accountability and measure our impact",
      link: "/about/reports",
      image: Reports,
      bgColor: "bg-oghosa-green/10",
      items: ["Annual reports", "Financial statements", "Impact metrics"],
    },
  ];

  return (
    <main className="">
      {/* Hero Section */}
      <SubHeroSection
        image={Team}
        title="  Who We Are"
        subtitle=" The Godson Oghosa Foundation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/about" },
        ]}
      />

      {/* Preview Sections */}
      <div className="container mx-auto px-4 py-16 lg:px-24 lg:py-24">
        <div className="flex flex-col mx-auto mb-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4 text-center ">
            Sections of Our Journey
          </h2>
          <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`${section.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="font-montserrat text-2xl font-bold text-oghosa-green mb-3">
                    {section.title}
                  </h2>
                  <p className="font-dmsans text-gray-700 mb-4">
                    {section.description}
                  </p>
                  <ul className="font-dmsans text-gray-600 mb-6 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-oghosa-gold mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to={section.link}
                    className="inline-flex items-center text-oghosa-green hover:text-oghosa-gold font-montserrat font-medium group"
                  >
                    Explore {section.title.toLowerCase()}
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inspiring charity talk Section */}
      <section>
        <div className="flex flex-col mx-auto mb-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4 text-center ">
            Message from Our Founder
          </h2>
          <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
        </div>

        <div className="relative px-4 py-16 lg:px-24 lg:py-24 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={EventBg}
              alt="Volunteers at event"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-oghosa-gold/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 z-10"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-xl translate-x-1/2 translate-y-1/2 z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-video group">
              <div className="aspect-video bg-black mb-4 rounded-t-lg overflow-hidden">
                <iframe
                  src={"https://www.youtube.com/embed/3KFByzWH8K4"}
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-oghosa-gold/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat text-3xl font-bold text-oghosa-green mb-6"
          >
            Ready to Be Part of Our Story?
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/support/volunteer#"
              className="bg-oghosa-green hover:bg-oghosa-green/90 text-white font-montserrat font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Join Our Mission
            </Link>
            <Link
              to="/contact"
              className="border-2 border-oghosa-green text-oghosa-green hover:bg-white font-montserrat font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
