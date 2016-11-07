'use strict';

var hidden = require('./');
var assert = require('assert');

var equal = assert.strictEqual;
var throws = assert.throws;

describe('hidden(filename)', function () {
  it('should work', function () {
    equal(hidden('.git'), true);
    equal(hidden('git'), false);

    equal(hidden('.DS_Store'), true);
    equal(hidden('DS.Store'), false);
  });

  it('should throw when not given a string', function () {
    throws(function () {
      hidden(true);
    }, /expected string/i);
  });
});
