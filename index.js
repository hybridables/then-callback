/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isPromise = require('is-promise')

/**
 * > Basically, you just pass a promise and
 * it returns promise, but `.then` from the returned
 * promise can accept a callback function, instead of
 * two arguments as usual - one for result, one for error.
 * Notice that it also works as normal `.then` if you pass two arguments.
 *
 * **Example**
 *
 * ```js
 * const thenCallback = require('then-callback')
 * const promise = Promise.resolve(123)
 *
 * thenCallback(promise).then((err, res) => {
 *   console.log('err:', err) // => null
 *   console.log('res:', res) // => 123
 * })
 *
 * // but also works as normal `.then`
 * thenCallback(promise).then((res) => {
 *   console.log('res:', res) // => 123
 * }, (err) => {
 *   console.log('err:', err)
 * })
 * ```
 *
 * @name   thenCallback
 * @param  {Promise} `<promise>`
 * @return {Promise}
 * @api public
 */
module.exports = function thenCallback (promise) {
  if (!isPromise(promise)) {
    throw new TypeError('then-callback: expect `promise` to be promise')
  }
  var thenCopy = promise.then
  promise.then = function then_ (callback, reject) {
    callback = typeof callback === 'function' ? callback : null
    if (typeof reject === 'function') {
      return thenCopy.apply(promise, [callback, reject])
    }
    return thenCopy.call(promise, function (res) {
      callback && callback.call(this, null, res)
      return res
    }, callback ? function (err) {
      callback(err)
      throw err
    } : false)
  }
  return promise
}
