// src/pages/work/index.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Team from "@/assets/images/work/programs/work5.jpg";

import SubHeroSection from "@/lib/components/common/SubHeroSection";
import SectionHeader from "@/lib/components/common/SectionHeader";
import { programs } from "@/lib/constants/work";
import CTASection from "@/lib/components/Home/CTASection";

const Work = () => {
  const featuredPrograms = programs.filter((program) => program.featured);
  const otherPrograms = programs.filter((program) => !program.featured);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubHeroSection
        image={Team}
        title="  What We Do"
        subtitle="Programs and initiatives that address critical needs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Do", href: "/work" },
        ]}
      />

      {/* Featured Programs */}
      <section className="px-4 py-16 lg:px-24 lg:py-24">
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
      <section className="px-4 py-16 lg:px-24 lg:py-24">
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
      <CTASection
        title="  Want to Get Involved?"
        subtitle=" Whether you want to volunteer, donate, or partner with us, we'd
              love to have you join our mission to create positive change."
        buttonOneText=" Contact Us"
        buttonOneLink="/contact"
        buttonTwoText="   Make a Donation"
        buttonTwoLink="/support/donate"
      />
    </motion.main>
  );
};

// Enhanced Program Card Component with working stats
const ProgramCard: React.FC<{
  program;
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
