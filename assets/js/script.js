$(document).ready(function() {
    console.log("ready!");

$("#currentDay").text(
    moment().format("MMMM Do YYYY")
);

$(".saveBtn").on("click", function(){
    var description =$(this).siblings(".description").val()
    console.log(description);

    var time =$(this).parent().attr("id")
    localStorage.setItem(time, description);
});

// localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
$("#hour-3 .description").val(localStorage.getItem("hour-3"))
$("#hour-4 .description").val(localStorage.getItem("hour-4"))
$("#hour-5 .description").val(localStorage.getItem("hour-5"))
    


});

// create a function with conditinal if/else 
// get current time from moment.js compare current time to the time block
// add class/ remove class on time block