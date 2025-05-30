import { IFProject } from "../../interfaces/IFProject";

export const PROJECTS: IFProject[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDescription: 'A full-featured online store with payment integration and admin dashboard',
    fullDescription: 'A complete e-commerce solution built with React, Node.js, and MongoDB. Features include product listings, shopping cart, user authentication, payment processing, and an admin dashboard for managing products and orders.',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'web',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe API'],
    challenges: 'Creating a secure payment system and ensuring a smooth user experience across different devices was challenging.',
    solutions: 'Implemented Stripe for secure payments and used responsive design principles to ensure compatibility across devices.',
    results: 'Successfully launched with positive user feedback. Improved checkout conversion by 15% compared to the previous system.',
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/project',
    featured: true
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker App',
    shortDescription: 'Mobile application for tracking workouts and nutrition',
    fullDescription: 'A comprehensive fitness tracking application that allows users to log workouts, track nutrition, set goals, and monitor progress over time. Features include customizable workout plans, calorie tracking, and progress visualizations.',
    thumbnail: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    challenges: 'Designing an intuitive interface for tracking complex workout routines and nutritional data.',
    solutions: 'Conducted user testing to refine the UI and implemented dashboard visualizations for easy progress tracking.',
    results: 'Achieved 4.7/5 star rating on app stores with over 10,000 active users.',
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/project',
    featured: true
  },
  {
    id: 'portfolio-redesign',
    title: 'Agency Website Redesign',
    shortDescription: 'UX/UI redesign for a digital marketing agency',
    fullDescription: 'Complete redesign of a digital marketing agency\'s website focusing on improved user experience, accessibility, and conversion optimization. The project included user research, wireframing, prototyping, and implementation.',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'HTML/CSS', 'JavaScript'],
    challenges: 'Balancing aesthetic design with performance optimization and maintaining brand identity.',
    solutions: 'Created a design system to ensure consistency and used performance benchmarking to optimize load times.',
    results: 'Increased site traffic by 35% and improved lead generation by 20% post-launch.',
    demoUrl: 'https://example.com/demo',
    featured: false
  }
];