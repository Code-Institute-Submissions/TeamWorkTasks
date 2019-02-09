// Create todays's date object
function dateToday() {
    var today = new Date();
    var today = today.toDateString();
    var resultElement = document.getElementById('todaysDate');
    $(resultElement).append("<br>" + today);
}

// *************************************************************************************************

// Datepicker
$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
})

// *************************************************************************************************

// Template API call response/errors
function generateSuccessHTMLOutput(response) {
    return '<h4>Result:</h4>' +
        '<h5>Status:</h5>' +
        '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function generateErrorHTMLOutput(error) {
    return '<h4>Result:</h4>' +
        '<h5>Message:</h5>' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status:</h5>' +
        '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

$(function () {
    var token = localStorage.getItem("authToken").length;
    if (token > 0) {
        logOutButton.innerHTML = "<i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Log out";
        logOutButton2.innerHTML = "<i class=\"fa fa-sign-out fa-lg\" aria-hidden=\"true\"></i> Log out";
    } else {
        logOutButton.innerHTML = "Log In";
        logOutButton2.innerHTML = "Log In";
    }
});

// *************************************************************************************************