let falknerHGSS = document.querySelector ("#falkner2");
let bugsyHGSS = document.querySelector ("#bugsy2");
let whitneyHGSS = document.querySelector ("#whitney2");
let mortyHGSS = document.querySelector ("#morty2");
let chuckHGSS = document.querySelector ("#chuck2");
let jasmineHGSS = document.querySelector ("#jasmine2");
let pryceHGSS = document.querySelector ("#pryce2");
let clairHGSS = document.querySelector ("#clair2");
let willHGSS = document.querySelector ("#will2");
let kogaHGSS = document.querySelector ("#koga5");
let brunoHGSS = document.querySelector ("#bruno5");
let karenHGSS = document.querySelector ("#karen2");
let lanceHGSS = document.querySelector ("#lance5");
let brockHGSS = document.querySelector ("#brock5");
let mistyHGSS = document.querySelector ("#misty5");
let ltsurgeHGSS = document.querySelector ("#ltsurge5");
let erikaHGSS = document.querySelector ("#erika5");
let janineHGSS = document.querySelector ("#janine2");
let sabrinaHGSS = document.querySelector ("#sabrina5");
let blaineHGSS = document.querySelector ("#blaine5");
let blueHGSS = document.querySelector ("#blue5");
let redHGSS = document.querySelector ("#red2");

function displayHGSSTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showHGSSImages(newTrainerId);
        showPokemonHGSSImages(newTrainerId);
    }


    let hgssTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = hgss_trainers [hgssTrainer].namea;
    document.querySelector('#level1').textContent = hgss_trainers [hgssTrainer].levela;
    document.querySelector('#type1').textContent = hgss_trainers [hgssTrainer].typea;
    document.querySelector('#ability1').textContent= hgss_trainers [hgssTrainer].abilitya;
    document.querySelector('#item1').textContent = hgss_trainers [hgssTrainer].itema;
    document.querySelector('#hp1').textContent = hgss_trainers [hgssTrainer].hpa;
    document.querySelector('#atk1').textContent = hgss_trainers [hgssTrainer].atka;
    document.querySelector('#def1').textContent = hgss_trainers [hgssTrainer].defa;
    document.querySelector('#spatk1').textContent = hgss_trainers [hgssTrainer].spatka;
    document.querySelector('#spdef1').textContent = hgss_trainers [hgssTrainer].spdefa;
    document.querySelector('#spd1').textContent = hgss_trainers [hgssTrainer].spda;
    document.querySelector('#move1_1').textContent = hgss_trainers [hgssTrainer].move1a;
    document.querySelector('#move2_1').textContent = hgss_trainers [hgssTrainer].move2a;
    document.querySelector('#move3_1').textContent = hgss_trainers [hgssTrainer].move3a;
    document.querySelector('#move4_1').textContent = hgss_trainers [hgssTrainer].move4a;

    
    document.querySelector('#name2').textContent = hgss_trainers [hgssTrainer].nameb;
    document.querySelector('#level2').textContent = hgss_trainers [hgssTrainer].levelb;
    document.querySelector('#type2').textContent = hgss_trainers [hgssTrainer].typeb;
    document.querySelector('#ability2').textContent= hgss_trainers [hgssTrainer].abilityb;
    document.querySelector('#item2').textContent = hgss_trainers [hgssTrainer].itemb;
    document.querySelector('#hp2').textContent = hgss_trainers [hgssTrainer].hpb;
    document.querySelector('#atk2').textContent = hgss_trainers [hgssTrainer].atkb;
    document.querySelector('#def2').textContent = hgss_trainers [hgssTrainer].defb;
    document.querySelector('#spatk2').textContent = hgss_trainers [hgssTrainer].spatkb;
    document.querySelector('#spdef2').textContent = hgss_trainers [hgssTrainer].spdefb;
    document.querySelector('#spd2').textContent = hgss_trainers [hgssTrainer].spdb;
    document.querySelector('#move1_2').textContent = hgss_trainers [hgssTrainer].move1b;
    document.querySelector('#move2_2').textContent = hgss_trainers [hgssTrainer].move2b;
    document.querySelector('#move3_2').textContent = hgss_trainers [hgssTrainer].move3b;
    document.querySelector('#move4_2').textContent = hgss_trainers [hgssTrainer].move4b;

    document.querySelector('#name3').textContent = hgss_trainers [hgssTrainer].namec;
    document.querySelector('#level3').textContent = hgss_trainers [hgssTrainer].levelc;
    document.querySelector('#type3').textContent = hgss_trainers [hgssTrainer].typec;
    document.querySelector('#ability3').textContent= hgss_trainers [hgssTrainer].abilityc;
    document.querySelector('#item3').textContent = hgss_trainers [hgssTrainer].itemc;
    document.querySelector('#hp3').textContent = hgss_trainers [hgssTrainer].hpc;
    document.querySelector('#atk3').textContent = hgss_trainers [hgssTrainer].atkc;
    document.querySelector('#def3').textContent = hgss_trainers [hgssTrainer].defc;
    document.querySelector('#spatk3').textContent = hgss_trainers [hgssTrainer].spatkc;
    document.querySelector('#spdef3').textContent = hgss_trainers [hgssTrainer].spdefc;
    document.querySelector('#spd3').textContent = hgss_trainers [hgssTrainer].spdc;
    document.querySelector('#move1_3').textContent = hgss_trainers [hgssTrainer].move1c;
    document.querySelector('#move2_3').textContent = hgss_trainers [hgssTrainer].move2c;
    document.querySelector('#move3_3').textContent = hgss_trainers [hgssTrainer].move3c;
    document.querySelector('#move4_3').textContent = hgss_trainers [hgssTrainer].move4c;

    document.querySelector('#name4').textContent = hgss_trainers [hgssTrainer].named;
    document.querySelector('#level4').textContent = hgss_trainers [hgssTrainer].leveld;
    document.querySelector('#type4').textContent = hgss_trainers [hgssTrainer].typed;
    document.querySelector('#ability4').textContent= hgss_trainers [hgssTrainer].abilityd;
    document.querySelector('#item4').textContent = hgss_trainers [hgssTrainer].itemd;
    document.querySelector('#hp4').textContent = hgss_trainers [hgssTrainer].hpd;
    document.querySelector('#atk4').textContent = hgss_trainers [hgssTrainer].atkd;
    document.querySelector('#def4').textContent = hgss_trainers [hgssTrainer].defd;
    document.querySelector('#spatk4').textContent = hgss_trainers [hgssTrainer].spatkd;
    document.querySelector('#spdef4').textContent = hgss_trainers [hgssTrainer].spdefd;
    document.querySelector('#spd4').textContent = hgss_trainers [hgssTrainer].spdd;
    document.querySelector('#move1_4').textContent = hgss_trainers [hgssTrainer].move1d;
    document.querySelector('#move2_4').textContent = hgss_trainers [hgssTrainer].move2d;
    document.querySelector('#move3_4').textContent = hgss_trainers [hgssTrainer].move3d;
    document.querySelector('#move4_4').textContent = hgss_trainers [hgssTrainer].move4d;

    document.querySelector('#name5').textContent = hgss_trainers [hgssTrainer].namee;
    document.querySelector('#level5').textContent = hgss_trainers [hgssTrainer].levele;
    document.querySelector('#type5').textContent = hgss_trainers [hgssTrainer].typee;
    document.querySelector('#ability5').textContent= hgss_trainers [hgssTrainer].abilitye;
    document.querySelector('#item5').textContent = hgss_trainers [hgssTrainer].iteme;
    document.querySelector('#hp5').textContent = hgss_trainers [hgssTrainer].hpe;
    document.querySelector('#atk5').textContent = hgss_trainers [hgssTrainer].atke;
    document.querySelector('#def5').textContent = hgss_trainers [hgssTrainer].defe;
    document.querySelector('#spatk5').textContent = hgss_trainers [hgssTrainer].spatke;
    document.querySelector('#spdef5').textContent = hgss_trainers [hgssTrainer].spdefe;
    document.querySelector('#spd5').textContent = hgss_trainers [hgssTrainer].spde;
    document.querySelector('#move1_5').textContent = hgss_trainers [hgssTrainer].move1e;
    document.querySelector('#move2_5').textContent = hgss_trainers [hgssTrainer].move2e;
    document.querySelector('#move3_5').textContent = hgss_trainers [hgssTrainer].move3e;
    document.querySelector('#move4_5').textContent = hgss_trainers [hgssTrainer].move4e;

    document.querySelector('#name6').textContent = hgss_trainers [hgssTrainer].namef;
    document.querySelector('#level6').textContent = hgss_trainers [hgssTrainer].levelf;
    document.querySelector('#type6').textContent = hgss_trainers [hgssTrainer].typef;
    document.querySelector('#ability6').textContent= hgss_trainers [hgssTrainer].abilityf;
    document.querySelector('#item6').textContent = hgss_trainers [hgssTrainer].itemf;
    document.querySelector('#hp6').textContent = hgss_trainers [hgssTrainer].hpf;
    document.querySelector('#atk6').textContent = hgss_trainers [hgssTrainer].atkf;
    document.querySelector('#def6').textContent = hgss_trainers [hgssTrainer].deff;
    document.querySelector('#spatk6').textContent = hgss_trainers [hgssTrainer].spatkf;
    document.querySelector('#spdef6').textContent = hgss_trainers [hgssTrainer].spdeff;
    document.querySelector('#spd6').textContent = hgss_trainers [hgssTrainer].spdf;
    document.querySelector('#move1_6').textContent = hgss_trainers [hgssTrainer].move1f;
    document.querySelector('#move2_6').textContent = hgss_trainers [hgssTrainer].move2f;
    document.querySelector('#move3_6').textContent = hgss_trainers [hgssTrainer].move3f;
    document.querySelector('#move4_6').textContent = hgss_trainers [hgssTrainer].move4f;
}

function showHGSSImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/hgss/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonHGSSImages(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/hgss/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/hgss/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/hgss/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/hgss/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/hgss/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/hgss/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

falknerHGSS.addEventListener('click', displayHGSSTrainers);
bugsyHGSS.addEventListener('click', displayHGSSTrainers);
whitneyHGSS.addEventListener('click', displayHGSSTrainers);
mortyHGSS.addEventListener('click', displayHGSSTrainers);
chuckHGSS.addEventListener('click', displayHGSSTrainers);
jasmineHGSS.addEventListener('click', displayHGSSTrainers);
pryceHGSS.addEventListener('click', displayHGSSTrainers);
clairHGSS.addEventListener('click', displayHGSSTrainers);
willHGSS.addEventListener('click', displayHGSSTrainers);
kogaHGSS.addEventListener('click', displayHGSSTrainers);
brunoHGSS.addEventListener('click', displayHGSSTrainers);
karenHGSS.addEventListener('click', displayHGSSTrainers);
lanceHGSS.addEventListener('click', displayHGSSTrainers);
brockHGSS.addEventListener('click', displayHGSSTrainers);
mistyHGSS.addEventListener('click', displayHGSSTrainers);
ltsurgeHGSS.addEventListener('click', displayHGSSTrainers);
erikaHGSS.addEventListener('click', displayHGSSTrainers);
janineHGSS.addEventListener('click', displayHGSSTrainers);
sabrinaHGSS.addEventListener('click', displayHGSSTrainers);
blaineHGSS.addEventListener('click', displayHGSSTrainers);
blueHGSS.addEventListener('click', displayHGSSTrainers);
redHGSS.addEventListener('click', displayHGSSTrainers);