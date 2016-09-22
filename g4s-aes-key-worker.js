/** @preserve  version: 1.1.405
  build time: 2016-09-22T15:39:36.585000
*/
(function(__globals__)
{
  "use strict";

var vitrium = {bin:{},crypto:{},g4s:{},utils:{}};
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

// script:viewer\io\binary.js
(function (exports, _, global) {
	"use strict";
	
	// if they are supported it safes lot of memory
	var isTypedArraysSupported = _.isFunction(global.ArrayBuffer) || _.isObject(global.ArrayBuffer);
	var EXTENSION_MATCHER = /^x-(.+)/;

	_.extend(exports, {
		DataBuffer : DataBuffer, 
		DataBufferView : DataBufferView,
		loadData : loadData,
		createBinaryStructure : createBinaryStructure,
		base64_encode: base64_encode,
	   appendToUrl: appendToUrl,
	   appendEncodedToUrl: appendEncodedToUrl,
      EXTENSION_MATCHER: EXTENSION_MATCHER
	});

	
	// this class partially implements https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays/DataView
	function DataBufferView(buffer, offset, length)
	{	
		if (length < 0)
			throw new Error("Error: length must be greater than zero!");
			
		if (buffer.length - offset < length)
			throw new Error("Error: offset+length must be less or equal of the original buffer size");
			
		this.buffer = buffer;
		this.offset = offset;
		this.length = length;
		
		
		var endpos = offset + length;
		
		function checkPosition(pos)
		{
			if (pos >= endpos || pos < offset)
			{
				throw new Error("Error: index out of bounds");
			}
		}
		
		this.getUint8 = function(byteOffset)
		{
			var pos = byteOffset + offset;
			checkPosition(pos);
			
			return buffer.readNumber(1, pos);
		};
		
		this.getUint16 = function(byteOffset, littleEndian)
		{
			var pos = byteOffset + offset;
			checkPosition(pos);
			
			if (littleEndian)
			{
				return buffer.readNumberLittleEndian(2, pos);
			}
			else
			{
				return buffer.readNumberBigEndian(2, pos);
			}
		};
		
		this.getUint32 = function(byteOffset, littleEndian)
		{
			var pos = byteOffset + offset;
			checkPosition(pos);
			
			if (littleEndian)
			{
				return buffer.readNumberLittleEndian(4, pos);
			}
			else
			{
				return buffer.readNumberBigEndian(4, pos);
			}
		};
		
		this.subarray = function(begin, end)
		{
			if (arguments.length < 2)
			{
				end = length;
			}
			
			if (end > length)
			{
				end = length;
			}
						
			var pos = begin + offset;
			checkPosition(pos);
			
			return buffer.subarray(pos, end);
		};
		
		this.subview = function(begin, end)
		{
			if (arguments.length < 2)
			{
				end = length;
			}
			else
			{
				end = end - begin;
			}
			
			return new DataBufferView(this, begin, end);
		};
	
		
		//methods for DataBuffer interface
		
		this.readNumber = function(numBytes, byteOffset)
		{
			if (arguments.length < 2)
			{
				byteOffset = 0;
			}
			var pos = byteOffset + offset;
			//checkPosition(pos);
			return buffer.readNumber(numBytes, pos);
		};

		this.readByteAt = function(byteOffset)
		{
			if (arguments.length < 1)
			{
				byteOffset = 0;
			}
			var pos = byteOffset + offset;
			checkPosition(pos);
			
			return buffer.readByteAt(pos);
		};
		
		this.readNumberLittleEndian = function(numBytes, byteOffset)
		{
			if (arguments.length < 2)
			{
				byteOffset = 0;
			}
			
			var pos = byteOffset + offset;
			checkPosition(pos);
			return buffer.readNumberLittleEndian(numBytes, pos);
		};
		
		this.readNumberBigEndian = function(numBytes, byteOffset)
		{
			if (arguments.length < 2)
			{
				byteOffset = 0;
			}
			
			var pos = byteOffset + offset;
			checkPosition(pos);
			return buffer.readNumberBigEndian(numBytes, pos);
		};
	
			
		this.writeNumberLittleEndian = function (numBytes, num, byteOffset)
		{
			if (arguments.length < 2)
			{
				byteOffset = 0;
			}
			
			var pos = byteOffset + offset;
			checkPosition(pos);
			buffer.writeNumberLittleEndian(numBytes,num, pos);
		};
		
		this.writeNumberBigEndian = function (numBytes, num, byteOffset)
		{
			if (arguments.length < 2)
			{
				byteOffset = 0;
			}
			
			var pos = byteOffset + offset;
			checkPosition(pos);
			buffer.writeNumberBigEndian(numBytes, num, pos);
		};
		
		this.writeDataBuffer = function(dataBufer, destPos, srcOffset, srcLen)
		{
			var pos = offset + destPos;
			checkPosition(pos);
			
			
			
			buffer.writeDataBuffer(dataBuffer, pos, srcOffset, srcLen);
		};
	}
	
	
	function DataBuffer(initialSize)
	{
		var _exception = {
			NotLoaded : 1,
			EOFReached	: 2,
			MustDefined : 3
		};
		


		var fileSize = -1;
		var fileContents;
		
		
		

		this.getFileContents = function(){
			checkIfLoaded();
			
			var contents = [];
			for(var i = 0; i < fileSize; i++) {
				contents.push(this.readByteAt(i))
			}
			return contents;
		}
		
		this.getFileSize = function(){
			return fileSize;
		}





		
		
		// reads little endian order
		this.readNumber = function(iNumBytes, iFrom){
			checkIfLoaded();
			
			iNumBytes = iNumBytes || 1;

			
			
		

			var result = 0;
			for(var i=iFrom + iNumBytes; i>iFrom; --i){
				result = result * 256 + this.readByteAt(i-1);
			}

			return result;
		};
		
		this.readNumberLittleEndian = this.readNumber;
		
		this.readNumberBigEndian = function(iNumBytes, iFrom){
			checkIfLoaded();
			
			iNumBytes = iNumBytes || 1;

			
			var iTo = iFrom + iNumBytes;
			

			var result = 0;
			for(var i=iFrom; i<iTo; ++i){
				result = result * 256 + this.readByteAt(i);
			}

			return result;
		};
		
		
		this.readString = function(iNumChars, iFrom){
			checkIfLoaded();
			
			iNumChars = iNumChars || 1;
		
			var result = "";
			var tmpTo = iFrom + iNumChars;
			for(var i=iFrom; i<tmpTo; i++){
				result += String.fromCharCode(this.readNumber(1));
			}

			return result;
		};

		this.readUnicodeString = function(iNumChars, iFrom){
			checkIfLoaded();
			
			iNumChars = iNumChars || 1;


			var result = "";
			var tmpTo = iFrom + iNumChars*2;
			for(var i=iFrom; i<tmpTo; i+=2){
				result += String.fromCharCode(this.readNumber(2));
			}

			return result;
		};
		

		

		
		
		this.attachData = function(data)
		{
			if (_.isString(data))
			{
				fileContents = data;
				fileSize = fileContents.length;
				this.readByteAt = readByteAtFromString;
			}
			else if (data)
			{
				fileContents = data;
				fileSize = fileContents.length;
				this.readByteAt = readByteAtFromArray;
			}
			else
			{
				throwException(_exception.MustDefined);
			}
			
			this.length = fileSize;
			
			return  this;
		};
		
		this.readByteAt = function()
		{
			//this throws an exception
			checkIfLoaded();
		};
		
		function readByteAtFromArray(i)
		{
			return fileContents[i];
		}
		
		function readByteAtFromString(i)
		{
			return fileContents.charCodeAt(i) & 0xff;
		}
		
		function checkIfLoaded()
		{
			if (fileSize < 0)
				throwException(_exception.NotLoaded);
		}

		function throwException(errorCode){
			switch(errorCode){
				case _exception.EOFReached:
					throw new Error("Error: EOF reached");
					break;
				case _exception.NotLoaded:
					throw new Error("Error: Data must be loaded first!");
					break;
				case _exception.MustDefined:
					throw new Error("Error: Arugment must be an array like object or string");
					break;
			}
		}
		
				// functions bellow are added to implement interface of zip library
		this.init = function(callback, onerror) {
			this.size = fileSize;
			callback();
		};
		
		this.writeByte = function(num, pos)
		{
			if (num < 0)
			{
				num = 0xFF + num + 1;
			}
			fileContents[pos] = num;
		};
		
		this.getArray = function()
		{
			return fileContents;
		};
		
		this.writeNumberBigEndian = function (numlen, num, pos)
		{
			if (Math.pow(2,numlen*8) <= num)
			{
				throw new Error("Number out of range!");
			}
			
			var shift = (numlen * 8)-8;
			var rest = num;
			
			for(var i=0; i < numlen; ++i)
			{
				var byteVal = rest >> shift;
				rest = ~(byteVal<<shift) & rest;
				this.writeByte(byteVal, pos + i);
				shift -= 8;
			}	
		};
		
		this.writeNumberLittleEndian = function (numlen, num, pos)
		{
			if (Math.pow(2,numlen*8) <= num)
			{
				throw new Error("Number out of range!");
			}
			
			var shift = (numlen * 8)-8;
			var rest = num;
			
			var cPos = pos+numlen - 1;
			for(var i=0; i < numlen; ++i)
			{
				var byteVal = rest >> shift;
				rest = ~(byteVal<<shift) & rest;
				this.writeByte(byteVal, cPos - i);
				shift -= 8;
			}	
		};
		
		
		
		this.cumulativeOffset = function()
		{
			return 0;
		};
		
		
		
		if (isTypedArraysSupported)
		{
			this.writeDataBuffer = function(srcDataBufer, destPos, srcOffset, srcLen)
			{	
				if (fileContents.slice)
				{
					for (var i = 0; i < srcLen; ++i)
					{
						this.writeByte(srcDataBufer.readByteAt(i+srcOffset), i+destPos);
					}
				}
				else
				{		
					// uint8 array optimization
					var realArray = srcDataBufer.subarray(srcOffset, srcOffset+srcLen);
					fileContents.set(realArray, destPos);
				}
			};
		
			this.getOriginalData = function()
			{
				return fileContents;
			};
	
			this.subarray = function(index, end)
			{
				if (!end && end !== 0)
				{
					length = fileContents.length;
				}
				
				if (!index)
				{
					index = 0;
				}
				
				if (fileContents.subarray)
				{
					return fileContents.subarray(index, end);
				}
				else
				{
					return new Uint8Array(fileContents.slice(index, end));
				}
			};

			this.readUint8Array = function(index, length, callback, onerror)
			{
			/*	try
				{*/
					checkIfLoaded();
					callback(new Uint8Array(fileContents.subarray(index, index + length)));	
				/*}
				catch(e)
				{
					if (_.isFunction(onerror)) onerror(e);
				}*/
			};
		}
		else
		{
			this.getOriginalData = function()
			{
				// old firefox
				if (_.isString(fileContents))
				{
					return this.getFileContents();
				}
				else
				{
					return fileContents;
				}
			};
			
			this.writeDataBuffer = function(srcDataBufer, destPos, srcOffset, srcLen)
			{	
				if (fileContents.slice)
				{
					for (var i = 0; i < srcLen; ++i)
					{
						this.writeByte(srcDataBufer.readByteAt(i+srcOffset), i+destPos);
					}
				}
			}
			
			this.subarray = function(offset, end)
			{
				if (!end && end !== 0)
				{
					end = fileContents.end;
				}
				
				if (!offset)
				{
					offset = 0;
				}
				
				return this.getOriginalData().slice(offset, end);
			};
			
			this.readUint8Array = function(index, length, callback, onerror)
			{
			/*	try
				{*/
					checkIfLoaded();
					callback(new DataBufferView(this, index, length));
					
				/*}
				catch(e)
				{
					if (_.isFunction(onerror)) onerror(e);
				}*/
			};
		}
		
		
		if (initialSize)
		{
			if (isTypedArraysSupported)
			{
				this.attachData(new Uint8Array(initialSize));
			}
			else
			{
				var array = new Array(initialSize);
				for (var i = 0; i < initialSize; ++i)
				{
					array[i] = 0;
				}
				
				this.attachData(array);
			}
		}
	}
	
	function XHRWraper(xhr)
	{
		this.xhr = xhr;
	}
	
	XHRWraper.prototype.abort = function()
	{
		var none = function(){};
		var xhr = this.xhr;
		xhr.onreadystatechange = none;
		xhr.onload = none;
		xhr.ontimeout = none;
		xhr.abort();
	};
	
	function loadData(options)
	{
		var url = options.url;
		var method = options.method || "GET";
		var success = options.success || function(){};
		var failed = options.error || function(){};
		var headers = options.headers || [];
		
		if (_.isFunction(url))
		{
			url = url();
		}
		
		if (!_.isString(url))
		{
			throw new Error("Error: url must be a string or function that returns a string");		
		}
		
		if (!_.isString(method))
		{
			throw new Error("Error: method must be a string");
		}
		
		if (!_.isFunction(success))
		{
			throw new Error("Error: success must be a function");
		}
		
		if (!_.isFunction(failed))
		{
			throw new Error("Error: error must be a function");
		}
		
		var xhr = new XMLHttpRequest();
		var headersCount = headers.length;

		for (var i = 0; i < headersCount; ++i) {
		   var v = headers[i];
		   if (v[0] === "Range")
		   {
		      url = appendEncodedToUrl(url, v[1]);
		   }
		   else if (EXTENSION_MATCHER.test(v[0]))
		   {
		      var parts = v[0].split(EXTENSION_MATCHER);
		      url = appendToUrl(url, parts[1].replace(/-/g,''), v[1]);
		   }
		}

		xhr.open(method, url, true);
      		
		for (var i = 0; i < headersCount; ++i) {
		   var v = headers[i];
		   xhr.setRequestHeader(v[0], v[1]);
		}

		if (isTypedArraysSupported)
		{	
			xhr.responseType = 'arraybuffer';
			xhr.onload = function(e) {
			  var status = this.status;
			  if (status >= 200 && status < 300 || status === 304) {
				var response = this.response;
				if (response)
				{
					var uInt8Array = new Uint8Array(response); 
					success(uInt8Array, this);
				}
				else
				{
					success(null, this);
				}
			  }
			  else
			  {
				failed(this.status, this);
			  }
			  this.onload = null;
			  this.ontimeout = null;
			};
			
			xhr.onerror = function (e)
			{
				failed(this.status);
			};
		}
		else
		{			
			if (xhr.overrideMimeType)
				xhr.overrideMimeType("text/plain; charset=x-user-defined");
				
			xhr.onreadystatechange = function(e) {
				
				if (this.readyState === 4)
				{	
					var status = this.status;
					if (status >= 200 && status < 300 || status === 304)
					{
						var data;
						if (this.overrideMimeType || options.directDecode) {
							data = this.responseText; // this should be a byte buffer
							if (!data)
							{
								data = null;
							}
						}
						else
						{
							var body = xhr.responseBody; //body is VBArray
							//IE way
							data = body.toArray();
							
							
							if (!data)
							{
								data = null;
							}
						}
						success(data, this);
					}
					else
					{
						failed(this.status, this);
					}
					
					this.onreadystatechange = null;
					this.ontimeout = null;
				}	
			};
		}

		xhr.ontimeout = function () {
		   failed(this.status, this);
		};

		xhr.send(null);
		
		return new XHRWraper(xhr);
	}
	
	function base64_encode (data) {
	// based on http://kevin.vanzonneveld.net
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		ac = 0,
		enc = "";


		if (!data)
			return data;

		var dlen = data.length;
	
		var tmp_arr = new Array(dlen);
		
		do {
			o1 = data[i++] //data.charCodeAt(i++);
			o2 = data[i++]; //data.charCodeAt(i++)
			o3 = data[i++]; //data.charCodeAt(i++)

			bits = o1 << 16 | o2 << 8 | o3;

			h1 = bits >> 18 & 0x3f;
			h2 = bits >> 12 & 0x3f;
			h3 = bits >> 6 & 0x3f;
			h4 = bits & 0x3f;

			// use hexets to index into b64, and append result to encoded string
			tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		} while (i < dlen);

		enc = tmp_arr.join('');
		var r = dlen % 3;
		return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
	}
	
	function appendEncodedToUrl(url, value)
	{
	   if (url.indexOf("?") === -1)
	   {
	      url += "?";
	   }
	   else
	   {
	      url += "&";
	   }
	   url += value;
	   return url;
	}

	function appendToUrl(url, name, value)
	{
	   return appendEncodedToUrl(url, name + "=" + encodeURIComponent(value));
	}


	
	function createBinaryStructure(littleEndian, atributes)
	{
		var Structure = function (buffer)
		{
			this.buffer = buffer;
		};
		
		var declare;
		if (littleEndian)
		{
			declare = function(attr, cOffset)
			{
				return function(num)
				{
						if (arguments.length == 0)
						{
							return this.buffer.readNumberLittleEndian(attr[1],cOffset);
						}
						else
						{
							this.buffer.writeNumberLittleEndian(attr[1], num, cOffset);
						}	
				};
			};
		}
		else
		{
			declare = function(attr, cOffset)
			{
				return function(num)
				{
						if (arguments.length == 0)
						{
							return this.buffer.readNumberBigEndian(attr[1],cOffset);
						}
						else
						{
							this.buffer.writeNumberBigEndian(attr[1], num, cOffset);
						}	
				};
			};		
		}
		
		var result = {};
		var offset = 0;
		for (var i = 0; i < atributes.length; ++i)
		{
			var attr = atributes[i];
			result[attr[0]] = declare(attr, offset);
			offset += attr[1];
		}
				
		result.__size_of = function()
		{
			return offset;
		};
		
		result._ref_in_array = function(idx)
		{
			return new Structure(new DataBufferView(this.buffer, offset*idx, this.buffer.length - (offset*idx)));	
		};
		
		_.extend(Structure.prototype, result);
		
		return Structure;
	}
}(
vitrium.bin,
_,
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

// script:viewer\io\crypto\vitrium-pbkdf2.js
(function(exports, utils, CryptoJS)
{
  "use strict";
  
	exports.Sha1 = Sha1;
	exports.HMACSha1 = HMACSha1;
	exports.PBKDF2 = PBKDF2;
	exports.calcKeyHash = calcKeyHash;

//
	function Sha1()
	{
		this.count = 0;
		this.hash = new Array(5);
		this.wbuf = new Array(16);
		this.tmp = new Array(80);
		this.reset();
	}
	
	var sha1p = Sha1.prototype;
	sha1p.reset = function()
	{				
		var h = this.hash;
		h[0] = 0x67452301;
		h[1] = 0xefcdab89;
		h[2] = 0x98badcfe;
		h[3] = 0x10325476;
		h[4] = 0xc3d2e1f0;
		
		this.count = 0;
		
		var w = this.wbuf; 
		w[0] = w[1] = w[2] = w[3] = w[4] = w[5] = w[6] = w[7] = w[8] = w[9] = w[10] = w[11] = w[12] = w[13] = w[14] = w[15] = 0;	
	};

	sha1p.updateData = function(data, len)
	{
		var c0 = this.count;
		
		var pos = c0 & 63;
		var space = 64 - pos;
		
		this.count += len;
			
		
		var sp = 0;
		var wbuf = this.wbuf;
		var h = this.hash;
		var tmp =this.tmp;
		
		//console.log("update data", data, len);
		
		while(len >= space)     /* tranfer whole blocks if possible  */
		{
			memcpy(wbuf, pos, data, sp, space);
			sp += space; len -= space; space = 64; pos = 0;
			sha1_compile(h, wbuf, tmp);
		}
		
		//console.log("update data end", data, pos, sp, len);
		memcpy(wbuf, pos, data, sp, len);	
		//console.log("wbuf", wbuf);
		return this;
	};
	
	// crypto js interface
	sha1p.update = function(buffer)
	{
		this.updateData(buffer.words, buffer.sigBytes);
		return this;
	};
	
	sha1p.finalize = function(buffer)
	{
		if (buffer)
		{
			this.update(buffer);
		}
		
		return {
			words: this.flush(),
			sigBytes: 20
			};
	};
	

	var mask = [0x00000000, 0xff000000, 0xffff0000, 0xffffff00 ];

	sha1p.flush = function()
	{
		//console.log("flush");
		var m = mask;
		var count = this.count;
		var pos =  this.count & 63;
		
        // Add padding
		var wbuf = this.wbuf;
		var h = this.hash;
		
		var nBitsTotal = 8 * count;
		var nBitsLeft = 8 * pos;
		
		/*var tmp = wbuf[pos >>> 2] ;
		console.log(pos, pos%4);
	
		var a = (wbuf[pos >>> 2] >>> 24) & 0xff;
		var b = (wbuf[pos >>> 2] >>> 16) & 0xff;
		var c = (wbuf[pos >>> 2] >>> 8) & 0xff;
		var d = (wbuf[pos >>> 2]) & 0xff;
		
		console.log(a.toString(16), b.toString(16), c.toString(16), d.toString(16));
		
		var a = (wbuf[pos >>> 2] >>> 24) & 0xff;
		var b = (wbuf[pos >>> 2] >>> 16) & 0xff;
		var c = (wbuf[pos >>> 2] >>> 8) & 0xff;
		var d = (wbuf[pos >>> 2]) & 0xff;
		
		console.log(a.toString(16), b.toString(16), c.toString(16), d.toString(16));
		*/
		
		wbuf[pos >>> 2] = (wbuf[pos >>> 2] & m[pos&3])| 0x80 << (24 - (pos % 4) *8);		
		var tmp = this.tmp;
		if(pos > 55) // 64 - 9)
		{
			if(pos < 60) wbuf[15] = 0;
			sha1_compile(h, wbuf, tmp);		
			pos = 0;
		}
		else    /* compute a word index for the empty buffer positions  */
			pos = (pos >> 2) + 1;
			
		while(pos < 14) /* and zero pad all but last two positions        */
			wbuf[pos++] = 0;
		     
		
		
		
        wbuf[14] = Math.floor(nBitsTotal / 0x100000000);
        wbuf[15] = nBitsTotal;
        sha1_compile(h, wbuf, tmp);	

		//console.log(CryptoJS.enc.Hex.stringify({ words: h, sigBytes: 20 }));
		return h;
	};
	
	function sha1_compile(H, M, W)
	{

			var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];

			var i = 0;
			for (; i < 16; ++i) {          
                W[i] = M[i] | 0; 
                var t = (((a << 5) | (a >>> 27)) + e + W[i]) +  (((b & c) | (~b & d)) + 0x5a827999);
               
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }
			
			for (; i < 20; ++i) {          
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = (n << 1) | (n >>> 31);
				
                var t = (((a << 5) | (a >>> 27)) + e + W[i]) +  (((b & c) | (~b & d)) + 0x5a827999);
               
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }
			
			for (; i < 40; ++i) {          
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = (n << 1) | (n >>> 31);
				
                var t = (((a << 5) | (a >>> 27)) + e + W[i]) +  ((b ^ c ^ d) + 0x6ed9eba1);
               
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }
			
			for (; i < 60; ++i) {          
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = (n << 1) | (n >>> 31);
				
                var t = (((a << 5) | (a >>> 27)) + e + W[i]) + (((b & c) | (b & d) | (c & d)) - 0x70e44324);
               
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }
			
			for (; i < 80; ++i) {          
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = (n << 1) | (n >>> 31);
				
                var t = (((a << 5) | (a >>> 27)) + e + W[i]) + ((b ^ c ^ d) - 0x359d3e2a);
               
                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }
			
            // Computation
			
            /*for (var i = 0; i < 80; ++i) {
                if (i < 16) {
                    W[i] = M[i] | 0;
                } else {
                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                    W[i] = (n << 1) | (n >>> 31);
                }

                var t = ((a << 5) | (a >>> 27)) + e + W[i];
                if (i < 20) {
                    t += ((b & c) | (~b & d)) + 0x5a827999;
                } else if (i < 40) {
                    t += (b ^ c ^ d) + 0x6ed9eba1;
                } else if (i < 60) {
                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
                } else  {
                    t += (b ^ c ^ d) - 0x359d3e2a;
                }

                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }*/

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
			
			//console.log("v step", CryptoJS.enc.Hex.stringify({ words : H, sigBytes: 20}), M);
	}
	
	function b2word(word, pos, b)
	{
		var b0 = (word >>> 24) & 0xff;
		var b1 = (word >>> 16) & 0xff;
		var b2 = (word >>> 8) & 0xff;
		var b3 = word & 0xff;
		
		switch(pos)
		{
			case 0:
				b0 = b;
			break;
			case 1:
				b1 = b;
			break;
			case 2:
				b2 = b;
			break;
			case 3:
				b3 = b;
			break;
			default:
				throw new Error("out of index: "+pos);
			break;
		};
		
		return (b0 << 24) | (b1 << 16) | (b2 << 8) | b3;
	}
	
	function memcpy(thisWords, thisSigBytes, thatWords, offset, thatSigBytes)
	{
		thisWords[thisSigBytes >>> 2] &= 0xffffffff << (32 - (thisSigBytes % 4) * 8);
		//thisSigBytes = Math.ceil(thisSigBytes / 4);
		
		// Concat
		if (thisSigBytes % 4 || offset % 4) {
			
			//var byteOffset = offset % 4;
			// Copy one byte at a time
			
			var bidx;
			var bVal;
			var dbidx;
			var dwidx;
			
			for (var i = 0; i < thatSigBytes; ++i) 
			{
				bidx = offset +i;
				bVal = (thatWords[bidx >>> 2] >>> (24 - (bidx % 4) * 8)) & 0xff;
				dbidx = (thisSigBytes + i);
				dwidx = dbidx >>> 2;
				thisWords[dwidx] = b2word(thisWords[dwidx], dbidx % 4, bVal);
			}
		} 
		else 
		{		
			var uncompletdWordOffset = thatSigBytes%4;
			var lastWholeWord = thatSigBytes - uncompletdWordOffset;
			// Copy one word at a time
			
			var i;
			for ( i = 0; i < lastWholeWord; i += 4) {	
				thisWords[(thisSigBytes + i) >>> 2] = thatWords[(offset + i) >>> 2];	
			}
			
			if (uncompletdWordOffset > 0)
			{
				var lastWord = thisWords[(thisSigBytes + i) >>> 2];
				var srcWord = thatWords[(offset + i) >>> 2];
				switch(uncompletdWordOffset)
				{					
					case 3:
						lastWord = b2word(lastWord, 2, (srcWord >>> 8)& 0xff);
					case 2:
						lastWord = b2word(lastWord, 1, (srcWord >>> 16)& 0xff);
					case 1:
						lastWord = b2word(lastWord, 0, (srcWord >>> 24)& 0xff);
					break;
				}
				
				thisWords[(thisSigBytes + i) >>> 2] = lastWord;
			}
		} 
		  
		return thisSigBytes + thatSigBytes;
	}
	
	function clamp(words, sigBytes)
	{
		words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
		sigBytes = Math.ceil(sigBytes / 4);
		return sigBytes;
	}
	
	/**
		HMAC - SHA1 
		arguments: key in words
	*/
	function HMACSha1(key)
	{
		var h = this.hasher = new Sha1();
		var hasherBlockSize = 16;
        var hasherBlockSizeBytes = hasherBlockSize * 4;
		this.tmp =  new Array(5);
		
		if (key.sigBytes > hasherBlockSizeBytes) 
		{
			key = h.finalize(key);
		}
		
		//key.sigBytes = clamp(key.words, key.sigBytes);
		
		var oKey = this._oKey = key.words.slice(0);
        var iKey = this._iKey = key.words.slice(0);

            // XOR keys with pad constants
        for (var i = 0; i < hasherBlockSize; i++) {
            oKey[i] ^= 0x5c5c5c5c;
            iKey[i] ^= 0x36363636;
        }
		
        this.reset();
	}
	
	var hmacp = HMACSha1.prototype;
	hmacp.reset = function()
	{
		var h = this.hasher;
        h.reset();
        h.updateData(this._iKey, 64);
	};
	
	hmacp.update = function(data)
	{
		this.hasher.update(data);
		return this;
	};
	
	hmacp.updateData = function(data, sigBytes)
	{
		this.hasher.updateData(data, sigBytes);
		return this;
	};
	
	hmacp.finalize = function(data)
	{
		// Compute HMAC
		var hasher = this.hasher;
		var tmp = this.tmp;
		
		var hash = hasher.hash;
		
		if (data)
		{
			hasher.update(data);
		}
		
		hasher.flush();
		
		memcpy(tmp, 0, hash, 0, 20);
				
		hasher.reset();
		hasher.updateData(this._oKey, 64);
		hasher.updateData(tmp, 20);
		
		hasher.flush();
	};
		
	function PBKDF2(password, salt, keySize,iterations)
	{
		var keyBufferSize = Math.ceil(keySize);
		var hmac = new HMACSha1(password);
	//	var hmacIn = new HMACSha1(password);

		// Initial values
		var derivedKey = new Array(keyBufferSize);
		var blockIndex = [0x00000001];

		// Generate key
		var saltWords = salt.words;
		var saltBytes = salt.sigBytes;
		
		var dkLen = 0;
		
		var hash = hmac.hasher.hash; // 5  words = 20 bytes
		var bW = new Array(5);// 5  words = 20 bytes
		var interA = new Array(5);
		
		while (dkLen < keySize)
		{
			hmac.updateData(saltWords, saltBytes).updateData(blockIndex, 4).finalize();
			memcpy(bW, 0, hash, 0, 20);
			hmac.reset();
			// Iterations
			var inter = bW;
			for (var i = 1; i < iterations; ++i)
			{
				hmac.updateData(inter, 20).finalize();
				memcpy(interA, 0, hash, 0, 20);
				inter = interA;
				
				hmac.reset();
				// XOR intermediate with block
				for (var j = 0; j < 5; ++j) {
					bW[j] ^= interA[j];
				}	
			}

			memcpy(derivedKey, dkLen*4, bW, 0, 20);
		//	derivedKey.concat(block);
			
			dkLen += 5;
			++blockIndex[0];
			
			hmac.reset();
		}
		
		return { words : derivedKey, sigBytes : keySize * 4 };
	};

	function calcKeyHash(key)
	{
	   var array = utils.u8array.parse(key);
	   var salt = CryptoJS.enc.Hex.parse("fbdb1d1b18aa6c08324b7d64b71fb76370690e1d");
	   var result = PBKDF2(array, salt, 4, 100);

	   return CryptoJS.enc.Hex.stringify(result);
	}

//
}(
vitrium.crypto,
vitrium.utils,
CryptoJS));

// script:viewer\io\data-helper.js
(function(exports, global)
{
	var bin = exports;
	var getDataHelper;
	var isTypedArraysSupported =  !!global.ArrayBuffer;
	
	if (isTypedArraysSupported)
	{
		
		getDataHelper = function(byteLength, bytes) {
			var dataBuffer, dataArray;
			dataBuffer = new ArrayBuffer(byteLength);
			dataArray = new Uint8Array(dataBuffer);
			if (bytes)
				dataArray.set(bytes, 0);
			return {
				buffer : dataBuffer,
				array : dataArray,
				view : new DataView(dataBuffer)
			};
		};
	}
	else
	{
		getDataHelper = function(byteLength, bytes) {
			var dataBuffer, dataArray;
			dataBuffer = new bin.DataBufferView(bytes, 0, byteLength);
			dataArray = dataBuffer;
			
			return {
				buffer : dataBuffer,
				array : dataArray,
				view : dataBuffer
			};
		};
	}	
	
	exports["getDataHelper"] = getDataHelper;
}(vitrium.bin, __globals__));
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
// script:viewer\io\crypto\single-password-key-derivation.js
(function (exports, bin, utils, crypto, CryptoJS, _, global)
{
  "use strict";
  var isTypedArraysSupported = !!global.ArrayBuffer;
  
  exports.SinglePasswordKeyDerivation = SinglePasswordKeyDerivation;
  
  function SinglePasswordKeyDerivation(entries, globalFlags)
  {
    this.entries = entries;
    this._initGlobalFlags(globalFlags);
    this.password = null;
    this.queue = null;

    this.prioritizedNames = [];
  }
  
  SinglePasswordKeyDerivation.prototype = {
    _initGlobalFlags : function (globalFlags)
    {
      var singleKey = this.singleKey = (globalFlags & 1) === 1;
      if (singleKey)
      {
        this.deriveKeys = this.deriveKeysSingle;
      }
      else
      {
        this.deriveKeys = this.deriveKeysMulti;
      }
    },
    setPassword : function(password)
    {
      if (password === null)
      {
        this.password = null;
      }
      else
      {
        this.password = CryptoJS.enc.Utf8.parse(password);

        if (!this.singleKey)
        {
           this.queue = _.clone(this.entries);

           var prioritizeNames = this.prioritizedNames;
           this.prioritizedNames = [];
           _.each(prioritizeNames, _.bind(this.prioritize, this));
        }
      }
    },
    prioritize : function(entryName)
    {
      this.prioritizedNames.push(entryName);
      if (this.queue !== null) {
         var idx = indexOfByFilename(this.queue, entryName);
         if (idx !== -1) {
            var item = this.queue.splice(idx, 1);
            item[0]._prioritized = true;

            var placeAt = indexOfFirstNotPriorizied(this.queue);
            this.queue.splice(placeAt, 0, item[0]);
         }
      }
    },
    deriveKeyForEntry : function(entry)
    {
      var utf8Pwd = this.password;
      if (utf8Pwd === null) return false;

      var computedPV = deriveKeysForEntry(entry, utf8Pwd);
      if (computedPV === entry.aesPV)
      {
        if (this.singleKey)
        {
          var entries = this.entries;
          for (var i = 0, len = this.entries.length; i < len; ++i)
          {
            var e = entries[i];
            e.aesDerivedKey = entry.aesDerivedKey;
            e.hmacKey = entry.hmacKey;
          }
        }
        return true;
      }
      else
      {
        entry.aesDerivedKey = null;
        entry.hmacKey = null;
        return false;
      }
    },
    _next : function()
    {
      return this.queue.shift();
    },
    deriveKeysSingle: function ()
    {
      var entries = this.entries;
      var utf8Pwd = this.password;
      if (utf8Pwd === null) return { invalidPassword: true };
            
      var check = true;
      var prot = null;

      for (var i =0,len=entries.length; i < len && check; ++i)
      {
        var entry = entries[i];
        
        if (entry.flags&(2)) // only two is allowed in this case
        {
          if (prot !== null)
          {
            entry.aesDerivedKey = prot.aesDerivedKey;
            entry.hmacKey = prot.hmacKey;
          }
          else
          {
            var computedPV = deriveKeysForEntry(entry, utf8Pwd);
            check = computedPV === entry.aesPV;
            if (!check)
            {
              entry.aesDerivedKey = null;
              break;
            }
            else
            {
              prot = entry;
            }
          }
        }
      }

      if (check)
      {
        return { invalidPassword : false, finished: true, entries: entries };
      }
      else
      {
        this.password = null;
        return { invalidPassword: true };
      }
    },
    deriveKeysMulti: function (limit)
    {
      if (!limit) limit = 1;

      var utf8Pwd = this.password;
      if (utf8Pwd === null) return { invalidPassword: true };
      var processed = [];
      var invalidPassword = false;
      var entry = null;
      while ((limit--) > 0 && (entry = this._next()))
      {
        if ((entry.flags & (2|4)) !== 0)
        {
          var computedPV = deriveKeysForEntry(entry, utf8Pwd);
          if (computedPV !== entry.aesPV)
          {
            invalidPassword = true;
            break;
          }
          else
          {
            processed.push(entry);
          }
        }			  
      }
            
      if (invalidPassword)
      {
        this.password = null;
        return { invalidPassword: true };
      }
      else
      {
        return { invalidPassword: false, finished: this.queue.length === 0, entries: processed };
      }
    }
  };

  function deriveKeysForEntry(entry, utf8Pwd)
  {
    
      var wordSalt =  utils.u8array.parse(entry.aesSalt);
      var keyLen = (8 * (entry.aesMode & 3) + 8);
      var key = crypto.PBKDF2(utf8Pwd, wordSalt, ((2*keyLen)+2)/4, 1000);
      
      var keyBytes =  utils.u8array.stringify(key);
      if (!isTypedArraysSupported)	// IE
      {
        var b = new vitrium.bin.DataBuffer();
        b.attachData(keyBytes);
        keyBytes = b;
      }
      
      var computedPVV = bin.getDataHelper(keyBytes.length, keyBytes).view.getUint16(keyLen*2,true);
      
      entry.aesDerivedKey = keyBytes.subarray(0, keyLen);
      entry.hmacKey = keyBytes.subarray(keyLen, keyLen+keyLen);
      return computedPVV;
    

  }

  function indexOfByFilename(arr, filename)
  {
     for (var i = 0, len = arr.length; i !== len; ++i)
     {
        if (arr[i].filename === filename)
           return i;
     }
     return -1;
  }

  function indexOfFirstNotPriorizied(arr)
  {
     for (var i = 0, len = arr.length; i !== len; ++i)
     {
        if (!arr[i]._prioritized)
           return i;
     }
     return arr.length;
  }

}(
vitrium.g4s, 
vitrium.bin, 
vitrium.utils,
vitrium.crypto,
CryptoJS,
_,
__globals__
));
// script:viewer/io/g4s-aes-key-worker.js
//

(function(self, g4s)
{	
  var CMD_INIT = 1;
  var CMD_GEN_KEYS = 2;
  var CMD_FINISHED = 3;
  var CMD_PWD_VERIFY_AND_DERIVE_KEYS = 4;
  var CMD_PWD_VERIFICATION_FAILED = 5;
  var CMD_PWD_PRIORITIZE = 6;
  
  var ctx = null;
      
  self.onmessage = function (event)
  {
    var msg = event.data;
    var data = msg.data;
    
    switch(msg.cmd)
    {
      case CMD_INIT:
        ctx = new g4s.SinglePasswordKeyDerivation(data.entries, data.globalFlags);
      break;
      case CMD_PWD_VERIFY_AND_DERIVE_KEYS:
        try
        {
          ctx.setPassword(data);
          handleResult(ctx.deriveKeys(1));
        }
        catch(e)
        {
          resultVerificationFailed(e.message);
        }
      break;
      case CMD_PWD_PRIORITIZE:
        ctx.prioritize(data);
      break;	
    }
  };

  var stepTimer= null;
  function handleResult(result)
  {
    if (result.invalidPassword)
    {
      resultVerificationFailed(result);
      stopQueue();
    }
    else
    {
      if (result.entries.length > 0)
      {
        log("derived keys:" + result.entries.length);
        self.postMessage({ cmd : CMD_GEN_KEYS , data : result.entries });
      }

      if (result.finished)
      {
        log("derivation finished");

        stopQueue();
        self.postMessage({ cmd: CMD_FINISHED });
      }
      else
      {
        log("derivation rescheduled");
        ensureStarted();
      }
    }
  }

  function stopQueue()
  {
    if (stepTimer!== null)
    {
      log("queue has been stoped");
      clearTimeout(stepTimer);
      stepTimer= null;
    }
  }

  function ensureStarted()
  {
      stepTimer= setTimeout(function ()
      {
        log("interval fired");
        try
        {
          handleResult(ctx.deriveKeys(1));
          log("queue step has been executed " + (ctx.queue? ctx.queue.length : ""));
        }
        catch (e)
        {
          log("queue step has failed");
          resultVerificationFailed(e.message);
        }
      }, 0);

   
       
  }

  function resultVerificationFailed(reason)
  {
    self.postMessage({ cmd : CMD_PWD_VERIFICATION_FAILED, data : reason });
  }

  function log(message)
  {
    // uncomment it for debugging
   // self.postMessage({ cmd: 7, data: message});
  }
  
}(__globals__,vitrium.g4s));

}.call(this, this));
    