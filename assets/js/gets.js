
//
// Get Account details
// 

function getAccount() {
    var resultElement = document.getElementById('getAccountResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: 'twp_YWbJhowpOcZZxp878vS8wcy4IAco_eu',
                password: ':xxx'
            },
            url: 'https://davedodea.eu.teamwork.com/account.json',
        })
        .then(function (response) {
            resultElement.innerHTML = '<i class="fa fa-user"></i>' + " " + 
            response.data.account.siteOwnerName;
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// 
// Get all Tasks and display
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
            url: 'https://' + SiteName + '.teamwork.com/tasks.json',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                //var taskID = this.id;
                var taskTitle = this.content;
                // var dueDate = this['due-date'];
                // var priority = this.priority;
                var task = $(resultElement).append(
                    '<b>' + taskTitle + '</b>' + '<br>' + '<hr>');
                //console.log('Task Name is: ' + taskTitle);        
            });
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

    //var responseReturn;

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json',
        })
        .then(function (response) {
            if (response.statusText == 'OK') {
                // window.location.href = "/index.html";
                // console.log('Status: ' + response.statusText);
                var taskCount = response.data['todo-items'].length;
                var task = $(resultElement).append(
                    taskCount);
                // console.log('Task Count is: ' + taskCount);
                // $(response.data['todo-items']).each(function () {
                //     //var taskID = this.id;
                //     var taskTitle = this.content;
                //     // var dueDate = this['due-date'];
                //     // var priority = this.priority;
                //     var task = $(resultElement).append(
                //         '<b>' + taskTitle + '</b>' + '<br>' + '<hr>');
                //     console.log('Task Name is: ' + taskTitle);
            }
            // console.log("Response status: " + response.statusText);
            // console.log("Response status: " + response.statusText);
            // var responseRT = response.statusText;
            // return responseRT;
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function testJasmine(x, y) {
    response = x + y;
    return response;
}






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
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?sort=dateadded',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                $(resultElement).append(
                    '<div class="taskDiv">' +
                    '<li style="list-style-type: none">' +
                    '<p>' + taskTitle + '</p >' +
                    // '<p  id="taskIDListItem">' + taskID + '</p>' +
                    '<div class="editMenuBtn">' +
                    '<a href="#" data-toggle="tooltip" title="Hooray!">' + 
                    '<i class="fa fa-check-square-o fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '<i class="fa fa-pencil-square-o fa-lg edit-menu-icons" aria-hidden="true" onclick="showEditMenu(' + taskID + ')"></i>' +
                    '<i class="fa fa-calendar fa-lg edit-menu-icons" aria-hidden="true" onclick="showEditMenu(' + taskID + ')"></i>' +
                    '<i class="fa fa-comment-o fa-lg edit-menu-icons" aria-hidden="true" onclick="showEditMenu(' + taskID + ')"></i>' +
                    '</div>' +
                    '<div class="editMenuDiv" style="display: none"><a href="#" onclick="completeTask(' + taskID + ')" id="completeBtn">Complete | </a></div>' +
                    '</li>' + '<hr>' +
                    '</div>' +
                    '</div>');
                //console.log('Task ID is: ' + taskID);
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function showEditMenu(task_id) {
    console.log(task_id);
    // $(".editMenuBtn").toggle();

    // $(".editMenuDiv").hover(function () {
    //     $(".editMenuDiv").show();
    // }, function () {
    //     $(".editMenuDiv").hide();
    // });
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
                $(resultElement).append('<p>' + taskTitle + '</p>' + ' <br><hr>');
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
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=today&sort=dateadded',
        })
        .then(function (response) {
            // var taskCount = response.data['todo-items'].length;
            // '<p>Task Count is: </p>' + taskCount;
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                $(resultElement).append('<p>' + taskTitle + '</p>' + ' <br><hr>');
                // console.log('Task ID is: ' + taskID);
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
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=today',
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(
                taskCount);

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
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=tomorrow&?sort=dateadded',
        })
        .then(function (response) {
            // var taskCount = response.data['todo-items'].length;
            // '<p>Task Count is: </p>' + taskCount;
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var project = this['project-name'];
                $(resultElement).append('<p>' + taskTitle + '</p>' + ' <br><hr>');
                // console.log('Task ID is: ' + taskID);
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
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=tomorrow',
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(
                taskCount);
            // console.log('Task Count is: ' + taskCount);
            // $(response.data['todo-items']).each(function () {
            //     //var taskID = this.id;
            //     var taskTitle = this.content;
            //     // var dueDate = this['due-date'];
            //     // var priority = this.priority;
            //     var task = $(resultElement).append(
            //         '<b>' + taskTitle + '</b>' + '<br>' + '<hr>');
            //     console.log('Task Name is: ' + taskTitle);            
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
                $(resultElement).append('<div class="taskDiv">' +
                    '<li style="list-style-type: none">' +
                    '<p>' + taskTitle + '</p >' +
                    // '<p  id="taskIDListItem">' + taskID + '</p>' +
                    '<div class="editMenuBtn">' +
                    '<a href="#" data-toggle="tooltip" title="Hooray!">' + '<i class="fa fa-check-square-o fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
                    '<i class="fa fa-pencil-square-o fa-lg edit-menu-icons" aria-hidden="true" onclick="showEditMenu(' + taskID + ')"></i>' +
                    '<i class="fa fa-calendar fa-lg edit-menu-icons" aria-hidden="true" onclick="showEditMenu(' + taskID + ')"></i>' +
                    '<i class="fa fa-comment-o fa-lg edit-menu-icons" aria-hidden="true" onclick="showEditMenu(' + taskID + ')"></i>' +
                    '</div>' +
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
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=overdue',
        })
        .then(function (response) {
            var taskCount = response.data['todo-items'].length;
            var task = $(resultElement).append(
                taskCount);
            // console.log('Task Count is: ' + taskCount);
            // $(response.data['todo-items']).each(function () {
            //     //var taskID = this.id;
            //     var taskTitle = this.content;
            //     // var dueDate = this['due-date'];
            //     // var priority = this.priority;
            //     var task = $(resultElement).append(
            //         '<b>' + taskTitle + '</b>' + '<br>' + '<hr>');
            //     console.log('Task Name is: ' + taskTitle);            
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

// 
// Get all Tasks for Study-list
// 

function getAllTasksStudy() {
    var resultElement = document.getElementById('getAllTasksStudyResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/projects/334288/tasks.json',
        })
        .then(function (response) {
            '<h4>Tasks: </h4>' +
            $(response.data['todo-items']).each(function () {
                //var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var priority = this.priority;
                var task = $(resultElement).append(
                    '<b>' + taskTitle + '</b>' + '<br>' +
                    'Due date: ' + dueDate + '<br>' +
                    'Priority: ' + priority + '<hr>');
                // console.log('Task ID is: ' + taskID);
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = getAllTasksOutputError(error);
        });
}


// 
// Get all Tasks for Work-list
// 

function getAllTasksWork() {
    var resultElement = document.getElementById('getAllTasksWorkResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/projects/334385/tasks.json',
        })
        .then(function (response) {
            '<h4>Tasks: </h4>' +
            $(response.data['todo-items']).each(function () {
                //var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var priority = this.priority;
                var task = $(resultElement).append(
                    '<b>' + taskTitle + '</b>' + '<br>' +
                    'Due date: ' + dueDate + '<br>' +
                    'Priority: ' + priority + '<hr>');
                // console.log('Task ID is: ' + taskID);
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = getAllTasksOutputError(error);
        });
}


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
                //var taskID = this.id;
                var taskTitle = this.content;
                var dueDate = this['due-date'];
                var priority = this.priority;
                var task = $(resultElement).append(
                    '<b>' + taskTitle + '</b>' + '<br>' +
                    'Due date: ' + dueDate + '<br>' +
                    'Priority: ' + priority + '<hr>');
                // console.log('Task ID is: ' + taskID);
            });
        })
        .catch(function (error) {
            resultElement.innerHTML = getAllTasksOutputError(error);
        });
}