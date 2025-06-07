import { useLanguage } from '../../../contexts/LanguageContext';


export const PAGE_LINKS = () => {
  const { t } = useLanguage();

  return [
    { to: '/', label: t('pages.home') },
    { to: '/projects', label: t('pages.projects') },
    { to: '/certificates', label: t('pages.certificates') },
    { to: '/contact', label: t('pages.contact') },
    { to: '/about', label: t('pages.about') },
  ]
}