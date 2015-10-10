/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
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
  test.throws(fixture, /expect a `promise` be promise/)
  done()
})

test('should accept callback-style function', function (done) {
  var promise = NativePromise.resolve(123)
  promise = thenCallback(promise)
  promise.then(function (err, res) {
    test.ifError(err)
    test.strictEqual(res, 123)
    done()
  })
})

test('should works as normal `.then` if second argument is given', function (done) {
  var promise = NativePromise.resolve(123)
  promise = thenCallback(promise)
  promise.then(function (res) {
    test.strictEqual(res, 123)
    done()
  }, done)
})

test('should handle errors when callback-style function given', function (done) {
  var promise = NativePromise.reject(new Error('foobar'))
  promise = thenCallback(promise)
  promise.then(function (err, res) {
    test.ifError(!err)
    test.strictEqual(err.message, 'foobar')
    test.strictEqual(res, undefined)
    done()
  })
})

test('should catch errors as normal', function (done) {
  var promise = NativePromise.reject(new Error('foobaz'))
  promise = thenCallback(promise)
  promise.catch(function (err) {
    test.ifError(!err)
    test.strictEqual(err.message, 'foobaz')
    done()
  })
})
