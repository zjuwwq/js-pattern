/**
 * Title: property lookup
 * Description: cache the property, reduce the number of times to lookup
 * References: http://velocityconf.com/velocityeu/public/schedule/detail/21634
 */

function fa(a, b) {
	if (Object.prototype.toString.call(a) === '[object Number]' && Object.prototype.toString.call(b) === '[object Array]') {
		console.log('do something...');
	}
}

// preferred 1 - cache the property
function fa(a, b) {
	var toString = Object.prototype.toString;
	if (toString.call(a) === '[object Number]' && toString.call(b) === '[object Array]') {
		console.log('do something...');
	}
}