import { Language, Theme } from "../Types";

export interface ThemeContextType {
  theme: Theme;
  siwtchTheme: () => void;
}

export interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
}