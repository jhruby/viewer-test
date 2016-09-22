/** @preserve  version: 1.1.405
  build time: 2016-09-22T15:39:36.585000
*/
(function(__globals__)
{
  "use strict";

var vitrium = {async:{},bin:{},codec:{},crypto:{filters:{}},log:{},utils:{}};
// script:viewer\lib\underscore-min.js
//     Underscore.js 1.4.2
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=r.unshift,l=i.toString,c=i.hasOwnProperty,h=r.forEach,p=r.map,d=r.reduce,v=r.reduceRight,m=r.filter,g=r.every,y=r.some,b=r.indexOf,w=r.lastIndexOf,E=Array.isArray,S=Object.keys,x=s.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=T),exports._=T):e._=T,T.VERSION="1.4.2";var N=T.each=T.forEach=function(e,t,r){if(e==null)return;if(h&&e.forEach===h)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(T.has(e,o)&&t.call(r,e[o],o,e)===n)return};T.map=T.collect=function(e,t,n){var r=[];return e==null?r:p&&e.map===p?e.map(t,n):(N(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)},T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduce===d)return r&&(t=T.bind(t,r)),i?e.reduce(t,n):e.reduce(t);N(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(v&&e.reduceRight===v)return r&&(t=T.bind(t,r)),arguments.length>2?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.find=T.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},T.filter=T.select=function(e,t,n){var r=[];return e==null?r:m&&e.filter===m?e.filter(t,n):(N(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},T.reject=function(e,t,n){var r=[];return e==null?r:(N(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r)},T.every=T.all=function(e,t,r){t||(t=T.identity);var i=!0;return e==null?i:g&&e.every===g?e.every(t,r):(N(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=T.some=T.any=function(e,t,r){t||(t=T.identity);var i=!1;return e==null?i:y&&e.some===y?e.some(t,r):(N(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};T.contains=T.include=function(e,t){var n=!1;return e==null?n:b&&e.indexOf===b?e.indexOf(t)!=-1:(n=C(e,function(e){return e===t}),n)},T.invoke=function(e,t){var n=u.call(arguments,2);return T.map(e,function(e){return(T.isFunction(t)?t:e[t]).apply(e,n)})},T.pluck=function(e,t){return T.map(e,function(e){return e[t]})},T.where=function(e,t){return T.isEmpty(t)?[]:T.filter(e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&T.isEmpty(e))return-Infinity;var r={computed:-Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&T.isEmpty(e))return Infinity;var r={computed:Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},T.shuffle=function(e){var t,n=0,r=[];return N(e,function(e){t=T.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return T.isFunction(e)?e:function(t){return t[e]}};T.sortBy=function(e,t,n){var r=k(t);return T.pluck(T.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t);return N(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};T.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(T.has(e,t)?e[t]:e[t]=[]).push(n)})},T.countBy=function(e,t,n){return L(e,t,n,function(e,t,n){T.has(e,t)||(e[t]=0),e[t]++})},T.sortedIndex=function(e,t,n,r){n=n==null?T.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},T.toArray=function(e){return e?e.length===+e.length?u.call(e):T.values(e):[]},T.size=function(e){return e.length===+e.length?e.length:T.keys(e).length},T.first=T.head=T.take=function(e,t,n){return t!=null&&!n?u.call(e,0,t):e[0]},T.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},T.last=function(e,t,n){return t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},T.rest=T.tail=T.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},T.compact=function(e){return T.filter(e,function(e){return!!e})};var A=function(e,t,n){return N(e,function(e){T.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};T.flatten=function(e,t){return A(e,t,[])},T.without=function(e){return T.difference(e,u.call(arguments,1))},T.uniq=T.unique=function(e,t,n,r){var i=n?T.map(e,n,r):e,s=[],o=[];return N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n))o.push(n),s.push(e[r])}),s},T.union=function(){return T.uniq(a.apply(r,arguments))},T.intersection=function(e){var t=u.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.indexOf(t,e)>=0})})},T.difference=function(e){var t=a.apply(r,u.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})},T.zip=function(){var e=u.call(arguments),t=T.max(T.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=T.pluck(e,""+r);return n},T.object=function(e,t){var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},T.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=T.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},T.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},T.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var O=function(){};T.bind=function(t,n){var r,i;if(t.bind===x&&x)return x.apply(t,u.call(arguments,1));if(!T.isFunction(t))throw new TypeError;return i=u.call(arguments,2),r=function(){if(this instanceof r){O.prototype=t.prototype;var e=new O,s=t.apply(e,i.concat(u.call(arguments)));return Object(s)===s?s:e}return t.apply(n,i.concat(u.call(arguments)))}},T.bindAll=function(e){var t=u.call(arguments,1);return t.length==0&&(t=T.functions(e)),N(t,function(t){e[t]=T.bind(e[t],e)}),e},T.memoize=function(e,t){var n={};return t||(t=T.identity),function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},T.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},T.defer=function(e){return T.delay.apply(T,[e,1].concat(u.call(arguments,1)))},T.throttle=function(e,t){var n,r,i,s,o,u,a=T.debounce(function(){o=s=!1},t);return function(){n=this,r=arguments;var f=function(){i=null,o&&(u=e.apply(n,r)),a()};return i||(i=setTimeout(f,t)),s?o=!0:(s=!0,u=e.apply(n,r)),a(),u}},T.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},T.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},T.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},T.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},T.keys=S||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)T.has(e,n)&&(t[t.length]=n);return t},T.values=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push(e[n]);return t},T.pairs=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push([n,e[n]]);return t},T.invert=function(e){var t={};for(var n in e)T.has(e,n)&&(t[e[n]]=n);return t},T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()},T.extend=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},T.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return N(n,function(n){n in e&&(t[n]=e[n])}),t},T.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)T.contains(n,i)||(t[i]=e[i]);return t},T.defaults=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e},T.tap=function(e,t){return t(e),e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped),t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length,u=o==t.length;if(u)while(o--)if(!(u=M(e[o],t[o],n,r)))break}else{var a=e.constructor,f=t.constructor;if(a!==f&&!(T.isFunction(a)&&a instanceof a&&T.isFunction(f)&&f instanceof f))return!1;for(var c in e)if(T.has(e,c)){o++;if(!(u=T.has(t,c)&&M(e[c],t[c],n,r)))break}if(u){for(c in t)if(T.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};T.isEqual=function(e,t){return M(e,t,[],[])},T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0},T.isElement=function(e){return!!e&&e.nodeType===1},T.isArray=E||function(e){return l.call(e)=="[object Array]"},T.isObject=function(e){return e===Object(e)},N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")}),typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"}),T.isFinite=function(e){return T.isNumber(e)&&isFinite(e)},T.isNaN=function(e){return T.isNumber(e)&&e!=+e},T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"},T.isNull=function(e){return e===null},T.isUndefined=function(e){return e===void 0},T.has=function(e,t){return c.call(e,t)},T.noConflict=function(){return e._=t,this},T.identity=function(e){return e},T.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},T.random=function(e,t){return t==null&&(t=e,e=0),e+(0|Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};_.unescape=T.invert(_.escape);var D={escape:new RegExp("["+T.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(_.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}}),T.result=function(e,t){if(e==null)return null;var n=e[t];return T.isFunction(n)?n.call(e):n},T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),F.call(this,n.apply(T,e))}})};var P=0;T.uniqueId=function(e){var t=P++;return e?e+t:t},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){n=T.defaults({},n,T.templateSettings);var r=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){s+=e.slice(i,u).replace(j,function(e){return"\\"+B[e]}),s+=n?"'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?"'+\n((__t=("+r+"))==null?'':__t)+\n'":o?"';\n"+o+"\n__p+='":"",i=u+t.length}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(n.variable||"obj","_",s)}catch(u){throw u.source=s,u}if(t)return o(t,T);var a=function(e){return o.call(this,e,T)};return a.source="function("+(n.variable||"obj")+"){\n"+s+"}",a},T.chain=function(e){return T(e).chain()};var F=function(e){return this._chain?T(e).chain():e};T.mixin(T),N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];T.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],F.call(this,n)}}),N(["concat","join","slice"],function(e){var t=r[e];T.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
// script:viewer\namespace.js
//
// script:viewer\vitrium.js
(function (vitrium)
{
	vitrium.is_mobile = detectmob();
	function detectmob() 
	{ 
		 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		 || navigator.userAgent.match(/Tablet PC/i)
		 ){
			return true;
		}
		else 
		{
			return false;
		}
	}
   
	
}(vitrium));

// script:viewer\service\completer.js
(function(exports)
{
  "use strict";
  
  exports.Completer = Completer;
  exports.ProgressCompleter = ProgressCompleter;
  exports.Cancelable = Cancelable;
  exports.asyncSuccess = asyncSuccess;
  exports.asyncError = asyncError;
  exports.callDefered = callDefered;
  exports.run = asyncRun;
  
  function Completer(cancelCallback)
  {
    this.future = new Future(cancelCallback);  
  }
  
  Completer.prototype =
  {
    complete : function()
    {
      var f = this.future;
      f._cancelCallback = null;

      f.done = true;
      f.succeed = true;

      var args = [];
      args.push.apply(args, arguments);
      
      this._execute(f._onSucceed, args);

      args.push(true);
      this._execute(f._onCompleted, args);
      f._onFailed.length = 0;
    },
    fail : function()
    {
      var f = this.future;
      f._cancelCallback = null;

      f.done = true;
      
      var args = [];
      args.push.apply(args, arguments);

      this._execute(f._onFailed, args);

      args.push(false);
      this._execute(f._onCompleted, args);
      f._onSucceed.length = 0;      
    },
    _execute: function(callbackQueue, args)
    {
      for (var i = 0; i < callbackQueue.length; ++i)
      {
        callbackQueue[i].apply(null, args);        
      }

      callbackQueue.length = 0;
    }
  
  };
  
  function Future(cancelCallback)
  {
    this.done = false;
    this.succeed = false;
    
    this._cancelCallback = cancelCallback ? cancelCallback : null;
    this._onCompleted = [];
    this._onSucceed = [];
    this._onFailed  = [];    
  }
  
  Future.prototype = {
    success : _then,
    error : _catchError,
    completed: _whenComplete,
    then : _then,
    catchError : _catchError,
    whenComplete: _whenComplete,
    
    cancel : _cancel,
    abort: _cancel,
    chainSuccess : function(completer)
    {
      this.then(function () { completer.complete.apply(completer, arguments); });
      return this;
    },
    chainError: function(completer)
    {
      this.catchError(function () { completer.fail.apply(completer, arguments); });
      return this;
    },
    runWhenSucceed : function(callback)
    {
      if (this.done && this.succeed)
      {        
        setTimeout(callback, 0);
      }
      else if (!this.done)
      {
        this.then(callback);
      }
      
      return this;
    },
    runWhenFailed : function(callback)
    {
      if (this.done && !this.succeed)
      {
        setTimeout(function(){ callback(); }, 0);
      }
      else if (!this.done)
      {
        this.catchError(callback);
      }
      
      return this;
    }
  };
  
  function _cancel()
  {
    this.done = true;
    this._onCompleted.length = 0;
    this._onSucceed.length = 0;
    this._onFailed.length = 0;
    
    if (this._cancelCallback)
    {
      this._cancelCallback();
      this._cancelCallback = null;
    }
    
  }
  
  function _then(callback)
  {
    this._onSucceed.push(callback);
    return this;
  }
  
  function _catchError(callback)
  {
    this._onFailed.push(callback);
    return this;
  }
  
  function _whenComplete(callback)
  {
    this._onCompleted.push(callback);
    return this;
  }
  

  function asyncSuccess(completer, data, extendedData)
  {
    var id = setTimeout(function ()
    {
      completer.complete(data, extendedData);
    }, 0);

    completer._oldCancelCallback = completer._cancelCallback;
    completer._cancelCallback = function ()
    {
      clearTimeout(id);
      if (this._oldCancelCallback) this._oldCancelCallback();
    };
  }


  function asyncError(completer, reason)
  {
    var id = setTimeout(function ()
    {
      completer.fail(reason);
    }, 0);

    completer._oldCancelCallback = completer._cancelCallback;
    completer._cancelCallback = function ()
    {
      clearTimeout(id);
      if (this._oldCancelCallback) this._oldCancelCallback();
    };
  }

  function asyncRun(fcnt)
  {
    setTimeout(fcnt, 1);
  }

  function callDefered(callback) {
     var completer = new Completer();

     setTimeout(function () {
        try {
           completer.complete(callback());
        }
        catch (e) {
           completer.fail(e);
        }

     }, 1);

     return completer.future;
  }

  function Cancelable()
  {
    this.canceled = false;
    this._asyncTask = null;
    var self = this;
    this.cancelCallback = function () { self.cancel(); };
  }
  Cancelable.prototype =
  {
     set asyncTask(_task)
     {
        if (!_task)
        {
           if (typeof _task === "undefined")
           {
              try {
                 throw new Error();
              } catch (e)
              {
                 if ("console" in window)
                 {
                    console.log(e)
                 }
              }
           }

           this._asyncTask = null;
        }
        else
        {
           this._asyncTask = _task;
        }
     },
     get asyncTask()
     {
        return this._asyncTask;
     },
    cancel: function ()
    {
      this.canceled = true;
      if(this.asyncTask !== null)
      {
        var task = this.asyncTask;
        if ("abort" in task)
        {
          task.abort();
        }
        else if ("terminate" in task)
        {
          task.terminate();
        }
        else if ("cancel" in task)
        {
          task.cancel();
        }

        this.asyncTask = null;
      }
    }
  };
  Cancelable.prototype.abort = Cancelable.prototype.cancel;
  Cancelable.prototype.terminate = Cancelable.prototype.cancel;

  function ProgressCompleter(cancelCallback)
  {
    Completer.call(this, cancelCallback);
    this.future = new ProgressFuture(cancelCallback);
  }

  ProgressCompleter.prototype = Object.create(Completer.prototype);
  ProgressCompleter.prototype.constructor = ProgressCompleter;
  ProgressCompleter.prototype.progress = function (progress)
  {
    this.future.currentProgress = progress;
    this._executeProgress(this.future._onProgress, progress);
  };
  ProgressCompleter.prototype._executeProgress = function (callbackQueue, progress)
  {
    for (var i = 0, len = callbackQueue.length; i < len; ++i)
    {
      callbackQueue[i](progress);
    }
  };
  

  function ProgressFuture(cancelCallback)
  {
    Future.call(this, cancelCallback);
    this._onProgress = [];
    this.currentProgress = 0;
  }
  ProgressFuture.prototype = Object.create(Future.prototype);
  ProgressFuture.prototype.constructor = ProgressFuture;
  ProgressFuture.prototype.whenProgress = function (callback)
  {
    this._onProgress.push(callback);
    return this;
  };

}
(vitrium.async));
// script:viewer\io\codecs\utf8-decoder.js
/// <reference path="~/build.html" />

(function (exports, log, _, global) {
	"use strict";
	
	var blobAPISupported = global.Blob && global.FileReader;
	var Utf8JSONDecoder;
	var Utf8Decoder;
	

	Utf8JSONDecoder = function(len)
	{
		Utf8Decoder.call(this, len);
	}
		
	Utf8Decoder = function(len) {
		if (!len)
		{
			len = 1000;
		}
			
			this.tmp_arr = null; 
			this.len = len;
			this.i = 0;
			this.ac = 0;
			this.c1 = 0;
			this.c2 = 0;
			this.c3 = 0;
	}

	if (!!global.ArrayBuffer)
	{
		
				var UDP = Utf8Decoder.prototype;
				UDP.init = 	function (callback) {
					this.tmp_arr = new Array(this.len);
					callback();
				};
				
				UDP.free = function()
				{
					this.tmp_arr = null;
				};
				
				UDP.writeUint8Array = function(arrays, callback)
				{
					if (this.tmp_arr === null)
					{
						return;
					}

					for (var i = 0, len = arrays.length; i < len; ++i)
					{
						this.decodeUTF8(arrays[i]);	
					}
					callback();
				};
				
				UDP.getData = function(callback, onerror)
				{
					callback( this.tmp_arr.join("") );
				};
				
				UDP.decodeUTF8 =function(array) {
					var ch = String.fromCharCode;
					var i = 0;
					var ac = this.ac;
					var c1 = this.c1;
					var c2 = this.c2;
					var c3 = this.c3;
					
					var tmp_arr = this.tmp_arr;
					var len = array.length;
					
					
					for (i = 0; i < len; ++i) 
					{
						if (c1 == 0)
						{
							c1 = array[i];
						}
						else if (c1 > 191 && c2 === 0)
						{
							c2 = array[i];
						}
						else 
						{
							c3 = array[i];
						}
						
						var writeChar = null;
						
						if (c1 < 128) 
						{
							writeChar = c1;
						} 
						else if (c1 > 191 && c1 < 224 && c2 > 0) 
						{
							writeChar = ((c1 & 31) << 6) | (c2 & 63);
						} else if (c3 > 0) {
							writeChar = ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63);
						}
						
						
						if (writeChar)
						{
							c1 = 0;
							c2 = 0;
							c3 = 0;
							tmp_arr[ac++]  = ch(writeChar);				
						}
					}

					this.ac = ac;
					this.c1 = c1;
					this.c2 = c2;
					this.c3 = c3;
				};
					
				_.extend(Utf8JSONDecoder.prototype, UDP);
				Utf8JSONDecoder.prototype.getData = function(callback)
				{
						callback(JSON.parse(this.tmp_arr.join("")));	
				};
				
		}
		else
		{
				var UDP = Utf8Decoder.prototype;
				UDP.init = function(callback) 
				{
					this.tmp_arr = new Array(this.len);
					callback();
				};
				
				UDP.free = function()
				{
					this.tmp_arr = null;
				};
				
				UDP.writeUint8Array = function(arrays, callback) 
				{
					if (this.tmp_arr === null)
					{
						return;
					}
				
					for (var i = 0, len = arrays.length; i < len; ++i)
					{
						this.decodeUTF8(arrays[i]);	
					}
					callback();
				};
				
				UDP.getData = function(callback, onerror) 
				{	
					callback(this.tmp_arr.join(''));
				};
				
				UDP.decodeUTF8 = function(array) {
						var ch = String.fromCharCode;

				var i = 0;
				var ac = this.ac;
				var c1 = this.c1;
				var c2 = this.c2;
				var c3 = this.c3;
				
				var tmp_arr = this.tmp_arr;
				var len = array.length;
				
				
					if (array.readNumber)
					{
						for (i = 0; i < len; ++i) 
						{
							if (c1 == 0)
							{
								c1 =  array.readNumber(1,i);
							}
							else if (c1 > 191 && c2 === 0)
							{
								c2 = array.readNumber(1,i);
							}
							else 
							{
								c3 =array.readNumber(1,i);
							}
							
							var writeChar = null;
							
							if (c1 < 128) 
							{
								writeChar = c1;
							} 
							else if (c1 > 191 && c1 < 224 && c2 > 0) 
							{
								writeChar = ((c1 & 31) << 6) | (c2 & 63);
							} else if (c3 > 0) {
								writeChar = ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63);
							}
							
							
							if (writeChar)
							{
								c1 = 0;
								c2 = 0;
								c3 = 0;
								tmp_arr[ac++]  = ch(writeChar);
								
								/*if (tmp_arr[tmp_arr.length - 1] === "{" && tmp_arr[tmp_arr.length - 2] === "}")
								{
									console.log("wrong!!!");
								}*/
					
							}
						}
					}
					else
					{	
						for (i = 0; i < len; ++i) 
						{
							if (c1 == 0)
							{
								c1 =  array[i];
							}
							else if (c1 > 191 && c2 === 0)
							{
								c2 = array[i];
							}
							else 
							{
								c3 =array[i];
							}
							
							var writeChar = null;
							
							if (c1 < 128) 
							{
								writeChar = c1;
							} 
							else if (c1 > 191 && c1 < 224 && c2 > 0) 
							{
								writeChar = ((c1 & 31) << 6) | (c2 & 63);
							} else if (c3 > 0) {
								writeChar = ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63);
							}
							
							
							if (writeChar)
							{
								c1 = 0;
								c2 = 0;
								c3 = 0;
								tmp_arr[ac++]  = ch(writeChar);
								
								/*if (tmp_arr[tmp_arr.length - 1] === "{" && tmp_arr[tmp_arr.length - 2] === "}")
								{
									console.log("wrong!!!");
								}*/
					
							}
						}
				}

				this.ac = ac;
				this.c1 = c1;
				this.c2 = c2;
				this.c3 = c3;
			};
			
			_.extend(Utf8JSONDecoder.prototype, UDP);
			Utf8JSONDecoder.prototype.getData = function(callback)
			{
				callback(JSON.parse(this.tmp_arr.join('')));
			};	
		}
	
	
	var SimpleUTF8Decoder = Utf8Decoder;
	
	if (blobAPISupported)
	{
		Utf8JSONDecoder = function(len)
		{
			Utf8Decoder.call(this ,length);
		}
		
		Utf8Decoder = function(len) {
			this.parts = null;
		}
		
		Utf8Decoder.prototype = {
			init : function(callback)
			{
				this.parts = [];
				callback();
			},
			free : function()
			{
				this.parts = null;
			},
			writeUint8Array : function(arrays, callback) 
			{
				var parts = this.parts;
				for (var i = 0, len = arrays.length; i < len; ++i)
				{
					parts.push(arrays[i].buffer);	
				}
				callback();
			},
			decodeUTF8 : function(array)
			{
				this.parts.push(array.buffer);	
			},
			getData : function(callback)
			{
				var b = new global.Blob(this.parts, {type : "text/plain"});
				var reader =new global.FileReader();
				
				reader.onload = function()
				{
					callback(this.result);
					this.onload = null;
					this.onerror = null;
					b = null;
					reader = null;
				};
				
				reader.onerror = function()
				{
					callback(null);
					this.onload = null;
					this.onerror = null;
					b = null;
					reader = null;
				};
				
				reader.readAsText(b, "UTF-8");
			}
		}
		
		_.extend(Utf8JSONDecoder.prototype, Utf8Decoder.prototype);
		Utf8JSONDecoder.prototype.getDataSuper = Utf8JSONDecoder.prototype.getData;
		Utf8JSONDecoder.prototype.getData = function(callback)
		{
			this.getDataSuper(function(data){ callback(JSON.parse(data)); });
		};	
		
	}
	
	
	_.extend(exports, {
		Utf8Decoder :  Utf8Decoder,
		Utf8JSONDecoder : Utf8JSONDecoder,
		SimpleUTF8Decoder : SimpleUTF8Decoder
	});	
}
(
vitrium.bin,
vitrium.log,
_, 
__globals__
));
// script:viewer\io\codecs\utf8-codec.js
/// <reference path="~/build.html" />

(function (exports, bin, async, global) {
   "use strict";

   var blobAPISupported = global.Blob && global.FileReader;

   var utf8 = exports.utf8 = { encode: null, decode: null };
   utf8.decode = _decode;
   utf8.encode = blobAPISupported ? _encode_with_blob : _encode_deffered;

   function _decode(bytes)
   {
      var completer = new async.Completer();
      
      var decoder = new bin.Utf8Decoder(bytes.length);

      decoder.init(function () {
         setTimeout(function () {
            decoder.decodeUTF8(bytes);
            decoder.getData(function (str) {
               if (str === null) completer.fail();
               else completer.complete(str);
            })
         }, 0);
      });

      return completer.future;
   }

   _decode.true_async = blobAPISupported;


   function _encode_with_blob(str)
   {      
      var completer = new async.Completer();

      var blob = new Blob([str], { type: "text/plain;charset=UTF-8" });
      var reader = new FileReader();

      reader.onerror = function () {
         completer.fail(reader.error);
      };

      reader.onload = function () {
         completer.complete(new Uint8Array(reader.result))
      };

      reader.readAsArrayBuffer(blob);

      return completer.future;
   }
   _encode_with_blob.true_async = true;

   function _encode_deffered(str)
   {
      return async.callDefered(function () {
         return _encode(str);
      });
   }
   _encode_deffered.true_async = false;

   function _encode(str) {
      var capacity = _count_utf8_bytes(str);
      var result = new Uint8Array(capacity);
      var len = str.length;
      var p = 0;
      var code;
      var i;
      
      for (i = 0; i !== len; ++i) {
         code = str.charCodeAt(i);
         if (code <= 0x7f)
         {
            result[p++] = code;
         }
         else if (code <= 0x7ff)
         {                         // 2 bytes                     
            result[p++] =  0xc0 | (code >>> 6 & 0x1f);
            result[p++] =  0x80 | (code & 0x3f);
         }
         else if (code <= 0xd700 || code >= 0xe000)
         {    
            result[p++] = 0xe0 | (code >>> 12 & 0x0f);
            result[p++] = 0x80 | (code >>> 6 & 0x3f);
            result[p++] = 0x80 | (code & 0x3f);
         }
         else
         {                                            // 4 bytes, surrogate pair
            code = (((code - 0xd800) << 10) | (str.charCodeAt(++i) - 0xdc00)) + 0x10000;
            result[p++] = 0xf0 | (code >>> 18 & 0x07);
            result[p++] = 0x80 | (code >>> 12 & 0x3f);
            result[p++] = 0x80 | (code >>> 6 & 0x3f); 
            result[p++] = 0x80 | (code & 0x3f);
         }
      }
      return result;
   }

   function _count_utf8_bytes(str) {
      var len = str.length;
      var result = 0;
      var code;
      var i;
      
      for (i = 0; i !== len; ++i) {
         code = str.charCodeAt(i);
         if (code <= 0x7f) {
            ++result;
         }
         else if (code <= 0x7ff) {
            result += 2;
         } else if (code <= 0xd700 || code >= 0xe000) {
            result += 3;
         } else {                                            // 4 bytes, surrogate pair
            result += 4;
         }
      }
      return result;
   }
}
(vitrium.codec,
 vitrium.bin,
 vitrium.async,
 __globals__
));

// script:viewer\io\codecs\base64-str-to-arr.js
var global = self || window;
(function(global)
{
   var Base64Binary = {
   _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

   /* will return a  Uint8Array type */
   decodeArrayBuffer: function(input) {
      var bytes = (input.length/4) * 3;
      var ab = new ArrayBuffer(bytes);
      return Base64Binary.decode(input, ab);	
   },

   decode: function(input, arrayBuffer) {
      var _keyStr  = Base64Binary._keyStr;
      //get last chars to see if are valid
      var lkey1 = _keyStr.indexOf(input.charAt(input.length-1));		 
      var lkey2 = _keyStr.indexOf(input.charAt(input.length-2));		 

      var bytes = (input.length/4) * 3;
      if (lkey1 == 64) bytes--; //padding chars, so skip
      if (lkey2 == 64) bytes--; //padding chars, so skip

      var uarray;
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      var j = 0;

      if (arrayBuffer)
         uarray = new Uint8Array(arrayBuffer);
      else
         uarray = new Uint8Array(bytes);

      //input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      for (i=0; i<bytes; i+=3) {	
         //get the 3 octects in 4 ascii chars
         enc1 = _keyStr.indexOf(input.charAt(j++));
         enc2 = _keyStr.indexOf(input.charAt(j++));
         enc3 = _keyStr.indexOf(input.charAt(j++));
         enc4 = _keyStr.indexOf(input.charAt(j++));

         chr1 = (enc1 << 2) | (enc2 >> 4);
         chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
         chr3 = ((enc3 & 3) << 6) | enc4;

         uarray[i] = chr1;			
         if (enc3 != 64) uarray[i+1] = chr2;
         if (enc4 != 64) uarray[i+2] = chr3;
      }
      return uarray;	
   }
   };

   global["Base64Binary"]  = Base64Binary;

}(global));
// script:viewer\io\codecs\base64-codec.js
   /// <reference path="~/build.html" />

(function (exports, async, global) {
   "use strict";
   var blobAPISupported = global.Blob && global.FileReader;
   var atobSupported = !!global.atob;
   var BLOB_TYPE = {type: "application/binary"};

   function _atob_decode(str) {
      return async.callDefered(function () {
         var binary_string = global.atob(str);
         var len = binary_string.length;
         var bytes = new Uint8Array(len);
         for (var i = 0; i !== len; ++i) {
            bytes[i] = binary_string.charCodeAt(i);
         }
         return bytes;
      });
   }
   _atob_decode.true_async = false;

   function _decode(str)
   {
      return async.callDefered(function () {
         return global.Base64Binary.decode(str);
      });
   }

   _decode.true_async = false;


   if (blobAPISupported) {
      
      exports.base64 = (function () {
         var BASE64_SEP = "base64,";
         function _encode(bytes)
         {
            var completer = new async.Completer();
            var blob = new Blob([bytes], BLOB_TYPE);

            var reader = new FileReader();
            reader.onerror = function () {
               completer.fail();
            };

            reader.onload = function () {
               var url = reader.result;

               var idx = url.indexOf(BASE64_SEP);
               if (idx === -1) completer.fail();
               else {
                  var base64Data = url.substring(idx + BASE64_SEP.length, url.length);
                  completer.complete(base64Data);
               }
            };

            reader.readAsDataURL(blob);
            return completer.future;
         }
         _encode.true_async = true;

         return {
            encode : _encode,
            decode : atobSupported ? _atob_decode : _decode
         };
      }());
   }
   else
   {
      exports.base64 = (function () {
         function _encode(bytes)
         {
               var e    = '';
               var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
 
               var byteLength    = bytes.length;
               var byteRemainder = byteLength % 3;
               var mainLength = byteLength - byteRemainder;
 
               var a, b, c, d;
               var chunk;
 
               // Main loop deals with bytes in chunks of 3
               for (var i = 0; i < mainLength; i = i + 3) {
                  // Combine the three bytes into a single integer
                  chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
 
                  // Use bitmasks to extract 6-bit segments from the triplet
                  a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
                  b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
                  c = (chunk & 4032) >> 6;// 4032     = (2^6 - 1) << 6
                  d = chunk & 63;          // 63       = 2^6 - 1
 
                  // Convert the raw binary segments to the appropriate ASCII encoding
                  e += encodings[a] + encodings[b] + encodings[c] + encodings[d];
               }
 
               // Deal with the remaining bytes and padding
               if (byteRemainder == 1) {
                  chunk = bytes[mainLength];
 
                  a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
 
                  // Set the 4 least significant bits to zero
                  b = (chunk & 3) << 4; // 3   = 2^2 - 1
 
                  e += encodings[a] + encodings[b] + '==';
               } else if (byteRemainder == 2) {
                  chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
 
                  a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
                  b = (chunk & 1008) >> 4;// 1008  = (2^6 - 1) << 4
 
                  // Set the 2 least significant bits to zero
                  c = (chunk & 15) << 2; // 15    = 2^4 - 1
 
                  e += encodings[a] + encodings[b] + encodings[c] + '=';
               }
  
               return e;
         }

         function _encode_deffered (bytes) { return async.callDefered(function () { return _encode(bytes); }); }
         _encode_deffered.true_async = false;

         return {
            encode: _encode_deffered,
            decode: atobSupported ? _atob_decode : _decode
         }
      }());
   }  
}
(vitrium.codec,
vitrium.async,
__globals__));

// script:viewer\io\crypto\aes.js
/*
CryptoJS v3.1
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r = l.WordArray = t.extend({
   init: function (a, c) { a = this.words = a || []; this.sigBytes = c != p ? c : 4 * a.length }, toString: function (a) { return (a || v).stringify(this) }, concat: function (a) {
      var c = this.words, e = a.words, j = this.sigBytes; a = a.sigBytes; this.clamp(); if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; this.sigBytes += a; return this
   }, clamp: function () {
      var a = this.words, c = this.sigBytes; a[c >>> 2] &= 4294967295 <<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

// script:viewer\io\crypto\aes-cbc-sync.js
/// <reference path="~/build.html" />

(function (exports,crypto, utils, CryptoJS, globals) {
   "use strict";

   exports.AesCbcSync = AesCbcSync;
   
   if (globals.Uint8Array) {
      exports.createByteArray = function (len) {
         return new Uint8Array(len);
      };
   }
   else
   {
      exports.createByteArray = function (len) {
         var arr = new Array(len);
         for (var i = 0; i !== len; ++i)
            arr[i] = 0;

         arr.set = function (array, offset) {
            var _len = Math.min(Math.max(this.length-offset, 0), array.length);
            for (var i = 0; i !== _len; ++i)
               this[i+offset] = array[i];
         };

         return arr;
      };
   }

   

   function AesCbcSync(settings, key)
   {
      ///<param name="settings" type="vitrium.crypto.AesCbcAlgorithmSettings" />
      ///<param name="key" type="Uint8Array" />
      this._iv = utils.u8array.parse(settings.iv);
      this._key = utils.u8array.parse(key);
   }

   AesCbcSync.prototype.encrypt = function (bytes) {
      ///<param name="bytes" type="Uint8Array" />
      var encryptor = CryptoJS.algo.AES.createEncryptor(this._key,
      {
         iv: this._iv,
         mode: CryptoJS.mode.CBC,
         padding: CryptoJS.pad.Pkcs7
      });

      return this._process(bytes, encryptor);
   };

   AesCbcSync.prototype.decrypt = function (bytes) {
      ///<param name="bytes" type="Uint8Array" />
      var decryptor = CryptoJS.algo.AES.createDecryptor(this._key,
      {
         iv: this._iv,
         mode: CryptoJS.mode.CBC,
         padding: CryptoJS.pad.Pkcs7
      });

      return this._process(bytes, decryptor);
   };

   AesCbcSync.prototype._process = function (bytes, stream) {
      var words = utils.u8array.parse(bytes);
      var encryptedChunk = utils.u8array.stringify(stream.process(words));

      var lastChunkW = stream.finalize();
      if (lastChunkW.sigBytes > 0) {
         var lastChunk = utils.u8array.stringify(lastChunkW);

         var tmp = crypto.createByteArray(encryptedChunk.length + lastChunk.length);
         tmp.set(encryptedChunk, 0);
         tmp.set(lastChunk, encryptedChunk.length);

         encryptedChunk = tmp;
      }

      return encryptedChunk;
   };
}
(vitrium.crypto,
vitrium.crypto,
vitrium.utils,
 CryptoJS,
  __globals__
));

// script:viewer\io\crypto\aes-string-filters.js
/// <reference path="~/build.html" />

(function (exports, crypto, async, codec, _) {
   "use strict";

   var AES_CBC = null;
   _.extend(exports, {
      aes: {
         init: function (data) {
            AES_CBC = new crypto.AesCbcSync(data.settings, data.key);
         }
      },
      aes_encrypt: {
         process: function (data) {
            return async.callDefered(function () {
               return AES_CBC.encrypt(data);
            });
         }
      },
      aes_decrypt: {
         process: function (data) {
            return async.callDefered(function () {
               return AES_CBC.decrypt(data);
            });
         }
      },
      utf8_decode: {
         process: codec.utf8.decode
      },
      utf8_encode: {
         process: codec.utf8.encode
      },
      b64_encode: {
         process: codec.base64.encode
      },
      b64_decode: {
         process: codec.base64.decode
      }
   });
}
(vitrium.crypto.filters,
vitrium.crypto,
vitrium.async,
vitrium.codec,
_));

// script:viewer\io\crypto\crypto-typed-array-conversion.js
(function(exports)
{
	"use strict";

	exports.u8array = {
        /**
         * Converts a word array to a Uint8Array.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {Uint8Array} The Uint8Array.
         *
         * @static
         *
         * @example
         *
         *     var u8arr = utils.u8array.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
			var u8;
			if (typeof Uint8Array === "function" || typeof Uint8Array === "object")
			{
				u8 = new Uint8Array(sigBytes); 
			}
			else
			{
				
				u8 = new Array(sigBytes);
			}
             
            for (var i = 0; i < sigBytes; i++) {
                var b = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                u8[i]=b;
            }
	
			
			
            return u8;
        },

        /**
         * Converts a Uint8Array to a word array.
         *
         * @param {string} u8Str The Uint8Array.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = utils.u8array.parse(u8arr);
         */
        parse: function (u8arr, expllen) {
            // Shortcut
            var len = u8arr.length;
			if (typeof expllen === "number")
			{
				len = expllen;
			}
			
			if (typeof Uint8Array === "function" || typeof Uint8Array === "object" || _.isArray(u8arr))
			{
				// Convert
				var words = [];
				for (var i = 0; i < len; i++) {
					words[i >>> 2] |= (u8arr[i] & 0xff) << (24 - (i % 4) * 8);
				}
				
				//var words = new Uint32Array(u8arr.buffer);

				return CryptoJS.lib.WordArray.create(words, len);
			}
			else
			{
				var words = [];
				for (var i = 0; i < len; i++) {
					words[i >>> 2] |= (u8arr.readByteAt(i) & 0xff) << (24 - (i % 4) * 8);
				}

				return CryptoJS.lib.WordArray.create(words, len);
			}
        }
    };
	
}(vitrium.utils));
// script:viewer/io/aes-string-worker.js
//

var CMD_INIT = 0x0001;
var CMD_INITIALIZED = 0x0002;
var CMD_JOB_MSG = 0x0003;
var CMD_TERMINATE = 0x0004;
var CMD_TERMINATED = 0x0005;

var OP_ENCRYPT = 0;
var OP_DECRYPT = 1;

var DECRYPT_FILTER_CHAIN = ["b64_decode", "aes_decrypt", "utf8_decode"];
var ENCRYPT_FILTER_CHAIN = ["utf8_encode", "aes_encrypt", "b64_encode"];

(function (self, available_filters) {
   "use strict";

   var canceled = [];
   
   self.onmessage = function (event) {

      var msg = event.data;
      var id = msg.id;

      switch(msg.cmd)
      {
         case CMD_JOB_MSG:
            var cmd_msg = msg.data;
            if (cmd_msg.operation === OP_ENCRYPT)
            {
               filter(id, cmd_msg.data, ENCRYPT_FILTER_CHAIN);
            }
            else
            {
               filter(id, cmd_msg.data, DECRYPT_FILTER_CHAIN);
            }
         break;
         case CMD_TERMINATE:
            canceled.push(id);
            response(id, CMD_TERMINATED);
            break;

         case CMD_INIT:
            available_filters.aes.init(msg.data);
            response(id, CMD_INITIALIZED);
            break;
         default: break;
      }
};

   function response(id, cmd)
   {
      self.postMessage({ id : id , cmd : cmd });
   }

   function responseWithData(id, cmd, data)
   {
      self.postMessage({ id : id, cmd : cmd, data : data });
   }

   function filter(id, data, filters)
   {

      var i = 0;
      var len = filters.length;
      
      step(data);
      
      function step(data) {
         if (!breakWhenCanceled(id)) {
            if (i === len) {
               responseWithData(id, CMD_JOB_MSG, { success: true, data: data });
               response(id, CMD_TERMINATED);
            }
            else {
               var filter = available_filters[filters[i++]];
               filter
                  .process(data)
                  .then(step)
                  .catchError(error);
            }
         }

         function error(e)
         {

            var message = "Filter (" + filters[i-1]+ "["+(i-1)+"]) failed: \n";
            message += e ? e.message : null;
            if (e && e.stack) {
               message += "\n" + e.stack
            }

            responseWithData(id, CMD_JOB_MSG, { success: false, data: message});
            response(id, CMD_TERMINATED);
         }
      }
   }

   function breakWhenCanceled(id) {
      var canceledIdx = canceled.indexOf(id);
      if (canceledIdx === -1) {
         return false;
      }
      else {
         canceled.splice(canceledIdx, 1);
         return true;
      }
   }
}(__globals__, vitrium.crypto.filters));


}.call(this, this));
    