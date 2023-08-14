let roarkPT = document.querySelector ("#roark2");
let gardeniaPT = document.querySelector ("#gardenia2");
let maylenePT = document.querySelector ("#maylene2");
let crasherwakePT = document.querySelector ("#crasherwake2");
let fantinaPT = document.querySelector ("#fantina2");
let byronPT = document.querySelector ("#byron2");
let candicePT = document.querySelector ("#candice2");
let volknerPT = document.querySelector ("#volkner2");
let aaronPT = document.querySelector ("#aaron2");
let berthaPT = document.querySelector ("#bertha2");
let flintPT = document.querySelector ("#flint2");
let lucianPT = document.querySelector ("#lucian2");
let cynthiaPT = document.querySelector ("#cynthia2");

function displayPTTrainers() {
    let ptTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = pt_trainers [ptTrainer].namea;
    document.querySelector('#level1').textContent = pt_trainers [ptTrainer].levela;
    document.querySelector('#type1').textContent = pt_trainers [ptTrainer].typea;
    document.querySelector('#ability1').textContent= pt_trainers [ptTrainer].abilitya;
    document.querySelector('#item1').textContent = pt_trainers [ptTrainer].itema;
    document.querySelector('#hp1').textContent = pt_trainers [ptTrainer].hpa;
    document.querySelector('#atk1').textContent = pt_trainers [ptTrainer].atka;
    document.querySelector('#def1').textContent = pt_trainers [ptTrainer].defa;
    document.querySelector('#spatk1').textContent = pt_trainers [ptTrainer].spatka;
    document.querySelector('#spdef1').textContent = pt_trainers [ptTrainer].spdefa;
    document.querySelector('#spd1').textContent = pt_trainers [ptTrainer].spda;
    document.querySelector('#move1_1').textContent = pt_trainers [ptTrainer].move1a;
    document.querySelector('#move2_1').textContent = pt_trainers [ptTrainer].move2a;
    document.querySelector('#move3_1').textContent = pt_trainers [ptTrainer].move3a;
    document.querySelector('#move4_1').textContent = pt_trainers [ptTrainer].move4a;

    
    document.querySelector('#name2').textContent = pt_trainers [ptTrainer].nameb;
    document.querySelector('#level2').textContent = pt_trainers [ptTrainer].levelb;
    document.querySelector('#type2').textContent = pt_trainers [ptTrainer].typeb;
    document.querySelector('#ability2').textContent= pt_trainers [ptTrainer].abilityb;
    document.querySelector('#item2').textContent = pt_trainers [ptTrainer].itemb;
    document.querySelector('#hp2').textContent = pt_trainers [ptTrainer].hpb;
    document.querySelector('#atk2').textContent = pt_trainers [ptTrainer].atkb;
    document.querySelector('#def2').textContent = pt_trainers [ptTrainer].defb;
    document.querySelector('#spatk2').textContent = pt_trainers [ptTrainer].spatkb;
    document.querySelector('#spdef2').textContent = pt_trainers [ptTrainer].spdefb;
    document.querySelector('#spd2').textContent = pt_trainers [ptTrainer].spdb;
    document.querySelector('#move1_2').textContent = pt_trainers [ptTrainer].move1b;
    document.querySelector('#move2_2').textContent = pt_trainers [ptTrainer].move2b;
    document.querySelector('#move3_2').textContent = pt_trainers [ptTrainer].move3b;
    document.querySelector('#move4_2').textContent = pt_trainers [ptTrainer].move4b;

    document.querySelector('#name3').textContent = pt_trainers [ptTrainer].namec;
    document.querySelector('#level3').textContent = pt_trainers [ptTrainer].levelc;
    document.querySelector('#type3').textContent = pt_trainers [ptTrainer].typec;
    document.querySelector('#ability3').textContent= pt_trainers [ptTrainer].abilityc;
    document.querySelector('#item3').textContent = pt_trainers [ptTrainer].itemc;
    document.querySelector('#hp3').textContent = pt_trainers [ptTrainer].hpc;
    document.querySelector('#atk3').textContent = pt_trainers [ptTrainer].atkc;
    document.querySelector('#def3').textContent = pt_trainers [ptTrainer].defc;
    document.querySelector('#spatk3').textContent = pt_trainers [ptTrainer].spatkc;
    document.querySelector('#spdef3').textContent = pt_trainers [ptTrainer].spdefc;
    document.querySelector('#spd3').textContent = pt_trainers [ptTrainer].spdc;
    document.querySelector('#move1_3').textContent = pt_trainers [ptTrainer].move1c;
    document.querySelector('#move2_3').textContent = pt_trainers [ptTrainer].move2c;
    document.querySelector('#move3_3').textContent = pt_trainers [ptTrainer].move3c;
    document.querySelector('#move4_3').textContent = pt_trainers [ptTrainer].move4c;

    document.querySelector('#name4').textContent = pt_trainers [ptTrainer].named;
    document.querySelector('#level4').textContent = pt_trainers [ptTrainer].leveld;
    document.querySelector('#type4').textContent = pt_trainers [ptTrainer].typed;
    document.querySelector('#ability4').textContent= pt_trainers [ptTrainer].abilityd;
    document.querySelector('#item4').textContent = pt_trainers [ptTrainer].itemd;
    document.querySelector('#hp4').textContent = pt_trainers [ptTrainer].hpd;
    document.querySelector('#atk4').textContent = pt_trainers [ptTrainer].atkd;
    document.querySelector('#def4').textContent = pt_trainers [ptTrainer].defd;
    document.querySelector('#spatk4').textContent = pt_trainers [ptTrainer].spatkd;
    document.querySelector('#spdef4').textContent = pt_trainers [ptTrainer].spdefd;
    document.querySelector('#spd4').textContent = pt_trainers [ptTrainer].spdd;
    document.querySelector('#move1_4').textContent = pt_trainers [ptTrainer].move1d;
    document.querySelector('#move2_4').textContent = pt_trainers [ptTrainer].move2d;
    document.querySelector('#move3_4').textContent = pt_trainers [ptTrainer].move3d;
    document.querySelector('#move4_4').textContent = pt_trainers [ptTrainer].move4d;

    document.querySelector('#name5').textContent = pt_trainers [ptTrainer].namee;
    document.querySelector('#level5').textContent = pt_trainers [ptTrainer].levele;
    document.querySelector('#type5').textContent = pt_trainers [ptTrainer].typee;
    document.querySelector('#ability5').textContent= pt_trainers [ptTrainer].abilitye;
    document.querySelector('#item5').textContent = pt_trainers [ptTrainer].iteme;
    document.querySelector('#hp5').textContent = pt_trainers [ptTrainer].hpe;
    document.querySelector('#atk5').textContent = pt_trainers [ptTrainer].atke;
    document.querySelector('#def5').textContent = pt_trainers [ptTrainer].defe;
    document.querySelector('#spatk5').textContent = pt_trainers [ptTrainer].spatke;
    document.querySelector('#spdef5').textContent = pt_trainers [ptTrainer].spdefe;
    document.querySelector('#spd5').textContent = pt_trainers [ptTrainer].spde;
    document.querySelector('#move1_5').textContent =pts_trainers [ptTrainer].move1e;
    document.querySelector('#move2_5').textContent = pt_trainers [ptTrainer].move2e;
    document.querySelector('#move3_5').textContent = pt_trainers [ptTrainer].move3e;
    document.querySelector('#move4_5').textContent = pt_trainers [ptTrainer].move4e;

    document.querySelector('#name6').textContent = pt_trainers [ptTrainer].namef;
    document.querySelector('#level6').textContent = pt_trainers [ptTrainer].levelf;
    document.querySelector('#type6').textContent = pt_trainers [ptTrainer].typef;
    document.querySelector('#ability6').textContent= pt_trainers [ptTrainer].abilityf;
    document.querySelector('#item6').textContent = pt_trainers [ptTrainer].itemf;
    document.querySelector('#hp6').textContent = pt_trainers [ptTrainer].hpf;
    document.querySelector('#atk6').textContent = pt_trainers [ptTrainer].atkf;
    document.querySelector('#def6').textContent = pt_trainers [ptTrainer].deff;
    document.querySelector('#spatk6').textContent = pt_trainers [ptTrainer].spatkf;
    document.querySelector('#spdef6').textContent = pt_trainers [ptTrainer].spdeff;
    document.querySelector('#spd6').textContent = pt_trainers [ptTrainer].spdf;
    document.querySelector('#move1_6').textContent = pt_trainers [ptTrainer].move1f;
    document.querySelector('#move2_6').textContent = pt_trainers [ptTrainer].move2f;
    document.querySelector('#move3_6').textContent = pt_trainers [ptTrainer].move3f;
    document.querySelector('#move4_6').textContent = pt_trainers [ptTrainer].move4f;
}

roarkPT.addEventListener('click', displayPTTrainers);
gardeniaPT.addEventListener('click', displayPTTrainers);
maylenePT.addEventListener('click', displayPTTrainers);
crasherwakePT.addEventListener('click', displayPTTrainers);
fantinaPT.addEventListener('click', displayPTTrainers);
byronPT.addEventListener('click', displayPTTrainers);
candicePT.addEventListener('click', displayPTTrainers);
volknerPT.addEventListener('click', displayPTTrainers);
aaronPT.addEventListener('click', displayPTTrainers);
berthaPT.addEventListener('click', displayPTTrainers);
flintPT.addEventListener('click', displayPTTrainers);
lucianPT.addEventListener('click', displayPTTrainers);
cynthiaPT.addEventListener('click', displayPTTrainers);