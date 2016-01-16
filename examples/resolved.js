/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var thenCallback = require('../index')
var NativePromise = require('native-or-another')()

// resolved promise
var promise = NativePromise.resolve(123)
thenCallback(promise).then(console.log, console.error) // => '123'
