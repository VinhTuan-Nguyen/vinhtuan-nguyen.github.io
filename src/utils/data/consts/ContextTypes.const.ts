import { createContext } from "react";
import { LanguageContextType, ThemeContextType } from "../../interfaces/IFContextType";

export const THEMECONTEXT = createContext<ThemeContextType | undefined>(undefined);

export const LANGCONTEXT = createContext<LanguageContextType | undefined>(undefined);