import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { IFSkill } from '../utils/interfaces/IFSkill';

interface SkillsSectionProps {
  skills: IFSkill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState<boolean[]>([]);

  useEffect(() => {
    setVisible(Array(skills.length).fill(false));

    skills.forEach((_, i) => {
      setTimeout(() => {
        setVisible(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 * i);
    });
  }, [skills]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {skills.map((skillCategory, index) => (
        <div
          key={index}
          className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-1000
            ${visible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
          `}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {skillCategory.category[language]}
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