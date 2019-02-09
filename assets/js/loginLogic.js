function logOut() {
    localStorage.removeItem("selectedTaskListID");
    localStorage.removeItem("authToken");

    setTimeout(() => {
        window.location.href = "/index.html";
    }, 1000);

}
// *************************************************************************************************

// Check whether user is logged in and route accordingly
function checkIfLoggedIn() {
    if (localStorage.authToken) {
        window.location.href = "/home.html";
    }
}

function checkIfLoggedOut() {
    if (!localStorage.authToken) {
        window.location.href = "/index.html";
    }
}
// *************************************************************************************************
