/*!
 * kind-of-types <https://github.com/tunnckoCore/kind-of-types>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var types = require('./index')

test('kind-of-types:', function () {
  test.ok(types.length > 20)
})
