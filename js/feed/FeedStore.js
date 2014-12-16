'use strict';

var getFeedStore = function () {

    var feedStore = getLocalStore(FEED_STORE);
    var feedArray = Feed.parseJson(feedStore);
    return feedStore === null ? new Array() : feedArray;
};

var addFeed = function () {

    var feedValue = $('feedText').value;
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
};

var createUIFeed = function (feed) {

    var feedContent = (feed.__type === 'UrlFeed') 
                ? "<a href=\"" + feed.getUrl() + "\">" + feed.getUrl() + "</a>"
                : feed.getText();

    var feedStr = "<li>" + feedContent + "<span onclick=\"removeFeed(" + feed.getId() + ");\"><i class=\"fa fa-trash fa-2x\"></i></span></li>";

    var feedList = $('feedList');
    feedList.innerHTML = feedStr + feedList.innerHTML;
};

var loadFeeds = function () {

    var feeds = getFeedStore();
    for (var i = 0; i < feeds.length; i++) {
        createUIFeed(feeds[i]);
    }
};

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