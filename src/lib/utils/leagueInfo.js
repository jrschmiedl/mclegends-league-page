/*   STEP 1   */
export const leagueID = "1099225647127318528"; // your league ID
export const leagueName = "MC Legends Dynasty"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Home Page for MC Legends Dynasty League</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
   {
    "managerID": "858784931093012480",
    "name": "Jacob Schmiedl",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Dallas, TX", // (optional)
    "bio": "Commish",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Gavin Schmiedl", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 3192, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "1002726514678444032", 
    "name": "Gavin Schmiedl",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Gainesville, FL", // (optional)
    "bio": "UF Student, brother of Jacob Schmiedl",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Jacob Schmiedl", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 8160, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "1048019137294868480",
    "name": "Srijit Mukherjee",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Columbia, SC", // (optional)
    "bio": "Brother of Srijan, Citadel grad, currently a gamecock, will finish in last place.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Jacob Schmiedl", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 5121, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "1002762616411947008",
    "name": "Owen McGrew",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "Brother of Grant McGrew, UNC alum.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Graham Schwartz", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4854, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "1104617862393618432",
    "name": "Brendan Tankelewicz",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Greenville, NC", // (optional)
    "bio": "Youngest Tankelewicz brother, future cop, ECU grad.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Srijit Mukherjee", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 1029, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 3, // 1 - 10
    "preferredContact": "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "1131661789323849728",
    "name": "Graham Schwartz",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Greenville, NC", // (optional)
    "bio": "Ex-UNC Lax God, current ECU med student.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Owen McGrew", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 96, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Email", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "860640436849606656",
    "name": "Ashton Oster",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "Eldest brother of a D1 Athlete, NCSU alum.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "The Rizzler", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 7066, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "646124535522979840",
    "name": "JJ Tolentino",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "DC", // (optional)
    "bio": "UNC Alum.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Ashton Oster", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 954, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "720882222277677056",
    "name": "Eric Miller",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "Another UNC Alum.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Pat Moore", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 333, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "734629501786513408",
    "name": "Rizzler",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "Riz",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Eric Miller", // Can be anything (usually your rival's name)
      link: 0, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 559, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "860639661461188608",
    "name": "Ethan Hughes",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": " ",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "det", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Ashton Oster", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 8289, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 5, // 1 - 10
    "preferredContact": "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "860640995069501440",
    "name": "Will Selph",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "I will finish in last place.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Ashton Oster", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 5695, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "860643318558728192",
    "name": "Kyle Bowers",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": " ",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "pit", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Ashton Oster", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 138, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "872365653481455616",
    "name": "Pat Moore",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A", // (optional)
    "bio": "N/A",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Eric Miller", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 2382, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "989548649640181760",
    "name": "Will Anderson",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "More UNC alums.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Nern", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 2382, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 10, // 1 - 10
    "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "999376920867397632",
    "name": "Penny",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "N/A", // (optional)
    "bio": "N/A",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Eric Miller", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 4985, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 1, // 1 - 10
    "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "managerID": "1095728774001332224",
    "name": "Andrew Ihle",
    "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Raleigh, NC", // (optional)
    "bio": "RM alum.",
    "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    "fantasyStart": null, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "ind", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Srijit Mukherjee", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    },
    "favoritePlayer": 12421, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": null,
    "tradingScale": 5, // 1 - 10
    "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
