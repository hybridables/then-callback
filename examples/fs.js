/*!
 * then-callback <https://github.com/hybridables/then-callback>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('fs')
var path = require('path')
var redolent = require('redolent')
var readFile = redolent(fs.readFile)

var thenCallback = require('../index')
var promise = readFile(path.join(__dirname, '..', 'package.json'), 'utf8')
promise = thenCallback(promise)

promise.then(function (err, res) {
  if (err) return console.error(err)
  console.log(JSON.parse(res).name) // => 'then-callback'
})
