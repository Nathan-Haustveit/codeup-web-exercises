"use strict";

// alert("Hello, world");

// var userChoice = confirm("Are you sure you want to leave this page?");
// console.log(userChoice);
//
// if(userChoice){
//     alert("Wise choice");
// } else {
//     alert("Booooo! Good bye!");
// }

var currentSpeed = Number(prompt("How fast are you driving now?"));
console.log(currentSpeed)
var plannedSpeedIncrease = Number(prompt("How many more mph do you want to go?"));
var newSpeed = currentSpeed + plannedSpeedIncrease;
console.log("Your planned speed is " + newSpeed);

var distanceleft = Number(prompt("How many miles are you from your destination?"))

var timeAtCurrentSpeed = (distanceleft/currentSpeed) * 60;
var timePlannedSpeed = (distanceleft/newSpeed) * 60;
var timeGain = (timeAtCurrentSpeed - timePlannedSpeed);
alert("If you drive at " + newSpeed + " mph, you will arrive " + timeGain.toFixed(2) + " minutes sooner")
