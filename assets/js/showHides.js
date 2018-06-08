//
// ***************************** Show/Hide content ********************************************
//

// ** TODO: Tidy by removing repetitions **

function showCountTasks() {
    $(".countTasks").show();
    $(".taskEdit").hide();
    $(".addTaskRight").show();
    $(".addTaskMobile").show();
    $(".todaysTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

// function showEditTask() {
//     $(".taskEdit").show();
//     $(".countTasks").hide();
//     $(".addTask").hide();
//     $(".addTaskMobile").hide();
//     $(".todaysTasks").hide();
//     $(".tomorrowsTasks").hide();
//     $(".allTasks").hide();
//     $(".overdueTasks").hide();
//     $(".completeTasks").hide();
// }

function showAllTasks() {
    $(".allTasks").show();
    $(".taskEdit").hide();
    $(".addTaskMobile").hide();
    $(".todaysTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".addTaskRight").show();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showTodaysTasks() {
    $(".todaysTasks").show();
    $(".addTaskMobile").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".addTaskRight").show();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showTomorrowsTasks() {
    $(".tomorrowsTasks").show();
    $(".addTaskMobile").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTaskRight").show();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showOverdueTasks() {
    $(".overdueTasks").show();
    $(".addTaskMobile").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTaskRight").show();
    $(".tomorrowsTasks").hide();
    $(".completeTasks").hide();
}

function showAddTask() {
    $(".addTaskRight").show();
    $(".addTaskMobile").hide();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
}


function showTasksCompleted() {
    $(".completeTasks").show();
    $(".addTaskMobile").hide();
    $(".addTaskRight").show();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
}

function showAddTaskMobile(){
    $(".addTaskMobile").show();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTaskRight").hide();
    $(".tomorrowsTasks").hide();
    $(".completeTasks").hide();
}
// *************************************************************************************************