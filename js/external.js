console.log("Hello from external JavaScript");
alert('Welcome to my Website!');

var userInput = prompt("What is your favorite color?");
console.log(userInput);

alert("Great, " + userInput + " is my favorite color too!");

var rentalPrice = 3;

var littleMermaid = Number(prompt("How many days did you have the Little Mermaid?"));
var brotherBear = Number(prompt("How many days did you have the Brother Bear?"));
var hercules =Number(prompt("How many days did you have the Hercules?"));

var totalPrice = (littleMermaid + brotherBear + hercules) * rentalPrice;
alert("Great, that will be " + totalPrice + " dollars.");

var googleHours = Number(prompt("How many hours did you work for Google?"));
var googlePay= Number(prompt("How much did you get paid per hour from google?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon?"));
var amazonPay= Number(prompt("How much did you get paid per hour from amazon?"));
var facebookHours = Number(prompt("How many hours did you work for Facebook?"));
var facebookPay= Number(prompt("How much did you get paid per hour from Facebook?"));

var totalPay = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay);
alert("You made " + totalPay + " dollars this week");

var classNotFull = confirm("Is this class full");
var noConflict = confirm("Do you have a schedule conflict?");
var canEnroll = (classNotFull && noConflict)
alert("It is " + canEnroll + " that you can enroll in this class");

var itemsBought = confirm("Did you buy more than 2 items?")
var offerNotExpired = confirm("Is the offer expired?")
var premiumMember = confirm("Are you a premium member?")
var productOffer = (itemsBought >= 2 && offerNotExpired || premiumMember)
alert("It is " + productOffer + " that you are eligible for the product offer!")