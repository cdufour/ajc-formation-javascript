// ciblage du DOM
var cityName    = document.getElementById("cityName");
var cityImage   = document.getElementById("cityImage");

var images = ["paris", "rio", "rome", "lisbonne"];
var i = 0;
const PERSIST_DURATION = 1000 * 5; // n secondes

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

function animation3() {
    fadeOut(cityImage, 100);
}

// fonction destinée à faire disparaître l'image cible de façon progressive
function fadeOut(img, speed) {
    var opacity = 1;
    var interval = setInterval(function() {
        opacity -= 0.1;
        img.style.opacity = opacity;

        // arrêt
        if (opacity <= 0) {
            clearInterval(interval);
            img.src = 'images/' + images[i] + '.jpg';
            cityName.innerText = capitalize(images[i]);
            i++;
            if (i == images.length) {
                i = 0;
            }

            // affichage progressive de la nouvelle image
            fadeIn(img, speed);
        }
    
    }, speed)


}

// fonction destinée à faire apparaître l'image cible de façon progressive
function fadeIn(img, speed) {
    var opacity = 0;
    var interval = setInterval(function() {
        opacity += 0.1;
        img.style.opacity = opacity;

        // arrêt
        if (opacity >= 1) {
            clearInterval(interval);

            // persistence de l'image avant disparation
            setTimeout(function() {
                fadeOut(img, speed);
            }, PERSIST_DURATION)
            
        }
    
    }, speed)
}

animation3();