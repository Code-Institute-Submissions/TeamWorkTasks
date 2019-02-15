//
// ***************************** Show/Hide content ********************************************
//

function showCountTasks() {
    $(".countTasks").show();
    $(".taskEdit").hide();
    $(".addTaskMobile").hide();
    $(".todaysTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").show();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

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

function hideEditForm(){
    $(".allTasks").show();
    $(".countTasks").show();
    $(".addTaskRight").show();
    $(".taskEdit").hide();
    $(".addTaskMobile").hide();
    $(".overdueTasks").hide();
    $(".todaysTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".completeTasks").hide();
}
// *************************************************************************************************