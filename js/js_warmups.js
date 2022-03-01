"use strict";

// Write a function that takes in an input and returns the string "I have no idea what you just said";

function input(str) {
    return "I have no idea what you just said";
}

console.log(input("string"));

// write a function that tales in a number and returns that number times 2

function timesTwo(number) {
    return number * 2;
}

console.log(timesTwo(2));
console.log(timesTwo(100));

// write a function that takes in a number and returns that number plus itself

function plusItself(number) {
    return number + number;
}

console.log(plusItself(3));

// now write a function that takes in two numbers, and then returns the sum of both numbers doubled

function twoNumbers(num, num2) {
    return ((num * num) + (num2 * num2));
}

console.log(twoNumbers(2, 3))

// write a function that takes in a number and squares it (that is, returns the number multiplied by itself)

function numSquared(number) {
    return number * number;
}

console.log(numSquared(4));

// write a function that takes in a string and returns its length

function lengthStr(str) {
    return str.length;
}

console.log(lengthStr("hello"));

// write a function that takes in two strings and returns its length

function lengthTwoStr(str, str2) {
    return str.length + str2.length;
}

console.log(lengthTwoStr("hey", "there"));

// write a function that takes in two strings and returns the string "even" or "odd" depending on wether the number is even or odd

function oddOrEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(oddOrEven(3));

// ================================= WARM UP
// Write a function called removeBs that takes in an array of strings and returns an array of strings with all b’s removed from each string. Assume
// the array contains only string elements.
//     Examples...
// removeBs([‘abc’, ‘ab’, ‘cat’, ‘Bay’]) // returns [‘ac’, ‘a’, ‘cat’, ‘ay’]


function removeBsFromString(str) {
    return str.replaceAll('b', '').replaceAll('B', '');

}

function removeBs(arr) {
    var output = [];
    arr.forEach(function(str) {
        output.push(removeBsFromString(str));

    });
    return output;
}
console.log(removeBs(['abc', 'ab', 'cat', 'Bay']));


//================================= WARM UP
//Write a function, createUserMsg, that takes in a user object like the following...


var user = {
    username: 'jbomb',
    email: 'john@email.com',
    isAdmin: true
};



//...and returns a string output that displays in the console like this...
//‘User jbomb is an admin and can be reached at john@email.com’
//If jbomb were not an admin, the message should display...
//‘User jbomb is not an admin and can  be reached at john@email.com’
//


function createUserMsg(user) {
    if (user.isAdmin) {
        return 'User ' + user.username + ' is an admin and can be reached at ' + user.email
    } else {
        return 'User ' + user.username + 'is not an admin and can be reached at ' + user.email;
    }
}

console.log(createUserMsg(user));

//You are given the length and width of a 4 sided polygon. The polygon can either be a rectangle or a square. If it is a square, return its area. if it is a rectangle return its perimeter

function areaOrPerimeter(l, w) {
    if (isNaN(parseFloat(l) || isNaN(parseFloat(w)))) {
        return false;
    } else if (l===w){
        return l*w;
    } else if (l!==w){
        return l*2 + w*2;

    }
}

console.log(areaOrPerimeter(3, 3))
console.log(areaOrPerimeter(6, 10))
//console.log(areaOrPerimeter(j, 3))

// create a function sumTheStrings that takes 2 integers in form of a string
// it should add the numbers
//and output the sum as a string

function sumTheString(input1, input2) {
    if(typeof input1 !== 'string' || typeof input2 !== 'string' || isNaN(parseFloat(input1)) || isNaN(parseFloat(input2))){
        return false;
    }
    return (parseFloat(input1) + parseFloat(input2)).toString();

}

console.log(sumTheString("1","2"));


//Write a function, getSimpleUser, that takes in a user object and returns a simplified user object.
// Assume the following shape of the user object for the function input:
//{
//   firstName: '...',
//   lastName: '...',
//   email: '...',
//   username: '...',
//   password: '...'
// }
//The shape of the output should be the following:
//{
//   firstName: '...',
//   lastName: '...',
// }
//Regardless of the case of the first name and last name input, the output should be in all lower case.
//var fred = {
//   firstName: 'Fred',
//   lastName: 'Smith',
//   email: 'fred@email.com',
//   username: 'fred123',
//   password: 'pass123'
// }
// getSimpleUser(fred) // {firstName: 'fred', lastName: 'smith'}
var fred = {
    firstName: 'Fred',
    lastName: 'Smith',
    email: 'fred@email.com',
    username: 'fred123',
    password: 'pass123'
}

function getSimpleUser(user) {
    return {firstName: user.firstName.toLowerCase(), lastName: user.lastName.toLowerCase()}
}

console.log(getSimpleUser(fred));

// ================================= JS Challenge
// Create a function, analyzeArray,

// that takes in an array and returns an object with information about the passed array.
//
// The function should return an object with properties containing information about the array,

// including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.

function analyzeArray([ary1, ary2, ary3]) {

    if(ary1==='string' && ary2==='string' && ary3==='string'){
        return  true;
    }
}



// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }

// ================================= WARM UP
//
// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.

var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];

//createNames(firstNames, lastNames) // returns...

// [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//     {
//         firstName: 'Max',
//         lastName: 'Feline'
//     },
//     {
//         firstName: 'Claude',
//         lastName: 'Kitten'
//     },
//     {
//         firstName: 'Meowmeow',
//         lastName: 'Calico'
//     }
// ]

//HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.

function createNames(arr1, arr2) {
    var output = [];
    var length = arr1.length;
    for (var i = 0; i < length; i += 1) {
        output.push({
            firstName: arr1[3],
            lastName: arr2[3]
        });
    }
    return output;
}




console.log(createNames(firstNames, lastNames));

function remainder(input1, input2){
    if(input1 > input2){
        return input1 % input2;
    } else if(input2 > input1){
        return input2 % input1;
    }
}

console.log(remainder(4, 2))




function isLockNessMonster(s) {
    if (s.includes("tree fiddy") || s.includes("three fifty") || s.includes("3.50")){
        return "is the loch ness monster";
    } else {
        return "safe to give tree fiddy"
    }
}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))

console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."))

console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."))

console.log(isLockNessMonster("The cost of the ferry across Loch Ness is 3.50"))

console.log(isLockNessMonster("The leading batter this year is hitting three fifty"))