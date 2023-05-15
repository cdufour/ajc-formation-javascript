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
    spanTva.innerText = tva;
    spanTtc.innerText = ttc;
}

function onKeyup() {
    var val = parseFloat(txtHt.value);
    console.log(val); // retour potentiel: NaN (Not a Number)

    if (isNaN(val)) {
        selectTax.disabled = true;
    } else {
        selectTax.disabled = false;
    }
}