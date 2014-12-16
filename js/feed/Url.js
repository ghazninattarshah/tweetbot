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

UrlFeed.prototype.setUrl = function (url){
    this.url = url;
};

UrlFeed.prototype.getUrl = function (){
    return this.url;
};
