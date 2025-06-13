import React, { useEffect, useRef } from 'react';
import CertificateSlider from '../components/CertificateSlider';
import { useLanguage } from '../contexts/LanguageContext';
import { CERTIFICATES } from '../utils/data/consts/Certificates.const';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const Certificates: React.FC = () => {
  const { t } = useLanguage();

  const pageRef = useRef<HTMLDivElement>(null);
  const pageVisible = useRevealOnScroll(pageRef)

  useEffect(() => {
    // Update the title when the component mounts
    document.title = t('pages.title', { '{0}': t('pages.certificates') });
  }, [t]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div
          ref={pageRef}
          className={`text-center mb-12 transition-opacity duration-1000
            ${pageVisible
              ? 'opacity-100'
              : 'opacity-0'}
          `}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('certificates.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('certificates.intro')}
          </p>
        </div>

        {/* Certificate Slider */}
        <CertificateSlider certificates={CERTIFICATES} />
      </div>
    </div>
  );
};

export default Certificates;