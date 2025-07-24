import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiAward, FiHeart } from "react-icons/fi";
import FounderPortrait from "@/assets/images/esohe.jpg";
import FounderLegacy1 from "@/assets/images/charity-program1.jpg";
import FounderLegacy2 from "@/assets/images/event-volunteer.jpg";
import moment1 from "@/assets/images/moment1.jpg";
import moment2 from "@/assets/images/moment2.jpg";
import moment3 from "@/assets/images/moment3.jpg";
import moment4 from "@/assets/images/moment4.jpg";
import moment5 from "@/assets/images/moment5.jpg";
import moment6 from "@/assets/images/moment6.jpg";
import Team from "@/assets/images/team.jpg";
import { BsQuote } from "react-icons/bs";
import SubHeroSection from "@/lib/components/common/SubHeroSection";

const Founder = () => {
  const timelineEvents = [
    {
      year: "1985",
      title: "Birth in Benin City",
      description:
        "Born into a family that valued education and community service",
    },
    {
      year: "2007",
      title: "First Charity Initiative",
      description:
        "Organized free tutoring for underprivileged children while in university",
    },
    {
      year: "2012",
      title: "Tech for Good",
      description:
        "Founded a tech incubator focused on social impact solutions",
    },
    {
      year: "2015",
      title: "Oghosa Godson Foundation",
      description:
        "Established the foundation to formalize his charitable work",
    },
    {
      year: "2020",
      title: "National Recognition",
      description:
        "Awarded the Humanitarian Service Medal by the Nigerian government",
    },
  ];

  const corePrinciples = [
    {
      icon: <FiHeart className="text-oghosa-gold text-2xl" />,
      title: "Compassion First",
      description:
        "Believed in meeting people at their point of need without judgment",
    },
    {
      icon: <FiAward className="text-oghosa-gold text-2xl" />,
      title: "Empowerment",
      description:
        "Focused on giving people tools to transform their own lives",
    },

    {
      icon: <FiArrowRight className="text-oghosa-gold text-2xl" />,
      title: "Innovation",
      description:
        "Embraced technology as a means to solve social issues and improve lives",
    },
    {
      icon: <FiCalendar className="text-oghosa-gold text-2xl" />,
      title: "Sustainability",
      description:
        "Believed in creating lasting change through community involvement",
    },
    {
      icon: <FiHeart className="text-oghosa-gold text-2xl" />,
      title: "Inclusivity",
      description:
        "Advocated for equal opportunities for all, regardless of background",
    },

    {
      icon: <FiAward className="text-oghosa-gold text-2xl" />,
      title: "Integrity",
      description:
        "Conducted all initiatives with transparency and accountability",
    },
    // Add other principles...
  ];

  const galleryImages = [
    {
      src: moment1,
      caption:
        "Oghosa teaching vocational skills at our Benin City center (2016)",
      category: "Education",
    },
    {
      src: moment2,
      caption:
        "Distributing food packages during the 2018 flood relief efforts",
      category: "Humanitarian",
    },
    {
      src: moment3,
      caption: "Speaking at the National Sickle Cell Awareness Summit",
      category: "Advocacy",
    },
    {
      src: moment4,
      caption: "With the first cohort of scholarship recipients",
      category: "Mentorship",
    },
    {
      src: moment5,
      caption: "Community meeting in rural Edo State",
      category: "Development",
    },
    {
      src: moment6,
      caption: "Receiving the Humanitarian Service Award",
      category: "Recognition",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <SubHeroSection
        image={Team}
        title="Our Founder"
        subtitle=" A legacy of compassion that continues to inspire"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Who We Are", href: "/about" },
          { label: "The Founder", href: "/founder" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Portrait & Quote Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3 relative"
          >
            <img
              src={FounderPortrait}
              alt="Oghosa Godson"
              className="rounded-xl shadow-2xl w-full border-4 border-white"
            />
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-xl border-4 border-oghosa-gold/50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3"
          >
            <div className="bg-white/90 p-8 rounded-xl shadow-md relative">
              <BsQuote className="absolute top-6 left-6 text-oghosa-gold/50 text-5xl" />
              <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-6 relative z-10">
                It Will Be (IWB)
              </h2>
              <BsQuote className="absolute top-6 left-6 text-oghosa-gold/50 text-5xl" />

              <div className="font-dmsans text-gray-700 text-lg leading-relaxed space-y-4 relative z-10">
                <p>
                  Oghosa Godson - my beloved younger brother, was not just
                  family - he was a beacon of kindness, a true friend to all,
                  embodying humility, and an unwavering commitment to humanity.
                  He lived a life of selfless generosity, offering help without
                  discrimination and always meeting people at their level.
                  Whether it was a struggling family in a rural community, a
                  friend in need, or an elderly person requiring assistance,
                  Oghosa was there—ensuring that no one around him went hungry
                  or felt alone.
                </p>
                <p>
                  Charity was not just something he did; it was who he was.
                  Giving was his daily lifestyle, and he never hesitated to
                  share—even if it meant parting with his last cash to help
                  another. His compassion knew no bounds, and he believed deeply
                  in the power of kindness to transform lives.
                </p>
                <p>
                  Beyond his charitable spirit, Oghosa was passionate about
                  technology and had an entrepreneurial and artistic mindset. He
                  loved learning new things, constantly exploring innovative
                  ideas and creative expressions. His favorite color, white,
                  symbolized his purity of heart and clarity of purpose.
                </p>
                <p>
                  One of his most profound beliefs was encapsulated in his
                  mantra: "It will be("IWB")." This deep-rooted philosophy
                  guided his life and continues to inspire the mission of the
                  Oghosa Godson Foundation (OGF)—a movement dedicated to
                  carrying forward his legacy of kindness, empowerment, and
                  unconditional support for the less privileged.
                </p>
                <p>
                  Through OGF, we strive to honor his memory by making a lasting
                  impact, ensuring that his vision of a better, more
                  compassionate world lives on.
                </p>
                <p>
                  This Foundation is not just a tribute, but a call to action -
                  to live with the same openness, care and generosity that
                  defined Oghosa's life. We invite you to join us in this
                  mission, and to make a difference in the lives of others.
                </p>
              </div>
              <button>Join us</button>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-12 text-center">
            A Life of Impact
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-oghosa-gold/30 top-0"></div>

            <div className="space-y-12 pl-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-oghosa-gold border-4 border-white flex items-center justify-center shadow-md">
                    <FiCalendar className="text-white text-sm" />
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex items-center mb-2">
                      <div className="font-montserrat font-bold text-oghosa-green mr-4 text-xl">
                        {event.year}
                      </div>
                      <div className="font-montserrat font-bold text-gray-800">
                        {event.title}
                      </div>
                    </div>
                    <p className="font-dmsans text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legacy Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-8 text-center">
            The Legacy Continues
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={FounderLegacy1}
                alt="Oghosa teaching children"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-2">
                  Education Initiatives
                </h3>
                <p className="font-dmsans text-gray-600">
                  Oghosa's passion for education lives on through our
                  scholarship programs and school development projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <img
                src={FounderLegacy2}
                alt="Community health outreach"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-2">
                  Community Health
                </h3>
                <p className="font-dmsans text-gray-600">
                  Our medical outreach programs continue Oghosa's commitment to
                  bringing healthcare to the underserved.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-oghosa-green/5 p-12 rounded-2xl"
        >
          <h2 className="font-montserrat text-3xl font-bold text-oghosa-green mb-12 text-center">
            Oghosa's Core Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="bg-oghosa-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {principle.icon}
                </div>
                <h3 className="font-montserrat text-xl font-bold text-oghosa-green mb-2">
                  {principle.title}
                </h3>
                <p className="font-dmsans text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <section className="px-4 py-16 lg:px-24 lg:py-24 bg-oghosa-green/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat text-3xl font-bold text-oghosa-green mb-12 text-center"
          >
            Moments That Defined a Legacy
          </motion.h2>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white">
                    <span className="inline-block bg-oghosa-gold text-oghosa-green text-xs font-bold px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="font-dmsans">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-oghosa-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-montserrat text-3xl md:text-4xl font-bold mb-6"
          >
            Continue Oghosa's Legacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-dmsans text-xl max-w-2xl mx-auto mb-8"
          >
            Join us in bringing the "It Will Be" philosophy to communities in
            need
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-oghosa-gold hover:bg-oghosa-gold/90 text-oghosa-green font-montserrat font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Donate in Oghosa's Memory
            </motion.a>
            <motion.a
              href="/volunteer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-montserrat font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Become a Volunteer
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
