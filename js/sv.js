let katySV = document.querySelector ("#katy1");
let brassiusSV = document.querySelector ("#brassius1");
let ionoSV = document.querySelector ("#iono1");
let kofuSV = document.querySelector ("#kofu1");
let larrySV = document.querySelector ("#larry1");
let rymeSV = document.querySelector ("#ryme1");
let tulipSV = document.querySelector ("#tulip1");
let grushaSV = document.querySelector ("#grusha1");
let rikaSV = document.querySelector ("#rika1");
let poppySV = document.querySelector ("#poppy1");
let larryE4SV = document.querySelector ("#larry2");
let hasselSV = document.querySelector ("#hassel1");
let geetaSV = document.querySelector ("#geeta1");
let nemonaGSV = document.querySelector ("#nemona1_g");
let nemonaFSV = document.querySelector ("#nemona1_f");
let nemonaWSV = document.querySelector ("#nemona1_w");
let giacomoSV = document.querySelector ("#giacomo1");
let melaSV = document.querySelector ("#mela1");
let atticusSV = document.querySelector ("#atticus1");
let ortegaSV = document.querySelector ("#ortega1");
let eriSV = document.querySelector ("#eri1");
let clavellGSV = document.querySelector ("#clavell1_g");
let clavellFSV = document.querySelector ("#clavell1_f");
let clavellWSV = document.querySelector ("#clavell1_w");
let cassiopeiaSV = document.querySelector ("#cassiopeia1");
let arvenSV = document.querySelector ("#arven1");
let sadaSV = document.querySelector ("#sada1");
let turoSV = document.querySelector ("#turo1");

function displaySVTrainers() {

    let newTrainerId = this.id;
    if (newTrainerId !== currentTrainerId) {
        currentTrainerId = newTrainerId;
        showSVImages(newTrainerId);
        showPokemonSVImages(newTrainerId);
    }


    let svTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = sv_trainers [svTrainer].namea;
    document.querySelector('#level1').textContent = sv_trainers [svTrainer].levela;
    document.querySelector('#type1').textContent = sv_trainers [svTrainer].typea;
    document.querySelector('#ability1').textContent= sv_trainers [svTrainer].abilitya;
    document.querySelector('#item1').textContent = sv_trainers [svTrainer].itema;
    document.querySelector('#hp1').textContent = sv_trainers [svTrainer].hpa;
    document.querySelector('#atk1').textContent = sv_trainers [svTrainer].atka;
    document.querySelector('#def1').textContent = sv_trainers [svTrainer].defa;
    document.querySelector('#spatk1').textContent = sv_trainers [svTrainer].spatka;
    document.querySelector('#spdef1').textContent = sv_trainers [svTrainer].spdefa;
    document.querySelector('#spd1').textContent = sv_trainers [svTrainer].spda;
    document.querySelector('#move1_1').textContent = sv_trainers [svTrainer].move1a;
    document.querySelector('#move2_1').textContent = sv_trainers [svTrainer].move2a;
    document.querySelector('#move3_1').textContent = sv_trainers [svTrainer].move3a;
    document.querySelector('#move4_1').textContent = sv_trainers [svTrainer].move4a;

    
    document.querySelector('#name2').textContent = sv_trainers [svTrainer].nameb;
    document.querySelector('#level2').textContent = sv_trainers [svTrainer].levelb;
    document.querySelector('#type2').textContent = sv_trainers [svTrainer].typeb;
    document.querySelector('#ability2').textContent= sv_trainers [svTrainer].abilityb;
    document.querySelector('#item2').textContent = sv_trainers [svTrainer].itemb;
    document.querySelector('#hp2').textContent = sv_trainers [svTrainer].hpb;
    document.querySelector('#atk2').textContent = sv_trainers [svTrainer].atkb;
    document.querySelector('#def2').textContent = sv_trainers [svTrainer].defb;
    document.querySelector('#spatk2').textContent = sv_trainers [svTrainer].spatkb;
    document.querySelector('#spdef2').textContent = sv_trainers [svTrainer].spdefb;
    document.querySelector('#spd2').textContent = sv_trainers [svTrainer].spdb;
    document.querySelector('#move1_2').textContent = sv_trainers [svTrainer].move1b;
    document.querySelector('#move2_2').textContent = sv_trainers [svTrainer].move2b;
    document.querySelector('#move3_2').textContent = sv_trainers [svTrainer].move3b;
    document.querySelector('#move4_2').textContent = sv_trainers [svTrainer].move4b;

    document.querySelector('#name3').textContent = sv_trainers [svTrainer].namec;
    document.querySelector('#level3').textContent = sv_trainers [svTrainer].levelc;
    document.querySelector('#type3').textContent = sv_trainers [svTrainer].typec;
    document.querySelector('#ability3').textContent= sv_trainers [svTrainer].abilityc;
    document.querySelector('#item3').textContent = sv_trainers [svTrainer].itemc;
    document.querySelector('#hp3').textContent = sv_trainers [svTrainer].hpc;
    document.querySelector('#atk3').textContent = sv_trainers [svTrainer].atkc;
    document.querySelector('#def3').textContent = sv_trainers [svTrainer].defc;
    document.querySelector('#spatk3').textContent = sv_trainers [svTrainer].spatkc;
    document.querySelector('#spdef3').textContent = sv_trainers [svTrainer].spdefc;
    document.querySelector('#spd3').textContent = sv_trainers [svTrainer].spdc;
    document.querySelector('#move1_3').textContent = sv_trainers [svTrainer].move1c;
    document.querySelector('#move2_3').textContent = sv_trainers [svTrainer].move2c;
    document.querySelector('#move3_3').textContent = sv_trainers [svTrainer].move3c;
    document.querySelector('#move4_3').textContent = sv_trainers [svTrainer].move4c;

    document.querySelector('#name4').textContent = sv_trainers [svTrainer].named;
    document.querySelector('#level4').textContent = sv_trainers [svTrainer].leveld;
    document.querySelector('#type4').textContent = sv_trainers [svTrainer].typed;
    document.querySelector('#ability4').textContent= sv_trainers [svTrainer].abilityd;
    document.querySelector('#item4').textContent = sv_trainers [svTrainer].itemd;
    document.querySelector('#hp4').textContent = sv_trainers [svTrainer].hpd;
    document.querySelector('#atk4').textContent = sv_trainers [svTrainer].atkd;
    document.querySelector('#def4').textContent = sv_trainers [svTrainer].defd;
    document.querySelector('#spatk4').textContent = sv_trainers [svTrainer].spatkd;
    document.querySelector('#spdef4').textContent = sv_trainers [svTrainer].spdefd;
    document.querySelector('#spd4').textContent = sv_trainers [svTrainer].spdd;
    document.querySelector('#move1_4').textContent = sv_trainers [svTrainer].move1d;
    document.querySelector('#move2_4').textContent = sv_trainers [svTrainer].move2d;
    document.querySelector('#move3_4').textContent = sv_trainers [svTrainer].move3d;
    document.querySelector('#move4_4').textContent = sv_trainers [svTrainer].move4d;

    document.querySelector('#name5').textContent = sv_trainers [svTrainer].namee;
    document.querySelector('#level5').textContent = sv_trainers [svTrainer].levele;
    document.querySelector('#type5').textContent = sv_trainers [svTrainer].typee;
    document.querySelector('#ability5').textContent= sv_trainers [svTrainer].abilitye;
    document.querySelector('#item5').textContent = sv_trainers [svTrainer].iteme;
    document.querySelector('#hp5').textContent = sv_trainers [svTrainer].hpe;
    document.querySelector('#atk5').textContent = sv_trainers [svTrainer].atke;
    document.querySelector('#def5').textContent = sv_trainers [svTrainer].defe;
    document.querySelector('#spatk5').textContent = sv_trainers [svTrainer].spatke;
    document.querySelector('#spdef5').textContent = sv_trainers [svTrainer].spdefe;
    document.querySelector('#spd5').textContent = sv_trainers [svTrainer].spde;
    document.querySelector('#move1_5').textContent = sv_trainers [svTrainer].move1e;
    document.querySelector('#move2_5').textContent = sv_trainers [svTrainer].move2e;
    document.querySelector('#move3_5').textContent = sv_trainers [svTrainer].move3e;
    document.querySelector('#move4_5').textContent = sv_trainers [svTrainer].move4e;

    document.querySelector('#name6').textContent = sv_trainers [svTrainer].namef;
    document.querySelector('#level6').textContent = sv_trainers [svTrainer].levelf;
    document.querySelector('#type6').textContent = sv_trainers [svTrainer].typef;
    document.querySelector('#ability6').textContent= sv_trainers [svTrainer].abilityf;
    document.querySelector('#item6').textContent = sv_trainers [svTrainer].itemf;
    document.querySelector('#hp6').textContent = sv_trainers [svTrainer].hpf;
    document.querySelector('#atk6').textContent = sv_trainers [svTrainer].atkf;
    document.querySelector('#def6').textContent = sv_trainers [svTrainer].deff;
    document.querySelector('#spatk6').textContent = sv_trainers [svTrainer].spatkf;
    document.querySelector('#spdef6').textContent = sv_trainers [svTrainer].spdeff;
    document.querySelector('#spd6').textContent = sv_trainers [svTrainer].spdf;
    document.querySelector('#move1_6').textContent = sv_trainers [svTrainer].move1f;
    document.querySelector('#move2_6').textContent = sv_trainers [svTrainer].move2f;
    document.querySelector('#move3_6').textContent = sv_trainers [svTrainer].move3f;
    document.querySelector('#move4_6').textContent = sv_trainers [svTrainer].move4f;
}

function showSVImages(trainerId) {
    var trainerPicture = document.querySelector("#trainer_image");
    
    trainerPicture.innerHTML = "";

    var imgTrainer = document.createElement("img");
    imgTrainer.src = "images/trainers/sv/" + trainerId + ".png";
    trainerPicture.appendChild(imgTrainer);
}

function showPokemonSVImages(trainerId) {
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

    
    imgPokemon1.src = "images/pokemon/sv/" + trainerId + "_1.png";
    imgPokemon2.src = "images/pokemon/sv/" + trainerId + "_2.png";
    imgPokemon3.src = "images/pokemon/sv/" + trainerId + "_3.png";
    imgPokemon4.src = "images/pokemon/sv/" + trainerId + "_4.png";
    imgPokemon5.src = "images/pokemon/sv/" + trainerId + "_5.png";
    imgPokemon6.src = "images/pokemon/sv/" + trainerId + "_6.png";

    pokemon1Picture.appendChild(imgPokemon1);
    pokemon2Picture.appendChild(imgPokemon2);
    pokemon3Picture.appendChild(imgPokemon3);
    pokemon4Picture.appendChild(imgPokemon4);
    pokemon5Picture.appendChild(imgPokemon5);
    pokemon6Picture.appendChild(imgPokemon6);
}

katySV.addEventListener('click', displaySVTrainers);
brassiusSV.addEventListener('click', displaySVTrainers);
ionoSV.addEventListener('click', displaySVTrainers);
kofuSV.addEventListener('click', displaySVTrainers);
larrySV.addEventListener('click', displaySVTrainers);
rymeSV.addEventListener('click', displaySVTrainers);
tulipSV.addEventListener('click', displaySVTrainers);
grushaSV.addEventListener('click', displaySVTrainers);
rikaSV.addEventListener('click', displaySVTrainers);
poppySV.addEventListener('click', displaySVTrainers);
larryE4SV.addEventListener('click', displaySVTrainers);
hasselSV.addEventListener('click', displaySVTrainers);
geetaSV.addEventListener('click', displaySVTrainers);
nemonaGSV.addEventListener('click', displaySVTrainers);
nemonaFSV.addEventListener('click', displaySVTrainers);
nemonaWSV.addEventListener('click', displaySVTrainers);
giacomoSV.addEventListener('click', displaySVTrainers);
melaSV.addEventListener('click', displaySVTrainers);
atticusSV.addEventListener('click', displaySVTrainers);
ortegaSV.addEventListener('click', displaySVTrainers);
eriSV.addEventListener('click', displaySVTrainers);
clavellGSV.addEventListener('click', displaySVTrainers);
clavellFSV.addEventListener('click', displaySVTrainers);
clavellWSV.addEventListener('click', displaySVTrainers);
cassiopeiaSV.addEventListener('click', displaySVTrainers);
arvenSV.addEventListener('click', displaySVTrainers);
sadaSV.addEventListener('click', displaySVTrainers);
turoSV.addEventListener('click', displaySVTrainers);
