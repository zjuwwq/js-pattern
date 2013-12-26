// mocha exception.js -R spec
var should = require('should');

function fn0() {
	try {
		var a = 1;
		return a + 2;
	} finally {
		a = 100;
	}
}

function fn1() {
	try {
		var a = 1;
		throw Error('error 0');
		return a + 2;
	} catch (e) {
		a = 10;
		return a + 20;
	}
}

function fn2() {
	try {
		var a = 1;
		throw Error('error 0');
		return a + 2;
	} catch (e) {
		a = 10;
		return a + 20;
	} finally {
		a = 100;
		return a + 200;
	}
}

describe('Exception', function() {
	describe('workflow', function() {
		it('return statement is evaluated before finally block', function() {
			fn0().should.equal(3);
		});
		it('return statement can present in catch/finally block', function() {
			fn1().should.equal(30);
			fn2().should.equal(300);
		});
	});
});