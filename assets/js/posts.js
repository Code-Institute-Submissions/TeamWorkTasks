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
    //console.log("Split date is: " + due_date)
    // var due_date = date_picker.replace(/\//ig, '')
    //console.log("Passed date is: " + due_date)



    //console.log("Task listid is: " + tasklist_id);

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
            //resultElement.innerHTML = generateSuccessHTMLOutput(response);
            $(resultElement).append('<div class = "alert alert-success task-success" role = "alert" style = "display: none" > Yay! Your new task was added!</div>');
            //<div class="alert alert-success" role="alert">...</div>
            $('.task-success').show();
            // location.reload();
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
    // var taskTitle = document.getElementById("taskTitle").value;
    resultElement.innerHTML = '';

    var tasklist_id = SELECTEDTASKLISTID;
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
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();
}

function postAuthCode() {
    let code = {
        code: window.location.search.substr(6)
    };
    //console.log("Auth code is: ", code);

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

            //console.log("Local storage token: ", localStorage.getItem('auth token'));
            //console.log("Response is: ", authToken);
            //console.log(response);

            window.location.href = "/home.html";
        })
        .catch(function (error) {
            //console.log("Error: ", error);
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