/* global define */

/**
 * A module representing a Dog.
 * @module common/dog
 * @requires  common/util
 * @requires  common/animal
 */
define(['common/util', 'common/animal'], function(util, Animal) {

    'use strict';

    /**
     * @constructor
     * @augments {Animal}
     * @alias Dog
     */
    var Dog = function() {
        var self = this;

        Animal.call(self, 4);
    };

    util.inherits(Dog, Animal);

    /**
     * Instruct the dog to bark.
     * @return {void}
     */
    Dog.prototype.bark = function() {

    };

    return Dog;

});
