/**
 * Title: Object create
 * Description: implement Object.create with Cross-browser compatibility
 */
// 
if (!Object.create) {
	Object.create = function(o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

// optimization 1 - using closure to avoid declare function every invocation
if (!Object.create) {
	Object.create = (function() {
		function F() {}
		return function(o) {
			F.prototype = o;
			return new F();
		};
	})();
}

// preferred 1 - notify user about inability to work with second argument
// Reference:
// 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// 2. http://stackoverflow.com/questions/3075308/what-modernizer-scripts-exist-for-the-new-ecmascript-5-functions/3075818#3075818
if (!Object.create) {
	Object.create = (function() {
		function F() {}
		return function(o) {
			if (arguments.length !== 1) {
				throw new Error('Object.create implementation only accepts one parameter.');
			}
			F.prototype = o;
			return new F();
		};
	})();
}