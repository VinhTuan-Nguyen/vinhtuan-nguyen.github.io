import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ResumeButton from '../components/ResumeButton';
import SkillsSection from '../components/SkillsSection';
import { useLanguage } from '../contexts/LanguageContext';
import { ABOUT } from '../utils/data/consts/About.const';
import { CONTACTS } from '../utils/data/consts/Contacts.const';
import { SKILLS } from '../utils/data/consts/Skills.const';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  // State to manage the typed text effect
  // This state will hold the text that is currently being displayed
  const [typedText, setTypedText] = useState('');
  const fullText = ABOUT().myStory[language]?.join(' ') || '';

  const profileRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLElement>(null);
  const eduRef = useRef<HTMLElement>(null);

  const profileVisible = useRevealOnScroll(profileRef, 0.1);
  const ctaVisible = useRevealOnScroll(ctaRef, 0.1);
  const companyVisible = useRevealOnScroll(companyRef, 0.1);
  const eduVisible = useRevealOnScroll(eduRef, 0.1);

  useEffect(() => {
    document.title = t('pages.title', { '{0}': t('pages.about') });
    // Reset typed text and start typing effect
    // This effect will type out the full text character by character
    setTypedText('');

    let i = 0;

    // Set an interval to update the typed text every 10 milliseconds
    // This creates a typing effect by slicing the full text up to the current index
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 5);

    return () => clearInterval(interval);
  }, [t, fullText]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {/* Profile Image */}
          <div
            ref={profileRef}
            className={`col-span-1 transition-all duration-1000
              ${profileVisible
                ? 'opacity-100 translate-y-0 md:-translate-x-0'
                : 'opacity-0 translate-y-24 md:translate-y-0 md:-translate-x-24'}
            `}>
            <div className="sticky top-24">
              <div className="relative mx-auto max-w-sm contents">
                <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
                  <img
                    src="assets/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {CONTACTS().name[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {CONTACTS().jobTitle[language]}
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-medium">
                        {t('contact.form.location') + ' '}
                      </span>
                      {CONTACTS().location[language]}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-medium">
                        {t('contact.form.phone') + ' '}
                      </span>
                      {CONTACTS().phone[language]}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-medium">
                        {t('contact.form.email') + ' '}
                      </span>
                      {CONTACTS().email}
                    </p>
                  </div>

                  <div className="mt-6">
                    <ResumeButton className="w-9/12 sm:w-2/5 md:w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-1 lg:col-span-2">
            {/* My Story */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.story.title')}
              </h2>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className='min-h-[282px] sm:min-h-[264px] md:min-h-[342px] lg:min-h-[212px] xl:min-h-[192px] text-justify'>
                  {typedText}
                  <span className="animate-pulse">|</span>
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
            <section
              ref={companyRef}
              className={`mb-12 transition-all duration-1000
                ${companyVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-24'}
              `}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.experience.title')}
              </h2>

              {ABOUT().company.map(item => (
                <div key={item.id} className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.jobTitle[language]}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">
                          {item.companyName}
                        </p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                        {[item.fromDate, item.toDate].join(' - ')}
                      </p>
                    </div>
                    {item.description[language]?.map(item => (
                      <p className="text-gray-700 dark:text-gray-300">{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Education */}
            <section
              ref={eduRef}
              className={`mb-12 transition-all duration-1000
                ${eduVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-24'}
              `}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.education.title')}
              </h2>

              {ABOUT().education.map(item => (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.degree[language]}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        {item.universityName[language]}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">GPA: {item.gpa}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      {[item.fromDate, item.toDate].join(' - ')}
                    </p>
                  </div>
                  {item.achievements[language]?.map(item => (
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  ))}
                </div>
              ))}
            </section>

            {/* CTA */}
            <div
              ref={ctaRef}
              className={`bg-blue-50 dark:bg-blue-900/30 p-8 rounded-lg border border-blue-100 dark:border-blue-800 transition-all duration-1000
                ${ctaVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-24'}
              `}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('home.cta.interested')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {t('about.workTogether')}
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