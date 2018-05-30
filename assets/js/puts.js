// 
// Pass in task_id and use to make a PUT call to mark that task as completed
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

// *************************************************************************************************