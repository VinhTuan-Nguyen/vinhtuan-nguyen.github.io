export interface IFProject {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  category: 'web' | 'mobile' | 'design';
  technologies: string[];
  challenges: string;
  solutions: string;
  results: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}