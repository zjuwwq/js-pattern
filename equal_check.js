// mocha equal_check.js -R spec
// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
var should = require('should');

describe('equal check', function(){
	describe('==', function(){
		it('== convert to the same type before comparision', function(){
			var a = 1;
			(a == 1).should.equal(true);
			(1 == '1').should.equal(true);
			(null == undefined).should.equal(true);
			(1 == true).should.equal(true);
			([] == false).should.equal(true);
		});
	});
	describe('===', function(){
		it('=== must be the same type', function(){
			(1 === '1').should.equal(false);
			(null === undefined).should.equal(false);
			(1 === 1).should.equal(true);
		});
	});
	describe('object equal', function(){
		it('two distinct object never equal', function(){
			([] === []).should.equal(false);
			([] == []).should.equal(false);
			var x = {a: 1, b: 'abc'};
			var y = {a: 1, b: 'abc'};
			(x == y).should.equal(false);
			y = x;
			(x === y).should.equal(true);
		});
	});
});