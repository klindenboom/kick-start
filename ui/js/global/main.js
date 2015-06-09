/**
 * The global main module.
 * @module global/global
 */
define(['jquery', 'common/partial-a', 'common/partial-b'], function($, partialA, partialB) {

    'use strict';

    console.log('hello global');

    // var $ = ic.$;

    $('button').click(function() {
        console.log("This button was clicked");
    });

    // what I'm returning here is "global" when you require this module
    //return {};
});
