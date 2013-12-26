// mocha inheritance.js -R spec
var should = require('should');
(function() {
	this.Class = function() {};
	Class.extend = function extend(prop) {
		var key, value, prototype;
		var superPrototype = this.prototype;
		var prototype = new this();
		for (key in prop) {
			if (prop.hasOwnProperty(key)) {
				value = prop[key];
				if (Object.prototype.toString.call(value) === '[object Function]') {
					prototype[key] = (function(key, fn) {
						return function() {
							var temp = this.super;
							this.super = superPrototype[key];
							var result = fn.apply(this, arguments);
							this.super = temp;
							return result;
						};
					})(key, value);
				} else {
					prototype[key] = value;
				}
			}
		}

		function Class() {
			this.init.apply(this, arguments);
		}
		Class.prototype = prototype;
		Class.prototype.constructor = Class;
		Class.extend = extend;

		return Class;
	};
})();



describe('inheritance', function() {
	function Point(x, y) {
		this.x = x;
		this.y = y;
	}
	Point.prototype.introduce = function() {
		return this.x + ',' + this.y;
	};

	function EPoint(x, y, z) {
		Point.apply(this, Array.prototype.slice.call(arguments));
		this.z = z;
	}
	EPoint.prototype = new Point();
	EPoint.prototype.constructor = Point;
	EPoint.prototype.introduce = function() {
		return Point.prototype.introduce.apply(this, Array.prototype.slice.call(arguments)) + ',' + this.z;
	};

	it('manual', function() {
		var dot = new EPoint(1, -3, 8);
		dot.x.should.equal(1);
		dot.z.should.equal(8);
		dot.introduce().should.equal('1,-3,8');
		(dot instanceof EPoint).should.equal(true);
	});

	it('common', function() {
		var Person = Class.extend({
			init: function(name) {
				this.name = name;
			},
			introduce: function() {
				return 'I am ' + this.name + '.';
			}
		});

		var Student = Person.extend({
			init: function(name, grade) {
				this.super(name);
				this.grade = grade;
			},
			introduce: function() {
				return this.super() + 'I am grade ' + this.grade + '.';
			}
		});

		var lucy = new Student('lucy', 4);
		lucy.name.should.equal('lucy');
		lucy.introduce().should.equal('I am lucy.I am grade 4.');
		(lucy instanceof Student).should.equal(true);
	});
});