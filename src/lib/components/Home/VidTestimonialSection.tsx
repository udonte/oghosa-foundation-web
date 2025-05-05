import { motion } from "framer-motion";
import { FiPlay, FiHeart, FiShare2, FiArrowRight } from "react-icons/fi";

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Adesuwa Johnson",
      role: "Scholarship Beneficiary",
      quote:
        "The foundation paid my tuition when I had nowhere to turn. Now I'm studying medicine to help others.",
      videoUrl: "https://www.youtube.com/embed/pQj7WlS4Ia4",
      duration: "2:15",
      likes: 124,
    },
    {
      id: 2,
      name: "Emmanuel Okafor",
      role: "Vocational Training Graduate",
      quote:
        "From apprentice to business owner - the skills I learned changed my family's future.",
      videoUrl: "https://www.youtube.com/embed/v0Vda83AeV0",
      duration: "1:48",
      likes: 89,
    },
    {
      id: 3,
      name: "Grace Oluwaseyi",
      role: "Sickle Cell Support Group",
      quote:
        "They gave us hope when we felt alone. The counseling saved my marriage.",
      videoUrl: "https://www.youtube.com/embed/D9Ihs241zeg",
      duration: "3:02",
      likes: 156,
    },
  ];

  return (
    <section className="px-4 py-16 lg:px-24 lg:py-24 bg-gradient-to-b from-white to-oghosa-green/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-oghosa-gold/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-oghosa-green/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
            Voices of Hope
          </h2>
          <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
          <p className="font-dmsans text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people whose lives have been transformed through
            our work
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Video thumbnail with play button */}
              <div className="relative aspect-video group">
                <div className="aspect-video bg-black mb-4 rounded-t-lg overflow-hidden">
                  <iframe src={item.videoUrl} className="w-full h-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-montserrat text-xl text-oghosa-green mb-2">
                  {item.name}
                </h3>
                <p className="font-dmsans text-sm text-oghosa-gold mb-4">
                  {item.role}
                </p>
                <blockquote className="font-dmsans text-gray-700 italic mb-6">
                  "{item.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center bg-oghosa-green hover:bg-oghosa-gold text-white font-montserrat font-semibold py-3 px-8 rounded-full transition-all duration-300 group shadow-md hover:shadow-lg">
            View More Stories
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
