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
    var due_date = date_picker.split('/').reverse().join('')
    console.log("Split date is: " + due_date)
    // var due_date = date_picker.replace(/\//ig, '')
    console.log("Passed date is: " + due_date)



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
                    "due-date": due_date,
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
            refreshAllTasks();
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

    var tasklist_id = SELECTEDTASKLISTID;
    var content = document.getElementById("taskTitleMobile").value;
    var taskDescription = document.getElementById('taskDescriptionMobile').value;
    var date_picker = document.getElementById('datePickerMobile').value;
    var due_date = date_picker.split('/').reverse().join('')

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
                    "due-date": due_date,
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


