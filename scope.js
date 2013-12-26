// mocha scope.js -R spec
// reference http://www.cnblogs.com/TomXu/archive/2012/01/18/2312463.html
var should = require('should');

describe('scope', function() {
	it('js is lexical scope(static scope)', function() {
		var a = 1;

		function fa() {
			return a + 1;
		}

		function fb() {
			var a = 10;
			return fa();
		}
		fb().should.not.equal(11); // if dyanamic scope, should be 11
		fb().should.equal(2);
	});
	describe('js is function scope', function() {
		it('js has not block scope', function() {
			function fb() {
				var a = 1;
				if (true) {
					var a = 10;
				}
				return a + 1;
			}
			fb().should.not.equal(2); // if dynamic scope, should be 2
			fb().should.equal(11);
		});
		it('when function call, local variable is defined at entering function immediately', function() {
			function fc(a, b) {
				a++;
				var c = 1;
				a++;
				var d = a * c;
				return d;
			}
			// be equivalent to

			function fcc(a, b) {
				var c, d;
				a++;
				c = 1;
				a++;
				d = a * c;
				return d;
			}
			fc(10).should.equal(fcc(10, undefined));
		});
		it('scope chain', function() {
			// fa scope = Global
			function fa() {
				// fa scope = VO:{a: undefined, x: undefined, fb: <reference to function>}-->Global
				// fb scope = Closure:{a: undefined}-->Global
				var a = 100;
				var x = 'wwq';

				function fb() {
					// fb scope = VO:{b: undefined, y: undefined, fc: <reference to function>}-->Closure:{a: 100}-->Global
					// fc scope = Closure:{b: undefined}-->Closure:{a: 100}-->Global
					var b = 1;
					var y = 'wwl';

					function fc() {
						// fc scope = VO:{z: undefined}-->Closure:{b: 1}-->Closure:{a: 100}-->Global
						var z = 'wmm';
						return a + b;
					}
					return fc;
				}
				return fb();
			}
			fa()().should.equal(101);
		});
		it('eval has the same scope of calling context', function(){
			function fd(){
				var x = 100;
				// fd scope = VO:{x: 100}-->Global
				return eval('x+1');
			}
			fd().should.equal(101);
		});
		it('with/catch object will add ahead of the current scope', function(){
			var x = 10;
			var y = 20;
			with({x: 100}){
				// scope = withObject:{x: 100}-->VO:{x: 10, y: 20}-->Global
				// be equivalent to x = 30, y = 40, because js has not block scope
				var x = 30, y = 40;
				// scope = withObject:{x: 30}-->VO:{x: 10, y: 40}-->Global
			}
			//scope = VO:{x: 10, y: 40}-->Global
			x.should.equal(10);
			y.should.equal(40);
		});
	});

});