import { data } from '../data/profile_data';

const TimelineItem = ({ year, title, company, description }) => (
  <div className="relative pb-8 pl-8">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600 dark:bg-blue-500"></div>
    <div className="absolute left-0 w-4 h-4 -ml-2 bg-blue-600 rounded-full top-2 dark:bg-blue-500"></div>
    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{year}</div>
    <div className="mt-1 text-xl font-bold text-gray-900 dark:text-white">{title}</div>
    <div className="text-gray-600 dark:text-gray-300">{company}</div>
    <p className="mt-2 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);

const Experience = () => {

  const experiences = data?.experiences;
  const education = data?.education;

  return (
    <section id="experience" className="py-20 transition-colors duration-200 bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
          <h3 className="mt-12 mb-6 text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
          {education.map((edu, index) => (
            <TimelineItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;