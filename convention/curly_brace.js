/**
 * Title: curly brace
 * Description: 
 * 1. always use curly brace anyway
 * 2. opening curly brace should be on the same line
 * Benifit: makes the code more consistent and easier to update.
 * References: http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */

for (var i = 0; i < 10; i += 1)
	console.log('do something with i');
if (i)
	console.log('do something with i');

// optimization 1 - always use curly brace anyway.
for (var i = 0; i < 10; i += 1)
{
	console.log('do something with i');
}

// preferred 1 - opening curly brace should be on the same line
for (var i = 0; i < 10; i += 1){
	console.log('do something with i');
}

// mocha curly_brace.js -R spec
var should = require('should');
describe('curly brace', function(){
	it('opening curly brace on the following line can cause trouble', function(){
		function fa(){
			return
			{
				a: 1
			};
		}
		(typeof fa()).should.equal('undefined');
	});
});