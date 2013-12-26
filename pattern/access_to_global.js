/**
 * Title:  Access to the Global Object
 * Benifits:
 * 1. work in unknown environment
 * 2. work in ES3, ES5 and ES5-strict
 * References:
 * 1. http://perfectionkills.com/unnecessarily-comprehensive-look-into-a-rather-insignificant-issue-of-global-objects-creation/
 * 2. http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */

var global = (function() {
	// In ES5 strict mode, this is undefined
	// In ES5 Indirect eval evaluates code in global scope
	return this || (1, eval)('this');
})();