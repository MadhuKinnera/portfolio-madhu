import React from 'react';

const ProjectCard = ({ title, description, technologies, link, image }) => (
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        View Project →
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Rural Inventory & Business Management (Swagger)',
      description: 'Developed "Rural Inventory and Business Management," an innovative solution for rural businesses. This comprehensive system facilitates inventory management, sales records, and customer interactions, empowering businesses in remote areas. With features like multilingual support, offline mode, and predictive analytics, it caters to diverse needs. The project envisions boosting rural entrepreneurship, fostering economic growth, and overcoming challenges through technology, ensuring a sustainable and inclusive business environment.',
      technologies: ['Java' , 'SpringBoot', 'Spring Security', 'Spring Data JPA ' , 'MySQL' ,'Swagger'],
      link: 'https://abhedyam.madhukinnera.com/swagger-ui/index.html',
      github_link: 'https://github.com/MadhuKinnera/Abhedyam-Backend',
      image: 'https://madhukinnera.github.io/resources/abhedyam_modules.png?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Food Delivery App (Swagger)',
      description: 'Created A Food Delivery Application where Customer can place his order and Restaurant can Manage the order. Sevaral features available for customers as well as Restaurant admin . Using those features they can easily manage the food order and eat healthily.',
      technologies: ['Java' , 'SpringBoot', 'Spring Data JPA' , 'MySQL' ,'Swagger'],
      link: 'https://drive.google.com/drive/folders/1U2dO9mDrQp2HUjmVbGD_FnbNtPnMFhi4',
      github_link: 'https://github.com/Dev-Mriganka/innate-earth-4569',
      image: 'https://madhukinnera.github.io/resources/home%20page%20swagger%20cropped.jpg?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Online Hardware and Software Support System (Console Based)',
      description: 'Created A console Based Application. which resolves the queries of an organization the set of employees to raise complaints and there is set of engineers to solve the complains and an Admin to manage the Complains with sevaral useful features.',
     technologies: ['Java' , 'SpringBoot', 'Spring Security', 'Spring Data JPA ' , 'MySQL' ,'Swagger'],
      link: 'https://drive.google.com/file/d/1K09Ct7SWhCIL3IcSz6NOd7zZT2R4pvRI/view?usp=share_link',
      github_link: 'https://github.com/MadhuKinnera/Online-Complain-support-system',
      image: 'https://madhukinnera.github.io/resources/homepageohsss.jpg?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'TimeCamp Clone',
      description: 'Cloned TimeCamp website which is a Time Tracking Website. I leaded the team Along with 5 Developers as a team . Designed and Developed the website Using HTML,CSS,JavaScript Hosted On Netlify It is Responsive and easy to navigate and Simple User Interface.',
     technologies: ['HTML' , 'CSS', 'JavaScript'],
      link: 'https://timecampp.netlify.app/',
      github_link: 'https://github.com/MadhuKinnera/discreet-pie-7935',
      image: 'https://madhukinnera.github.io/resources/timecamp.jpg?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <section id="projects" className="py-20 transition-colors duration-200 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;