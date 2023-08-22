let cherenB2W2 = document.querySelector ("#cheren1");
let roxieB2W2 = document.querySelector ("#roxie1");
let burghB2W2 = document.querySelector ("#burgh2");
let elesaB2W2 = document.querySelector ("#elesa2");
let clayB2W2 = document.querySelector ("#clay2");
let skylaB2W2 = document.querySelector ("#skyla2");
let draydenB2W2 = document.querySelector ("#drayden2");
let marlonB2W2 = document.querySelector ("#marlon1");
let shauntalB2W2 = document.querySelector ("#shauntal2");
let marshalB2W2 = document.querySelector ("#marshal2");
let grimsleyB2W2 = document.querySelector ("#grimsley2");
let caitlinB2W2 = document.querySelector ("#caitlin2");
let irisB2W2 = document.querySelector ("#iris2");
let cynthiaB2W2 = document.querySelector ("#cynthia4");

let b2w2_trainers = [
    {
        namea : "Patrat",
        levela : "LV: 11",
        typea : "Type: Normal",
        abilitya: "Ability: Keen Eye",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Work Up",
        move2a : "-Tackle",
        move3a : "-Bite",
        move4a : "",

        nameb : "Lillipup",
        levelb : "LV: 13",
        typeb : "Type: Normal",
        abilityb: "Ability: Vital Spirit",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Work Up",
        move2b : "-Tackle",
        move3b : "-Bite",
        move4b : "",
    },

    {
        namea : "Koffing",
        levela : "LV: 16",
        typea : "Type: Poison",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Assurance",
        move2a : "-Tackle",
        move3a : "-Smog",
        move4a : "",

        nameb : "Whirlipede",
        levelb : "LV: 18",
        typeb : "Type: Bug/Poison",
        abilityb: "Ability: Poison Point",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Venoshock",
        move2b : "-Protect",
        move3b : "-Poison Sting",
        move4b : "-Pursuit",
    },

    {
        namea : "Swadloon",
        levela : "LV: 22",
        typea : "Type: Bug/Grass",
        abilitya: "Ability: Leaf Guard",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-String Shot",
        move2a : "-Razor Leaf",
        move3a : "-Struggle Bug",
        move4a : "-Protect",

        nameb : "Dwebble",
        levelb : "LV: 22",
        typeb : "Type: Bug/Rock",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Smack Down",
        move2b : "-Feint Attack",
        move3b : "-Rock Polish",
        move4b : "-Struggle Bug",

        namec : "Leavanny",
        levelc : "LV: 24",
        typec : "Type: Bug/Grass",
        abilityc: "Ability: Swarm",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Razor Leaf",
        move2c : "-Cut",
        move3c : "-String Shot",
        move4c : "-Struggle Bug",
    },

    {
        namea : "Emolga",
        levela : "LV: 28",
        typea : "Type: Electic/Flying",
        abilitya: "Ability: Static",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Quick Attack",
        move2a : "-Pursuit",
        move3a : "-Volt Switch",
        move4a : "",

        nameb : "Flaaffy",
        levelb : "LV: 28",
        typeb : "Type: Electric",
        abilityb: "Ability: Static",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Volt Switch",
        move2b : "-Thunder Wave",
        move3b : "-Take Down",
        move4b : "",

        namec : "Zebstrika",
        levelc : "LV: 30",
        typec : "Type: Electric",
        abilityc: "Ability: Motor Drive",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Quick Attack",
        move2c : "-Volt Switch",
        move3c : "-Flame Charge",
        move4c : "-Pursuit",
    },

    {
        namea : "Krokorok",
        levela : "LV: 31",
        typea : "Type: Ground/Dark",
        abilitya: "Ability: Intimidate",
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
        move4a : "-Sand Tomb",

        nameb : "Sandslash",
        levelb : "LV: 31",
        typeb : "Type: Ground",
        abilityb: "Ability: Sand Veil",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Bulldoze",
        move2b : "-Crush Claw",
        move3b : "-Fury Cutter",
        move4b : "-Rollout",

        namec : "Excadrill",
        levelc : "LV: 33",
        typec : "Type: Ground/Steel",
        abilityc: "Ability: Sand Force",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Bulldoze",
        move2c : "-Slash",
        move3c : "-Rock Slide",
        move4c : "-Metal Claw",
    },

    {
        namea : "Swoobat",
        levela : "LV: 37",
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
        move4a : "-Attract",

        nameb : "Skarmory",
        levelb : "LV: 37",
        typeb : "Type: Steel/Flying",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Air Cutter",
        move2b : "-Agility",
        move3b : "-Steel Wing",
        move4b : "-Fury Attack",

        namec : "Swanna",
        levelc : "LV: 39",
        typec : "Type: Water/Flying",
        abilityc: "Ability: Big Pecks",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Air Slash",
        move2c : "-Bubble Beam",
        move3c : "-Roost",
        move4c : "-Feather Dance",
    },

    {
        namea : "Druddigon",
        levela : "LV: 46",
        typea : "Type: Dragon",
        abilitya: "Ability: Sheer Force",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Revenge",
        move2a : "-Crunch",
        move3a : "-Slash",
        move4a : "-Dragon Tail",

        nameb : "Flygon",
        levelb : "LV: 46",
        typeb : "Type: Ground/Dragon",
        abilityb: "Ability: Levitate",
        itemb : "Item: ",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Rock Slide",
        move2b : "-Earth Power",
        move3b : "-Crunch",
        move4b : "-Dragon Tail",

        namec : "Haxorus",
        levelc : "LV: 48",
        typec : "Type: Dragon",
        abilityc: "Ability: Mold Breaker",
        itemc : "Item: Sitrus Berry",
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
        namea : "Carracosta",
        levela : "LV: 49",
        typea : "Type: Water/Rock",
        abilitya: "Ability: Sturdy",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Smack Down",
        move2a : "-Shell Smash",
        move3a : "-Scald",
        move4a : "-Crunch",

        nameb : "Wailord",
        levelb : "LV: 49",
        typeb : "Type: Water",
        abilityb: "Ability: Water Veil",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Amnesia",
        move2b : "-Scald",
        move3b : "-Rollout",
        move4b : "-Bounce",

        namec : "Jellicent",
        levelc : "LV: 51",
        typec : "Type: Water/Ghost",
        abilityc: "Ability: Cursed Body",
        itemc : "Item: Sitrus Berry",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Brine",
        move2c : "-Recover",
        move3c : "-Scald",
        move4c : "-Ominous Wind",
    },

    {
        namea : "Cofagrigus",
        levela : "LV: 56",
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

        nameb : "Drifblim",
        levelb : "LV: 56",
        typeb : "Type: Ghost/Flying",
        abilityb: "Ability: Aftermath",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Acrobatics",
        move2b : "-Shadow Ball",
        move3b : "-Thunderbolt",
        move4b : "-Psychic",

        namec : "Golurk",
        levelc : "LV: 56",
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
        move4c : "-Heavy Slam",

        named : "Chandelure",
        leveld : "LV: 59",
        typed : "Type: Ghost/Fire",
        abilityd: "Ability: Flame Body",
        itemd : "Item: ",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Fire Blast",
        move2d : "-Shadow Ball",
        move3d : "-Psychic",
        move4d : "-Energy Ball",
    },

    {
        namea : "Throh",
        levela : "LV: 56",
        typea : "Type: Fighting",
        abilitya: "Ability: Guts",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Rock Tomb",
        move2a : "-Payback",
        move3a : "-Bulldoze",
        move4a : "-Storm Throw",

        nameb : "Sawk",
        levelb : "LV: 56",
        typeb : "Type: Fighting",
        abilityb: "Ability: Sturdy",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Payback",
        move2b : "-Rock Slide",
        move3b : "-Brick Break",
        move4b : "-Retaliate",

        namec : "Mienshao",
        levelc : "LV: 56",
        typec : "Type: Fighting",
        abilityc: "Ability: Regenerator",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-U-Turn",
        move2c : "-High Jump Kick",
        move3c : "-Bounce",
        move4c : "-Retaliate",

        named : "Conkeldurr",
        leveld : "LV: 58",
        typed : "Type: Fighting",
        abilityd: "Ability: Guts",
        itemd : "Item: Sitrus Berry",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Stone Edge",
        move2d : "-Hammer Arm",
        move3d : "-Retaliate",
        move4d : "-Bulk Up",
    },

    {
        namea : "Liepard",
        levela : "LV: 56",
        typea : "Type: Dark",
        abilitya: "Ability: Limber",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Fake Out",
        move2a : "-Night Slash",
        move3a : "-Aerial Ace",
        move4a : "-Attract",

        nameb : "Scrafty",
        levelb : "LV: 56",
        typeb : "Type: Dark/Fighting",
        abilityb: "Ability: Moxie",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Rock Tomb",
        move2b : "-Crunch",
        move3b : "-Poison Jab",
        move4b : "-Brick Break",

        namec : "Krookodile",
        levelc : "LV: 56",
        typec : "Type: Ground/Dark",
        abilityc: "Ability: Intimidate",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Rock Tomb",
        move2c : "-Crunch",
        move3c : "-Dragon Claw",
        move4c : "-Earthquake",

        named : "Bisharp",
        leveld : "LV: 58",
        typed : "Type: Dark/Steel",
        abilityd: "Ability: Defiant",
        itemd : "Item: Sitrus Berry",
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
        namea : "Musharna",
        levela : "LV: 56",
        typea : "Type: Psychic",
        abilitya: "Ability: Synchronize",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Yawn",
        move2a : "-Dream Eater",
        move3a : "-Charge Beam",
        move4a : "-Reflect",

        nameb : "Sigilyph",
        levelb : "LV: 56",
        typeb : "Type: Psychic/Flying",
        abilityb: "Ability: Wonder Skin",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Psychic",
        move2b : "-Air Slash",
        move3b : "-Ice Beam",
        move4b : "-Shadow Ball",

        namec : "Reuniclus",
        levelc : "LV: 56",
        typec : "Type: Psychic",
        abilityc: "Ability: Magic Guard",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Recover",
        move2c : "-Focus Blast",
        move3c : "-Energy Ball",
        move4c : "-Psychic",

        named : "Gothitelle",
        leveld : "LV: 58",
        typed : "Type: Psychic",
        abilityd: "Ability: Frisk",
        itemd : "Item: Sitrus Berry",
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
        namea : "Hydreigon",
        levela : "LV: 57",
        typea : "Type: Dark/Dragon",
        abilitya: "Ability: Levitate",
        itema : "Item: ",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Flamethrower",
        move2a : "-Charge Beam",
        move3a : "-Dragon Pulse",
        move4a : "-Surf",

        nameb : "Druddigon",
        levelb : "LV: 57",
        typeb : "Type: Dragon",
        abilityb: "Ability: Sheer Force",
        itemb : "Item: Life Orb",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Rock Slide",
        move2b : "-Flamethrower",
        move3b : "-Dragon Tail",
        move4b : "-Focus Blast",

        namec : "Archeops",
        levelc : "LV: 57",
        typec : "Type: Rock/Flying",
        abilityc: "Ability: Defeatist",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Acrobatics",
        move2c : "-Rock Slide",
        move3c : "-Dragon Claw",
        move4c : "-Endeavor",

        named : "Aggron",
        leveld : "LV: 57",
        typed : "Type: Steel/Rock",
        abilityd: "Ability: Rock Head",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Earthquake",
        move2d : "-Double-Edge",
        move3d : "-Rock Slide",
        move4d : "-Autotomize",

        namee : "Lapras",
        levele : "LV: 57",
        typee : "Type: Water/Ice",
        abilitye: "Ability: Water Absorb",
        iteme : "Item: None",
        hpe : "HP: ",
        atke : "Atk: ",
        defe : "Def: ",
        spatke : "Sp. Atk: ",
        spdefe : "Sp. Def: ",
        spde : "Spd: ",
        move1e : "-Surf",
        move2e : "-Ice Beam",
        move3e : "-Thunderbolt",
        move4e : "-Sing",

        namef : "Haxorus",
        levelf : "LV: 59",
        typef : "Type: Dragon",
        abilityf: "Ability: Mold Breaker",
        itemf : "Item: Focus Sash",
        hpf : "HP: ",
        atkf : "Atk: ",
        deff : "Def: ",
        spatkf : "Sp. Atk: ",
        spdeff : "Sp. Def: ",
        spdf : "Spd: ",
        move1f : "-Earthquake",
        move2f : "-X-Scissor",
        move3f : "-Dual Chop",
        move4f : "-Dragon Dance",
    },

    {
        namea : "Spiritomb",
        levela : "LV: 76",
        typea : "Type: Ghost/Dark",
        abilitya: "Ability: Pressure",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Hypnosis",
        move2a : "-Dream Eater",
        move3a : "-Double Team",
        move4a : "-Shadow Ball",

        nameb : "Milotic",
        levelb : "LV: 76",
        typeb : "Type: Water",
        abilityb: "Ability: Marvel Scale",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Attract",
        move2b : "-Rest",
        move3b : "-Blizzard",
        move4b : "-Hydro Pump",

        namec : "Togekiss",
        levelc : "LV: 76",
        typec : "Type: Normal/Flying",
        abilityc: "Ability: Serene Grace",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Air Slash",
        move2c : "-Aura Sphere",
        move3c : "-Extreme Speed",
        move4c : "-Thunder Wave",

        named : "Lucario",
        leveld : "LV: 76",
        typed : "Type: Fightning/Steel",
        abilityd: "Ability: Inner Focus",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Flash Cannon",
        move2d : "-Psychic",
        move3d : "-Extreme Speed",
        move4d : "-Close Combat",

        namee : "Glaceon",
        levele : "LV: 76",
        typee : "Type: Ice",
        abilitye: "Ability: Snow Cloak",
        iteme : "Item: None",
        hpe : "HP: ",
        atke : "Atk: ",
        defe : "Def: ",
        spatke : "Sp. Atk: ",
        spdefe : "Sp. Def: ",
        spde : "Spd: ",
        move1e : "-Ice Beam",
        move2e : "-Shadow Ball",
        move3e : "-Signal Beam",
        move4e : "-Barrier",

        namef : "Garchomp",
        levelf : "LV: 78",
        typef : "Type: Dragon/Ground",
        abilityf: "Ability: Sand Veil",
        itemf : "Item: None",
        hpf : "HP: ",
        atkf : "Atk: ",
        deff : "Def: ",
        spatkf : "Sp. Atk: ",
        spdeff : "Sp. Def: ",
        spdf : "Spd: ",
        move1f : "-Fire Blast",
        move2f : "-Dragon Rush",
        move3f : "-Earthquake",
        move4f : "-Stone Edge",
    }
]

function displayB2W2Trainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showB2W2Images(newTrainerId);
        showPokemonB2W2Images(newTrainerId);
    }


    let b2w2Trainer = this.dataset.member;

    document.querySelector('#name1').textContent = b2w2_trainers [b2w2Trainer].namea;
    document.querySelector('#level1').textContent = b2w2_trainers [b2w2Trainer].levela;
    document.querySelector('#type1').textContent = b2w2_trainers [b2w2Trainer].typea;
    document.querySelector('#ability1').textContent= b2w2_trainers [b2w2Trainer].abilitya;
    document.querySelector('#item1').textContent = b2w2_trainers [b2w2Trainer].itema;
    document.querySelector('#hp1').textContent = b2w2_trainers [b2w2Trainer].hpa;
    document.querySelector('#atk1').textContent = b2w2_trainers [b2w2Trainer].atka;
    document.querySelector('#def1').textContent = b2w2_trainers [b2w2Trainer].defa;
    document.querySelector('#spatk1').textContent = b2w2_trainers [b2w2Trainer].spatka;
    document.querySelector('#spdef1').textContent = b2w2_trainers [b2w2Trainer].spdefa;
    document.querySelector('#spd1').textContent = b2w2_trainers [b2w2Trainer].spda;
    document.querySelector('#move1_1').textContent = b2w2_trainers [b2w2Trainer].move1a;
    document.querySelector('#move2_1').textContent = b2w2_trainers [b2w2Trainer].move2a;
    document.querySelector('#move3_1').textContent = b2w2_trainers [b2w2Trainer].move3a;
    document.querySelector('#move4_1').textContent = b2w2_trainers [b2w2Trainer].move4a;

    
    document.querySelector('#name2').textContent = b2w2_trainers [b2w2Trainer].nameb;
    document.querySelector('#level2').textContent = b2w2_trainers [b2w2Trainer].levelb;
    document.querySelector('#type2').textContent = b2w2_trainers [b2w2Trainer].typeb;
    document.querySelector('#ability2').textContent= b2w2_trainers [b2w2Trainer].abilityb;
    document.querySelector('#item2').textContent = b2w2_trainers [b2w2Trainer].itemb;
    document.querySelector('#hp2').textContent = b2w2_trainers [b2w2Trainer].hpb;
    document.querySelector('#atk2').textContent = b2w2_trainers [b2w2Trainer].atkb;
    document.querySelector('#def2').textContent = b2w2_trainers [b2w2Trainer].defb;
    document.querySelector('#spatk2').textContent = b2w2_trainers [b2w2Trainer].spatkb;
    document.querySelector('#spdef2').textContent = b2w2_trainers [b2w2Trainer].spdefb;
    document.querySelector('#spd2').textContent = b2w2_trainers [b2w2Trainer].spdb;
    document.querySelector('#move1_2').textContent = b2w2_trainers [b2w2Trainer].move1b;
    document.querySelector('#move2_2').textContent = b2w2_trainers [b2w2Trainer].move2b;
    document.querySelector('#move3_2').textContent = b2w2_trainers [b2w2Trainer].move3b;
    document.querySelector('#move4_2').textContent = b2w2_trainers [b2w2Trainer].move4b;

    document.querySelector('#name3').textContent = b2w2_trainers [b2w2Trainer].namec;
    document.querySelector('#level3').textContent = b2w2_trainers [b2w2Trainer].levelc;
    document.querySelector('#type3').textContent = b2w2_trainers [b2w2Trainer].typec;
    document.querySelector('#ability3').textContent= b2w2_trainers [b2w2Trainer].abilityc;
    document.querySelector('#item3').textContent = b2w2_trainers [b2w2Trainer].itemc;
    document.querySelector('#hp3').textContent = b2w2_trainers [b2w2Trainer].hpc;
    document.querySelector('#atk3').textContent = b2w2_trainers [b2w2Trainer].atkc;
    document.querySelector('#def3').textContent = b2w2_trainers [b2w2Trainer].defc;
    document.querySelector('#spatk3').textContent = b2w2_trainers [b2w2Trainer].spatkc;
    document.querySelector('#spdef3').textContent = b2w2_trainers [b2w2Trainer].spdefc;
    document.querySelector('#spd3').textContent = b2w2_trainers [b2w2Trainer].spdc;
    document.querySelector('#move1_3').textContent = b2w2_trainers [b2w2Trainer].move1c;
    document.querySelector('#move2_3').textContent = b2w2_trainers [b2w2Trainer].move2c;
    document.querySelector('#move3_3').textContent = b2w2_trainers [b2w2Trainer].move3c;
    document.querySelector('#move4_3').textContent = b2w2_trainers [b2w2Trainer].move4c;

    document.querySelector('#name4').textContent = b2w2_trainers [b2w2Trainer].named;
    document.querySelector('#level4').textContent = b2w2_trainers [b2w2Trainer].leveld;
    document.querySelector('#type4').textContent = b2w2_trainers [b2w2Trainer].typed;
    document.querySelector('#ability4').textContent= b2w2_trainers [b2w2Trainer].abilityd;
    document.querySelector('#item4').textContent = b2w2_trainers [b2w2Trainer].itemd;
    document.querySelector('#hp4').textContent = b2w2_trainers [b2w2Trainer].hpd;
    document.querySelector('#atk4').textContent = b2w2_trainers [b2w2Trainer].atkd;
    document.querySelector('#def4').textContent = b2w2_trainers [b2w2Trainer].defd;
    document.querySelector('#spatk4').textContent = b2w2_trainers [b2w2Trainer].spatkd;
    document.querySelector('#spdef4').textContent = b2w2_trainers [b2w2Trainer].spdefd;
    document.querySelector('#spd4').textContent = b2w2_trainers [b2w2Trainer].spdd;
    document.querySelector('#move1_4').textContent = b2w2_trainers [b2w2Trainer].move1d;
    document.querySelector('#move2_4').textContent = b2w2_trainers [b2w2Trainer].move2d;
    document.querySelector('#move3_4').textContent = b2w2_trainers [b2w2Trainer].move3d;
    document.querySelector('#move4_4').textContent = b2w2_trainers [b2w2Trainer].move4d;

    document.querySelector('#name5').textContent = b2w2_trainers [b2w2Trainer].namee;
    document.querySelector('#level5').textContent = b2w2_trainers [b2w2Trainer].levele;
    document.querySelector('#type5').textContent = b2w2_trainers [b2w2Trainer].typee;
    document.querySelector('#ability5').textContent= b2w2_trainers [b2w2Trainer].abilitye;
    document.querySelector('#item5').textContent = b2w2_trainers [b2w2Trainer].iteme;
    document.querySelector('#hp5').textContent = b2w2_trainers [b2w2Trainer].hpe;
    document.querySelector('#atk5').textContent = b2w2_trainers [b2w2Trainer].atke;
    document.querySelector('#def5').textContent = b2w2_trainers [b2w2Trainer].defe;
    document.querySelector('#spatk5').textContent = b2w2_trainers [b2w2Trainer].spatke;
    document.querySelector('#spdef5').textContent = b2w2_trainers [b2w2Trainer].spdefe;
    document.querySelector('#spd5').textContent = b2w2_trainers [b2w2Trainer].spde;
    document.querySelector('#move1_5').textContent = b2w2_trainers [b2w2Trainer].move1e;
    document.querySelector('#move2_5').textContent = b2w2_trainers [b2w2Trainer].move2e;
    document.querySelector('#move3_5').textContent = b2w2_trainers [b2w2Trainer].move3e;
    document.querySelector('#move4_5').textContent = b2w2_trainers [b2w2Trainer].move4e;

    document.querySelector('#name6').textContent = b2w2_trainers [b2w2Trainer].namef;
    document.querySelector('#level6').textContent = b2w2_trainers [b2w2Trainer].levelf;
    document.querySelector('#type6').textContent = b2w2_trainers [b2w2Trainer].typef;
    document.querySelector('#ability6').textContent= b2w2_trainers [b2w2Trainer].abilityf;
    document.querySelector('#item6').textContent = b2w2_trainers [b2w2Trainer].itemf;
    document.querySelector('#hp6').textContent = b2w2_trainers [b2w2Trainer].hpf;
    document.querySelector('#atk6').textContent = b2w2_trainers [b2w2Trainer].atkf;
    document.querySelector('#def6').textContent = b2w2_trainers [b2w2Trainer].deff;
    document.querySelector('#spatk6').textContent = b2w2_trainers [b2w2Trainer].spatkf;
    document.querySelector('#spdef6').textContent = b2w2_trainers [b2w2Trainer].spdeff;
    document.querySelector('#spd6').textContent = b2w2_trainers [b2w2Trainer].spdf;
    document.querySelector('#move1_6').textContent = b2w2_trainers [b2w2Trainer].move1f;
    document.querySelector('#move2_6').textContent = b2w2_trainers [b2w2Trainer].move2f;
    document.querySelector('#move3_6').textContent = b2w2_trainers [b2w2Trainer].move3f;
    document.querySelector('#move4_6').textContent = b2w2_trainers [b2w2Trainer].move4f;
}

function showB2W2Images(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/b2w2/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonB2W2Images(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/b2w2/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/b2w2/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/b2w2/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/b2w2/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/b2w2/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/b2w2/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

cherenB2W2.addEventListener('click', displayB2W2Trainers);
roxieB2W2.addEventListener('click', displayB2W2Trainers);
burghB2W2.addEventListener('click', displayB2W2Trainers);
elesaB2W2.addEventListener('click', displayB2W2Trainers);
clayB2W2.addEventListener('click', displayB2W2Trainers);
skylaB2W2.addEventListener('click', displayB2W2Trainers);
draydenB2W2.addEventListener('click', displayB2W2Trainers);
marlonB2W2.addEventListener('click', displayB2W2Trainers);
shauntalB2W2.addEventListener('click', displayB2W2Trainers);
marshalB2W2.addEventListener('click', displayB2W2Trainers);
grimsleyB2W2.addEventListener('click', displayB2W2Trainers);
caitlinB2W2.addEventListener('click', displayB2W2Trainers);
irisB2W2.addEventListener('click', displayB2W2Trainers);
cynthiaB2W2.addEventListener('click', displayB2W2Trainers);