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

// var present = moment(".time-block") <= 9:00:00

// if (".time-block" <= 9) {
//     $("#row #hour-9") = $("#present")
// }

// $('#row').display(function() {
//     if ($('#time').hasClass('9:00')){
//         $('#time').removeClass('slamdown');
//     } else {
//         $('#time').addClass('slamdown');
//       }
//     });

    var present = moment().format("hh:mm:ss a");
    console.log(present);
    
    // var time = function(timeEl) {
    //     // get date from task element
    //     var time = $(timeEl)
    //       .find("textarea")
    //       .text()
    //       .trim();
        
    //     // apply new class if hour is near/over time
        if (moment("09").isSame("09", "hour")) {
          $(".description").addClass(".present");
        } else if (moment().diff(time, "hour")) {
          $(".description").addClass(".past");
        };

    // console.log(moment("09").isSame("09", "hour"));


});

// create a function with conditinal if/else 
// get current time from moment.js compare current time to the time block
// add class/ remove class on time block