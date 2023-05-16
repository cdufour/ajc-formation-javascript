// ciblage du DOM
var titles = document.getElementsByTagName("h2");

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