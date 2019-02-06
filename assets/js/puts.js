var ThisTaskID = {};

// 
// Pass in task_id and use to make a PUT call to mark that task as completed
//

function completeTask(task_id) {

    console.log(task_id);

    axios({
            method: 'PUT',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/singletask/' + task_id + '/complete.json',
            headers: {
                'Authorization': "Bearer " + APIKey
            },
            // data: {
            //     "todo_items":{
            //         "completed": false
            //     }
            // }
        })
        .then(
            function (response) {
                setTimeout(() => {
                    getAllTasks();
                    getAllTasksToday();
                    getAllTasksTomorrow();
                    getAllTasksOverdue();
                    getAllTasksCompleted();
                }, 100);
                console.log(response.statusText);
            })
        .catch(function (error) {
            console.log(error.statusText);
        })

}

// *************************************************************************************************

function editTask(e) {
    var resultElement = document.getElementById('editTaskResult');
    resultElement.innerHTML = '';

    console.log("Task to be edited, ID: " + ThisTaskID.task_id);

    var taskDescription = document.getElementById('taskDescriptionEdit').value;
    var content = document.getElementById("taskTitleEdit").value;
    var date_picker = document.getElementById('datePickerEdit').value;



    console.log("Set vars, task id is: " + ThisTaskID.task_id);
    axios({
            method: 'PUT',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/updatetask/' + ThisTaskID.task_id + '.json',
            headers: {
                'Authorization': "Bearer " + APIKey
            },
            // data: {
            //     "todo-item": {
            //         "content": content,
            //         "due-date": date_picker,
            //         "description": taskDescription
            //     }
            // },
        })
        .then(function (response) {
            //resultElement.innerHTML = generateSuccessHTMLOutput(response);
            $(resultElement).append(
                '<div class = "alert alert-success task-success-edit" role = "alert" style = "display: none" > Super! The task was edited successfully!</div>');
            //<div class="alert alert-success" role="alert">...</div>
            $('.task-success-edit').show();
            getAllTasks();
            getAllTasksToday();
            getAllTasksTomorrow();
            getAllTasksOverdue();
            getAllTasksCompleted();
            getTaskCount();
            setTimeout(() => {
                // $('#todoInputFormEdit')[0].reset();
                setTimeout(() => {
                    $('.task-success').hide();
                    $(".taskEdit").hide();
                    $(".addTaskRight").show();
                    $(".allTasks").show();
                }, 2000);
            }, 50);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
    e.preventDefault();

}


// *************************************************************************************************