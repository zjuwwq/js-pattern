/**
 * Title: Single var Pattern
 * Description: use one single var statement to declare mutiple variables, initialize if possible
 * Benifits:
 * 1. Provides a single place to look for all the local variables needed by the function
 * 2. Prevents logical errors when a variable is used before it’s defined
 * 3. Helps you remember to declare variables and therefore minimize globals
 * 4. Is less code (to type and to transfer over the wire)
 * References: http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */

function func() {
	var a = 1,
		b = 2,
		sum = a + b,
		myobject = {},
		i,
		j;
	// function body...
}