import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

const SectionHeader = ({ title, subtitle, icon }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center justify-center p-3 rounded-full mb-4">
        {icon && (
          <div className="inline-flex items-center justify-center p-3 rounded-full mb-4">
            {icon}
          </div>
        )}
      </div>
      <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-oghosa-green mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-oghosa-gold mx-auto mb-6"></div>
      <p className="font-dmsans text-lg max-w-3xl mx-auto text-oghosa-gold">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
