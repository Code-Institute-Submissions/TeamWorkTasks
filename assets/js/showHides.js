//
// ***************************** Show/Hide content ********************************************
//
function showCountTasks() {
    $(".countTasks").show();
    $(".addTask").show();
    $(".todaysTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showAllTasks() {
    $(".allTasks").show();
    $(".todaysTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showTodaysTasks() {
    $(".todaysTasks").show();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showTomorrowsTasks() {
    $(".tomorrowsTasks").show();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showOverdueTasks() {
    $(".overdueTasks").show();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTask").hide();
    $(".tomorrowsTasks").hide();
    $(".completeTasks").hide();
}

function showAddTask() {
    $(".addTask").show();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
}

function showTasksCompleted() {
    $(".completeTasks").show();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
}