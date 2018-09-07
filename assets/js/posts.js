// 
// Add event listener for form submit button
//

document.getElementById('todoInputForm').addEventListener('submit', postTask);
document.getElementById('todoInputFormMobile').addEventListener('submit', postTaskMobile);


// 
// Post task with form fields taken from 'todoInputForm'
//

function postTask(e) {
    var resultElement = document.getElementById('postTaskResult');
    resultElement.innerHTML = '';

    var tasklist_id = SELECTEDTASKLISTID;
    var taskDescription = document.getElementById('taskDescription').value;
    var content = document.getElementById("taskTitle").value;
    var date_picker = document.getElementById('datePicker').value;

    // var date = new Date();
    // var month = date.getMonth() + 1;
    // var day = date.getDate();
    // var due_date = date.getFullYear() + (month < 10 ? '0' : '') +
    //     month + (day < 10 ? '0' : '') + day;


    console.log("Task listid is: " + tasklist_id);

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
                    "due-date": date_picker,
                    "description": taskDescription
                }
            },
            processData: false,
            contentType: "application/json; charset=UTF-8"
        })
        .then(function(response) {
            //resultElement.innerHTML = generateSuccessHTMLOutput(response);
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay! Your new task was added!</div>');
            //<div class="alert alert-success" role="alert">...</div>
            $('.task-success').show();
            getAllTasks();
            getAllTasksToday();
            getAllTasksTomorrow();
            getAllTasksOverdue();
            getAllTasksCompleted();
            getTaskCount();
            setTimeout(() => {
                $('#todoInputForm')[0].reset();
                setTimeout(() => {
                    $('.task-success').hide();
                }, 5000);
            }, 50);
        })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();
}

// 
// Post task with form fields taken from 'todoInputForm'
//
function postTaskMobile(e) {
    var resultElement = document.getElementById('postTaskResultMobile');
    // var taskTitle = document.getElementById("taskTitle").value;
    resultElement.innerHTML = '';

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var tasklist_id = "964161";
    var content = document.getElementById("taskTitleMobile").value;
    var taskDescription = document.getElementById('taskDescriptionMobile').value;
    var date_picker = document.getElementById('datePickerMobile').value;
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
                    "due-date": date_picker,
                    "description": taskDescription
                }
            },
            processData: false,
            contentType: "application/json; charset=UTF-8"
        })
        .then(function(response) {
            //resultElement.innerHTML = generateSuccessHTMLOutput(response);
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay!Your new task was added!</div>');
            //<div class="alert alert-success" role="alert">...</div>
            $('.task-success').show();
            refreshAllTasks();
            setTimeout(() => {
                $('#todoInputFormMobile')[0].reset();
                setTimeout(() => {
                    $('.task-success').hide();
                }, 5000);
            }, 50);
        })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();
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


