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

var logout = function () {
    window.location = "/index.html";
}