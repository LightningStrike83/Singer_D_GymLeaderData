console.log('Welcome to the world of Pokemon!')

let rbgGame = document.querySelector("#rbg");
let yGame = document.querySelector("#y");

function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "flex";
    } else {
        element.style.display = "none";
    }
}

function hideOtherCharacters(activeChars, otherChars) {
    if (activeChars.style.display === "flex") {
        otherChars.style.display = "none";
    }
}

function openRBG() {
    let rbgChars = document.querySelector("#rbg_chars");
    let yChars = document.querySelector("#y_chars");
    
    toggleDisplay(rbgChars);
    hideOtherCharacters(rbgChars, yChars);
}

function openY() {
    let rbgChars = document.querySelector("#rbg_chars");
    let yChars = document.querySelector("#y_chars");
    
    toggleDisplay(yChars);
    hideOtherCharacters(yChars, rbgChars);
}

rbgGame.addEventListener('click', openRBG);
yGame.addEventListener('click', openY);