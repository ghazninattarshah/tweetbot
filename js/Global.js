'use strict';

/**
 * CONSTANTS
 */ 
var PROFILE_STORE = 'profile.store';
var FEED_STORE    = 'feed.store';


/**
 * Gets the element by id.
 */
var $ = function (id) {
    return document.getElementById(id);
};

var $$ = function (name) {
    return document.getElementsByName(name);
}

/**
 * Helper method to checks the safety and returns empty string 
 * if the input string is undefined or null.
 */
var safeValue = function (input) {
    return (input === undefined || input === null) ? "" : input;
};

/**
 * Shows the element for the id
 */
var show = function (elementId) {

    var elem = $(elementId);
    elem.style.display = 'block';
};

/**
 * Hides the element for the id
 */
var hide = function (elementId) {
    $(elementId).style.display = 'none';
};

/*
 * Gets the item from local storage based on the store key.
 */
var getLocalStore = function (storeKey) {
    return localStorage.getItem(storeKey);
};

/*
 * Saves the given item to local storage based on the store key.
 */
var saveStore = function (storeKey, storeValue) {
    localStorage.setItem(storeKey, JSON.stringify(storeValue));
};

var toInstance = function(json) {

    return JSON.parse(text, function (key, value) {

        var type;
        if (value && typeof value === 'object') {

            type = value.type;
            if (typeof type === 'string' && typeof window[type] === 'function') {
                return new (window[type])(value);
            }
        }
        return value;
    });
};