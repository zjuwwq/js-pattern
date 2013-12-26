/**
 * Title: naming
 * References: http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */
// function/method/variable/property name

function myFunction() {
	console.log('implemention...');
}

var myObject = {
	myProperty: 'myPropertyValue'
};

// constructor name

function MyConstructor() {
	console.log('implemention...');
}
// constant name
var PI = 3.14,
	MAX_WIDTH = 800;

// private property/method

var myObject = {
	_myPrivateProperty: 1,
	_myPrivateMethod: function(){
		console.log('implemention...');
	}
}