import React from 'react';
import { IFSkill } from '../utils/interfaces/IFSkill';

interface SkillsSectionProps {
  skills: IFSkill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillCategory, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {skillCategory.category}
          </h3>
          
          <ul className="space-y-2">
            {skillCategory.items.map((skill, skillIndex) => (
              <li 
                key={skillIndex}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;