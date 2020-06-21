
//STEP 1
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
var currentDate = moment().format('MMMM DD YYYY');
$("#currentDay").html(currentDate);
console.log(currentDate)

//STEP 2
//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//returns current time
var currentTime = moment().format('HH');
console.log(currentTime);

$(".time-div").each(function () {
    var hourDiv = $(this).attr("data-time");
    //convert hourDiv value to integer using parseINt
    parseInt(hourDiv);
    console.log(hourDiv);

    //STEP 4
    //piggy back on the time-div() and look for children .description for each block 
    //get the saved text value from local storage
    var text = localStorage.getItem(hourDiv)
    $(this).children(".description").val(text)

    //past
    if (hourDiv < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    //present
    else if (hourDiv === currentTime) {
        //remove past class
        $(this).removeClass("past");
        $(this).removeClass("future");
        //add class present
        $(this).addClass("present");
    }
    //future
    else {
        // remove class past, present
        $(this).removeClass("past");
        $(this).removeClass("present");
        //add a class of future 
        $(this).addClass("future");
    }
})

//STEP 3
//WHEN I click into a time block 
//THEN I can enter an event

//type text into the text-area
//get the text area's current value/text
$(".saveBtn").on("click", function () {
    var textCapture = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("data-time")
    console.log(hour, textCapture)
    // save this in the localSotrage
    localStorage.setItem(hour, textCapture)
});


