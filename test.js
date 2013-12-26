// mocha test.js -R spec
var should = require('should');

describe('test', function() {
	it('test', function() {
		function foo() {
			this.a = 200;
		}
		foo();
		a.should.equal(200);

		a = 0;

		function fn() {
			foo();
		}
		fn();
		a.should.equal(200);

		var obj = {
			name: 'wwq',
			setName: function() {
				this.name = 'hahaha';
			}
		};
		var fun = obj.setName;
		fun();
		obj.name.should.equal('wwq');
		name.should.equal('hahaha');

		(false || obj.setName)();
		obj.name.should.equal('wwq');
	});
	it('function call as the method of object - this is the caller object', function() {
		var obj = {
			name: 'wwq',
			age: 30,
			setName: function() {
				this.name = 'hahaha';
			}
		};
		obj.setName();
		obj.name.should.equal('hahaha');

		function foo() {
			return this.age;
		}
		obj.getAge = foo;
		obj.getAge().should.equal(30);
	});

	it('function call as construtor by new - this is the new object', function() {
		function Person() {
			this.name = 'wwq';
		}
		new Person().name.should.equal('wwq');
	});

	it('function call by call/apply/bind/... - this is set by the first parameter', function() {
		var obj = {
			name: 'wwq',
			age: 30,
			setName: function() {
				this.name = 'hahaha';
			}
		};
		obj.setName.call();
		name.should.equal('hahaha');
		var wwq = {};
		obj.setName.call(wwq);
		wwq.name.should.equal('hahaha');
	});
	it('this in with statement', function() {
		with({
			age: 30,
			getAge: function() {
				return this.age;
			}
		}) {
			getAge().should.equal(30);
		}
	});
});