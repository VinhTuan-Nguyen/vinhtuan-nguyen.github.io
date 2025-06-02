import { IFProject } from "../../interfaces/IFProject";

export const PROJECTS: IFProject[] = [
  {
    id: 'ONP25',
    title: 'ORION New Price',
    methodology: 'Scrum/Agile',
    shortDescription: "A module to oversee pricing across ORION's ecosystem, encompassing both its domestic and international member companies.",
    fullDescription: [
      "Development web application follows request of customer.",
      "Using X++ (.Net Framework) to build excel upload function, allowing to import into database up to 10k records at the same time."
    ],
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
    responsibility: [
      "Worked as an official Low-code Developer at company",
      "Creating Flowchart Diagram based on Function Detail Design (FDD)",
      "Implement the features according to the Flow chart and FDD",
      "Creating test case scenarios & executing unit tests.",
      "Perform integration tests based on available scenarios.",
      "Coding, fixing bugs, resolving problems.",
    ],
    role: '.Net Developer',
    achievements: [
      "Ensure monthly release schedule with customers.",
      "Completed all client requirements & released product 2 weeks ahead of schedule.",
      "Received praise and an honourable award from the director and the client for completing the project with the best quality"
    ],
    companyName: 'FPT Software',
    projectTypes: ['Web Development', 'CRM', 'D365 F&O', 'Unit Test', 'SIT', 'Flowchart Design']

  },
  {
    id: 'UIUXS2',
    title: 'ANA Airline UI/UX',    
    thumbnail: '/assets/images/All-Nippon-Airways-logo.jpg',
    companyName: 'FPT Software',
    fromDate: 'Jan/2024',
    toDate: 'Oct/2024',
    teamsize: 15,
    methodology: 'Waterfall',
    shortDescription: "N/A",
    featured: false,
    role: 'Front-end Developer',
    fullDescription: [
      "This project develops a website to handle all functionalities that end-users can interact with, for one of the largest airline systems in Japan."
    ],
    images: [
      '/assets/images/All-Nippon-Airways-logo.jpg'
    ],
    categories: ['web', 'design'],
    technologies: ['Angular 18', 'HTML/CSS', 'Javascript', 'TypeScript', 'Karma/Jasmine'],
    responsibility: [
      "Worked as an official Front-end Developer at company.",
      "Making conversation with BA and the onsite team (Japan) to get and clarify requirements.",
      "Analysis requirement and find out solutions and then present the idea to team members.",
      "Coding, fixing bugs, resolving problems."
    ],
    achievements: [
      "4 consecutive months of receiving MSC type A rating"
    ],
    projectTypes: ['Web Development', 'Front-end', 'Unit Test', ]
  },
  {
    id: 'PETMULESOFT',
    title: 'Petronas - Mulesoft Microservices',    
    thumbnail: '/assets/images/petronas-logo.png',
    companyName: 'FPT Software',
    fromDate: 'Jan/2024',
    toDate: 'Oct/2024',
    teamsize: 15,
    methodology: 'Waterfall',
    shortDescription: "N/A",
    featured: true,
    role: 'Front-end Developer',
    fullDescription: [
      "This project develops a website to handle all functionalities that end-users can interact with, for one of the largest airline systems in Japan."
    ],
    images: [
      '/assets/images/petronas-logo.png',
      '/assets/images/mulesoft-logo.png',
      '/assets/images/mulesoft-api-led.png',
    ],
    categories: ['api'],
    technologies: ['Angular 18', 'HTML/CSS', 'Javascript', 'TypeScript', 'Karma/Jasmine'],
    responsibility: [
      "Worked as an official Front-end Developer at company.",
      "Making conversation with BA and the onsite team (Japan) to get and clarify requirements.",
      "Analysis requirement and find out solutions and then present the idea to team members.",
      "Coding, fixing bugs, resolving problems."
    ],
    achievements: [
      "4 consecutive months of receiving MSC type A rating"
    ],
    projectTypes: ['Web Development', 'Front-end', 'Unit Test', ]
  },
];