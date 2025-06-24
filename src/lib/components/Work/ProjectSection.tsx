import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiMapPin } from "react-icons/fi";
import { Project, ProjectsSectionProps } from "../../types/work";
import SectionHeader from "../common/SectionHeader";

const ProjectsSection = ({
  title = "Our Projects",
  subtitle = "Showcasing real-world execution of our work",
  projects,
  containerClass = "",
  cardClass = "",
  tagClass = "bg-oghosa-gold/10 text-oghosa-green",
}: ProjectsSectionProps) => {
  return (
    <section
      className={`py-8 px-4 lg:py-16 lg:px-24 bg-oghosa-green/5 ${containerClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} />
        {projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                cardClass={cardClass}
                tagClass={tagClass}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  cardClass: string;
  tagClass: string;
}

const ProjectCard = ({ project, cardClass, tagClass }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border-l-4 ${
        project.status === "ongoing"
          ? "border-oghosa-gold"
          : "border-oghosa-green"
      } ${cardClass}`}
    >
      <div className="h-48 overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              project.status === "ongoing"
                ? "bg-oghosa-gold text-white"
                : "bg-oghosa-green text-white"
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${tagClass} font-montserrat`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-oghosa-green mb-2 font-montserrat">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 font-dmsans">{project.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4 font-dmsans">
          <FiMapPin className="mr-1.5 text-oghosa-gold" />
          <span className="mr-4">{project.location}</span>
          <FiCalendar className="mr-1.5 text-oghosa-gold" />
          <span>{project.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
