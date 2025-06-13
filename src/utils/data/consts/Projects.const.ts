import { IFProject } from "../../interfaces/IFProject";

export const PROJECTS: IFProject[] = [
  {
    id: 'MYPORTFOLIO',
    title: 'My Portfolio',
    thumbnail: '/assets/images/my-portfolio.png',
    companyName: 'N/A',
    fromDate: 'Jun/2025',
    toDate: 'Jul/2025',
    teamsize: 1,
    methodology: 'N/A',
    shortDescription: {
      en: [
        "This is a personal project I'm truly proud of, having handled everything from ideation and web design to source code implementation and CI/CD myself."
      ],
      vi: [
        "Đây là một dự án cá nhân mà mình thực sự tự hào khi tự bản thân xử lý tất cả mọi thứ từ khâu lên ý tưởng, thiết kế web đến triển khai mã nguồn và CI/CD."
      ]
    },
    fullDescription: {
      en: [
        "This is a personal project I'm truly proud of, having handled everything from ideation and web design to source code implementation and CI/CD myself."
      ],
      vi: [
        "Đây là một dự án cá nhân mà mình thực sự tự hào khi tự bản thân xử lý tất cả mọi thứ từ khâu lên ý tưởng, thiết kế web đến triển khai mã nguồn và CI/CD."
      ]
    },
    featured: true,
    role: 'Full-Stack',
    images: [
      '/assets/images/my-portfolio.png',
      '/assets/images/react&tailwind-logo.jpg',
    ],
    categories: ['web', 'design'],
    technologies: ['React', 'Tailwin CSS', 'Vercel', 'Github Pages', 'Typescript / Javascript'],
    projectTypes: ['Web Development', 'Personal Project', 'SPA'],
    responsibility: {
      en: [
        "Ideating the overall website layout.",
        "Implementing the idea using a React app and GitHub Pages.",
        "Setting up CI/CD with GitHub Actions to automate the deployment process to GitHub Pages.",
        "Building a small Back-end service to handle email sending."
      ],
      vi: [
        "Lên ý tưởng bố cục cho toàn trang web",
        "Triển khai ý tưởng bằng React app và Github Pages",
        "triển khai CI/CD với Github Actions để tự động quy trình deploy lên Github Pages",
        "Xây dựng một Back-end service nho nhỏ để thực hiện tác vụ send mail"
      ]
    },
    achievements: {
      en: [
        "The project's greatest achievement is your experience with the website!"
      ],
      vi: [
        "Thành tựu lớn nhất của dự án này chính là sự trải nghiệm của bạn với trang web này!."]
    },
    repoUrl: 'https://github.com/VinhTuan-Nguyen/vinhtuan-nguyen.github.io'
  },
  {
    id: 'ONP25',
    title: 'ONP25',
    companyName: 'FPT Software',
    methodology: 'Scrum/Agile',
    role: '.Net Developer',
    thumbnail: '/assets/images/D365-Logo.jpg',
    categories: ['web', 'd365', 'crm'],
    technologies: ['Microsoft D365 F&O', 'X++', 'SQL', '.Net Framework'],
    projectTypes: ['Web Development', 'CRM', 'D365 F&O', 'Unit Test', 'SIT', 'Flowchart Design'],
    teamsize: 5,
    featured: true,
    fromDate: 'Jan/2025',
    toDate: 'May/2025',
    shortDescription: {
      en: [
        "This is a module for managing \"Prices\" across the entire ecosystem of a major player in Japan, encompassing both its domestic and international member companies.",
      ],
      vi: [
        "Đây là 1 module để quản lý \"Giá\" cho toàn bộ hệ sinh thái của một \"Ông lớn\" tại Nhật bản, bao gồm cả các công ty thành viên trong nước và quốc tế."
      ]
    },
    fullDescription: {
      en: [
        "Development web application follows request of customer.",
        "Using X++ (.Net Framework) to build excel upload function, allowing to insert into database up to 10k records at the same time."
      ],
      vi: [
        "Phát triển ứng dụng web theo yêu cầu của khách hàng.",
        "Sử dụng X++ (.Net Framework) để xây dựng chức năng upload excel, cho phép insert vào cơ sở dữ liệu lên đến 10,000 records cùng một lúc."
      ]
    },
    images: [
      '/assets/images/D365-Logo.jpg',
      '/assets/images/d365-slider-1.jpg',
      '/assets/images/d365-slider-2.jpg',
    ],
    responsibility: {
      en: [
        "Worked as an official Low-code Developer at the company",
        "Creating a Flowchart Diagram based on Function Detail Design (FDD)",
        "Implement the features according to the Flowchart and FDD",
        "Creating test case scenarios & executing unit tests.",
        "Perform integration tests based on available scenarios.",
        "Coding, fixing bugs, resolving problems.",
      ],
      vi: [
        "Làm việc với vai trò chính là Low-code Developer tại công ty,",
        "Tạo Flowchart Diagram dựa trên Function Detail Design (FDD).",
        "Triển khai các tính năng Flowchart và FDD",
        "Tạo các kịch bản test case & thực hiện các unit tests.",
        "Thực hiện IT test dựa trên scenarios có sẵn.",
        "Lập trình, sửa lỗi, giải quyết vấn đề."
      ]
    },
    achievements: {
      en: [
        "Ensure monthly release schedule with customers.",
        "Completed all client requirements & released product 2 weeks ahead of schedule.",
        "Received praise and an honourable award from the director and the client for completing the project with the best quality",
        "Made a significant impact within FPT Corporation",
        "Praised and covered by several of the company's mass media"
      ],
      vi: [
        "Đảm bảo lịch phát hành hàng tháng với khách hàng.",
        "Hoàn thành tất cả các yêu cầu của khách hàng và release sản phẩm sớm hơn 2 tuần so với lịch trình.",
        "Nhận được lời khen ngợi và một giải thưởng danh dự từ giám đốc và khách hàng vì đã hoàn thành dự án với chất lượng tốt nhất.",
        "Có tác động đáng kể trong Tập đoàn FPT",
        "Được nhiều kênh thông tin đại chúng của công ty ca ngợi và đưa tin.",
      ]
    },
    articles: [{
      title: {
        en: ['FPT SOFTWARE CAN THO IMPRESSES CUSTOMERS WITH DYNAMICS 365 SOLUTION'],
        vi: ['NHÀ PHẦN MỀM FPT CẦN THƠ GÂY ẤN TƯỢNG VỚI KHÁCH HÀNG BẰNG GIẢI PHÁP DYNAMICS 365']
      },
      url: 'https://www.facebook.com/share/p/19DCQb1Q3J/'
    }]
  },
  {
    id: 'UIUXS2',
    title: 'UI/UX Season 2',
    thumbnail: '/assets/images/ana-logo.jpg',
    companyName: 'FPT Software',
    fromDate: 'Jan/2024',
    toDate: 'Oct/2024',
    teamsize: 15,
    methodology: 'Waterfall',
    shortDescription: {
      en: [
        "This project is a module of the \"Booking\" function for the largest airline in Japan. It allows verification and payment of registered services."
      ],
      vi: [
        "Dự án này là một module của chức năng \"Đặt chỗ\" cho hãng hàng không lớn nhất Nhật Bản. Nó cho phép xác minh và thanh toán các dịch vụ đã đăng ký."
      ]
    },
    featured: false,
    role: 'Front-end Developer',
    fullDescription: {
      en: [
        "This project develops a website to handle all functionalities that end-users can interact with, for one of the largest airline systems in Japan.",
        "Develop multi-language functionality, improve Front-end performance with a Pub-Sub mechanism.",
      ],
      vi: [
        "Dự án này phát triển một trang web có thể xử lý mọi chức năng mà end-users có thể tương tác cho một hãng hàng không lớn nhất Nhật Bản.",
        "Xây dựng chức năng đa ngôn ngữ, cải tiến hiệu suất Front-end với cơ chế Pub-Sub"
      ]
    },
    images: [
      '/assets/images/ana-logo.jpg',
      '/assets/images/angular-logo.jpg',
    ],
    categories: ['web', 'design'],
    technologies: ['Angular 18', 'HTML/CSS', 'Javascript', 'TypeScript', 'Karma/Jasmine'],
    responsibility: {
      en: [
        "Worked as an official Front-end Developer at company.",
        "Making conversation with BA and the onsite team (Japan) to get and clarify requirements.",
        "Analysis requirement and find out solutions and then present the idea to team members.",
        "Coding, fixing bugs, resolving problems."
      ],
      vi: [
        "Đã làm việc với vai trò chính là Front-end Developer tại công ty.",
        "Trao đổi với BA (Business Analyst) và đội ngũ onsite (Nhật Bản) để làm rõ các yêu cầu.",
        "Phân tích yêu cầu, tìm ra các giải pháp và sau đó trình bày ý tưởng cho các thành viên trong nhóm.",
        "Lập trình, sửa lỗi, giải quyết vấn đề."
      ]
    },
    achievements: {
      en: [
        "Frequently nominated as the most efficient employee of the month."
      ],
      vi: [
        "Thường xuyên được đề cử là nhân viên làm việc hiệu quả nhất trong tháng."
      ]
    },
    projectTypes: ['Web Development', 'Front-end', 'Unit Test']
  },
  {
    id: 'PETMULESOFT',
    title: 'PET - Mulesoft',
    thumbnail: '/assets/images/petronas-logo.jpg',
    companyName: 'FPT Software',
    fromDate: 'Sep/2022',
    toDate: 'Apr/2024',
    teamsize: 15,
    methodology: 'Scrum/Agile',
    shortDescription: {
      en: [
        "This project is building a microservices system to automate the entire import and export process for a large oil and gas company in Malaysia."
      ],
      vi: [
        "Dự án này xây dựng một hệ thống microservices để tự động hóa toàn bộ quy trình nhập khẩu và xuất khẩu cho một công ty dầu khí lớn tại Malaysia."
      ]
    },
    featured: true,
    role: 'Low-code Developer',
    fullDescription: {
      en: [
        "Error Handling, Batch Job Handling, Order processing with automation.",
        "It serves as an intermediary, linking the main system with third-party platforms.",
        "It transforms data, unifying disparate systems into a single, cohesive flow."
      ],
      vi: [
        "Xử lý lỗi, xử lý Batch Job, xử lý đơn hàng tự động hóa.",
        "Nó đóng vai trò là trung gian, liên kết hệ thống chính với các bên thứ ba.",
        "Chuyển đổi dữ liệu, hợp nhất các hệ thống riêng biệt thành một luồng thống nhất."
      ]
    },
    images: [
      '/assets/images/petronas-logo.jpg',
      '/assets/images/mulesoft-logo.jpg',
      '/assets/images/mulesoft-api-led.jpg',
    ],
    categories: ['api', 'microservices'],
    technologies: ['Mulesoft', 'Anypoint Platform', 'Munit Test', 'Maven/Java', 'Anypoint MQ'],
    responsibility: {
      en: [
        "Worked as an official Low-code Developer at company.",
        "Creating Flowchart Diagram, Sequence Diagram, High Level Design Diagram.",
        "Communicate with clients to get and clarify new requirements.",
        "Implement the features according to the Flowchart Diagram.",
        "Creating test case scenarios & executing unit tests.",
        "Coding, fixing bugs, resolving problems."
      ],
      vi: [
        "Làm việc với vai trò chính là Low-code Developer tại công ty.",
        "Tạo Flowchart Diagram, Sequence Diagram, High Level Design Diagram.",
        "Trao đổi với khách hàng để lấy và làm rõ các yêu cầu mới.",
        "Triển khai các tính năng theo Flowchart Diagram.",
        "Tạo các kịch bản kiểm thử & thực hiện unit tests.",
        "Lập trình, sửa lỗi, giải quyết vấn đề."
      ]
    },
    achievements: {
      en: [
        "Passed Mulesoft Developer Certified - Level 1.",
        "Passed Mulesoft Developer Certified - Level 2."
      ],
      vi: [
        "Đạt chứng chỉ Mulesoft Developer - Level 1.",
        "Đạt chứng chỉ Mulesoft Developer - Level 2."
      ]
    },
    projectTypes: ['Restful API', 'Micro service', 'Middleware', 'Integration', 'Data Trasforming']
  },
  {
    id: 'CRV_EVOUCHER',
    title: 'CRV - eVoucher',
    thumbnail: '/assets/images/mulesoft-logo.jpg',
    companyName: 'FPT Software',
    fromDate: 'Jun/2022',
    toDate: 'Sep/2022',
    teamsize: 6,
    methodology: 'N/A',
    shortDescription: {
      en: [
        "Just beginning my journey to become a Full-Stack Developer, both challenges and new opportunities are already expanding."
      ],
      vi: [
        "Chập chững bước vào con đường trở thành Full-Stack Developer, những thách thức cũng như các cơ hội mới bắt đầu mở rộng."
      ]
    },
    featured: false,
    role: 'Low-code Developer',
    fullDescription: {
      en: [
        "Upgrade existing BE system.",
        "Verify data and then trigger the process to handle data transformed in the system."
      ],
      vi: [
        "Nâng cấp hệ thống Backend đã có sẵn.",
        "Xác minh dữ liệu và sau đó kích hoạt quy trình để xử lý dữ liệu đã chuyển đổi trong hệ thống."
      ]
    },
    images: [
      '/assets/images/mulesoft-logo.jpg',
      '/assets/images/mulesoft-api-led.jpg',
    ],
    categories: ['api'],
    technologies: ['Mulesoft', 'Anypoint Platform', 'Munit Test', 'Maven/Java'],
    responsibility: {
      en: [
        "Worked as an official Junior Developer at company.",
        "Communicate with clients to get and clarify new requirements.",
        "Coding, fixing bugs, resolving problems."
      ],
      vi: [
        "Làm việc với vai trò chính là Junior Developer tại công ty.",
        "Trao đổi với khách hàng để lấy và làm rõ các yêu cầu mới.",
        "Lập trình, sửa lỗi, giải quyết vấn đề."
      ]
    },
    achievements: {
      en: [
        "Improved problem solving and requirement management skills including change request.",
        "Improved coordination skills when working between clients and team member."
      ],
      vi: [
        "Cải thiện kỹ năng giải quyết vấn đề và quản lý yêu cầu, bao gồm cả yêu cầu thay đổi.",
        "Cải thiện kỹ năng phối hợp khi làm việc giữa khách hàng và các thành viên trong nhóm."
      ]
    },
    projectTypes: ['Restful API', 'Micro service', 'Middleware', 'Integration', 'Data Trasforming']
  }
];