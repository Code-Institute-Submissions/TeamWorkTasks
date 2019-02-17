// 
// Add event listener for form submit button
//
function addEventListeners() {
    document.getElementById('todoInputForm').addEventListener('submit', postTask);
    document.getElementById('todoInputFormMobile').addEventListener('submit', postTaskMobile);
    document.getElementById('addtaskListForm').addEventListener('submit', postTaskListProj);
    document.getElementById('addtaskListFormMobile').addEventListener('submit', postTaskListProjMobile);
}


// 
// Post task with form fields taken from 'todoInputForm'
//

function postTask(e) {
    var resultElement = document.getElementById('postTaskResult');
    resultElement.innerHTML = '';

    var taskDescription = document.getElementById('taskDescription').value;
    var content = document.getElementById("taskTitle").value;
    var date_picker = document.getElementById('datePicker').value;
    
    var due_date = date_picker.split('/').reverse().join('')

    axios({
            method: 'POST',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/addtask/' + localStorage.getItem("selectedTaskListID") + '/tasks.json',
            headers: {
                'Authorization': "Bearer " + APIKey
            },
            data: {
                "todo-item": {
                    "content": content,
                    "due-date": due_date,
                    "description": taskDescription
                }
            },

            processData: false,
            contentType: "application/json; charset=UTF-8"
        })
        .then(function (response) {
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay! Your new task was added!</div>');
            $('.task-success').show();
            refreshAllTasks();
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
// Post task with form fields taken from 'todoInputForm'
//
function postTaskMobile(e) {
    var resultElement = document.getElementById('postTaskResultMobile');
    resultElement.innerHTML = '';

    var content = document.getElementById("taskTitleMobile").value;
    var taskDescription = document.getElementById('taskDescriptionMobile').value;
    var date_picker = document.getElementById('datePickerMobile').value;
    var due_date = date_picker.split('/').reverse().join('')

    axios({
            method: 'POST',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/addtask/' + localStorage.getItem("selectedTaskListID") + '/tasks.json',
            headers: {
                'Authorization': "Bearer " + APIKey
            },
            data: {
                "todo-item": {
                    "content": content,
                    "due-date": due_date,
                    "description": taskDescription
                }
            },

            processData: false,
            contentType: "application/json; charset=UTF-8"
        })
        .then(function (response) {
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay!Your new task was added!</div>');
            $('.task-success').show();
            refreshAllTasks();
            setTimeout(() => {
                $('#todoInputFormMobile')[0].reset();
                setTimeout(() => {
                    $('.task-success').hide();
                    showAllTasks();
                }, 3000);
            }, 50);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();
}

/* 
Create a tasklist
*/

function postTaskListProj(e) {
    var resultElement = document.getElementById('postTaskListResult');

    var name = document.getElementById("taskListTitle").value;

    axios({
            method: 'POST',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/tasklists/' + localStorage.getItem("currentProjectID") + '/tasklists.json',
            headers: {
                'Authorization': "Bearer " + APIKey,
            },
            data: {
                "todo-list": {
                    "name": name,
                }
            }
        })
        .then(function (response) {
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay!Your new task was added!</div>');
            $('.task-success').show();
             setTimeout(() => {
                window.location.href = "/home.html";
            }, 1000);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
        e.preventDefault();
}

/* 
Create a tasklist mobile
*/

function postTaskListProjMobile(e) {
    var resultElement = document.getElementById('postTaskListResultMobile');

    var name = document.getElementById("taskListTitleMobile").value;

    axios({
            method: 'POST',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/tasklists/' + localStorage.getItem("currentProjectID") + '/tasklists.json',
            headers: {
                'Authorization': "Bearer " + APIKey,
            },
            data: {
                "todo-list": {
                    "name": name,
                }
            }
        })
        .then(function (response) {
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay!Your new task was added!</div>');
            $('.task-success').show();
             setTimeout(() => {
                window.location.href = "/home.html";
            }, 1000);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
        e.preventDefault();
}

/* 
Post auth code received fronm TeamWork API
*/

function postAuthCode() {
    let code = {
        code: window.location.search.substr(6)
    };

    axios({
            method: 'POST',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/teamworktoken',
            data: code,
            processData: false,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function (response) {
            var authToken = response.data['access_token'];
            localStorage.setItem('authToken', authToken);
            window.location.href = "/projects.html";
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
}


function refreshAllTasks() {
    getAllTasks();
    getAllTasksCompleted();
    getAllTasksToday();
    getAllTasksTomorrow();
    getAllTasksOverdue();
    getTaskCount();
}
// *************************************************************************************************