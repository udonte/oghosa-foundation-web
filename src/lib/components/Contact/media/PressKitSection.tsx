import {
  FaDownload,
  FaFilePdf,
  FaFileImage,
  FaFileArchive,
  FaLock,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "../../common/SectionHeader";

const PressKitSection = () => {
  // Organized press kit assets
  const pressKitCategories = [
    {
      title: "Brand Assets",
      icon: <FaFileImage className="text-oghosa-gold" />,
      items: [
        {
          name: "Logo Pack",
          description: "High-resolution logos in EPS, PNG, and SVG formats",
          format: "ZIP",
          size: "8.4 MB",
          download: "/downloads/oghosa-logos.zip",
          preview: "/previews/logos-preview.jpg",
          locked: false,
        },
        {
          name: "Brand Guidelines",
          description: "Complete visual identity documentation",
          format: "PDF",
          size: "3.2 MB",
          download: "/downloads/oghosa-brand-guidelines.pdf",
          preview: "/previews/guidelines-preview.jpg",
          locked: false,
        },
      ],
    },
    {
      title: "Media Resources",
      icon: <FaFilePdf className="text-oghosa-gold" />,
      items: [
        {
          name: "2023 Annual Report",
          description: "Complete foundation impact report",
          format: "PDF",
          size: "12.1 MB",
          download: "/downloads/oghosa-annual-report-2023.pdf",
          preview: "/previews/report-preview.jpg",
          locked: false,
        },
        {
          name: "2024 Q1 Press Releases",
          description: "All official statements (January-March)",
          format: "ZIP",
          size: "4.7 MB",
          download: "/downloads/press-releases-q1-2024.zip",
          locked: true,
          accessNote: "Embargoed until June 15, 2024",
        },
      ],
    },
    {
      title: "Multimedia",
      icon: <FaFileArchive className="text-oghosa-gold" />,
      items: [
        {
          name: "Program B-Roll",
          description: "HD footage of field operations (30s clips)",
          format: "MP4",
          size: "2.1 GB",
          download: "",
          externalLink: "https://vimeo.com/oghosa/broll",
          locked: false,
        },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Press Kit"
          subtitle=" Download official resources, high-resolution assets, and press-ready
            materials"
        />
        <div className="space-y-8">
          {pressKitCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <div className="bg-oghosa-green/5 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="mr-3 text-xl">{category.icon}</div>
                  <h3 className="text-xl font-montserrat font-bold text-oghosa-green">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start">
                          <div className="mr-4 mt-1">
                            {item.locked ? (
                              <FaLock className="text-oghosa-gold" />
                            ) : (
                              <FaDownload className="text-oghosa-green" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-montserrat font-bold text-gray-900">
                              {item.name}
                              {item.locked && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-oghosa-gold/10 text-oghosa-gold">
                                  Embargoed
                                </span>
                              )}
                            </h4>
                            <p className="font-dm-sans text-gray-600 mt-1">
                              {item.description}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {item.format} • {item.size}
                              </span>
                              {item.locked && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-oghosa-green/10 text-oghosa-green">
                                  {item.accessNote}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {item.locked ? (
                          <button
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold"
                            onClick={() => alert("Redirect to secure login")}
                          >
                            Request Access
                          </button>
                        ) : item.externalLink ? (
                          <a
                            href={item.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold"
                          >
                            View on Vimeo{" "}
                            <FaExternalLinkAlt className="ml-1.5 h-3 w-3" />
                          </a>
                        ) : (
                          <a
                            href={item.download}
                            download
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-oghosa-green hover:bg-oghosa-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold"
                          >
                            Download <FaDownload className="ml-1.5 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 bg-oghosa-gold/5 p-6 rounded-lg border border-oghosa-gold/20"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <FaLock className="h-5 w-5 text-oghosa-gold" />
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-montserrat font-bold text-oghosa-green">
                Embargoed Materials Access
              </h4>
              <p className="mt-1 font-dm-sans text-gray-700">
                Journalists with approved credentials may request access to
                embargoed press materials.
              </p>
              <div className="mt-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-oghosa-gold text-sm font-medium rounded-md shadow-sm text-oghosa-green bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-oghosa-gold"
                >
                  Verify Media Credentials
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressKitSection;
