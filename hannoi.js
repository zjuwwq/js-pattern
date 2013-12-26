// mocha hannoi.js -R spec
var should = require("should");
var count = 0;

function hannoi(n, a, b, c) {
	if (n === 1) {
		console.log("move disk " + n + " from " + a + ' to ' + c);
		count++;
	} else {
		hannoi(n - 1, a, c, b);
		console.log("move disk " + n + " from " + a + " to " + c);
		count++;
		hannoi(n - 1, b, a, c);
	}
}
describe("hannoi", function() {
	it("hannoi must be move 2^n-1", function() {
		hannoi(8, 'a', 'b', 'c');
		count.should.equal(Math.pow(2, 8) - 1);
	});
});