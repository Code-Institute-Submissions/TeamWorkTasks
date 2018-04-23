//
// ***************************** Constants **********************************************************
//

const SiteName = localStorage.getItem("siteName");
const APIKey = localStorage.getItem("apiKey");

document.getElementById('todoInputForm').addEventListener('submit', postTask);

//
// ***************************** START Gets *******************************************************
//


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
            resultElement.innerHTML = '<i class="fa fa-user"></i>' + " " + response.data.account.siteOwnerName;
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

function getTaskCount() {
    var resultElement = document.getElementById('getTaskCountResult');
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
            } else {
                // console.log(error);

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
                    '<a href="#" data-toggle="tooltip" title="Hooray!">' + '<i class="fa fa-check-square-o fa-lg edit-menu-icons" aria-hidden="true" onclick="completeTask(' + taskID + ')" id="completeBtn"></i>' + '</a>' +
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

function getAllTasksCompleted() {
    var resultElement = document.getElementById('getAllTasksCompletedResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            url: 'https://' + SiteName + '.teamwork.com/tasks.json?filter=completed&sort=completedDateDESC',
        })
        .then(function (response) {
            $(response.data['todo-items']).each(function () {
                var taskID = this.id;
                var taskTitle = this.content;
                '<div id="divToHide">' +
                $(response.data['todo-items']).each(function () {
                    var taskID = this.id;
                    var taskTitle = this.content;
                    var dueDate = this['due-date'];
                    var project = this['project-name'];
                    $(resultElement).append('<p>' + taskTitle + '</p>' + ' <br><hr>');
                });
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
// Get all Tasks for Study
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
// Get all Tasks for Work
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


//
// ***************************** END Gets *******************************************************
//


//
// ***************************** START Post *****************************************************
//

function postTask(e) {
    var resultElement = document.getElementById('postTaskResult');
    // var taskTitle = document.getElementById("taskTitle").value;
    resultElement.innerHTML = '';

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var company = "davedodea.eu";
    var key = "twp_YWbJhowpOcZZxp878vS8wcy4IAco_eu";
    var tasklist_id = "1236401";
    var content = document.getElementById("taskTitle").value;
    var due_date = date.getFullYear() + (month < 10 ? '0' : '') +
        month + (day < 10 ? '0' : '') + day;

    axios({
            method: 'POST',
            url: 'https://' + SiteName + '.teamwork.com/tasklists/' + tasklist_id + '/tasks.json',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
            data: {
                "todo-item": {
                    "content": content,
                    "due-date": due_date
                }
            },
            processData: false,
            contentType: "application/json; charset=UTF-8"
        })
        .then(function (response) {
            //resultElement.innerHTML = generateSuccessHTMLOutput(response);
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay!Your new task was added!</div>');
            //<div class="alert alert-success" role="alert">...</div>
            $('.task-success').show();
            getAllTasks();
            setTimeout(() => {
                $('#todoInputForm')[0].reset();
                setTimeout(() => {
                    $('.task-success').hide();
                }, 5000);
            }, 50);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();
}

//
// ***************************** START Puts *******************************************************
//


function completeTask(task_id) {

    console.log(task_id);

    axios({
            method: 'PUT',
            url: 'https://' + SiteName + '.teamwork.com/tasks/' + task_id + '/complete.json',
            auth: {
                username: APIKey,
                password: ':xxx'
            },
        })
        .then(function (response) {
            setTimeout(() => {
                getAllTasks();
                getAllTasksCompleted();
            }, 100);
            console.log(response.statusText);
        })
        .catch(function (error) {
            console.log(error.statusText);
        })

}

//
// ***************************** END Posts *******************************************************
//



//
// ***************************** END Posts *******************************************************
//



//
// ***************************** START Delete ****************************************************
//

//
// ***************************** End Deletes *****************************************************
//

//
// ***************************** Start Misc. *****************************************************
//

// function formatJqueryUiDate() {
//     $(document).ready(function () {

//         $("#calendar").datepicker({
//             dateFormat: 'dd-mm-yy'
//         });
//         console.log("Hello JJ");
//     });
// }


function dateToday() {
    var today = new Date();
    var today = today.toDateString();
    document.getElementById("todaysDate").innerHTML = today;
}

function generateSuccessHTMLOutput(response) {
    return '<h4>Result:</h4>' +
        '<h5>Status:</h5>' +
        '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
    return '<h4>Result:</h4>' +
        '<h5>Message:</h5>' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status:</h5>' +
        '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}



//
// ***************************** END Misc. *****************************************************
//



//
// ***************************** Login form ****************************************************
//

function loginForm() {
    var inputSiteName = document.getElementById("lg_username");
    localStorage.setItem("siteName", inputSiteName.value);

    var inputApiKey = document.getElementById("lg_password");
    localStorage.setItem("apiKey", inputApiKey.value);

    console.log("Auth Success!");
    console.log("Site name is: " + localStorage.getItem("siteName"));
    console.log("API Key is : " + localStorage.getItem("apiKey"));
    window.location.href = "/home.html";
}

function logOut() {
    localStorage.removeItem("apiKey");
    localStorage.removeItem("siteName");

    setTimeout(() => {
        window.location.href = "/index.html";
    }, 100);
    console.log("Logged out!");

}

function checkIfLoggedIn() {
    if (localStorage.length > 1) {
        window.location.href = "/home.html";
    }
}

function checkIfLoggedOut() {
    if (localStorage.length == 0) {
        window.location.href = "/index.html";
    }
}

function clearLocalStorage() {
    localStorage.removeItem("siteName");
}

// function incTaskID() {
//     var i = 0;
//     $('#taskID').each(function () {
//         i++;
//         var newID = 'taskID' + i;
//         $(this).attr('id', newID);
//         $(this).val(i);
//     });
// }

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
//
// ***************************** Show/Hide content ********************************************
//

// function runIntroJSCheck() {
//     var introguide = introJs();

//     // and check for it when deciding whether to start.
//     window.addEventListener('load', function () {
//         var doneTour = localStorage.getItem('EventTour') === 'Completed';
//         if (doneTour) {
//             return;
//         } else {
//             introguide.start()

//             introguide.oncomplete(function () {
//                 localStorage.setItem('EventTour', 'Completed');
//             });

//             introguide.onexit(function () {
//                 localStorage.setItem('EventTour', 'Completed');
//             });
//         }
//     });
// }