// mocha new.js -R spec
// reference http://stackoverflow.com/questions/6750880/javascript-how-does-new-work-internally
// reference http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html
var should = require('should');

function New(fn) {
	var proto = Object(fn.prototype) === fn.prototype ? fn.prototype : Object.prototype;
	// var obj = {};
	// obj.__proto__ = proto;
	var obj = Object.create(proto);
	var ret = fn.apply(obj, Array.prototype.slice.call(arguments, 1));
	return Object(ret) === ret ? ret : obj;
}

describe('new', function() {
	it('', function() {
		function Person(name, age) {
			this.name = name;
			this.age = age;
		}
		Person.prototype.introduce = function() {
			return "I am " + this.name + '. I am ' + this.age + ' years old.';
		};
		var tom = new Person('tom', 12);
		tom.name.should.equal('tom');
		var jack = New(Person, 'jack', 20);
		jack.age.should.equal(20);

		tom.introduce.should.equal(jack.introduce);
	});

});