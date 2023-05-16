// boucle while
console.log("============= Boucle while =============");
var count = 0;
while (count < 5) {
    console.log("ok");
    count += 1; // incrémentation
}

var count2 = 10;
while (count2 > 0) {
    console.log(count2);
    count2 -= 1; // décrémentation
}


// boucle for
console.log("============= Boucle for =============");

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log("============= Parcours d'un tableau =============");
var fruits = ["banane", "poire", "datte", "cerise", "pomme"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}