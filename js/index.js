'use strict';

var login = function () {
    if ($('userName').value === 'admin' && $('password').value === 'admin') {
        window.location = "/main.html";
    } else {
        show('errMsg');
    }
}