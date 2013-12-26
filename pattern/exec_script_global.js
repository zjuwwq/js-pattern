/**
 * Title: execute script in global(run in browser)
 * References: 
 *  1. http://perfectionkills.com/global-eval-what-are-the-options/
 *  2. avoid_eval.js
 */
var globalEval = ((function(){
	var isIndirectEvalGlobal = (function(origin, Object){
		try{
			return (1, eval)('Object') === origin;
		}catch(e){
			return false;
		}
	})(Object, 123);
	if(isIndirectEvalGlobal){
		return function(jsString){
			return (1, eval)(jsString);
		};
	}else if(typeof window.execScript === 'function'){
		return function(jsString){
			return window.execScript(jsString);
		};
	}
}))();