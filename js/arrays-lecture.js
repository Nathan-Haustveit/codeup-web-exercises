
var groceryList = ['bread', 'eggs', 'butter', 'milk'];
console.log(groceryList[3]);
console.log("I have to buy " + groceryList[0])

// Create an array of four family members, friends, or people or pets you know.
var familyMembers = ['Jake', 'Josh', 'Mark', 'Wendy'];

// Console log the first and last item.
console.log(familyMembers[0], 'and ' + familyMembers[3]);

// Console log a string stating your relationship to one of the array elements, for example "Nathan is my cousin" or "Sofia is my friend."
console.log(familyMembers[0] + " is my brother.");

//loop array

for (var i = 0 ; i < groceryList.length; i ++){
    if (i !== groceryList.length -1) {
        console.log("I have to buy " + groceryList[i] + " and...");
    } else {
        console.log("I have to buy " + groceryList[i] + ".");
    }
}

// Given an array
var cities = ["San Antonio", "Austin", "Dallas", "Houston"];

// First, create a for loop that generates the output:
//     ```
// San Antonio
// Austin
// Dallas
// Houston
// ```

for (var i = 0; i < cities.length; i++){
    console.log("Student number " + (i + 1) + " lives in " + cities[i]);

}


// Then elaborate on the loop output to generate output like:
//     ```
// Student number 1 lives in San Antonio
// Student number 2 lives in Austin
// Student number 3 lives in Dallas
// Student number 4 lives in Houston
// ```
// Remember the key concept that you can use the iterator variable (i) to access array elements in a loop.

// FOR-EACH LOOP

var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 22.99, 8.98, 5.99];
prices.forEach(function(price, index){
    console.log("Item number " + (index + 1) + " cost $" + price)
});

groceryList.push("potatos");
console.log(groceryList);
groceryList.pop(groceryList);
console.log(groceryList);

groceryList.unshift("sliced cheddar");
console.log(groceryList);
groceryList.shift();
console.log(groceryList);

var indexOfButter = groceryList.indexOf('butter');
console.log("The butter is at index " + indexOfButter);

groceryList[2] = "peanut butter";
console.log(groceryList);
groceryList[indexOfButter] = "butter";
console.log(groceryList);

var firstHalfOfList = groceryList.slice(0, 2);
console.log(firstHalfOfList);
console.log(groceryList);
var secondHalfOFList = groceryList.slice(2);
console.log(secondHalfOFList);
firstHalfOfList.push("peanut butter");
console.log(firstHalfOfList);
groceryList = firstHalfOfList.concat(secondHalfOFList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);
groceryList.sort();
console.log(groceryList);

var hamletQuote = "To be or no to be, that is the question";
var noCommasHamletQuote = hamletQuote.replace(',', '').toLowerCase();
var hamletQuoteArray = noCommasHamletQuote.split(' ');

    console.log(hamletQuoteArray);
// hamletQuoteArray.reverse();
// console.log(hamletQuoteArray);
//
// var hamletQuoteBackwards = hamletQuoteArray.join(' ');
// console.log(hamletQuoteBackwards);
// var hamletQuoteWordList = hamletQuoteArray.join(' , ');
// console.log(hamletQuoteWordList);
// var bringBackOriginal = hamletQuoteWordList.replaceAll(' , ', ' ');
// var theOriginalArray = bringBackOriginal.split(" ");
// theOriginalArray.reverse();
// var theOriginalQuote = theOriginalArray.join(' ');
// console.log(theOriginalQuote);
