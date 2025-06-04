import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { IFProject } from '../utils/interfaces/IFProject';
import { ConvertDate } from '../utils/helper/ConvertDate';

interface ProjectCardProps {
  project: IFProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            {t('project.featured')}
          </div>
        )}
      </div>
      
      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 font-semibold">
          {"("+[ConvertDate(project.fromDate, language), ConvertDate(project.toDate, language)].join(' - ')+")"}
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {project.shortDescription[language]}
        </p>
        
        {/* Tags/Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
              {t('project.more', {"{0}": (project.technologies.length - 3).toString()})}
            </span>
          )}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
          >
            {t('project.viewDetails')}
          </Link>
          
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              {t('project.liveDemo')}
            </a>
          )}
          
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <Github className="w-3.5 h-3.5 mr-1" />
              {t('project.sourceCode')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;