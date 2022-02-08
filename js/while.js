// var counter = 1;
// var number = 1;
// while(counter <= 16){
//     number = number * 2;
//     counter = counter + 1;
//     console.log(number);
// }
// or

var number = 2;
while (number < 65536) {
    console.log(number);
    number = number * 2;
}


//generate number between 50 and 100 that equals number of cones to sell
//inside loop, generate number between 1 and 5 that equals cones bought
//log the amount of cones sold to each person

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("Cannot sell you " + conesBought + " I only have " + allCones);
    } else {
        console.log(conesBought + " cones sold");
        allCones = allCones - conesBought;
    }
} while (allCones > 0)
console.log("Yay I sold them all!");
//ddsd