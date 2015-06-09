/*
    requires: phantomjs, async
    usage: phantomjs capture.js
*/
var async = require('async');

var urlRoot = 'http://localhost:8088',
    sizes = [
        [320, 480],
        [320, 568],
        [768, 1024],
        [1024, 768],
        [1280, 800],
        [1440, 900]
    ];

function capture(sizes, callback) {
    var page = require('webpage').create();
    page.viewportSize = {
        width: sizes[0],
        height: sizes[1]
    };
    page.zoomFactor = 1;

    page.open(urlRoot, function(status) {
        var filename = sizes[0] + 'x' + sizes[1] + '.png';
        page.render('./screenshots/' + filename);
        page.close();
        callback.apply();
    });
}

console.log('Capturing...');

async.eachSeries(sizes, capture, function(e) {
    if (e) {
        console.log(e);
    }

    console.log('Capture complete!');

    phantom.exit();
});
