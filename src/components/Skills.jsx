import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="px-4 py-2 text-sm text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-100"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Go', 'JavaScript', 'Kotlin', 'C', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'Spring Framework', 'Hibernate', 'Spring Security', 'Maven', 'Jetpack Compose']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Clickhouse', 'MongoDB', 'Redis']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'Nginx', 'AWS']
    },
    {
      title: 'Other Technologies',
      skills: ['REST APIs', 'Web Sockets', 'Data Structures', 'Agile', 'Microservices', 'Linux']
    }
  ];
  

  return (
    <section id="skills" className="py-20 transition-colors duration-200 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;