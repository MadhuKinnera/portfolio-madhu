import { data } from "../data/profile_data";

const ProjectCard = ({ title, description, technologies, link, github_link,image }) => (
  <div className="overflow-hidden bg-white rounded-lg shadow-md">
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-around pt-2'>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        Goto Live Project →
      </a>
      
      <a
        href={github_link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        Goto Code →
      </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
   const projects = data?.projects;
  return (
    <section id="projects" className="py-10 transition-colors duration-200 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects && projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;