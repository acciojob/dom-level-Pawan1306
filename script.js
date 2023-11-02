//your JS code here. If required.
// Get the element with the specified ID
var element = document.getElementById("level");

// Function to calculate the DOM level
function getDomLevel(element) {
    var level = 0;
    while (element && element !== document) {
        level++;
        element = element.parentNode;
    }
    return level;
}

// Calculate the DOM level and display it using alert
var domLevel = getDomLevel(element);
alert("The level of the element is: " + domLevel);