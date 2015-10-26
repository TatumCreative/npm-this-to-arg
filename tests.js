var Test = require('tape')
var ThisToArg = require('./this-to-arg')

Test("this-to-arg", function(t) {
	
	t.test("Binds this to the first argument", function(t) {
		
		t.plan(2)
		
		var a = {}
		var b = {}
		var c = {}

		var fn = function(a,b,c) { return [this,a,b,c]}
		var thisified = ThisToArg( fn ).bind(a)
		
		t.deepEquals( thisified(b,c), [a, a, b, c])
		t.deepEquals( thisified(), [a, a, undefined, undefined])
	})
})