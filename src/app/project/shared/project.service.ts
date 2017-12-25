import { Injectable } from '@angular/core';
import { Categories, ProjectLite } from './model';
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
    about: '台灣高鐵為慶新春，每年發展由生肖發想之主視覺。運用高鐵既有的色彩以及線條特性，勾勒出速度感的奔馳駿馬，一方面搭配該年生肖，另一方面則呼應高速鐵路形象，持續為旅客勇往直前，快速馳騁南北。',
    name: '高鐵馬年主視覺',
    descriptions: [
      'Client – 台灣高鐵 Taiwan High Speed Rail Corporation', 
      'Design Agency - 自由落體設計 FREEIMAGE design',
    ],
    projectDetails: [
      '高鐵馬年主視覺 - THSR 2013 New Year Logo Design',
      '高鐵馬年主視覺 - Website',
      '高鐵馬年主視覺 - Train Cabin',
      '高鐵馬年主視覺 - Entrance',
      '高鐵馬年主視覺 - Ticketing',
      '高鐵馬年主視覺 - Timetable',
    ],
    categories: [
      1,
      2
    ]
  },
  {
    chineseName: '光寶產品簡介',
    englishName: 'Lite-On Brochure & Flyers',
    about: '光寶以「光電節能、智慧科技最佳夥伴」為願景，聚焦核心光電元件及電子關鍵零組件之發展。該產品簡介共分為繁簡中文及英文三版本，介紹EVO 8000 Series與EVO 6000 Series兩款變頻器。因應科技產品予人專業權威走向，色調選用冷色系，呼應光寶企業標誌。',
    name: '光寶',
    descriptions: [
      'Client – 台灣光寶電子股份有限公司 Lite-On Technology Corporation',
    ],
    projectDetails: [
      '光寶 Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      '光寶 Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      '光寶 Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      '光寶 Brochure - AC Drive EVO8000 Series/ EVO6000 Series',
      '光寶 Flyer - AC Drive EVO8000 Series/ EVO6000 Series',
      '光寶 Flyers - AC Drive EVO8000 Series/ EVO6000 Series'
    ],
    categories: [
      1,
      3
    ]
  },
  {
    chineseName: '大台北當代藝術雙年展',
    englishName: 'Greater Taipei Biennial of Contemporary Arts',
    about: `「大臺北當代藝術雙年展」，由國立臺灣藝術大學美術學院，與有章藝術博物館共同規劃執行，邀請法國重量級哲學暨漢學大師朱利安（François Jullien）擔任客座策展人、來自10個國家計30位國際知名藝術家參展。

朱利安以「去相合—藝術與暢活從何而來？」（Dé-coïncidence—d'où viennent l'art et l'existence ?）作為命題，提出藝術的任務在於實現「去相合」：唯有「期待中的合宜銜接被拆解了」，意料之外的某物才能含蓄地湧現，期待藉由朱利安極富前瞻性的思想與洞見，激發藝術創作與理論的碰撞，開啟殊異藝術觀念和語言之實質對話。本展邀集來自美國、法國、英國、捷克、土耳其、澳洲、日本、中國大陸、香港及臺灣等地共計30位藝術家，於臺藝大有章藝術博物館以及校區北側從舊有眷舍翻新而來之新興藝術聚落，聯袂展出。同時進行的平行展，並拓及至鄰近的板橋435藝文特區。展期自2016年11月7日起，至2017年1月14日`,
    descriptions: [
      'Client - 國立臺灣藝術大學 National Taiwan University of Arts', 
      'Design Agency –自由落體設計 FREEIMAGE design'
    ],
    link: 'https://www.greatertaipeiartsfestival.com/',
    name: '大台北當代藝術雙年展',
    projectDetails: [
      '大台北當代藝術雙年展 - Logo Design',
      '大台北當代藝術雙年展 - Poster',
      '大台北當代藝術雙年展 - Brochure',
      '大台北當代藝術雙年展 - Brochure',
    ],
    categories: [
      Categories.Identity,
      Categories.Editorial,
      Categories.Graphic,
      Categories.Exhibition
    ]
  },
  {
    chineseName: '甜蜜蜜-到臺南找甜頭',
    englishName: 'The Stories of Tainan Sugar Factory',
    about: '臺南是台灣糖業的大本營，極盛時期曾有九座糖廠位於臺南，如今雖然糖業式微，糖廠一一關閉，但近幾年在活化文化資產的熱潮下，臺南各地舊糖廠紛紛以不同的面貌展現，重新吸引了人們的目光。本書透過深入淺出的訪談，大量的手繪圖解，現場實景攝影，活潑的架構規劃與編排，帶領讀者展開一場穿梭時空的老糖廠甜蜜之旅。',
    descriptions: [
      'Client - 遠流出版公司 Yuan-Liou Publishing Co.,Ltd',
      'Design Agency – 自由落體設計FREEIMAGE design', 
      'Author - 黃微芬 Wei-Fen Huang', 
      'Illustration- 徐至宏 Zhi-Hong Hsu'
    ],
    name: '甜蜜蜜',
    projectDetails: [
      '甜蜜蜜 - Title Typography',
      '甜蜜蜜 - Cover with dust jacket',
      '甜蜜蜜 - Cover',
      '甜蜜蜜 - Layout-1',
      '甜蜜蜜 - Layout-2',
      '甜蜜蜜 - Layout-3',
      '甜蜜蜜 - Layout-4',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic
    ]
  },
  {
    chineseName: '十八～二十世紀日本服飾特展',
    englishName: 'KIMONO- 18th-20th Century Japanese Apparel Special Exhibition',
    about: `此次展覽以故宮近年新購日本服飾為主軸，包括江戶小袖、武士服飾、近代和服及織品等，規劃「江戶服飾－織染繡的競演」、「和服之美－創新與傳承」兩單元，藉以呈現日本服飾之美。時至今日，日本人依然保留穿著和服的傳統文化，而KIMONO已成為日本服飾的代名詞。 `,
    descriptions: [
      'Client – 國立故宮博物院南院院區 Southern Branch of the National Palace Museum',
      'Design Agency - 渥得設計 Woodart'
    ],
    link: 'http://south.npm.gov.tw/zh-TW/ExhibitInfo/page/f3a66313-b780-4a43-8b4c-ed95d171c8ba',
    name: 'kimono',
    projectDetails: [
      '十八～二十世紀日本服飾特展 - Poster',
      '十八～二十世紀日本服飾特展 - Brochure',
      '十八～二十世紀日本服飾特展 - Brochure',
      '十八～二十世紀日本服飾特展 - Exhibition',
      '十八～二十世紀日本服飾特展 - Exhibition',
    ],
    categories: [
      Categories.Exhibition,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '紀州庵文學森林-紅樓夢講座視覺',
    englishName: 'Dream of The Red Chamber',
    about: '紀州庵文學森林於 2016 下半年精心規畫系列別出心裁的《紅樓夢》五大主題–「紅樓經典、紅樓青春、紅樓文物、紅樓文創、紅樓創作」，並邀集風評最佳的紅樓名家授課，一同徜徉經典奇書、從經典中品讀人生、吟詠詩華、徜徉想像、樂玩創意。',
    descriptions: [
      'Client – 紀州庵文學森林 Kishu An Forest of Literature',
    ],
    name: '紅樓夢',
    projectDetails: [
      'Dream of The Red Chamber | 紅樓夢 – Cover',
      'Dream of The Red Chamber | 紅樓夢 – Flyer',
      'Dream of The Red Chamber | 紅樓夢 – Front',
      'Dream of The Red Chamber | 紅樓夢 – Back',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2014華膳中秋玉兔拱月禮盒',
    englishName: '2014 Moon Festival gift box',
    about: '華膳空廚「玉兔拱月」禮盒，以傳統中國水墨畫的方式，呈現出古典優雅的美感，外盒大膽選用灰色，跳脫傳統更顯大方，打開盒蓋，映入眼簾的是四隻小墨兔圍繞著金色的月亮，以破格的方式，將四種口味的月餅盒連成一個月亮，每一種口味的盒面還搭配了一隻或坐或站的小墨兔。禮盒整體則是讓人有煥然一新又不失傳統的驚艷。',
    descriptions: [
      'Client – 華膳空廚公司 China Pacific Catering Services', 
      'Photography – 鄭鼎 Dean Zheng', 
      'Design Agency –自由落體設計 FREEIMAGE design',
    ],
    name: '2014華膳中秋玉兔拱月禮盒',
    projectDetails: [
      'Moon Festival gift box | 華膳中秋玉兔拱月禮盒 – Packaging Design',
      'Moon Festival gift box | 華膳中秋玉兔拱月禮盒 – Packaging Design',
    ],
    categories: [
      Categories.Package,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2015金點概念設計獎',
    englishName: '2015 Golden Pin Concept Design Award',
    about: `自2015年起，金點設計獎品牌之下依專業設計類別分設「金點設計獎」、「金點概念設計獎」及「金點新秀設計獎」等3大獎別，旨在褒揚華人傑出的創新產品與作品。「金點概念設計獎」開放全球各地對創意設計有熱忱、對改變社會有想法的設計菁英與同好參與。

此屆主題為「中觀」，即來自於華人文化、生活方式、華人哲學、思想、原則並提出可充分傳達華人特色，或解決華人地區面臨問題之作品。`,
    name: '2015金點概念設計獎',
    descriptions: [
      'Client - Taiwan Design Center',
      'Design Agency - FREEIMAGE design',
    ],
    projectDetails: [
      '2015 金點概念設計獎 - Poster',
      '2015 金點概念設計獎 - Free postcard',
      '2015 金點概念設計獎 - Foreign reports',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
      Categories.Identity
    ]
  }, 
  {
    chineseName: '星級旅館',
    englishName: 'Star Hotel',
    about: '旅宿網由交通部觀光局官方公布台灣經評鑑通過合法安全品質價格優良旅宿，同國際AAA鑽石制度及富比世(Forbes)星級旅館指南嚴謹評鑑標準，以一至五顆星來評鑑台灣旅館等級。',
    name: '星級旅館',
    descriptions: [
      'Client – 台灣觀光局 Tourism Bureau, Rep. of China(Taiwan)', 
      'Design Agency –自由落體設計 FREEIMAGE design', 
      'Responsibility- LOGO ',
    ],
    link: 'http://taiwanstay.net.tw',
    projectDetails: [
      'Star Hotel | 星級旅館 – logo',
      'Star Hotel | 星級旅館 – logo',
      'Star Hotel | 星級旅館 – website',
      'Star Hotel | 星級旅館 – website',
    ],
    categories: [
      Categories.Graphic,
      Categories.Identity
    ]
  },
  {
    chineseName: '華膳空廚品牌整合',
    englishName: 'China Pacific Catering Service',
    about: `華膳空廚係由中華航空與太古集團共同投資成立，旨在提升由桃園出發航運的空中餐點品質。 
    
本商標用於華膳出品所有食品包裝、文宣，以董陽孜女士所提「華膳」二字延伸視覺系統，展現東方美食的博大精深。`,
    name: '華膳空廚品牌整合',
    descriptions: [
      'Client –華膳空廚公司 China Pacific Catering Service',
      'Design Agency –自由落體設計 FREEIMAGE design', 
      'Calligrapher – 董陽孜 Tong Yang-tze', 
      'Photographer – 鄭鼎 Cheng Ting', 
      'Responsibility- LOGO / Main Packaging Design'
    ],
    link: 'www.ifood-cpcs.com.tw',
    projectDetails: [
      'China Pacific Catering Service | 華膳空廚品牌整合 – Logo',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Chinese Cuisine Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 - Chinese Cuisine Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 - Chinese Cuisine Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Souvenir Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Souvenir Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Cake Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Cake Packaging Design',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Menu Layout',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Menu Layout',
      'China Pacific Catering Service | 華膳空廚品牌整合 – Menu Layout'
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
      Categories.Identity,
      Categories.Package,
    ]
  },
  {
    chineseName: '輕地方',
    englishName: 'WINDSCAPE',
    about: `輕地方的甜點，是為愛為生的甜點心。
法式點心是甜的，為了讓所愛的人享用健康美味的甜點心，更甜。
    
甜甜的心，不私藏，創辦人決定在摯愛的新竹市開甜甜的「輕地方」，用最健康、新鮮、頂級的食材，手作法式點心；讓身體無負擔，荷包無壓力，心情無憂煩。創造一個屬於每個人的輕鬆、輕快、輕盈的輕地方，一個重感情的好地方。`,
    descriptions: [
      'Client - 輕地方WINDSCAPE',
      'Design Agency - 自由落體設計FREEIMAGE design',
      'Photographer - 鄭鼎Cheng Dean',
      'Editorial Design - 鄭又綺 Cheng Yu Chi',
      'Responsibility - LOGO',
    ],
    name: 'Windscape',
    projectDetails: [
      'WINDSCAPE - Logo Design',
      'WINDSCAPE - Logo Design',
      'WINDSCAPE - Logo Design',
      'WINDSCAPE - Brochure',
      'WINDSCAPE - Brochure',
      'WINDSCAPE - Brochure',
      'WINDSCAPE - Brochure',
      'WINDSCAPE - Brochure',
      'WINDSCAPE - Brochure'
    ],
    categories: [
      Categories.Editorial,
      Categories.Identity,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2018台灣燈會在嘉義',
    englishName: '2018 Taiwan Lantern Festival',
    about: `2018台灣燈會Logo以數字8為主要設計概念。將嘉義縣東西寬闊的地形、北回歸線橫貫其中的特色，及嘉義人寬闊的心胸和溫暖的人情皆融入其中，橘、紅漸層的主色調。

燈會是張燈結綵的歡樂氣氛，為呈現燈會的格局大器，結合質感深厚的中華文化價值，並兼負創造城市風向的使命願景，點亮嘉義新時代及北緯23.5度的光芒，以橙紅色基調代表暖心滿溢的真摯人情味，明年燈會將匯聚科技、文化、藝術等層面，相信將造就精彩奪目的國際視野，光線折射照亮每個角落，代表嘉義將從這裡出發面對全世界，引東方風華與氣度。`,
    descriptions: [
      'Client – 嘉義縣政府Chia Yi County Government',
      'Design Agency –自由落體設計FREEIMAGE design',
      'Responsibility- LOGO'
    ],
    name: '2018 lantern festival',
    youtube: 'https://www.youtube.com/embed/5pK84TKDNR4?rel=0',
    projectDetails: [
      '2018 Taiwan Lantern Festival - Logo Design',
      '2018 Taiwan Lantern Festival - Cap',
      '2018 Taiwan Lantern Festival - Cap'
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '臺灣戲曲中心',
    englishName: 'Taiwan Traditional Theatre Center',
    about: '以東方方正印章元素，表現出中華文化瑰寶－戲曲。人生像座舞台，每段過程就如上演一場戲，而音樂是多面向的、立體的，「曲」字置於戲劇中，象徵在戲劇裡貫穿全場核心，也象徵著曲終（中）人不散、戲如人生的寓意。',
    descriptions: [
      'Client – 臺灣戲曲中心 Taiwan Traditional Theatre Center', 
      'Design Agency – 自由落體設計 FFREEIMAGE design', 
      'Responsibility - LOGO / Branding'
    ],
    link: 'http://xiqucenter.culture.tw/Xiqu/index.aspx',
    name: '戲曲中心',
    projectDetails: [
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Logo Design',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Logo Design',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Pattern',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Bussiness Card',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Envelope',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Postcard',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Bag',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 - Website',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心',
      'Taiwan Traditional Theatre Center | 臺灣戲曲中心 (via Sam Wang‏)',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
      Categories.Identity,
    ]
  },
  {
    chineseName: '郭林喜帖',
    englishName: 'Yan&Yu Wedding Invitation',
    about: '新人為虔誠基督教教友，圖案結合新人英文名與教堂，牡丹花與喜鵲點綴更添東方味，中西合併的喜卡。',
    name: '郭林喜帖',
    descriptions: [
      'Client - Yan&Yu',
      'Press Agency - www.upackaging.com.tw',
    ],
    projectDetails: [
      '郭林喜帖 - Front',
      '郭林喜帖 - Card details',
      '郭林喜帖 - Hot Stamping details',
    ],
    categories: [
      1,
      3
    ]
  },
  {
    chineseName: '蘇吳喜帖',
    englishName: 'Chris & Grace Wedding Invitation',
    about: '蝴蝶被古人認為是愛情的象徵，寓意生活美滿、富貴吉祥、愛情甜美。又因“蝴”跟“福”諧音，被認為是福祿吉祥的象徵。封面蕾絲圖紋從新娘衣裳取下，為她量身定做的祝福。翻開卡片同時新人剪影站起，敬邀親友們一起見證幸福時刻。',
    descriptions: [
      'Client – Chris Su & Grace Wu',
      'Press Agency - www.upackaging.com.tw',
    ],
    name: '蘇吳喜帖',
    projectDetails: [
      'Chris & Grace Wedding Invitation | 蘇吳喜帖 - Front',
      'Chris & Grace Wedding Invitation | 蘇吳喜帖 - Hot Stamping details',
      'Chris & Grace Wedding Invitation | 蘇吳喜帖 - Pop Up Card',
      'Chris & Grace Wedding Invitation | 蘇吳喜帖 - Inside',
      'Chris & Grace Wedding Invitation | 蘇吳喜帖 - Envelope',
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '陳郭喜帖',
    englishName: 'Mo&Wei Wedding Invitation',
    about: '童話般的愛情故事才正要展開！邀請大家進入歡樂王國坐上旋轉木馬，歡慶甜蜜幸福時光！內層小卡依照結婚、文定資訊不同替換，隨風轉動增添動感。',
    name: '陳郭喜帖',
    descriptions: [
      'Client - Mo&Wei',
      'Press Agency - www.upackaging.com.tw'
    ],
    projectDetails: [
      '陳郭喜帖 - Wedding party of bridegroom\'s family',
      '陳郭喜帖 - Wedding party of bride\'s family',
      '陳郭喜帖 - Card details',
      '陳郭喜帖 - Card details',
      '陳郭喜帖 - Envelope Design',
      '陳郭喜帖 - Envelope Design',
    ],
    categories: [
      1,
      3
    ]
  },
  {
    chineseName: '華航聯名卡 | 提案',
    englishName: 'China Airline Co-Brander Card',
    about: `搭配華航新世代客艙計畫，以承載東方美學為主軸，以宋代人文風格為基調，精選三種宋代器皿，採局部紋理呈現。 

白金卡 － 汝窯 青瓷蓮花式溫碗 

御璽卡 － 鈞窯 丁香紫渣斗式花盆 

無限卡 － 建窯 兔毫盞`,
    descriptions: [
      'Client – 匯豐銀行 HSBC Group', 
      'Design Agency –自由落體設計 FREEIMAGE design',
    ],
    name: '華航聯名卡',
    projectDetails: [
      'China Airline Co-Brander Card | 華航聯名卡 - PLATINUM',
      'China Airline Co-Brander Card | 華航聯名卡 - SIGNATURE',
      'China Airline Co-Brander Card | 華航聯名卡 - INFINITE',
      'China Airline Co-Brander Card | 華航聯名卡',
    ],
    categories: [
      Categories.Graphic,
    ]
  },
  {
    chineseName: '來自天方的仙工-南亞美玉特展',
    englishName: 'Heavenly Crafted- A Special Exhibition of Exquisite South Asian Jades',
    about: '以故宮珍藏伊斯蘭玉器中最精美的蒙兀兒玉器為主，印度非蒙兀兒地區的玉器為輔的142組件作品，邀請民眾欣賞在乾隆皇帝心中「是仙工，也是鬼工」的極致玉雕之美。',
    descriptions: [
      'Client – 國立故宮博物院南院院區Southern Branch of the National Palace Museum',
      'Design Agency - 渥得設計 Woodart'
    ],
    link: 'http://south.npm.gov.tw/zh-TW/ExhibitInfo/page/7d002fd2-029f-446f-93b3-03c3cc02e4c7',
    name: '南亞美玉特展',
    projectDetails: [
      'Heavenly Crafted | 南亞美玉特展 - Poster',
      'Heavenly Crafted | 南亞美玉特展 - Brochure',
      'Heavenly Crafted | 南亞美玉特展 - Brochure',
      'Heavenly Crafted | 南亞美玉特展 - Exhibition',
      'Heavenly Crafted | 南亞美玉特展 - Exhibition',
      'Heavenly Crafted | 南亞美玉特展 - Exhibition',
      'Heavenly Crafted | 南亞美玉特展 - Exhibition',
      'Heavenly Crafted | 南亞美玉特展 - Exhibition',
      'Heavenly Crafted | 南亞美玉特展 - THSR advertisement',
    ],
    categories: [
      Categories.Exhibition,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2013華膳中秋饗月禮盒',
    englishName: '2013 Moon Festival gift box',
    about: '廣式月餅以不同色彩墨點提點口味，西式起士燒則以插畫形式區分各餡料，提供消費者中西式多樣選擇。',
    descriptions: [
      'Client – 華膳空廚公司 China Pacific Catering Services', 
      'Photography – 鄭鼎 Dean Zheng', 
      'Design Agency –自由落體設計 FREEIMAGE design'
    ],
    name: '2013華膳中秋饗月禮盒',
    projectDetails: [
      '2013 Moon Festival gift box | 華膳中秋饗月禮盒 – Chinese Moon Cake',
      '2013 Moon Festival gift box | 華膳中秋饗月禮盒 – Cheese Cake',
      '2013 Moon Festival gift box | 華膳中秋饗月禮盒 – Chinese Moon Cake',
      '2013 Moon Festival gift box | 華膳中秋饗月禮盒 – Combo'
    ],
    categories: [
      Categories.Graphic,
      Categories.Graphic,
      Categories.Package
    ]
  },
  {
    chineseName: '2014台灣設計展',
    about: `年度主題丨設計開門 Open Design 
在這裡，你會驚艷天地間的繽紛，有機卻又協和，一切自然人文的色彩，太麻里日出的太陽紅、池上稻浪的金黃、金針山花海橘、臺東釋迦綠、卑南石板屋的深灰、公東教堂白色、嘉明湖的靛色、三仙台的海青、蘭嶼珊瑚紫、鹿野高台遼闊的天空藍，光譜出迷人著迷的魅力，2014台灣設計展，首次落位臺東，迎接你的是熱情的五光十色，以及最溫暖的人們。 

主視覺以光圈造型，如鸚鵡螺精密切割，彷彿透過設計的改造，能夠將瞬間的觸動變成永恆的感動，10種顏色更大開城市的門，敞開心扉歡喜迎接，美麗未來的到來！`,
    englishName: '2014 Taiwan Design Expo',
    descriptions: [
      'Client – 台灣創意中心 Taiwan Design Center',
      'Design Agency – 自由落體設計 FREEIMAGE design', 
      'Photographer - 鄭鼎 Cheng Ting', 
      'Responsibility- Event KEY VISION Design' 
    ],
    name: '2014台灣設計展',
    projectDetails: [
      '2014 Taiwan Design Expo | 台灣設計展 – Poster',
      '2014 Taiwan Design Expo | 台灣設計展 – Invitation',
      '2014 Taiwan Design Expo | 台灣設計展 – Badge',
      '2014 Taiwan Design Expo | 台灣設計展 – Icon',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition Entrance',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition',
      '2014 Taiwan Design Expo | 台灣設計展 – Sign',
      '2014 Taiwan Design Expo | 台灣設計展 – Exhibition',
      '2014 Taiwan Design Expo | 台灣設計展 – Workshop',
      '2014 Taiwan Design Expo | 台灣設計展 – Food Court',
      '2014 Taiwan Design Expo | 台灣設計展 – Commemorative Stamps Stop',
      '2014 Taiwan Design Expo | 台灣設計展 – Commemorative Stamps Stop',
      '2014 Taiwan Design Expo | 台灣設計展 – Cool Ice Shop',
      '2014 Taiwan Design Expo | 台灣設計展 – Bike'
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
      Categories.Exhibition
    ]
  },
  {
    chineseName: '福樺建設賀卡',
    englishName: 'Fu-Hua Construction Greeting Cards',
    about: `2014年度主題「知福惜福」 
喜氣亮橘色配上燙金，以福中有福概念呈現。 
     
2015年度主題「福地洞天」 
鏤空圓組成福字，以現代手法呈現傳統書法。`,
    descriptions: [
      'Client – 福樺建設 Fu-Hua Construction', 
      'Design Agency –自由落體設計 FREEIMAGE design', 
      'Calligrapher – 郭博州 Kuo Bor-Jou '
    ],
    name: '福樺建設賀卡',
    projectDetails: [
      'Fu-Hua Construction Greeting Cards | 福樺建設賀卡 - 2015 Greeting Card Design',
      'Fu-Hua Construction Greeting Cards | 福樺建設賀卡 - 2015 Greeting Card Detail',
      'Fu-Hua Construction Greeting Cards | 福樺建設賀卡 - 2014 Greeting Card Design',
      'Fu-Hua Construction Greeting Cards | 福樺建設賀卡 - 2014 Greeting Card Detail',
      'Fu-Hua Construction Greeting Cards | 福樺建設賀卡 - 2014 Greeting Card Detail',
      'Fu-Hua Construction Greeting Cards | 福樺建設賀卡 - 2014 Greeting Card Envelope'
    ],
    categories: [
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: 'UPackaging 彩盒印刷',
    englishName: 'UPackaging',
    about: `UPackaging提供客製化訂做瓦愣紙盒服務，從網站上了解各步驟可加工方式進而選擇適合自己所需。UPackaging 結合「UP」與「U (your)」的命名，追求更好上等品質與自己的（your）紙盒，在商標設計方面以向上箭頭與紙盒立體剪影六面形結合，在負空間形成U字。名片利用該公司特色瓦愣紙製作，一眼即識產業方向。`,
    descriptions: [
      'Client – Upackaging',
      'Web Development- 蘇俊榮 Robert Su',
    ],
    link: 'http://www.upackaging.com.tw',
    name: 'upackaging',
    projectDetails: [
      'UPackaging 彩盒印刷 - Logo Design',
      'UPackaging 彩盒印刷 - Website',
      'UPackaging 彩盒印刷 - Website',
      'UPackaging 彩盒印刷 - Bussiness Card',
      'UPackaging 彩盒印刷 - Bussiness Card',
    ],
    categories: [
      Categories.Identity,
      Categories.Editorial,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '十步青山',
    englishName: 'LanVece',
    about: `「Lan」是高山的蘭，「Vece」是阿里山原住民眼中神聖、具能量的植物，「LanVece」即是來自於高山，蘊含大自然美好生命力的禮物。`,
    descriptions: [
      'Client – 青山蘭花生物科技有限公司 Charm Sun Phalaenopsis Biotech',
      'Design Agency – 自由落體設計 FREEIMAGE design',
      'Photographer – 鄭鼎 Cheng Ting  鹿森林 實驗花廊 Deer Forest Flower Gallary',
      'Responsibility - Logotype',
    ],
    link: 'http://www.lanvece.com.tw/',
    name: 'lanvece',
    projectDetails: [
      'LanVece | 十步青山 – Total Treatment Hydrolat For Men',
      'LanVece | 十步青山 – Luxe Rejuvenation Hydrolat',
      'LanVece | 十步青山 – Aqua- Plumping Hydrolat',
      'LanVece | 十步青山 – Whitening Essence',
      'LanVece | 十步青山 – Cleansing Mousse for Rosacea Skin',
      'LanVece | 十步青山 – Whitening Cream'
    ],
    categories: [
      Categories.Identity,
      Categories.Package,
      Categories.Graphic,
    ]
  },
  {
    chineseName: '2016臺灣文博會',
    englishName: '2016 CREATIVE EXPO TAIWAN',
    about: `品東風 | 華世代的世界品位 | 
    
2016 年臺灣文博會以「品東風」的全球在地化風向，詮釋華人優質生活新引力，無縫接軌工「藝」與「文」創的文藝復興運動，我們看見美好的時代就是現在，從小確幸躍升大確信的經典盛世，華人成為世界的出發中心，積極掌握優勢話語權，為雲行雨施品物流形的華風風華，心任天造出獨一無二的世界臺灣。`,
    descriptions: [
      'Client – 台灣創意中心 Taiwan Design Center', 
      'Design Agency – 自由落體設計 FREEIMAGE design', 
      'Photographer - 鄭鼎 Cheng Ting', 
      'Responsibility- LOGO / Branding / Event KEY VISION Design / APP graphic'
    ],
    name: '2016文博會',
    projectDetails: [
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Poster',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Bag',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Exhibition Entrance',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Invitation',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Invitation',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Bottle Label',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Airport Advertisement',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – APP',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Gala Dinner',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Gala Dinner',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Gala Dinner Menu',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Gala Dinner Menu',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Taiwan Pavilion Key Vision',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Taiwan Pavilion',
      '2016 CREATIVE EXPO TAIWAN | 臺灣文博會 – Taiwan Pavilion',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
      Categories.Exhibition
    ]
  },
  {
    chineseName: 'MATA家屋 － 臺東縣原住民文化會館',
    englishName: 'Taiwan Indigenous Cultural Resort',
    about: `「MATA」為南島民族語中「眼睛、看見」之意。會館以原住民為主題訴求，藉由會館空間之展示、旅遊活動之推廣，看見臺灣東部原住民族的生活、美學文化；並與每年在此舉辦之南島文化節相結合，訴求台灣與南島民族之連結。`,
    descriptions: [
      'Client - 臺東縣原住民文化會館Taiwan Indigenous Cultural Resort',
      'Design Agency - 自由落體設計FREEIMAGE design',
      'Photographer - 鄭鼎Cheng Dean',
      'Responsibility - 品牌設計Branding / 指標系統 Signage Design'
    ],
    name: 'MATA',
    projectDetails: [
      'MATA - Logo Design',
      'MATA - Signage Design',
      'MATA - Brochure',
      'MATA - Brochure',
      'MATA - Brochure',
      'MATA - Sign',
      'MATA - Logo Design',
      'MATA - Taiwan Indigenous Cultural Resort',
      'MATA - Taiwan Indigenous Cultural Resort',
      'MATA - Taiwan Indigenous Cultural Resort',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
    ]
  },
  {
    chineseName: '台灣美食展-小吃大器｜惜物時代',
    englishName: 'Taiwan Culinary Exhibition',
    about: `| 小吃大器 | 
交通部觀光局舉辦「小吃大器美食器皿設計徵件比賽」，為提升臺灣特色小吃的魅力，選出10項臺灣特色小吃：蚵仔煎、炒米粉、臭豆腐、大腸麵線、刈包、雞肉飯、四神湯、珍珠奶茶、燒仙草、黑白切，邀請大專校院產品設計相關科系師生參加競賽，為其量身訂做合適的內用裝盛器皿，以提升旅客對臺灣特色小吃新印象，增添旅遊臺灣之樂趣。本設計競賽產生之優勝作品，於臺北世貿一館舉辦之臺灣美食展「食之器-小吃大器」展館中展出。 
     
| 惜物時代 | 
文明進化，不代表我們要丟棄舊的東西，愈是先進，對美的堅持和惜物的態度更不能變。邀您重回那個惜物愛物的年代，欣賞全台難得一見，逐漸消失的補碗技藝。`,
    descriptions: [
      'Client – 財團法人台灣觀光協會 Taiwan Visitors Association', 
      'Design Agency – 自由落體設計 FREEIMAGE design', 
      'Photographer - 鄭鼎 Cheng Ting', 
      'Responsibility- Typography'
    ],
    name: '美食展',
    projectDetails: [
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - Logo Design',
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - 2015 Taiwan Culinary Exhibition',
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - 2016 Taiwan Culinary Exhibition',
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - 2016 Taiwan Culinary Exhibition',
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - 2017 Taiwan Culinary Exhibition',
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - 2017 Taiwan Culinary Exhibition',
      'Stylish Small Eats Utensils 台灣美食展 - 小吃大器｜惜物時代 - 2017 Taiwan Culinary Exhibition',
      'The Era to Cherish 台灣美食展 - 小吃大器｜惜物時代 - Logo Design',
      'The Era to Cherish 台灣美食展 - 小吃大器｜惜物時代 - 2015 Taiwan Culinary Exhibition',
      'The Era to Cherish 台灣美食展 - 小吃大器｜惜物時代 - 2015 Taiwan Culinary Exhibition',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Exhibition
    ]
  },
  {
    chineseName: '臺華窯35週年 Logo',
    englishName: 'Tai-Hwa Pottery 35th Anniversary Logo',
    about: `瓷器，千年不墜的工藝與智慧，是科學、工藝、藝術、生活的綜合表現，不僅是時代科技與人文精神的象徵，更是最貼近生活、滋養生命的美好。臺華窯邁入35週年，精湛工藝與瓷器優雅線條使臺華窯盛名不脛而走，期盼代代薪傳的工藝得以再淬煉、綿延，在臺灣這塊土地上薈萃出當代瓷器的風華。`,
    descriptions: [
      'Client - 臺華窯 Tai-Hwa Pottery',
      'Design Agency – 自由落體設計 FREEIMAGE design',
      'Responsibility- Logo Design'
    ],
    name: '臺華窯35週年',
    projectDetails: [
      '臺華窯35週年 Tai-Hwa Pottery 35th Anniversary Logo Design',
      '臺華窯35週年 Tai-Hwa Pottery 35th Anniversary Logo -Inspiration',
      '臺華窯35週年 Tai-Hwa Pottery 35th Anniversary Logo –Packaging',
      '臺華窯35週年 Tai-Hwa Pottery 35th Anniversary Logo – Umbrella',
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
    about: `由國立臺灣藝術大學發起進而串連大臺北地區相關藝文單位的國際級大型展演活動，涵蓋視覺藝術與表演藝術，另有音樂表演、專題講座、工作坊、大型展覽及法國電影展覽。`,
    descriptions: [
      'Client - 國立臺灣藝術大學 National Taiwan University of Arts', 
      'Design Agency – 自由落體設計 FREEIMAGE design'
    ],
    name: '大台北藝術節',
    projectDetails: [
      '大台北藝術節 - Logo Design',
      '大台北藝術節 - Event Program',
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
    about: `2014年華航啟動「NexGen」新世代計畫，延攬國際級設計團隊，由首席設計師陳瑞憲領軍規劃，從新飛機的客艙內裝、經典餐具、機上旅行用品到制服，推行一系列創新服務，強化品牌形象。 

客艙美學的應用及呈現，可以看到突破以往、選用了最能體現全新華航的元素，試圖在古典美學與現代科技上取得完美比例平衡、傳遞一致性的設計氛圍與NexGen品牌精神，充分演譯「文創、科技、環保」意象，期盼讓每一位乘客透過客艙空間、新的服務流程同時體驗到感動和信賴的傳承。`,
    descriptions: [
      'Client – 中華航空 China Airlines',
      'Design Agency – 自由落體設計 FREEIMAGE design',
      'GUI Index graphic – 鄭鼎 Zheng Dean', 
      'Responsibility- GUI icon revised design / Wi-Fi onboard icon design ',
    ],
    name: '華航新世代客艙計畫',
    projectDetails: [
      'China Airlines NexGen program | 華航新世代客艙計畫 – GUI index',
      'China Airlines NexGen program | 華航新世代客艙計畫 – icon revised suggestion',
      'China Airlines NexGen program | 華航新世代客艙計畫 – icon revised suggestion',
      'China Airlines NexGen program | 華航新世代客艙計畫 – icon revised suggestion',
      'China Airlines NexGen program | 華航新世代客艙計畫 – cabin simulation',
      'China Airlines NexGen program | 華航新世代客艙計畫 – cabin simulation',
      'China Airlines NexGen program | 華航新世代客艙計畫 – cabin actual circumstances',
      'China Airlines NexGen program | 華航新世代客艙計畫 – cabin actual circumstances',
      'China Airlines NexGen program | 華航新世代客艙計畫 – Wi-Fi onboard icon',
      'China Airlines NexGen program | 華航新世代客艙計畫 – Aircraft door',
      'China Airlines NexGen program | 華航新世代客艙計畫 – Wi-Fi setting instruction',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
    ]
  },
  {
    chineseName: 'WRENCHit多功能扳手組',
    englishName: 'WRENCHit',
    about: `WRENCHit 身為多功能板手，適合各種腳踏車上的六角形螺絲，扁平的設計方便放入各種款式包包的內袋中，類似鐵尺的長度在使用時也能輕鬆的轉動把手將螺絲拴緊；WRENCHit 共可以一次放入 5 種大小的工具，不管面對什麼螺帽、什麼情境都能從容應對。`,
    descriptions: [
      'Client - mininch',
      'Photographer – 周庫盟 Ku Chou', 
      'Responsibility- LOGO / Kickstarter Campaign Page / Packaging Design',
    ],
    name: 'wrenchit',
    link: 'https://www.kickstarter.com/projects/2054052511/wrenchit-turning-smart',
    projectDetails: [
      'WRENCHit 多功能扳手組 – LOGO',
      'WRENCHit 多功能扳手組 – Kickstarter Compaign Page',
      'WRENCHit 多功能扳手組 – Assembly Picture',
      'WRENCHit 多功能扳手組 – Details',
      'WRENCHit 多功能扳手組 – Details',
      'WRENCHit 多功能扳手組 – Details',
      'WRENCHit 多功能扳手組 – Packaging Design (via Tecsetter‏)',
      'WRENCHit 多功能扳手組 – Packaging Design',
      'WRENCHit 多功能扳手組 – User Instructions',
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
      Categories.Package
    ]
  },
  {
    chineseName: '部落行銷',
    englishName: 'Taiwan Indigenous Culture & Creative Center',
    about: `每一個民族都選擇了一套文化特徵和價值觀，為自己的生活創造了社會組織、藝術和宗教…。「部落行銷」是一個媒介「部落生活」的品牌。我們嘗試跨出一小步，離開現狀一點點 ，希望和你一起，溫柔地改變這個世界。`,
    descriptions: [
      'Client – 部落行銷 Taiwan Indigenous Culture & Creative Center',
      'Design Agency – 自由落體設計 FREEIMAGE design', 
      'Calligrapher – 董陽孜 Tong Yang-tze', 
      'Photographer - 鄭鼎 Cheng Ting', 
      'Responsibility- LOGO/ Packaging Design'
    ],
    name: '部落行銷',
    projectDetails: [
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Logo Design',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 – Business Card', 
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 – Concert Program',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Invitation',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Invitation',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 – Sign',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 – Music Concert',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Music Concert',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Sign',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 – Gift Box Packaging Design',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Gift Box Packaging Design',
      'Taiwan Indigenous Culture & Creative Center | 部落行銷 - Gift Box Packaging Design'
    ],
    categories: [
      Categories.Identity,
      Categories.Graphic,
      Categories.Editorial,
      Categories.Package
    ]
  }
];
