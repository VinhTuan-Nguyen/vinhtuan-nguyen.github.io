import { IFTranslation } from "./IFTranslation"

export interface IFContact {
    name: IFTranslation,
    location: IFTranslation,
    phone: IFTranslation,
    jobTitle: IFTranslation,
    email: string,
    github?: string,
    linkedin?: string,
    facebook?: string,
    tiktok?: string
}