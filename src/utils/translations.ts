export type Language = 'en' | 'vi';

interface TranslationRecord {
  [key: string]: string;
}

interface TranslationMap {
  en: TranslationRecord;
  vi: TranslationRecord;
}

export const translations: TranslationMap = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    
    // Home
    'home.headline': 'Full-Stack Developer with a Passion for UX/UI',
    'home.intro': "I'm a full-stack developer focused on creating elegant, efficient, and user-friendly web applications. Currently seeking new opportunities to contribute my skills and grow as a developer.",
    'home.cta.projects': 'View My Projects',
    'home.cta.about': 'Learn More About Me',
    'home.cta.contact': 'Get In Touch',
    'home.cta.resume': 'Download Resume',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': "Here are some of the projects I've worked on:",
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web Development',
    'projects.filter.mobile': 'Mobile Apps',
    'projects.filter.design': 'UX/UI Design',
    'project.viewDetails': 'View Details',
    'project.liveDemo': 'Live Demo',
    'project.sourceCode': 'Source Code',
    'project.technologies': 'Technologies Used',
    'project.challenges': 'Challenges & Solutions',
    'project.results': 'Results & Lessons Learned',
    
    // About
    'about.title': 'About Me',
    'about.story.title': 'My Story',
    'about.skills.title': 'Skills',
    'about.experience.title': 'Work Experience',
    'about.education.title': 'Education',
    'about.interests.title': 'Interests',
    
    // Certificates
    'certificates.title': 'Certifications & Courses',
    'certificates.intro': "Continuous learning is important to me. Here are some certifications and courses I've completed to strengthen my skills:",
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have a question or want to work together? Feel free to contact me!',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.direct': 'Or reach me directly:',
    
    // Footer
    'footer.copyright': 'Copyright © 2025 | All Rights Reserved',
  },
  vi: {
    // Nav
    'nav.home': 'Trang Chủ',
    'nav.projects': 'Dự Án',
    'nav.about': 'Giới Thiệu',
    'nav.certificates': 'Chứng Chỉ',
    'nav.contact': 'Liên Hệ',
    
    // Home
    'home.headline': 'Lập Trình Viên Full-Stack Với Đam Mê UX/UI',
    'home.intro': 'Tôi là lập trình viên full-stack tập trung vào việc tạo ra các ứng dụng web thanh lịch, hiệu quả và thân thiện với người dùng. Hiện đang tìm kiếm cơ hội mới để đóng góp kỹ năng và phát triển bản thân.',
    'home.cta.projects': 'Xem Dự Án Của Tôi',
    'home.cta.about': 'Tìm Hiểu Thêm Về Tôi',
    'home.cta.contact': 'Liên Hệ',
    'home.cta.resume': 'Tải Hồ Sơ',
    
    // Projects
    'projects.title': 'Dự Án Của Tôi',
    'projects.subtitle': 'Đây là một số dự án tôi đã thực hiện:',
    'projects.filter.all': 'Tất Cả',
    'projects.filter.web': 'Phát Triển Web',
    'projects.filter.mobile': 'Ứng Dụng Di Động',
    'projects.filter.design': 'Thiết Kế UX/UI',
    'project.viewDetails': 'Xem Chi Tiết',
    'project.liveDemo': 'Xem Demo',
    'project.sourceCode': 'Mã Nguồn',
    'project.technologies': 'Công Nghệ Sử Dụng',
    'project.challenges': 'Thách Thức & Giải Pháp',
    'project.results': 'Kết Quả & Bài Học',
    
    // About
    'about.title': 'Về Tôi',
    'about.story.title': 'Câu Chuyện Của Tôi',
    'about.skills.title': 'Kỹ Năng',
    'about.experience.title': 'Kinh Nghiệm Làm Việc',
    'about.education.title': 'Học Vấn',
    'about.interests.title': 'Sở Thích',
    
    // Certificates
    'certificates.title': 'Chứng Chỉ & Khóa Học',
    'certificates.intro': 'Học tập liên tục là điều quan trọng đối với tôi. Đây là một số chứng chỉ và khóa học tôi đã hoàn thành để củng cố kỹ năng của mình:',
    
    // Contact
    'contact.title': 'Liên Hệ',
    'contact.subtitle': 'Có câu hỏi hoặc muốn cùng làm việc? Hãy liên hệ với tôi!',
    'contact.form.name': 'Tên',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Chủ Đề',
    'contact.form.message': 'Tin Nhắn',
    'contact.form.submit': 'Gửi Tin Nhắn',
    'contact.direct': 'Hoặc liên hệ trực tiếp:',
    
    // Footer
    'footer.copyright': 'Bản Quyền © 2025 | Đã Đăng Ký Bản Quyền',
  }
};