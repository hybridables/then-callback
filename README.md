# [then-callback][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Wrap a promise to allow passing callback to `.then` of given promise, also works as normal `.then`

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i then-callback --save
```


## Usage
> For more use-cases see the [tests](./test.js)

### [thenCallback](./index.js#L30)
> Basically, you just pass a promise and it returns promise, but `.then` from the returned promise can accept a callback function, instead of two arguments as usual - one for result, one for error.  
Notice that it also works as normal `.then` if you pass two arguments.

- `<promise>` **{Promise}**
- `return` **{Promise}**

**Example**

```js
const thenCallback = require('then-callback')
```

You just need to wrap a promise, then you can use `.then` as usual, or to pass callback-style function to it as first argument.

**Example**

```js
const fs = require('fs')
const redolent = require('redolent')
const readFile = redolent(fs.readFile)

const thenCallback = require('then-callback')
var promise = readFile('package.json', 'utf8')
promise = thenCallback(promise)

promise.then((err, res) => {
  if (err) return console.error(err)
  console.log(JSON.parse(res).name) //=> 'then-callback'
})
```

Otherwise, if you pass two arguments and second is function, it will work as normal `.then`.

**Example**

```js
const thenCallback = require('then-callback')
const NativePromise = require('native-or-another')()

// rejected promise
var promise = NativePromise.reject(new Error('foo bar'))
thenCallback(promise).then(console.log, console.error) //=> Error: foo bar

// resolved promise
var promise = NativePromise.resolve(123)
thenCallback(promise).then(console.log, console.error) //=> '123'
```


## Related
- [always-promise](https://github.com/hybridables/always-promise): Promisify, basically, everything. Generator function, callback-style or synchronous function; sync function that returns child process, stream or observable; directly passed promise, stream or child process.
- [letta](https://github.com/hybridables/letta): Let's move to promises! Drop-in replacement for `co@4`, but on steroids. Accepts sync, async and generator functions.
- [native-or-another](https://github.com/tunnckoCore/native-or-another): Always will expose native `Promise` if available, otherwise `Bluebird` but only if you don't give another promise module like `q` or `promise` or what you want.
- [native-promise](https://github.com/tunnckoCore/native-promise): Get native `Promise` or falsey value if not available.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/hybridables/then-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/then-callback
[npmjs-img]: https://img.shields.io/npm/v/then-callback.svg?label=then-callback

[license-url]: https://github.com/hybridables/then-callback/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/hybridables/then-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/hybridables/then-callback.svg

[travis-url]: https://travis-ci.org/hybridables/then-callback
[travis-img]: https://img.shields.io/travis/hybridables/then-callback.svg

[coveralls-url]: https://coveralls.io/r/hybridables/then-callback
[coveralls-img]: https://img.shields.io/coveralls/hybridables/then-callback.svg

[david-url]: https://david-dm.org/hybridables/then-callback
[david-img]: https://img.shields.io/david/hybridables/then-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg