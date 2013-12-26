// mocha type_check.js -R spec
// reference http://blog.sina.com.cn/s/blog_a78bd7b50101gwix.html
var should = require('should');

describe('type check', function(){
	describe('typeof use to check base types', function(){
		it('typeof can check base types include undefined variable', function(){
			(typeof 1).should.equal('number');
			(typeof 'a').should.equal('string');
			(typeof true).should.equal('boolean');
			(typeof function(){}).should.equal('function');
			(typeof {a:1, b:2}).should.equal('object');
			(typeof a).should.equal('undefined');
		});
		it('typeof can not check the class of object', function(){
			(typeof []).should.equal('object');
			(typeof []).should.not.equal('array');
			function A0(){}
			(typeof new A0()).should.equal('object');
		});
	});
	describe('instanceof use to check the class of object', function(){
		it('instanceof can not check base types', function(){
			(1 instanceof Number).should.equal(false);
			('abc' instanceof String).should.equal(false);
		});
		it('instanceof can check the class of object', function(){
			({a:1, b:2} instanceof Object).should.equal(true);
			([] instanceof Array).should.equal(true);
			function A1(){}
			(A1 instanceof Function).should.equal(true);
			(new A1() instanceof A1).should.equal(true);
		});
		it('instanceof can not accurately check the class of object when inherited', function(){
			function A2(){}
			function B2(){
				A2.apply(this, arguments);
			}
			B2.prototype = new A2();
			B2.prototype.constructor = B2;
			var b = new B2();
			(b instanceof B2).should.equal(true);
			(b instanceof A2).should.equal(true);
		});
	});
	describe('constructor  use to check the class of object', function(){
		it('constructor can check the class of object', function(){
			([].constructor).should.equal(Array);
			function A3(){}
			(A3.constructor).should.equal(Function);
			(new A3().constructor).should.equal(A3);
		});
		it('constructor can accurately check the class of object when inherited', function(){
			function A4(){}
			function B4(){
				A4.apply(this, arguments);
			}
			B4.prototype = new A4();
			B4.prototype.constructor = B4;
			var b = new B4();
			(b.constructor).should.equal(B4);
			(b.constructor).should.not.equal(A4);
		});
	});
	describe('Object.prototype.toString  use to check base types and the buildin class', function(){
		it('Object.prototype.toString can check base types exclude undefined variable', function(){
			Object.prototype.toString.call(1).should.equal('[object Number]');
			Object.prototype.toString.call(function(){}).should.equal('[object Function]');
			// Object.prototype.toString.call(a) --> a is not defined
			Object.prototype.toString.call(undefined).should.equal('[object Undefined]');
		});
		it('Object.prototype.toString can check the buildin class', function(){
			Object.prototype.toString.call([]).should.equal('[object Array]');
			Object.prototype.toString.call(new Date()).should.equal('[object Date]');
		});
		it('Object.prototype.toString can not check the custom class', function(){
			function A5(){}
			Object.prototype.toString.call(new A5()).should.equal('[object Object]');
			Object.prototype.toString.call(new A5()).should.not.equal('[object A5]');
		});
		
	});
});