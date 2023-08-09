console.log('Welcome to the world of Pokemon!')

let rbgGame = document.querySelector ("#rbg");
let brockRBG = document.querySelector ("#brock1");
let mistyRBG = document.querySelector ("#misty1");

function openRBG() {
    let rbgChars = document.querySelector ("#rbg_chars");
    if (rbgChars.style.display === "none") {
        rbgChars.style.display = "flex";
      } else {
        rbgChars.style.display = "none";
      }
}

function displayRBGTrainers() {
    let rgbTrainer = this.dataset.member;

    document.querySelector('#name1').textContent = rbg_trainers [rgbTrainer].name;
    document.querySelector('#name2').textContent = rbg_trainers [rgbTrainer].name2;
}

rbgGame.addEventListener('click',openRBG);
brockRBG.addEventListener('click', displayRBGTrainers)
mistyRBG.addEventListener('click', displayRBGTrainers)