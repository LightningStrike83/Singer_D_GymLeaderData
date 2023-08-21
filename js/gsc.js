let falknerGSC = document.querySelector ("#falkner1");
let bugsyGSC = document.querySelector ("#bugsy1");
let whitneyGSC = document.querySelector ("#whitney1");
let mortyGSC = document.querySelector ("#morty1");
let chuckGSC = document.querySelector ("#chuck1");
let jasmineGSC = document.querySelector ("#jasmine1");
let pryceGSC = document.querySelector ("#pryce1");
let clairGSC = document.querySelector ("#clair1");
let willGSC = document.querySelector ("#will1");
let kogaGSC = document.querySelector ("#koga3");
let brunoGSC = document.querySelector ("#bruno3");
let karenGSC = document.querySelector ("#karen1");
let lanceGSC = document.querySelector ("#lance3");
let brockGSC = document.querySelector ("#brock3");
let mistyGSC = document.querySelector ("#misty3");
let ltsurgeGSC = document.querySelector ("#ltsurge3");
let erikaGSC = document.querySelector ("#erika3");
let janineGSC = document.querySelector ("#janine1");
let sabrinaGSC = document.querySelector ("#sabrina3");
let blaineGSC = document.querySelector ("#blaine3");
let blueGSC = document.querySelector ("#blue3");
let redGSC = document.querySelector ("#red1");

function displayGSCTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showGSCImages(newTrainerId);
        showPokemonGSCImages(newTrainerId);
    }


    let gscTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = gsc_trainers [gscTrainer].namea;
    document.querySelector('#level1').textContent = gsc_trainers [gscTrainer].levela;
    document.querySelector('#type1').textContent = gsc_trainers [gscTrainer].typea;
    document.querySelector('#ability1').textContent= gsc_trainers [gscTrainer].abilitya;
    document.querySelector('#item1').textContent = gsc_trainers [gscTrainer].itema;
    document.querySelector('#hp1').textContent = gsc_trainers [gscTrainer].hpa;
    document.querySelector('#atk1').textContent = gsc_trainers [gscTrainer].atka;
    document.querySelector('#def1').textContent = gsc_trainers [gscTrainer].defa;
    document.querySelector('#spatk1').textContent = gsc_trainers [gscTrainer].spatka;
    document.querySelector('#spdef1').textContent = gsc_trainers [gscTrainer].spdefa;
    document.querySelector('#spd1').textContent = gsc_trainers [gscTrainer].spda;
    document.querySelector('#move1_1').textContent = gsc_trainers [gscTrainer].move1a;
    document.querySelector('#move2_1').textContent = gsc_trainers [gscTrainer].move2a;
    document.querySelector('#move3_1').textContent = gsc_trainers [gscTrainer].move3a;
    document.querySelector('#move4_1').textContent = gsc_trainers [gscTrainer].move4a;

    
    document.querySelector('#name2').textContent = gsc_trainers [gscTrainer].nameb;
    document.querySelector('#level2').textContent = gsc_trainers [gscTrainer].levelb;
    document.querySelector('#type2').textContent = gsc_trainers [gscTrainer].typeb;
    document.querySelector('#ability2').textContent= gsc_trainers [gscTrainer].abilityb;
    document.querySelector('#item2').textContent = gsc_trainers [gscTrainer].itemb;
    document.querySelector('#hp2').textContent = gsc_trainers [gscTrainer].hpb;
    document.querySelector('#atk2').textContent = gsc_trainers [gscTrainer].atkb;
    document.querySelector('#def2').textContent = gsc_trainers [gscTrainer].defb;
    document.querySelector('#spatk2').textContent = gsc_trainers [gscTrainer].spatkb;
    document.querySelector('#spdef2').textContent = gsc_trainers [gscTrainer].spdefb;
    document.querySelector('#spd2').textContent = gsc_trainers [gscTrainer].spdb;
    document.querySelector('#move1_2').textContent = gsc_trainers [gscTrainer].move1b;
    document.querySelector('#move2_2').textContent = gsc_trainers [gscTrainer].move2b;
    document.querySelector('#move3_2').textContent = gsc_trainers [gscTrainer].move3b;
    document.querySelector('#move4_2').textContent = gsc_trainers [gscTrainer].move4b;

    document.querySelector('#name3').textContent = gsc_trainers [gscTrainer].namec;
    document.querySelector('#level3').textContent = gsc_trainers [gscTrainer].levelc;
    document.querySelector('#type3').textContent = gsc_trainers [gscTrainer].typec;
    document.querySelector('#ability3').textContent= gsc_trainers [gscTrainer].abilityc;
    document.querySelector('#item3').textContent = gsc_trainers [gscTrainer].itemc;
    document.querySelector('#hp3').textContent = gsc_trainers [gscTrainer].hpc;
    document.querySelector('#atk3').textContent = gsc_trainers [gscTrainer].atkc;
    document.querySelector('#def3').textContent = gsc_trainers [gscTrainer].defc;
    document.querySelector('#spatk3').textContent = gsc_trainers [gscTrainer].spatkc;
    document.querySelector('#spdef3').textContent = gsc_trainers [gscTrainer].spdefc;
    document.querySelector('#spd3').textContent = gsc_trainers [gscTrainer].spdc;
    document.querySelector('#move1_3').textContent = gsc_trainers [gscTrainer].move1c;
    document.querySelector('#move2_3').textContent = gsc_trainers [gscTrainer].move2c;
    document.querySelector('#move3_3').textContent = gsc_trainers [gscTrainer].move3c;
    document.querySelector('#move4_3').textContent = gsc_trainers [gscTrainer].move4c;

    document.querySelector('#name4').textContent = gsc_trainers [gscTrainer].named;
    document.querySelector('#level4').textContent = gsc_trainers [gscTrainer].leveld;
    document.querySelector('#type4').textContent = gsc_trainers [gscTrainer].typed;
    document.querySelector('#ability4').textContent= gsc_trainers [gscTrainer].abilityd;
    document.querySelector('#item4').textContent = gsc_trainers [gscTrainer].itemd;
    document.querySelector('#hp4').textContent = gsc_trainers [gscTrainer].hpd;
    document.querySelector('#atk4').textContent = gsc_trainers [gscTrainer].atkd;
    document.querySelector('#def4').textContent = gsc_trainers [gscTrainer].defd;
    document.querySelector('#spatk4').textContent = gsc_trainers [gscTrainer].spatkd;
    document.querySelector('#spdef4').textContent = gsc_trainers [gscTrainer].spdefd;
    document.querySelector('#spd4').textContent = gsc_trainers [gscTrainer].spdd;
    document.querySelector('#move1_4').textContent = gsc_trainers [gscTrainer].move1d;
    document.querySelector('#move2_4').textContent = gsc_trainers [gscTrainer].move2d;
    document.querySelector('#move3_4').textContent = gsc_trainers [gscTrainer].move3d;
    document.querySelector('#move4_4').textContent = gsc_trainers [gscTrainer].move4d;

    document.querySelector('#name5').textContent = gsc_trainers [gscTrainer].namee;
    document.querySelector('#level5').textContent = gsc_trainers [gscTrainer].levele;
    document.querySelector('#type5').textContent = gsc_trainers [gscTrainer].typee;
    document.querySelector('#ability5').textContent= gsc_trainers [gscTrainer].abilitye;
    document.querySelector('#item5').textContent = gsc_trainers [gscTrainer].iteme;
    document.querySelector('#hp5').textContent = gsc_trainers [gscTrainer].hpe;
    document.querySelector('#atk5').textContent = gsc_trainers [gscTrainer].atke;
    document.querySelector('#def5').textContent = gsc_trainers [gscTrainer].defe;
    document.querySelector('#spatk5').textContent = gsc_trainers [gscTrainer].spatke;
    document.querySelector('#spdef5').textContent = gsc_trainers [gscTrainer].spdefe;
    document.querySelector('#spd5').textContent = gsc_trainers [gscTrainer].spde;
    document.querySelector('#move1_5').textContent = gsc_trainers [gscTrainer].move1e;
    document.querySelector('#move2_5').textContent = gsc_trainers [gscTrainer].move2e;
    document.querySelector('#move3_5').textContent = gsc_trainers [gscTrainer].move3e;
    document.querySelector('#move4_5').textContent = gsc_trainers [gscTrainer].move4e;

    document.querySelector('#name6').textContent = gsc_trainers [gscTrainer].namef;
    document.querySelector('#level6').textContent = gsc_trainers [gscTrainer].levelf;
    document.querySelector('#type6').textContent = gsc_trainers [gscTrainer].typef;
    document.querySelector('#ability6').textContent= gsc_trainers [gscTrainer].abilityf;
    document.querySelector('#item6').textContent = gsc_trainers [gscTrainer].itemf;
    document.querySelector('#hp6').textContent = gsc_trainers [gscTrainer].hpf;
    document.querySelector('#atk6').textContent = gsc_trainers [gscTrainer].atkf;
    document.querySelector('#def6').textContent = gsc_trainers [gscTrainer].deff;
    document.querySelector('#spatk6').textContent = gsc_trainers [gscTrainer].spatkf;
    document.querySelector('#spdef6').textContent = gsc_trainers [gscTrainer].spdeff;
    document.querySelector('#spd6').textContent = gsc_trainers [gscTrainer].spdf;
    document.querySelector('#move1_6').textContent = gsc_trainers [gscTrainer].move1f;
    document.querySelector('#move2_6').textContent = gsc_trainers [gscTrainer].move2f;
    document.querySelector('#move3_6').textContent = gsc_trainers [gscTrainer].move3f;
    document.querySelector('#move4_6').textContent = gsc_trainers [gscTrainer].move4f;
}

function showGSCImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/gsc/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonGSCImages(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/gsc/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/gsc/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/gsc/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/gsc/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/gsc/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/gsc/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

falknerGSC.addEventListener('click', displayGSCTrainers);
bugsyGSC.addEventListener('click', displayGSCTrainers);
whitneyGSC.addEventListener('click', displayGSCTrainers);
mortyGSC.addEventListener('click', displayGSCTrainers);
chuckGSC.addEventListener('click', displayGSCTrainers);
jasmineGSC.addEventListener('click', displayGSCTrainers);
pryceGSC.addEventListener('click', displayGSCTrainers);
clairGSC.addEventListener('click', displayGSCTrainers);
willGSC.addEventListener('click', displayGSCTrainers);
kogaGSC.addEventListener('click', displayGSCTrainers);
brunoGSC.addEventListener('click', displayGSCTrainers);
karenGSC.addEventListener('click', displayGSCTrainers);
lanceGSC.addEventListener('click', displayGSCTrainers);
brockGSC.addEventListener('click', displayGSCTrainers);
mistyGSC.addEventListener('click', displayGSCTrainers);
ltsurgeGSC.addEventListener('click', displayGSCTrainers);
erikaGSC.addEventListener('click', displayGSCTrainers);
janineGSC.addEventListener('click', displayGSCTrainers);
sabrinaGSC.addEventListener('click', displayGSCTrainers);
blaineGSC.addEventListener('click', displayGSCTrainers);
blueGSC.addEventListener('click', displayGSCTrainers);
redGSC.addEventListener('click', displayGSCTrainers);