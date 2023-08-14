let roxanneORAS = document.querySelector ("#roxanne3");
let brawlyORAS = document.querySelector ("#brawly3");
let wattsonORAS = document.querySelector ("#wattson3");
let flanneryORAS = document.querySelector ("#flannery3");
let normanORAS = document.querySelector ("#norman3");
let winonaORAS = document.querySelector ("#winona3");
let tatelizaORAS = document.querySelector ("#tateliza3");
let wallaceORAS = document.querySelector ("#wallace3");
let sidneyORAS = document.querySelector ("#sidney3");
let phoebeORAS = document.querySelector ("#phoebe3");
let glaciaORAS = document.querySelector ("#glacia3");
let drakeORAS = document.querySelector ("#drake3");
let stevenORAS = document.querySelector ("#steven3");

let oras_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        abilitya : "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Tackle",
        move2a : "-Defense Curl",
        move3a : "-Rock Tomb",
        move4a : "",

        nameb : "Nosepass",
        levelb : "LV: 14",
        typeb : "Type: Rock",
        abilityb : "Ability: Magnet Pull",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Tackle",
        move2b : "-Harden",
        move3b : "-Rock Tomb",
        move4b : "",
    },

    {
        namea : "Machop",
        levela : "LV: 14",
        typea : "Type: Fighting",
        abilitya : "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: ",
        move1a : "-Karate Chop",
        move2a : "-Leer",
        move3a : "-Seismic Toss",
        move4a : "-Bulk Up",

        nameb : "Makuhita",
        levelb : "LV: 16",
        typeb : "Type: Fighting",
        abilityb : "Ability: Guts",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Arm Thrust",
        move2b : "-Knock Off",
        move3b : "-Sand Attack",
        move4b : "-Bulk Up",
    },

    {
        namea : "Magnemite",
        levela : "LV: 19",
        typea : "Type: Electric/Steel",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Thunder Wave",
        move2a : "-Tackle",
        move3a : "-Volt Switch",
        move4a : "",

        nameb : "Voltorb",
        levelb : "LV: 19",
        typeb : "Type: Electric",
        abilityb : "Ability: Soundproof",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Rollout",
        move2b : "-Charge",
        move3b : "-Volt Switch",
        move4b : "",

        namec : "Magneton",
        levelc : "LV: 21",
        typec : "Type: Electric/Steel",
        abilityc : "Ability: Magnet Pull",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Supersonic",
        move2c : "-Magnet Bomb",
        move3c : "-Volt Switch",
        move4c : "",
    },

    {
        namea : "Slugma",
        levela : "LV: 26",
        typea : "Type: Fire",
        abilitya: "Ability: Flame Body",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Overheat",
        move2a : "-Rock Throw",
        move3a : "-Light Screen",
        move4a : "-Sunny Day",

        nameb : "Numel",
        levelb : "LV: 26",
        typeb : "Type: Fire",
        abilityb : "Ability: Simple",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Earth Power",
        move2b : "-Lava Plume",
        move3b : "-Amnesia",
        move4b : "-Sunny Day",

        namec : "Torkoal",
        levelc : "LV: 28",
        typec : "Type: Fire",
        abilityc : "Ability: White Smoke",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Body Slam",
        move2c : "-Overheat",
        move3c : "-Curse",
        move4c : "-Sunny Day",
    },

    {
        namea : "Slaking",
        levela : "LV: 28",
        typea : "Type: Normal",
        abilitya: "Ability: Truant",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Encore",
        move2a : "-Yawn",
        move3a : "-Retaliate",
        move4a : "-Feint Attack",

        nameb : "Vigoroth",
        levelb : "LV: 28",
        typeb : "Type: Normal",
        abilityb : "Vital Spirit",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Fury Swipes",
        move2b : "-Retaliate",
        move3b : "-Feint Attack",
        move4b : "-Encore",

        namec : "Slaking",
        levelc : "LV: 30",
        typec : "Type: Normal",
        abilityc : "Ability: Truant",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Retaliate",
        move2c : "-Swagger",
        move3c : "-Chip Away",
        move4c : "-Feint Attack",
    },

    {
        namea : "Swellow",
        levela : "LV: 33",
        typea : "Type: Normal/Flying",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Quick Attack",
        move2a : "-Aerial Ace",
        move3a : "-Double Team",
        move4a : "-Endeavor",

        nameb : "Pelipper",
        levelb : "LV: 33",
        typeb : "Type: Water/Flying",
        abilityb: "Ability: Keen Eye",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Aerial Ace",
        move2b : "-Water Pulse",
        move3b : "-Roost",
        move4b : "-Protect",

        namec : "Skarmory",
        levelc : "LV: 33",
        typec : "Type: Steel/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Aerial Ace",
        move2c : "-Steel Wing",
        move3c : "-Air Cutter",
        move4c : "-Sand Attack",

        named : "Altaria",
        leveld : "LV: 35",
        typed : "Type: Dragon/Flying",
        abilityd: "Ability: Natural Cure",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Earthquake",
        move2d : "-Cotton Guard",
        move3d : "-Dragon Breath",
        move4d : "-Roost",
    },

    {

        namea : "Lunatone",
        levela : "LV: 45",
        typea : "Type: Rock/Psychic",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Psychic",
        move2a : "-Hypnosis",
        move3a : "-Calm Mind",
        move4a : "-Light Screen",

        nameb : "Solrock",
        levelb : "LV: 45",
        typeb : "Type: Rock/Psychic",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Solarbeam",
        move2b : "-Psychic",
        move3b : "-Rock Slide",
        move4b : "-Sunny Day",
    },

    {
        namea : "Luvdisc",
        levela : "LV: 44",
        typea : "Type: Water",
        abilitya: "Ability: Swift Swim",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Water Pulse",
        move2a : "-Draining Kiss",
        move3a : "-Sweet Kiss",
        move4a : "-Attract",

        nameb : "Sealeo",
        levelb : "LV: 44",
        typeb : "Type: Ice/Water",
        abilityb: "Ability: Thick Fat",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Aurora Beam",
        move2b : "-Waterfall",
        move3b : "-Body Slam",
        move4b : "-Encore",

        namec : "Seaking",
        levelc : "LV: 44",
        typec : "Type: Water",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Horn Drill",
        move2c : "-Waterfall",
        move3c : "-Rain Dance",
        move4c : "-Aqua Ring",

        named : "Whiscash",
        leveld : "LV: 44",
        typed : "Type: Water/Ground",
        abilityd: "Ability: Oblivious",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Waterfall",
        move2d : "-Earthquake",
        move3d : "-Zen Headbutt",
        move4d : "-Mud Sport",

        namee : "Milotic",
        levele : "LV: 46",
        typee : "Type: Water",
        abilitye: "Ability: Marvel Scale",
        iteme : "Item: None",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Hydro Pump",
        move2e : "-Disarming Voice",
        move3e : "-Recover",
        move4e : "-Ice Beam",

    },

    {
        namea : "Mightyena",
        levela : "LV: 50",
        typea : "Type: Dark",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Swagger",
        move2a : "-Take Down",
        move3a : "-Sucker Punch",
        move4a : "-Crunch",

        nameb : "Shiftry",
        levelb : "LV: 50",
        typeb : "Type: Grass/Dark",
        abilityb: "Ability: Chlorophyll",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Extrasensory",
        move2b : "-Feint Attack",
        move3b : "-Leaf Blade",
        move4b : "-Fake Out",

        namec : "Cacturne",
        levelc : "LV: 50",
        typec : "Type: Grass/Dark",
        abilityc: "Ability: Sand Veil",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Spiky Shield",
        move2c : "-Needle Arm",
        move3c : "-Payback",
        move4c : "-Leech Seed",

        named : "Sharpedo",
        leveld : "LV: 50",
        typed : "Type: Water/Dark",
        abilityd: "Ability: Rough Skin",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Poison Fang",
        move2d : "-Crunch",
        move3d : "-Slash",
        move4d : "-Aqua Jet",

        namee : "Absol",
        levele : "LV: 52",
        typee : "Type: Dark",
        abilitye: "Ability: Super Luck",
        iteme : "Item: None",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Aerial Ace",
        move2e : "-Psycho Cut",
        move3e : "-Slash",
        move4e : "-Night Slash",
    },

    {
        namea : "Dusclops",
        levela : "LV: 51",
        typea : "Type: Ghost",
        abilitya: "Ability: Pressure",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Shadow Punch",
        move2a : "-Future Sight",
        move3a : "-Confuse Ray",
        move4a : "-Curse",

        nameb : "Banette",
        levelb : "LV: 51",
        typeb : "Type: Ghost",
        abilityb: "Ability: Insomnia",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Shadow Ball",
        move2b : "-Feint Attack",
        move3b : "-Will-O-Wisp",
        move4b : "-Spite",

        namec : "Sableye",
        levelc : "LV: 51",
        typec : "Type: Dark/Ghost",
        abilityc: "Ability: Prankster",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Shadow Claw",
        move2c : "-Power Gem",
        move3c : "-Foul Play",
        move4c : "-Fake Out",

        named : "Banette",
        leveld : "LV: 51",
        typed : "Type: Ghost",
        abilityd: "Ability: Insomnia",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Shadow Ball",
        move2d : "-Psychic",
        move3d : "-Toxic",
        move4d : "-Grudge",

        namee : "Dusknoir",
        levele : "LV: 53",
        typee : "Type: Ghost",
        abilitye: "Ability: Pressure",
        iteme : "Item: None",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Hex",
        move2e : "-Fire Punch",
        move3e : "-Thunder Punch",
        move4e : "-Ice Punch",
    },

    {

        namea : "Glalie",
        levela : "LV: 52",
        typea : "Type: Ice",
        abilitya: "Ability: Inner Focus",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Ice Shard",
        move2a : "-Hail",
        move3a : "-Crunch",
        move4a : "-Light Screen",

        nameb : "Froslass",
        levelb : "LV: 52",
        typeb : "Type: Ice/Ghost",
        abilityb: "Ability: Snow Cloak",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Confuse Ray",
        move2b : "-Blizzard",
        move3b : "-Hail",
        move4b : "-Ominous Wind",

        namec : "Glalie",
        levelc : "LV: 52",
        typec : "Type: Ice",
        abilityc: "Ability: Inner Focus",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Protect",
        move2c : "-Ice Shard",
        move3c : "-Hail",
        move4c : "-Freeze-Dry",

        named : "Froslass",
        leveld : "LV: 52",
        typed : "Type: Ice/Ghost",
        abilityd: "Ability: Snow Cloak",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Draining Kiss",
        move2d : "-Blizzard",
        move3d : "-Shadow Ball",
        move4d : "-Hail",

        namee : "Walrein",
        levele : "LV: 54",
        typee : "Type: Ice/Water",
        abilitye: "Ability: Thick Fat",
        iteme : "Item: None",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Blizzard",
        move2e : "-Surf",
        move3e : "-Body Slam",
        move4e : "-Sheer Cold",
    },

    {

        namea : "Altaria",
        levela : "LV: 53",
        typea : "Type: Dragon/Flying",
        abilitya: "Ability: Natural Cure",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Aerial Ace",
        move2a : "-Cotton Guard",
        move3a : "-Moonblast",
        move4a : "-Dragon Pulse",

        nameb : "Flygon",
        levelb : "LV: 53",
        typeb : "Type: Ground/Dragon",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Dragon Claw",
        move2b : "-Earthquake",
        move3b : "-Rock Slide",
        move4b : "-Supersonic",

        namec : "Kingdra",
        levelc : "LV: 53",
        typec : "Type: Water/Dragon",
        abilityc: "Ability: Sniper",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Dragon Pulse",
        move2c : "-Surf",
        move3c : "-Yawn",
        move4c : "-Ice Beam",

        named : "Flygon",
        leveld : "LV: 53",
        typed : "Type: Ground/Dragon",
        abilityd: "Ability: Levitate",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Flamethrower",
        move2d : "-Boomburst",
        move3d : "-Dragon Pulse",
        move4d : "-Screech",

        namee : "Salamence",
        levele : "LV: 55",
        typee : "Type: Dragon/Flying",
        abilitye: "Ability: Intimidate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Dragon Rush",
        move2e : "-Zen Headbutt",
        move3e : "-Crunch",
        move4e : "-Thunder Fang",
    },

    {
        namea : "Skarmory",
        levela : "LV: 57",
        typea : "Type: Steel/Flying",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Toxic",
        move2a : "-Aerial Ace",
        move3a : "-Spikes",
        move4a : "-Steel Wing",

        nameb : "Claydol",
        levelb : "LV: 57",
        typeb : "Type: Ground/Psychic",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Reflect",
        move2b : "-Light Screen",
        move3b : "-Extrasensory",
        move4b : "-Earth Power",

        namec : "Aggron",
        levelc : "LV: 57",
        typec : "Type: Steel/Rock",
        abilityc: "Ability: Sturdy",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Stone Edge",
        move2c : "-Earthquake",
        move3c : "-Iron Tail",
        move4c : "-Dragon Claw",

        named : "Cradily",
        leveld : "LV: 57",
        typed : "Type: Rock/Grass",
        abilityd: "Ability: Suction Cups",
        itemd : "Item: None",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Giga Drain",
        move2d : "-Ancientpower",
        move3d : "-Sludge Bomb",
        move4d : "-Confuse Ray",

        namee : "Armaldo",
        levele : "LV: 57",
        typee : "Type: Rock/Bug",
        abilitye: "Ability: Shell Armor",
        iteme : "Item: None",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-X-Scissor",
        move2e : "-Rock Blast",
        move3e : "-Metal Claw",
        move4e : "-Crush Claw",

        namef : "Metagross",
        levelf : "LV: 59",
        typef : "Type: Steel/Psychic",
        abilityf: "Ability: Clear Body",
        itemf : "Item: Metagrossite",
        hpf : "HP: Unavailable",
        atkf : "Atk: Unavailable",
        deff : "Def: Unavailable",
        spatkf : "Sp. Atk: Unavailable",
        spdeff : "Sp. Def: Unavailable",
        spdf : "Spd: Unavailable",
        move1f : "-Bullet Punch",
        move2f : "-Zen Headbutt",
        move3f : "-Meteor Mash",
        move4f : "-Giga Impact",
    },
]

function displayORASTrainers() {
    let orasTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = oras_trainers [orasTrainer].namea;
    document.querySelector('#level1').textContent = oras_trainers [orasTrainer].levela;
    document.querySelector('#type1').textContent = oras_trainers [orasTrainer].typea;
    document.querySelector('#ability1').textContent= oras_trainers [orasTrainer].abilitya;
    document.querySelector('#item1').textContent = oras_trainers [orasTrainer].itema;
    document.querySelector('#hp1').textContent = oras_trainers [orasTrainer].hpa;
    document.querySelector('#atk1').textContent = oras_trainers [orasTrainer].atka;
    document.querySelector('#def1').textContent = oras_trainers [orasTrainer].defa;
    document.querySelector('#spatk1').textContent = oras_trainers [orasTrainer].spatka;
    document.querySelector('#spdef1').textContent = oras_trainers [orasTrainer].spdefa;
    document.querySelector('#spd1').textContent = oras_trainers [orasTrainer].spda;
    document.querySelector('#move1_1').textContent = oras_trainers [orasTrainer].move1a;
    document.querySelector('#move2_1').textContent = oras_trainers [orasTrainer].move2a;
    document.querySelector('#move3_1').textContent = oras_trainers [orasTrainer].move3a;
    document.querySelector('#move4_1').textContent = oras_trainers [orasTrainer].move4a;

    
    document.querySelector('#name2').textContent = oras_trainers [orasTrainer].nameb;
    document.querySelector('#level2').textContent = oras_trainers [orasTrainer].levelb;
    document.querySelector('#type2').textContent = oras_trainers [orasTrainer].typeb;
    document.querySelector('#ability2').textContent= oras_trainers [orasTrainer].abilityb;
    document.querySelector('#item2').textContent = oras_trainers [orasTrainer].itemb;
    document.querySelector('#hp2').textContent = oras_trainers [orasTrainer].hpb;
    document.querySelector('#atk2').textContent = oras_trainers [orasTrainer].atkb;
    document.querySelector('#def2').textContent = oras_trainers [orasTrainer].defb;
    document.querySelector('#spatk2').textContent = oras_trainers [orasTrainer].spatkb;
    document.querySelector('#spdef2').textContent = oras_trainers [orasTrainer].spdefb;
    document.querySelector('#spd2').textContent = oras_trainers [orasTrainer].spdb;
    document.querySelector('#move1_2').textContent = oras_trainers [orasTrainer].move1b;
    document.querySelector('#move2_2').textContent = oras_trainers [orasTrainer].move2b;
    document.querySelector('#move3_2').textContent = oras_trainers [orasTrainer].move3b;
    document.querySelector('#move4_2').textContent = oras_trainers [orasTrainer].move4b;

    document.querySelector('#name3').textContent = oras_trainers [orasTrainer].namec;
    document.querySelector('#level3').textContent = oras_trainers [orasTrainer].levelc;
    document.querySelector('#type3').textContent = oras_trainers [orasTrainer].typec;
    document.querySelector('#ability3').textContent= oras_trainers [orasTrainer].abilityc;
    document.querySelector('#item3').textContent = oras_trainers [orasTrainer].itemc;
    document.querySelector('#hp3').textContent = oras_trainers [orasTrainer].hpc;
    document.querySelector('#atk3').textContent = oras_trainers [orasTrainer].atkc;
    document.querySelector('#def3').textContent = oras_trainers [orasTrainer].defc;
    document.querySelector('#spatk3').textContent = oras_trainers [orasTrainer].spatkc;
    document.querySelector('#spdef3').textContent = oras_trainers [orasTrainer].spdefc;
    document.querySelector('#spd3').textContent = oras_trainers [orasTrainer].spdc;
    document.querySelector('#move1_3').textContent = oras_trainers [orasTrainer].move1c;
    document.querySelector('#move2_3').textContent = oras_trainers [orasTrainer].move2c;
    document.querySelector('#move3_3').textContent = oras_trainers [orasTrainer].move3c;
    document.querySelector('#move4_3').textContent = oras_trainers [orasTrainer].move4c;

    document.querySelector('#name4').textContent = oras_trainers [orasTrainer].named;
    document.querySelector('#level4').textContent = oras_trainers [orasTrainer].leveld;
    document.querySelector('#type4').textContent = oras_trainers [orasTrainer].typed;
    document.querySelector('#ability4').textContent= oras_trainers [orasTrainer].abilityd;
    document.querySelector('#item4').textContent = oras_trainers [orasTrainer].itemd;
    document.querySelector('#hp4').textContent = oras_trainers [orasTrainer].hpd;
    document.querySelector('#atk4').textContent = oras_trainers [orasTrainer].atkd;
    document.querySelector('#def4').textContent = oras_trainers [orasTrainer].defd;
    document.querySelector('#spatk4').textContent = oras_trainers [orasTrainer].spatkd;
    document.querySelector('#spdef4').textContent = oras_trainers [orasTrainer].spdefd;
    document.querySelector('#spd4').textContent = oras_trainers [orasTrainer].spdd;
    document.querySelector('#move1_4').textContent = oras_trainers [orasTrainer].move1d;
    document.querySelector('#move2_4').textContent = oras_trainers [orasTrainer].move2d;
    document.querySelector('#move3_4').textContent = oras_trainers [orasTrainer].move3d;
    document.querySelector('#move4_4').textContent = oras_trainers [orasTrainer].move4d;

    document.querySelector('#name5').textContent = oras_trainers [orasTrainer].namee;
    document.querySelector('#level5').textContent = oras_trainers [orasTrainer].levele;
    document.querySelector('#type5').textContent = oras_trainers [orasTrainer].typee;
    document.querySelector('#ability5').textContent= oras_trainers [orasTrainer].abilitye;
    document.querySelector('#item5').textContent = oras_trainers [orasTrainer].iteme;
    document.querySelector('#hp5').textContent = oras_trainers [orasTrainer].hpe;
    document.querySelector('#atk5').textContent = oras_trainers [orasTrainer].atke;
    document.querySelector('#def5').textContent = oras_trainers [orasTrainer].defe;
    document.querySelector('#spatk5').textContent = oras_trainers [orasTrainer].spatke;
    document.querySelector('#spdef5').textContent = oras_trainers [orasTrainer].spdefe;
    document.querySelector('#spd5').textContent = oras_trainers [orasTrainer].spde;
    document.querySelector('#move1_5').textContent = oras_trainers [orasTrainer].move1e;
    document.querySelector('#move2_5').textContent = oras_trainers [orasTrainer].move2e;
    document.querySelector('#move3_5').textContent = oras_trainers [orasTrainer].move3e;
    document.querySelector('#move4_5').textContent = oras_trainers [orasTrainer].move4e;

    document.querySelector('#name6').textContent = oras_trainers [orasTrainer].namef;
    document.querySelector('#level6').textContent = oras_trainers [orasTrainer].levelf;
    document.querySelector('#type6').textContent = oras_trainers [orasTrainer].typef;
    document.querySelector('#ability6').textContent= oras_trainers [orasTrainer].abilityf;
    document.querySelector('#item6').textContent = oras_trainers [orasTrainer].itemf;
    document.querySelector('#hp6').textContent = oras_trainers [orasTrainer].hpf;
    document.querySelector('#atk6').textContent = oras_trainers [orasTrainer].atkf;
    document.querySelector('#def6').textContent = oras_trainers [orasTrainer].deff;
    document.querySelector('#spatk6').textContent = oras_trainers [orasTrainer].spatkf;
    document.querySelector('#spdef6').textContent = oras_trainers [orasTrainer].spdeff;
    document.querySelector('#spd6').textContent = oras_trainers [orasTrainer].spdf;
    document.querySelector('#move1_6').textContent = oras_trainers [orasTrainer].move1f;
    document.querySelector('#move2_6').textContent = oras_trainers [orasTrainer].move2f;
    document.querySelector('#move3_6').textContent = oras_trainers [orasTrainer].move3f;
    document.querySelector('#move4_6').textContent = oras_trainers [orasTrainer].move4f;
}

roxanneORAS.addEventListener('click', displayORASTrainers);
brawlyORAS.addEventListener('click', displayORASTrainers);
wattsonORAS.addEventListener('click', displayORASTrainers);
flanneryORAS.addEventListener('click', displayORASTrainers);
normanORAS.addEventListener('click', displayORASTrainers);
winonaORAS.addEventListener('click', displayORASTrainers);
tatelizaORAS.addEventListener('click', displayORASTrainers);
wallaceORAS.addEventListener('click', displayORASTrainers);
sidneyORAS.addEventListener('click', displayORASTrainers);
phoebeORAS.addEventListener('click', displayORASTrainers);
glaciaORAS.addEventListener('click', displayORASTrainers);
drakeORAS.addEventListener('click', displayORASTrainers);
stevenORAS.addEventListener('click', displayORASTrainers);