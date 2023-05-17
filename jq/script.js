// ciblage du DOM et globales
var search = document.getElementById("app").children[0];
var search$ = $("#app input");
var ulCountries$ = $("#countries");
var countries = ["Allemagne", "Andorre", "Belgique", "Belarus", "France", "Italie"];
var countriesFiltered = [];

// écoute événementielle
search$.keyup(() => {
    var searchedValue = search$.val();
    if (searchedValue.length > 1) {
        countriesFiltered = countries.filter(
          country => country.toLowerCase().indexOf(searchedValue.toLowerCase()) != -1
        );
        buildDom();
    } else {
        ulCountries$.html(""); // reset
    }
    
})


function buildDom() {
    ulCountries$.html(""); // reset
    ulCountries$.append(
        countriesFiltered.map(country => "<li>" + country + "</li>")
    );
}