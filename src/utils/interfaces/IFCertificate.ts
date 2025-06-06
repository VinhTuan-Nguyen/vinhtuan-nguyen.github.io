import { IFTranslation } from "./IFTranslation";

export interface IFCertificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: IFTranslation;
  image: string;
  verificationUrl?: string;
}