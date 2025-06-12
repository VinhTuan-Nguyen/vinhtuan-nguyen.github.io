import { useLanguage } from "../../../contexts/LanguageContext"
import { IFAbout } from "../../interfaces/IFAbout"

export const ABOUT = (): IFAbout => {
  const { t } = useLanguage()
  return {
    myStory: {
      en: [
        "When I first stepped into Computer Science, I wasn't truly aware it was a programming field. While it wasn't my initial choice, a deep desire to learn and explore led me here, unfolding an unexpected journey of growth.",
        "I'm proud of my ability to absorb new knowledge daily and for persevering through significant life changes. These experiences have profoundly shaped and positively defined who I am.",
        "Problem-solving is my core competency. I confidently face and navigate every challenge in both my professional and personal life, transforming difficulties into opportunities for learning and advancement.",
        "Driven by an insatiable curiosity and a passion for discovering new things, I'm always eager to dive into novel projects and emerging technologies. This inherent enthusiasm propels my continuous personal growth each day."
      ],
      vi: [
        "Khi bước chân vào ngành Khoa Học Máy Tính, tôi chưa thật sự biết đây là lĩnh vực lập trình. Đó không phải là lựa chọn ban đầu, nhưng khao khát được học hỏi và khám phá đã đưa tôi đến đây, mở ra một hành trình phát triển bất ngờ.",
        "Tôi tự hào về khả năng tiếp thu kiến thức mới mỗi ngày, đồng thời kiên cường vượt qua những biến cố lớn trong cuộc sống. Điều này đã rèn luyện và định hình con người tôi một cách tích cực.",
        "Kỹ năng giải quyết vấn đề chính là kim chỉ nam của tôi. Tôi tự tin đối mặt và xử lý mọi thách thức trong công việc lẫn đời sống, biến khó khăn thành cơ hội để học hỏi và tiến lên.",
        "Với tinh thần luôn tò mò và ham học hỏi những điều mới lạ, tôi luôn sẵn sàng dấn thân vào các dự án sử dụng các công nghệ mới. Chính sự háo hức này thúc đẩy tôi không ngừng phát triển và định hình bản thân mỗi ngày."
      ]
    },
    company: [
      {
        id: 'fpt-software',
        companyName: 'FPT Software',
        jobTitle: {
          en: ['Full-Stack Developer'],
          vi: ['Lập trình viên Full-Stack']
        },
        fromDate: '2022',
        toDate: t('about.toPresent'),
        description: {
          en: [
            "◦ Participated in various company projects.",
            "◦ Some of these projects garnered recognition at the corporate level.",
            "◦ Received commendations from both clients and management.",
            "◦ Always at the forefront of researching new technologies."
          ],
          vi: [
            "◦ Tham gia nhiều dự án khác nhau tại công ty.",
            "◦ Một số dự án trong số đó đã gây được tiếng vang đến cấp tập đoàn.",
            "◦ Từng được khách hàng cũng như các cấp lãnh đạo khen thưởng.",
            "◦ Luôn tiên phong trong việc nghiên cứu các công nghệ mới"
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
        gpa: '3.13 / 4.00',
        fromDate: '2018',
        toDate: '2022',
        achievements: {
          en: [
            "◦ Awarded scholarships for more than two years straight (2019-2021).",
            "◦ Led a university-grade scientific research project in machine learning called \"Building a Student Attendance Application Using Facial Recognition.\""
          ],
          vi: [
            "◦ Được nhận học bổng trong hơn hai liền (2019-2021)",
            "◦ Đảm nhiện vai trò chủ nhiệm đề tài nghiên cứu khoa học về học máy cấp trường mang tên: \"Xây dựng ứng dụng điểm danh sinh viên bằng khuôn mặt\""
          ]
        }
      }
    ]
  }
}