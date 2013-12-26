/**
 * Title: 模块化
 * Description:
 * 1. 可重用
 * 2. 封装性，和全局namesapce不接触，松耦合
 * 3. 只暴露public，隐藏private
 * References: 
 * 1. http://www.cnblogs.com/TomXu/archive/2011/12/30/2288372.html
 */

// optimization 1 - 通过函数作用域封装，隔离全局namespace;通过闭包隐藏private;通过返回值暴露public
// Drawback: 模块必须一次实现
var blogModule = (function(){
	var my = {},
		privateProperty0,
		privateProperty1;
	function privateMethod(){
		// implemention
	}
	my.publicProperty = privateProperty0;
	my.publicMethod = function(){
		// implemention
	};
	return my;
})();

// preferred 1
// Benifit: 模块可以分开定义，多人开发
var blogModule = (function(my){
	var privateProperty0,
		privateProperty1;
	function privateMethod(){
		// implemention
	}
	my.publicProperty = privateProperty0;
	my.publicMethod = function(){
		// implemention
	};
	return my;
})(blogModule || {});