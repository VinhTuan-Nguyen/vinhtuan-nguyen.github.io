import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { IFCertificate } from '../utils/interfaces/IFCertificate';

interface CertificateSliderProps {
  certificates: IFCertificate[];
}

const CertificateSlider: React.FC<CertificateSliderProps> = ({ certificates }) => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCertificate = certificates[currentIndex];
  const fullText = currentCertificate.description[language]?.join(' ') || '';

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === certificates.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const [typedText, setTypedText] = useState('');

  const certificateRef = useRef<HTMLDivElement>(null);
  const certificateVisible = useRevealOnScroll(certificateRef);

  useEffect(() => {
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

  if (!certificates.length) {
    return <div>{t('certificates.noCertificates')}</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Certificate Display */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Certificate Image */}
          <div
            ref={certificateRef}
            className={`bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden flex items-center justify-center p-4 transition-all duration-1000
              ${certificateVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-24'}
            `}
          >
            <img
              src={currentCertificate.image}
              alt={currentCertificate.title}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>

          {/* Certificate Details */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {currentCertificate.title}
            </h3>

            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <span className="font-medium">{currentCertificate.issuer}</span>
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {currentCertificate.date}
              </p>
            </div>

            <p className="min-h-[168px] sm:min-h-[144px] md:min-h-[112px] text-justify text-gray-700 dark:text-gray-300 mb-6 flex-grow">
              {typedText}
            </p>

            {currentCertificate.verificationUrl && (
              <a
                href={currentCertificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                ${t('certificates.verifyCertificate')}
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
        aria-label="Previous certificate"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
        aria-label="Next certificate"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {certificates.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none ${slideIndex === currentIndex
              ? 'bg-blue-600 dark:bg-blue-500'
              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            aria-label={`Go to certificate ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateSlider;