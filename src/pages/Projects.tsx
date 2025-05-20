import React, { useState } from 'react';
import { projects } from '../utils/data';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from '../components/ProjectCard';

type Category = 'all' | 'web' | 'mobile' | 'design';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: t('projects.filter.all') },
    { value: 'web', label: t('projects.filter.web') },
    { value: 'mobile', label: t('projects.filter.mobile') },
    { value: 'design', label: t('projects.filter.design') }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.value 
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
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category. Please check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;