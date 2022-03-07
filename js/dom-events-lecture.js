// get access to the button in the DOM
var button = document.querySelector("button");
// Write the event handler
// aka event listener, callback
function doThisWhenTheButtonIsClicked(){
    alert("You clicked me!");
}
//Finally, we register the handler
// button.addEventListener('click', doThisWhenTheButtonIsClicked);
// doThisWhenTheButtonIsClicked();

// var secondButton = document.getElementsByTagName("button")[1];
//
// secondButton.onclick = doThisWhenTheButtonIsClicked;

var allTheButtons = document.getElementsByTagName("button")
for (var i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener('click', doThisWhenTheButtonIsClicked);
}

// Use html and css to create a square with a background color on a html page.
// Register an event handler and write its code such that when you click on a square, it alerts that it is a square and what color it is.

var square = document.querySelector(".square")
function doThisWhenSquareIsClicked() {
    alert("I am a square with the color #0fb784");
}
square.addEventListener("click", doThisWhenSquareIsClicked);
