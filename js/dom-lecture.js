// var accessTheDOM = document.getElementById("dc");
// var showMe= accessTheDOM.innerText;
// alert(showMe);

var like = document.getElementById("like");
var dontlike = document.getElementById("dontlike");
var marvel = document.getElementById("marvel");
var dc = document.getElementById("dc");

dc.innerText = dc.innerText + ' Animated Universe';
dc.innerText += ' rocks!';

marvel.setAttribute("class", "hotpink");
dc.setAttribute("class", "hotpink");

var hotPinks = document.getElementById("hotpink");
//hotPinks[0].style.color = "hotpink";

// LOOPS THROUGH ARRAYS AND ADDS HOTPINK COLOR

for (var i = 0; i < hotPinks.length; i++) {
    hotPinks[i].style.color = 'hotpink';
}


//Using form input (or any input) to change elements on the page

// Get a reference to the button
var submitButton = document.querySelector("colorSubmission");
//OR------- var submitButton = document.getElementById("colorSubmission");

// Create a function that is invoked when the button is clicked
submitButton.onclick = function () {
    // get a reference to the form input element
    var colorInput = document.getElementById("colorPreference");
    // get a reference to the actual form input
    var userInput = colorInput.value;
    //alert(userInput);
    // get a reference to all the paragraphs on the page
    var paragraphs = document.getElementsByTagName("p");
    // loop through the list of paragraphs
    for (var i = 0; i < paragraphs.length; i++) {
        // for each paragraph, change the color to match the user input
        paragraphs[i].style.color = userInput;
    }
}

    // Using data-attributes
    // Get a reference to the hulk paragraph
var theHulk = document.getElementById("hulk");

    // get a reference to the data attribute, old school
    // var hulkState = theHulk.getAttribute("data-state");
    // output value og the data-state attribute to the page
    //theHulk.innerText += " is in " + hulkState + " state";

    // get the value of the data-strength attribute the "new" way
var hulkStrength = theHulk.dataset.strength;

//theHulk.innerText += ". His strength is " + hulkStrength

var hulkIntelligence = theHulk.dataset.intelligence;
// theHulk.innerText += " His intelligence is " + hulkIntelligence + ".";

    // get a reference to the transform hulk button
var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function () {
    var hulk = document.getElementById("hulk");
    var hulkState = hulk.dataset.state;
    if (hulkState === "hulk"){
        hulk.dataset.state = "Bruce Banner";
    } else {
        hulk.dataset.state = "hulk";
    }
    theHulk.innerText = "The Hulk is in " + theHulk.dataset.state + " state";
}