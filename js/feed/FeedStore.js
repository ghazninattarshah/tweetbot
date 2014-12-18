/**
 * Filename : FeedStore.js
 * Author   : Ghazni Nattarshah
 * Date     : DEC 16, 2014 
 */
'use strict';

/*
 * Helper method to get the feed store
 */
var getFeedStore = function () {

    var feedStore = getLocalStore(FEED_STORE);
    var feedArray = Feed.parseJson(feedStore);
    return feedStore === null ? new Array() : feedArray;
};

/*
 * Creates a feed
 */
var addFeed = function () {

    var feedValue = $('feedText').value;
    
    if (feedValue) {
        
        var isUrl = feedValue.indexOf('://') != -1;

        var feed;
        if (isUrl) {

            feed = new UrlFeed();
            feed.setUrl(feedValue);
        } else {

            feed = new Feed();
            feed.setText(feedValue);
        }

        feed.setId(+new Date());

        var feedArray = getFeedStore();
        feedArray.push(feed);

        saveStore(FEED_STORE, feedArray);

        createUIFeed(feed);
    }
};

/* 
 * UI Helper method to create a dynamic <li> to add new feed.
 */
var createUIFeed = function (feed) {

    var isUrlType = (feed.__type === 'UrlFeed');
    var feedContent =  isUrlType
                ? "<a href=\"" + feed.getUrl() + "\">" + feed.getUrl() + "</a>"
                : feed.getText();
    var classType = isUrlType ? "urlFeed" : "textFeed";

    var feedStr = "<li class=\"" + classType + "\"><span class=\"time\">" + new Date(feed.getId()).toLocaleString() + "</span>" + feedContent + "&nbsp;&nbsp;<span onclick=\"removeFeed(" + feed.getId() + ");\"><i class=\"fa fa-trash fa-2x\"></i></span></li>";

    var feedList = $('feedList');
    feedList.innerHTML = feedStr + feedList.innerHTML;
};

/*
 * Read and load the feeds to UI.
 */
var loadFeeds = function () {

    $('feedList').innerHTML = "";
    var feeds = getFeedStore();
    for (var i = 0; i < feeds.length; i++) {
        createUIFeed(feeds[i]);
    }
    $('feedText').focus();
};

/*
 * Removes a feed
 */
var removeFeed = function (id) {

    var feeds = getFeedStore();
    for (var i = 0; i < feeds.length; i++) {

        if (id === feeds[i].id) {
            feeds.splice(i, 1);
        }
    }
    saveStore(FEED_STORE, feeds);
    
    var feedList = $('feedList')
    var childNodes = feedList.childNodes;
    for (var i = childNodes.length; --i >= 0;) {

        if (childNodes[i].innerHTML && childNodes[i].innerHTML.indexOf(id) != -1) {

            feedList.removeChild(childNodes[i]);
            break;
        }
    }
};

/*
 * keypress event to handle enterkey on post a feed
 */
var onFeedPostKeyPressed = function (event) {

    if (isEnterKeyPressed(event)) {
        addFeed();
    } else {
        return false;
    }
}
