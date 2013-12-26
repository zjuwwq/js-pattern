/**
 * Title: avoid eval()
 * References: 
 * 1. http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 * 2. http://perfectionkills.com/global-eval-what-are-the-options/
 */
var jsstring = "var un = 1; console.log(un);";
// evaluates code in current scope
// Drawbacks:
// 1. see all outer scope
// 2. local variable pollution
eval(jsstring);

// optimization 1 - indirect eval call, evaluates code in global scope
// Drawback: global varaible pollution
(1, eval)(jsstring);

// optimization 1 - wrap into an immediate function
// Drawback: see all outer scope
(function() {
	eval(jsstring);
})();

// preferred 1 - using Function
Function(jsstring)();

// mocha avoid_eval.js -R spec
var should = require('should');
describe('avoid eval', function() {
	it('eval - pollute local variable, see the caller scope', function() {
		function fa() {
			var aa = 1;
			var ab = 'wwq';
			eval('var ab = 10;aa++;');
			return [aa, ab];
		}
		var arr = fa();
		arr[0].should.equal(2);
		arr[1].should.equal(10);
	});
	it('indirect call - pollute global varaible in ES5', function() {
		function fb() {
			var ba = 1;
			var bb = 'wwq';
			(1, eval)('var bb = 10, bc=typeof ba;');
			return [bc, bb];
		}
		fb()[1].should.equal('wwq');
		var global = (function() {
			return this || (1, eval)('this');
		})();
		global.bb.should.equal(10);
		global.bc.should.equal('undefined');
	});
	it('wrap into an immediate function - see the caller scope', function() {
		function fc() {
			var ca = 1;
			var cb = 'wwq';

			(function() {
				eval('var cb = 10;ca++;');
			})();
			return [ca, cb];
		}
		var arr = fc();
		arr[0].should.equal(2);
		arr[1].should.equal('wwq');
	});
	it('Function', function() {
		function fd() {
			var da = 1;
			var db = 'wwq';

			var dc = Function('var db = 10; return typeof da;')();
			return [da, db, dc];
		}
		var arr = fd();
		arr[0].should.equal(1);
		arr[1].should.equal('wwq');
		arr[2].should.equal('undefined');
		var global = (function() {
			return this || (1, eval)('this');
		})();
		(typeof global.db).should.equal('undefined');
	});
});