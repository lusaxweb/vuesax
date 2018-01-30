var fs = require('fs')
var path = require('path')
var Benchmark = require('benchmark')
var XXH = require('..')

var inputFileName = path.normalize( process.argv[2] || __dirname + '/lorem_1mb.txt' )
console.log('Input file:', inputFileName)

var input = fs.readFileSync(inputFileName)
var seed = 0xABCD

var suite = new Benchmark.Suite
suite
	.add('XXH one step', function() {
		var h = XXH( input, seed ).toString(16)
	})
	.add('XXH', function() {
		var h = XXH(seed).update(input).digest().toString(16)
	})
	// add listeners
	.on('cycle', function(event) {
	  console.log( String(event.target) )
	})
	.run()