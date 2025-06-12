import { IFTranslation } from "./IFTranslation"

export interface IFAbout {
    myStory: IFTranslation;
    company: Company[];
    education: Education[];
}

interface Company {
    id: string;
    companyName: string;
    jobTitle: IFTranslation;
    fromDate: string;
    toDate: string;
    description: IFTranslation;
}

interface Education {
    universityName: IFTranslation;
    degree: IFTranslation;
    fromDate: string;
    toDate: string;
    gpa: string;
    achievements: IFTranslation;
}