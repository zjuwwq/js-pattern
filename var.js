// mocha single_var.js -R spec
var should = require('should');

describe('variable declare', function(){
	it('hoisting', function(){
		var a = 1;
		function fa(){
			(typeof a).should.equal('undefined');
			var a = 10;
			// function body...
		}
	});
	it('get a variable undeclared will error', function(){
		// b; error
		(typeof b).should.equal('undefined');
	});
	it('used without being declared will global', function(){
		function fa(){
			var x = y = 100;
			a = 10;
			// function body...
		}
		fa();
		a.should.equal(10);
		y.should.equal(100);
	});
});