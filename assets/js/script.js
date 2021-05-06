/* Psuedo-code

Table needs three columns
1st column is hourly starting 9Am-5PM There are 9 columns
Rows are color coded based on actual time page is loaded (light gray for past,red for present, and green for future) using moment widget
middle column data entry click to enter an even
right column is a save button that saves data to local storage
when page is refreshed, data stays (event.preventDefault();)








*/
// Displays current date and time using moment
var now = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(now);