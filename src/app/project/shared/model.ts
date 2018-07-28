export enum Categories {
	All = 0,
	Graphic = 1,
	Identity = 2,
	Editorial = 3,
	Exhibition = 4,
	Package = 5,
	Contact = 99
}

export interface Navigation {
	name: string;
	filter: Categories;
}

export interface ProjectImage {
	url: string;
	width: number;
	height: number;
	title: string;
	fileName: string;
}

export interface ProjectLite {
	position?: number;
	about: string;
	link?: string;
	name: string;
	youtube?: string;
	descriptions?: string[];
	image: ProjectImage;
	images: ProjectImage[];
	chineseName: string;
	englishName: string;
	categories: Categories[];
}

export interface ContentfulCollageResponse {
	fields: {
		collage: {
			'en-US': ContentfulProjectResponse[];
		};
	};
}

export interface ContentfulProjectResponse {
	sys: any;
	fields: ContentfulProjectFields;
}

export interface ContentfulProjectFields {
	name: ContentfulFieldString;
	categories: {
		'en-US': ContentfulProjectFieldCategory[];
	};
	image: {
		'en-US': ContentfulFieldImage;
	};
	folderName: ContentfulFieldString;
	partners: {
		'en-US': string[];
	};
	about: ContentfulFieldString;
	images: {
		'en-US': ContentfulFieldImage[];
	};
	youtube: ContentfulFieldString;
	websiteUrl: ContentfulFieldString;
}

export interface ContentfulFieldString {
	'en-US': string;
	zh: string;
}

export interface ContentfulFieldImage {
	sys: any;
	fields: {
		title: ContentfulFieldString;
		file: {
			'en-US': {
				url: string;
				details: {
					size: number;
					image: {
						width: number;
						height: number;
					};
				};
				contentType: string;
				fileName: string;
			};
		};
	};
}

export interface ContentfulProjectFieldCategory {
	sys: any;
	fields: {
		name: ContentfulFieldString;
	};
}
