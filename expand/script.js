// ciblage du DOM
var titles      = document.getElementsByTagName("h2");
var btnToggle   = document.getElementById("btnToggle");
var articles    = document.getElementsByTagName("article");

// écoute événementielle
for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function() {
        // this correspondant à l'élément h2 ayant reçu le clic

        var display = this.nextElementSibling.style.display;

        // si l'article n'est pas visible, on le rend visible
        // sinon, on le masque
        if (display == "" || display == "none") {
            this.nextElementSibling.style.display = "block";
        } else {
            this.nextElementSibling.style.display = "none";
        }
        
    })
}

btnToggle.addEventListener("click", toggleArticles);

// cette fonction se charge d'afficher ou de masquer l'ensemble des articles
function toggleArticles() {
    var displayValue = "block";

    if (this.innerText.charAt(0) == 'M') {
        this.innerText = "Afficher tout";
        displayValue = "none";
    } else {
        this.innerText = "Masquer tout";
        displayValue = "block";
    }

    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = displayValue;
    }
}