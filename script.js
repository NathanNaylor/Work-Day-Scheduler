var i = 9;
var hAM = 9;
var hPM = 1;
var currentHour = moment().hour();
console.log(currentHour);
//
// WHEN the webpage is loaded
// use moment.js to get current date and save to variable currentDate

// using jQuery change text of id = currentDay to display saved variable currentDate
$("#currentDay").text(moment().format("dddd, MMMM Do"))

// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// display 9am-5pm time blocks for users
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// using moment.js save current time to var currentTime = ;


while (i <= 17) {
    var columnHourPM = hPM + "PM";
    var columnHourAM = hAM + "AM";
    var printNoon = localStorage.getItem("12PM");
    var printPM = localStorage.getItem(columnHourPM);
    var printAM = localStorage.getItem(columnHourAM);
    // using jquery and time block id="hour-i" determine 
    // if currentTime < i then add attr("class", future) to time block
    if (i < 13) {
        if (printAM !== "null") {
            $("#hour-" + (i)).children(".description").html(printAM);
            console.log(printAM);
            hAM++;
        }
    } else {
        //hard coded exception for noon because 12PM doesn't fit AM increment or PM increment
        if (printNoon !== "null") {
            $("#hour-12").children(".description").html(printNoon);
        }

        if (printPM !== "null") {
            $("#hour-" + (i)).children(".description").html(printPM);
            console.log(printPM);
            hPM++;
        }
    }
    if (i < currentHour) {
        $("#hour-" + i).attr("class", "row time-block past")
        i++
        // if currentTime === i then add attr("class", present) to time block
    } else if (i === currentHour) {
        $("#hour-" + i).attr("class", "row time-block present")
        i++
        // if currentTime > i then add attr("class", past) to time block
    } else {
        $("#hour-" + i).attr("class", "row time-block future")
        i++
    }

}


// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
//
// THEN I can enter an event
//
// WHEN I click the save button for that timeblock
// take the text in as a variable and save to local storage 
$(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".description").val().trim();
    //create a variable to hold the hour number of the descriptions sibling to look for it when inputting text
    var descriptionBoxHour = $(this).siblings(".hour").text().trim();
    console.log(descriptionBoxHour);
    console.log(textInput);
    localStorage.setItem(descriptionBoxHour, textInput);
});