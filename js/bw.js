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
