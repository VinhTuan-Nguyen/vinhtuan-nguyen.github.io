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
        "Đây là một dự án cá nhân mà mình thực sự tự hào khi tự bản thân xử lý mọi thứ từ khâu lên ý tưởng, thiết kế web đến triển khai mã nguồn và CI/CD."
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
    fullDescription: {
      en: ["N/A"],
      vi: ["N/A"]
    },
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
        "Thành tựu lớn nhất của dự án này chính là sự trải nghiệm của bạn với trang web!."]
    },
  },
  {
    id: 'ONP25',
    title: 'ORION New Price',
    methodology: 'Scrum/Agile',
    shortDescription: {
      en: [
        "A module to oversee \"Picing\" across SONY's ecosystem, encompassing both its domestic and international member companies.",
      ],
      vi: [
        "Đây là 1 module giám sát \"Giá\" trên toàn hệ sinh thái SONY, bao gồm cả các công ty thành viên trong nước và quốc tế."
      ]
    },
    fullDescription: {
      en: [
        "Development web application follows request of customer.",
        "Using X++ (.Net Framework) to build excel upload function, allowing to import into database up to 10k records at the same time."
      ],
      vi: []
    },
    thumbnail: '/assets/images/D365-Logo.png',
    images: [
      '/assets/images/D365-Logo.png',
      '/assets/images/d365-slider-1.jpg',
      '/assets/images/d365-slider-2.jpg',
    ],
    categories: ['web', 'd365', 'crm'],
    technologies: ['Microsoft D365 F&O', 'X++', 'SQL', '.Net Framework'],
    teamsize: 5,
    featured: true,
    fromDate: 'Jan/2025',
    toDate: 'May/2025',
    responsibility: {
      en: [
        "Worked as an official Low-code Developer at company",
        "Creating Flowchart Diagram based on Function Detail Design (FDD)",
        "Implement the features according to the Flow chart and FDD",
        "Creating test case scenarios & executing unit tests.",
        "Perform integration tests based on available scenarios.",
        "Coding, fixing bugs, resolving problems.",
      ],
      vi: []
    },
    role: '.Net Developer',
    achievements: {
      en: [
        "Ensure monthly release schedule with customers.",
        "Completed all client requirements & released product 2 weeks ahead of schedule.",
        "Received praise and an honourable award from the director and the client for completing the project with the best quality"
      ],
      vi: []
    },
    companyName: 'FPT Software',
    projectTypes: ['Web Development', 'CRM', 'D365 F&O', 'Unit Test', 'SIT', 'Flowchart Design']

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
        "This module handles ANA Airlines' Booking functionality. Allowing users to check, register, and pay for in-flight services post-ticket booking.",
      ],
      vi: [
        "Module này xử lý chức năng \"Đặt Vé\" của ANA airline. Nó cho phép người dùng kiểm tra, đăng ký và thanh toán các dịch vụ trên chuyến bay đó sau khi đặt vé."
      ]
    },
    featured: false,
    role: 'Front-end Developer',
    fullDescription: {
      en: [
        "This project develops a website to handle all functionalities that end-users can interact with, for one of the largest airline systems in Japan."
      ],
      vi: []
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
      vi: []
    },
    achievements: {
      en: [
        "4 consecutive months of receiving MSC type A rating"
      ],
      vi: []
    },
    projectTypes: ['Web Development', 'Front-end', 'Unit Test',]
  },
  {
    id: 'PETMULESOFT',
    title: 'Petronas - Mulesoft',
    thumbnail: '/assets/images/petronas-logo.png',
    companyName: 'FPT Software',
    fromDate: 'Sep/2022',
    toDate: 'Apr/2024',
    teamsize: 15,
    methodology: 'Scrum/Agile',
    shortDescription: {
      en: [
        "It serves as an intermediary, linking the main system with third-party platforms. It transforms data, unifying disparate systems into a single, cohesive flow."
      ],
      vi: [
        "Nó đóng vai trò là trung gian, liên kết hệ thống chính với các bên thứ ba. Chuyển đổi dữ liệu, hợp nhất các hệ thống riêng biệt thành một luồng thống nhất."
      ]
    },
    featured: true,
    role: 'Low-code Developer',
    fullDescription: {
      en: [
        "Batch Job Handling.",
        "Order processing with automation.",
        "Data Transforming.",
        "Collaborating with other third-party to integrate systems."
      ],
      vi: []
    },
    images: [
      '/assets/images/petronas-logo.png',
      '/assets/images/mulesoft-logo.png',
      '/assets/images/mulesoft-api-led.png',
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
      vi: []
    },
    achievements: {
      en: [
        "Passed Mulesoft Developer Certified - Level 1.",
        "Passed Mulesoft Developer Certified - Level 2."
      ],
      vi: []
    },
    projectTypes: ['Restful API', 'Micro service', 'Middleware', 'Integration', 'Data Trasforming']
  },
  {
    id: 'CRV_EVOUCHER',
    title: 'CRV - eVoucher',
    thumbnail: '/assets/images/mulesoft-logo.png',
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
      vi: []
    },
    images: [
      '/assets/images/mulesoft-logo.png',
      '/assets/images/mulesoft-api-led.png',
    ],
    categories: ['api'],
    technologies: ['Mulesoft', 'Anypoint Platform', 'Munit Test', 'Maven/Java'],
    responsibility: {
      en: [
        "Worked as an official Junior Developer at company.",
        "Communicate with clients to get and clarify new requirements.",
        "Coding, fixing bugs, resolving problems."
      ],
      vi: []
    },
    achievements: {
      en: [
        "Improved problem solving and requirement management skills including change request.",
        "Improved coordination skills when working between clients and team member."
      ],
      vi: []
    },
    projectTypes: ['Restful API', 'Micro service', 'Middleware', 'Integration', 'Data Trasforming']
  }
];