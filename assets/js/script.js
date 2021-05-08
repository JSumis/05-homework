// Displays current date and time using moment
var now = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(now);

var saveButton = document.getElementById("save8am");
saveButton.addEventListener("click", function (save8amText) {
    save8amText.preventDefault();
    var textBox8am = document.getElementById("textBox8am");
    localStorage.setItem("8amContents", textBox8am.value);
}
)
localStorage.getItem


/* Psuedo-code

Table needs three columns
1st column is hourly starting 9Am-5PM There are 9 columns
Rows are color coded based on actual time page is loaded (light gray for past,red for present, and green for future) using moment widget
middle column data entry click to enter an event
right column is a save button that saves data to local storage
when page is refreshed, data stays (event.preventDefault();)




*/
