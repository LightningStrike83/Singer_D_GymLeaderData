let roarkBDSP = document.querySelector ("#roark3");
let gardeniaBDSP = document.querySelector ("#gardenia3");
let mayleneBDSP = document.querySelector ("#maylene3");
let crasherwakeBDSP = document.querySelector ("#crasherwake3");
let fantinaBDSP = document.querySelector ("#fantina3");
let byronBDSP = document.querySelector ("#byron3");
let candiceBDSP = document.querySelector ("#candice3");
let volknerBDSP = document.querySelector ("#volkner3");
let aaronBDSP = document.querySelector ("#aaron3");
let berthaBDSP = document.querySelector ("#bertha3");
let flintBDSP = document.querySelector ("#flint3");
let lucianBDSP = document.querySelector ("#lucian3");
let cynthiaBDSP = document.querySelector ("#cynthia3");

let bdsp_trainers = [
    {
        namea : "Geodude",
        levela : "LV: 12",
        typea : "Type: Rock/Ground",
        abilitya: "Ability: Rock Head",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Stealth Rock",
        move2a : "-Defense Curl",
        move3a : "-Rollout",
        move4a : "",

        nameb : "Onix",
        levelb : "LV: 12",
        typeb : "Type: Rock/Ground",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Stealth Rock",
        move2b : "-Rock Throw",
        move3b : "-Bind",
        move4b : "",

        namec : "Cranidos",
        levelc : "LV: 14",
        typec : "Type: Rock",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: None",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Headbutt",
        move2c : "-Bulldoze",
        move3c : "-Leer",
        move4c : "",
    },

    {
        namea : "Cherubi",
        levela : "LV: 19",
        typea : "Type: Grass",
        abilitya: "Ability: Chlorophyll",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Grass Knot",
        move2a : "-Growth",
        move3a : "-Dazzling Gleam",
        move4a : "-Safeguard",

        nameb : "Turtwig",
        levelb : "LV: 19",
        typeb : "Type: Grass",
        abilityb: "Ability: Overgrow",
        itemb : "Item: Miracle Seed",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Grass Knot",
        move2b : "-Razor Leaf",
        move3b : "-Reflect",
        move4b : "-Work Up",

        namec : "Roserade",
        levelc : "LV: 22",
        typec : "Type: Grass/Poison",
        abilityc: "Ability: Technician",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Grass Knot",
        move2c : "-Petal Blizzard",
        move3c : "-Poison Sting",
        move4c : "-Stun Spore",
    },

    {
        namea : "Meditite",
        levela : "LV: 27",
        typea : "Type: Psychic/Fighting",
        abilitya: "Ability: Pure Power",
        itema : "Item: Light Clay",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Drain Punch",
        move2a : "-Light Screen",
        move3a : "-Flash",
        move4a : "-Bulk Up",

        nameb : "Machoke",
        levelb : "LV: 27",
        typeb : "Type: Fighting",
        abilityb: "Ability: Guts",
        itemb : "Item: Expert Belt",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Low Sweep",
        move2b : "-Knock Off",
        move3b : "-Rock Tomb",
        move4b : "-Bulldoze",

        namec : "Lucario",
        levelc : "LV: 30",
        typec : "Type: Fighting/Steel",
        abilityc: "Ability: Steadfast",
        itemc : "Item: Big Root",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Drain Punch",
        move2c : "-Screech",
        move3c : "-Metal Claw",
        move4c : "-Bulk Up",
    },

    {
        namea : "Gyarados",
        levela : "LV: 27",
        typea : "Type: Water/Flying",
        abilitya: "Ability: Intimidate",
        itema : "Item: Wide Lens",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Brine",
        move2a : "-Ice Fang",
        move3a : "-Crunch",
        move4a : "-Flail",

        nameb : "Quagsire",
        levelb : "LV: 27",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Damp",
        itemb : "Item: Damp Rock",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Rain Dance",
        move2b : "-Haze",
        move3b : "-Mud Shot",
        move4b : "-Scald",

        namec : "Floatzel",
        levelc : "LV: 30",
        typec : "Type: Water",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Brine",
        move2c : "-Ice Fang",
        move3c : "-Bite",
        move4c : "-Aqua Jet",
    },

    {
        namea : "Drifblim",
        levela : "LV: 32",
        typea : "Type: Ghost/Flying",
        abilitya: "Ability: Aftermath",
        itema : "Item: Zoom Lens",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Strength Sap",
        move2a : "-Hex",
        move3a : "-Fly",
        move4a : "-Will-O-Wisp",

        nameb : "Gengar",
        levelb : "LV: 34",
        typeb : "Type: Ghost/Poison",
        abilityb: "Ability: Cursed Body",
        itemb : "Item: Colbur Berry",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Shadow Claw",
        move2b : "-Confuse Ray",
        move3b : "-Sludge Bomb",
        move4b : "-Dazzling Gleam",

        namec : "Mismagius",
        levelc : "LV: 36",
        typec : "Type: Ghost",
        abilityc: "Ability: Levitate",
        itemc : "Item: Expert Belt",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Confuse Ray",
        move2c : "-Phantom Force",
        move3c : "-Dazzling Gleam",
        move4c : "-Magical Leaf",
    },

    {
        namea : "Bronzor",
        levela : "LV: 36",
        typea : "Type: Steel/Psychic",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Confuse Ray",
        move2a : "-Sandstorm",
        move3a : "-Trick Room",
        move4a : "-Flash Cannon",

        nameb : "Steelix",
        levelb : "LV: 36",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Sturdy",
        itemb : "Item: Soft Sand",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Thunder Fang",
        move2b : "-Earthquake",
        move3b : "-Sandstorm",
        move4b : "-Gyro Ball",

        namec : "Bastiodon",
        levelc : "LV: 39",
        typec : "Type: Rock/Steel",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Iron Defense",
        move2c : "-Thunderbolt",
        move3c : "-Stone Edge",
        move4c : "-Flash Cannon",
    },

    {
        namea : "Snover",
        levela : "LV: 38",
        typea : "Type: Grass/Ice",
        abilitya: "Ability: Snow Warning",
        itema : "Item: Icy Rock",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Mist",
        move2a : "-Razor Leaf",
        move3a : "-Water Pulse",
        move4a : "-Avalanche",

        nameb : "Sneasel",
        levelb : "LV: 38",
        typeb : "Type: Dark/Ice",
        abilityb: "Ability: Pickpocket",
        itemb : "Item: Chople Berry",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Metal Claw",
        move2b : "-Hone Claws",
        move3b : "-Dig",
        move4b : "-Avalanche",

        namec : "Medicham",
        levelc : "LV: 40",
        typec : "Type: Fightning/Psychic",
        abilityc: "Ability: Pure Power",
        itemc : "Item: Expert Belt",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Ice Punch",
        move2c : "-Bulk Up",
        move3c : "-Brick Break",
        move4c : "-Rock Slide",

        named : "Abomasnow",
        leveld : "LV: 42",
        typed : "Type: Grass/Ice",
        abilityd: "Ability: Snow Warning",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Aurora Veil",
        move2d : "-Giga Drain",
        move3d : "-Earthquake",
        move4d : "-Blizzard",
    },

    {
        namea : "Raichu",
        levela : "LV: 46",
        typea : "Type: Electric",
        abilitya: "Ability: Static",
        itema : "Item: Shuca Berry",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Nuzzle",
        move2a : "-Volt Switch",
        move3a : "-Surf",
        move4a : "-Charge Beam",

        nameb : "Ambipom",
        levelb : "LV: 47",
        typeb : "Type: Normal",
        abilityb: "Ability: Technician",
        itemb : "Item: Chople Berry",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Fake Out",
        move2b : "-Thundebolt",
        move3b : "-Double Hit",
        move4b : "-Last Resort",

        namec : "Octillery",
        levelc : "LV: 47",
        typec : "Type: Water",
        abilityc: "Ability: Sniper",
        itemc : "Item: Expert Belt",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Octazooka",
        move2c : "-Focus Energy",
        move3c : "-Charge Beam",
        move4c : "-Aurora Beam",

        named : "Luxray",
        leveld : "LV: 49",
        typed : "Type: Electric",
        abilityd: "Ability: Intimidate",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Thunder Fang",
        move2d : "-Ice Fang",
        move3d : "-Crunch",
        move4d : "-Iron Tail",
    },

    {
        namea : "Dustox",
        levela : "LV: 53",
        typea : "Type: Bug/Poison",
        abilitya: "Ability: Shield Dust",
        itema : "Item: Black Sludge",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Toxic",
        move2a : "-Bug Buzz",
        move3a : "-Moonlight",
        move4a : "-Light Screen",

        nameb : "Beautifly",
        levelb : "LV: 53",
        typeb : "Type: Bug/Flying",
        abilityb: "Ability: Swarm",
        itemb : "Item: Wise Glasses",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Bug Buzz",
        move2b : "-Shadow Ball",
        move3b : "-Psychic",
        move4b : "-Quiver Dance",

        namec : "Vespiquen",
        levelc : "LV: 54",
        typec : "Type: Bug/Flying",
        abilityc: "Ability: Unnerve",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Acrobatics",
        move2c : "-Attack Order",
        move3c : "-Aerial Ace",
        move4c : "-Defend Order",

        named : "Heracross",
        leveld : "LV: 54",
        typed : "Type: Bug/Fighting",
        abilityd: "Ability: Guts",
        itemd : "Item: Flame Orb",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Earthquake",
        move2d : "-Rock Slide",
        move3d : "-Facade",
        move4d : "-Brick Break",

        namee : "Drapion",
        levele : "LV: 57",
        typee : "Type: Poison/Dark",
        abilitye: "Ability: Sniper",
        iteme : "Item: Scope Lens",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Cross Poison",
        move2e : "-Night Slash",
        move3e : "-Earthquake",
        move4e : "-X-Scissor",
    },

    {
        namea : "Quagsire",
        levela : "LV: 55",
        typea : "Type: Water/Ground",
        abilitya: "Ability: Water Absorb",
        itema : "Item: Leftovers",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Recover",
        move2a : "-Toxic",
        move3a : "-Earthquake",
        move4a : "-Surf",

        nameb : "Sudowoodo",
        levelb : "LV: 56",
        typeb : "Type: Rock",
        abilityb: "Ability: Rock Head",
        itemb : "Item: Sitrus Berry",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Double-Edge",
        move2b : "-Rock Slide",
        move3b : "-Sucker Punch",
        move4b : "-Low Kick",

        namec : "Golem",
        levelc : "LV: 56",
        typec : "Type: Rock/Ground",
        abilityc: "Ability: Sturdy",
        itemc : "Item: Soft Sand",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Rock Polish",
        move2c : "-Heavy Slam",
        move3c : "-Earthquake",
        move4c : "-Stone Edge",

        named : "Whiscash",
        leveld : "LV: 55",
        typed : "Type: Water/Ground",
        abilityd: "Ability: Hydration",
        itemd : "Item: Rindo Berry",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Bulldoze",
        move2d : "-Ice Beam",
        move3d : "-Belch",
        move4d : "-Hydro Pump",

        namee : "Hippowdon",
        levele : "LV: 59",
        typee : "Type: Ground",
        abilitye: "Ability: Sand Stream",
        iteme : "Item: Chesto Berry",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Ice Fang",
        move2e : "-Earthquake",
        move3e : "-Crunch",
        move4e : "-Rest",
    },

    {
        namea : "Rapidash",
        levela : "LV: 58",
        typea : "Type: Fire",
        abilitya: "Ability: Flame Body",
        itema : "Item: Wide Lens",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Flame Charge",
        move2a : "-Iron Tail",
        move3a : "-Poison Jab",
        move4a : "-Hypnosis",

        nameb : "Steelix",
        levelb : "LV: 57",
        typeb : "Type: Steel/Ground",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: Life Orb",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Thunder Fang",
        move2b : "-Fire Fang",
        move3b : "-Iron Tail",
        move4b : "-Crunch",

        namec : "Drifblim",
        levelc : "LV: 58",
        typec : "Type: Ghost/Flying",
        abilityc: "Ability: Unburden",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Strength Sap",
        move2c : "-Minimize",
        move3c : "-Baton Bass",
        move4c : "-Will-O-Wisp",

        named : "Lopunny",
        leveld : "LV: 57",
        typed : "Type: Normal",
        abilityd: "Ability: Cute Charm",
        itemd : "Item: Leftovers",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Mirror Coat",
        move2d : "-Hi Jump Kick",
        move3d : "-Quick Attack",
        move4d : "-Fire Punch",

        namee : "Infernape",
        levele : "LV: 61",
        typee : "Type: Fire/Fighting",
        abilitye: "Ability: Iron Fist",
        iteme : "Item: Focus Sash",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Fire Punch",
        move2e : "-Thunder Punch",
        move3e : "-Close Combat",
        move4e : "-Mach Punch",
    },

    {
        namea : "Mr. Mime",
        levela : "LV: 59",
        typea : "Type: Psychic/Fairy",
        abilitya: "Ability: Filter",
        itema : "Item: Light Clay",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Light Screen",
        move2a : "-Reflect",
        move3a : "-Psychic",
        move4a : "-Dazzling Gleam",

        nameb : "Girafarig",
        levelb : "LV: 59",
        typeb : "Type: Normal/Psychic",
        abilityb: "Ability: Sap Sipper",
        itemb : "Item: Mental Herb",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Light Screen",
        move2b : "-Psychic",
        move3b : "-Thundebolt",
        move4b : "-Trick Room",

        namec : "Medicham",
        levelc : "LV: 60",
        typec : "Type: Psychic/Fightning",
        abilityc: "Ability: Pure Power",
        itemc : "Item: Muscle Band",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Zen Headbutt",
        move2c : "-Hi Jump Kick",
        move3c : "-Thunder Punch",
        move4c : "-Ice Punch",

        named : "Alakazam",
        leveld : "LV: 60",
        typed : "Type: Psychic",
        abilityd: "Ability: Magic Guard",
        itemd : "Item: Life Orb",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Nasty Plot",
        move2d : "-Psychic",
        move3d : "-Future Sight",
        move4d : "-Shock Wave",

        namee : "Bronzong",
        levele : "LV: 63",
        typee : "Type: Steel/Psychic",
        abilitye: "Ability: Levitate",
        iteme : "Item: Sitrus Berry",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Gyro Ball",
        move2e : "-Earthquake",
        move3e : "-Payback",
        move4e : "-Trick Room",
    },

    {
        namea : "Spiritomb",
        levela : "LV: 61",
        typea : "Type: Ghost/Dark",
        abilitya: "Ability: Pressure",
        itema : "Item: Sitrus Berry",
        hpa : "HP: Unavailable",
        atka : "Atk: Unavailable",
        defa : "Def: Unavailable",
        spatka : "Sp. Atk: Unavailable",
        spdefa : "Sp. Def: Unavailable",
        spda : "Spd: Unavailable",
        move1a : "-Shadow Ball",
        move2a : "-Dark Pulse",
        move3a : "-Psychic",
        move4a : "-Sucker Punch",

        nameb : "Roserade",
        levelb : "LV: 60",
        typeb : "Type: Grass/Poison",
        abilityb: "Ability: Poison Point",
        itemb : "Item: Expert Belt",
        hpb : "HP: Unavailable",
        atkb : "Atk: Unavailable",
        defb : "Def: Unavailable",
        spatkb : "Sp. Atk: Unavailable",
        spdefb : "Sp. Def: Unavailable",
        spdb : "Spd: Unavailable",
        move1b : "-Dazzling Gleam",
        move2b : "-Shadow Ball",
        move3b : "-Sludge Bomb",
        move4b : "-Energy Ball",

        namec : "Gastrodon",
        levelc : "LV: 60",
        typec : "Type: Water/Ground",
        abilityc: "Ability: Storm Drain",
        itemc : "Item: Leftovers",
        hpc : "HP: Unavailable",
        atkc : "Atk: Unavailable",
        defc : "Def: Unavailable",
        spatkc : "Sp. Atk: Unavailable",
        spdefc : "Sp. Def: Unavailable",
        spdc : "Spd: Unavailable",
        move1c : "-Scald",
        move2c : "-Earthquake",
        move3c : "-Sludge Bomb",
        move4c : "-Rock Tomb",

        named : "Lucario",
        leveld : "LV: 63",
        typed : "Type: Fighting/Steel",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: Wise Glasses",
        hpd : "HP: Unavailable",
        atkd : "Atk: Unavailable",
        defd : "Def: Unavailable",
        spatkd : "Sp. Atk: Unavailable",
        spdefd : "Sp. Def: Unavailable",
        spdd : "Spd: Unavailable",
        move1d : "-Aura Sphere",
        move2d : "-Dragon Pulse",
        move3d : "-Flash Cannon",
        move4d : "-Nasty Plot",

        namee : "Milotic",
        levele : "LV: 63",
        typee : "Type: Water",
        abilitye: "Ability: Marvel Scale",
        iteme : "Item: Flame Orb",
        hpe : "HP: Unavailable",
        atke : "Atk: Unavailable",
        defe : "Def: Unavailable",
        spatke : "Sp. Atk: Unavailable",
        spdefe : "Sp. Def: Unavailable",
        spde : "Spd: Unavailable",
        move1e : "-Recover",
        move2e : "-Mirror Coat",
        move3e : "-Ice Beam",
        move4e : "-Scald",

        namef : "Garchomp",
        levelf : "LV: 66",
        typef : "Type: Dragon/Ground",
        abilityf: "Ability: Rough Skin",
        itemf : "Item: Yache Berry",
        hpf : "HP: Unavailable",
        atkf : "Atk: Unavailable",
        deff : "Def: Unavailable",
        spatkf : "Sp. Atk: Unavailable",
        spdeff : "Sp. Def: Unavailable",
        spdf : "Spd: Unavailable",
        move1f : "-Dragon Claw",
        move2f : "-Earthquake",
        move3f : "-Swords Dance",
        move4f : "-Poison Jab",
    },
]

function displayBDSPTrainers() {
    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showBDSPImages(newTrainerId);
        showPokemonBDSPImages(newTrainerId);
    }

    let bdspTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = bdsp_trainers [bdspTrainer].namea;
    document.querySelector('#level1').textContent = bdsp_trainers [bdspTrainer].levela;
    document.querySelector('#type1').textContent = bdsp_trainers [bdspTrainer].typea;
    document.querySelector('#ability1').textContent= bdsp_trainers [bdspTrainer].abilitya;
    document.querySelector('#item1').textContent = bdsp_trainers [bdspTrainer].itema;
    document.querySelector('#hp1').textContent = bdsp_trainers [bdspTrainer].hpa;
    document.querySelector('#atk1').textContent = bdsp_trainers [bdspTrainer].atka;
    document.querySelector('#def1').textContent = bdsp_trainers [bdspTrainer].defa;
    document.querySelector('#spatk1').textContent = bdsp_trainers [bdspTrainer].spatka;
    document.querySelector('#spdef1').textContent = bdsp_trainers [bdspTrainer].spdefa;
    document.querySelector('#spd1').textContent = bdsp_trainers [bdspTrainer].spda;
    document.querySelector('#move1_1').textContent = bdsp_trainers [bdspTrainer].move1a;
    document.querySelector('#move2_1').textContent = bdsp_trainers [bdspTrainer].move2a;
    document.querySelector('#move3_1').textContent = bdsp_trainers [bdspTrainer].move3a;
    document.querySelector('#move4_1').textContent = bdsp_trainers [bdspTrainer].move4a;

    
    document.querySelector('#name2').textContent = bdsp_trainers [bdspTrainer].nameb;
    document.querySelector('#level2').textContent = bdsp_trainers [bdspTrainer].levelb;
    document.querySelector('#type2').textContent = bdsp_trainers [bdspTrainer].typeb;
    document.querySelector('#ability2').textContent= bdsp_trainers [bdspTrainer].abilityb;
    document.querySelector('#item2').textContent = bdsp_trainers [bdspTrainer].itemb;
    document.querySelector('#hp2').textContent = bdsp_trainers [bdspTrainer].hpb;
    document.querySelector('#atk2').textContent = bdsp_trainers [bdspTrainer].atkb;
    document.querySelector('#def2').textContent = bdsp_trainers [bdspTrainer].defb;
    document.querySelector('#spatk2').textContent = bdsp_trainers [bdspTrainer].spatkb;
    document.querySelector('#spdef2').textContent = bdsp_trainers [bdspTrainer].spdefb;
    document.querySelector('#spd2').textContent = bdsp_trainers [bdspTrainer].spdb;
    document.querySelector('#move1_2').textContent = bdsp_trainers [bdspTrainer].move1b;
    document.querySelector('#move2_2').textContent = bdsp_trainers [bdspTrainer].move2b;
    document.querySelector('#move3_2').textContent = bdsp_trainers [bdspTrainer].move3b;
    document.querySelector('#move4_2').textContent = bdsp_trainers [bdspTrainer].move4b;

    document.querySelector('#name3').textContent = bdsp_trainers [bdspTrainer].namec;
    document.querySelector('#level3').textContent = bdsp_trainers [bdspTrainer].levelc;
    document.querySelector('#type3').textContent = bdsp_trainers [bdspTrainer].typec;
    document.querySelector('#ability3').textContent= bdsp_trainers [bdspTrainer].abilityc;
    document.querySelector('#item3').textContent = bdsp_trainers [bdspTrainer].itemc;
    document.querySelector('#hp3').textContent = bdsp_trainers [bdspTrainer].hpc;
    document.querySelector('#atk3').textContent = bdsp_trainers [bdspTrainer].atkc;
    document.querySelector('#def3').textContent = bdsp_trainers [bdspTrainer].defc;
    document.querySelector('#spatk3').textContent = bdsp_trainers [bdspTrainer].spatkc;
    document.querySelector('#spdef3').textContent = bdsp_trainers [bdspTrainer].spdefc;
    document.querySelector('#spd3').textContent = bdsp_trainers [bdspTrainer].spdc;
    document.querySelector('#move1_3').textContent = bdsp_trainers [bdspTrainer].move1c;
    document.querySelector('#move2_3').textContent = bdsp_trainers [bdspTrainer].move2c;
    document.querySelector('#move3_3').textContent = bdsp_trainers [bdspTrainer].move3c;
    document.querySelector('#move4_3').textContent = bdsp_trainers [bdspTrainer].move4c;

    document.querySelector('#name4').textContent = bdsp_trainers [bdspTrainer].named;
    document.querySelector('#level4').textContent = bdsp_trainers [bdspTrainer].leveld;
    document.querySelector('#type4').textContent = bdsp_trainers [bdspTrainer].typed;
    document.querySelector('#ability4').textContent= bdsp_trainers [bdspTrainer].abilityd;
    document.querySelector('#item4').textContent = bdsp_trainers [bdspTrainer].itemd;
    document.querySelector('#hp4').textContent = bdsp_trainers [bdspTrainer].hpd;
    document.querySelector('#atk4').textContent = bdsp_trainers [bdspTrainer].atkd;
    document.querySelector('#def4').textContent = bdsp_trainers [bdspTrainer].defd;
    document.querySelector('#spatk4').textContent = bdsp_trainers [bdspTrainer].spatkd;
    document.querySelector('#spdef4').textContent = bdsp_trainers [bdspTrainer].spdefd;
    document.querySelector('#spd4').textContent = bdsp_trainers [bdspTrainer].spdd;
    document.querySelector('#move1_4').textContent = bdsp_trainers [bdspTrainer].move1d;
    document.querySelector('#move2_4').textContent = bdsp_trainers [bdspTrainer].move2d;
    document.querySelector('#move3_4').textContent = bdsp_trainers [bdspTrainer].move3d;
    document.querySelector('#move4_4').textContent = bdsp_trainers [bdspTrainer].move4d;

    document.querySelector('#name5').textContent = bdsp_trainers [bdspTrainer].namee;
    document.querySelector('#level5').textContent = bdsp_trainers [bdspTrainer].levele;
    document.querySelector('#type5').textContent = bdsp_trainers [bdspTrainer].typee;
    document.querySelector('#ability5').textContent= bdsp_trainers [bdspTrainer].abilitye;
    document.querySelector('#item5').textContent = bdsp_trainers [bdspTrainer].iteme;
    document.querySelector('#hp5').textContent = bdsp_trainers [bdspTrainer].hpe;
    document.querySelector('#atk5').textContent = bdsp_trainers [bdspTrainer].atke;
    document.querySelector('#def5').textContent = bdsp_trainers [bdspTrainer].defe;
    document.querySelector('#spatk5').textContent = bdsp_trainers [bdspTrainer].spatke;
    document.querySelector('#spdef5').textContent = bdsp_trainers [bdspTrainer].spdefe;
    document.querySelector('#spd5').textContent = bdsp_trainers [bdspTrainer].spde;
    document.querySelector('#move1_5').textContent = bdsp_trainers [bdspTrainer].move1e;
    document.querySelector('#move2_5').textContent = bdsp_trainers [bdspTrainer].move2e;
    document.querySelector('#move3_5').textContent = bdsp_trainers [bdspTrainer].move3e;
    document.querySelector('#move4_5').textContent = bdsp_trainers [bdspTrainer].move4e;

    document.querySelector('#name6').textContent = bdsp_trainers [bdspTrainer].namef;
    document.querySelector('#level6').textContent = bdsp_trainers [bdspTrainer].levelf;
    document.querySelector('#type6').textContent = bdsp_trainers [bdspTrainer].typef;
    document.querySelector('#ability6').textContent= bdsp_trainers [bdspTrainer].abilityf;
    document.querySelector('#item6').textContent = bdsp_trainers [bdspTrainer].itemf;
    document.querySelector('#hp6').textContent = bdsp_trainers [bdspTrainer].hpf;
    document.querySelector('#atk6').textContent = bdsp_trainers [bdspTrainer].atkf;
    document.querySelector('#def6').textContent = bdsp_trainers [bdspTrainer].deff;
    document.querySelector('#spatk6').textContent = bdsp_trainers [bdspTrainer].spatkf;
    document.querySelector('#spdef6').textContent = bdsp_trainers [bdspTrainer].spdeff;
    document.querySelector('#spd6').textContent = bdsp_trainers [bdspTrainer].spdf;
    document.querySelector('#move1_6').textContent = bdsp_trainers [bdspTrainer].move1f;
    document.querySelector('#move2_6').textContent = bdsp_trainers [bdspTrainer].move2f;
    document.querySelector('#move3_6').textContent = bdsp_trainers [bdspTrainer].move3f;
    document.querySelector('#move4_6').textContent = bdsp_trainers [bdspTrainer].move4f;
}

function showBDSPImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/bdsp/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonBDSPImages(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/bdsp/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/bdsp/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/bdsp/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/bdsp/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/bdsp/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/bdsp/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

roarkBDSP.addEventListener('click', displayBDSPTrainers);
gardeniaBDSP.addEventListener('click', displayBDSPTrainers);
mayleneBDSP.addEventListener('click', displayBDSPTrainers);
crasherwakeBDSP.addEventListener('click', displayBDSPTrainers);
fantinaBDSP.addEventListener('click', displayBDSPTrainers);
byronBDSP.addEventListener('click', displayBDSPTrainers);
candiceBDSP.addEventListener('click', displayBDSPTrainers);
volknerBDSP.addEventListener('click', displayBDSPTrainers);
aaronBDSP.addEventListener('click', displayBDSPTrainers);
berthaBDSP.addEventListener('click', displayBDSPTrainers);
flintBDSP.addEventListener('click', displayBDSPTrainers);
lucianBDSP.addEventListener('click', displayBDSPTrainers);
cynthiaBDSP.addEventListener('click', displayBDSPTrainers);