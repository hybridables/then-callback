/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
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
    if (typeof reject === 'function') {
      return thenCopy.apply(promise, [callback, reject])
    }
    return thenCopy.call(promise, function (res) {
      callback.apply(this, [null].concat(res))
      return res
    }, callback)
  }
  return promise
}
