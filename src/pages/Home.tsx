import { ArrowRight } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ResumeButton from '../components/ResumeButton';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { CONTACTS } from '../utils/data/consts/Contacts.const';
import { PROJECTS } from '../utils/data/consts/Projects.const';
import avatar from '/assets/images/avatar.jpg';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const featuredProjects = PROJECTS.filter(p => p.featured);

  // Refs for sections to apply reveal effects
  // These refs will be used to observe the visibility of each section
  const avatarRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const featuredSectionRef = useRef<HTMLElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  // State to track visibility of sections
  // These states will be updated based on the intersection observer
  const avatarVisible = useRevealOnScroll(avatarRef, 0.2);
  const textVisible = useRevealOnScroll(textContentRef, 0.2);
  const featuredVisible = useRevealOnScroll(featuredSectionRef, 0.2);
  const ctaVisible = useRevealOnScroll(ctaSectionRef, 0.2);

  useEffect(() => {
    // Scroll to top and set document title on mount
    // This ensures the user starts at the top of the page and has a clear title
    window.scrollTo(0, 0);
    document.title = t('pages.title', { '{0}': t('nav.logo') });
  }, [t]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image */}
            <div
              ref={avatarRef}
              className={`md:w-1/2 flex justify-center transition-all duration-1000
                ${avatarVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-24'}
              `}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-600 dark:bg-indigo-500 rounded-full opacity-20 z-0"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg shadow-blue-500/50 z-10">
                  <img
                    src={avatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-full opacity-40 z-0"></div>
              </div>
            </div>

            {/* Text Content */}
            <div
              ref={textContentRef}
              className={`md:w-1/2 mt-10 md:mb-0 md:pr-10 transition-all duration-1000
                ${textVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-24'}
              `}
            >
              <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {CONTACTS().name[language]}
              </h1>

              <h2 className="text-center md:text-left text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {t('home.headline')}
              </h2>

              <p className="text-center md:text-left text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('home.intro')}
              </p>

              <div className="flex flex-wrap flex-col md:flex-row items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-md shadow-sm transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  {t('home.cta.about')}
                </Link>

                <ResumeButton variant="outline" className="mt-4 md:mt-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        ref={featuredSectionRef}
        className={`py-16 md:py-24 bg-white dark:bg-gray-900 transition-all duration-1000
          ${featuredVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-24'}
        `}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold text-gray-900 dark:text-white mb-2">
                {t('project.title')}
              </h2>
              <p className="text-center md:text-left text-gray-600 dark:text-gray-400">
                {t('project.subtitle')}
              </p>
            </div>

            <Link
              to="/projects"
              className="mt-4 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              {t('project.all')}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        className={`py-16 bg-blue-600 dark:bg-blue-800 transition-all duration-1000
          ${ctaVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-24'}
        `}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('home.cta.interested')}
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {t('home.cta.opportunities')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-md shadow-md transition duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            {t('home.cta.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;