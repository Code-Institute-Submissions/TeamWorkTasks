
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
                    $('#wrongCredsUser, #wrongCredsUserPass').css('visibility', 'hidden');
                    $('#lg_username, #lg_password').css('border', '1px solid green');

                    loginForm();
                }
            })
            .catch(function (error) {
                $('#checkCredsUser, #checkCredsUserPass').css('visibility', 'hidden');
                $('#wrongCredsUser, #wrongCredsUserPass').css('visibility', 'visible');
                $('#lg_username, #lg_password').css('border', '1px solid red');
                // alert("Log In failed - please check your credentials!");
                //$('#login-form')[0].reset();
                $('#lg_username, #lg_password').click(function () {
                    $(this).css('border', '1px solid #ccc');
                });
            });
    } else if (document.getElementById('lg_password').value.length == 0) {
        alert("Please enter credentials!")
    }
}


// Set local storage key values and route accordingly
function loginForm() {
    var inputSiteName = document.getElementById("lg_username");
    localStorage.setItem("siteName", inputSiteName.value);

    var inputApiKey = document.getElementById("lg_password");
    localStorage.setItem("apiKey", inputApiKey.value);

    setTimeout(function () {
        window.location.href = "/projects.html";
    }, 500);
}


function getProjects() {
    var resultElement = document.getElementById('getProjectsResult');
    resultElement.innerHTML = '';

    axios({
            method: 'GET',
            auth: {
                username: localStorage.getItem("apiKey"),
                password: ':xxx'
            },
        url: 'https://' + SiteName + '.teamwork.com/projects.json',
        })
        .then(function (response) {
            $(response.data['projects']).each(function () {
                var projectName = this.name;
                var projectID = this.id;

                $(resultElement).append(
                    '<div class="col-lg-12">' +
                    '<div class="panel panel-default">' +
                    '<div class="panel-heading">' + projectName +
                    '<div class="panel-body panel-body-no-border">' +  projectID +
                    '<hr>' +                     
                    '<i class="fa fa-arrow-right fa-fw fa-lg edit-menu-icons" aria-hidden="true" onclick="setProjectID(' + projectID + ')" id="completeBtn" align="center"></i>' + '</a>' +
                    '</div>' +
                    '</div>' +                      
                    '</div>' +      
                    '</div>' +
                    '</div>'
                )
                console.log("Project name: " + projectName)
            })
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
}

function setProjectID(projectID) {
    console.log("Project ID:" + projectID);
    // console.log("Project ID:" + projectName);
    
    localStorage.setItem("currentProjectID", projectID);
    // localStorage.setItem("currentProjectName", projectName);

    setTimeout(() => {
        window.location.href = "/home.html";
    }, 500);    
    
}

function logOut() {
    localStorage.removeItem("apiKey");
    localStorage.removeItem("siteName");
    localStorage.removeItem("currentProjectID");
    // localStorage.removeItem("currentProjectName");
    
    

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