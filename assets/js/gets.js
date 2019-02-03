//
// Set TaskList ID from radio button
//

function getSelectListID() {
    $(document).ready(function () {
        $("#taskListRadio").click(function () {
            var selectedTaskListID = $("input[type='radio'][name='taskListRadioButtons']:checked + label span").text();
            localStorage.setItem("selectedTaskListID", selectedTaskListID);
            console.log('Task list selected is: ' + localStorage.getItem(selectedTaskListID));
        });
    });
}

// *************************************************************************************************


//
// Get Account details
//
function getTaskListDetails() {
    var resultElement = document.getElementById('taskListRadio');
    var resultElementMobile = document.getElementById('getAllTaskListSelectListMobile');

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/projects/' + PROJECTID + '/tasklists.json',
        })
        .then(function (response) {
            $(response.data['tasklists']).each(function () {
                var taskListName = this.name;
                var taskListId = this.id;
                $(resultElement).append(
                    '<input type="radio" id="customRadio1" name="taskListRadioButtons" class="custom-control-input" checked="checked">' +
                    '<label class="custom-control-label" for="customRadio1">' + taskListName + '<span id="taskListId" style="display: none;">' + taskListId + '</span>' + '</label>' + '<br>'
                )
                return console.log('TaskList ID:' + taskListId);
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************


//
// Get Account details
// 

function getAccount() {
    var resultElement = document.getElementById('getAccountResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com' + '/people.json',
        })
        .then(function (response) {
            var companyName = response.data['company-name'];
            $(resultElement).append("Hi, " + response.textFormat);
            console.log("Company name is: " + companyName);

        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
            console.log(error);
        });
}

// *************************************************************************************************

// 
// Get overview
//

function getOverview() {
    var resultElement = document.getElementById('getOverviewResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/projects/' + PROJECTID + '/tasks.json',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                var taskTitle = this.content;
                var task = $(resultElement).append(
                    '<b>' + taskTitle + '</b>' + '<br>' + '<hr>');
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************

// 
// Count all Tasks
//

function getTaskCount() {
    var resultElement = document.getElementById('getTaskCountResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/projects/' + PROJECTID + '/tasks.json',
        })
        .then(function (response) {
            if (response.statusText == 'OK') {
                var taskCount = response.data['todo-items'].length;
                var task = $(resultElement).append(
                    taskCount);
                console.log("Task count is: " + taskCount);
            }
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************

// 
// Get all Tasks and display
// 

function getAllTasks() {
    var resultElement = document.getElementById('getAllTasksResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/projects/' + PROJECTID + '/tasks.json?sort=dateadded',
        })
        .then(function (response) {
            console.log("Current project ID is: " + PROJECTID)
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var taskDescription = this.description;
                $(resultElement).append(
                    '<div class="taskDiv panel panel-default">' +
                    '<li style="list-style-type: none">' +
                    '<div class="panel-body">' +
                    '<p class="alignleft"><b>' + taskTitle + '</b>' + '<br><br>' + taskDescription + '</p >' +
                    '<div class="editMenuBtn alignright">' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hooray!">' +
                    '<i class="fa fa-check-square-o fa-fw fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Edit">' +
                    '<i class="fa fa-pencil-square-o fa-fw fa-lg  edit-menu-icons" aria-hidden="true" onclick="getTaskForEdit(' + taskID + ')"></i>' + '</a>' +
                    '<div class="editMenuDiv" style="display: none"><a href="#" onclick="completeTask(' + taskID + ')" id="completeBtn">Complete | </a></div>' +
                    '</li>' +
                    '</div>' +
                    '</div>');
                triggerTooltips();
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}


function showEditMenu(task_id) {
    console.log(task_id);
}

// *************************************************************************************************

// 
// Get all Tasks which have been marked complete
//

function getAllTasksCompleted() {
    var resultElement = document.getElementById('getAllTasksCompletedResult');
    resultElement.innerHTML = '';

    var pageSize5 = '&pageSize=5';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/completedtasks.json?sort=completedOn',
        })
        .then(function (response) {
            $(response.data['tasks']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var taskDescription = this.description;
                $(resultElement).append(
                    '<div class="taskDiv panel panel-default">' +
                    '<li style="list-style-type: none">' +
                    '<div class="panel-body">' +
                    '<strike><p class="alignleft"><b>' + taskTitle + '</b>' + '<br><br>' + taskDescription + '</strike></p >' +
                    '<div class="editMenuBtn alignright">' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Delete">' +
                    '<i class="fa fa-trash-o fa-lg edit-menu-icons" aria-hidden="true" onclick="deleteTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '</li>' +
                    '</div>' +
                    '</div>');
                triggerTooltips();
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************

// 
// Get all Tasks due Today
// 

function getAllTasksToday() {
    var resultElement = document.getElementById('getAllTasksResultToday');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=today&sort=dateadded',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                var taskDescription = this.description;
                $(resultElement).append(
                    '<div class="taskDiv panel panel-default">' +
                    '<li style="list-style-type: none">' +
                    '<div class="panel-body">' +
                    '<p class="alignleft"><b>' + taskTitle + '</b>' + '<br><br>' + taskDescription + '</p >' +
                    '<div class="editMenuBtn alignright">' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hooray!">' +
                    '<i class="fa fa-check-square-o fa-fw fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Edit">' +
                    '<i class="fa fa-pencil-square-o fa-fw fa-lg  edit-menu-icons" aria-hidden="true" onclick="getTaskForEdit(' + taskID + ')"></i>' + '</a>' +
                    '<div class="editMenuDiv" style="display: none"><a href="#" onclick="completeTask(' + taskID + ')" id="completeBtn">Complete | </a></div>' +
                    '</li>' +
                    '</div>' +
                    '</div>');
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = getAllTasksOutputError(error);
        });
}

// *************************************************************************************************

// 
// Count Tasks due today
//

function getTaskCountToday() {
    var resultElement = document.getElementById('getTaskCountTodayResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=today',
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(taskCount);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************

// 
// Get all Tasks due Tomorrow
// 

function getAllTasksTomorrow() {
    var resultElement = document.getElementById('getAllTasksResultTomorrow');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=tomorrow&?sort=dateadded',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                var taskDescription = this.description;
                $(resultElement).append(
                    '<div class="taskDiv panel panel-default">' +
                    '<li style="list-style-type: none">' +
                    '<div class="panel-body">' +
                    '<p class="alignleft"><b>' + taskTitle + '</b>' + '<br><br>' + taskDescription + '</p >' +
                    '<div class="editMenuBtn alignright">' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hooray!">' +
                    '<i class="fa fa-check-square-o fa-fw fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Edit">' +
                    '<i class="fa fa-pencil-square-o fa-fw fa-lg  edit-menu-icons" aria-hidden="true" onclick="getTaskForEdit(' + taskID + ')"></i>' + '</a>' +
                    '<div class="editMenuDiv" style="display: none"><a href="#" onclick="completeTask(' + taskID + ')" id="completeBtn">Complete | </a></div>' +
                    '</li>' +
                    '</div>' +
                    '</div>');
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = getAllTasksOutputError(error);
        });
}

// *************************************************************************************************

// 
// Count Tasks due tomorrow
//

function getTaskCountTomorrow() {
    var resultElement = document.getElementById('getTaskCountTomorrowResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=tomorrow',
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(taskCount);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************

// 
// Get all Tasks that are overdue
//

function getAllTasksOverdue() {
    var resultElement = document.getElementById('getAllTasksOverdueResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=overdue&sort=dateadded',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                var taskDescription = this.description;
                $(resultElement).append(
                    '<div class="taskDiv panel panel-default">' +
                    '<li style="list-style-type: none">' +
                    '<div class="panel-body">' +
                    '<p class="alignleft"><b>' + taskTitle + '</b>' + '<br><br>' + taskDescription + '</p >' +
                    '<div class="editMenuBtn alignright">' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Hooray!">' +
                    '<i class="fa fa-check-square-o fa-fw fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '<a href="#" data-toggle="tooltip" data-placement="bottom" title="Edit">' +
                    '<i class="fa fa-pencil-square-o fa-fw fa-lg  edit-menu-icons" aria-hidden="true" onclick="getTaskForEdit(' + taskID + ')"></i>' + '</a>' +
                    '<div class="editMenuDiv" style="display: none"><a href="#" onclick="completeTask(' + taskID + ')" id="completeBtn">Complete | </a></div>' +
                    '</li>' +
                    '</div>' +
                    '</div>');
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
}

// *************************************************************************************************

// 
// Count Tasks that are overdue
//


function getTaskCountOverdue() {
    var resultElement = document.getElementById('getTaskCountOverdueResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=overdue',
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(taskCount);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************

// 
// Get all High priority Tasks
// 

function getHighPriority() {
    var resultElement = document.getElementById('getHighPriorityResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?priority=high',
        })
        .then(function (response) {
            '<h4>Tasks: </h4>' +
            $(response.data['todo-items']).each(function () {
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var priority = this.priority;
                var task = $(resultElement).append(
                    '<b>' + taskTitle + '</b>' + '<br>' +
                    'Due date: ' + dueDate + '<br>' +
                    'Priority: ' + priority + '<hr>');
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = getAllTasksOutputError(error);
        });
}

// *************************************************************************************************


function getTaskForEdit(task_id) {
    var var1 = task_id;

    console.log("Task selected: " + task_id);

    editTaskForm(var1);

    $(".taskEdit").show();
    $(".addTaskRight").hide();
    $(".addTaskMobile").hide();
    $(".allTasks").hide();
    $(".countTasks").hide();
}

function editTaskForm(val) {
    var resultElement = document.getElementById('getTaskForEditResult');
    resultElement.innerHTML = '';
    var task_id = val;

    ThisTaskID.task_id = task_id;


    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks/' + task_id + '.json',
        })
        .then(function (response) {
            $(response.data['todo-item']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                var taskDescription = this.description;
                console.log(response.statusText);
                $(resultElement).append(
                    '<form class="form-inline" id="todoInputFormEdit">' +
                    '<div>' +
                    '<input  value="' + taskTitle + '" type="text" class="form-control input-no-border" id="taskTitleEdit" size="100%" placeholder="" maxlength="20" required>' +
                    '<br>' +
                    '<br>' +
                    '<textarea name="message" class="form-control input-no-border" id="taskDescriptionEdit" rows="5" cols=100 placeholder="">' + taskDescription + '</textarea>' +
                    '<br>' +
                    '<br>' +
                    '<!-- Date input -->' +
                    '<br>' +
                    '<input class="form-control input-no-border" id="datePickerEdit" name="date" size="100%" placeholder="Due date: DD/MM/YYY" type="text"/>' +
                    '<br>' +
                    '<br>' +
                    '<div>' +
                    '<button type="submit" class="btn btn-primary">Save</button>' + '<p class="btn btn-cancel align-right-margin" onclick="hideEditForm()" >Cancel</p>' + '</div>' +
                    '<div class = "panel-body" id ="editTaskResult">' +
                    '</div>' +
                    '</form>');
                var date_input = $('input[name="date"]'); //our date input has the name "date"
                var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
                date_input.datepicker({
                    format: 'yyyymmdd',
                    container: container,
                    todayHighlight: true,
                    autoclose: true,
                })
                document.getElementById('todoInputFormEdit').addEventListener('submit', editTask);
            });
        })
        .catch(function (error) {
            console.log(error.statusText);
        })
}




function triggerTooltips() {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}



// *************************************************************************************************