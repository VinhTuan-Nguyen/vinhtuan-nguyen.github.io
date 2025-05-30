export interface IFTranslationMap {
  en: TranslationRecord;
  vi: TranslationRecord;
}

interface TranslationRecord {
  [key: string]: string;
}