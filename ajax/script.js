// ciblage du DOM
var ulUsers = document.getElementById("users");

// exemple d'une requête http ajax
var url = "https://jsonplaceholder.typicode.com/users";

setTimeout(() => {

    fetch(url)
    .then(response => response.json())
    .then(users => {
        var names = users.map(user => "<li>" + user.name + "</li>");

        ulUsers.innerHTML = names.join("");
        console.log("users ok");
    });

}, 5000)


console.log("AJAX est mon ami");
