'use strict'

var test = require('tape')
var hidden = require('.')

test('hidden(filename)', function(t) {
  t.equal(hidden('.git'), true, 'should work (1)')
  t.equal(hidden('git'), false, 'should work (2)')
  t.equal(hidden('.DS_Store'), true, 'should work (3)')
  t.equal(hidden('DS.Store'), false, 'should work (4)')

  t.throws(
    function() {
      hidden(true)
    },
    /^Error: Expected string$/,
    'should throw when not given a string'
  )

  t.end()
})
