'use strict';

var login = function () {
    
    var userName = $('userName');
    var password = $('password');

    if (userName.value === 'admin' && password.value === 'admin') {

//        username.value = '';
//        password.value = '';
        window.location = "/main.html";
    } else {
        show('errMsg');
    }
}

var onKeyPressed = function (event) {

    if (isEnterKeyPressed(event)) {
        login();
    } else {
        return false;
    }
}