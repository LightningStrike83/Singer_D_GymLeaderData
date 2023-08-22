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