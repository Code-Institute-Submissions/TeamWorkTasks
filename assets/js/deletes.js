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
                refreshAllTasks();
            }, 100);
        })
        .catch(function (error) {})
}