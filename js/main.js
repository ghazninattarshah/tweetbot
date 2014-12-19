/**
 * Filename : main.js
 * Author   : Ghazni Nattarshah
 * Date     : DEC 17, 2014 
 */
'use strict';

/*
 * Toggle showing the profile view or feed view based user request. 
 */
var showView = function (source, view) {

    hide('profileView');
    hide('feedView');

    show(view === 'profileView'? 'profileView': 'feedView');
};

/**
 * Loads the profile image to preview.
 */
var loadImage = function (event) {

    var reader  = new FileReader();
    reader.onload = function () {
        $('previewImg').src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
};

/*
 * Performs the logout, it would redirect to index page
 */
var logout = function () {
    window.location = "index.html";
}
