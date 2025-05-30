export interface IFCertificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  verificationUrl?: string;
}