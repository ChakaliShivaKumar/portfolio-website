import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Code, Database, Cloud, BarChart3 } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const experiences = [
    {
      company: 'Deloitte USI',
      role: 'React / Power BI Developer',
      duration: 'Sep 2023 – Jul 2024',
      location: 'Hyderabad, India',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      achievements: [
        'Built React applications and Power BI dashboards using DAX, M, SQL Server, Azure Synapse, and REST APIs',
        'Automated reporting pipelines and collaborated in Agile development teams',
        'Developed data visualization solutions for business intelligence and analytics',
        'Implemented responsive web applications with modern React practices',
        'Worked with Azure cloud services for data processing and storage',
        'Collaborated with cross-functional teams to deliver high-quality solutions'
      ],
      technologies: ['React', 'Power BI', 'DAX', 'M Query', 'SQL Server', 'Azure Synapse', 'REST APIs', 'Agile']
    },
    {
      company: 'Amazon',
      role: 'Cloud Infrastructure DevOps Intern',
      duration: 'Jan 2023 – Jun 2023',
      location: 'Hyderabad, India',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      achievements: [
        'Improved CI/CD pipelines and managed cloud infrastructure',
        'Resolved deployment and security issues in production environments',
        'Automated infrastructure provisioning and configuration management',
        'Implemented monitoring and logging solutions for better observability',
        'Worked with AWS services for cloud infrastructure management',
        'Collaborated with senior engineers on large-scale infrastructure projects',
        '🏆 Received accolade from senior manager for exceptional performance and contributions'
      ],
      technologies: ['AWS', 'CI/CD', 'Docker', 'Jenkins', 'GitHub Actions', 'Infrastructure as Code', 'Monitoring']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Work Experience
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              My professional journey in software development and cloud technologies
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-full bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                    <exp.icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="card p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {exp.role}
                          </h3>
                          <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                          <Award size={20} className="text-primary-600 dark:text-primary-400" />
                          <span>Key Achievements</span>
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                          <Code size={20} className="text-primary-600 dark:text-primary-400" />
                          <span>Technologies & Tools</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Core Competencies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Areas of expertise developed through professional experience
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="card p-6 text-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Code size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                React, Angular, JavaScript, TypeScript, HTML/CSS, Responsive Design
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Database size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Backend & Data
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Node.js, Python, SQL, MongoDB, REST APIs, Data Processing
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-4 mx-auto w-fit">
                <BarChart3 size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Data Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Power BI, DAX, M Query, Data Visualization, Business Intelligence
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Cloud size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Cloud & DevOps
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AWS, Docker, CI/CD, Jenkins, GitHub Actions, Infrastructure Management
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Education
            </motion.h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <Building size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    M.S. in Computer Science
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                    University of North Carolina at Charlotte
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>Aug 2024 – Dec 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span>Charlotte, NC</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Currently pursuing advanced studies in Computer Science, focusing on software engineering, 
                    algorithms, and emerging technologies. This program is enhancing my theoretical knowledge 
                    and practical skills in modern software development practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <Building size={24} className="text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Bachelor of Engineering
                  </h3>
                  <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                    Chaitanya Bharathi Institute of Technology
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>2019 – 2023</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span>Hyderabad, Telangana, India</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Completed my undergraduate degree in Engineering, building a strong foundation in 
                    computer science fundamentals, programming, and problem-solving skills. This period 
                    laid the groundwork for my technical expertise and passion for software development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 