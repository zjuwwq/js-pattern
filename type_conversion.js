// mocha type_conversion.js -R spec
// reference http://jibbering.com/faq/notes/type-conversion/
// reference http://www.w3school.com.cn/js/pro_js_typeconversion.asp
var should = require('should');

describe('type conversion', function() {
	describe('convert to Boolean', function() {
		describe('use !!', function() {
			it('all Number but 0/NaN convert to true', function() {
				( !! 0).should.equal(false);
				( !! NaN).should.equal(false);
				( !! -100).should.equal(true);
				( !! 123e-2).should.equal(true);
			});
			it('all String but "" convert to true', function() {
				( !! '').should.equal(false);
				( !! 'abc...').should.equal(true);
			});
			it('all Object but null convert to true', function() {
				( !! null).should.equal(false);
				( !! {}).should.equal(true);
				( !! {
					a: 100,
					b: 'wwq'
				}).should.equal(true);
				( !! []).should.equal(true);
			});
			it('other type', function() {
				( !! function() {
					return;
				}).should.equal(true);
				( !! undefined).should.equal(false);
			});
		});
		describe('use Boolean()', function() {
			it('Boolean() is same as !!', function() {
				Boolean(0).should.equal(false);
				Boolean(NaN).should.equal(false);
				Boolean('').should.equal(false);
				Boolean(null).should.equal(false);
				Boolean(undefined).should.equal(false);
			});
		});
	});
	describe('convert to String', function() {
		it('use ""+', function() {
			("" + 123.5).should.equal('123.5');
			("" + NaN).should.equal('NaN');
			("" + 123e-2).should.equal('1.23');
			("" + true).should.equal('true');
			("" + false).should.equal('false');
			("" + undefined).should.equal('undefined');
			("" + null).should.equal('null');
			("" + {a: 1}).should.equal('[object Object]');
			("" + function (){return;}).should.equal('function (){return;}');
		});
		it('use String(), is same as ""+', function() {
			String(123.5).should.equal('123.5');
			String(NaN).should.equal('NaN');
			String(123e-2).should.equal('1.23');
			String(true).should.equal('true');
			String(false).should.equal('false');
			String(undefined).should.equal('undefined');
			String(null).should.equal('null');
			String({a: 1}).should.equal('[object Object]');
			String(function (){return;}).should.equal('function (){return;}');
		});
		it('use .toString(), like ""+, but null/undefined hasn\'t .toString()', function() {
			(123.5).toString().should.equal('123.5');
			(NaN).toString().should.equal('NaN');
			(123e-2).toString().should.equal('1.23');
			(true).toString().should.equal('true');
			(false).toString().should.equal('false');
			// (undefined).toString().should.equal('undefined');
			// (null).toString().should.equal('null');
			({a: 1}).toString().should.equal('[object Object]');
			(function (){return;}).toString().should.equal('function (){return;}');
		});
	});
	describe('convert to Number', function() {
		it('use +, use -0, *1, /1 is same', function() {
			(+'').should.equal(0);
			(+'1.23e3').should.equal(1230);
			(+'-20.5').should.equal(-20.5);
			(+'a01').toString().should.equal('NaN');
			(+'010').should.equal(10);
			(+'0xFF').should.equal(255);

			(+true).should.equal(1);
			(+false).should.equal(0);
			(+null).should.equal(0);
			(+undefined).toString().should.equal('NaN');
			(+{a: 1}).toString().should.equal('NaN');
			(+function (){return;}).toString().should.equal('NaN');
		});
		it('use Number()', function() {
			Number('').should.equal(0);
			Number('-20.5').should.equal(-20.5);
			Number('1.23e3').should.equal(1230);
			Number('a01').toString().should.equal('NaN');
			Number('010').should.equal(10);
			Number('0xFF').should.equal(255);

			Number(true).should.equal(1);
			Number(false).should.equal(0);
			Number(null).should.equal(0);
			Number(undefined).toString().should.equal('NaN');
			Number({a: 1}).toString().should.equal('NaN');
			Number(function (){return;}).toString().should.equal('NaN');
		});
	});
	describe('parseto Number', function() {
		describe('use parseInt/parseFloat, which has radix parameter', function(){
			it('parse String', function() {
				// difference with convert to Number
				parseFloat('').toString().should.equal('NaN');


				parseFloat('1.23e3').should.equal(1230);
				parseFloat('-20.5').should.equal(-20.5);
				parseFloat('a01').toString().should.equal('NaN');
				parseFloat('010').should.equal(10);
				parseFloat('010', 16).should.equal(16);
				parseFloat('0xFF').should.equal(255);
			});
			it('parse not string always return NaN', function() {
				// difference with convert to Number
				parseFloat(true).toString().should.equal('NaN');
				parseFloat(false).toString().should.equal('NaN');
				parseFloat(null).toString().should.equal('NaN');

				parseFloat(undefined).toString().should.equal('NaN');
				parseFloat({a: 1}).toString().should.equal('NaN');
				parseFloat(function (){return;}).toString().should.equal('NaN');
			});
		});
		
	});
});