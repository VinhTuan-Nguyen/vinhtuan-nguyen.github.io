import { Category } from "../Types";

export interface IFProject {
  id: string;
  title: string;
  featured: boolean;
  shortDescription: string
  fullDescription: string[];
  thumbnail: string;
  images: string[];
  projectTypes: string[];
  categories: Category[];
  technologies: string[];
  teamsize: number;
  fromDate: string;
  toDate: string;
  role: string;
  responsibility: string[];
  achievements?: string[];
  companyName?: string;
  demoUrl?: string;
  repoUrl?: string;
  methodology: string
}