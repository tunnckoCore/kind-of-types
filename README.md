# [kind-of-types][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i kind-of-types --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var types = require('kind-of-types')

console.log(types)
//=> [
//  "null",
//  "set",
//  "map",
//  "date",
//  "array",
//  "string",
//  "object",
//  ...
// ]
```


## Related
- [assert-kindof](https://github.com/tunnckoCore/assert-kindof): Check native type of the given value and throw TypeError if not okey. Expressive, elegant, behavior-driven API, good descriptive default error messages, simple and clean syntax.
- [assertit](https://github.com/tunnckoCore/assertit): Thin sugar layer on top of `testit` framework, `is-kindof` and `assert`.
- [is-kindof](https://github.com/tunnckoCore/is-kindof): Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module.
- [is-typeof-error](https://github.com/tunnckoCore/is-typeof-error): Check that given value is any type of error and instanceof Error
- [is-singular](https://github.com/tunnckoCore/is-singular): Return true if given word is in singular form like `apple`, `car`, `test` and false otherwise, never throws.
- [kind-of-extra](https://github.com/tunnckoCore/kind-of-extra): Extends `kind-of` type check utility with support for promises, generators, streams and errors. Like `kindof(Promise.resolve(1)) === 'promise'` and etc.
- [kind-error](https://github.com/tunnckoCore/kind-error): Correct inheriting from `Error`. Supports constructing from an object of properties - focused on assertion.
- [plugin-error](https://github.com/jonschlinkert/plugin-error): Error handling for vinyl plugins. Just an abstraction of what's in gulp-util with minor changes.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/kind-of-types
[npmjs-img]: https://img.shields.io/npm/v/kind-of-types.svg?label=kind-of-types

[license-url]: https://github.com/tunnckoCore/kind-of-types/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/kind-of-types
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/kind-of-types.svg

[travis-url]: https://travis-ci.org/tunnckoCore/kind-of-types
[travis-img]: https://img.shields.io/travis/tunnckoCore/kind-of-types.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/kind-of-types
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/kind-of-types.svg

[david-url]: https://david-dm.org/tunnckoCore/kind-of-types
[david-img]: https://img.shields.io/david/tunnckoCore/kind-of-types.svg

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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg