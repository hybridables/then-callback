/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var thenCallback = require('./index')
var NativePromise = require('native-or-another')()

test('should throw TypeError if `promise` not a promise', function (done) {
  function fixture () {
    thenCallback(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `promise` to be promise/)
  done()
})

test('should accept callback-style function', function (done) {
  var promise = NativePromise.resolve(123)
  thenCallback(promise).then(function (err, res) {
    test.ifError(err)
    test.strictEqual(err, null)
    test.strictEqual(res, 123)
    done()
  })
})

test('should works as normal `.then` if second argument is not given', function (done) {
  var promise = NativePromise.resolve(123)
  thenCallback(promise).then(function (res) {
    test.strictEqual(res, 123)
    done()
  }, done)
})

test('should works as normal `.then` and handle errors', function (done) {
  var promise = NativePromise.reject(new Error('foobar'))
  thenCallback(promise).then(null, function (err) {
    test.ifError(!err)
    test.strictEqual(err.message, 'foobar')
    done()
  })
})

test('should handle errors when callback-style function given', function (done) {
  var promise = NativePromise.reject(new Error('foobar'))
  thenCallback(promise).then(function (err, res) {
    test.ifError(!err)
    test.strictEqual(err.message, 'foobar')
    test.strictEqual(res, undefined)
    done()
  })
})

test('should catch errors as normal', function (done) {
  var promise = NativePromise.reject(new Error('foobaz'))
  thenCallback(promise).catch(function (err) {
    test.ifError(!err)
    test.strictEqual(err.message, 'foobaz')
    done()
  })
})
