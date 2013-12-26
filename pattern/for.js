/**
 * Title: for loops
 * References: http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */
var i,
	arr = [];

for (i = 0; i < arr.length; i++) {
	console.log('do something with myarray[i]');
}

// optimization 1 - cache the length of the array with the use of `max`
for (i = 0, max = arr.length; i < max; i++) {
	console.log('do something with myarray[i]');
}

// preferred 1
// Benifits:
// 1. Use one less variable (no length)
// 2. Count down to 0, which is usually faster because it’s more efficient to compare to 0 than to the length of the array or to anything other than 0
for (i = arr.length; i--;) {
	console.log('do something with myarray[i]');
}