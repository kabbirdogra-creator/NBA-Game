const players = [
  {
    "name": "AJ Dybantsa",
    "number": "4",
    "college": "Brigham Young"
  },
  {
    "name": "AJ Green",
    "number": "20",
    "college": "Northern Iowa"
  },
  {
    "name": "AK Okereke",
    "number": "31",
    "college": "Vanderbilt"
  },
  {
    "name": "Aaron Gordon",
    "number": "32",
    "college": "Arizona"
  },
  {
    "name": "Aaron Nesmith",
    "number": "23",
    "college": "Vanderbilt"
  },
  {
    "name": "Aaron Wiggins",
    "number": "2",
    "college": "Maryland"
  },
  {
    "name": "Ace Bailey",
    "number": "19",
    "college": "Rutgers"
  },
  {
    "name": "Adam Flagler",
    "number": "14",
    "college": "Baylor"
  },
  {
    "name": "Aday Mara",
    "number": "15",
    "college": "Michigan"
  },
  {
    "name": "Adem Bona",
    "number": "30",
    "college": "UCLA"
  },
  {
    "name": "Adou Thiero",
    "number": "1",
    "college": "Arkansas"
  },
  {
    "name": "Ajay Mitchell",
    "number": "25",
    "college": "California-Santa Barbara"
  },
  {
    "name": "Al Horford",
    "number": "20",
    "college": "Florida"
  },
  {
    "name": "Alex Caruso",
    "number": "9",
    "college": "Texas A&M"
  },
  {
    "name": "Alex Karaban",
    "number": "33",
    "college": "UConn"
  },
  {
    "name": "Alex Morales",
    "number": "30",
    "college": "Wagner"
  },
  {
    "name": "Alex Sarr",
    "number": "20",
    "college": "Washington Wizards"
  },
  {
    "name": "Alijah Martin",
    "number": "55",
    "college": "Florida"
  },
  {
    "name": "Allen Graves",
    "number": "22",
    "college": "Santa Clara"
  },
  {
    "name": "Alperen Sengun",
    "number": "28",
    "college": "Besiktas"
  },
  {
    "name": "Alpha Diallo",
    "number": "11",
    "college": "Providence"
  },
  {
    "name": "Amari Williams",
    "number": "77",
    "college": "Kentucky"
  },
  {
    "name": "Andre Drummond",
    "number": "0",
    "college": "UConn"
  },
  {
    "name": "Andrew Holifield",
    "number": "nan",
    "college": "nan"
  },
  {
    "name": "Andrew Nembhard",
    "number": "2",
    "college": "Gonzaga"
  },
  {
    "name": "Andrew Wiggins",
    "number": "22",
    "college": "Kansas"
  },
  {
    "name": "Anfernee Simons",
    "number": "5",
    "college": "Edgewater HS (FL)"
  },
  {
    "name": "Anthony Black",
    "number": "0",
    "college": "Arkansas"
  },
  {
    "name": "Anthony Davis",
    "number": "23",
    "college": "Kentucky"
  },
  {
    "name": "Anthony Edwards",
    "number": "5",
    "college": "Georgia"
  },
  {
    "name": "Anthony Gill",
    "number": "16",
    "college": "Virginia"
  },
  {
    "name": "Anthony Pritchard",
    "number": "nan",
    "college": "Central Michigan"
  },
  {
    "name": "Antonio Reeves",
    "number": "12",
    "college": "Kentucky"
  },
  {
    "name": "Ariel Hukporti",
    "number": "55",
    "college": "Riesen Ludwigsburg"
  },
  {
    "name": "Arthur Kaluma",
    "number": "nan",
    "college": "Texas"
  },
  {
    "name": "Asa Newell",
    "number": "14",
    "college": "Georgia"
  },
  {
    "name": "Austin Reaves",
    "number": "15",
    "college": "Oklahoma"
  },
  {
    "name": "Ayo Dosunmu",
    "number": "13",
    "college": "Illinois"
  },
  {
    "name": "Baba Miller",
    "number": "18",
    "college": "Cincinnati"
  },
  {
    "name": "Bam Adebayo",
    "number": "13",
    "college": "Kentucky"
  },
  {
    "name": "Baylor Scheierman",
    "number": "55",
    "college": "Creighton"
  },
  {
    "name": "Ben Humrichous",
    "number": "12",
    "college": "Illinois"
  },
  {
    "name": "Ben Saraf",
    "number": "77",
    "college": "Ratiopharm Ulm"
  },
  {
    "name": "Ben Sheppard",
    "number": "26",
    "college": "Belmont"
  },
  {
    "name": "Ben Simmons",
    "number": "25",
    "college": "Louisiana State"
  },
  {
    "name": "Bennedict Mathurin",
    "number": "24",
    "college": "Arizona"
  },
  {
    "name": "Bennett Stirtz",
    "number": "14",
    "college": "Iowa"
  },
  {
    "name": "Bez Mbeng",
    "number": "19",
    "college": "Yale"
  },
  {
    "name": "Bilal Coulibaly",
    "number": "0",
    "college": "Metropolitans 92"
  },
  {
    "name": "Blake Hinson",
    "number": "2",
    "college": "Pittsburgh"
  },
  {
    "name": "Blake Wesley",
    "number": "1",
    "college": "Notre Dame"
  },
  {
    "name": "Bobby Portis Jr.",
    "number": "95",
    "college": "Arkansas"
  },
  {
    "name": "Bones Hyland",
    "number": "8",
    "college": "Virginia Commonwealth"
  },
  {
    "name": "Braden Smith",
    "number": "3",
    "college": "Purdue"
  },
  {
    "name": "Bradley Beal",
    "number": "3",
    "college": "Florida"
  },
  {
    "name": "Branden Carlson",
    "number": "10",
    "college": "Utah"
  },
  {
    "name": "Brandin Podziemski",
    "number": "2",
    "college": "Santa Clara"
  },
  {
    "name": "Brandon Boston",
    "number": "11",
    "college": "Kentucky"
  },
  {
    "name": "Brandon Ingram",
    "number": "7",
    "college": "Duke"
  },
  {
    "name": "Brandon Miller",
    "number": "24",
    "college": "Alabama"
  },
  {
    "name": "Brandon Williams",
    "number": "12",
    "college": "Arizona"
  },
  {
    "name": "Brayden Burries",
    "number": "0",
    "college": "Arizona"
  },
  {
    "name": "Brice Sensabaugh",
    "number": "28",
    "college": "Ohio State"
  },
  {
    "name": "Brice Williams",
    "number": "nan",
    "college": "Nebraska"
  },
  {
    "name": "Bronny James",
    "number": "9",
    "college": "Southern California"
  },
  {
    "name": "Brook Lopez",
    "number": "11",
    "college": "Stanford"
  },
  {
    "name": "Brooks Barnhizer",
    "number": "23",
    "college": "Northwestern"
  },
  {
    "name": "Bruce Brown",
    "number": "11",
    "college": "Miami (FL)"
  },
  {
    "name": "Bruce Thornton",
    "number": "2",
    "college": "Ohio State"
  },
  {
    "name": "Bryce Hopkins",
    "number": "13",
    "college": "St. John's"
  },
  {
    "name": "Bryce McGowens",
    "number": "11",
    "college": "Nebraska"
  },
  {
    "name": "Bub Carrington",
    "number": "7",
    "college": "Pittsburgh"
  },
  {
    "name": "Buddy Hield",
    "number": "8",
    "college": "Oklahoma"
  },
  {
    "name": "CJ Huntley",
    "number": "22",
    "college": "Appalachian State"
  },
  {
    "name": "CJ McCollum",
    "number": "3",
    "college": "Lehigh"
  },
  {
    "name": "Cade Cunningham",
    "number": "2",
    "college": "Oklahoma State"
  },
  {
    "name": "Caleb Houstan",
    "number": "33",
    "college": "Michigan"
  },
  {
    "name": "Caleb Love",
    "number": "2",
    "college": "Arizona"
  },
  {
    "name": "Caleb Martin",
    "number": "16",
    "college": "Nevada"
  },
  {
    "name": "Caleb Wilson",
    "number": "8",
    "college": "North Carolina"
  },
  {
    "name": "Cam Christie",
    "number": "24",
    "college": "Minnesota"
  },
  {
    "name": "Cam Spencer",
    "number": "24",
    "college": "UConn"
  },
  {
    "name": "Cam Whitmore",
    "number": "1",
    "college": "Villanova"
  },
  {
    "name": "Cameron Boozer",
    "number": "27",
    "college": "Duke"
  },
  {
    "name": "Cameron Carr",
    "number": "43",
    "college": "Baylor"
  },
  {
    "name": "Cameron Corhen",
    "number": "nan",
    "college": "Pittsburgh"
  },
  {
    "name": "Cameron Johnson",
    "number": "23",
    "college": "North Carolina"
  },
  {
    "name": "Caris LeVert",
    "number": "12",
    "college": "Michigan"
  },
  {
    "name": "Carson Cooper",
    "number": "nan",
    "college": "Michigan State"
  },
  {
    "name": "Carter Bryant",
    "number": "11",
    "college": "Arizona"
  },
  {
    "name": "Cason Wallace",
    "number": "22",
    "college": "Kentucky"
  },
  {
    "name": "Cedric Coward",
    "number": "23",
    "college": "Washington State"
  },
  {
    "name": "Chaney Johnson",
    "number": "31",
    "college": "Auburn"
  },
  {
    "name": "Charles Bassey",
    "number": "28",
    "college": "Western Kentucky"
  },
  {
    "name": "Chaz Lanier",
    "number": "8",
    "college": "Tennessee"
  },
  {
    "name": "Chet Holmgren",
    "number": "7",
    "college": "Gonzaga"
  },
  {
    "name": "Chris Cenac Jr.",
    "number": "12",
    "college": "Houston"
  },
  {
    "name": "Chris Livingston",
    "number": "8",
    "college": "Kentucky"
  },
  {
    "name": "Chris Mañon",
    "number": "30",
    "college": "Vanderbilt"
  },
  {
    "name": "Chris Youngblood",
    "number": "3",
    "college": "Alabama"
  },
  {
    "name": "Christian Anderson",
    "number": "5",
    "college": "Texas Tech"
  },
  {
    "name": "Christian Braun",
    "number": "0",
    "college": "Kansas"
  },
  {
    "name": "Christian Koloko",
    "number": "35",
    "college": "Arizona"
  },
  {
    "name": "Christoph Tilly",
    "number": "nan",
    "college": "Ohio State"
  },
  {
    "name": "Chucky Hepburn",
    "number": "24",
    "college": "Louisville"
  },
  {
    "name": "Clint Capela",
    "number": "30",
    "college": "Elan Chalon"
  },
  {
    "name": "Coby White",
    "number": "3",
    "college": "North Carolina"
  },
  {
    "name": "Cody Williams",
    "number": "9",
    "college": "Colorado"
  },
  {
    "name": "Cole Swider",
    "number": "13",
    "college": "Syracuse"
  },
  {
    "name": "Coleman Hawkins",
    "number": "nan",
    "college": "Kansas State"
  },
  {
    "name": "Colin Castleton",
    "number": "14",
    "college": "Florida"
  },
  {
    "name": "Collin Gillespie",
    "number": "12",
    "college": "Villanova"
  },
  {
    "name": "Collin Murray-Boyles",
    "number": "30",
    "college": "South Carolina"
  },
  {
    "name": "Collin Sexton",
    "number": "10",
    "college": "Alabama"
  },
  {
    "name": "Cooper Flagg",
    "number": "32",
    "college": "Duke"
  },
  {
    "name": "Corey Kispert",
    "number": "24",
    "college": "Gonzaga"
  },
  {
    "name": "Cormac Ryan",
    "number": "30",
    "college": "North Carolina"
  },
  {
    "name": "Craig Porter Jr.",
    "number": "9",
    "college": "Wichita State"
  },
  {
    "name": "Curtis Jones",
    "number": "1",
    "college": "Iowa State"
  },
  {
    "name": "DaRon Holmes II",
    "number": "14",
    "college": "Dayton"
  },
  {
    "name": "Daeqwon Plowden",
    "number": "29",
    "college": "Bowling Green"
  },
  {
    "name": "Dailyn Swain",
    "number": "5",
    "college": "Texas"
  },
  {
    "name": "Dain Dainja",
    "number": "42",
    "college": "Memphis"
  },
  {
    "name": "Dalen Terry",
    "number": "21",
    "college": "Arizona"
  },
  {
    "name": "Dalton Knecht",
    "number": "4",
    "college": "Tennessee"
  },
  {
    "name": "Damian Lillard",
    "number": "0",
    "college": "Weber State"
  },
  {
    "name": "Dane Goodwin",
    "number": "nan",
    "college": "Notre Dame"
  },
  {
    "name": "Daniel Gafford",
    "number": "21",
    "college": "Arkansas"
  },
  {
    "name": "Daniss Jenkins",
    "number": "24",
    "college": "St. John's"
  },
  {
    "name": "Danny Wolf",
    "number": "2",
    "college": "Michigan"
  },
  {
    "name": "Darius Acuff Jr.",
    "number": "5",
    "college": "Arkansas"
  },
  {
    "name": "Darius Garland",
    "number": "10",
    "college": "Vanderbilt"
  },
  {
    "name": "Darryn Peterson",
    "number": "22",
    "college": "Kansas"
  },
  {
    "name": "David Jones Garcia",
    "number": "25",
    "college": "Memphis"
  },
  {
    "name": "Davion Mitchell",
    "number": "2",
    "college": "Baylor"
  },
  {
    "name": "Day'Ron Sharpe",
    "number": "20",
    "college": "North Carolina"
  },
  {
    "name": "De'Aaron Fox",
    "number": "4",
    "college": "Kentucky"
  },
  {
    "name": "De'Andre Hunter",
    "number": "15",
    "college": "Virginia"
  },
  {
    "name": "De'Anthony Melton",
    "number": "8",
    "college": "Southern California"
  },
  {
    "name": "DeAndre Jordan",
    "number": "6",
    "college": "Texas A&M"
  },
  {
    "name": "DeMar DeRozan",
    "number": "10",
    "college": "Southern California"
  },
  {
    "name": "Dean Wade",
    "number": "45",
    "college": "Kansas State"
  },
  {
    "name": "Deandre Ayton",
    "number": "8",
    "college": "Arizona"
  },
  {
    "name": "Dejounte Murray",
    "number": "5",
    "college": "Washington"
  },
  {
    "name": "Dennis Schröder",
    "number": "17",
    "college": "Braunschweig"
  },
  {
    "name": "Dereck Lively II",
    "number": "2",
    "college": "Duke"
  },
  {
    "name": "Derik Queen",
    "number": "22",
    "college": "Maryland"
  },
  {
    "name": "Derrick Jones Jr.",
    "number": "5",
    "college": "UNLV"
  },
  {
    "name": "Derrick White",
    "number": "9",
    "college": "Colorado"
  },
  {
    "name": "Desmond Bane",
    "number": "3",
    "college": "TCU"
  },
  {
    "name": "Devin Booker",
    "number": "15",
    "college": "Kentucky"
  },
  {
    "name": "Devin Carter",
    "number": "22",
    "college": "Providence"
  },
  {
    "name": "Devin Vassell",
    "number": "24",
    "college": "Florida State"
  },
  {
    "name": "Dillon Brooks",
    "number": "3",
    "college": "Oregon"
  },
  {
    "name": "Dillon Mitchell",
    "number": "20",
    "college": "St. John's"
  },
  {
    "name": "Domantas Sabonis",
    "number": "11",
    "college": "Gonzaga"
  },
  {
    "name": "Donovan Clingan",
    "number": "23",
    "college": "UConn"
  },
  {
    "name": "Donovan Mitchell",
    "number": "45",
    "college": "Louisville"
  },
  {
    "name": "Donte DiVincenzo",
    "number": "0",
    "college": "Villanova"
  },
  {
    "name": "Dorian Finney-Smith",
    "number": "8",
    "college": "Florida"
  },
  {
    "name": "Drake Powell",
    "number": "4",
    "college": "North Carolina"
  },
  {
    "name": "Draymond Green",
    "number": "23",
    "college": "Michigan State"
  },
  {
    "name": "Drew Eubanks",
    "number": "17",
    "college": "Oregon State"
  },
  {
    "name": "Drew Peterson",
    "number": "9",
    "college": "Southern California"
  },
  {
    "name": "Drew Timme",
    "number": "17",
    "college": "Gonzaga"
  },
  {
    "name": "Dru Smith",
    "number": "12",
    "college": "Missouri"
  },
  {
    "name": "Duke Miles",
    "number": "nan",
    "college": "Vanderbilt"
  },
  {
    "name": "Duncan Robinson",
    "number": "55",
    "college": "Michigan"
  },
  {
    "name": "Duop Reath",
    "number": "26",
    "college": "Louisiana State"
  },
  {
    "name": "Dwight Powell",
    "number": "7",
    "college": "Stanford"
  },
  {
    "name": "Dylan Cardwell",
    "number": "32",
    "college": "Auburn"
  },
  {
    "name": "Dylan Harper",
    "number": "2",
    "college": "Rutgers"
  },
  {
    "name": "Ebuka Okorie",
    "number": "23",
    "college": "Stanford"
  },
  {
    "name": "Egor Dëmin",
    "number": "8",
    "college": "Brigham Young"
  },
  {
    "name": "Elfrid Payton",
    "number": "3",
    "college": "Louisana-Lafayette"
  },
  {
    "name": "Elijah Harkless",
    "number": "16",
    "college": "UNLV"
  },
  {
    "name": "Emanuel Miller",
    "number": "14",
    "college": "TCU"
  },
  {
    "name": "Emanuel Sharp",
    "number": "34",
    "college": "Houston"
  },
  {
    "name": "Enrique Freeman",
    "number": "25",
    "college": "Akron"
  },
  {
    "name": "Ernest Udeh, Jr.",
    "number": "88",
    "college": "Miami (FL)"
  },
  {
    "name": "Evan Mobley",
    "number": "4",
    "college": "Southern California"
  },
  {
    "name": "Felix Okpara",
    "number": "34",
    "college": "Tennessee"
  },
  {
    "name": "Franz Wagner",
    "number": "22",
    "college": "Michigan"
  },
  {
    "name": "Fred VanVleet",
    "number": "5",
    "college": "Wichita State"
  },
  {
    "name": "GG Jackson",
    "number": "45",
    "college": "South Carolina"
  },
  {
    "name": "Gabe McGlothan",
    "number": "41",
    "college": "Grand Canyon"
  },
  {
    "name": "Gary Payton II",
    "number": "0",
    "college": "Oregon State"
  },
  {
    "name": "Gary Trent Jr.",
    "number": "5",
    "college": "Duke"
  },
  {
    "name": "Georges Niang",
    "number": "32",
    "college": "Iowa State"
  },
  {
    "name": "Gradey Dick",
    "number": "9",
    "college": "Kansas"
  },
  {
    "name": "Graham Ike",
    "number": "45",
    "college": "Gonzaga"
  },
  {
    "name": "Grant Nelson",
    "number": "16",
    "college": "Alabama"
  },
  {
    "name": "Grant Williams",
    "number": "2",
    "college": "Tennessee"
  },
  {
    "name": "Grayson Allen",
    "number": "8",
    "college": "Duke"
  },
  {
    "name": "Gui Santos",
    "number": "15",
    "college": "Minas"
  },
  {
    "name": "Hannes Steinbach",
    "number": "22",
    "college": "Washington"
  },
  {
    "name": "Harrison Barnes",
    "number": "40",
    "college": "North Carolina"
  },
  {
    "name": "Harrison Ingram",
    "number": "55",
    "college": "North Carolina"
  },
  {
    "name": "Hayden Gray",
    "number": "nan",
    "college": "California-San Diego"
  },
  {
    "name": "Haywood Highsmith",
    "number": "7",
    "college": "Wheeling Jesuit"
  },
  {
    "name": "Henri Veesaar",
    "number": "13",
    "college": "North Carolina"
  },
  {
    "name": "Herbert Jones",
    "number": "2",
    "college": "Alabama"
  },
  {
    "name": "Ian Schieffelin",
    "number": "20",
    "college": "Clemson"
  },
  {
    "name": "Immanuel Quickley",
    "number": "5",
    "college": "Kentucky"
  },
  {
    "name": "Isaac Jones",
    "number": "3",
    "college": "Washington State"
  },
  {
    "name": "Isaac McKneely",
    "number": "nan",
    "college": "Louisville"
  },
  {
    "name": "Isaac Okoro",
    "number": "35",
    "college": "Auburn"
  },
  {
    "name": "Isaiah Collier",
    "number": "8",
    "college": "Southern California"
  },
  {
    "name": "Isaiah Crawford",
    "number": "27",
    "college": "Louisiana Tech"
  },
  {
    "name": "Isaiah Evans",
    "number": "33",
    "college": "Duke"
  },
  {
    "name": "Isaiah Hartenstein",
    "number": "55",
    "college": "Zalgiris"
  },
  {
    "name": "Isaiah Jackson",
    "number": "23",
    "college": "Kentucky"
  },
  {
    "name": "Isaiah Joe",
    "number": "17",
    "college": "Arkansas"
  },
  {
    "name": "Isaiah Stewart",
    "number": "28",
    "college": "Washington"
  },
  {
    "name": "Izaiyah Nelson",
    "number": "25",
    "college": "South Florida"
  },
  {
    "name": "J'Vonne Hadley",
    "number": "14",
    "college": "Louisville"
  },
  {
    "name": "JD Davison",
    "number": "4",
    "college": "Alabama"
  },
  {
    "name": "Ja Morant",
    "number": "1",
    "college": "Murray State"
  },
  {
    "name": "Ja'Kobe Walter",
    "number": "14",
    "college": "Baylor"
  },
  {
    "name": "Ja'Kobi Gillespie",
    "number": "17",
    "college": "Tennessee"
  },
  {
    "name": "Jabari Smith Jr.",
    "number": "10",
    "college": "Auburn"
  },
  {
    "name": "Jabari Walker",
    "number": "33",
    "college": "Colorado"
  },
  {
    "name": "Jaden Akins",
    "number": "nan",
    "college": "Michigan State"
  },
  {
    "name": "Jaden Bradley",
    "number": "8",
    "college": "Arizona"
  },
  {
    "name": "Jaden McDaniels",
    "number": "3",
    "college": "Washington"
  },
  {
    "name": "Jae'Sean Tate",
    "number": "8",
    "college": "Ohio State"
  },
  {
    "name": "Jahmai Mashack",
    "number": "nan",
    "college": "Tennessee"
  },
  {
    "name": "Jaime Jaquez Jr.",
    "number": "24",
    "college": "UCLA"
  },
  {
    "name": "Jake LaRavia",
    "number": "12",
    "college": "Wake Forest"
  },
  {
    "name": "Jake Stephens",
    "number": "88",
    "college": "Tennessee-Chattanooga"
  },
  {
    "name": "Jakob Poeltl",
    "number": "19",
    "college": "Utah"
  },
  {
    "name": "Jalen Bridges",
    "number": "15",
    "college": "Baylor"
  },
  {
    "name": "Jalen Brunson",
    "number": "11",
    "college": "Villanova"
  },
  {
    "name": "Jalen Duren",
    "number": "0",
    "college": "Memphis"
  },
  {
    "name": "Jalen Johnson",
    "number": "1",
    "college": "Duke"
  },
  {
    "name": "Jalen Pickett",
    "number": "24",
    "college": "Penn State"
  },
  {
    "name": "Jalen Slawson",
    "number": "18",
    "college": "Furman"
  },
  {
    "name": "Jalen Smith",
    "number": "25",
    "college": "Maryland"
  },
  {
    "name": "Jalen Suggs",
    "number": "4",
    "college": "Gonzaga"
  },
  {
    "name": "Jalen Williams",
    "number": "8",
    "college": "Santa Clara"
  },
  {
    "name": "Jalen Wilson",
    "number": "22",
    "college": "Kansas"
  },
  {
    "name": "Jamal Cain",
    "number": "8",
    "college": "Oakland"
  },
  {
    "name": "Jamal Murray",
    "number": "27",
    "college": "Kentucky"
  },
  {
    "name": "Jamal Shead",
    "number": "1",
    "college": "Houston"
  },
  {
    "name": "Jamaree Bouyea",
    "number": "17",
    "college": "San Francisco"
  },
  {
    "name": "Jameer Nelson Jr.",
    "number": "nan",
    "college": "TCU"
  },
  {
    "name": "James Harden",
    "number": "1",
    "college": "Arizona State"
  },
  {
    "name": "James Johnson",
    "number": "16",
    "college": "Wake Forest"
  },
  {
    "name": "James Wiseman",
    "number": "11",
    "college": "Memphis"
  },
  {
    "name": "Jamir Watkins",
    "number": "5",
    "college": "Florida State"
  },
  {
    "name": "Jamison Battle",
    "number": "77",
    "college": "Ohio State"
  },
  {
    "name": "Jarace Walker",
    "number": "5",
    "college": "Houston"
  },
  {
    "name": "Jared McCain",
    "number": "3",
    "college": "Duke"
  },
  {
    "name": "Jaren Jackson Jr.",
    "number": "20",
    "college": "Michigan State"
  },
  {
    "name": "Jarkel Joiner",
    "number": "nan",
    "college": "North Carolina State"
  },
  {
    "name": "Jaron Pierre Jr.",
    "number": "10",
    "college": "Southern Methodist"
  },
  {
    "name": "Jarred Vanderbilt",
    "number": "2",
    "college": "Kentucky"
  },
  {
    "name": "Jarrett Allen",
    "number": "31",
    "college": "Texas"
  },
  {
    "name": "Jase Richardson",
    "number": "11",
    "college": "Michigan State"
  },
  {
    "name": "Javon Small",
    "number": "10",
    "college": "West Virginia"
  },
  {
    "name": "Javonte Green",
    "number": "31",
    "college": "Radford"
  },
  {
    "name": "Jaxson Hayes",
    "number": "11",
    "college": "Texas"
  },
  {
    "name": "Jay Huff",
    "number": "32",
    "college": "Virginia"
  },
  {
    "name": "Jayden Quaintance",
    "number": "22",
    "college": "Kentucky"
  },
  {
    "name": "Jaylen Brown",
    "number": "7",
    "college": "California"
  },
  {
    "name": "Jaylen Clark",
    "number": "7",
    "college": "UCLA"
  },
  {
    "name": "Jaylen Wells",
    "number": "0",
    "college": "Washington State"
  },
  {
    "name": "Jaylin Sellers",
    "number": "nan",
    "college": "Providence"
  },
  {
    "name": "Jaylin Williams",
    "number": "6",
    "college": "Arkansas"
  },
  {
    "name": "Jaylon Tyson",
    "number": "20",
    "college": "California"
  },
  {
    "name": "Jayson Kent",
    "number": "nan",
    "college": "Texas"
  },
  {
    "name": "Jayson Tatum",
    "number": "0",
    "college": "Duke"
  },
  {
    "name": "Jerami Grant",
    "number": "3",
    "college": "Syracuse"
  },
  {
    "name": "Jeremiah Fears",
    "number": "0",
    "college": "Oklahoma"
  },
  {
    "name": "Jeremy Sochan",
    "number": "20",
    "college": "Baylor"
  },
  {
    "name": "Jericho Sims",
    "number": "00",
    "college": "Texas"
  },
  {
    "name": "Jett Howard",
    "number": "13",
    "college": "Michigan"
  },
  {
    "name": "Jevon Carter",
    "number": "2",
    "college": "West Virginia"
  },
  {
    "name": "Jimmy Butler III",
    "number": "10",
    "college": "Marquette"
  },
  {
    "name": "Jock Landale",
    "number": "31",
    "college": "St. Mary's"
  },
  {
    "name": "Joel Embiid",
    "number": "21",
    "college": "Kansas"
  },
  {
    "name": "John Collins",
    "number": "20",
    "college": "Wake Forest"
  },
  {
    "name": "John Poulakidas",
    "number": "1",
    "college": "Yale"
  },
  {
    "name": "John Tonje",
    "number": "8",
    "college": "Wisconsin"
  },
  {
    "name": "John Ukomadu",
    "number": "nan",
    "college": "Eastern Kentucky"
  },
  {
    "name": "Johni Broome",
    "number": "22",
    "college": "Auburn"
  },
  {
    "name": "Johnny Furphy",
    "number": "12",
    "college": "Kansas"
  },
  {
    "name": "Jon Elmore",
    "number": "nan",
    "college": "Marshall"
  },
  {
    "name": "Jonas Aidoo",
    "number": "nan",
    "college": "Arkansas"
  },
  {
    "name": "Jonathan Isaac",
    "number": "1",
    "college": "Florida State"
  },
  {
    "name": "Jonathan Mogbo",
    "number": "2",
    "college": "San Francisco"
  },
  {
    "name": "Jordan Clarkson",
    "number": "00",
    "college": "Missouri"
  },
  {
    "name": "Jordan Goodwin",
    "number": "23",
    "college": "St. Louis"
  },
  {
    "name": "Jordan Hawkins",
    "number": "15",
    "college": "UConn"
  },
  {
    "name": "Jordan McLaughlin",
    "number": "0",
    "college": "Southern California"
  },
  {
    "name": "Jordan Miller",
    "number": "22",
    "college": "Miami (FL)"
  },
  {
    "name": "Jordan Poole",
    "number": "3",
    "college": "Michigan"
  },
  {
    "name": "Jordan Walsh",
    "number": "27",
    "college": "Arkansas"
  },
  {
    "name": "Jose Alvarado",
    "number": "5",
    "college": "Georgia Tech"
  },
  {
    "name": "Josh Dix",
    "number": "nan",
    "college": "Creighton"
  },
  {
    "name": "Josh Giddey",
    "number": "3",
    "college": "NBA Global Academy"
  },
  {
    "name": "Josh Green",
    "number": "5",
    "college": "Arizona"
  },
  {
    "name": "Josh Hart",
    "number": "3",
    "college": "Villanova"
  },
  {
    "name": "Josh Minott",
    "number": "00",
    "college": "Memphis"
  },
  {
    "name": "Josh Okogie",
    "number": "21",
    "college": "Georgia Tech"
  },
  {
    "name": "Joshua Jefferson",
    "number": "9",
    "college": "Iowa State"
  },
  {
    "name": "Jrue Holiday",
    "number": "5",
    "college": "UCLA"
  },
  {
    "name": "Julian Champagnie",
    "number": "30",
    "college": "St. John's"
  },
  {
    "name": "Julian Phillips",
    "number": "4",
    "college": "Tennessee"
  },
  {
    "name": "Julian Reese",
    "number": "13",
    "college": "Maryland"
  },
  {
    "name": "Julian Strawther",
    "number": "1",
    "college": "Gonzaga"
  },
  {
    "name": "Julius Randle",
    "number": "30",
    "college": "Kentucky"
  },
  {
    "name": "Justin Champagnie",
    "number": "9",
    "college": "Pittsburgh"
  },
  {
    "name": "Justin Edwards",
    "number": "11",
    "college": "Kentucky"
  },
  {
    "name": "KJ Martin",
    "number": "99",
    "college": "IMG Academy (FL)"
  },
  {
    "name": "Kadary Richmond",
    "number": "nan",
    "college": "St. John's"
  },
  {
    "name": "Kam Jones",
    "number": "19",
    "college": "Marquette"
  },
  {
    "name": "Karim Lopez",
    "number": "35",
    "college": "nan"
  },
  {
    "name": "Karl-Anthony Towns",
    "number": "32",
    "college": "Kentucky"
  },
  {
    "name": "Kasparas Jakučionis",
    "number": "25",
    "college": "Illinois-Urbana-Champaign"
  },
  {
    "name": "Kawhi Leonard",
    "number": "2",
    "college": "San Diego State"
  },
  {
    "name": "Keaton Wagler",
    "number": "1",
    "college": "Illinois"
  },
  {
    "name": "Keba Keita",
    "number": "nan",
    "college": "Brigham Young"
  },
  {
    "name": "Keegan Murray",
    "number": "13",
    "college": "Iowa"
  },
  {
    "name": "Kel'el Ware",
    "number": "9",
    "college": "Indiana"
  },
  {
    "name": "Keldon Johnson",
    "number": "3",
    "college": "Kentucky"
  },
  {
    "name": "Kelly Oubre Jr.",
    "number": "10",
    "college": "Kansas"
  },
  {
    "name": "Kennedy Chandler",
    "number": "0",
    "college": "Tennessee"
  },
  {
    "name": "Kenrich Williams",
    "number": "34",
    "college": "TCU"
  },
  {
    "name": "Kentavious Caldwell-Pope",
    "number": "1",
    "college": "Georgia"
  },
  {
    "name": "Keon Ellis",
    "number": "1",
    "college": "Alabama"
  },
  {
    "name": "Keshad Johnson",
    "number": "16",
    "college": "Arizona"
  },
  {
    "name": "Keshon Gilbert",
    "number": "nan",
    "college": "Iowa State"
  },
  {
    "name": "Kevin Durant",
    "number": "7",
    "college": "Texas"
  },
  {
    "name": "Kevin Huerter",
    "number": "27",
    "college": "Maryland"
  },
  {
    "name": "Kevin Knox II",
    "number": "31",
    "college": "Kentucky"
  },
  {
    "name": "Kevin McCullar Jr.",
    "number": "9",
    "college": "Kansas"
  },
  {
    "name": "Kevin Porter Jr.",
    "number": "7",
    "college": "Southern California"
  },
  {
    "name": "Kevon Looney",
    "number": "55",
    "college": "UCLA"
  },
  {
    "name": "Keyonte George",
    "number": "3",
    "college": "Baylor"
  },
  {
    "name": "Khaman Maluach",
    "number": "10",
    "college": "Duke"
  },
  {
    "name": "Khris Middleton",
    "number": "22",
    "college": "Texas A&M"
  },
  {
    "name": "Kingston Flemings",
    "number": "4",
    "college": "Houston"
  },
  {
    "name": "Klay Thompson",
    "number": "11",
    "college": "Washington State"
  },
  {
    "name": "Koa Peat",
    "number": "18",
    "college": "Arizona"
  },
  {
    "name": "Kobe Brown",
    "number": "24",
    "college": "Missouri"
  },
  {
    "name": "Kobe Bufkin",
    "number": "4",
    "college": "Michigan"
  },
  {
    "name": "Kobe Johnson",
    "number": "nan",
    "college": "UCLA"
  },
  {
    "name": "Kobe Sanders",
    "number": "4",
    "college": "Nevada"
  },
  {
    "name": "Koby Brea",
    "number": "14",
    "college": "Kentucky"
  },
  {
    "name": "Kon Knueppel",
    "number": "7",
    "college": "Duke"
  },
  {
    "name": "Kris Dunn",
    "number": "8",
    "college": "Providence"
  },
  {
    "name": "Kris Murray",
    "number": "17",
    "college": "Iowa"
  },
  {
    "name": "Kristaps Porziņģis",
    "number": "7",
    "college": "Cajasol Sevilla"
  },
  {
    "name": "Kylan Boswell",
    "number": "nan",
    "college": "Illinois"
  },
  {
    "name": "Kyle Anderson",
    "number": "13",
    "college": "UCLA"
  },
  {
    "name": "Kyle Filipowski",
    "number": "2",
    "college": "Duke"
  },
  {
    "name": "Kyle Kuzma",
    "number": "18",
    "college": "Utah"
  },
  {
    "name": "Kyrie Irving",
    "number": "11",
    "college": "Duke"
  },
  {
    "name": "Kyshawn George",
    "number": "18",
    "college": "Miami (FL)"
  },
  {
    "name": "LJ Cryer",
    "number": "18",
    "college": "Houston"
  },
  {
    "name": "Labaron Philon",
    "number": "00",
    "college": "Alabama"
  },
  {
    "name": "Landry Shamet",
    "number": "44",
    "college": "Wichita State"
  },
  {
    "name": "Larry Nance Jr.",
    "number": "22",
    "college": "Wyoming"
  },
  {
    "name": "Lauri Markkanen",
    "number": "23",
    "college": "Arizona"
  },
  {
    "name": "LeBron James",
    "number": "23",
    "college": "St. Vincent-St. Mary HS (OH)"
  },
  {
    "name": "Leaky Black",
    "number": "19",
    "college": "North Carolina"
  },
  {
    "name": "Lester Quinones",
    "number": "24",
    "college": "Memphis"
  },
  {
    "name": "Liam McNeeley",
    "number": "33",
    "college": "UConn"
  },
  {
    "name": "Lonnie Walker IV",
    "number": "16",
    "college": "Miami (FL)"
  },
  {
    "name": "Luguentz Dort",
    "number": "0",
    "college": "Arizona State"
  },
  {
    "name": "Luka Garza",
    "number": "52",
    "college": "Iowa"
  },
  {
    "name": "Luke Kennard",
    "number": "8",
    "college": "Duke"
  },
  {
    "name": "Luke Kornet",
    "number": "7",
    "college": "Vanderbilt"
  },
  {
    "name": "Malachi Smith",
    "number": "18",
    "college": "Gonzaga"
  },
  {
    "name": "Malaki Branham",
    "number": "12",
    "college": "Ohio State"
  },
  {
    "name": "Malevy Leons",
    "number": "33",
    "college": "Bradley"
  },
  {
    "name": "Malik Dia",
    "number": "8",
    "college": "Mississippi"
  },
  {
    "name": "Malik Monk",
    "number": "0",
    "college": "Kentucky"
  },
  {
    "name": "Malik Williams",
    "number": "nan",
    "college": "Louisville"
  },
  {
    "name": "Maliq Brown",
    "number": "15",
    "college": "Duke"
  },
  {
    "name": "Marcus Sasser",
    "number": "8",
    "college": "Houston"
  },
  {
    "name": "Marcus Smart",
    "number": "36",
    "college": "Oklahoma State"
  },
  {
    "name": "Mark Williams",
    "number": "15",
    "college": "Duke"
  },
  {
    "name": "Marvin Bagley III",
    "number": "3",
    "college": "Duke"
  },
  {
    "name": "Matisse Thybulle",
    "number": "4",
    "college": "Washington"
  },
  {
    "name": "Max Christie",
    "number": "0",
    "college": "Michigan State"
  },
  {
    "name": "Max Strus",
    "number": "31",
    "college": "DePaul"
  },
  {
    "name": "Maxime Raynaud",
    "number": "42",
    "college": "Stanford"
  },
  {
    "name": "Meleek Thomas",
    "number": "15",
    "college": "Arkansas"
  },
  {
    "name": "Micah Peavy",
    "number": "7",
    "college": "Georgetown"
  },
  {
    "name": "Micah Potter",
    "number": "9",
    "college": "Wisconsin"
  },
  {
    "name": "Michael Ajayi",
    "number": "nan",
    "college": "Butler"
  },
  {
    "name": "Michael Porter Jr.",
    "number": "17",
    "college": "Missouri"
  },
  {
    "name": "Mikal Bridges",
    "number": "25",
    "college": "Villanova"
  },
  {
    "name": "Mike Conley",
    "number": "45",
    "college": "Ohio State"
  },
  {
    "name": "Mikel Brown Jr.",
    "number": "0",
    "college": "Louisville"
  },
  {
    "name": "Miles Bridges",
    "number": "22",
    "college": "Michigan State"
  },
  {
    "name": "Miles Kelly",
    "number": "26",
    "college": "Auburn"
  },
  {
    "name": "Miles McBride",
    "number": "2",
    "college": "West Virginia"
  },
  {
    "name": "Milos Uzan",
    "number": "nan",
    "college": "Houston"
  },
  {
    "name": "Mitchell Robinson",
    "number": "4",
    "college": "Western Kentucky"
  },
  {
    "name": "Mo Bamba",
    "number": "44",
    "college": "Texas"
  },
  {
    "name": "Morez Johnson Jr.",
    "number": "14",
    "college": "Michigan"
  },
  {
    "name": "Moritz Wagner",
    "number": "13",
    "college": "Michigan"
  },
  {
    "name": "Moses Moody",
    "number": "4",
    "college": "Arkansas"
  },
  {
    "name": "Mouhamed Gueye",
    "number": "18",
    "college": "Washington State"
  },
  {
    "name": "Moussa Cisse",
    "number": "30",
    "college": "Memphis"
  },
  {
    "name": "Moussa Diabaté",
    "number": "14",
    "college": "Michigan"
  },
  {
    "name": "Myles Turner",
    "number": "3",
    "college": "Texas"
  },
  {
    "name": "Myron Gardner",
    "number": "15",
    "college": "Arkansas-Little Rock"
  },
  {
    "name": "Nae'Qwan Tomlin",
    "number": "35",
    "college": "Memphis"
  },
  {
    "name": "Naji Marshall",
    "number": "3",
    "college": "Xavier"
  },
  {
    "name": "Nate Ament",
    "number": "15",
    "college": "Tennessee"
  },
  {
    "name": "Nate Bittle",
    "number": "nan",
    "college": "Oregon"
  },
  {
    "name": "Naz Reid",
    "number": "11",
    "college": "Louisiana State"
  },
  {
    "name": "Neemias Queta",
    "number": "88",
    "college": "Utah State"
  },
  {
    "name": "Nic Claxton",
    "number": "9",
    "college": "Georgia"
  },
  {
    "name": "Nick Martinelli",
    "number": "12",
    "college": "Northwestern"
  },
  {
    "name": "Nick Richards",
    "number": "8",
    "college": "Kentucky"
  },
  {
    "name": "Nickeil Alexander-Walker",
    "number": "7",
    "college": "Virginia Tech"
  },
  {
    "name": "Nikola Vučević",
    "number": "9",
    "college": "Southern California"
  },
  {
    "name": "Nimari Burnett",
    "number": "nan",
    "college": "Michigan"
  },
  {
    "name": "Nique Clifford",
    "number": "10",
    "college": "Colorado State"
  },
  {
    "name": "Noah Clowney",
    "number": "21",
    "college": "Alabama"
  },
  {
    "name": "Norchad Omier",
    "number": "nan",
    "college": "Miami (FL)"
  },
  {
    "name": "Norman Powell",
    "number": "24",
    "college": "UCLA"
  },
  {
    "name": "OG Anunoby",
    "number": "8",
    "college": "Indiana"
  },
  {
    "name": "Obi Toppin",
    "number": "1",
    "college": "Dayton"
  },
  {
    "name": "Ochai Agbaji",
    "number": "30",
    "college": "Kansas"
  },
  {
    "name": "Olivier-Maxence Prosper",
    "number": "18",
    "college": "Marquette"
  },
  {
    "name": "Onyeka Okongwu",
    "number": "17",
    "college": "Southern California"
  },
  {
    "name": "Orlando Robinson",
    "number": "7",
    "college": "Fresno State"
  },
  {
    "name": "Oscar Tshiebwe",
    "number": "34",
    "college": "Kentucky"
  },
  {
    "name": "Oso Ighodaro",
    "number": "11",
    "college": "Marquette"
  },
  {
    "name": "Otega Oweh",
    "number": "13",
    "college": "Kentucky"
  },
  {
    "name": "P.J. Washington",
    "number": "25",
    "college": "Kentucky"
  },
  {
    "name": "PJ Hall",
    "number": "16",
    "college": "Clemson"
  },
  {
    "name": "Pacôme Dadiet",
    "number": "4",
    "college": "Ratiopharm Ulm"
  },
  {
    "name": "Paolo Banchero",
    "number": "5",
    "college": "Duke"
  },
  {
    "name": "Pascal Siakam",
    "number": "43",
    "college": "New Mexico State"
  },
  {
    "name": "Pat Connaughton",
    "number": "21",
    "college": "Notre Dame"
  },
  {
    "name": "Pat Spencer",
    "number": "61",
    "college": "Northwestern"
  },
  {
    "name": "Patrick Williams",
    "number": "44",
    "college": "Florida State"
  },
  {
    "name": "Paul George",
    "number": "13",
    "college": "Fresno State"
  },
  {
    "name": "Paul Reed",
    "number": "7",
    "college": "DePaul"
  },
  {
    "name": "Payton Pritchard",
    "number": "11",
    "college": "Oregon"
  },
  {
    "name": "Pelle Larsson",
    "number": "9",
    "college": "Arizona"
  },
  {
    "name": "Pete Nance",
    "number": "35",
    "college": "Northwestern"
  },
  {
    "name": "Peyton Watson",
    "number": "8",
    "college": "UCLA"
  },
  {
    "name": "Phillip Wheeler",
    "number": "nan",
    "college": "Ranney School (HS)"
  },
  {
    "name": "Precious Achiuwa",
    "number": "9",
    "college": "Memphis"
  },
  {
    "name": "Quadir Copeland",
    "number": "nan",
    "college": "North Carolina State"
  },
  {
    "name": "Quentin Grimes",
    "number": "5",
    "college": "Houston"
  },
  {
    "name": "Quenton Jackson",
    "number": "29",
    "college": "Texas A&M"
  },
  {
    "name": "Quinten Post",
    "number": "41",
    "college": "Boston College"
  },
  {
    "name": "R.J. Davis",
    "number": "nan",
    "college": "North Carolina"
  },
  {
    "name": "RJ Barrett",
    "number": "9",
    "college": "Duke"
  },
  {
    "name": "Rashaun Agee",
    "number": "nan",
    "college": "nan"
  },
  {
    "name": "Rasheer Fleming",
    "number": "20",
    "college": "St. Joseph's (PA)"
  },
  {
    "name": "RayJ Dennis",
    "number": "00",
    "college": "Baylor"
  },
  {
    "name": "Reece Beekman",
    "number": "26",
    "college": "Virginia"
  },
  {
    "name": "Reed Sheppard",
    "number": "15",
    "college": "Kentucky"
  },
  {
    "name": "Rienk Mast",
    "number": "nan",
    "college": "Nebraska"
  },
  {
    "name": "Riley Minix",
    "number": "12",
    "college": "Morehead State"
  },
  {
    "name": "Robert Williams III",
    "number": "35",
    "college": "Texas A&M"
  },
  {
    "name": "Ron Harper Jr.",
    "number": "13",
    "college": "Rutgers"
  },
  {
    "name": "Royce O'Neale",
    "number": "00",
    "college": "Baylor"
  },
  {
    "name": "Rui Hachimura",
    "number": "28",
    "college": "Gonzaga"
  },
  {
    "name": "Ryan Conwell",
    "number": "4",
    "college": "Louisville"
  },
  {
    "name": "Ryan Dunn",
    "number": "0",
    "college": "Virginia"
  },
  {
    "name": "Ryan Kalkbrenner",
    "number": "11",
    "college": "Creighton"
  },
  {
    "name": "Ryan Nembhard",
    "number": "9",
    "college": "Gonzaga"
  },
  {
    "name": "Ryan Rollins",
    "number": "13",
    "college": "Toledo"
  },
  {
    "name": "Saddiq Bey",
    "number": "41",
    "college": "Villanova"
  },
  {
    "name": "Saint Thomas",
    "number": "nan",
    "college": "Southern California"
  },
  {
    "name": "Sam Hauser",
    "number": "30",
    "college": "Virginia"
  },
  {
    "name": "Sam Merrill",
    "number": "5",
    "college": "Utah State"
  },
  {
    "name": "Sandro Mamukelashvili",
    "number": "54",
    "college": "Seton Hall"
  },
  {
    "name": "Santi Aldama",
    "number": "34",
    "college": "Loyola-Maryland"
  },
  {
    "name": "Scottie Barnes",
    "number": "4",
    "college": "Florida State"
  },
  {
    "name": "Scotty Pippen Jr.",
    "number": "1",
    "college": "Vanderbilt"
  },
  {
    "name": "Sean Pedulla",
    "number": "nan",
    "college": "Mississippi"
  },
  {
    "name": "Seth Lundy",
    "number": "5",
    "college": "Penn State"
  },
  {
    "name": "Shaedon Sharpe",
    "number": "17",
    "college": "Kentucky"
  },
  {
    "name": "Shai Gilgeous-Alexander",
    "number": "2",
    "college": "Kentucky"
  },
  {
    "name": "Sion James",
    "number": "4",
    "college": "Duke"
  },
  {
    "name": "Skal Labissiere",
    "number": "7",
    "college": "Kentucky"
  },
  {
    "name": "Spencer Jones",
    "number": "21",
    "college": "Stanford"
  },
  {
    "name": "Stephen Curry",
    "number": "30",
    "college": "Davidson"
  },
  {
    "name": "Stephon Castle",
    "number": "5",
    "college": "UConn"
  },
  {
    "name": "Steven Adams",
    "number": "12",
    "college": "Pittsburgh"
  },
  {
    "name": "Svi Mykhailiuk",
    "number": "10",
    "college": "Kansas"
  },
  {
    "name": "T.J. McConnell",
    "number": "9",
    "college": "Arizona"
  },
  {
    "name": "Tacko Fall",
    "number": "99",
    "college": "Central Florida"
  },
  {
    "name": "Taelon Peter",
    "number": "4",
    "college": "Liberty"
  },
  {
    "name": "Tamar Bates",
    "number": "7",
    "college": "Missouri"
  },
  {
    "name": "Tari Eason",
    "number": "17",
    "college": "Louisiana State"
  },
  {
    "name": "Tarris Reed Jr.",
    "number": "10",
    "college": "UConn"
  },
  {
    "name": "Taurean Prince",
    "number": "12",
    "college": "Baylor"
  },
  {
    "name": "Taylor Funk",
    "number": "nan",
    "college": "Utah State"
  },
  {
    "name": "Taylor Hendricks",
    "number": "22",
    "college": "Central Florida"
  },
  {
    "name": "Terance Mann",
    "number": "14",
    "college": "Florida State"
  },
  {
    "name": "Terrence Shannon Jr",
    "number": "4",
    "college": "Illinois"
  },
  {
    "name": "Thomas Bryant",
    "number": "3",
    "college": "Indiana"
  },
  {
    "name": "Thomas Sorber",
    "number": "12",
    "college": "Georgetown"
  },
  {
    "name": "Tim Hardaway Jr.",
    "number": "10",
    "college": "Michigan"
  },
  {
    "name": "Tobe Awaka",
    "number": "nan",
    "college": "Arizona"
  },
  {
    "name": "Tobi Lawal",
    "number": "33",
    "college": "Virginia Tech"
  },
  {
    "name": "Tobias Harris",
    "number": "23",
    "college": "Tennessee"
  },
  {
    "name": "Tolu Smith",
    "number": "35",
    "college": "Mississippi State"
  },
  {
    "name": "Tony Bradley",
    "number": "13",
    "college": "North Carolina"
  },
  {
    "name": "Toumani Camara",
    "number": "33",
    "college": "Dayton"
  },
  {
    "name": "Trae Young",
    "number": "3",
    "college": "Oklahoma"
  },
  {
    "name": "Trayce Jackson-Davis",
    "number": "32",
    "college": "Indiana"
  },
  {
    "name": "Tre Donaldson",
    "number": "24",
    "college": "Miami (FL)"
  },
  {
    "name": "Tre Johnson",
    "number": "12",
    "college": "Texas"
  },
  {
    "name": "Tre Jones",
    "number": "30",
    "college": "Duke"
  },
  {
    "name": "Tre Mann",
    "number": "1",
    "college": "Florida"
  },
  {
    "name": "Trendon Watford",
    "number": "9",
    "college": "Louisiana State"
  },
  {
    "name": "Trevon Brazile",
    "number": "7",
    "college": "Arkansas"
  },
  {
    "name": "Trevor Keels",
    "number": "3",
    "college": "Duke"
  },
  {
    "name": "Trey Alexander",
    "number": "23",
    "college": "Creighton"
  },
  {
    "name": "Trey Jemison III",
    "number": "50",
    "college": "Alabama-Birmingham"
  },
  {
    "name": "Trey Lyles",
    "number": "41",
    "college": "Kentucky"
  },
  {
    "name": "Trey Murphy III",
    "number": "25",
    "college": "Virginia"
  },
  {
    "name": "Tristan Enaruna",
    "number": "21",
    "college": "Cleveland State"
  },
  {
    "name": "Tristan da Silva",
    "number": "23",
    "college": "Colorado"
  },
  {
    "name": "Tristen Newton",
    "number": "00",
    "college": "UConn"
  },
  {
    "name": "Tucker DeVries",
    "number": "nan",
    "college": "Indiana"
  },
  {
    "name": "Ty Jerome",
    "number": "2",
    "college": "Virginia"
  },
  {
    "name": "Tyler Bilodeau",
    "number": "34",
    "college": "UCLA"
  },
  {
    "name": "Tyler Herro",
    "number": "11",
    "college": "Kentucky"
  },
  {
    "name": "Tyler Kolek",
    "number": "13",
    "college": "Marquette"
  },
  {
    "name": "Tyler Nickel",
    "number": "55",
    "college": "Vanderbilt"
  },
  {
    "name": "Tyreke Key",
    "number": "nan",
    "college": "Tennessee"
  },
  {
    "name": "Tyrese Haliburton",
    "number": "0",
    "college": "Iowa State"
  },
  {
    "name": "Tyrese Maxey",
    "number": "0",
    "college": "Kentucky"
  },
  {
    "name": "Tyrese Proctor",
    "number": "24",
    "college": "Duke"
  },
  {
    "name": "Tyson Degenhart",
    "number": "nan",
    "college": "Boise State"
  },
  {
    "name": "Tyus Jones",
    "number": "5",
    "college": "Duke"
  },
  {
    "name": "Ugonna Onyenso",
    "number": "nan",
    "college": "Virginia"
  },
  {
    "name": "VJ Edgecombe",
    "number": "77",
    "college": "Baylor"
  },
  {
    "name": "Victor Wembanyama",
    "number": "1",
    "college": "Metropolitans 92"
  },
  {
    "name": "Vladislav Goldin",
    "number": "50",
    "college": "Michigan"
  },
  {
    "name": "Vít Krejčí",
    "number": "27",
    "college": "Zaragoza"
  },
  {
    "name": "Walker Kessler",
    "number": "14",
    "college": "Auburn"
  },
  {
    "name": "Walter Clayton Jr.",
    "number": "4",
    "college": "Florida"
  },
  {
    "name": "Wendell Carter Jr.",
    "number": "34",
    "college": "Duke"
  },
  {
    "name": "Will Richard",
    "number": "3",
    "college": "Florida"
  },
  {
    "name": "Will Riley",
    "number": "27",
    "college": "Illinois-Urbana-Champaign"
  },
  {
    "name": "William Kyle",
    "number": "nan",
    "college": "Syracuse"
  },
  {
    "name": "Wyatt Fricks",
    "number": "nan",
    "college": "nan"
  },
  {
    "name": "Yang Hansen",
    "number": "16",
    "college": "Zibo"
  },
  {
    "name": "Yanic Konan Niederhäuser",
    "number": "14",
    "college": "Penn State"
  },
  {
    "name": "Yaxel Lendeborg",
    "number": "1",
    "college": "Alabama-Birmingham"
  },
  {
    "name": "Yuki Kawamura",
    "number": "8",
    "college": "Japan"
  },
  {
    "name": "Yves Missi",
    "number": "21",
    "college": "Baylor"
  },
  {
    "name": "Zaccharie Risacher",
    "number": "10",
    "college": "JL Bourg-en-Bresse"
  },
  {
    "name": "Zach Collins",
    "number": "12",
    "college": "Gonzaga"
  },
  {
    "name": "Zach Edey",
    "number": "14",
    "college": "Purdue"
  },
  {
    "name": "Zach LaVine",
    "number": "8",
    "college": "UCLA"
  },
  {
    "name": "Zack Austin",
    "number": "nan",
    "college": "Pittsburgh"
  },
  {
    "name": "Zeke Nnaji",
    "number": "22",
    "college": "Arizona"
  },
  {
    "name": "Zhaire Smith",
    "number": "19",
    "college": "Texas Tech"
  },
  {
    "name": "Ziaire Williams",
    "number": "11",
    "college": "Stanford"
  },
  {
    "name": "Zion Williamson",
    "number": "1",
    "college": "Duke"
  },
  {
    "name": "Zuby Ejiofor",
    "number": "20",
    "college": "St. John's"
  },
  {
    "name": "Zyon Pullin",
    "number": "15",
    "college": "Florida"
  }
];
