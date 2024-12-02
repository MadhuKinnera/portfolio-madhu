import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, description }) => (
  <div className="relative pb-8 pl-8">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600 dark:bg-blue-500"></div>
    <div className="absolute left-0 w-4 h-4 -ml-2 bg-blue-600 rounded-full top-2 dark:bg-blue-500"></div>
    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">{year}</div>
    <div className="mt-1 text-xl font-bold text-gray-900 dark:text-white">{title}</div>
    <div className="text-gray-600 dark:text-gray-300">{company}</div>
    <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      year: '2024 Apr - Present',
      title: 'Software Development Engineer',
      company: 'NoBroker Technologies Solutions Pvt Lmt',
      description: 'Migrated date fields to epoch in MongoDB to enhance data consistency, optimized the employee attendance flow for thousands of daily users, improved refresh API response time from 2 seconds to 400ms, boosting customer satisfaction by 30%, and developed a flexible generic attribution storage system.'
    },
    {
      year: '2023 May - 2023 Sep',
      title: 'Software Trainee',
      company: 'Clayfin Technologies Pvt Lmt',
      description: 'Developed 36 REST APIs within a month and contributed to a team of 11 in building the **Personal Financial Management (PFM)** project, showcasing efficiency and teamwork.'
    }
  ];

  const education = [
    {
      year: '2021 Oct - 2024 May',
      title: 'B.Tech in Computer Science',
      company: 'SVS Group Of Institutions,Hanmakonda',
      description: 'In college, I gained strong computer science fundamentals while exploring Android and Web Development, Data Structures and Algorithms, Operating Systems, and Computer Networks, which fueled my passion for building efficient and scalable systems.'
    },
    {
      year: '2022 Apr - 2022 Dec',
      title: 'Graduated from Masai',
      company: 'Masai School,Bengaluru',
      description: 'At Masai, I learned frontend (HTML, CSS, JavaScript) and backend (Java, Spring Boot, MySQL) development, working on projects that strengthened my full-stack development skills.'
    },
    {
      year: '2018 July - 2021 Aug',
      title: 'Diploma in Computer Science',
      company: 'GPT Masab Tank,Hyderabad',
      description: 'During my diploma, I learned Digital Electronics, Computer Hardware, and programming languages like C and C++, while building a strong foundation in core computer fundamentals, which laid the groundwork for my deeper exploration into software development.'
    }
  ];

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