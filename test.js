import assert from 'node:assert/strict'
import test from 'node:test'
import {isHidden} from './index.js'

test('isHidden(basename)', function () {
  assert.equal(isHidden('.git'), true, 'should work (1)')
  assert.equal(isHidden('git'), false, 'should work (2)')
  assert.equal(isHidden('.DS_Store'), true, 'should work (3)')
  assert.equal(isHidden('DS.Store'), false, 'should work (4)')

  assert.throws(
    function () {
      // @ts-ignore runtime
      isHidden(true)
    },
    /^TypeError: Expected string$/,
    'should throw when not given a string'
  )
})
