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


//Create a function that accepts an object with two properties, parcelNumber and weight, and return the weight//
// parcel.weight = function (object){
//     return object.weight
// }
// parcel ({
//     parcelNumber: 1,
//     weight: 20
// })





//Create a function that accepts an array of objects with two properties, parcelNumber and weight, and outputs the content to a web page in two columns, with the total listed at the end.

// function totalWeight(arrayOfObjects){
//     var total = 0;
//     for(var i = 0; i < arrayOfObjects[i].length; i++);{
//         total += arrayOfObjects[i].weight;
//
// return total;
// }
//
// var parcels = [{number: 1, weight: 20}, {number: 2, weight: 25}];
//
// console.log(totalWeight(parcels));


//Create a function that accepts an array of objects with two properties, parcelNumber and weight, and outputs the content to a web page in two columns, with the total listed at the end.



//DOM warmup:
//Create a heading that says "Good Morning!"
//Create a button that says "Press if after 12pm"
//When the button is pressed, "Good morning" changes to "Good afternoon"

var pastNoon = document.querySelector("button");
function changeToPastNoon(){
document.querySelector('h2').innerText = "Good afternoon";
}
pastNoon.addEventListener("click", changeToPastNoon)


    //Consider the following array of users:

        var users = [
            {
                username: 'fsmith',
                email: 'fsmith@email.com',
                numberOfLogins: 23
            },
            {
                username: 'ksmith',
                email: 'ksmith@email.com',
                numberOfLogins: 100
            },
            {
                username: 'lsmith',
                email: 'lsmith@email.com',
                numberOfLogins: 10
            }
        ];

    //1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.

    //returnFirstUser(users) should return...

    //{
    //    username: 'fsmith',
    //        email: 'fsmith@email.com',
    //    numberOfLogins: 23
    //}

    function returnFirstUser(users){
        return users[0];
    }

console.log(returnFirstUser(users));


    //2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
    //for all users.

    //returnTotalUserLogins(users) should return... 133

    function returnTotalUserLogins(users){
        var loginTotal = 0;
        for (var i = 0; i < users.length; i += 1){
            loginTotal += users[i].numberOfLogins;
        }
            return loginTotal;
    }
    console.log(returnTotalUserLogins(users));
    //3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
    //user object with the highest number of logins.


    //returnMostFrequentUser(users) should return...

    // {
    //     username: 'ksmith',
    //         email: 'ksmith@email.com',
    //     numberOfLogins: 100
    // }

    function returnMostFrequentUserLogins(users){
        var mostFrequentUser = users[0];
        users.forEach(function(user) {
            if (user.numberOfLogins > mostFrequentUser.numberOfLogins) {
                mostFrequentUser = user;
            }
        });
        return mostFrequentUser;
    }

console.log(returnMostFrequentUserLogins(users));

// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...
//
var operations1 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
]
//
//
// computeOperations(operations1, 10) // returns 20
//
//
// Example 2...
//
var operations2 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
]
//
// computeOperations(operations2, 10) // returns 60
//
//
// Example 3...
//
var operations3 = [

    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    },
]
//
// computeOperations(operations3, 10) // returns 0


function computedOperations(operation, num) {
    var total = num;
    // operation.forEach(function (operation) {
    for (var i = 0; i < operation.length; i += 1) {
        if (operation[i].operation === 'add') {
            return total += operation[i].integer;
        } else if (operation[i].operation === 'subtract') {
            return total -= operation[i].integer;
        } else if (operation[i].operation === 'multiply') {
            return total *= operation[i].integer;
        }
        //});

    }return total;
}

console.log(computedOperations(operations1, 10));
console.log(computedOperations(operations2, 10));
console.log(computedOperations(operations3, 10));

//create a function, addTwos, that takes in an array of integers and returns the sum of all 2s in the array. If no //2s are in the array, return 0.

//Examples:



// addTwos(nums1) // returns 2
// addTwos(nums2) // returns 4
// addTwos(nums3) // returns 0
// addTwos(nums4) // returns 8
// addTwos(nums5) // returns 10

//console.log(nums1.includes(2))
//
function addTwos(arr) {
    var sum = 0;
    // arr.forEach(function(num) {
    //     sum += (num === 2) ? num : 0;
    // });
    for (var i = 0; i < arr.length; i += 1) {
        sum += (arr[i] === 2) ? arr[i] : 0;
    }
    return sum;
}

var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];


// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
//     Examples...
//
// returnStringObject('hello') // returns...
//
// {
//     stringValue: 'hello',
//         stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//     stringValue: 'codeup',
//         stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }

    function returnStringObjects(string){
        return{
            value: string,
            array: string.split('')
        }
    }


// Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2

function countNegatives(nums) {
    var negativesCount = 0;
    nums.forEach(function(num) {
        if (num < 0) {
            negativesCount++;
        }
    });
    return negativesCount;
}


var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2

console.log(countNegatives(nums1), 1);
console.log(countNegatives(nums2), 2);
console.log(countNegatives(nums3), 0);
console.log(countNegatives(nums4), 2);

console.log(nums1 = [-5, 10, 2, 5]); // countNegatives(nums1) returns 1
console.log(nums2 = [1, -10, -2, 5]); // countNegatives(nums2) returns 2

//Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.

    //Example...

var users = [
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@email.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: 'sally@email.com'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        email: 'fred@email.com'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith',
        email: 'cathy@email.com'
    },
    {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@email.com'
    },
];

//createFirstNamesArray(users); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']


function createFirstNamesArray(users){
    var firstName = []
    for (var i = 0; i < users.length; i++) {
        firstName += users[i].firstName + ' '
    }
    return firstNames
}

console.log(createFirstNamesArray(users))

var changeColorButton = document.getElementById('changeColor');

changeColorButton.addEventListener('click', function(){
    document.getElementById("square").style.backgroundColor = "black";
});

// var revertColorButton = document.getElementById('revert')
//     revertColorButton.removeEventListener('click', function(){
//         document.getElementById("square")
//     });



document.getElementById("revert")
    .addEventListener('click', function(){
        location.reload();
    });




