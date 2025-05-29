import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const SubHeroSection = ({ image, title, subtitle }: Props) => {
  return (
    <section className="relative bg-oghosa-green text-white py-24 overflow-hidden">
      <div className="absolute inset-0  opacity-40 ">
        <img
          src={image}
          alt="Background Image"
          loading="lazy"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-24 h-1 bg-oghosa-gold mx-auto mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-dmsans text-xl md:text-2xl max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default SubHeroSection;
