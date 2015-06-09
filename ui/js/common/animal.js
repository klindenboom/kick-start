/* global define */

/**
 * A module representing an Animal.
 * @module common/animal
 * @tutorial animal
 * @author  Sean Shedlarski<sean.shedlarski@icrossing.com>
 */
define(function() {

    'use strict';

    /**
     * Creates an Animal object.
     * @constructor
     * @alias Animal
     * @example
     * var Animal = require('common/animal');
     * var squirrelMonkey = new Animal(4);
     * @param {Int} [numLegs] Optional number of legs.
     * @returns {Animal} An object instance.
     * @throws {InvalidArgumentException} Argument numLegs must be non-zero.
     */
    var Animal = function(numLegs) {
        /**
         * The number of legs the animal has.
         * @type {Int}
         * @private
         */
        this._legCount = numLegs;
    };

    /**
     * Gets the number of legs the animal has.
     * @example
     * // returns 4
     * squirrelMonkey.getLegCount();
     * @return {int} The number of legs.
     */
    Animal.prototype.getLegCount = function() {
        return this._legCount;
    };

    /**
     * Instructs the animal to walk.
     * @example
     * // outputs: "the animal walked 4 steps forward"
     * squirrelMonkey.walk(4, 'forward', function(steps, direction) {
     *     console.log('the animal walked ' + steps + ' ' + direction);
     * });
     * @param  {int} steps The number of steps to take.
     * @param {Animal~walkCallback} callback The callback that handles when
     *                                       walk is finished.
     * @param {string} [direction="forward"] The direction to walk.
     * @fires Animal#beforeWalk
     * @fires Animal#afterWalk
     * @return {void}
     */
    Animal.prototype.walk = function(steps, callback, direction) {
        // set default value
        direction || (direction = 'forward');

        /**
         * Before walk event.
         * @event Animal#beforeWalk
         * @type {object}
         * @property {int} steps - The number of steps set to walk.
         * @property {string} direction The direction of the walk.
         */

        // walking...

        /**
         * After walk event.
         * @event Animal#afterWalk
         * @type {object}
         * @property {int} steps - The number of steps set to walk.
         * @property {string} direction The direction of the walk.
         */

        callback && callback(steps, direction);
    };

    /**
     * This callback is displayed as part of the Animal class.
     * @callback Animal~walkCallback
     * @param {number} steps
     * @param {string} direction
     */

    return Animal;

});
