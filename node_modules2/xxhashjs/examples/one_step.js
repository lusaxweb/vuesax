var XXH = require('..')

var h = XXH( 'abcd', 0xABCD ).toString(16)

console.log( '0x' + h.toUpperCase() )
