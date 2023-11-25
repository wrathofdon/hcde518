import { IOrganization, generateRandomDistance, generateRandomGroup } from "../Types/Types"


export const neighborhoodsNeutral: IOrganization[] = [
    {
      name: "Springfield Condo Associations",
      description: "For the people who live in the condos",
      admins: generateRandomGroup(3),
      distanceMiles: generateRandomDistance(1),
      members: 54,
    },
    {
      name: "Downtown Springfield",
      description: "For people who live downtown",
      admins: generateRandomGroup(3),
      distanceMiles: generateRandomDistance(2),
      members: 487,
    },
    {
      name: "Springfield on Main Stret",
      description: "For people who live on Main Street",
      admins: generateRandomGroup(3),
      distanceMiles: generateRandomDistance(2),
      members: 190,
    },
]



export enum neighborhoodsEnum {
    Condo = "Springfield Condo Associations",
    Downtown = "Downtown Springfield",
    Main = "Springfield on Main Stret",
    BLM = "Springfield BLM",
    LGTBQ = "Springfield LGTBQ Friendly",
    Gated = "Gated Acres in Springfield",
    MAGA = "Make Springfield Great Again",
    Elementary = "Springfield Elementary",
    MiddleSchool = "Springfield Middle School",
    HighScool = "Springfield HS",
    College = "Springfield Community College",
}

export enum nonprofitsEnum {
    Tool = "Springfield Tool Library",
    STEM = "STEM Classes for kids",
    Fridge = "Springfield Community Fridge",
    Mens = "Springfield Mens' Shelter",
    Womens = "Springfield Womens' Shelter",
    Rehab = "Springfield Rehab Center",
    Soup = "Springfield Soup Kitchen",
    NRA = "Springfield NRA Chapter",
    Church = "Springfield Evangelicals",
}


export enum clubsEnum {
    BookClub = "Social Justice Book Club",
    Anime = "Anime fans",
    Board = "Board game fans",
    Taylor = "Taylor Swift fans",
    Movies = "Film geeks",
    Potluck = "Potluckers",
    RPGs = "TTRPG",
    Crypto = "Crypto bros",
    MLMs = "Multi-Level Marketing",
    BookBurners = "Burning books for fun",
}


export const neighborhoodsLeft: IOrganization[] = [
    {
        name: "Springfield BLM",
        description: "For people who think black lives matters",
        admins: generateRandomGroup(4),
        distanceMiles: 5.2,
        members: 1783,
      },
      {
        name: "Springfield LGTBQ Friendly",
        description: "For people who support the LGTBQ community",
        admins: generateRandomGroup(3,1),
        distanceMiles: 3.2,
        members: 1242,
      },
]

export const neighborhoodsRight: IOrganization[] = [
    {
        name: "MAGA Springfield",
        description: "For people who think black lives matters",
        admins: generateRandomGroup(0, 2),
        distanceMiles: 5.2,
        members: 148,
      },
      {
        name: "Springfield Gated Community",
        description: "For people who live behind the gate",
        admins: generateRandomGroup(0, 1),
        distanceMiles: generateRandomDistance(2),
        members: 98,
      },
]

export const nonProfitsNeutral: IOrganization[] = [
    {
        name: "Springfield Elementary",
        description: "Teaching our kids",
        admins: generateRandomGroup(3),
        distanceMiles: generateRandomDistance(2),
        members: 210,
      },
      {
          name: "Springfield Community College",
          description: "Teaching adults",
          admins: generateRandomGroup(3),
          distanceMiles: generateRandomDistance(2),
          members: 210,
        },
      {
          name: "Springfield Tool Library",
          description: "Giving out tools",
          admins: generateRandomGroup(3),
          distanceMiles: 1.2,
          members: 649,
        },
      {
        name: "STEM Courses for Children",
        description: "Training kids in STEM",
        admins: generateRandomGroup(0, 1),
        distanceMiles: generateRandomDistance(2),
        members: 31,
      },
      {
        name: "Springfield Communal Fridge",
        description: "For dropoffs",
        admins: generateRandomGroup(0, 1),
        distanceMiles: generateRandomDistance(2),
        members: 53,
      },
      {
        name: "Mens shelter",
        description: "For dropoffs",
        admins: generateRandomGroup(3,2),
        distanceMiles: generateRandomDistance(2),
        members: 98,
      },
      {
        name: "Womens Shelter",
        description: "Helping women and and Children",
        admins: generateRandomGroup(4, 1),
        distanceMiles: generateRandomDistance(2),
        members: 177,
      },
      {
        name: "Addiction support",
        description: "Helping out addicts",
        admins: generateRandomGroup(0, 1),
        distanceMiles: generateRandomDistance(2),
        members: 154,
      },
]

export const nonProfitsRight: IOrganization[] = [
      {
        name: "Springfield Church of Elder Patriarchy",
        description: "We preach what we preach",
        admins: generateRandomGroup(2, 3),
        distanceMiles: 3.5,
        members: 30,
      },
      {
        name: "Springfield NRA",
        description: "Pew pew pew pew",
        admins: generateRandomGroup(0, 1),
        distanceMiles: 4.1,
        members: 53,
      },
]


export const clubsNeutral: IOrganization[] = [
    {
        name: "Book Club",
        description: "We love books",
        admins: generateRandomGroup(3),
        distanceMiles: generateRandomDistance(2),
        members: 649,
      },
      {
        name: "Anime fans",
        description: "Where everybody knows your name",
        admins: generateRandomGroup(0, 1),
        distanceMiles: generateRandomDistance(2),
        members: 31,
      },
      {
        name: "Board game group",
        description: "Let's get together for game night",
        admins: generateRandomGroup(0, 1),
        distanceMiles: generateRandomDistance(2),
        members: 53,
      },
      {
        name: "RPG players",
        description: "For dropoffs",
        admins: generateRandomGroup(3,2),
        distanceMiles: generateRandomDistance(2),
        members: 98,
      },
      {
        name: "Potluckers",
        description: "We love to cook",
        admins: generateRandomGroup(4, 1),
        distanceMiles: generateRandomDistance(2),
        members: 177,
      },
]

export const clubsRight: IOrganization[] = [
      {
        name: "Crypto Bros",
        description: "We're all gonna make it!",
        admins: generateRandomGroup(2, 3),
        distanceMiles: generateRandomDistance(5),
        members: 30,
      },
      {
        name: "Book burning club",
        description: "Books are bad.",
        admins: generateRandomGroup(0, 1),
        distanceMiles: 4.1,
        members: 451,
      },
      {
        name: "Truthers",
        description: "Things they don't want you to know",
        admins: generateRandomGroup(0, 1),
        distanceMiles: 4.1,
        members: 451,
      },
]

