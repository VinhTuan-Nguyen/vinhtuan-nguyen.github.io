import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { SKILLS } from '../utils/data/consts/Skills.const';
import SkillsSection from '../components/SkillsSection';
import ResumeButton from '../components/ResumeButton';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h1>
        </div>
        
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Profile"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    John Doe
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Full-Stack Developer
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-medium">Location:</span> San Francisco, CA
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-medium">Email:</span> john.doe@example.com
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <ResumeButton className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* My Story */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.story.title')}
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience building web applications and digital solutions. My journey in development began when I created my first website as a teenager, and I've been hooked ever since.
                </p>
                <p>
                  After completing my degree in Computer Science, I worked at several tech companies where I honed my skills in front-end and back-end development. I've had the opportunity to work on diverse projects ranging from e-commerce platforms to data visualization dashboards and mobile applications.
                </p>
                <p>
                  What drives me is creating elegant solutions that solve real problems. I'm obsessed with clean code, user experience, and continuous learning. Every project is an opportunity to implement best practices and explore new technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new cooking recipes. I believe that diverse interests fuel creativity in development.
                </p>
              </div>
            </section>
            
            {/* Skills */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.skills.title')}
              </h2>
              
              <SkillsSection skills={SKILLS} />
            </section>
            
            {/* Work Experience */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.experience.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Senior Web Developer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        TechCorp Inc.
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      2022 - Present
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Lead the development of the company's flagship product, managing a team of 5 developers. Implemented CI/CD pipelines, improved code quality through code reviews, and reduced application load time by 40%.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Full-Stack Developer
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        InnovateSoft
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      2020 - 2022
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed and maintained multiple client applications using React, Node.js, and MongoDB. Implemented RESTful APIs, authentication systems, and responsive designs for various industries including finance and healthcare.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Education */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.education.title')}
              </h2>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">
                      University of Technology
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    2016 - 2020
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Graduated with honors. Specialized in web development and data structures. Completed a final year project on building scalable web applications.
                </p>
              </div>
            </section>
            
            {/* CTA */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Interested in working together?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you're looking for a developer who is passionate about creating elegant, efficient solutions, let's connect!
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                {t('home.cta.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;