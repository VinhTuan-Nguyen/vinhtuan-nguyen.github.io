import { Category } from "../Types";
import { Article } from "./IFArticle";
import { IFTranslation } from "./IFTranslation";

export interface IFProject {
  id: string;
  title: string;
  featured: boolean;
  shortDescription: IFTranslation
  thumbnail: string;
  images: string[];
  projectTypes: string[];
  categories: Category[];
  technologies: string[];
  teamsize: number;
  fromDate: string;
  toDate: string;
  role: string;
  methodology: string;
  fullDescription: IFTranslation;
  responsibility: IFTranslation;
  achievements: IFTranslation;
  companyName?: string;
  demoUrl?: string;
  repoUrl?: string;
  articles?: Article[];
}