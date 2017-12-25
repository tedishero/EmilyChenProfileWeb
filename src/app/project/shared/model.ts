export enum Categories {
    All = 0,
    Graphic = 1,
    Identity = 2,
    Editorial = 3,
    Exhibition = 4,
    Package = 5,
    Contact = 99,
}

export interface Navigation {
    name: string;
    filter: Categories;
}

export interface ProjectLite {
    about: string;
    link?: string;
    name: string;
    youtube?: string;
    descriptions?: string[];
    projectDetails: string[];
    chineseName: string;
    englishName: string;
    categories: Categories[];
}
