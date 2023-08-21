let halaUSUM = document.querySelector ("#hala3");
let oliviaUSUM = document.querySelector ("#olivia3");
let nanuUSUM = document.querySelector ("#nanu2");
let hapuUSUM = document.querySelector ("#hapu2");
let molayneUSUM = document.querySelector ("#molayne1");
let oliviaE4USUM = document.querySelector ("#olivia4");
let acerolaUSUM = document.querySelector ("#acerola2");
let kahiliUSUM = document.querySelector ("#kahili2");
let hauGUSUM = document.querySelector ("#hau1_g");
let hauFUSUM = document.querySelector ("#hau1_f");
let hauWUSUM = document.querySelector ("#hau1_w");

let usum_trainers = [
    {
        namea : "Machop",
        levela : "LV: 15",
        typea : "Type: Fighting",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: 59",
        atka : "Atk: 36",
        defa : "Def: 24",
        spatka : "Sp. Atk: 18",
        spdefa : "Sp. Def: 20",
        spda : "Spd: 29",
        move1a : "-Karate Chop",
        move2a : "-Focus Energy",
        move3a : "-Revenge",
        move4a : "",

        nameb : "Makuhita",
        levelb : "LV: 14",
        typeb : "Type: Fighting",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: 60",
        atkb : "Atk: 29",
        defb : "Def: 18",
        spatkb : "Sp. Atk: 13",
        spdefb : "Sp. Def: 27",
        spdb : "Spd: 17",
        move1b : "-Fake Out",
        move2b : "-Sand Attack",
        move3b : "-Arm Thrust",
        move4b : "",

        namec : "Crabrawler",
        levelc : "LV: 15",
        typec : "Type: Fighting",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: Fightinium Z",
        hpc : "HP: 55",
        atkc : "Atk: 39",
        defc : "Def: 38",
        spatkc : "Sp. Atk: 20",
        spdefc : "Sp. Def: 24",
        spdc : "Spd: 29",
        move1c : "-Power-Up Punch",
        move2c : "-Pursuit",
        move3c : "-Leer",
        move4c : "",   
    },

    {
        namea : "Anorith",
        levela : "LV: 27",
        typea : "Type: Rock/Bug",
        abilitya: "Ability: Battle Armor",
        itema : "Item: None",
        hpa : "HP: 69",
        atka : "Atk: 81",
        defa : "Def: 40",
        spatka : "Sp. Atk: 30",
        spdefa : "Sp. Def: 44",
        spda : "Spd: 70",
        move1a : "-Bug Bite",
        move2a : "-Smack Down",
        move3a : "-Metal Claw",
        move4a : "",

        nameb : "Lileep",
        levelb : "LV: 27",
        typeb : "Type: Rock/Grass",
        abilityb: "Ability: Suction Cups",
        itemb : "Item: None",
        hpb : "HP: 80",
        atkb : "Atk: 35",
        defb : "Def: 78",
        spatkb : "Sp. Atk: 41",
        spdefb : "Sp. Def: 77",
        spdb : "Spd: 25",
        move1b : "-Giga Drain",
        move2b : "-Ancient Power",
        move3b : "-Brine",
        move4b : "",

        namec : "Lycanroc (Midnight)",
        levelc : "LV: 28",
        typec : "Type: Rock",
        abilityc: "Ability: Vital Spirit",
        itemc : "Item: Rockium Z",
        hpc : "HP: 94",
        atkc : "Atk: 104",
        defc : "Def: 55",
        spatkc : "Sp. Atk: 39",
        spdefc : "Sp. Def: 55",
        spdc : "Spd: 76",
        move1c : "-Bite",
        move2c : "-Rock Tomb",
        move3c : "",
        move4c : "",
    },

    {
        namea : "Sableye",
        levela : "LV: 43",
        typea : "Type: Dark/Ghost",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: 108",
        atka : "Atk: 82",
        defa : "Def: 90",
        spatka : "Sp. Atk: 90",
        spdefa : "Sp. Def: 100",
        spda : "Spd: 60",
        move1a : "-Power Gem",
        move2a : "-Shadow Ball",
        move3a : "-Fake Out",
        move4a : "",

        nameb : "Krokorok",
        levelb : "LV: 43",
        typeb : "Type: Ground/Dark",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: 117",
        atkb : "Atk: 115",
        defb : "Def: 56",
        spatkb : "Sp. Atk: 50",
        spdefb : "Sp. Def: 56",
        spdb : "Spd: 118",
        move1b : "-Crunch",
        move2b : "-Assurance",
        move3b : "-Swagger",
        move4b : "-Earthquake",

        namec : "Persian (Alolan)",
        levelc : "LV: 44",
        typec : "Type: Dark",
        abilityc: "Ability: Fur Coat",
        itemc : "Item: Darkinium Z",
        hpc : "HP: 124",
        atkc : "Atk: 63",
        defc : "Def: 71",
        spatkc : "Sp. Atk: 111",
        spdefc : "Sp. Def: 75",
        spdc : "Spd: 161",
        move1c : "-Power Gem",
        move2c : "-Fake Out",
        move3c : "-Dark Pulse",
        move4c : "",
    },

    {
        namea : "Golurk",
        levela : "LV: 53",
        typea : "Type: Ground/Ghost",
        abilitya: "Ability: No Guard",
        itema : "Item: None",
        hpa : "HP: 206",
        atka : "Atk: 185",
        defa : "Def: 105",
        spatka : "Sp. Atk: 79",
        spdefa : "Sp. Def: 105",
        spda : "Spd: 79",
        move1a : "-Hammer Arm",
        move2a : "-Earthquake",
        move3a : "-Shadow Punch",
        move4a : "-Stealth Rock",

        nameb : "Gastrodon",
        levelb : "LV: 53",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Sticky Hold",
        itemb : "Item: None",
        hpb : "HP: 229",
        atkb : "Atk: 108",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 151",
        spdefb : "Sp. Def: 107",
        spdb : "Spd: 62",
        move1b : "-Muddy Water",
        move2b : "-Mud Bomb",
        move3b : "-Recover",
        move4b : "",

        namec : "Flygon",
        levelc : "LV: 53",
        typec : "Type: Ground/Dragon",
        abilityc: "Ability: Levitate",
        itemc : "Item: None",
        hpc : "HP: 163",
        atkc : "Atk: 126",
        defc : "Def: 105",
        spatkc : "Sp. Atk: 139",
        spdefc : "Sp. Def: 105",
        spdc : "Spd: 160",
        move1c : "-Earth Power",
        move2c : "-Dragon Breath",
        move3c : "",
        move4c : "",

        named : "Mudsdale",
        leveld : "LV: 54",
        typed : "Type: Ground",
        abilityd: "Ability: Stamina",
        itemd : "Item: Groundium Z",
        hpd : "HP: 188",
        atkd : "Atk: 190",
        defd : "Def: 163",
        spatkd : "Sp. Atk: 80",
        spdefd : "Sp. Def: 113",
        spdd : "Spd: 59",
        move1d : "-Heavy Slam",
        move2d : "-Earthquake",
        move3d : "-Double Kick",
        move4d : "-Payback",
    },

    {
        namea : "Klefki",
        levela : "LV: 56",
        typea : "Type: Steel/Fairy",
        abilitya: "Ability: Prankster",
        itema : "Item: None",
        hpa : "HP: 146",
        atka : "Atk: 108",
        defa : "Def: 159",
        spatka : "Sp. Atk: 108",
        spdefa : "Sp. Def: 154",
        spda : "Spd: 103",
        move1a : "-Spikes",
        move2a : "-Thunder Wave",
        move3a : "-Flash Cannon",
        move4a : "-Reflect",

        nameb : "Bisharp",
        levelb : "LV: 56",
        typeb : "Type: Dark/Steel",
        abilityb: "Ability: Defiant",
        itemb : "Item: None",
        hpb : "HP: 152",
        atkb : "Atk: 197",
        defb : "Def: 169",
        spatkb : "Sp. Atk: 86",
        spdefb : "Sp. Def: 97",
        spdb : "Spd: 100",
        move1b : "-Night Slash",
        move2b : "-Iron Head",
        move3b : "-X-Scissor",
        move4b : "-Metal Sound",

        namec : "Magnezone",
        levelc : "LV: 56",
        typec : "Type: Electric/Steel",
        abilityc: "Ability: Sturdy",
        itemc : "Item: None",
        hpc : "HP: 161",
        atkc : "Atk: 97",
        defc : "Def: 185",
        spatkc : "Sp. Atk: 202",
        spdefc : "Sp. Def: 119",
        spdc : "Spd: 86",
        move1c : "-Flash Cannon",
        move2c : "-Thunderbolt",
        move3c : "-Tri Attack",
        move4c : "-Screech",

        named : "Metagross",
        leveld : "LV: 56",
        typed : "Type: Steel/Psychic",
        abilityd: "Ability: Clear Body",
        itemd : "Item: None",
        hpd : "HP: 172",
        atkd : "Atk: 170",
        defd : "Def: 202",
        spatkd : "Sp. Atk: 125",
        spdefd : "Sp. Def: 157",
        spdd : "Spd: 97",
        move1d : "-Hammer Arm",
        move2d : "-Meteor Mash",
        move3d : "-Bullet Punch",
        move4d : "-Zen Headbutt",

        namee : "Dugtrio (Alolan)",
        levele : "LV: 57",
        typee : "Type: Ground/Steel",
        abilitye: "Ability: Tangling Hair",
        iteme : "Item: Steelium Z",
        hpe : "HP: 124",
        atke : "Atk: 172",
        defe : "Def: 90",
        spatke : "Sp. Atk: 79",
        spdefe : "Sp. Def: 101",
        spde : "Spd: 183",
        move1e : "-Earthquake",
        move2e : "-Iron Head",
        move3e : "-Sucker Punch",
        move4e : "-Fissure",
    },

    {
        namea : "Armaldo",
        levela : "LV: 56",
        typea : "Type: Rock/Bug",
        abilitya: "Ability: Battle Armor",
        itema : "Item: None",
        hpa : "HP: 166",
        atka : "Atk: 197",
        defa : "Def: 133",
        spatka : "Sp. Atk: 100",
        spdefa : "Sp. Def: 111",
        spda : "Spd: 107",
        move1a : "-Crush Claw",
        move2a : "-X-Scissor",
        move3a : "-Rock Blast",
        move4a : "",

        nameb : "Cradily",
        levelb : "LV: 56",
        typeb : "Type: Rock/Grass",
        abilityb: "Ability: Suction Cups",
        itemb : "Item: None",
        hpb : "HP: 179",
        atkb : "Atk: 112",
        defb : "Def: 165",
        spatkb : "Sp. Atk: 112",
        spdefb : "Sp. Def: 176",
        spdb : "Spd: 69",
        move1b : "-Rock Tomb",
        move2b : "-Energy Ball",
        move3b : "-Stealth Rock",
        move4b : "",

        namec : "Gigalith",
        levelc : "LV: 56",
        typec : "Type: Rock",
        abilityc: "Ability: Sand Stream",
        itemc : "Item: None",
        hpc : "HP: 213",
        atkc : "Atk: 173",
        defc : "Def: 202",
        spatkc : "Sp. Atk: 89",
        spdefc : "Sp. Def: 111",
        spdc : "Spd: 49",
        move1c : "-Stone Edge",
        move2c : "-Bulldoze",
        move3c : "-Iron Head",
        move4c : "",

        named : "Probopass",
        leveld : "LV: 56",
        typed : "Type: Rock/Steel",
        abilityd: "Ability: Sturdy",
        itemd : "Item: None",
        hpd : "HP: 185",
        atkd : "Atk: 83",
        defd : "Def: 184",
        spatkd : "Sp. Atk: 105",
        spdefd : "Sp. Def: 225",
        spdd : "Spd: 66",
        move1d : "-Earth Power",
        move2d : "-Power Gem",
        move3d : "-Thunder Wave",
        move4d : "-Sandstorm",

        namee : "Lycanroc (Midnight)",
        levele : "LV: 57",
        typee : "Type: Rock",
        abilitye: "Ability: Keen Eye",
        iteme : "Item: Rockium Z",
        hpe : "HP: 216",
        atke : "Atk: 153",
        defe : "Def: 143",
        spatke : "Sp. Atk: 84",
        spdefe : "Sp. Def: 107",
        spde : "Spd: 115",
        move1e : "-Crunch",
        move2e : "-Stone Edge",
        move3e : "-Counter",
        move4e : "-Rock Climb",
    },

    {
        namea : "Banette",
        levela : "LV: 56",
        typea : "Type: Ghost",
        abilitya: "Ability: Insomnia",
        itema : "Item: None",
        hpa : "HP: 154",
        atka : "Atk: 185",
        defa : "Def: 91",
        spatka : "Sp. Atk: 111",
        spdefa : "Sp. Def: 89",
        spda : "Spd: 129",
        move1a : "-Shadow Claw",
        move2a : "-Feint Attack",
        move3a : "-Infestation",
        move4a : "-Screech",

        nameb : "Drifblim",
        levelb : "LV: 56",
        typeb : "Type: Ghost/Flying",
        abilityb: "Ability: Aftermath",
        itemb : "Item: None",
        hpb : "HP: 250",
        atkb : "Atk: 108",
        defb : "Def: 106",
        spatkb : "Sp. Atk: 119",
        spdefb : "Sp. Def: 117",
        spdb : "Spd: 108",
        move1b : "-Ominous Wind",
        move2b : "-Focus Energy",
        move3b : "-Amnesia",
        move4b : "-Baton Pass",

        namec : "Dhelmise",
        levelc : "LV: 56",
        typec : "Type: Ghost/Grass",
        abilityc: "Ability: Steelworker",
        itemc : "Item: None",
        hpc : "HP: 161",
        atkc : "Atk: 165",
        defc : "Def: 169",
        spatkc : "Sp. Atk: 115",
        spdefc : "Sp. Def: 157",
        spdc : "Spd: 63",
        move1c : "-Slam",
        move2c : "-Shadow Ball",
        move3c : "-Energy Ball",
        move4c : "-Whirlpool",

        named : "Froslass",
        leveld : "LV: 56",
        typed : "Type: Ice/Ghost",
        abilityd: "Ability: Snow Cloak",
        itemd : "Item: None",
        hpd : "HP: 161",
        atkd : "Atk: 108",
        defd : "Def: 97",
        spatkd : "Sp. Atk: 146",
        spdefd : "Sp. Def: 97",
        spdd : "Spd: 180",
        move1d : "-Blizzard",
        move2d : "-Shadow Ball",
        move3d : "-Confuse Ray",
        move4d : "-Ice Shard",

        namee : "Palossand",
        levele : "LV: 57",
        typee : "Type: Ghost/Ground",
        abilitye: "Ability: Water Compaction",
        iteme : "Item: Ghostium Z",
        hpe : "HP: 216",
        atke : "Atk: 104",
        defe : "Def: 144",
        spatke : "Sp. Atk: 172",
        spdefe : "Sp. Def: 107",
        spde : "Spd: 59",
        move1e : "-Shadow Ball",
        move2e : "-Earth Power",
        move3e : "-Giga Drain",
        move4e : "-Iron Defense",
    },

    {
        namea : "Braviary",
        levela : "LV: 56",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Sheer Force",
        itema : "Item: None",
        hpa : "HP: 194",
        atka : "Atk: 194",
        defa : "Def: 105",
        spatka : "Sp. Atk: 85",
        spdefa : "Sp. Def: 105",
        spda : "Spd: 146",
        move1a : "-Crush Claw",
        move2a : "-Brave Bird",
        move3a : "-Air Slash",
        move4a : "-Scary Face",

        nameb : "Hawlucha",
        levelb : "LV: 56",
        typeb : "Type: Fighting/Flying",
        abilityb: "Ability: Mold Breaker",
        itemb : "Item: None",
        hpb : "HP: 170",
        atkb : "Atk: 160",
        defb : "Def: 105",
        spatkb : "Sp. Atk: 104",
        spdefb : "Sp. Def: 92",
        spdb : "Spd: 189",
        move1b : "-Flying Press",
        move2b : "-Throat Chop",
        move3b : "-Dual Chop",
        move4b : "-Poison Jab",

        namec : "Oricorio (Baile)",
        levelc : "LV: 56",
        typec : "Type: Fire/Flying",
        abilityc: "Ability: Dancer",
        itemc : "Item: None",
        hpc : "HP: 166",
        atkc : "Atk: 100",
        defc : "Def: 100",
        spatkc : "Sp. Atk: 166",
        spdefc : "Sp. Def: 100",
        spdc : "Spd: 161",
        move1c : "-Revelation Dance",
        move2c : "-Teeter Dance",
        move3c : "-Air Slash",
        move4c : "-Feather Dance",

        named : "Mandibuzz",
        leveld : "LV: 56",
        typed : "Type: Dark/Flying",
        abilityd: "Ability: Big Pecks",
        itemd : "Item: None",
        hpd : "HP: 206",
        atkd : "Atk: 94",
        defd : "Def: 174",
        spatkd : "Sp. Atk: 83",
        spdefd : "Sp. Def: 163",
        spdd : "Spd: 111",
        move1d : "-Bone Rush",
        move2d : "-Brave Bird",
        move3d : "-Punishment",
        move4d : "-Flatter",

        namee : "Toucannon",
        levele : "LV: 57",
        typee : "Type: Normal/Flying",
        abilitye: "Ability: Skill Link",
        iteme : "Item: Flyinium Z",
        hpe : "HP: 175",
        atke : "Atk: 194",
        defe : "Def: 107",
        spatke : "Sp. Atk: 107",
        spdefe : "Sp. Def: 107",
        spde : "Spd: 126",
        move1e : "-Bullet Seed",
        move2e : "-Rock Blast",
        move3e : "-Beak Blast",
        move4e : "-Screech",
    },

    {
        namea : "Raichu (Alolan)",
        levela : "LV: 59",
        typea : "Type: Electric/Psychic",
        abilitya: "Ability: Surge Surfer",
        itema : "Item: None",
        hpa : "HP: 157",
        atka : "Atk: 123",
        defa : "Def: 81",
        spatka : "Sp. Atk: 171",
        spdefa : "Sp. Def: 123",
        spda : "Spd: 189",
        move1a : "-Thunderbolt",
        move2a : "-Quick Attack",
        move3a : "-Psychic",
        move4a : "-Focus Blast",

        nameb : "Vaporeon",
        levelb : "LV: 58",
        typeb : "Type: Water",
        abilityb: "Ability: Water Absorb",
        itemb : "Item: None",
        hpb : "HP: 236",
        atkb : "Atk: 97",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 186",
        spdefb : "Sp. Def: 132",
        spdb : "Spd: 134",
        move1b : "-Hydro Pump",
        move2b : "-Quick Attack",
        move3b : "-Charm",
        move4b : "-Baby-Doll Eyes",

        namec : "Tauros",
        levelc : "LV: 58",
        typec : "Type: Normal",
        abilityc: "Ability: Intimidate",
        itemc : "Item: None",
        hpc : "HP: 172",
        atkc : "Atk: 174",
        defc : "Def: 132",
        spatkc : "Sp. Atk: 68",
        spdefc : "Sp. Def: 103",
        spdc : "Spd: 186",
        move1c : "-Zen Headbutt",
        move2c : "-Iron Head",
        move3c : "-Earthquake",
        move4c : "-Double-Edge",

        named : "Noivern",
        leveld : "LV: 58",
        typed : "Type: Flying/Dragon",
        abilityd: "Ability: Infiltrator",
        itemd : "Item: None",
        hpd : "HP: 184",
        atkd : "Atk: 94",
        defd : "Def: 115",
        spatkd : "Sp. Atk: 171",
        spdefd : "Sp. Def: 115",
        spdd : "Spd: 201",
        move1d : "-Dragon Pulse",
        move2d : "-Air Slash",
        move3d : "-Dark Pulse",
        move4d : "-Super Fang",

        namee : "Crabominable",
        levele : "LV: 59",
        typee : "Type: Fighting/Ice",
        abilitye: "Ability: Iron Fist",
        iteme : "Item: None",
        hpe : "HP: 201",
        atke : "Atk: 215",
        defe : "Def: 113",
        spatke : "Sp. Atk: 95",
        spdefe : "Sp. Def: 101",
        spde : "Spd: 110",
        move1e : "-Power-Up Punch",
        move2e : "-Ice Hammer",
        move3e : "-Stone Edge",
        move4e : "-Dizzy Punch",

        namef : "Decidueye",
        levelf : "LV: 60",
        typef : "Type: Grass/Ghost",
        abilityf: "Ability: Overgrow",
        itemf : "Item: Grassium Z",
        hpf : "HP: 219",
        atkf : "Atk: 189",
        deff : "Def: 113",
        spatkf : "Sp. Atk: 143",
        spdeff : "Sp. Def: 143",
        spdf : "Spd: 107",
        move1f : "-Spirit Shackle",
        move2f : "-Leaf Blade",
        move3f : "-Smack Down",
        move4f : "",
    },

    {
        namea : "Raichu (Alolan)",
        levela : "LV: 59",
        typea : "Type: Electric/Psychic",
        abilitya: "Ability: Surge Surfer",
        itema : "Item: None",
        hpa : "HP: 157",
        atka : "Atk: 123",
        defa : "Def: 81",
        spatka : "Sp. Atk: 171",
        spdefa : "Sp. Def: 123",
        spda : "Spd: 189",
        move1a : "-Thunderbolt",
        move2a : "-Quick Attack",
        move3a : "-Psychic",
        move4a : "-Focus Blast",

        nameb : "Leafeon",
        levelb : "LV: 58",
        typeb : "Type: Grass",
        abilityb: "Ability: Leaf Guard",
        itemb : "Item: None",
        hpb : "HP: 160",
        atkb : "Atk: 186",
        defb : "Def: 173",
        spatkb : "Sp. Atk: 92",
        spdefb : "Sp. Def: 97",
        spdb : "Spd: 169",
        move1b : "-Leaf Blade",
        move2b : "-Quick Attack",
        move3b : "-Charm",
        move4b : "-Baby-Doll Eyes",

        namec : "Tauros",
        levelc : "LV: 58",
        typec : "Type: Normal",
        abilityc: "Ability: Intimidate",
        itemc : "Item: None",
        hpc : "HP: 172",
        atkc : "Atk: 174",
        defc : "Def: 132",
        spatkc : "Sp. Atk: 68",
        spdefc : "Sp. Def: 103",
        spdc : "Spd: 186",
        move1c : "-Zen Headbutt",
        move2c : "-Iron Head",
        move3c : "-Earthquake",
        move4c : "-Double-Edge",

        named : "Noivern",
        leveld : "LV: 58",
        typed : "Type: Flying/Dragon",
        abilityd: "Ability: Infiltrator",
        itemd : "Item: None",
        hpd : "HP: 184",
        atkd : "Atk: 94",
        defd : "Def: 115",
        spatkd : "Sp. Atk: 171",
        spdefd : "Sp. Def: 115",
        spdd : "Spd: 201",
        move1d : "-Dragon Pulse",
        move2d : "-Air Slash",
        move3d : "-Dark Pulse",
        move4d : "-Super Fang",

        namee : "Crabominable",
        levele : "LV: 59",
        typee : "Type: Fighting/Ice",
        abilitye: "Ability: Iron Fist",
        iteme : "Item: None",
        hpe : "HP: 201",
        atke : "Atk: 215",
        defe : "Def: 113",
        spatke : "Sp. Atk: 95",
        spdefe : "Sp. Def: 101",
        spde : "Spd: 110",
        move1e : "-Power-Up Punch",
        move2e : "-Ice Hammer",
        move3e : "-Stone Edge",
        move4e : "-Dizzy Punch",

        namef : "Incineroar",
        levelf : "LV: 60",
        typef : "Type: Fire/Dark",
        abilityf: "Ability: Blaze",
        itemf : "Item: Firium Z",
        hpf : "HP: 239",
        atkf : "Atk: 198",
        deff : "Def: 131",
        spatkf : "Sp. Atk: 119",
        spdeff : "Sp. Def: 131",
        spdf : "Spd: 95",
        move1f : "-Darkest Lariat",
        move2f : "-Flare Blitz",
        move3f : "-Earthquake",
        move4f : "",
    },

    {
        namea : "Raichu (Alolan)",
        levela : "LV: 59",
        typea : "Type: Electric/Psychic",
        abilitya: "Ability: Surge Surfer",
        itema : "Item: None",
        hpa : "HP: 157",
        atka : "Atk: 123",
        defa : "Def: 81",
        spatka : "Sp. Atk: 171",
        spdefa : "Sp. Def: 123",
        spda : "Spd: 189",
        move1a : "-Thunderbolt",
        move2a : "-Quick Attack",
        move3a : "-Psychic",
        move4a : "-Focus Blast",

        nameb : "Flareon",
        levelb : "LV: 58",
        typeb : "Type: Fire",
        abilityb: "Ability: Flash Fire",
        itemb : "Item: None",
        hpb : "HP: 160",
        atkb : "Atk: 209",
        defb : "Def: 92",
        spatkb : "Sp. Atk: 132",
        spdefb : "Sp. Def: 150",
        spdb : "Spd: 134",
        move1b : "-Flare Blitz",
        move2b : "-Quick Attack",
        move3b : "-Charm",
        move4b : "-Baby-Doll Eyes",

        namec : "Tauros",
        levelc : "LV: 58",
        typec : "Type: Normal",
        abilityc: "Ability: Intimidate",
        itemc : "Item: None",
        hpc : "HP: 172",
        atkc : "Atk: 174",
        defc : "Def: 132",
        spatkc : "Sp. Atk: 68",
        spdefc : "Sp. Def: 103",
        spdc : "Spd: 186",
        move1c : "-Zen Headbutt",
        move2c : "-Iron Head",
        move3c : "-Earthquake",
        move4c : "-Double-Edge",

        named : "Noivern",
        leveld : "LV: 58",
        typed : "Type: Flying/Dragon",
        abilityd: "Ability: Infiltrator",
        itemd : "Item: None",
        hpd : "HP: 184",
        atkd : "Atk: 94",
        defd : "Def: 115",
        spatkd : "Sp. Atk: 171",
        spdefd : "Sp. Def: 115",
        spdd : "Spd: 201",
        move1d : "-Dragon Pulse",
        move2d : "-Air Slash",
        move3d : "-Dark Pulse",
        move4d : "-Super Fang",

        namee : "Crabominable",
        levele : "LV: 59",
        typee : "Type: Fighting/Ice",
        abilitye: "Ability: Iron Fist",
        iteme : "Item: None",
        hpe : "HP: 201",
        atke : "Atk: 215",
        defe : "Def: 113",
        spatke : "Sp. Atk: 95",
        spdefe : "Sp. Def: 101",
        spde : "Spd: 110",
        move1e : "-Power-Up Punch",
        move2e : "-Ice Hammer",
        move3e : "-Stone Edge",
        move4e : "-Dizzy Punch",

        namef : "Primarina",
        levelf : "LV: 60",
        typef : "Type: Water/Fairy",
        abilityf: "Ability: Torrent",
        itemf : "Item: Waterium Z",
        hpf : "HP: 221",
        atkf : "Atk: 111",
        deff : "Def: 111",
        spatkf : "Sp. Atk: 212",
        spdeff : "Sp. Def: 162",
        spdf : "Spd: 95",
        move1f : "-Sparkling Aria",
        move2f : "-Moonblast",
        move3f : "-Hyper Voice",
        move4f : "",
    },
]

function displayUSUMTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showUSUMImages(newTrainerId);
        showPokemonUSUMImages(newTrainerId);
    }


    let usumTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = usum_trainers [usumTrainer].namea;
    document.querySelector('#level1').textContent = usum_trainers [usumTrainer].levela;
    document.querySelector('#type1').textContent = usum_trainers [usumTrainer].typea;
    document.querySelector('#ability1').textContent= usum_trainers [usumTrainer].abilitya;
    document.querySelector('#item1').textContent = usum_trainers [usumTrainer].itema;
    document.querySelector('#hp1').textContent = usum_trainers [usumTrainer].hpa;
    document.querySelector('#atk1').textContent = usum_trainers [usumTrainer].atka;
    document.querySelector('#def1').textContent = usum_trainers [usumTrainer].defa;
    document.querySelector('#spatk1').textContent = usum_trainers [usumTrainer].spatka;
    document.querySelector('#spdef1').textContent = usum_trainers [usumTrainer].spdefa;
    document.querySelector('#spd1').textContent = usum_trainers [usumTrainer].spda;
    document.querySelector('#move1_1').textContent = usum_trainers [usumTrainer].move1a;
    document.querySelector('#move2_1').textContent = usum_trainers [usumTrainer].move2a;
    document.querySelector('#move3_1').textContent = usum_trainers [usumTrainer].move3a;
    document.querySelector('#move4_1').textContent = usum_trainers [usumTrainer].move4a;

    
    document.querySelector('#name2').textContent = usum_trainers [usumTrainer].nameb;
    document.querySelector('#level2').textContent = usum_trainers [usumTrainer].levelb;
    document.querySelector('#type2').textContent = usum_trainers [usumTrainer].typeb;
    document.querySelector('#ability2').textContent= usum_trainers [usumTrainer].abilityb;
    document.querySelector('#item2').textContent = usum_trainers [usumTrainer].itemb;
    document.querySelector('#hp2').textContent = usum_trainers [usumTrainer].hpb;
    document.querySelector('#atk2').textContent = usum_trainers [usumTrainer].atkb;
    document.querySelector('#def2').textContent = usum_trainers [usumTrainer].defb;
    document.querySelector('#spatk2').textContent = usum_trainers [usumTrainer].spatkb;
    document.querySelector('#spdef2').textContent = usum_trainers [usumTrainer].spdefb;
    document.querySelector('#spd2').textContent = usum_trainers [usumTrainer].spdb;
    document.querySelector('#move1_2').textContent = usum_trainers [usumTrainer].move1b;
    document.querySelector('#move2_2').textContent = usum_trainers [usumTrainer].move2b;
    document.querySelector('#move3_2').textContent = usum_trainers [usumTrainer].move3b;
    document.querySelector('#move4_2').textContent = usum_trainers [usumTrainer].move4b;

    document.querySelector('#name3').textContent = usum_trainers [usumTrainer].namec;
    document.querySelector('#level3').textContent = usum_trainers [usumTrainer].levelc;
    document.querySelector('#type3').textContent = usum_trainers [usumTrainer].typec;
    document.querySelector('#ability3').textContent= usum_trainers [usumTrainer].abilityc;
    document.querySelector('#item3').textContent = usum_trainers [usumTrainer].itemc;
    document.querySelector('#hp3').textContent = usum_trainers [usumTrainer].hpc;
    document.querySelector('#atk3').textContent = usum_trainers [usumTrainer].atkc;
    document.querySelector('#def3').textContent = usum_trainers [usumTrainer].defc;
    document.querySelector('#spatk3').textContent = usum_trainers [usumTrainer].spatkc;
    document.querySelector('#spdef3').textContent = usum_trainers [usumTrainer].spdefc;
    document.querySelector('#spd3').textContent = usum_trainers [usumTrainer].spdc;
    document.querySelector('#move1_3').textContent = usum_trainers [usumTrainer].move1c;
    document.querySelector('#move2_3').textContent = usum_trainers [usumTrainer].move2c;
    document.querySelector('#move3_3').textContent = usum_trainers [usumTrainer].move3c;
    document.querySelector('#move4_3').textContent = usum_trainers [usumTrainer].move4c;

    document.querySelector('#name4').textContent = usum_trainers [usumTrainer].named;
    document.querySelector('#level4').textContent = usum_trainers [usumTrainer].leveld;
    document.querySelector('#type4').textContent = usum_trainers [usumTrainer].typed;
    document.querySelector('#ability4').textContent= usum_trainers [usumTrainer].abilityd;
    document.querySelector('#item4').textContent = usum_trainers [usumTrainer].itemd;
    document.querySelector('#hp4').textContent = usum_trainers [usumTrainer].hpd;
    document.querySelector('#atk4').textContent = usum_trainers [usumTrainer].atkd;
    document.querySelector('#def4').textContent = usum_trainers [usumTrainer].defd;
    document.querySelector('#spatk4').textContent = usum_trainers [usumTrainer].spatkd;
    document.querySelector('#spdef4').textContent = usum_trainers [usumTrainer].spdefd;
    document.querySelector('#spd4').textContent = usum_trainers [usumTrainer].spdd;
    document.querySelector('#move1_4').textContent = usum_trainers [usumTrainer].move1d;
    document.querySelector('#move2_4').textContent = usum_trainers [usumTrainer].move2d;
    document.querySelector('#move3_4').textContent = usum_trainers [usumTrainer].move3d;
    document.querySelector('#move4_4').textContent = usum_trainers [usumTrainer].move4d;

    document.querySelector('#name5').textContent = usum_trainers [usumTrainer].namee;
    document.querySelector('#level5').textContent = usum_trainers [usumTrainer].levele;
    document.querySelector('#type5').textContent = usum_trainers [usumTrainer].typee;
    document.querySelector('#ability5').textContent= usum_trainers [usumTrainer].abilitye;
    document.querySelector('#item5').textContent = usum_trainers [usumTrainer].iteme;
    document.querySelector('#hp5').textContent = usum_trainers [usumTrainer].hpe;
    document.querySelector('#atk5').textContent = usum_trainers [usumTrainer].atke;
    document.querySelector('#def5').textContent = usum_trainers [usumTrainer].defe;
    document.querySelector('#spatk5').textContent = usum_trainers [usumTrainer].spatke;
    document.querySelector('#spdef5').textContent = usum_trainers [usumTrainer].spdefe;
    document.querySelector('#spd5').textContent = usum_trainers [usumTrainer].spde;
    document.querySelector('#move1_5').textContent = usum_trainers [usumTrainer].move1e;
    document.querySelector('#move2_5').textContent = usum_trainers [usumTrainer].move2e;
    document.querySelector('#move3_5').textContent = usum_trainers [usumTrainer].move3e;
    document.querySelector('#move4_5').textContent = usum_trainers [usumTrainer].move4e;

    document.querySelector('#name6').textContent = usum_trainers [usumTrainer].namef;
    document.querySelector('#level6').textContent = usum_trainers [usumTrainer].levelf;
    document.querySelector('#type6').textContent = usum_trainers [usumTrainer].typef;
    document.querySelector('#ability6').textContent= usum_trainers [usumTrainer].abilityf;
    document.querySelector('#item6').textContent = usum_trainers [usumTrainer].itemf;
    document.querySelector('#hp6').textContent = usum_trainers [usumTrainer].hpf;
    document.querySelector('#atk6').textContent = usum_trainers [usumTrainer].atkf;
    document.querySelector('#def6').textContent = usum_trainers [usumTrainer].deff;
    document.querySelector('#spatk6').textContent = usum_trainers [usumTrainer].spatkf;
    document.querySelector('#spdef6').textContent = usum_trainers [usumTrainer].spdeff;
    document.querySelector('#spd6').textContent = usum_trainers [usumTrainer].spdf;
    document.querySelector('#move1_6').textContent = usum_trainers [usumTrainer].move1f;
    document.querySelector('#move2_6').textContent = usum_trainers [usumTrainer].move2f;
    document.querySelector('#move3_6').textContent = usum_trainers [usumTrainer].move3f;
    document.querySelector('#move4_6').textContent = usum_trainers [usumTrainer].move4f;
}

function showUSUMImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/usum/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonUSUMImages(trainerId) {
    var pokemon1Picture = document.querySelector("#pokemon_1_image");
    var pokemon2Picture = document.querySelector("#pokemon_2_image");
    var pokemon3Picture = document.querySelector("#pokemon_3_image");
    var pokemon4Picture = document.querySelector("#pokemon_4_image");
    var pokemon5Picture = document.querySelector("#pokemon_5_image");
    var pokemon6Picture = document.querySelector("#pokemon_6_image");
    var imgPokemon1 = document.createElement("img");
    var imgPokemon2 = document.createElement("img");
    var imgPokemon3 = document.createElement("img");
    var imgPokemon4 = document.createElement("img");
    var imgPokemon5 = document.createElement("img");
    var imgPokemon6 = document.createElement("img");
    
    pokemon1Picture.innerHTML = "";
    pokemon2Picture.innerHTML = "";
    pokemon3Picture.innerHTML = "";
    pokemon4Picture.innerHTML = "";
    pokemon5Picture.innerHTML = "";
    pokemon6Picture.innerHTML = "";

    
    imgPokemon1.src = "images/pokemon/usum/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/usum/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/usum/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/usum/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/usum/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/usum/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

halaUSUM.addEventListener('click', displayUSUMTrainers);
oliviaUSUM.addEventListener('click', displayUSUMTrainers);
nanuUSUM.addEventListener('click', displayUSUMTrainers);
hapuUSUM.addEventListener('click', displayUSUMTrainers);
molayneUSUM.addEventListener('click', displayUSUMTrainers);
oliviaE4USUM.addEventListener('click', displayUSUMTrainers);
acerolaUSUM.addEventListener('click', displayUSUMTrainers);
kahiliUSUM.addEventListener('click', displayUSUMTrainers);
hauGUSUM.addEventListener('click', displayUSUMTrainers);
hauFUSUM.addEventListener('click', displayUSUMTrainers);
hauWUSUM.addEventListener('click', displayUSUMTrainers);