import { Injectable } from '@angular/core';
import { Categories, ProjectLite } from '../index';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  private filterSubject: Subject<Categories> = new Subject<Categories>();

  constructor() { }

  get(name: string): ProjectLite {
    return Projects.find(x => x.name === name);
  }

  query(): ProjectLite[] {
    return Projects;
  }
}

const Projects: ProjectLite[] = [
  {
    chineseName: '高鐵馬年主視覺',
    englishName: 'Taiwan High Speed Rail 2013 New Year',
    name: 'high_speed_rail_2013',
    descriptions: [
      'Client - Taiwan High Speed Rail Corporation',
      'Design Agency - FREEIMAGE design',
    ],
    projectDetails: [
      'THSR 2013 New Year Logo Design',
      'Website',
      'Train Cabin',
      'Entrance',
      'Ticketing',
      'Timetable',
    ],
    categories: [
      1,
      2
    ]
  },
  {
    chineseName: '光寶產品簡介',
    englishName: 'Lite-On Brochure & Flyers',
    name: 'lite_on',
    descriptions: [
      'Client - Lite-On Technology Corporation',
    ],
    projectDetails: [
      'Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      'Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      'Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      'Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      'Flyer - AC Drive EVO8000 Series/ EVO6000 Series',
    ],
    categories: [
      1,
      3
    ]
  },
  {
    chineseName: '大台北當代藝術雙年展',
    englishName: 'Greater Taipei Biennial of Contemporary Arts',
    descriptions: [
      'Client - National Taiwan University of Arts',
      'Design Agency –FREEIMAGE design'
    ],
    link: 'https://www.greatertaipeiartsfestival.com/',
    name: 'biennial',
    projectDetails: [
      'Logo Design',
      'Poster',
      'Brochure',
      'Brochure',
    ],
    categories: [
      Categories.Identity,
      Categories.Editorial,
      Categories.Graphic,
      Categories.Exhibition
    ]
  },
  {
    chineseName: '紀州庵文學森林-紅樓夢講座視覺',
    englishName: 'Dream of The Red Chamber',
    descriptions: [
      'Client - Kishu An Forest of Literature',
    ],
    name: '紅樓夢',
    projectDetails: [
      'Dream of The Red Chamber – Flyer',
      'Dream of The Red Chamber – Front',
      'Dream of The Red Chamber – Back',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '甜蜜蜜-到臺南找甜頭',
    englishName: 'The Stories of Tainan Sugar Factory',
    descriptions: [
      'Client - Yuan-Liou Publishing Co.,Ltd',
      'Design Agency –FREEIMAGE design',
      'Author-Wei-Fen Huang',
      'Illustration-Zhi-Hong Hsu'
    ],
    name: 'sweet_sweet',
    projectDetails: [
      'Title Typography',
      'Cover with dust jacket',
      'Cover',
      'Layout-1',
      'Layout-2',
      'Layout-3',
      'Layout-4',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic
    ]
  },
  {
    chineseName: '2014華膳中秋禮盒',
    englishName: '2014 Moon Festival gift box',
    descriptions: [
      'Client – China Pacific Catering Services',
      'Photography – Dean Zheng',
      'Design Agency – FREEIMAGE design',
    ],
    name: 'moon',
    projectDetails: [
      'Moon Festival gift box – Packaging Design',
      'Moon Festival gift box – Packaging Design',
    ],
    categories: [
      Categories.Package,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2015金點概念設計獎',
    englishName: '2015 Golden Pin Concept Design Award',
    name: 'golden_pin',
    descriptions: [
      'Client - Taiwan Design Center',
      'Design Agency - FREEIMAGE design',
    ],
    projectDetails: [
      'Poster',
      'Free postcard',
      'Foreign reports',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
      Categories.Identity
    ]
  },
  {
    chineseName: '郭林喜帖',
    englishName: 'Yan&Yu Wedding Invitation',
    name: 'yan_yu',
    descriptions: [
      'Client - Yan&Yu',
      'Press Agency - www.upackaging.com.tw',
    ],
    projectDetails: [
      'Front',
      'Card details',
      'Hot Stamping details',
    ],
    categories: [
      1,
      3
    ]
  },
  {
    chineseName: '蘇吳喜帖',
    englishName: 'Chris & Grace Wedding Invitation',
    descriptions: [
      'Client – Chris Su & Grace Wu',
      'Press Agency - www.upackaging.com.tw',
    ],
    name: 'Chris&Grace',
    projectDetails: [
      'Chris & Grace Wedding Invitation-Front',
      'Chris & Grace Wedding Invitation-Hot Stamping details',
      'Chris & Grace Wedding Invitation-Pop Up Card',
      'Chris & Grace Wedding Invitation-Inside',
      'Chris & Grace Wedding Invitation-Envelope',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '臺灣戲曲中心',
    englishName: 'Taiwan Traditional Theatre Center',
    descriptions: [
      'Client –Taiwan Traditional Theatre Center',
      'Design Agency –FREEIMAGE design',
      'Responsibility- LOGO / Branding'
    ],
    link: 'http://xiqucenter.culture.tw/Xiqu/index.aspx',
    name: '戲曲中心',
    projectDetails: [
      'Taiwan Traditional Theatre Center- Logo Design',
      'Taiwan Traditional Theatre Center- Logo Design',
      'Taiwan Traditional Theatre Center- Pattern',
      'Taiwan Traditional Theatre Center- Bussiness Card',
      'Taiwan Traditional Theatre Center- Envelope',
      'Taiwan Traditional Theatre Center- Postcard',
      'Taiwan Traditional Theatre Center- Bag',
      'Taiwan Traditional Theatre Center- Website',
      'Taiwan Traditional Theatre Center',
      'Taiwan Traditional Theatre Center- Event',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
      Categories.Identity,
    ]
  },
  {
    chineseName: '陳郭喜帖',
    englishName: 'Mo&Wei Wedding Invitation',
    name: 'chen_ku',
    descriptions: [
      'Client - Mo&Wei',
      'Press Agency - www.upackaging.com.tw'
    ],
    projectDetails: [
      'Wedding party of bridegroom\'s family',
      'Wedding party of bride\'s family',
      'Card details',
      'Card details',
      'Envelope Design',
      'Envelope Design',
    ],
    categories: [
      1,
      3
    ]
  },
  {
    chineseName: '華航聯名卡 | 提案',
    englishName: 'China Airline Co-Brander Card',
    descriptions: [
      'Client -HSBC Group',
      'Design Agency –FREEIMAGE design',
    ],
    name: 'card',
    projectDetails: [
      'China Airline Co-Brander Card - PLATINUM',
      'China Airline Co-Brander Card - SIGNATURE',
      'China Airline Co-Brander Card - INFINITE',
      'China Airline Co-Brander Card',
    ],
    categories: [
      Categories.Graphic,
    ]
  },
  {
    chineseName: '來自天方的仙工-南亞美玉特展',
    englishName: 'Heavenly Crafted- A Special Exhibition of Exquisite South Asian Jades',
    descriptions: [
      'Client - Southern Branch of the National Palace Museum',
    ],
    link: 'http://south.npm.gov.tw/zh-TW/ExhibitInfo/page/7d002fd2-029f-446f-93b3-03c3cc02e4c7',
    name: 'jade',
    projectDetails: [
      'Heavenly Crafted- Poster',
      'Heavenly Crafted- Brochure',
      'Heavenly Crafted- Brochure',
      'Heavenly Crafted- Exhibition',
      'Heavenly Crafted- Exhibition',
      'Heavenly Crafted- Exhibition',
      'Heavenly Crafted- Exhibition',
      'Heavenly Crafted- Exhibition',
      'Heavenly Crafted-THSR advertisement',
    ],
    categories: [
      Categories.Exhibition,
      Categories.Graphic,
    ]
  },
  {
    chineseName: 'UPackaging 彩盒印刷',
    englishName: 'UPackaging',
    descriptions: [
      'Client – Upackaging',
      'Web Development- Robert Su',
    ],
    link: 'http://www.upackaging.com.tw',
    name: 'upackaging',
    projectDetails: [
      'Logo Design',
      'Website',
      'Website',
      'Bussiness Card',
      'Bussiness Card',
    ],
    categories: [
      Categories.Identity,
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2016臺灣文博會',
    englishName: '2016 CREATIVE EXPO TAIWAN',
    descriptions: [
      'Client - Taiwan Design Center',
      'Design Agency –FREEIMAGE design',
      'Responsibility- LOGO / Branding / Event KEY VISION Design / APP graphic',
    ],
    name: '2016文博會',
    projectDetails: [
      '2016 CREATIVE EXPO TAIWAN – Poster',
      '2016 CREATIVE EXPO TAIWAN – Bag',
      '2016 CREATIVE EXPO TAIWAN – Exhibition Entrance',
      '2016 CREATIVE EXPO TAIWAN – Invitation',
      '2016 CREATIVE EXPO TAIWAN – Invitation',
      '2016 CREATIVE EXPO TAIWAN – Bottle Label',
      '2016 CREATIVE EXPO TAIWAN – Airport Advertisement',
      '2016 CREATIVE EXPO TAIWAN – APP',
      '2016 CREATIVE EXPO TAIWAN – Gala Dinner',
      '2016 CREATIVE EXPO TAIWAN –Gala Dinner',
      '2016 CREATIVE EXPO TAIWAN –Gala Dinner Menu',
      '2016 CREATIVE EXPO TAIWAN –Gala Dinner Menu',
      '2016 CREATIVE EXPO TAIWAN – Taiwan Pavilion Key Vision',
      '2016 CREATIVE EXPO TAIWAN –Taiwan Pavilion',
      '2016 CREATIVE EXPO TAIWAN –Taiwan Pavilion',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
      Categories.Exhibition
    ]
  },
  {
    chineseName: '十八～二十世紀日本服飾特展',
    englishName: 'KIMONO- 18th-20th Century Japanese Apparel Special Exhibition',
    descriptions: [
      'Client - Southern Branch of the National Palace Museum',
    ],
    link: 'http://south.npm.gov.tw/zh-TW/ExhibitInfo/page/f3a66313-b780-4a43-8b4c-ed95d171c8ba',
    name: 'kimono',
    projectDetails: [
      'Poster',
      'Brochure',
      'Brochure',
      'Exhibition',
      'Exhibition',
    ],
    categories: [
      Categories.Exhibition,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '臺華窯35週年 Logo',
    englishName: 'Tai-Hwa Pottery 35th Anniversary Logo',
    descriptions: [
      'Client - Tai-Hwa Pottery',
      'Design Agency –FREEIMAGE design',
      'Responsibility- Logo Design'
    ],
    name: 'taihwa35',
    projectDetails: [
      'Tai-Hwa Pottery 35th Anniversary Logo Design',
      'Tai-Hwa Pottery 35th Anniversary Logo -Inspiration',
      'Tai-Hwa Pottery 35th Anniversary Logo –Packaging',
      'Tai-Hwa Pottery 35th Anniversary Logo – Umbrella',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Package,
    ]
  },
  {
    chineseName: '大台北藝術節',
    englishName: 'Greater Taipei Arts Festival',
    descriptions: [
      'Client - National Taiwan University of Arts',
      'Design Agency –FREEIMAGE design'
    ],
    name: 'artfestival',
    projectDetails: [
      'Logo Design',
      'Event Program',
    ],
    categories: [
      Categories.Identity,
      Categories.Editorial,
      Categories.Graphic,
      Categories.Exhibition
    ]
  },
  {
    chineseName: '華航新世代客艙計畫',
    englishName: 'China Airlines NexGen program',
    descriptions: [
      'Client - China Airlines',
      'Design Agency –FREEIMAGE design',
      'GUI Index graphic – Zheng Dean',
      'Responsibility- GUI icon revised design / Wi-Fi onboard icon design',
    ],
    name: '華航新世代客艙計畫',
    projectDetails: [
      'China Airlines NexGen program – GUI index',
      'China Airlines NexGen program – icon revised suggestion',
      'China Airlines NexGen program – icon revised suggestion',
      'China Airlines NexGen program – icon revised suggestion',
      'China Airlines NexGen program – cabin simulation',
      'China Airlines NexGen program – cabin simulation',
      'China Airlines NexGen program – cabin actual circumstances',
      'China Airlines NexGen program – cabin actual circumstances',
      'China Airlines NexGen program – Wi-Fi onboard icon',
      'China Airlines NexGen program – Aircraft door',
      'China Airlines NexGen program – Wi-Fi setting instruction',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
    ]
  },
  {
    chineseName: 'WRENCHit多功能扳手組',
    englishName: 'WRENCHit',
    descriptions: [
      'Client - mininch',
      'Photographer – Ku Chou',
      'Responsibility- LOGO / Kickstarter Campaign Page / Packaging Design',
    ],
    name: 'wrenchit',
    link: 'https://www.kickstarter.com/projects/2054052511/wrenchit-turning-smart',
    projectDetails: [
      'WRENCHit – LOGO',
      'WRENCHit – Kickstarter Compaign Page',
      'WRENCHit – Assembly Picture',
      'WRENCHit – Details',
      'WRENCHit – Details',
      'WRENCHit – Details',
      'WRENCHit – Packaging Design (via Tecsetter‏)',
      'WRENCHit – Packaging Design',
      'WRENCHit – User Instructions',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
      Categories.Package
    ]
  },
];
