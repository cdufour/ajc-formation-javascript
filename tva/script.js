// ciblage du DOM
var txtHt           = document.getElementById("txtHt");
var selectTax       = document.getElementById("selectTax");
var spanTva         = document.getElementById("spanTva");
var spanTtc         = document.getElementById("spanTtc");

// écoute événementielle
selectTax.addEventListener("change", onChange)
txtHt.addEventListener("keyup", onKeyup)

function onChange() {
    var selectedTax = selectTax.value;
    //console.log(selectedTax)
    var tva = txtHt.value * (selectedTax / 100);
    //console.log(tva)
    var ttc = parseFloat(txtHt.value) + tva;
    //console.log(ttc);

    // DOM update

    // JavaScript Round to two Decimal Places
    // https://www.stechies.com/javascript-round-two-decimal-places/#:~:text=toFixed()%20method%20to%20round,decimal%20place%20floating%2Dpoint%20numbers.
    spanTva.innerText = tva.toFixed(2);
    spanTtc.innerText = ttc.toFixed(2);
}

function onKeyup() {

    // Si le champ de saisie du prix HT est vide
    if (txtHt.value == "") {
        // DOM update
        spanTva.innerText = "";
        spanTtc.innerText = "";
        selectTax.value = 20; // taux par défaut
    }

    var val = parseFloat(txtHt.value);
    console.log(val); // retour potentiel: NaN (Not a Number)

    if (isNaN(val)) {
        // Not a Number
        selectTax.disabled = true;
    } else {
        // Number
        selectTax.disabled = false;
        onChange();
    }
}