import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";
import Esohe from "@/assets/images/profile/esohe.jpg";
import SectionHeader from "../common/SectionHeader";

const FounderMessage = () => {
  const [showVideo, setShowVideo] = useState(false);

  // Configuration - update these values as needed
  const config = {
    imageUrl: Esohe, // Set to your image path
    youtubeEmbedId: "", // Set to your YouTube video ID if using video

    reverseLayout: false, // Set to true if you want text on left, media on right
  };

  // Media content (image or video)
  const mediaContent = () => {
    if (config.youtubeEmbedId) {
      return (
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
          {!showVideo ? (
            <div
              className="relative h-64 md:h-80 w-full bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${config.youtubeEmbedId}/maxresdefault.jpg)`,
              }}
              onClick={() => setShowVideo(true)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="bg-oghosa-green bg-opacity-90 rounded-full p-4">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  Click to play
                </span>
              </div>
            </div>
          ) : (
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${config.youtubeEmbedId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Founder's message"
              />
            </div>
          )}
        </div>
      );
    } else if (config.imageUrl) {
      return (
        <div className="h-full w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={config.imageUrl}
            alt="Esohe Oriakhi - Founder"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      );
    }

    // Fallback if no media is provided
    return (
      <div className="h-64 md:h-80 w-full bg-oghosa-green bg-opacity-10 rounded-lg shadow-lg flex items-center justify-center px-4 py-8 lg:px-24 lg:py-16">
        <div className="text-center p-4">
          <FaQuoteLeft className="text-oghosa-green text-4xl mx-auto mb-4" />
          <p className="text-oghosa-green font-montserrat italic">
            "It will be"
          </p>
          <p className="text-oghosa-gold text-sm mt-2">- Oghosa Godson</p>
        </div>
      </div>
    );
  };

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 py-8 lg:px-24 lg:py-16">
        <SectionHeader
          title="Message from our Founder"
          subtitle="Understand What We Do"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`flex flex-col gap-8 md:gap-12 items-center`}
        >
          {/* Media Section */}
          <div className="w-full md:w-1/2">{mediaContent()}</div>

          {/* Text Content Section */}
          <div className="w-full md:max-w-5xl">
            <p className="text-gray-700 mb-6">
              At the Oghosa Godson Foundation (OGF), our mission is clear: to
              inspire hope, improve lives, and create lasting impact within our
              communities. We believe in practical, people-centered initiatives
              that address some of the most pressing challenges around us.
            </p>

            <p className="text-gray-700 mb-6">
              Our work is built around five key pillars:
            </p>

            <ol className="list-decimal pl-5 mb-6 space-y-3">
              <li className="text-gray-700">
                <span className="font-semibold text-oghosa-green">
                  Promoting Education
                </span>{" "}
                – providing opportunities for learning and growth that empower
                individuals to achieve their potential.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-oghosa-green">
                  Enhancing Health Awareness
                </span>{" "}
                – equipping communities with knowledge and resources to live
                healthier lives.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-oghosa-green">
                  Supporting Sickle Cell Patients
                </span>{" "}
                – offering care, advocacy, and support to individuals and
                families affected by the condition.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-oghosa-green">
                  Ensuring Food Security
                </span>{" "}
                – tackling hunger through sustainable solutions that provide
                nourishment and dignity.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold text-oghosa-green">
                  Equipping Communities with Sustainable Skills
                </span>{" "}
                – creating pathways for independence and resilience through
                vocational training and empowerment.
              </li>
            </ol>

            <p className="text-gray-700 mb-6">
              The OGF is more than a foundation—it is a movement to drive
              positive change, one person, and one community at a time. Our
              approach is rooted in compassion, sustainability, and the belief
              that everyone deserves the opportunity to thrive.
            </p>

            <p className="text-gray-700 mb-6">
              As Founder and Chairperson, I am committed to building an
              organization that not only responds to immediate needs but also
              plants seeds for long-term transformation.
            </p>

            <p className="text-gray-700 mb-8">
              We invite you—partners, friends, and allies—to join us in this
              mission. Together, we can shape a future filled with hope,
              opportunity, and shared progress.
            </p>

            <div className=" text-center">
              <p className="text-oghosa-green font-montserrat font-bold">
                Esohe Oriakhi
              </p>
              <p className="text-oghosa-gold">Founder & Chairperson</p>
              <p className="text-gray-600">The Oghosa Godson Foundation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMessage;
