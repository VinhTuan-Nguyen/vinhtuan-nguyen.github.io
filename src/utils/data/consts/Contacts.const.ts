import { IFContact } from "../../interfaces/IFContact";

export const CONTACTS = (): IFContact => {
  return {
    name: {
      en: ['Tuan Nguyen Vinh'],
      vi: ['Nguyễn Vĩnh Tuân']
    },
    location: {
      en: ['Can Tho, Viet Nam'],
      vi: ['Cần Thơ, Việt Nam']
    },
    phone: {
      en: ['(+84) 934 316 343'],
      vi: ['0934 316 343']
    },
    email: 'vinhtuanbm@gmail.com',
    jobTitle: {
      en: ['Full-Stack Developer'],
      vi: ['Lập trình viên Full-Stack']
    },
    github: 'https://github.com/VinhTuan-Nguyen',
    linkedin: 'https://www.linkedin.com/in/nguyen-vinh-tuan/'
  }
};