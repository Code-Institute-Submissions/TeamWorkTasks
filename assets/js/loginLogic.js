/* 
Remove all auth details and redirect the user to homepage
*/
function logOut() {
    localStorage.removeItem("selectedTaskListID");
    localStorage.removeItem("currentProjectID");
    localStorage.removeItem("authToken");
    localStorage.removeItem("taskCount");
    localStorage.removeItem("taskListCount");

    setTimeout(() => {
        window.location.href = "/index.html";
    }, 1000);

}

// Check whether user is logged in and route accordingly
function checkIfLoggedIn() {
    if (localStorage.authToken) {
        window.location.href = "/projects.html";
    }
}

// Check whether user is logged out and route accordingly
function checkIfLoggedOut() {
    if (!localStorage.authToken) {
        window.location.href = "/index.html";
    }
}
// *************************************************************************************************
