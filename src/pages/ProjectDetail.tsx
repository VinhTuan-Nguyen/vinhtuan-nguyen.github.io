import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { PROJECTS } from '../utils/data/consts/Projects.const';
import { ConvertDate } from '../utils/helper/ConvertDate';

const ProjectDetail: React.FC = () => {

  const { t, language } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project based on the ID
  const project = PROJECTS.find(p => p.id === id);

  // Scroll to top on page load
  useEffect(() => {
    // Update the title when the component mounts
    document.title = t('pages.title', { '{0}': t('pages.projectDetail') });
  }, [id, t]);

  // Image slider controls
  const goToPreviousImage = () => {
    if (!project) return;
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    if (!project) return;
    setCurrentImageIndex(prevIndex =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // If project is not found
  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t('project.notFound')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t('project.notFound.subtitle')}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('project.backLink')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('project.backLink')}
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
            {t('project.detail.description')}
          </h2>
          <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
            {project.fullDescription[language]?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Project Image Slider */}
        <div className="my-12 relative overflow-hidden">
          <div className="h-[200px] md:h-[350px] lg:h-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-lg flex">
            <img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className={`w-full object-contain md:object-cover rounded-lg`} />
          </div>

          {project.images.length > 1 && (
            <div className="flex justify-center items-center mt-2
               md:mt-4 space-x-3 md:space-x-4 lg:space-x-5 p-1">
              <button
                onClick={goToPreviousImage}
                className="left-4 top-1/2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-1 md:p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </button>

              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full transition-colors duration-300 ${index === currentImageIndex
                    ? 'bg-blue-600 dark:bg-blue-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}

              <button
                onClick={goToNextImage}
                className="right-4 top-1/2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-1 md:p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                {t('project.detail.technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none pt-5">
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                {t('project.detail.responsibilities')}
              </h2>
              <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                {project.responsibility[language]?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none pt-5">
              <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                {t('project.detail.achievements')}
              </h2>
              <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                {project.achievements[language]?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-first md:order-last">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('project.details')}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {t('project.detail.type')}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.projectTypes.map(item => (
                      <span className="inline-block bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-900 dark:text-white">

                  </p>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <div className='pb-5'>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {t('project.detail.companyName')}
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {project.companyName}
                      </p>
                    </div>

                    <div className='pb-5'>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {t('project.detail.teamsize')}
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {t('project.detail.teamMembers', { '{0}': project.teamsize.toString() })}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {t('project.detail.role')}
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className='pb-5'>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {t('project.detail.fromDate')}
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {ConvertDate(project.fromDate, language)}
                      </p>
                    </div>
                    <div className='pb-5'>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {t('project.detail.toDate')}
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {ConvertDate(project.toDate, language)}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {t('project.detail.methodology')}
                      </h4>
                      <p className="text-gray-900 dark:text-white">
                        {project.methodology}
                      </p>
                    </div>
                  </div>
                </div>

                {project.demoUrl || project.repoUrl && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                      {t('project.detail.links')}
                    </h4>

                    <div className="space-y-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t('project.liveDemo')}
                        </a>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white rounded-md transition-colors duration-300"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          {t('project.sourceCode')}
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {project.articles && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                      {t('project.detail.articles')}
                    </h4>

                    <div className="space-y-2">
                      {project.articles.map(item => (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          {item.title[language]}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;