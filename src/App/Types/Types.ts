import Student01 from "../../images/people/Student01.png"
import { avatarArrayFemale, avatarArrayMale } from "../Data/AvatarPhotos";

export interface IOrganization {
    name: string;
    description: string;
    admins: IPersonAbridged[];
    distanceMiles: number;
    members: number,
}

export interface IPersonAbridged {
    name: string;
    photo: string;
}

export interface IPersonDetailed extends IPersonAbridged {
    name: string;
    description: string;
    photo: string;
    neighborhoods: string[];
    nonprofits?: string[];
    clubs?: string[];
    daysOnPlatform: number;
    isIdVerified?: boolean;
    isPremium?: boolean;
    donations?: number;
    volunteerHours?: number;
    verifiedContacts: number;
    verifiedFriends: {person: IPersonAbridged, vouch: string }[];
    verifiedNeighbors: {person: IPersonAbridged, vouch: string }[];
    itemsOffered: number;
    itemsGiven: number;
    itemsAvailableForLending: number,
    itemsLended: number;
    itemsRequested: number;
    itemsReceived: number;
    itemsBorrowed: number;
    itemsReturned: number;
}


const namesArrayFemale: string[] = [
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
  
  const namesArrayMale: string[] = [
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
  

export function generateRandomFemale(): IPersonAbridged {
    const nameIndex = Math.floor(Math.random() * namesArrayFemale.length);
    const avatarIndex = Math.floor(Math.random() * avatarArrayFemale.length);
    return {
        name: namesArrayFemale[nameIndex],
        photo: avatarArrayFemale[avatarIndex],
    }
}


export function generateRandomMale(): IPersonAbridged {
    const avatarIndex = Math.floor(Math.random() * avatarArrayMale.length);
    return {
        name: namesArrayMale[Math.floor(Math.random() * namesArrayMale.length)],
        photo: avatarArrayMale[avatarIndex],
    }
}

export function generateRandomGroup(women: number = 0, men: number = 0): IPersonAbridged[] {
    console.log("test");
    let names: Set<string> = new Set([]);
    let photos: Set<string> = new Set([]);
    let output: IPersonAbridged[] = [];
    while (output.length < women) {
        let person = generateRandomFemale();
        if (names.has(person.name) || photos.has(person.photo)) continue;
        output.push(person);
    }
    while (output.length - women < men) {
        let person = generateRandomMale();
        if (names.has(person.name) || photos.has(person.photo)) continue;
        output.push(person);
    }
    output = output.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    return output;
}

export function generateRandomDistance(max: number) {
    max = Math.floor(max * 10);
    let random = Math.random() * (max * (max + 1));
    return Math.floor(Math.pow(random, .5)) / 10;
}