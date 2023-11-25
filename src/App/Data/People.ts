import { IPersonAbridged, IPersonWithRequest, ITransportation as MobilityEnum } from "../Types/Types";
import { neighborhoodsEnum, clubsEnum, nonprofitsEnum } from "./Organizations";
import Student01 from "../../images/people/Student01.png"
import { avatarArrayFemale, avatarArrayMale, avatarPhotoMap } from "./AvatarPhotos";

export const namesArrayFemale: string[] = [
  "Velma Harrington",
  "Marsha Church",
  "Jodi Byers",
  "Brandi Walter",
  "Sonja Cherry",
  "Liz Gibbons",
  "Jamie Stone",
  "Sabrina O'Connell",
  "Stacie Gilbert",
  "Janette Hawley",
  "Rochelle Williams",
  "Emma Humphrey",
  "Traci Welsh",
  "Peggy York",
  "Valerie Connor",
  "Kelly Allen",
  "Jocelyn English",
  "Florence Schneider",
  "Abby Duffy",
  "Kerry Herman",
  "Celia Brown",
  "Jillian Pugh",
  "Karen Stokes",
  "Violet Hale",
  "Therese Boyer",
  "Candy Cornell",
  "Pat Pike",
  "Dorothy Flynn",
  "Sherri Ortega",
  "Joanne Cantu",
  "Brenda Conway",
  "Stacy Weston",
  "Erika Combs",
  "Vicki Huff",
  "Catherine Blanchard",
  "Marisa Lim",
  "Janice Cowan",
  "Mona McGuire",
  "Emily Harvey",
  "Flora Baldwin",
  "Myrna Lee",
  "Gwendolyn Walter",
  "Claudia Rollins",
  "Marie Dudley",
  "Phyllis Byrd",
  "Bernice Coleman",
  "Ann McPherson",
  "Deanna Spaulding",
  "Marion Emery",
  "Lucille Wallace",
  "Jeannette Sanderson",
  "Luz Hart",
  "Jacqueline Henderson",
  "Janice More",
  "Joanna Conrad",
  "Charlotte Hodges",
  "Sherri Glover",
  "Roberta Atwood",
  "Alexis Lewis",
  "Shannon Barton",
  "Graciela Wells",
  "Latoya Knox",
  "Lynda Armstrong",
  "Sandi Jones",
  "Kristina Potts",
  "Joann Tran",
  "Judy Giles",
  "Jodi Newman",
  "Aida Kerr",
  "Faye Blevins",
  "Minnie Burns",
  "Harriet Moreno",
  "Erica Stewart",
  "Maureen Bowers",
  "Laverne Donovan",
  "Annette Nicholson",
  "Bertha Quinn",
  "Flora Leblanc",
  "Doris Daniels",
  "Brooke McPherson",
  "Beatriz Hurley",
  "Beth Reeves",
  "Eva House",
  "Jeanne Hubbard",
  "Camille McKenna",
  "Susie Becker",
  "Dianna Mathews",
  "Marie Rowland",
  "Jen Dalton",
  "Rhonda Roach",
  "Lisa Hughes",
  "Lynette Patel",
  "Shari Sherman",
  "Tracy Shields",
  "Laura Copeland",
  "Adrienne Morton",
  "Susan Lamb",
  "Cherie Buckley",
  "Tracie Gardner",
  "Elsa Wiley",
];

export const namesArrayMale: string[] = [
  "Darren Christian",
  "Bruce Gallegos",
  "Rafael Obrien",
  "Brendan Hartman",
  "Lucas Richardson",
  "Dominic Rogers",
  "Trevor Mack",
  "Jeffrey Daniel",
  "Billy Haskins",
  "Matthew McPherson",
  "Jimmy Ackerman",
  "Walter Grace",
  "Santos Norris",
  "Jim Simms",
  "John French",
  "Jessie Joyce",
  "Allen Mathews",
  "Glenn Goff",
  "Bob Donovan",
  "Tom Mathews",
  "Nicolas Tucker",
  "Willie Stewart",
  "Harvey O'Conner",
  "Elias Koch",
  "David Hendricks",
  "Fernando Hays",
  "Vernon Neff",
  "Alexander Fry",
  "Malcolm Tracy",
  "Marvin Hilton",
  "Phillip Johnson",
  "Neal Young",
  "Antonio Fox",
  "Curt Steele",
  "Mathew Bruce",
  "Guy Gross",
  "Lon Mansfield",
  "Erick Bean",
  "Andres McClain",
  "Josh Flynn",
  "Lonnie Preston",
  "Jerry Abbott",
  "Rolando John",
  "Oscar Holloway",
  "Franklin Barker",
  "Carlos Dailey",
  "Douglas Hawkins",
  "Mitchell Trevino",
  "Lawrence Barry",
  "Nathan Michael",
];


const femaleFriends: IPersonAbridged[] = (() => {
  let output: IPersonAbridged[] = [];
  for (let i = 0; i < 25; i++) {
    output.push({
      name: namesArrayFemale[i],
      photo: avatarArrayFemale[i],
    });
  }
  for (let i = 25; i < 35; i++) {
    output.push({
      name: namesArrayFemale[i],
      photo: `Hidden.png`,
    });
  }
  return output;
})();

const maleFriends: IPersonAbridged[] = (() => {
  let output: IPersonAbridged[] = [];
  for (let i = 0; i < 15; i++) {
    output.push({
      name: namesArrayMale[i],
      photo: avatarArrayMale[i],
    });
  }
  for (let i = 15; i < 25; i++) {
    output.push({
      name: namesArrayMale[i],
      photo: `./images/people/Hidden.png`,
    });
  }
  return output;
})();

// export interface IPerson {
//     name: string;
//     description: string;
//     photo: ProfilePicture;
//     neighborhoods: INeighborhood[];
//     daysOnPlatform: number;
//     isIdVerified: boolean;
//     mutualFriends: number[];
//     verifiedContacts: number;
//     verifiedFriends: number;
//     verifiedNeighbors: number;
//     itemsOffered: number;
//     itemsGiven: number;
//     itemsLended: number;
//     itemsReceived: number;
//     itemsBorrowed: number;
//     itemsReturned: number;
//     recentComplaints?: string[];
// }


// export const avatarPhotoMap: Record<string, string> = {
//     Hidden: Hidden,
//     Student01: Student01,
//     NeutralWoman01: NeutralWoman01,
//     FakeWoman01: FakeWoman01,
//     ConservativeWoman01: ConservativeWoman01,
//     ConservativeMan01: ConservativeMan01,
//     ConservativeMan02: ConservativeMan02,   
// }

export const PeopleWithHistories: Record<string, IPersonWithRequest> = {
  ConservativeMale: {
    name: namesArrayMale[26],
    photo: avatarPhotoMap.ConservativeMan01,
    description: "I support traditional values and keeping out THOSE people",
    requestText: "This would look great next to my gun collection.  Pew pew pew.",
    mobility: MobilityEnum.mobileWithCar,
    availability: "Can pick up after work",
    neighborhoods: [
      neighborhoodsEnum.MAGA,
      neighborhoodsEnum.Gated,
      neighborhoodsEnum.HighScool,
    ],
    clubs: [clubsEnum.BookBurners],
    daysOnPlatform: 256,
    isIdVerified: true,
    isPremium: false,
    donations: 513,
    volunteerHours: 30,
    nonprofits: [nonprofitsEnum.Church, nonprofitsEnum.NRA],
    verifiedContacts: 43,
    verifiedFriends: [
      {
        person: maleFriends[11],
        vouch: "He's willing to say what the rest of us are thinking",
      },
      { person: maleFriends[12], vouch: "We've been friends since college" },
      { person: femaleFriends[20], vouch: "Very preachy, but in a good way" },
    ],
    verifiedNeighbors: [
      {
        person: maleFriends[11],
        vouch:
          "I have faith in his ability to maintain property values, unlike those other people",
      },
    ],
    itemsOffered: 5,
    itemsGiven: 3,
    itemsAvailableForLending: 10,
    itemsLended: 4,
    itemsRequested: 0,
    itemsReceived: 2,
    itemsBorrowed: 0,
    itemsReturned: 0,
  },
  CryptoBro: {
    name: namesArrayMale[27],
    photo: avatarPhotoMap.ConservativeMan02,
    description: "Super excited about NFTs",
    requestText: "I think this would make an awesome NFT, bro.",
    mobility: MobilityEnum.mobileWithCar,
    availability: "My investments have given me a lot of flexbility",
    neighborhoods: [neighborhoodsEnum.Gated],
    clubs: [clubsEnum.Crypto, clubsEnum.Anime, clubsEnum.MLMs],
    daysOnPlatform: 256,
    isIdVerified: true,
    isPremium: true,
    donations: 513,
    volunteerHours: 30,
    nonprofits: [nonprofitsEnum.STEM, nonprofitsEnum.NRA],
    verifiedContacts: 43,
    verifiedFriends: [
      {
        person: maleFriends[141],
        vouch: "He loves to teach people about the evils of fiat currency",
      },
      { person: maleFriends[12], vouch: "We worked at a startup together" },
    ],
    verifiedNeighbors: [
      {
        person: maleFriends[13],
        vouch: "He owns a really nice house with a really nice car",
      },
    ],
    itemsOffered: 0,
    itemsGiven: 0,
    itemsAvailableForLending: 0,
    itemsLended: 0,
    itemsRequested: 1,
    itemsReceived: 0,
    itemsBorrowed: 0,
    itemsReturned: 0,
  },
  Karen: {
    name: namesArrayFemale[35],
    photo: avatarPhotoMap.ConservativeWoman01,
    description: "I believe that the best vaccine is prayer",
    requestText: "My church would really appreciate this offering.",
    mobility: MobilityEnum.none,
    availability: "I have a very busy schedule",
    neighborhoods: [
      neighborhoodsEnum.MAGA,
      neighborhoodsEnum.Downtown,
      neighborhoodsEnum.Condo,
      neighborhoodsEnum.Elementary,
      neighborhoodsEnum.MiddleSchool,
    ],
    clubs: [clubsEnum.MLMs, clubsEnum.BookBurners],
    daysOnPlatform: 410,
    isIdVerified: true,
    isPremium: false,
    donations: 0,
    volunteerHours: 50,
    nonprofits: [nonprofitsEnum.Church, nonprofitsEnum.Soup],
    verifiedContacts: 21,
    verifiedFriends: [
      { person: maleFriends[11], vouch: "She's doing the lord's work" },
      {
        person: maleFriends[12],
        vouch: "Our children go to the same Sunday school",
      },
    ],
    verifiedNeighbors: [
      {
        person: maleFriends[12],
        vouch: "Our children go to the same Sunday school",
      },
    ],
    itemsOffered: 0,
    itemsGiven: 0,
    itemsAvailableForLending: 10,
    itemsLended: 0,
    itemsRequested: 45,
    itemsReceived: 12,
    itemsBorrowed: 18,
    itemsReturned: 18,
    recentPunctualityComplaints: 3,
  },
  Fake: {
    name: namesArrayFemale[35],
    photo: avatarPhotoMap.FakeWoman01,
    description: "New to town, hoping to make friends",
    requestText: "I recently lost one just like this, would really appreciate a replacement",
    mobility: MobilityEnum.mobileWithCar,
    availability: "Very flexible",
    neighborhoods: [neighborhoodsEnum.Downtown],
    clubs: [clubsEnum.Anime, clubsEnum.Movies, clubsEnum.BookClub, clubsEnum.Taylor],
    daysOnPlatform: 410,
    isIdVerified: false,
    isPremium: false,
    donations: 0,
    volunteerHours: 0,
    nonprofits: [nonprofitsEnum.STEM, nonprofitsEnum.Soup, nonprofitsEnum.Womens],
    verifiedContacts: 21,
    verifiedFriends: [],
    verifiedNeighbors: [],
    itemsOffered: 0,
    itemsGiven: 0,
    itemsAvailableForLending: 0,
    itemsLended: 0,
    itemsRequested: 205,
    itemsReceived: 29,
    itemsBorrowed: 0,
    itemsReturned: 0,
    recentPunctualityComplaints: 12,
  },
  Student: {
    name: namesArrayFemale[36],
    photo: avatarPhotoMap.Student01,
    description: "College student on the path to financial indepence",
    requestText: "I could really use this for a class project, we just started learning about these items in English class.",
    mobility: MobilityEnum.limited,
    availability: "Would have to schedule after school",
    neighborhoods: [
      neighborhoodsEnum.College,
      neighborhoodsEnum.BLM,
      neighborhoodsEnum.LGTBQ,
    ],
    clubs: [
      clubsEnum.Anime,
      clubsEnum.Movies,
      clubsEnum.BookClub,
      clubsEnum.Movies,
    ],
    daysOnPlatform: 410,
    isIdVerified: true,
    isPremium: false,
    donations: 0,
    volunteerHours: 40,
    nonprofits: [nonprofitsEnum.Fridge, nonprofitsEnum.STEM, nonprofitsEnum.Tool],
    verifiedContacts: 21,
    verifiedFriends: [
      { person: femaleFriends[1], vouch: "She's my BFF from High School" },
      {
        person: femaleFriends[3],
        vouch: "One of the most responsible people I know",
      },
    ],
    verifiedNeighbors: [
      { person: femaleFriends[2], vouch: "She used to babysit out kids" },
    ],
    itemsOffered: 3,
    itemsGiven: 3,
    itemsAvailableForLending: 0,
    itemsLended: 0,
    itemsRequested: 20,
    itemsReceived: 5,
    itemsBorrowed: 6,
    itemsReturned: 6,

  },
};
