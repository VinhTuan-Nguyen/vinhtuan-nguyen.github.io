import { useLanguage } from "../../../contexts/LanguageContext"
import { IFAbout } from "../../interfaces/IFAbout"

export const ABOUT = (): IFAbout => {
  const { t } = useLanguage()
  return {
    myStory: {
      en: [
        "I'm a passionate full-stack developer with over 5 years of experience building web applications and digital solutions. My journey in development began when I created my first website as a teenager, and I've been hooked ever since.",
        "After completing my degree in Computer Science, I worked at several tech companies where I honed my skills in front-end and back-end development. I've had the opportunity to work on diverse projects ranging from e-commerce platforms to data visualization dashboards and mobile applications.",
        "What drives me is creating elegant solutions that solve real problems. I'm obsessed with clean code, user experience, and continuous learning. Every project is an opportunity to implement best practices and explore new technologies.",
        "When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new cooking recipes. I believe that diverse interests fuel creativity in development.",
      ],
      vi: [
        "I'm a passionate full-stack developer with over 5 years of experience building web applications and digital solutions. My journey in development began when I created my first website as a teenager, and I've been hooked ever since.",
        "After completing my degree in Computer Science, I worked at several tech companies where I honed my skills in front-end and back-end development. I've had the opportunity to work on diverse projects ranging from e-commerce platforms to data visualization dashboards and mobile applications.",
        "What drives me is creating elegant solutions that solve real problems. I'm obsessed with clean code, user experience, and continuous learning. Every project is an opportunity to implement best practices and explore new technologies.",
        "When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new cooking recipes. I believe that diverse interests fuel creativity in development.",
      ]
    },
    company: [
      {
        companyName: 'FPT Software',
        jobTitle: {
          en: ['Full-Stack Developer'],
          vi: ['Lập trình viên Full-Stack']
        },
        fromDate: '2022',
        toDate: t('about.toPresent'),
        description: {
          en: [
            "- Participated in various company projects.",
            "- Some of these projects garnered recognition at the corporate level.",
            "- Received commendations from both clients and management.",
            "- Always at the forefront of researching new technologies."
          ],
          vi: [
            "- Tham gia nhiều dự án khác nhau tại công ty.",
            "- Một số dự án trong số đó đã gây được tiếng vang đến cấp tập đoàn.",
            "- Từng được khách hàng cũng như các cấp lãnh đạo khen thưởng.",
            "- Luôn tiên phong trong việc nghiên cứu các công nghệ mới"
          ]
        }
      }
    ],
    education: [
      {
        universityName: {
          en: ['Can Tho University of Technology (CTUT)'],
          vi: ['Trường Đại Học Kỹ Thuật - Công Nghệ Cần Thơ']
        },
        degree: {
          en: ['Engineer of Computer Science'],
          vi: ['Kĩ sư Khoa Học Máy Tính']
        },
        gpa: '3.14/4.00',
        fromDate: '2018',
        toDate: '2022',
        achievements: {
          en: [
            "- Awarded scholarships for more than two years straight (2019-2021).",
            "- Led a university-grade scientific research project in machine learning called \"Building a Student Attendance Application Using Facial Recognition.\""
          ],
          vi: [
            "- Được trao học bổng trong hơn hai năm liên tiếp (2019-2021)",
            "- Đảm nhiện vai trò chủ nhiệm đề tài nghiên cứu khoa học về học máy cấp trường mang tên \"Xây dựng ứng dụng điểm danh sinh viên bằng khuôn mặt\""            
          ]
        }
      }
    ]
  }
}