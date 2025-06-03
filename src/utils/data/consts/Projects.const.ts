import { IFProject } from "../../interfaces/IFProject";

export const PROJECTS: IFProject[] = [
  {
    id: 'ONP25',
    title: 'ORION New Price',
    methodology: 'Scrum/Agile',
    shortDescription: "A module to oversee pricing across ORION's ecosystem, encompassing both its domestic and international member companies.",
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
    technologies: ['.Net Framework', 'X++', 'SQL', 'Dynamics 365 Finance & Operations'],
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
    shortDescription: "N/A",
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
    thumbnail: '/assets/images/mulesoft-logo.png',
    companyName: 'FPT Software',
    fromDate: 'Sep/2022',
    toDate: 'Apr/2024',
    teamsize: 15,
    methodology: 'Scrum/Agile',
    shortDescription: "N/A",
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
      '/assets/images/mulesoft-logo.png',
      '/assets/images/petronas-logo.png',
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
    shortDescription: "N/A",
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
  },
  {
    id: 'MYPORTFOLIO',
    title: 'My Portfolio',
    thumbnail: '/assets/images/mulesoft-logo.png',
    companyName: 'N/A',
    fromDate: 'Jun/2025',
    toDate: 'Jul/2025',
    teamsize: 1,
    methodology: 'N/A',
    shortDescription: "N/A",
    featured: true,
    role: 'Full-Stack Engineer',
    images: [
      '/assets/images/mulesoft-logo.png',
      '/assets/images/petronas-logo.png',
      '/assets/images/mulesoft-api-led.png',
    ],
    categories: ['web', 'design'],
    technologies: ['React', 'Tailwin CSS', 'Typescript / Javascript'],
    projectTypes: ['Web Development', 'Personal Project', 'SPA'],
    fullDescription: {
      en: [],
      vi: []
    },
    responsibility: {
      en: [],
      vi: []
    },
    achievements: {
      en: [],
      vi: []
    },
  }
];