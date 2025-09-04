import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiAward, FiHeart } from "react-icons/fi";
import FounderPortrait from "@/assets/images/profile/esohe.jpg";
import FounderLegacy1 from "@/assets/images/charity-program1.jpg";
import FounderLegacy2 from "@/assets/images/event-volunteer.jpg";
import moment1 from "@/assets/images/moment1.jpg";
import moment2 from "@/assets/images/moment2.jpg";
import moment3 from "@/assets/images/moment3.jpg";
import moment4 from "@/assets/images/moment4.jpg";
import moment5 from "@/assets/images/moment5.jpg";
import moment6 from "@/assets/images/moment6.jpg";
import Team from "@/assets/images/team.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import CTASection from "@/lib/components/Home/CTASection";
import SectionHeader from "@/lib/components/common/SectionHeader";

const Founder = () => {
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
    <main className="">
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
        <div className="flex flex-col gap-12 items-center mb-24 ">
          <motion.section
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3 relative"
          >
            <div className="flex flex-col items-center">
              <img
                src={FounderPortrait}
                alt="Oghosa Godson"
                className="rounded-full md:rounded-2xl shadow-2xl shadow-oghosa-gold/30 w-[300px] md:w-full border-4 border-oghosa-gold"
              />
              {/* <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-xl border-4 border-oghosa-gold/50"></div> */}
              <div className="flex flex-col items-center">
                <p className="mt-8 font-bold flex flex-col gap-2 items-center justify-center">
                  <span className="text-3xl text-oghosa-green">
                    Esohe Oriakhi
                  </span>{" "}
                  <span className="text-sm text-oghosa-gold">
                    LL.B, BL., ICSAN, CAMS
                  </span>
                </p>

                <p className="mt-2 italic text-gray-400">
                  Founder/Executive Director
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/3"
          >
            <div className="bg-white/90 p-4 md:p-8 rounded-xl shadow-md relative">
              <SectionHeader title="The Heart Behind the Oghosa Godson Foundation" />

              <div className="font-dmsans text-gray-700 text-lg leading-relaxed space-y-4 relative z-10">
                <p>
                  My brother, Oghosa Godson, wasn’t just my younger sibling, he
                  was light, laughter, and the soul of every room he entered. He
                  was the kind of person who remembered your birthday even if
                  you forgot his. A listening ear. A gentle encourager. A
                  protector of dreams. And above all, a true friend to all.
                </p>
                <p>
                  When we lost him, my world cracked open. Grief is a heavy
                  thing, but what carried me through were the stories. Messages
                  from classmates, neighbours, and strangers: “He gave me his
                  jacket when I had none.” “He waited with me until my ride
                  came.” “He never judged. Just helped.”
                </p>
                <p>
                  That was Oghosa. The boy who gave without asking. The young
                  man who made space for others, even when he had so little.
                </p>
                <p>
                  But for me, his role was even deeper. I had no lawyers in my
                  family. No blueprint. I had to figure out how to be an
                  excellent lawyer completely on my own. And through it all, it
                  was Oghosa who believed in me the most. He kept me going
                  through the hard days. He made me feel seen, capable, and
                  enough.
                </p>
                <p>
                  I remember one moment so vividly: I was preparing for
                  interviews at a multinational company. What should have been a
                  joyful season was clouded by unimaginable loss, I had just
                  buried my best guy. I cried before every interview stage. But
                  in the middle of that grief, I heard his voice in my heart:
                  “Go in there and shine. You were built for this.” So I pulled
                  myself together, and I did exactly that. I got the job.
                </p>
                <p>
                  Not because I was strong, but because I was standing on his
                  belief in me.
                </p>
                <p>
                  That’s when the question came, one I couldn’t ignore: How do
                  we make sure his love doesn’t end with him?
                </p>
                <p>
                  The Oghosa Godson Foundation (OGF) is my answer. But it’s not
                  just mine, it’s all of ours. This isn’t just a charity. It’s a
                  promise. To continue what he started, lifting others up,
                  quietly but powerfully.
                </p>
                <p>
                  Beyond his generous spirit, Oghosa was passionate about
                  technology, with an entrepreneurial and artistic mindset. He
                  loved learning, constantly exploring innovative ideas and
                  creative expressions. His favorite color, white, symbolized
                  his purity of heart and clarity of purpose.
                </p>
                <p>
                  One of his most profound beliefs was captured in his mantra:
                  “It will be (IWB).” This simple yet powerful philosophy guided
                  his life, and now inspires the mission of OGF: to carry
                  forward his legacy of kindness, empowerment, and unconditional
                  support for the less privileged.
                </p>
                <p>
                  Through OGF, we strive to honor his memory by making a lasting
                  impact, ensuring that his vision of a better, more
                  compassionate world lives on.
                </p>
                <p>
                  This foundation is not just a tribute, it is a call to action.
                  A call to stand in the gap, with heart, with purpose, with
                  quiet strength.
                </p>
                <p>
                  Our mission is to inspire hope and improve lives by: promoting
                  education, enhancing health awareness, supporting sickle cell
                  patients, ensuring food security, and equipping communities
                  with sustainable skills.
                </p>
                <p>
                  Welcome to the Oghosa Godson Foundation. Together, we can let
                  love keep working.
                </p>
              </div>
              <button>Join us</button>
            </div>
          </motion.div>
        </div>

        {/* Legacy Gallery */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <SectionHeader title="The Legacy Continues" />
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
        </motion.section>

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
      <CTASection
        title=" Continue Oghosa's Legacy"
        subtitle="Join us in bringing the It Will Be philosophy to communities in
            need"
        buttonOneText="Donate in Oghosa's Memory"
        buttonOneLink="/support/donate"
        buttonTwoText="  Become a Volunteer"
        buttonTwoLink="/support/volunteer"
      />
    </main>
  );
};

export default Founder;
