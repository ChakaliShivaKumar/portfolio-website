import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {

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

  const projects = [
    {
      id: 1,
      title: 'LEZIT Transports',
      description: 'A comprehensive full-stack transport booking platform that enables users to book various transportation services. Features include user authentication, real-time booking management, payment processing, and email notifications.',
      longDescription: 'LEZIT Transports is a modern transportation booking platform built with React and TypeScript for the frontend, and Node.js with MongoDB for the backend. The application includes JWT authentication, Google OAuth integration, and email notifications using Nodemailer. The platform supports multiple transport types, real-time availability checking, and a responsive design for mobile and desktop users.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'fullstack',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'JWT', 'Google OAuth', 'Nodemailer', 'Express'],
      liveUrl: 'https://lezit-transports-frontend.onrender.com/',
      githubUrl: 'https://github.com/ChakaliShivaKumar/LEZIT-Transports',
      features: [
        'User authentication with JWT and Google OAuth',
        'Real-time transport booking system',
        'Email notifications for bookings',
        'Responsive design for all devices',
        'Admin dashboard for transport management',
        'Payment integration ready'
      ]
    },
    {
      id: 2,
      title: 'Smart Traffic Lights with Reinforcement Learning',
      description: 'An innovative traffic management system using federated Deep Q-Network (DQN) agents in SUMO simulation environment. Achieved a remarkable 99.8% reduction in average wait times.',
      longDescription: 'This research project implements a federated reinforcement learning approach for traffic signal optimization. Using SUMO (Simulation of Urban MObility) as the simulation environment, the system employs multiple DQN agents that learn optimal traffic signal timing strategies. The federated approach allows for distributed learning while maintaining privacy and improving overall system performance.',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'ai-ml',
      technologies: ['Python', 'TensorFlow', 'SUMO', 'Reinforcement Learning', 'DQN', 'Federated Learning', 'NumPy', 'Pandas'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/Smart-Traffic-Lights',
      features: [
        'Federated Deep Q-Network implementation',
        'SUMO traffic simulation integration',
        '99.8% reduction in average wait times',
        'Distributed learning architecture',
        'Real-time traffic signal optimization',
        'Performance analytics and visualization'
      ]
    },
    {
      id: 3,
      title: 'Power BI Analytics Dashboard',
      description: 'Comprehensive business intelligence dashboard built with Power BI, featuring advanced DAX calculations, M query transformations, and Azure Synapse integration for real-time data processing.',
      longDescription: 'Developed during my time at Deloitte, this Power BI dashboard provides comprehensive business analytics with advanced DAX calculations and M query transformations. The solution integrates with Azure Synapse for real-time data processing and includes automated refresh capabilities. The dashboard features interactive visualizations, drill-down capabilities, and mobile-responsive design.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'data',
      technologies: ['Power BI', 'DAX', 'M Query', 'Azure Synapse', 'SQL Server', 'Data Modeling', 'ETL Processes'],
      liveUrl: null,
      githubUrl: null,
      features: [
        'Advanced DAX calculations and measures',
        'M query data transformations',
        'Azure Synapse integration',
        'Automated data refresh pipelines',
        'Interactive visualizations',
        'Mobile-responsive design'
      ]
    },
    {
      id: 4,
      title: 'BookMyEvent (BME)',
      description: 'College capstone project using MERN-style architecture with AWS services to manage event scheduling, ticket booking, and calendar viewing with a responsive React.js frontend and secure Node.js/Express.js backend.',
      longDescription: 'BookMyEvent (BME) is a comprehensive event management platform developed as a college capstone project. The application uses MERN-style architecture with AWS services for scalable, low-latency data storage. Features include role-based authentication with JWT, QR Code generation for digital tickets, real-time availability checks, and a responsive design for both mobile and desktop users.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'AWS DynamoDB', 'JWT', 'QR Code Generation', 'RESTful APIs', 'MongoDB'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/BookMyEvent',
      features: [
        'Event scheduling and ticket booking system',
        'Role-based authentication with JWT',
        'QR Code generation for digital tickets',
        'Real-time availability checks',
        'AWS DynamoDB for scalable data storage',
        'Responsive React.js frontend'
      ]
    },
    {
      id: 5,
      title: 'AWS Infrastructure Automation',
      description: 'DevOps project focused on automating AWS infrastructure deployment using Infrastructure as Code (IaC) principles and CI/CD pipelines.',
      longDescription: 'Developed during my internship at Amazon, this project implements Infrastructure as Code using AWS CloudFormation and Terraform. The solution includes automated CI/CD pipelines with Jenkins and GitHub Actions, containerization with Docker, and comprehensive monitoring and logging solutions.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'devops',
      technologies: ['AWS', 'Terraform', 'Docker', 'Jenkins', 'GitHub Actions', 'CloudFormation', 'Monitoring'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/AWS-Infrastructure',
      features: [
        'Infrastructure as Code implementation',
        'Automated CI/CD pipelines',
        'Container orchestration with Docker',
        'Comprehensive monitoring setup',
        'Security best practices',
        'Scalable architecture design'
      ]
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
              My Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              A collection of projects showcasing my skills in full-stack development, AI/ML, and cloud technologies
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        <Globe size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project Details */}
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
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Featured Project: LEZIT Transports
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              A comprehensive full-stack transport booking platform
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    LEZIT Transports is a modern transportation booking platform that enables users to book various 
                    transportation services. Built with React and TypeScript for the frontend, and Node.js with MongoDB 
                    for the backend, the application includes comprehensive features for both users and administrators.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {projects[0].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Technology Stack
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'HTML/CSS'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Node.js', 'Express', 'MongoDB', 'JWT'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Google OAuth', 'Nodemailer', 'REST APIs'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="https://lezit-transports-frontend.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <span>View Live Project</span>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 