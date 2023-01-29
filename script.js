//Reference to important DOM elements
var currentDayEl = document.getElementById("currentDay");

// TODO: Add code to display the current date in the header of the page.
function displayDate() {
  var today = dayjs().format('dddd MMMM DD YYYY');
  currentDayEl.textContent = today;
}
displayDate();

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
function timeColor(){
  var currentHour = dayjs().format('H');
  console.log(currentHour)

  $(".time-block").each(function(){

  var blockHour = parseInt($(this).attr("id"));
  console.log(blockHour)

  // Apply classes from past -> present -> future
  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour == currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }

  // Alternative way of doing it from future -> present -> past
  // if (blockHour > currentHour) {
  //   $(this).addClass("future");
  // } else if (blockHour == currentHour) {
  //   $(this).removeClass("future");
  //   $(this).addClass("present");
  // } else {
  //   $(this).removeClass("future");
  //   $(this).removeClass("present");
  //   $(this).addClass("past");
  // }
  })

}
timeColor();
var interval = setInterval(timeColor, 15000);

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(".saveBtn").click(function(){
  
  var description = $(this).siblings(".description")
  var hour = $(this).siblings(".hour")

  localStorage.setItem(description,hour)

  alert("Your input has been saved");
});


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {





});

