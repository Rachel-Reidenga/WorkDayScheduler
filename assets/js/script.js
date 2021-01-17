var description = {};

var createDescription = function(descriptionText, descriptionHour, descriptionList) {
  // create elements that make up a task item
  var descriptionLi = $("<li>").addClass("list-group-item");
  var descriptionSpan = $("<span>")
    .addClass("badge badge-primary badge-pill")
    .text(descriptionDate);
  var descriptionP = $("<p>")
    .addClass("m-1")
    .text(descriptionText);

  // append span and p element to parent li
  descriptionLi.append(descriptionSpan, descriptionP);

// append span and p element to parent li
descriptionLi.append(descriptionSpan, descriptionP);

// check due date
auditDescription(descriptionLi);

// append to ul list on the page
$("#list-" + descriptionList).append(descriptionLi);
};

var loadDescription = function() {
  description = JSON.parse(localStorage.getItem("description"));
  
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!description) {
    description = {
      description: [],
    };
  }

  // loop over object properties
$.each(description, function(list, arr) {
  // then loop over sub-array
  arr.forEach(function(description) {
    createTask(description.text, description.hour, list);
  });
});
};

var saveDescription = function() {
  localStorage.setItem("description", JSON.stringify(description));
  };
  
  var auditDescription = function(descriptionEl) {
  // get date from task element
  var hour = $(descriptionEl)
    .find("span")
    .text()
    .trim();
  
  // convert to moment object at 5:00pm
  var time = moment(date, "L").set("hour", 0);

  // remove any old classes from element
  $(descriptionEl).removeClass("list-group-item-past list-group-item-present");
  
  // apply new class if task is near/over due date
  if (moment().isAfter(hour)) {
    $(descriptionEl).addClass("list-group-item-past");
  } else if (Math.abs(moment().diff(time, "hour")) <= 0) {
    $(descriptionEl).addClass("list-group-item-present");
  }
  };

  // save button in modal was clicked
$("#description-form-modal .saveBtn").click(function() {
  // get form values
  var descriptionText = $("#modalTaskDescription").val();
  var descriptionHour = $("#modalDueDate").val();
  
  if (descriptionText && descriptionHour) {
    createTask(descriptionText, descriptionHour, "description");
  
    // close modal
    $("#description-form-modal").modal("hide");
  
    // save in tasks array
    description.push({
      text: descriptionText,
      date: descriptionHour
    });
  
    saveTasks();
  }
  });