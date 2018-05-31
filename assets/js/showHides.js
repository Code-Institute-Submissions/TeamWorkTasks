//
// ***************************** Show/Hide content ********************************************
//

// ** TODO: Tidy by removing repetitions **

function showCountTasks() {
    $(".countTasks").show();
    $(".addTask").show();
    $(".addTaskMobile").show();
    $(".todaysTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showAllTasks() {
    $(".allTasks").show();
    $(".addTaskMobile").hide();
    $(".todaysTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showTodaysTasks() {
    $(".todaysTasks").show();
    $(".addTaskMobile").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showTomorrowsTasks() {
    $(".tomorrowsTasks").show();
    $(".addTaskMobile").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".completeTasks").hide();
}

function showOverdueTasks() {
    $(".overdueTasks").show();
    $(".addTaskMobile").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTask").hide();
    $(".tomorrowsTasks").hide();
    $(".completeTasks").hide();
}

function showAddTask() {
    $(".addTask").show();
    $(".addTaskMobile").hide();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
}

function showAddTaskMobile(){
    $(".addTaskMobile").show();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
    $(".addTask").hide();
    $(".tomorrowsTasks").hide();
    $(".completeTasks").hide();
}

function showTasksCompleted() {
    $(".completeTasks").show();
    $(".addTaskMobile").hide();
    $(".addTask").hide();
    $(".overdueTasks").hide();
    $(".countTasks").hide();
    $(".tomorrowsTasks").hide();
    $(".allTasks").hide();
    $(".todaysTasks").hide();
}

// *************************************************************************************************