/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module is-hidden
 * @fileoverview Test suite for `is-hidden`.
 */

'use strict';

/* eslint-env node, mocha */

/*
 * Dependencies.
 */

var isHidden = require('./');
var assert = require('assert');

/*
 * Methods.
 */

var equal = assert.strictEqual;
var throws = assert.throws;

/*
 * Tests.
 */

describe('isHidden(filePath)', function () {
    it('should work', function () {
        equal(isHidden('.git'), true);
        equal(isHidden('git'), false);

        equal(isHidden('.DS_Store'), true);
        equal(isHidden('DS.Store'), false);
    });

    it('should throw when not given a string', function () {
        throws(function () {
            isHidden(true);
        }, /expected string/i);
    });
});
