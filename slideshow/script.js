// ciblage du DOM
var cityName    = document.getElementById("cityName");
var cityImage   = document.getElementById("cityImage");

var images = ["paris", "rio", "rome", "lisbonne"];
var i = 0;

function animation1() {
    setInterval(function() {
        cityName.innerText = images[i]; // modifile nom de la ville dans l'interface
        cityImage.src = "images/" + images[i] + ".jpg";
        i++;
        if (i == images.length) {
            i = 0;
        }
    }, 3000)
}

function animation2() {
    var opacity = 1;
    var interval;

    interval = setInterval(function() {
        opacity -= 0.1; // décremente de 10%
        cityImage.style.opacity = opacity;

        // arrêt de l'interval lorsque l'image n'est plus visible
        if (opacity <= 0) {
            clearInterval(interval)
        }

    }, 100)
}

animation2();