// 
// Add event listener for form submit button
//

document.getElementById('todoInputForm').addEventListener('submit', postTask);

// 
// Post task with form fields taken from 'todoInputForm'
//

function postTask(e) {
    var resultElement = document.getElementById('postTaskResult');
    // var taskTitle = document.getElementById("taskTitle").value;
    resultElement.innerHTML = '';

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var company = "davedodea.eu";
    // var key = "twp_YWbJhowpOcZZxp878vS8wcy4IAco_eu";
    var tasklist_id = "1235942";
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
            getTaskCount();
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

// *************************************************************************************************