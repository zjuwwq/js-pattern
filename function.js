// mocha function.js -R spec
// reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope
var should = require('should');

describe('function', function() {
	it('function declaration - can use before function declaration itself', function() {
		multiply(3, 4).should.equal(12);
		function multiply(a, b) {
			return a * b;
		}
	});
	it('function expression - if has name, name can be only used within function body', function(){
		(function (a, b){
			return a * b;
		})(3, 4).should.equal(12);
		var multiply = function(a, b){
			return a * b;
		};
		multiply(3, 4).should.equal(12);
		var fa = function sum(a){
			if(a === 0){
				return a;
			}else{
				return a + sum(a - 1);
			}
		};
		fa(5).should.equal(15);
		(typeof sum).should.equal('undefined');
	});
	it('new Function - scope is always global', function(){
		global.a = 100;
		function fb(){
			var a = 1;
			return new Function('x', 'y', 'var z = 4;\nreturn a + x + y + z;');
		}
		fb()(2, 3).should.equal(109);
	});
	it('arguments - like array but not, can use Array.prototype.slice.call convert', function(){
		function fc(a, b){
			return arguments;
		}
		var arguments = fc(1, 2);
		arguments[1].should.equal(2);
		Object.prototype.toString.call(arguments).should.not.equal('[object Array]');
		Object.prototype.toString.call(Array.prototype.slice.call(arguments)).should.equal('[object Array]');
		arguments.callee(1, 2)[0].should.equal(1);
	});
});