// Set local storage key values and route accordingly
function loginForm() {
    var inputSiteName = document.getElementById("lg_username");
    localStorage.setItem("siteName", inputSiteName.value);

    var inputApiKey = document.getElementById("lg_password");
    localStorage.setItem("apiKey", inputApiKey.value);

    console.log("Auth Success!");
    console.log("Site name is: " + localStorage.getItem("siteName"));
    console.log("API Key is : " + localStorage.getItem("apiKey"));
    window.location.href = "/home.html";
}

function logOut() {
    localStorage.removeItem("apiKey");
    localStorage.removeItem("siteName");

    setTimeout(() => {
        window.location.href = "/index.html";
    }, 100);
    console.log("Logged out!");

}
// *************************************************************************************************

// Check whether user is logged in and route accordingly
function checkIfLoggedIn() {
    if (localStorage.length > 1) {
        window.location.href = "/home.html";
    }
}

function checkIfLoggedOut() {
    if (localStorage.length == 0) {
        window.location.href = "/index.html";
    }
}
// *************************************************************************************************

// Reset credentials from local storage
function clearLocalStorage() {
    localStorage.removeItem("siteName");
}
// *************************************************************************************************


    