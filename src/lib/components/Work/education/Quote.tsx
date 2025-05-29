import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiAward, FiBook, FiUsers } from "react-icons/fi";

type Props = {};

const Quote = (props: Props) => {
  return (
    <section className="px-4 md:py-16 bg-gray-50">
      {/* Testimonial */}
      <div className=" max-w-4xl mx-auto bg-oghosa-green text-white p-8 rounded-xl">
        <blockquote className="text-center">
          <p className="text-xl italic mb-4 font-dmsans">
            "When you educate a child, you don't just change their test
            scores—you change their entire trajectory in life. I've seen
            firsthand how education can turn hopelessness into possibility."
          </p>
          <footer className="font-bold font-montserrat">
            — Dr. Amina Yusuf, Education Director
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
