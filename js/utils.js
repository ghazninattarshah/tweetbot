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