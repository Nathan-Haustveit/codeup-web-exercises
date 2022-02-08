//1

while(true){
    var userNumber = prompt("Pick an odd number between 1 and 50")
    if (userNumber % 2 !== 0 && Math.floor(Math.random() * 50) + 1) {
        break;
    }
}
    console.log("Number to skip is: " + userNumber);

    for (var i = 1; i <= 50; i += 2) {
        if (userNumber == i) {
        console.log("Yikes! Skipping number: " + userNumber);
            continue;
    }
console.log("Here is an odd number: " + i);
}

/*
EXAMPLE
while(true){
    var userNumber = prompt("Pick an odd number between 1 and 50")
    if (userNumber % 2 === 1 && userNumber <=50 && userNumber >=1) {
        break;
    }
}

console.log("Number to skip is: " + userNumber);

for (var i = 1; i < 50; i += 2){
    if (i == userNumber){
        console.log("Yikes! Skipping number: "  + userNumber);
        continue;
}
console.log(i);
}
*/