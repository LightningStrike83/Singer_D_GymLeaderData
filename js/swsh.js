let miloSWSH = document.querySelector ("#milo1");
let nessaSWSH = document.querySelector ("#nessa1");
let kabuSWSH = document.querySelector ("#kabu1");
let beaSWSH = document.querySelector ("#bea1");
let allisterSWSH = document.querySelector ("#allister1");
let opalSWSH = document.querySelector ("#opal1");
let gordieSWSH = document.querySelector ("#gordie1");
let melonySWSH = document.querySelector ("#melony1");
let piersSWSH = document.querySelector ("#piers1");
let raihanSWSH = document.querySelector ("#raihan1");
let marnieSWSH = document.querySelector ("#marnie1");
let hopGSWSH = document.querySelector ("#hop1_g");
let hopFSWSH = document.querySelector ("#hop1_f");
let hopWSWSH = document.querySelector ("#hop1_w");
let bedeSWSH = document.querySelector ("#bede1");
let nessaCSWSH = document.querySelector ("#nessa2");
let beaCSWSH = document.querySelector ("#bea2");
let allisterCSWSH = document.querySelector ("#allister2");
let raihanCSWSH = document.querySelector ("#raihan2");
let leonGSWSH = document.querySelector ("#leon1_g");
let leonFSWSH = document.querySelector ("#leon1_f");
let leonWSWSH = document.querySelector ("#leon1_w");

let swsh_trainers = [
    {
        namea : "Gossifleur",
        levela : "LV: 19",
        typea : "Type: Grass",
        abilitya: "Ability: Regenerator",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Magical Leaf",
        move2a : "-Round",
        move3a : "-Rapid Spin",
        move4a : "-",

        nameb : "Eldegoss",
        levelb : "LV: 20",
        typeb : "Type: Grass",
        abilityb: "Ability: Regenerator",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Magical Leaf",
        move2b : "-Round",
        move3b : "-Leafage",
        move4b : "-",
    },

    {
        namea : "Goldeen",
        levela : "LV: 22",
        typea : "Type: Water",
        abilitya: "Ability: Swift Swim",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Water Pulse",
        move2a : "-Whirlpool",
        move3a : "-Horn Attack",
        move4a : "-Agility",

        nameb : "Arrokuda",
        levelb : "LV: 23",
        typeb : "Type: Water",
        abilityb: "Ability: Swift Swim",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Aqua Jet",
        move2b : "-Bite",
        move3b : "-Whirlpool",
        move4b : "-Fury Attack",

        namec : "Drednaw",
        levelc : "LV: 24",
        typec : "Type: Water/Rock",
        abilityc: "Ability: Swift Swim",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Razor Shell",
        move2c : "-Water Gun",
        move3c : "-Bite",
        move4c : "-Headbutt",
    },

    {
        namea : "Ninetales",
        levela : "LV: 25",
        typea : "Type: Fire",
        abilitya: "Ability: Flash Fire",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Will-O-Wisp",
        move2a : "-Fire Spin",
        move3a : "-Quick Attack",
        move4a : "-Ember",

        nameb : "Arcanine",
        levelb : "LV: 25",
        typeb : "Type: Fire",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Will-O-Wisp",
        move2b : "-Flame Wheel",
        move3b : "-Bite",
        move4b : "-Agility",

        namec : "Centiskorch",
        levelc : "LV: 27",
        typec : "Type: Fire/Bug",
        abilityc: "Ability: Flash Fire",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Flame Wheel",
        move2c : "-Coil",
        move3c : "-Bug Bite",
        move4c : "-Smokescreen",
    },

    {
        namea : "Hitmontop",
        levela : "LV: 34",
        typea : "Type: Fighting",
        abilitya: "Ability: Technician",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Triple Kick",
        move2a : "-Quick Attack",
        move3a : "-Counter",
        move4a : "-Revenge",

        nameb : "Pangoro",
        levelb : "LV: 34",
        typeb : "Type: ",
        abilityb: "Ability: Mold Breaker",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Bullet Punch",
        move2b : "-Circle Throw",
        move3b : "-Night Slash",
        move4b : "-Work Up",

        namec : "Sirfetch'd",
        levelc : "LV: 35",
        typec : "Type: Fighting",
        abilityc: "Ability: Steadfast",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Detect",
        move2c : "-Swords Dance",
        move3c : "-Brutal Swing",
        move4c : "-Revenge",

        named : "Machamp",
        leveld : "LV: 36",
        typed : "Type: Fighting",
        abilityd: "Ability: Guts",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Scary Face",
        move2d : "-Revenge",
        move3d : "-Knock Off",
        move4d : "-Strength",
    },

    {
        namea : "Yamask (Galarian)",
        levela : "LV: 34",
        typea : "Type: Ground/Ghost",
        abilitya: "Ability: Wandering Spirit",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Brutal Swing",
        move2a : "-Hex",
        move3a : "-Disable",
        move4a : "",

        nameb : "Mimikyu",
        levelb : "LV: 34",
        typeb : "Type: Ghost/Fairy",
        abilityb: "Ability: Disguise",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Shadow Sneak",
        move2b : "-Baby-Doll Eyes",
        move3b : "-Hone Claws",
        move4b : "-Slash",

        namec : "Cursola",
        levelc : "LV: 35",
        typec : "Type: Ghost",
        abilityc: "Ability: Weak Armor",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Ancient Power",
        move2c : "-Curse",
        move3c : "-Hex",
        move4c : "",

        named : "Gengar",
        leveld : "LV: 36",
        typed : "Type: Ghost/Poison",
        abilityd: "Ability: Cursed Body",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Venoshock",
        move2d : "-Hex",
        move3d : "-Hypnosis",
        move4d : "-Payback",
    },

    {
        namea : "Weezing (Galarian)",
        levela : "LV: 36",
        typea : "Type: Poison/Fairy",
        abilitya: "Ability: Levitate",
        itema : "Item: None",
        hpa : "HP: ",
        atka : "Atk: ",
        defa : "Def: ",
        spatka : "Sp. Atk: ",
        spdefa : "Sp. Def: ",
        spda : "Spd: ",
        move1a : "-Sludge",
        move2a : "-Fairy Wind",
        move3a : "-Tackle",
        move4a : "",

        nameb : "Mawile",
        levelb : "LV: 36",
        typeb : "Type: Steel/Fairy",
        abilityb: "Ability: Intimidate",
        itemb : "Item: None",
        hpb : "HP: ",
        atkb : "Atk: ",
        defb : "Def: ",
        spatkb : "Sp. Atk: ",
        spdefb : "Sp. Def: ",
        spdb : "Spd: ",
        move1b : "-Draining Kiss",
        move2b : "-Crunch",
        move3b : "-Iron Defense",
        move4b : "-Astonish",

        namec : "Togekiss",
        levelc : "LV: 37",
        typec : "Type: Fairy/Flying",
        abilityc: "Ability: Hustle",
        itemc : "Item: None",
        hpc : "HP: ",
        atkc : "Atk: ",
        defc : "Def: ",
        spatkc : "Sp. Atk: ",
        spdefc : "Sp. Def: ",
        spdc : "Spd: ",
        move1c : "-Air Slash",
        move2c : "-Draining Kiss",
        move3c : "-Ancient Power",
        move4c : "",

        named : "Alcremie",
        leveld : "LV: 38",
        typed : "Type: Fairy",
        abilityd: "Ability: Sweet Veil",
        itemd : "Item: None",
        hpd : "HP: ",
        atkd : "Atk: ",
        defd : "Def: ",
        spatkd : "Sp. Atk: ",
        spdefd : "Sp. Def: ",
        spdd : "Spd: ",
        move1d : "-Draining Kiss",
        move2d : "-Acid Armor",
        move3d : "-Sweet Kiss",
        move4d : "",
    },
]

function displaySWSHTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showSWSHImages(newTrainerId);
        showPokemonSWSHImages(newTrainerId);
    }


    let swshTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = swsh_trainers [swshTrainer].namea;
    document.querySelector('#level1').textContent = swsh_trainers [swshTrainer].levela;
    document.querySelector('#type1').textContent = swsh_trainers [swshTrainer].typea;
    document.querySelector('#ability1').textContent= swsh_trainers [swshTrainer].abilitya;
    document.querySelector('#item1').textContent = swsh_trainers [swshTrainer].itema;
    document.querySelector('#hp1').textContent = swsh_trainers [swshTrainer].hpa;
    document.querySelector('#atk1').textContent = swsh_trainers [swshTrainer].atka;
    document.querySelector('#def1').textContent = swsh_trainers [swshTrainer].defa;
    document.querySelector('#spatk1').textContent = swsh_trainers [swshTrainer].spatka;
    document.querySelector('#spdef1').textContent = swsh_trainers [swshTrainer].spdefa;
    document.querySelector('#spd1').textContent = swsh_trainers [swshTrainer].spda;
    document.querySelector('#move1_1').textContent = swsh_trainers [swshTrainer].move1a;
    document.querySelector('#move2_1').textContent = swsh_trainers [swshTrainer].move2a;
    document.querySelector('#move3_1').textContent = swsh_trainers [swshTrainer].move3a;
    document.querySelector('#move4_1').textContent = swsh_trainers [swshTrainer].move4a;

    
    document.querySelector('#name2').textContent = swsh_trainers [swshTrainer].nameb;
    document.querySelector('#level2').textContent = swsh_trainers [swshTrainer].levelb;
    document.querySelector('#type2').textContent = swsh_trainers [swshTrainer].typeb;
    document.querySelector('#ability2').textContent= swsh_trainers [swshTrainer].abilityb;
    document.querySelector('#item2').textContent = swsh_trainers [swshTrainer].itemb;
    document.querySelector('#hp2').textContent = swsh_trainers [swshTrainer].hpb;
    document.querySelector('#atk2').textContent = swsh_trainers [swshTrainer].atkb;
    document.querySelector('#def2').textContent = swsh_trainers [swshTrainer].defb;
    document.querySelector('#spatk2').textContent = swsh_trainers [swshTrainer].spatkb;
    document.querySelector('#spdef2').textContent = swsh_trainers [swshTrainer].spdefb;
    document.querySelector('#spd2').textContent = swsh_trainers [swshTrainer].spdb;
    document.querySelector('#move1_2').textContent = swsh_trainers [swshTrainer].move1b;
    document.querySelector('#move2_2').textContent = swsh_trainers [swshTrainer].move2b;
    document.querySelector('#move3_2').textContent = swsh_trainers [swshTrainer].move3b;
    document.querySelector('#move4_2').textContent = swsh_trainers [swshTrainer].move4b;

    document.querySelector('#name3').textContent = swsh_trainers [swshTrainer].namec;
    document.querySelector('#level3').textContent = swsh_trainers [swshTrainer].levelc;
    document.querySelector('#type3').textContent = swsh_trainers [swshTrainer].typec;
    document.querySelector('#ability3').textContent= swsh_trainers [swshTrainer].abilityc;
    document.querySelector('#item3').textContent = swsh_trainers [swshTrainer].itemc;
    document.querySelector('#hp3').textContent = swsh_trainers [swshTrainer].hpc;
    document.querySelector('#atk3').textContent = swsh_trainers [swshTrainer].atkc;
    document.querySelector('#def3').textContent = swsh_trainers [swshTrainer].defc;
    document.querySelector('#spatk3').textContent = swsh_trainers [swshTrainer].spatkc;
    document.querySelector('#spdef3').textContent = swsh_trainers [swshTrainer].spdefc;
    document.querySelector('#spd3').textContent = swsh_trainers [swshTrainer].spdc;
    document.querySelector('#move1_3').textContent = swsh_trainers [swshTrainer].move1c;
    document.querySelector('#move2_3').textContent = swsh_trainers [swshTrainer].move2c;
    document.querySelector('#move3_3').textContent = swsh_trainers [swshTrainer].move3c;
    document.querySelector('#move4_3').textContent = swsh_trainers [swshTrainer].move4c;

    document.querySelector('#name4').textContent = swsh_trainers [swshTrainer].named;
    document.querySelector('#level4').textContent = swsh_trainers [swshTrainer].leveld;
    document.querySelector('#type4').textContent = swsh_trainers [swshTrainer].typed;
    document.querySelector('#ability4').textContent= swsh_trainers [swshTrainer].abilityd;
    document.querySelector('#item4').textContent = swsh_trainers [swshTrainer].itemd;
    document.querySelector('#hp4').textContent = swsh_trainers [swshTrainer].hpd;
    document.querySelector('#atk4').textContent = swsh_trainers [swshTrainer].atkd;
    document.querySelector('#def4').textContent = swsh_trainers [swshTrainer].defd;
    document.querySelector('#spatk4').textContent = swsh_trainers [swshTrainer].spatkd;
    document.querySelector('#spdef4').textContent = swsh_trainers [swshTrainer].spdefd;
    document.querySelector('#spd4').textContent = swsh_trainers [swshTrainer].spdd;
    document.querySelector('#move1_4').textContent = swsh_trainers [swshTrainer].move1d;
    document.querySelector('#move2_4').textContent = swsh_trainers [swshTrainer].move2d;
    document.querySelector('#move3_4').textContent = swsh_trainers [swshTrainer].move3d;
    document.querySelector('#move4_4').textContent = swsh_trainers [swshTrainer].move4d;

    document.querySelector('#name5').textContent = swsh_trainers [swshTrainer].namee;
    document.querySelector('#level5').textContent = swsh_trainers [swshTrainer].levele;
    document.querySelector('#type5').textContent = swsh_trainers [swshTrainer].typee;
    document.querySelector('#ability5').textContent= swsh_trainers [swshTrainer].abilitye;
    document.querySelector('#item5').textContent = swsh_trainers [swshTrainer].iteme;
    document.querySelector('#hp5').textContent = swsh_trainers [swshTrainer].hpe;
    document.querySelector('#atk5').textContent = swsh_trainers [swshTrainer].atke;
    document.querySelector('#def5').textContent = swsh_trainers [swshTrainer].defe;
    document.querySelector('#spatk5').textContent = swsh_trainers [swshTrainer].spatke;
    document.querySelector('#spdef5').textContent = swsh_trainers [swshTrainer].spdefe;
    document.querySelector('#spd5').textContent = swsh_trainers [swshTrainer].spde;
    document.querySelector('#move1_5').textContent = swsh_trainers [swshTrainer].move1e;
    document.querySelector('#move2_5').textContent = swsh_trainers [swshTrainer].move2e;
    document.querySelector('#move3_5').textContent = swsh_trainers [swshTrainer].move3e;
    document.querySelector('#move4_5').textContent = swsh_trainers [swshTrainer].move4e;

    document.querySelector('#name6').textContent = swsh_trainers [swshTrainer].namef;
    document.querySelector('#level6').textContent = swsh_trainers [swshTrainer].levelf;
    document.querySelector('#type6').textContent = swsh_trainers [swshTrainer].typef;
    document.querySelector('#ability6').textContent= swsh_trainers [swshTrainer].abilityf;
    document.querySelector('#item6').textContent = swsh_trainers [swshTrainer].itemf;
    document.querySelector('#hp6').textContent = swsh_trainers [swshTrainer].hpf;
    document.querySelector('#atk6').textContent = swsh_trainers [swshTrainer].atkf;
    document.querySelector('#def6').textContent = swsh_trainers [swshTrainer].deff;
    document.querySelector('#spatk6').textContent = swsh_trainers [swshTrainer].spatkf;
    document.querySelector('#spdef6').textContent = swsh_trainers [swshTrainer].spdeff;
    document.querySelector('#spd6').textContent = swsh_trainers [swshTrainer].spdf;
    document.querySelector('#move1_6').textContent = swsh_trainers [swshTrainer].move1f;
    document.querySelector('#move2_6').textContent = swsh_trainers [swshTrainer].move2f;
    document.querySelector('#move3_6').textContent = swsh_trainers [swshTrainer].move3f;
    document.querySelector('#move4_6').textContent = swsh_trainers [swshTrainer].move4f;
}

function showSWSHImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/swsh/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonSWSHImages(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/swsh/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/swsh/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/swsh/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/swsh/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/swsh/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/swsh/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

miloSWSH.addEventListener('click', displaySWSHTrainers);
nessaSWSH.addEventListener('click', displaySWSHTrainers);
kabuSWSH.addEventListener('click', displaySWSHTrainers);
beaSWSH.addEventListener('click', displaySWSHTrainers);
allisterSWSH.addEventListener('click', displaySWSHTrainers);
opalSWSH.addEventListener('click', displaySWSHTrainers);
gordieSWSH.addEventListener('click', displaySWSHTrainers);
melonySWSH.addEventListener('click', displaySWSHTrainers);
piersSWSH.addEventListener('click', displaySWSHTrainers);
raihanSWSH.addEventListener('click', displaySWSHTrainers);
marnieSWSH.addEventListener('click', displaySWSHTrainers);
hopGSWSH.addEventListener('click', displaySWSHTrainers);
hopFSWSH.addEventListener('click', displaySWSHTrainers);
hopWSWSH.addEventListener('click', displaySWSHTrainers);
bedeSWSH.addEventListener('click', displaySWSHTrainers);
nessaCSWSH.addEventListener('click', displaySWSHTrainers);
beaCSWSH.addEventListener('click', displaySWSHTrainers);
allisterCSWSH.addEventListener('click', displaySWSHTrainers);
raihanCSWSH.addEventListener('click', displaySWSHTrainers);
leonGSWSH.addEventListener('click', displaySWSHTrainers);
leonFSWSH.addEventListener('click', displaySWSHTrainers);
leonWSWSH.addEventListener('click', displaySWSHTrainers);