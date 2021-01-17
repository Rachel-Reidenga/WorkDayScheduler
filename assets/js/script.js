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

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
    


});

// create a function with conditinal if/else 
// get current time from moment.js compare current time to the time block
// add class/ remove class on time block