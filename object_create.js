// mocha object_create.js -R spec
// reference http://blog.vjeux.com/2011/javascript/how-prototypal-inheritance-really-works.html
// reference http://blog.csdn.net/adwu73/article/details/7224356
var should = require('should');

objectCreate = function(o) {
	function F() {}
	F.prototype = o;
	return new F();
};

describe('Object.create', function() {
	it('create a object with the specified prototype', function() {
		var tom = {
			name: 'tom',
			gender: 'male'
		};
		var jimmy = Object.create(tom);
		jimmy.name = 'jimmy';
		jimmy.gender.should.equal('male');

		var jack = objectCreate(tom);
		jack.name = 'jack';
		jack.gender.should.equal('male');
	});

});

exports = objectCreate;