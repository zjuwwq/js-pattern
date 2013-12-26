/**
 * Title: for in loops
 * References: http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */
var i,
	man = {};

for (i in man) {
	console.log('do something with man[i]');
}

// optimization 1 - filter out the prototype properties
for (i in man) {
	if (man.hasOwnProperty(i)) {
		console.log('do something with man[i]');
	}
}
// optimization 2 - avoid naming collisions in case the `man` Object has redefined `hasOwnProperty`
for (i in man) {
	if (Object.prototype.hasOwnProperty.call(man, i)) {
		console.log('do something with man[i]');
	}
}

// preferred 1 - use a local variable to "cache" `Object.prototype.hasOwnProperty`
var hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
	if (hasOwn.call(man, i)) {
		console.log('do something with man[i]');
	}
}

// mocha for_in.js -R spec
var should = require('should');
describe('for in', function() {
	it('filter with hasOwnProperty', function() {
		var p,
			hasClone = false,
			obj = {
				a: 1,
				b: 'wwq'
			};
		if (typeof Object.prototype.clone !== 'function') {
			Object.prototype.clone = function() {
				console.log('implementation...');
			};
		}
		for (p in obj) {
			if (p === 'clone') {
				hasClone = true;
				break;
			}
		}
		hasClone.should.equal(true);

		hasClone = false;
		var hasOwn = Object.prototype.hasOwnProperty;
		for (p in obj) {
			if (hasOwn.call(obj, p)) {
				if (p === 'clone') {
					hasClone = true;
					break;
				}
			}
		}
		hasClone.should.equal(false);
	});
});