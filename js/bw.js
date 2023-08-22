let cilanBW = document.querySelector ("#cilan1");
let chiliBW = document.querySelector ("#cress1");
let cressBW = document.querySelector ("#chili1");
let lenoraBW = document.querySelector ("#lenora1");
let burghBW = document.querySelector ("#burgh1");
let elesaBW = document.querySelector ("#elesa1");
let clayBW = document.querySelector ("#clay1");
let skylaBW = document.querySelector ("#skyla1");
let brycenBW = document.querySelector ("#brycen1");
let draydenBW = document.querySelector ("#drayden1");
let irisBW = document.querySelector ("#iris1");
let shauntalBW = document.querySelector ("#shauntal1");
let marshalBW = document.querySelector ("#marshal1");
let grimsleyBW = document.querySelector ("#grimsley1");
let caitlinBW = document.querySelector ("#caitlin1");
let nBBW = document.querySelector ("#n1_b");
let nWBW = document.querySelector ("#n1_w");
let ghetsisBW = document.querySelector ("#ghetsis1");
let cynthiaBW = document.querySelector ("#cynthia3");

let bw_trainers = [
    {
        namea : "Lillipup",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Pickup",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Bite",
        move2a : "-Work Up",
        move3a : "",
        move4a : "",

        nameb : "Pansage",
        levelb : "LV: 14",
        typeb : "Type: Grass",
        abilityb: "Ability: Gluttony",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Vine Whip",
        move2b : "-Work Up",
        move3b : "",
        move4b : "",
    },

    {
        namea : "Lillipup",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Pickup",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Bite",
        move2a : "-Work Up",
        move3a : "",
        move4a : "",

        nameb : "Pansear",
        levelb : "LV: 14",
        typeb : "Type: Fire",
        abilityb: "Ability: Gluttony",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Incinerate",
        move2b : "-Work Up",
        move3b : "",
        move4b : "",
    },

    {
        namea : "Lillipup",
        levela : "LV: 12",
        typea : "Type: Normal",
        abilitya: "Ability: Pickup",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Bite",
        move2a : "-Work Up",
        move3a : "",
        move4a : "",

        nameb : "Panpour",
        levelb : "LV: 14",
        typeb : "Type: Water",
        abilityb: "Ability: Gluttony",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Water Gun",
        move2b : "-Work Up",
        move3b : "",
        move4b : "",
    },

    {
        namea : "Herdier",
        levela : "LV: 18",
        typea : "Type: Normal",
        abilitya: "Ability: Intimidate",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Take Down",
        move2a : "-Bite",
        move3a : "-Retaliate",
        move4a : "-Leer",

        nameb : "Watchog",
        levelb : "LV: 20",
        typeb : "Type: Normal",
        abilityb: "Ability: Illuminate",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Leer",
        move2b : "-Crunch",
        move3b : "-Retaliate",
        move4b : "-Hypnosis",
    },

    {
        namea : "Whirlipede",
        levela : "LV: 21",
        typea : "Type: Bug/Poison",
        abilitya: "Ability: Swarm",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Screech",
        move2a : "-Pursuit",
        move3a : "-Poison Tail",
        move4a : "-Struggle Bug",

        nameb : "Dwebble",
        levelb : "LV: 21",
        typeb : "Type: Bug/Rock",
        abilityb: "Ability: Shell Armor",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Sand Attack",
        move2b : "-Feint Attack",
        move3b : "-Smack Down",
        move4b : "-Struggle Bug",

        namec : "Leavanny",
        levelc : "LV: 23",
        typec : "Type: Bug/Grass",
        abilityc: "Ability: Swarm",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Protect",
        move2c : "-String Shot",
        move3c : "-Razor Leaf",
        move4c : "-Struggle Bug",
    },

    {
        namea : "Emolga",
        levela : "LV: 25",
        typea : "Type: Electic/Flying",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Volt Switch",
        move2a : "-Quick Attack",
        move3a : "-Pursuit",
        move4a : "-Aerial Ace",

        nameb : "Emolga",
        levelb : "LV: 25",
        typeb : "Type: Electric/Flying",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Volt Switch",
        move2b : "-Quick Attack",
        move3b : "-Pursuit",
        move4b : "-Aerial Ace",

        namec : "Zebstrika",
        levelc : "LV: 27",
        typec : "Type: Electric",
        abilityc: "Ability: Lightning Rod",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Quick Attack",
        move2c : "-Volt Switch",
        move3c : "-Flame Charge",
        move4c : "-Spark",
    },

    {
        namea : "Krokorok",
        levela : "LV: 29",
        typea : "Type: Ground/Dark",
        abilitya: "Ability: Moxie",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Bulldoze",
        move2a : "-Torment",
        move3a : "-Crunch",
        move4a : "-Swagger",

        nameb : "Palpitoad",
        levelb : "LV: 29",
        typeb : "Type: Water/Ground",
        abilityb: "Ability: Swift Swim",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Bulldoze",
        move2b : "-Aqua Ring",
        move3b : "-Bubble Beam",
        move4b : "-Muddy Water",

        namec : "Excadrill",
        levelc : "LV: 31",
        typec : "Type: Ground/Steel",
        abilityc: "Ability: Sand Rush",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Bulldoze",
        move2c : "-Slash",
        move3c : "-Rock Slide",
        move4c : "-Hone Claws",
    },

    {
        namea : "Swoobat",
        levela : "LV: 33",
        typea : "Type: Psychic/Flying",
        abilitya: "Ability: Unaware",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Acrobatics",
        move2a : "-Heart Stamp",
        move3a : "-Assurance",
        move4a : "-Amnesia",

        nameb : "Unfezant",
        levelb : "LV: 33",
        typeb : "Type: Normal/Flying",
        abilityb: "Ability: Big Pecks",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Quick Attack",
        move2b : "-Leer",
        move3b : "-Air Slash",
        move4b : "-Razor Wind",

        namec : "Swanna",
        levelc : "LV: 35",
        typec : "Type: Water/Flying",
        abilityc: "Ability: Keen Eye",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Air Slash",
        move2c : "-Bubble Beam",
        move3c : "-Aerial Ace",
        move4c : "-Aqua Ring",
    },

    {
        namea : "Vanillish",
        levela : "LV: 37",
        typea : "Type: Ice",
        abilitya: "Ability: Ice Body",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Acid Armor",
        move2a : "-Astonish",
        move3a : "-Mirror Shot",
        move4a : "-Frost Breath",

        nameb : "Cryogonal",
        levelb : "LV: 37",
        typeb : "Type: Ice",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Reflect",
        move2b : "-Rapid Spin",
        move3b : "-Aurora Beam",
        move4b : "-Frost Breath",

        namec : "Beartic",
        levelc : "LV: 39",
        typec : "Type: Ice",
        abilityc: "Ability: Snow Cloak",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Swagger",
        move2c : "-Brine",
        move3c : "-Slash",
        move4c : "-Icicle Crash",
    },

    {
        namea : "Fraxure",
        levela : "LV: 41",
        typea : "Type: Dragon",
        abilitya: "Ability: Rivalry",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Dragon Dance",
        move2a : "-Dragon Rage",
        move3a : "-Assurance",
        move4a : "-Dragon Tail",

        nameb : "Druddigon",
        levelb : "LV: 41",
        typeb : "Type: Dragon",
        abilityb: "Ability: Rough Skin",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Revenge",
        move2b : "-Chip Away",
        move3b : "-Night Slash",
        move4b : "-Dragon Tail",

        namec : "Haxorus",
        levelc : "LV: 43",
        typec : "Type: Dragon",
        abilityc: "Ability: Rivalry",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Dragon Dance",
        move2c : "-Assurance",
        move3c : "-Slash",
        move4c : "-Dragon Tail",
    },

    {
        namea : "Fraxure",
        levela : "LV: 41",
        typea : "Type: Dragon",
        abilitya: "Ability: Rivalry",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Dragon Dance",
        move2a : "-Dragon Rage",
        move3a : "-Assurance",
        move4a : "-Dragon Tail",

        nameb : "Druddigon",
        levelb : "LV: 41",
        typeb : "Type: Dragon",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Revenge",
        move2b : "-Chip Away",
        move3b : "-Night Slash",
        move4b : "-Dragon Tail",

        namec : "Haxorus",
        levelc : "LV: 43",
        typec : "Type: Dragon",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Dragon Dance",
        move2c : "-Assurance",
        move3c : "-Slash",
        move4c : "-Dragon Tail",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 48",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Psychic",
        move2a : "-Will-O-Wisp",
        move3a : "-Shadow Ball",
        move4a : "-Grass Knot",

        nameb : "Jellicent",
        levelb : "LV: 48",
        typeb : "Type: Water/Ghost",
        abilityb: "Ability: Cursed Body",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Surf",
        move2b : "-Shadow Ball",
        move3b : "-Brine",
        move4b : "-Energy Ball",

        namec : "Golurk",
        levelc : "LV: 48",
        typec : "Type: Ghost/Ground",
        abilityc: "Ability: Iron Fist",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Earthquake",
        move2c : "-Shadow Punch",
        move3c : "-Brick Break",
        move4c : "-Curse",

        named : "Chandelure",
        leveld : "LV: 50",
        typed : "Type: Ghost/Fire",
        abilityd: "Ability: Flame Body",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Fire Blast",
        move2d : "-Shadow Ball",
        move3d : "-Psychic",
        move4d : "-Payback",
    },

    {
        namea : "Throh",
        levela : "LV: 48",
        typea : "Type: Fighting",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Stone Edge",
        move2a : "-Payback",
        move3a : "-Bulldoze",
        move4a : "-Storm Throw",

        nameb : "Sawk",
        levelb : "LV: 48",
        typeb : "Type: Fighting",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Stone Edge",
        move2b : "-Karate Chop",
        move3b : "-Grass Knot",
        move4b : "-Retaliate",

        namec : "Conkeldurr",
        levelc : "LV: 48",
        typec : "Type: Fighting",
        abilityc: "Ability: Sheer Force",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Stone Edge",
        move2c : "-Hammer Arm",
        move3c : "-Retaliate",
        move4c : "-Grass Knot",

        named : "Mienshao",
        leveld : "LV: 50",
        typed : "Type: Fighting",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-U-Turn",
        move2d : "-Jump Kick",
        move3d : "-Rock Slide",
        move4d : "-Retaliate",
    },

    {
        namea : "Scrafty",
        levela : "LV: 48",
        typea : "Type: Dark/Fighting",
        abilitya: "Ability: Moxie",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Sand Attack",
        move2a : "-Crunch",
        move3a : "-Poison Jab",
        move4a : "-Brick Break",

        nameb : "Krookodile",
        levelb : "LV: 48",
        typeb : "Type: Ground/Dark",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Foul Play",
        move2b : "-Crunch",
        move3b : "-Dragon Claw",
        move4b : "-Earthquake",

        namec : "Liepard",
        levelc : "LV: 48",
        typec : "Type: Dark",
        abilityc: "Ability: Limber",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Fake Out",
        move2c : "-Night Slash",
        move3c : "-Aerial Ace",
        move4c : "-Attract",

        named : "Bisharp",
        leveld : "LV: 50",
        typed : "Type: Dark/Steel",
        abilityd: "Ability: Defiant",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Night Slash",
        move2d : "-Aerial Ace",
        move3d : "-Metal Claw",
        move4d : "-X-Scissor",
    },

    {
        namea : "Reuniclus",
        levela : "LV: 48",
        typea : "Type: Psychic",
        abilitya: "Ability: Magic Guard",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Thunder",
        move2a : "-Focus Blast",
        move3a : "-Energy Ball",
        move4a : "-Psychic",

        nameb : "Musharna",
        levelb : "LV: 48",
        typeb : "Type: Psychic",
        abilityb: "Ability: Synchronize",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Psychic",
        move2b : "-Shadow Ball",
        move3b : "-Charge Beam",
        move4b : "-Reflect",

        namec : "Sigilyph",
        levelc : "LV: 48",
        typec : "Type: Psychic/Flying",
        abilityc: "Ability: Wonder Skin",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Psychic",
        move2c : "-Air Slash",
        move3c : "-Ice Beam",
        move4c : "-Shadow Ball",

        named : "Gothitelle",
        leveld : "LV: 50",
        typed : "Type: Psychic",
        abilityd: "Ability: Frisk",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Calm Mind",
        move2d : "-Psychic",
        move3d : "-Thunderbolt",
        move4d : "-Shadow Ball",
    },

    {
        namea : "Zekrom",
        levela : "LV: 52",
        typea : "Type: Dragon/Electric",
        abilitya: "Ability: Teravolt",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Fusion Bolt",
        move2a : "-Zen Headbutt",
        move3a : "-Giga Impact",
        move4a : "-Light Screen",

        nameb : "Carracosta",
        levelb : "LV: 50",
        typeb : "Type: Water/Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Stone Edge",
        move2b : "-Aqua Jet",
        move3b : "-Crunch",
        move4b : "-Waterfall",

        namec : "Vanilluxe",
        levelc : "LV: 50",
        typec : "Type: Ice",
        abilityc: "Ability: Ice Body",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Blizzard",
        move2c : "-Hail",
        move3c : "-Flash Cannon",
        move4c : "-Frost Breath",

        named : "Archeops",
        leveld : "LV: 50",
        typed : "Type: Rock/Flying",
        abilityd: "Ability: Defeatist",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Stone Edge",
        move2d : "-Acrobatics",
        move3d : "-Dragon Claw",
        move4d : "-Crunch",

        namee : "Zoroark",
        levele : "LV: 50",
        typee : "Type: Dark",
        abilitye: "Ability: Illusion",
        iteme : "Item: None",
        hpe : "HP: ",
        atke : "Atk: ",
        defe : "Def: ",
        spatke : "Sp. Atk: ",
        spdefe : "Sp. Def: ",
        spde : "Spd: ",
        move1e : "-Flamethrower",
        move2e : "-Focus Blast",
        move3e : "-Night Slash",
        move4e : "-Retaliate",

        namef : "Klingklang",
        levelf : "LV: 50",
        typef : "Type: Steel",
        abilityf: "Ability: Plus",
        itemf : "Item: None",
        hpf : "HP: ",
        atkf : "Atk: ",
        deff : "Def: ",
        spatkf : "Sp. Atk: ",
        spdeff : "Sp. Def: ",
        spdf : "Spd: ",
        move1f : "-Flash Cannon",
        move2f : "-Metal Sound",
        move3f : "-Hyper Beam",
        move4f : "-Thunderbolt",
    },

    {
        namea : "Reshiram",
        levela : "LV: 52",
        typea : "Type: Dragon/Fire",
        abilitya: "Ability: Turboblaze",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Fusion Flare",
        move2a : "-Extrasensory",
        move3a : "-Hyper Beam",
        move4a : "-Reflect",

        nameb : "Carracosta",
        levelb : "LV: 50",
        typeb : "Type: Water/Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Stone Edge",
        move2b : "-Aqua Jet",
        move3b : "-Crunch",
        move4b : "-Waterfall",

        namec : "Vanilluxe",
        levelc : "LV: 50",
        typec : "Type: Ice",
        abilityc: "Ability: Ice Body",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Blizzard",
        move2c : "-Hail",
        move3c : "-Flash Cannon",
        move4c : "-Frost Breath",

        named : "Archeops",
        leveld : "LV: 50",
        typed : "Type: Rock/Flying",
        abilityd: "Ability: Defeatist",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Stone Edge",
        move2d : "-Acrobatics",
        move3d : "-Dragon Claw",
        move4d : "-Crunch",

        namee : "Zoroark",
        levele : "LV: 50",
        typee : "Type: Dark",
        abilitye: "Ability: Illusion",
        iteme : "Item: None",
        hpe : "HP: ",
        atke : "Atk: ",
        defe : "Def: ",
        spatke : "Sp. Atk: ",
        spdefe : "Sp. Def: ",
        spde : "Spd: ",
        move1e : "-Flamethrower",
        move2e : "-Focus Blast",
        move3e : "-Night Slash",
        move4e : "-Retaliate",

        namef : "Klingklang",
        levelf : "LV: 50",
        typef : "Type: Steel",
        abilityf: "Ability: Plus",
        itemf : "Item: None",
        hpf : "HP: ",
        atkf : "Atk: ",
        deff : "Def: ",
        spatkf : "Sp. Atk: ",
        spdeff : "Sp. Def: ",
        spdf : "Spd: ",
        move1f : "-Flash Cannon",
        move2f : "-Metal Sound",
        move3f : "-Hyper Beam",
        move4f : "-Thunderbolt",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 52",
        typea : "Type: Ghost",
        abilitya: "Ability: Mummy",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Shadow Ball",
        move2a : "-Protect",
        move3a : "-Psychic",
        move4a : "-Toxic",

        nameb : "Bouffalant",
        levelb : "LV: 52",
        typeb : "Type: Normal",
        abilityb: "Ability: Reckless",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Head Charge",
        move2b : "-Wild Charge",
        move3b : "-Earthquake",
        move4b : "-Poison Jab",

        namec : "Seismitoad",
        levelc : "LV: 52",
        typec : "Type: Water/Ground",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Muddy Water",
        move2c : "-Rain Dance",
        move3c : "-Earthquake",
        move4c : "-Sludge Wave",

        named : "Bisharp",
        leveld : "LV: 52",
        typed : "Type: Dark/Steel",
        abilityd: "Ability: Defiant",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Night Slash",
        move2d : "-Stone Edge",
        move3d : "-X-Scissor",
        move4d : "-Metal Burst",

        namee : "Eelektross",
        levele : "LV: 52",
        typee : "Type: Electric",
        abilitye: "Ability: Levitate",
        iteme : "Item: None",
        hpe : "HP: ",
        atke : "Atk: ",
        defe : "Def: ",
        spatke : "Sp. Atk: ",
        spdefe : "Sp. Def: ",
        spde : "Spd: ",
        move1e : "-Wild Charge",
        move2e : "-Flamethrower",
        move3e : "-Acrobatics",
        move4e : "-Crunch",

        namef : "Hydreigon",
        levelf : "LV: 54",
        typef : "Type: Dark/Dragon",
        abilityf: "Ability: Levitate",
        itemf : "Item: None",
        hpf : "HP: ",
        atkf : "Atk: ",
        deff : "Def: ",
        spatkf : "Sp. Atk: ",
        spdeff : "Sp. Def: ",
        spdf : "Spd: ",
        move1f : "-Dragon Pulse",
        move2f : "-Fire Blast",
        move3f : "-Surf",
        move4f : "-Focus Blast",
    },

    {
        namea : "Spiritomb",
        levela : "LV: 75",
        typea : "Type: Ghost/Dark",
        abilitya: "Ability: Pressure",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Sucker Punch",
        move2a : "-Will-O-Wisp",
        move3a : "-Double Team",
        move4a : "-Shadow Ball",

        nameb : "Eelektross",
        levelb : "LV: 75",
        typeb : "Type: Electric",
        abilityb: "Ability: Levitate",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Crunch",
        move2b : "-Wild Charge",
        move3b : "-Dragon Claw",
        move4b : "-Flamethrower",

        namec : "Milotic",
        levelc : "LV: 75",
        typec : "Type: Water",
        abilityc: "Ability: Marvel Scale",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Bulldoze",
        move2c : "-Dragon Tail",
        move3c : "-Blizzard",
        move4c : "-Hydro Pump",

        named : "Braviary",
        leveld : "LV: 75",
        typed : "Type: Normal/Flying",
        abilityd: "Ability: Sheer Force",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Brave Bird",
        move2d : "-Crush Claw",
        move3d : "-Shadow Claw",
        move4d : "-Retaliate",

        namee : "Lucario",
        levele : "LV: 75",
        typee : "Type: Fightning/Steel",
        abilitye: "Ability: Steadfast",
        iteme : "Item: None",
        hpe : "HP: ",
        atke : "Atk: ",
        defe : "Def: ",
        spatke : "Sp. Atk: ",
        spdefe : "Sp. Def: ",
        spde : "Spd: ",
        move1e : "-Dragon Pulse",
        move2e : "-Aura Sphere",
        move3e : "-Extreme Speed",
        move4e : "-Close Combat",

        namef : "Garchomp",
        levelf : "LV: 77",
        typef : "Type: Dragon/Ground",
        abilityf: "Ability: Sand Veil",
        itemf : "Item: None",
        hpf : "HP: ",
        atkf : "Atk: ",
        deff : "Def: ",
        spatkf : "Sp. Atk: ",
        spdeff : "Sp. Def: ",
        spdf : "Spd: ",
        move1f : "-Crunch",
        move2f : "-Dragon Rush",
        move3f : "-Earthquake",
        move4f : "-Stone Edge",
    }
]

function displayBWTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showBWImages(newTrainerId);
        showPokemonBWImages(newTrainerId);
    }


    let bwTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = bw_trainers [bwTrainer].namea;
    document.querySelector('#level1').textContent = bw_trainers [bwTrainer].levela;
    document.querySelector('#type1').textContent = bw_trainers [bwTrainer].typea;
    document.querySelector('#ability1').textContent= bw_trainers [bwTrainer].abilitya;
    document.querySelector('#item1').textContent = bw_trainers [bwTrainer].itema;
    document.querySelector('#hp1').textContent = bw_trainers [bwTrainer].hpa;
    document.querySelector('#atk1').textContent = bw_trainers [bwTrainer].atka;
    document.querySelector('#def1').textContent = bw_trainers [bwTrainer].defa;
    document.querySelector('#spatk1').textContent = bw_trainers [bwTrainer].spatka;
    document.querySelector('#spdef1').textContent = bw_trainers [bwTrainer].spdefa;
    document.querySelector('#spd1').textContent = bw_trainers [bwTrainer].spda;
    document.querySelector('#move1_1').textContent = bw_trainers [bwTrainer].move1a;
    document.querySelector('#move2_1').textContent = bw_trainers [bwTrainer].move2a;
    document.querySelector('#move3_1').textContent = bw_trainers [bwTrainer].move3a;
    document.querySelector('#move4_1').textContent = bw_trainers [bwTrainer].move4a;

    
    document.querySelector('#name2').textContent = bw_trainers [bwTrainer].nameb;
    document.querySelector('#level2').textContent = bw_trainers [bwTrainer].levelb;
    document.querySelector('#type2').textContent = bw_trainers [bwTrainer].typeb;
    document.querySelector('#ability2').textContent= bw_trainers [bwTrainer].abilityb;
    document.querySelector('#item2').textContent = bw_trainers [bwTrainer].itemb;
    document.querySelector('#hp2').textContent = bw_trainers [bwTrainer].hpb;
    document.querySelector('#atk2').textContent = bw_trainers [bwTrainer].atkb;
    document.querySelector('#def2').textContent = bw_trainers [bwTrainer].defb;
    document.querySelector('#spatk2').textContent = bw_trainers [bwTrainer].spatkb;
    document.querySelector('#spdef2').textContent = bw_trainers [bwTrainer].spdefb;
    document.querySelector('#spd2').textContent = bw_trainers [bwTrainer].spdb;
    document.querySelector('#move1_2').textContent = bw_trainers [bwTrainer].move1b;
    document.querySelector('#move2_2').textContent = bw_trainers [bwTrainer].move2b;
    document.querySelector('#move3_2').textContent = bw_trainers [bwTrainer].move3b;
    document.querySelector('#move4_2').textContent = bw_trainers [bwTrainer].move4b;

    document.querySelector('#name3').textContent = bw_trainers [bwTrainer].namec;
    document.querySelector('#level3').textContent = bw_trainers [bwTrainer].levelc;
    document.querySelector('#type3').textContent = bw_trainers [bwTrainer].typec;
    document.querySelector('#ability3').textContent= bw_trainers [bwTrainer].abilityc;
    document.querySelector('#item3').textContent = bw_trainers [bwTrainer].itemc;
    document.querySelector('#hp3').textContent = bw_trainers [bwTrainer].hpc;
    document.querySelector('#atk3').textContent = bw_trainers [bwTrainer].atkc;
    document.querySelector('#def3').textContent = bw_trainers [bwTrainer].defc;
    document.querySelector('#spatk3').textContent = bw_trainers [bwTrainer].spatkc;
    document.querySelector('#spdef3').textContent = bw_trainers [bwTrainer].spdefc;
    document.querySelector('#spd3').textContent = bw_trainers [bwTrainer].spdc;
    document.querySelector('#move1_3').textContent = bw_trainers [bwTrainer].move1c;
    document.querySelector('#move2_3').textContent = bw_trainers [bwTrainer].move2c;
    document.querySelector('#move3_3').textContent = bw_trainers [bwTrainer].move3c;
    document.querySelector('#move4_3').textContent = bw_trainers [bwTrainer].move4c;

    document.querySelector('#name4').textContent = bw_trainers [bwTrainer].named;
    document.querySelector('#level4').textContent = bw_trainers [bwTrainer].leveld;
    document.querySelector('#type4').textContent = bw_trainers [bwTrainer].typed;
    document.querySelector('#ability4').textContent= bw_trainers [bwTrainer].abilityd;
    document.querySelector('#item4').textContent = bw_trainers [bwTrainer].itemd;
    document.querySelector('#hp4').textContent = bw_trainers [bwTrainer].hpd;
    document.querySelector('#atk4').textContent = bw_trainers [bwTrainer].atkd;
    document.querySelector('#def4').textContent = bw_trainers [bwTrainer].defd;
    document.querySelector('#spatk4').textContent = bw_trainers [bwTrainer].spatkd;
    document.querySelector('#spdef4').textContent = bw_trainers [bwTrainer].spdefd;
    document.querySelector('#spd4').textContent = bw_trainers [bwTrainer].spdd;
    document.querySelector('#move1_4').textContent = bw_trainers [bwTrainer].move1d;
    document.querySelector('#move2_4').textContent = bw_trainers [bwTrainer].move2d;
    document.querySelector('#move3_4').textContent = bw_trainers [bwTrainer].move3d;
    document.querySelector('#move4_4').textContent = bw_trainers [bwTrainer].move4d;

    document.querySelector('#name5').textContent = bw_trainers [bwTrainer].namee;
    document.querySelector('#level5').textContent = bw_trainers [bwTrainer].levele;
    document.querySelector('#type5').textContent = bw_trainers [bwTrainer].typee;
    document.querySelector('#ability5').textContent= bw_trainers [bwTrainer].abilitye;
    document.querySelector('#item5').textContent = bw_trainers [bwTrainer].iteme;
    document.querySelector('#hp5').textContent = bw_trainers [bwTrainer].hpe;
    document.querySelector('#atk5').textContent = bw_trainers [bwTrainer].atke;
    document.querySelector('#def5').textContent = bw_trainers [bwTrainer].defe;
    document.querySelector('#spatk5').textContent = bw_trainers [bwTrainer].spatke;
    document.querySelector('#spdef5').textContent = bw_trainers [bwTrainer].spdefe;
    document.querySelector('#spd5').textContent = bw_trainers [bwTrainer].spde;
    document.querySelector('#move1_5').textContent = bw_trainers [bwTrainer].move1e;
    document.querySelector('#move2_5').textContent = bw_trainers [bwTrainer].move2e;
    document.querySelector('#move3_5').textContent = bw_trainers [bwTrainer].move3e;
    document.querySelector('#move4_5').textContent = bw_trainers [bwTrainer].move4e;

    document.querySelector('#name6').textContent = bw_trainers [bwTrainer].namef;
    document.querySelector('#level6').textContent = bw_trainers [bwTrainer].levelf;
    document.querySelector('#type6').textContent = bw_trainers [bwTrainer].typef;
    document.querySelector('#ability6').textContent= bw_trainers [bwTrainer].abilityf;
    document.querySelector('#item6').textContent = bw_trainers [bwTrainer].itemf;
    document.querySelector('#hp6').textContent = bw_trainers [bwTrainer].hpf;
    document.querySelector('#atk6').textContent = bw_trainers [bwTrainer].atkf;
    document.querySelector('#def6').textContent = bw_trainers [bwTrainer].deff;
    document.querySelector('#spatk6').textContent = bw_trainers [bwTrainer].spatkf;
    document.querySelector('#spdef6').textContent = bw_trainers [bwTrainer].spdeff;
    document.querySelector('#spd6').textContent = bw_trainers [bwTrainer].spdf;
    document.querySelector('#move1_6').textContent = bw_trainers [bwTrainer].move1f;
    document.querySelector('#move2_6').textContent = bw_trainers [bwTrainer].move2f;
    document.querySelector('#move3_6').textContent = bw_trainers [bwTrainer].move3f;
    document.querySelector('#move4_6').textContent = bw_trainers [bwTrainer].move4f;
}

function showBWImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/bw/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonBWImages(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/bw/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/bw/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/bw/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/bw/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/bw/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/bw/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

cilanBW.addEventListener('click', displayBWTrainers);
chiliBW.addEventListener('click', displayBWTrainers);
cressBW.addEventListener('click', displayBWTrainers);
lenoraBW.addEventListener('click', displayBWTrainers);
burghBW.addEventListener('click', displayBWTrainers);
elesaBW.addEventListener('click', displayBWTrainers);
clayBW.addEventListener('click', displayBWTrainers);
skylaBW.addEventListener('click', displayBWTrainers);
brycenBW.addEventListener('click', displayBWTrainers);
draydenBW.addEventListener('click', displayBWTrainers);
irisBW.addEventListener('click', displayBWTrainers);
shauntalBW.addEventListener('click', displayBWTrainers);
marshalBW.addEventListener('click', displayBWTrainers);
grimsleyBW.addEventListener('click', displayBWTrainers);
caitlinBW.addEventListener('click', displayBWTrainers);
nBBW.addEventListener('click', displayBWTrainers);
nWBW.addEventListener('click', displayBWTrainers);
ghetsisBW.addEventListener('click', displayBWTrainers);
cynthiaBW.addEventListener('click', displayBWTrainers);
