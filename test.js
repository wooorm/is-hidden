import test from 'tape'
import {isHidden} from './index.js'

test('isHidden(filename)', function (t) {
  t.equal(isHidden('.git'), true, 'should work (1)')
  t.equal(isHidden('git'), false, 'should work (2)')
  t.equal(isHidden('.DS_Store'), true, 'should work (3)')
  t.equal(isHidden('DS.Store'), false, 'should work (4)')

  t.throws(
    function () {
      isHidden(true)
    },
    /^TypeError: Expected string$/,
    'should throw when not given a string'
  )

  t.end()
})
