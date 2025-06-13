import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../contexts/LanguageContext';
import { CategoryAll } from '../utils/Types';
import { CATEGORIES } from '../utils/data/consts/Categories.const';
import { PROJECTS } from '../utils/data/consts/Projects.const';
import { useStaggeredRevealOnScroll } from '../hooks/useStaggeredRevealOnScroll';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryAll>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categories.includes(activeCategory));

  const { visible: projectVisible, itemRefs: projectRefs } = useStaggeredRevealOnScroll(filteredProjects.length, 0.1, 200);

  const titleRef = React.useRef<HTMLHeadingElement>(null);

  const titleVisivle = useRevealOnScroll(titleRef, 0.1);

  useEffect(() => {
    document.title = t('pages.title', { '{0}': t('pages.projects') });
  }, [t]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div
        ref={titleRef}
          className={`container mx-auto px-4 md:px-6 transition-opacity duration-1000
            ${titleVisivle ? 'opacity-100' : 'opacity-0'}
          `}
      >
        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('project.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('project.subtitle')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {CATEGORIES().map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeCategory === category.value
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[idx] = el}
              className={`transition-all duration-1000
                ${projectVisible[idx]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'}
              `}
            >
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              {t('project.filter.none')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;