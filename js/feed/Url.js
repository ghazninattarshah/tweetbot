/**
 * Filename : Url.js
 * Author   : Ghazni Nattarshah
 * Date     : DEC 16, 2014 
 */
'use strict';
/**
 * Model object to store URL object.
 */
function UrlFeed() {

    this.__type = 'UrlFeed';

    var url, id;
};

/**
 * Creates the Url prototype from Feed to apply inheritance.
 */
UrlFeed.prototype = new Feed();

/*
 * Sets the Url
 */
UrlFeed.prototype.setUrl = function (url){
    this.url = url;
};

/*
 * Gets the Url
 */
UrlFeed.prototype.getUrl = function (){
    return this.url;
};
