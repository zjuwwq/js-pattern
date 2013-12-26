// mocha closure.js -R spec
// reference http://www.cnblogs.com/TomXu/archive/2012/01/31/2330252.html
var should = require('should');

describe('closure', function() {
	it('common', function() {
		var arr = [],
			i,
			j,
			k;
		for (i = 0; i < 10; i++) {
			arr[i] = function() {
				// current scope = VO:{}-->Closure:{i: 10}-->Global
				return i;
			};
		}
		for (j = 0; j < 10; j++) {
			arr[j]().should.equal(10);
		}
		for (k = 0; k < 10; k++) {
			arr[k] = (function(m) {
				return function() {
					// current scope = VO:{}-->Closure:{m}-->Global
					return m;
				};
			})(k);
		}
		arr[5]().should.equal(5);
	});

});