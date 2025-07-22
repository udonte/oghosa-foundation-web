// components/CommunitySpotlights.tsx
import { featuredCommunities } from "@/lib/constants/locations/locations";
import { motion } from "framer-motion";

const CommunitySpotlights = () => {
  return (
    <section className="px-4 sm:px-6 py-16 lg:px-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-oghosa-green mb-4">
            Community Spotlights
          </h2>
          <div className="w-24 h-1 bg-oghosa-gold mx-auto mb-6"></div>
          <p className="font-dmsans text-lg text-gray-600 max-w-3xl mx-auto">
            See how we're transforming lives in these featured communities
          </p>
        </motion.div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredCommunities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Community Image */}
              <div className="h-48 lg:h-72 overflow-hidden">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-montserrat text-oghosa-green">
                    {community.name}
                  </h3>
                  <p className="font-dmsans text-gray-500">
                    {community.region}
                  </p>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Key Challenges
                  </h4>
                  <ul className="space-y-1">
                    {community.challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start font-dmsans text-gray-700"
                      >
                        <span className="text-oghosa-gold mr-2">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {community.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-bold font-montserrat text-oghosa-green">
                        {stat.value}
                      </p>
                      <p className="text-xs font-dmsans text-gray-600">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Programs */}
                <div>
                  <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-gray-500 mb-2">
                    Active Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {community.programs.map((program, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center bg-oghosa-green/10 text-oghosa-green px-3 py-1 rounded-full text-sm"
                      >
                        {program.icon && (
                          <span className="mr-1 text-oghosa-gold">
                            {<program.icon />}
                          </span>
                        )}
                        {program.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial (if exists) */}
                {community.testimonial && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <blockquote className="font-dmsans italic text-gray-600">
                      "{community.testimonial}"
                    </blockquote>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlights;
