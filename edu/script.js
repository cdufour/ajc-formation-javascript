// ciblage du DOM
var app     = document.getElementById("app");
var result  = document.getElementById("result");

// autres variables globales
var sums        = [];
var points      = 0;
const NUM_OPS   = 3;
const LEVEL     = 3; // 1: facile, 2: moyen, 3: difficile

function startGame() {
    for (var i = 0; i < NUM_OPS; i++) {
        createOperation();
    }

    // bouton de correction
    var btnCorrect = document.createElement("button");
    btnCorrect.innerText = "Corriger";
    btnCorrect.addEventListener("click", check);
    app.appendChild(btnCorrect);
}

function createOperation() {
    var operand1 = random(1, 10 ** LEVEL);
    var operand2 = random(1, 10 ** LEVEL);
    var sum = operand1 + operand2;
    sums.push(sum); // stockage de la somme dans un tableau pour comparaison à la correction

    var div = document.createElement("div");
    div.innerHTML = 
        "<span>" + operand1 +  "</span> + <span>" + operand2 + "</span> = ";
    div.innerHTML += '<input type="number" class="game" />';
    div.innerHTML += '<span class="correction"></span>';
    app.appendChild(div);
}

function check() {
    //var inputs = document.getElementsByClassName("game");
    var inputs  = document.querySelectorAll(".game");
    var spans   = document.querySelectorAll(".correction");

    for (var i = 0; i < NUM_OPS; i++) {
        var answer = parseInt(inputs[i].value);
        spans[i].innerText = sums[i]; // affichage de la bonne réponse dans le DOM
        
        // la réponse du joueur est-elle identique à la sommes calculée et stoquée dans le tableau sum ?
        if (answer == sums[i]) {
            points++;
            spans[i].style.color = "green";
        } else {
            // mauvaise réponse
            spans[i].style.color = "red";
        }
    }

    // affichage des résultats
    result.innerText = points + "/" + NUM_OPS;
    points = 0; // reset

}

// retourne un entier aléatpore compris entre min et max
function random(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

startGame();