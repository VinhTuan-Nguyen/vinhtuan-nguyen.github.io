import { useLanguage } from "../../../contexts/LanguageContext";
import { CategoryAll } from "../../Types";

export const CATEGORIES = (): { value: CategoryAll; label: string }[] => {
  const { t } = useLanguage();
  return [
    { value: 'all', label: t('project.filter.all') },
    { value: 'web', label: t('project.filter.web') },
    { value: 'crm', label: t('project.filter.crm') },
    { value: 'mobile', label: t('project.filter.mobile') },
    { value: 'design', label: t('project.filter.design') },
    { value: 'd365', label: t('project.filter.d365') },
    { value: 'api', label: t('project.filter.api') },
    { value: 'microservices', label: t('project.filter.microservices') },
  ];
}