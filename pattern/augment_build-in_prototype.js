/**
 * Title: (Not) Augmenting Built-in Prototypes
 * Description: it can seriously hurt maintainability, because it will make your code less predictable
 * References: http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/
 */
/* NOTE: You can make an exception of the rule only when all these conditions are met:
 * 1. It's expected that future ECMAScript versions or JavaScript implementations will implement this functionality
 *    as a built-in method consistently. 
 * 2. You check if your custom property or method doesn't exist.
 * 3. You clearly document and communicate the change with the team.
 */
if(!Object.prototype.myMethod){
	Object.prototype.myMethod = function(){
		console.log('implementation...');
	};
}