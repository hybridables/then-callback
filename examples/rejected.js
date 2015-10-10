/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var thenCallback = require('../index')
var NativePromise = require('native-or-another')()

// rejected promise
var promise = NativePromise.reject(new Error('foo bar'))
thenCallback(promise).then(console.log, console.error) // => Error: foo bar
