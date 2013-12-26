// mocha prototype.js -R spec
// reference http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html
// reference http://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html
var should = require('should');


function getProperty(obj, prop) {
	if (obj.hasOwnProperty(prop)) {
		return obj[prop];
	}
	// if(obj.__proto__){
	// 	return getProperty(obj.__proto__, prop);
	if (obj.constructor.prototype) {
		return getProperty(obj.constructor.prototype, prop);
	} else {
		return undefined;
	}
}

describe('prototype', function() {
	describe('read write on prototype chain', function() {
		var person = {
			type: 'human',
			a: {
				x: 1
			},
			getType: function() {
				return this.type;
			}
		};
		// var tom = {name: 'tom'};
		// tom.__proto__ = person;

		function Person(name) {
			this.name = name;
		}
		Person.prototype = person;
		Person.prototype.constructor = Person;
		var tom = new Person('tom');
		var jimmy = new Person('jimmy')

		it('read - lookup upside prototype chain', function() {
			tom.type.should.equal('human');
			tom.getType().should.equal('human');

			getProperty(tom, 'type').should.equal('human');

		});
		it('write - may create a local property, use hasOwnProperty() to check property whether local', function() {
			tom.hasOwnProperty('type').should.equal(false);
			tom.type = 'male';
			tom.hasOwnProperty('type').should.equal(true);
			jimmy.type.should.equal('human');

			tom.a.x = 100;
			jimmy.a.x.should.equal(100);
		});
	});
});