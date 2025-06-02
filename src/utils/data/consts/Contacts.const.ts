import { useLanguage } from "../../../contexts/LanguageContext";

export const CONTACTS = () => {
  const { t } = useLanguage()
  return {
    github: 'https://github.com/VinhTuan-Nguyen',
    linkedin: 'https://www.linkedin.com/in/nguyen-vinh-tuan/',
    email: 'vinhtuanbm@gmail.com',
    location: t('location'),
    phone: '0934316343'
  }
};