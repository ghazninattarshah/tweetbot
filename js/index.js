/**
 * Filename : index.js
 * Author   : Ghazni Nattarshah
 * Date     : DEC 17, 2014 
 */
'use strict';


/*
 * Performs login operation (redirects to main page) after validating the user.
 */
var login = function () {
    
    var userName = $('userName');
    var password = $('password');

    if (userName.value === 'admin' && password.value === 'admin') {
        window.location = "main.html";
    } else {
        show('errMsg');
    }
}

/*
 * Helper method to check whether ENTER key is pressed and procced to login.
 */
var onKeyPressed = function (event) {

    if (isEnterKeyPressed(event)) {
        login();
    } else {
        return false;
    }
}
