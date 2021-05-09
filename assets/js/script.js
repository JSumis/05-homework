// Displays current date and time using moment
var now = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(now);





function getEventText() {

    for (var i = 8; i < 18; i++) {
        var textBoxID = '#textBox' + i;
        console.log(textBoxID)
        var textCont = document.querySelector('' + textBoxID + '').value;
        console.log(textCont)



        // LocalStorage item named with the corresponding html ID 
        localStorage.setItem('Event ' + textBoxID, '' + textCont + '');
    }
};


$('.saveBtn').on('click', getEventText);
// Return Events from localStorage
$(function() {
    //Iterate through all possible events
    for (var i = 8; i < 18; i++) {
        //identify the item for each event note
        var eventReturn = 'Event #textBox' + i;
        //Set variable for each of the HTML IDs that will be iterated through
        var savedTxtSelector = '#textBox' + i;
        //Set variable for each localStorage item as they are iterated through
        var setEventText = localStorage.getItem(eventReturn);
        //Set the text of the HTML element to the correlating value from localStorage
        $(savedTxtSelector).text(setEventText);
    };
})

/*
var saveButton = $(".saveBtn").on('click', function() {
    for (i = 8; i < 18; i++) {
        var localStorageLabel = 'Textbox' + i
            // save8amText.preventDefault();
        var textBox = $(this).prev().children("textarea").val();
        console.log(textBox)
            // console.log($(this).prev().children("#textBox" + i).val())
        localStorage.setItem(localStorageLabel, textBox);
    };
})

$(function() {
    for (var i = 8; i < 18; i++) {
        var timeText = localStorage.getItem("textBox" + i);
        var savedTxtSelector = '#textBox' + i;
        console.log(savedTxtSelector.text, 'is the savedTxt')
        $(savedTxtSelector).text(timeText);

    }
}); *
/




/* Psuedo-code

Table needs three columns
1st column is hourly starting 9Am-5PM There are 9 columns
Rows are color coded based on actual time page is loaded (light gray for past,red for present, and green for future) using moment widget
middle column data entry click to enter an event
right column is a save button that saves data to local storage
when page is refreshed, data stays (event.preventDefault();)




*/