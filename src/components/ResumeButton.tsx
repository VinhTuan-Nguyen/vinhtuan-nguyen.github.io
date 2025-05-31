import React from 'react';
import { FileDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResumeButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ 
  className = '', 
  variant = 'primary',
  icon = true
}) => {
  const { t } = useLanguage();
  
  // This would be the path to your actual resume file
  const resumePath = '/public/resumes/tuannv_resume.docx';
  
  const baseStyles = "font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center";
  const sizeStyles = "px-4 py-2 text-sm";
  
  let variantStyles = '';
  
  switch (variant) {
    case 'primary':
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600";
      break;
    case 'secondary':
      variantStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";
      break;
    case 'outline':
      variantStyles = "border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800";
      break;
  }
  
  const downloadResume = () => {
    // In a real implementation, this would trigger a download of the actual file
    window.open(resumePath, '_blank');
  };
  
  return (
    <button
      onClick={downloadResume}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {icon && <FileDown className="w-4 h-4 mr-2" />}
      {t('home.cta.resume')}
    </button>
  );
};

export default ResumeButton;