/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var naryFunction = require( '@stdlib/utils-nary-function' );
var log = require( '@stdlib/console-log' );
var forEach = require( '@stdlib/ndarray-for-each' );

var buffer = discreteUniform( 10, -100, 100, {
	'dtype': 'generic'
});
var shape = [ 5, 2 ];
var strides = [ 2, 1 ];
var offset = 0;
var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );

log( ndarray2array( x ) );
forEach( x, naryFunction( log, 2 ) );
