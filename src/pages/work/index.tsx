// src/pages/work/index.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  FaHandsHelping,
  FaBook,
  FaHeartbeat,
  FaClinicMedical,
  FaUtensils,
  FaTools,
  FaHands,
} from "react-icons/fa";
import { Program } from "@/lib/types/work";
import Team from "@/assets/images/work/programs/work5.jpg";
import Program1 from "@/assets/images/work/programs/work1.jpg";
import Program2 from "@/assets/images/work/programs/work2.jpg";
import Program3 from "@/assets/images/work/programs/work3.jpg";
import Program4 from "@/assets/images/work/programs/work4.jpg";
import Program5 from "@/assets/images/work/programs/work5.jpg";
import Program6 from "@/assets/images/work/programs/work6.jpg";
import Program7 from "@/assets/images/work/programs/work2.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import SectionHeader from "@/lib/components/SectionHeader";

const Work = () => {
  const programs: Program[] = [
    {
      label: "Programs & Initiatives",
      page: "/work/programs",
      description: "Overview of all our programs and initiatives making impact",
      icon: FaHandsHelping,
      image: Program1,
      featured: true,
      stats: [
        { value: "20+", label: "Active Programs" },
        { value: "50+", label: "Communities Reached" },
      ],
    },
    {
      label: "Education Programs",
      page: "/work/education",
      description: "Our initiatives to improve access to quality education",
      icon: FaBook,
      image: Program2,
      featured: true,
      stats: [
        { value: "500+", label: "Students Supported" },
        { value: "15", label: "Schools Renovated" },
      ],
    },
    {
      label: "Health Initiatives",
      page: "/work/health",
      description: "Programs focused on community health and wellbeing",
      icon: FaHeartbeat,
      image: Program3,
      featured: true,
      stats: [
        { value: "10+", label: "Sickle Cell Treatments" },
        { value: "15+", label: "Free Surgeries" },
      ],
    },
    {
      label: "Sickle Cell Support",
      page: "/work/sickle-cell",
      description:
        "Specialized support for individuals with sickle cell disease",
      icon: FaClinicMedical,
      image: Program4,
    },
    {
      label: "Food Security",
      page: "/work/food-security",
      description: "Initiatives to combat hunger and improve nutrition",
      icon: FaUtensils,
      image: Program5,
    },
    {
      label: "Skills Training",
      page: "/work/skills-training",
      description: "Vocational training and empowerment programs",
      icon: FaTools,
      image: Program6,
    },
    {
      label: "Charitable Outreach",
      page: "/work/outreach",
      description: "Community outreach and support programs",
      icon: FaHands,
      image: Program7,
    },
  ];

  const featuredPrograms = programs.filter((program) => program.featured);
  const otherPrograms = programs.filter((program) => !program.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <SubHeroSection
        image={Team}
        title="  What We Do"
        subtitle="Programs and initiatives that address critical needs"
      />

      <div className="px-4 py-16 lg:px-24 lg:py-24 mx-auto">
        {/* Featured Programs */}
        <section className="mb-20">
          <SectionHeader
            title="Featured Programs"
            subtitle=" Explore our key programs that are making a significant impact in
            communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <ProgramCard
                key={program.page}
                program={program}
                index={index}
                featured
              />
            ))}
          </div>
        </section>

        {/* All Programs */}
        <section>
          <SectionHeader
            title="All our Programs"
            subtitle="Discover the full range of our programs and initiatives that are"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPrograms.map((program, index) => (
              <ProgramCard
                key={program.page}
                program={program}
                index={index + featuredPrograms.length}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-oghosa-green rounded-xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
              Want to Get Involved?
            </h2>
            <p className="text-lg font-dmsans mb-8">
              Whether you want to volunteer, donate, or partner with us, we'd
              love to have you join our mission to create positive change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-oghosa-gold text-white font-dmsans font-medium rounded-lg hover:bg-oghosa-gold/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/donate"
                className="px-6 py-3 bg-white text-oghosa-green font-dmsans font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

// Enhanced Program Card Component with working stats
const ProgramCard: React.FC<{
  program: Program;
  index: number;
  featured?: boolean;
}> = ({ program, index, featured = false }) => {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col ${
        featured ? "ring-2 ring-oghosa-gold/30" : ""
      }`}
    >
      <Link to={program.page} className=" h-full group flex flex-col">
        {/* Image Section */}
        <div className="relative h-40 md:h-48 overflow-hidden flex-shrink-0">
          <img
            src={program.image}
            alt={program.label}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          <div className="absolute top-4 left-4 p-2 rounded-full bg-oghosa-green/90 text-white">
            <Icon className="text-xl" />
          </div>
        </div>

        {/* Content Section - now using flex-col and flex-grow for proper spacing */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold font-montserrat text-oghosa-green mb-2">
            {program.label}
          </h3>

          <p className="text-gray-600 font-dmsans mb-4">
            {program.description}
          </p>

          {/* Stats Section - now properly positioned */}
          {program.stats && program.stats.length > 0 && (
            <div className="mt-auto mb-4 grid grid-cols-2 gap-2">
              {program.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-oghosa-gold/10 p-2 rounded-lg text-center border border-oghosa-gold/20"
                >
                  <p className="text-lg font-bold font-montserrat text-oghosa-green">
                    {stat.value}
                  </p>
                  <p className="text-xs font-dmsans text-gray-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CTA Link */}
          <div className="flex items-center text-oghosa-gold font-dmsans font-medium mt-2 group-hover:underline">
            <span>Learn more</span>
            <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Work;
