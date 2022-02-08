//2

function showMultiplicationTable(number) {
    for(var i = 1; i <=10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}
showMultiplicationTable(7);

//3

var randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20; {
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " its even")
    } else {
        console.log(randomNumber + " its odd")
    }
}

//4

for (var i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

//5

for (var i = 100; i >= 0; i -= 5) {
    console.log(i);
}