import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const leadership = [
    {
      name: 'Ranjit Ambare',
      role: 'Director - Tally Customization & Integration',
      description: 'Ranjit brings over 12 years of industry experience in Tally customization, integration, and business process automation. He specializes in understanding complex business logic, preparing complete software schemas, and guiding development teams with practical technical inputs throughout the project lifecycle.',
      image: '/team/ranjit.jpg',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Anjan Ambre',
      role: 'Director - Sales, Requirements & Finance',
      description: 'Anjan leads sales, client communication, requirement gathering, finance, and client-side support at FlowupS Technologies. With strong business understanding and customer handling skills, he ensures that every solution begins with clear requirements and continues with reliable client coordination.',
      image: '/team/anjan.jpg',
      color: 'from-purple-600 to-pink-500'
    },
    {
      name: 'Aniket Sonawane',
      role: 'Full Stack Developer / Team Lead',
      description: 'Aniket is a skilled full stack developer who works with strong ownership and team leadership. He contributes to software architecture, development, implementation, and coordination across projects, helping the team deliver reliable business applications.',
      image: '/team/aniket.jpg',
      color: 'from-green-600 to-teal-500'
    },
    {
      name: 'Sapana Padmane',
      role: 'Flutter Developer',
      description: 'Sapana works on mobile application development using Flutter, creating responsive and user-friendly mobile experiences. She contributes to cross-platform applications that support business operations on mobile devices.',
      image: '/team/sapana.jpg',
      color: 'from-orange-600 to-red-500'
    },
    {
      name: 'Dipti Kanawade',
      role: 'TDL Developer',
      description: 'Dipti specializes in Tally Definition Language development and Tally customization. She works on custom Tally modules, reports, vouchers, controls, and business-specific enhancements.',
      image: '/team/dipti.jpg',
      color: 'from-indigo-600 to-purple-500'
    }
  ];

  const developmentTeam = [
    'Abhishek Kanawade',
    'Sakhi Kasar',
    'Gayatri Kute',
    'Ishwari Mhaske'
  ];

  const salesTeam = [
    'Mangesh Wakchaure'
  ];

  const technicalAdvisors = [
    'Rohit Dave',
    'Ashish Shinde',
    'Suraj Jadhav'
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Leadership & Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            FlowupS Technologies Pvt. Ltd. is powered by directors, developers, sales professionals, 
            support specialists, and technical advisors. Together, the team brings strong business 
            understanding, Tally expertise, software development capability, sales experience, and 
            dependable client support.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leadership.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Top Border */}
              <div className={`h-2 bg-gradient-to-r ${member.color}`} />
              
              <div className="p-8">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-3xl font-bold text-gray-600 dark:text-gray-300 shadow-md">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Name & Role */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent text-center mb-4`}>
                  {member.role}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">
                  {member.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Other Teams Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Development Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <i className="bi bi-code-slash text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Development Team
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Contribute to full stack software development across frontend, backend, database, 
              dashboards, and workflow-based business modules.
            </p>
            <ul className="space-y-2">
              {developmentTeam.map((member) => (
                <li key={member} className="flex items-center text-gray-700 dark:text-gray-200">
                  <i className="bi bi-check-circle-fill text-green-500 mr-2 text-sm"></i>
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sales Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <i className="bi bi-briefcase text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sales Team
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Supports sales communication, client coordination, inquiries, discussions, and onboarding support.
            </p>
            <ul className="space-y-2">
              {salesTeam.map((member) => (
                <li key={member} className="flex items-center text-gray-700 dark:text-gray-200">
                  <i className="bi bi-check-circle-fill text-green-500 mr-2 text-sm"></i>
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technical Advisors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <i className="bi bi-lightbulb text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Technical Advisors
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Provide technical advisory support for architecture, implementation planning, 
              development direction, and solution improvement.
            </p>
            <ul className="space-y-2">
              {technicalAdvisors.map((member) => (
                <li key={member} className="flex items-center text-gray-700 dark:text-gray-200">
                  <i className="bi bi-check-circle-fill text-green-500 mr-2 text-sm"></i>
                  {member}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
