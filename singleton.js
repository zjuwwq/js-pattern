// mocha singleton.js -R spec
var should = require('should');

function Singleton(_fa, _fb){
	this._fa = _fa;
	this._fb = _fb;
}

Singleton.getInstance = function() {
	var _class = this;
	if (_class._instance === undefined) {
		var _obj = {};
		var _result = _class.apply(_obj, Array.prototype.slice.call(arguments));
		_class._instance = Object.prototype.toString.call(_result) === '[object Object]' ? _result : _obj;
	}
	return _class._instance;
};

describe('Singleton', function(){
	it('Singleton.getInstance get the same instance', function(){
		var a = Singleton.getInstance('wwq', 29);
		var b = Singleton.getInstance('wwl', 31);
		a.should.equal(b);
	});
});