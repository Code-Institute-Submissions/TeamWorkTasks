//
// ***************************** Constants *********************************************************
//

const SiteName = localStorage.getItem("siteName");
const APIKey = localStorage.getItem("authToken");
const PROJECTID = localStorage.getItem("currentProjectID");
const SELECTEDTASKLISTID = localStorage.getItem("selectedTaskListID");
// const POJECTNAME = localStorage.getItem("currentProjectName");

// *************************************************************************************************

function loadScripts() {
    checkIfLoggedOut();
    showCountTasks();
    getAllTasks();
    getAllTasksTomorrow();
    getAllTasksToday();
    getAllTasksOverdue();
    getTaskCount();
    getTaskCountToday();
    getTaskCountTomorrow();
    getTaskCountOverdue();
    getAllTasksCompleted();
    getTaskListDetails();
    getAccount();
    getSelectListID();
    addEventListeners();
}