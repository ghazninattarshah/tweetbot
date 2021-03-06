/**
 * Filename : Global.js
 * Author   : Ghazni Nattarshah
 * Date     : DEC 16, 2014 
 */
'use strict';

/**
 * CONSTANTS
 */ 
var PROFILE_STORE = 'profile.store';
var FEED_STORE    = 'feed.store';


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

/*
 * Helper method to find whether ENTER key is pressed or not.
 * return true if ENTER key is pressed otherwise false
 */
var isEnterKeyPressed = function (event) {
  return (event.keyCode == 13);
};
