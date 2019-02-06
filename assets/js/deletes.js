function deleteTask(task_id) {


    axios({
            method: 'DELETE',
            url: 'https://hi-21ca23a1-eval-prod.apigee.net/singletask/' + task_id + '.json',
            headers: {
                'Authorization': "Bearer " + APIKey
            }
        })
        .then(function (response) {
            setTimeout(() => {
                getAllTasks();
                getAllTasksCompleted();
            }, 100);
            console.log(response.statusText);
            console.log("Task DELETED: " + task_id);
        })
        .catch(function (error) {
            console.log(error.statusText);
        })
}