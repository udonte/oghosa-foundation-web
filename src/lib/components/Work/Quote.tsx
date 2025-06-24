import React from 'react';

interface QuoteProps {
  content: string;
  name: string;
  position: string;
}

const Quote: React.FC<QuoteProps> = ({
  content,
  name,
  position,
}) => {
  return (
    <section className={`px-4 md:py-16 bg-gray-50 `}>
      <div className="max-w-4xl mx-auto bg-oghosa-green text-white p-8 rounded-xl">
        <blockquote className="text-center">
          <p className={`text-xl italic mb-4 font-dmsans `}>
            "{content}"
          </p>
          <footer className="font-bold font-montserrat">
            — {name}, {position}
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;