function deleteTask(task_id) {
    console.log("Task DELETED: " + task_id);
    

    axios({
            method: 'DELETE',
            url: 'https://' + SiteName + '.teamwork.com/tasks/' + task_id + '.json',
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