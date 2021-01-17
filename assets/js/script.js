
// class if hour is past
if (moment().isAfter(time)) {
  $(taskEl).addClass("past");
} 
else if (Math.abs(moment().diff(time, "hours")) <= 0) {
  $(taskEl).addClass("task-item-past");
}

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
      tasks = {
        items: [],
      };
    }
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    };