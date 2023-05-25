/*
TP: codegen - correction
*/

// ciblage du DOM
const btnGenerate   = document.getElementById("btnGenerate");
const codeLen       = document.getElementById("codeLen");
const divCode       = document.getElementById("divCode");

const ADD_LETTERS   = false; // booléen de configuration pour ajouter des lettres dans le code


// écouteurs d'événements
btnGenerate.addEventListener("click", generateCode);
codeLen.addEventListener("keyup", onKeyup);

function generateCode() {
    var len = parseInt(codeLen.value);
    console.log("Code length: " + len);
    
    var min = 10 ** (len - 1);
    var max = (10 ** len) - 1;
    console.log("code min: " + min);
    console.log("code max: " + max);
    var code = random(min, max);
    
    // option ajout de letters au code
    if (ADD_LETTERS) {
        // ensemble de letters dans lequel puiser
        var setLetters = ['a', 'h', 'n', 'p', 'x'];
        
        // nombre de lettres à ajouter
        var numLetters = parseInt(len / 2);
        console.log("numLetters : " + numLetters);
    
        // conversion du code numérique en chaîne de caractères pour remplacement de caractères
        var codeTxt = code.toString();
        console.log(codeTxt);

        // itère sur le nombre de letters à ajouter au code
        for (var i = 0; i < numLetters; i++) {
            var randIndex = random(0, len);
            console.log("randIndex: " + randIndex);
            var randLetter = setLetters[random(0, setLetters.length - 1)];
            console.log("randLetter : " + randLetter);
            codeTxt = replaceAt(randIndex, codeTxt, randLetter)
        }

        // dom update
        divCode.innerText = codeTxt;
    } else {
        // dom update
        divCode.innerText = code;
    }

}

function onKeyup() {
    btnGenerate.disabled = this.value < 4 || this.value > 20;
}