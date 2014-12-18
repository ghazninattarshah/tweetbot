'use strict';

/**
 * Model object to store the Feed object.
 */
function Feed() {

    this.__type = 'Feed';

    var id, text;
};

Feed.prototype = {

    setId : function (id) {
        this.id = id;
    },

    getId : function() {
        return this.id;
    },

    setText : function (text) {
        this.text = text;
    },

    getText : function () {
        return this.text;
    }
};

/*
 * Helper method to parse the java object to Feed object
 */
Feed.parseJson = function (feedJson) {

    if (feedJson) {

        var rawFeedArray = JSON.parse(feedJson);

        var feedArray = new Array();
        for (var i = 0; i < rawFeedArray.length; i++) {

            var isFeedType = rawFeedArray[i].__type === 'Feed';
            var feed =  isFeedType ? new Feed() : new UrlFeed();

            feed.setId(rawFeedArray[i].id);
            if (isFeedType) {
                feed.setText(rawFeedArray[i].text);
            } else {
                feed.setUrl(rawFeedArray[i].url);
            }
            feedArray.push(feed);
        }
    }

    return feedArray;
};
