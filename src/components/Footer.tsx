import React from 'react';
import { Link } from 'react-router-dom';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACTS } from '../utils/data/consts/Contacts.const';
import { PAGE_LINKS } from '../utils/data/consts/PageLinks.const';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section with logo and nav links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="text-xl font-bold mb-4 md:mb-0 text-gray-900 dark:text-white">
            {CONTACTS().name[language]}
          </Link>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {PAGE_LINKS().map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Middle section with social links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={CONTACTS().github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="GitHub"
          >
            <GitHub className="h-6 w-6" />
          </a>
          <a
            href={CONTACTS().linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${CONTACTS().email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Bottom section with copyright */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t('footer.copyright').replace('2025', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;