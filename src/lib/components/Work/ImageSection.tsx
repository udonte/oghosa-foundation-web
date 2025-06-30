import { motion } from "framer-motion";

interface ImageSectionProps {
  imageSrc: string;
  imageDescription: string;
  className?: string;
  imageClassName?: string;
}

const ImageSection = ({ imageSrc, imageDescription }: ImageSectionProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="px-4 py-16 lg:px-24">
      <div>
        <motion.div
          variants={item}
          className="relative overflow-hidden shadow-2xl"
        >
          <img
            src={imageSrc}
            alt={imageDescription}
            className={`w-full h-auto object-cover`}
          />
          <div className="absolute inset-0  flex items-end p-8 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white"
            >
              <p className="text-xl uppercase font-bold tracking-wider mb-2 bg-oghosa-gold px-1 py-1">
                {imageDescription}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSection;
