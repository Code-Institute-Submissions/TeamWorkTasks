// Set local storage key values and route accordingly
function loginForm() {
    var inputSiteName = document.getElementById("lg_username");
    localStorage.setItem("siteName", inputSiteName.value);

    var inputApiKey = document.getElementById("lg_password");
    localStorage.setItem("apiKey", inputApiKey.value);

    setTimeout(function () {
        window.location.href = "/home.html";
    }, 1000);
}

function getAccountDetails() {
    if (document.getElementById('lg_password').value.length > 0) {
        axios({
                method: 'GET',
                auth: {
                    username: document.getElementById("lg_password").value,
                    password: ':xxx'
                },
                url: 'https://' + document.getElementById("lg_username").value + '.teamwork.com' + '/account.json',
            })
            .then(function (response) {
                if (response.statusText == "OK") {
                    $('#checkCredsUser, #checkCredsUserPass').css('visibility', 'visible');
                    $('#lg_username, #lg_password').css('border', '1px solid green');

                    loginForm();
                }
            })
            .catch(function (error) {
                $('#lg_username, #lg_password').css('border', '1px solid red');
                alert("Log In failed - please check your credentials!");
                $('#login-form')[0].reset();
                $('#lg_username, #lg_password').click(function () {
                    $(this).css('border', '1px solid #ccc');
                });
            });
    } else if (document.getElementById('lg_password').value.length == 0) {
        alert("Please enter credentials!")
    }
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