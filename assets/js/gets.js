/* 
Get all projects for the user
*/
function getProjects() {
    var resultElement = document.getElementById('getProjectsResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/getprojects',
            headers: {
                'Authorization': "Bearer " + APIKey,
            }
        })
        .then(function (response) {
            $(response.data['projects']).each(function () {
                var projectName = this.name;
                var projectID = this.id;

                $(resultElement).append(
                    '<div class="col-lg-12">' +
                    '<div class="panel panel-default">' +
                    '<div class="panel-heading">' + projectName +
                    '<hr>' +
                    '<i class="fa fa-arrow-right fa-fw fa-lg edit-menu-icons" aria-hidden="true" onclick="setProjectID(' + projectID + ')" id="completeBtn" align="center"></i>' + '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
                $('#myModal').modal('show');
                $('#loader').hide();
            })
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
}

/* 
Set project ID
*/
function setProjectID(projectID) {
    localStorage.setItem("currentProjectID", projectID);

    setTimeout(() => {
        window.location.href = "/home.html";
    }, 500);

}

/* 
Set TaskList ID from radio button
*/
function getSelectListID() {
    $(document).ready(function () {
        $("#taskListRadio").click(function () {
            var selectedTaskListID = $("input[type='radio'][name='taskListRadioButtons']:checked + label span").text();
            localStorage.setItem("selectedTaskListID", selectedTaskListID);
        });
        $("#taskListRadioMobile").click(function () {
            var selectedTaskListID = $("input[type='radio'][name='taskListRadioButtons']:checked + label span").text();
            localStorage.setItem("selectedTaskListID", selectedTaskListID);
        });
    });
}

// *************************************************************************************************


/* 
Get task lists or the set project
*/
function getTaskListDetails() {
    var resultElement = document.getElementById('taskListRadio');
    var resultElementMobile = document.getElementById('taskListRadioMobile');

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/tasklists/' + localStorage.getItem("currentProjectID") + '/tasklists.json',
            headers: {
                'Authorization': "Bearer " + APIKey,
            }
        })
        .then(function (response) {
            var taskListCount = response.data['tasklists'].length;
            localStorage.setItem("taskListCount", taskListCount);
            if (response.data['tasklists'].length) {
                $('#addTaskRight').show();
                $(response.data['tasklists']).each(function () {
                    var taskListName = this.name;
                    var taskListId = this.id;
                    $(resultElement).append(
                        '<input type="radio" id="customRadio1" name="taskListRadioButtons" class="custom-control-input" required>' +
                        '<label class="custom-control-label" for="customRadio1">' + taskListName + '<span id="taskListId" style="display: none;">' + taskListId + '</span>' + '</label>' + '<br>'
                    )
                    $(resultElementMobile).append(
                        '<input type="radio" id="customRadio1" name="taskListRadioButtons" class="custom-control-input" required>' +
                        '<label class="custom-control-label" for="customRadio1">' + taskListName + '<span id="taskListId" style="display: none;">' + taskListId + '</span>' + '</label>' + '<br>'
                    )
                    return
                });
            } else {
                $('#addTaskRight').hide();
                $('#addTaskListRight').show();
            }
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// *************************************************************************************************


/* 
Get account details of the auth user
*/
function getAccount() {
    var resultElement = document.getElementById('todaysDate');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/account',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            var companyName = response.data.account['siteOwnerName'];
            $(resultElement).append("Hi, " + companyName + ' !');
            dateToday();
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

//
// Count all Tasks
//

function getTaskCount() {
    var resultElement = document.getElementById('getTaskCountResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?sort=dateadded',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            if (response.statusText == 'OK') {
                var taskCount = response.data['todo-items'].length;
                localStorage.setItem("taskCount", taskCount);
                var task = $(resultElement).append(
                    taskCount);
            }
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

//
// Get all Tasks and display
//

function getAllTasks() {
    var localAuthKey = localStorage.getItem('authToken');
    var resultElement = document.getElementById('getAllTasksResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?sort=dateadded',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            if (response.data['todo-items'].length) {
                $(response.data['todo-items']).each(function () {
                    var taskID = this.id;
                    var taskTitle = this.content;
                    var taskDescription = this.description;
                    var taskList = this['todo-list-name'];
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
                        '<br />' +
                        '<span class="label label-warning">' + taskList + '</span>' +
                        '<div class="editMenuDiv" style="display: none"><a href="#" onclick="completeTask(' + taskID + ')" id="completeBtn">Complete | </a></div>' +
                        '</li>' +
                        '</div>' +
                        '</div>');
                    triggerTooltips();
                });
            } else {
                $(resultElement).append(
                    '<div class="center visible-lg visible-md">' +
                    '<button type="button" class="btn btn-warning center" onclick="focusTaskForm();" id="createTaskButton">Use the form to create your first task or list!</button>' +
                    '</div>' +
                    '<div class="center visible-sm visible-xs">' +
                    '<button type="button" class="btn btn-warning center" onclick="showTaskListOrAddTask();" id="createTaskButton">Create your first task or list!</button>' +
                    '</div>'
                );
                triggerTooltips();
            }
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

//
// Get all Tasks which have been marked complete
//

function getAllTasksCompleted() {
    var resultElement = document.getElementById('getAllTasksCompletedResult');
    resultElement.innerHTML = '';

    var pageSize5 = '&pageSize=5';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/completedtask',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
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

//
// Get all Tasks due Today
//

function getAllTasksToday() {
    var resultElement = document.getElementById('getAllTasksResultToday');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?filter=today',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
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

//
// Count Tasks due today
//

function getTaskCountToday() {
    var resultElement = document.getElementById('getTaskCountTodayResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?filter=today',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(taskCount);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

//
// Get all Tasks due Tomorrow
//

function getAllTasksTomorrow() {
    var resultElement = document.getElementById('getAllTasksResultTomorrow');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?filter=tomorrow',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
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

//
// Count Tasks due tomorrow
//

function getTaskCountTomorrow() {
    var resultElement = document.getElementById('getTaskCountTomorrowResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?filter=tomorrow',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(taskCount);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

//
// Get all Tasks that are overdue
//

function getAllTasksOverdue() {
    var resultElement = document.getElementById('getAllTasksOverdueResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?filter=overdue',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
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

//
// Count Tasks that are overdue
//


function getTaskCountOverdue() {
    var resultElement = document.getElementById('getTaskCountOverdueResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/alltasks/' + localStorage.getItem("currentProjectID") + '/tasks.json?filter=overdue',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(taskCount);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}



/* 
Get the task and render the edit form
*/
function editTaskForm(val) {
    var resultElement = document.getElementById('getTaskForEditResult');
    resultElement.innerHTML = '';
    var task_id = val;

    ThisTaskID.task_id = task_id;


    axios({
            method: 'GET',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/singletask/' + task_id + '.json',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            $(response.data['todo-item']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                var taskDescription = this.description;
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
                var date_input = $('input[name="date"]');
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
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
}


/* 
Trigger bootstrapp tooltips
*/
function triggerTooltips() {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}



// *************************************************************************************************