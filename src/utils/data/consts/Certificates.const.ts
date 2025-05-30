import { IFCertificate } from "../../interfaces/IFCertificate";

export const CERTIFICATES: IFCertificate[] = [
  {
    id: 'cert-1',
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    date: 'December 2024',
    description: 'Comprehensive course covering front-end and back-end development with modern frameworks and tools. Developed multiple real-world projects including an e-commerce platform and social media application.',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    verificationUrl: 'https://example.com/verify/cert1'
  },
  {
    id: 'cert-2',
    title: 'Advanced React and Redux',
    issuer: 'Coursera',
    date: 'August 2024',
    description: 'Mastered advanced React concepts including hooks, context API, Redux, and performance optimization techniques. Implemented state management patterns for complex applications.',
    image: 'https://images.pexels.com/photos/5926394/pexels-photo-5926394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    verificationUrl: 'https://example.com/verify/cert2'
  },
  {
    id: 'cert-3',
    title: 'UI/UX Design Principles',
    issuer: 'LinkedIn Learning',
    date: 'May 2024',
    description: 'Learned user-centered design principles, wireframing, prototyping, and usability testing. Created comprehensive design systems and conducted user research for various projects.',
    image: 'https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    verificationUrl: 'https://example.com/verify/cert3'
  }
];
