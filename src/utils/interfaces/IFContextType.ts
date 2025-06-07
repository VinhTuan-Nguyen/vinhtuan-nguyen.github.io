import { Language, Theme } from "../Types";

export interface ThemeContextType {
  theme: Theme;
  siwtchTheme: () => void;
}

export interface LanguageContextType {
  language: Language;
  t: (key: string, replace?: { [key: string]: string }) => string;
  changeLanguage: (lang: Language) => void;
}