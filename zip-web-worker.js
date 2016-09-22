/** @preserve  version: 1.1.403
  build time: 2016-09-22T15:19:19.913000
*/
(function(__globals__)
{
  "use strict";

var vitrium = {bin:{},crypto:{},features:{},g4s:{},log:{},utils:{},zip:{}};
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
// script:viewer\io\blob-api.js
(function(exports, global)
{
  "use strict";
  
	var blobObject = !!global["Blob"];
	var URL = global.webkitURL || global.mozURL || global.msURL ||  global.URL || {};
	
	var createObjectURL = !!URL.createObjectURL;
	var level = 0;
	var is_safari = false;
	
	if (global.navigator && global.navigator.userAgent)
	{
		var userAgent = global.navigator.userAgent.toLowerCase();

		is_safari =  userAgent.indexOf('safari/') > -1 && !userAgent.indexOf('chrome/');
	}
	
	if (is_safari)
	{
		//mac sucks
		level = 0;
	}
	else	if (blobObject && createObjectURL)
	{
		level = 2;
	}
	else if (blobObject)
	{
		level = 1;
	}
	
	exports.Blob = {
		level : level,
		URL : URL
	};	

}(
vitrium.features, 
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
// script:viewer\io\crypto\mode-ctr-gladman.js
/*
CryptoJS v3.1
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR 
 * Jan Hruby jhruby.web@gmail.com
 */
CryptoJS.mode.CTRGladman = (function () {
    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

	function incWord(word)
	{	
		if (((word >> 24) & 0xff) === 0xff) { //overflow
		var b1 = (word >> 16)&0xff;
		var b2 = (word >> 8)&0xff;
		var b3 = word & 0xff;

		if (b1 === 0xff) // overflow b1
		{		 
		b1 = 0;
		if (b2 === 0xff)
		{
			b2 = 0;
			if (b3 === 0xff)
			{
				b3 = 0;
			}
			else
			{
				++b3;
			}
		}
		else
		{
			++b2;
		}
		}
		else
		{
		++b1;
		}

		word = 0;	  	  
		word += (b1 << 16);
		word += (b2 << 8);
		word += b3;	  
		}
		else
		{
		word += (0x01 << 24);
		}
		return word;
	}

	function incCounter(counter)
	{
		if ((counter[0] = incWord(counter[0])) === 0)
		{
			// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
			counter[1] = incWord(counter[1]);
		}
		return counter;
	}
	
    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
        processBlock: function (words, offset) {
            // Shortcuts
            var cipher = this._cipher
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;

            // Generate keystream
            if (iv) {
                counter = this._counter = iv.slice(0);

                // Remove IV for subsequent blocks
                this._iv = undefined;
            }
            
			incCounter(counter);
			
			var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);

            // Encrypt
            for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
            }
        }
    });

    CTRGladman.Decryptor = Encryptor;

    return CTRGladman;
}());



// script:viewer\io\crypto\pad-nopadding-min.js
/*
CryptoJS v3.1
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
CryptoJS.pad.NoPadding={pad:function(){},unpad:function(){}};

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

// script:viewer\io\crc32.js
(function(exports, bin)
{
	"use strict";
	var global  = exports;
	
	function CRC32() {
		this.crc = -1;
	}	
	var CP = CRC32.prototype;
	CP.table = (function() {
		var i, j, t, table = [];
		for (i = 0; i < 256; i++) {
			t = i;
			for (j = 0; j < 8; j++)
				if (t & 1)
					t = (t >>> 1) ^ 0xEDB88320;
				else
					t = t >>> 1;
			table[i] = t;
		}
		return table;
	})();

	if (!!global.ArrayBuffer)
	{
		CP.append = function(data) {
				var offset, table = this.table;
				var crc = this.crc;
				for (offset = 0; offset < data.length; offset++)
					crc = table[(crc ^ data[offset]) & 0xFF] ^ (crc >>> 8);
				
				this.crc = crc;
		};
	}
	else
	{
		CP.append = function(data) {
				var offset, table = this.table;
				var crc = this.crc;
				if (data.readNumber)
				{			
					for (offset = 0; offset < data.length; offset++)
						crc = (crc >>> 8) ^ table[(crc ^ data.readNumber(1,offset)) & 0xFF];
				}
				else
				{
					for (offset = 0; offset < data.length; offset++)
						crc = (crc >>> 8) ^ table[(crc ^ data[offset]) & 0xFF];
				}				
				this.crc = crc;
		};
	
	}
	
	CP.get = function() {
			return ((~(this.crc)) >>> 0);
	};
	
	CP.equals = function(crc32)
	{
		return crc32 === this.get();
	};
	
	exports.CRC32 = CRC32;
}(
	__globals__, 
	vitrium.bin
));
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
// script:viewer\io\zip.js
/*
 Copyright (c) 2012 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(zip, CRC32, bin, crypto, CryptoJS, globals) {

	var ERR_BAD_FORMAT = "File format is not recognized.";
	var ERR_ENCRYPTED = "File contains encrypted entry.";
	var ERR_ZIP64 = "File is using Zip64 (4gb+ file size).";
	var ERR_READ = "Error while reading zip file.";
	var ERR_WRITE = "Error while writing zip file.";
	var ERR_WRITE_DATA = "Error while writing file data.";
	var ERR_READ_DATA = "Error while reading file data.";
	var ERR_DUPLICATED_NAME = "File already exists.";
	var ERR_HTTP_RANGE = "HTTP Range not supported.";
	var ERR_AES_HEADER_MISSING = "AES header 0x9901 not found";
	var ERR_COMPRESION_METHOD = "Unknown compression method";
	var ERR_REQUIRED_AES_KEY = "Required AES key";
	var ERR_AES_UNKNOWN_STRENGTH = "Unknown strength value.";
	var ERR_AES_WRONG_PASSWORD = "Wrong password.";
		
	//JH added
	var isTypedArraysSupported = typeof globals.ArrayBuffer === "function" ||  typeof globals.ArrayBuffer === "object";
	var CHUNK_SIZE = isTypedArraysSupported ? 1000000 : 500000 ; 
	
	var getDataHelper = bin.getDataHelper;
	

	
	var launchProcess;
	if (isTypedArraysSupported)
	{
			launchProcess = function(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror) {
			var chunkIndex = 0, index, outputSize = 0;
			var abort = new AbortHandler();
			
			function step() {
				var outputData;
				index = chunkIndex * CHUNK_SIZE;
				if (index < size)
					abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
						var outputData = process.append(inputData, function() {
							if (onprogress)
								onprogress(offset + index, size);
						});
						
						if (outputData === -1)
						{
							chunkIndex++;
							step();
						}
						outputSize += outputData.length;
						onappend(true, inputData);
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							chunkIndex++;
							step();
							//setTimeout(step, 1);
													
						}, onwriteerror);
						if (onprogress)
							onprogress(index, size);
					}, onreaderror);
				else {
					outputData = process.flush();
					if (outputData) {
						outputSize += outputData.length;
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							onend(outputSize);
						}, onwriteerror);
					} else
						onend(outputSize);
				}
			}

			step();
			
			return abort;
		};
	
	}
	else
	{
	launchProcess = function(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror) {
			var chunkIndex = 0, index, outputSize = 0;
			var abort = new AbortHandler();
			
			function step() {
				var outputData;
				index = chunkIndex * CHUNK_SIZE;
				if (index < size)
					abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
						var suboffset = 0;
						var rem = inputData.length;
						function substep()
						{
							if (rem > 0)
							{
				
									var lastoffset = suboffset + Math.min(rem, 1024);
									var chunk;
									if (offset == 0 && lastoffset === rem)
									{
										chunk = inputData;
									}
									else
									{
										chunk = inputData.subarray(suboffset, lastoffset);
									}
									var chsize = lastoffset - suboffset;
									suboffset += chsize;
									rem -= chsize;
									
									var outputData = process.append(chunk, function() {
										if (onprogress)
											onprogress(offset + suboffset, size);
									});
									
									onappend(true, inputData);
									if (outputData === -1)
									{
										var t = setTimeout(substep, 1);
										abort.req = { abort : function(){ clearTimeout(t);}};
									}
									else
									{
										outputSize += outputData.length;
										writer.writeUint8Array(outputData, function() {
											onappend(false, outputData);
											var t = setTimeout(substep, 1);
											abort.req = { abort : function(){ clearTimeout(t);}};
										}, onwriteerror);
									}
									
								if (onprogress)
									onprogress(index, size);
							}
							else
							{
								chunkIndex++;
								step();
							}
						}
						substep();
						
					}, onreaderror);
				else {
					outputData = process.flush();
					if (outputData) {
						outputSize += outputData.length;
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							onend(outputSize);
						}, onwriteerror);
					} else
						onend(outputSize);
				}
			}

			step();
			
			return abort;
		};
	
	}
	
		

	function inflate(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror, name) {
		var worker, crc32 = new CRC32();
		var abort = new AbortHandler();
		
		function oninflateappend(sending, array) {
			if (computeCrc32 && !sending)
				crc32.append(array);
		}

		function oninflateend(outputSize) {
			onend(outputSize, crc32.get());
		}
	
		var inflater = new zip.Inflater();
		abort.req = launchProcess(inflater, reader, writer, offset, size, oninflateappend, onprogress, oninflateend, onreaderror, onwriteerror);
		
		return abort;
	}

	function copy(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var chunkIndex = 0, crc32 = new CRC32();
		var abort = new AbortHandler();
		
		function step() {
			var index = chunkIndex * CHUNK_SIZE;
			if (index < size)
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					if (computeCrc32)
						crc32.append(array);
					if (onprogress)
						onprogress(index, size, array);
					writer.writeUint8Array([array], function() {
						chunkIndex++;
						step();
					}, onwriteerror);
				}, onreaderror);
			else
				onend(size, crc32.get());
		}

		step();
		
		return abort;
	}
	
	function aesHashEq(hmac, hmacChksum)
	{
		hash = CryptoJS.enc.u8array.stringify({ words : hmac.hasher.hash, sigBytes: 20});
				
		if (hmacChksum.readByteAt)
		{
		
			for (var i = 0; i < 10; ++i)
			{
				if (hash[i] != hmacChksum.readByteAt(i))
				{
					return false;
				}
			}
		}
		else
		{
			for (var i = 0; i < 10; ++i)
			{
				if (hash[i] != hmacChksum[i])
				{
					return false;
				}
			}
		}
		
		return true;
	}
	
	function aesCopy(reader, writer, offset, size, onend, onprogress, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) {
		var chunkIndex = 0;
		var abort = new AbortHandler();

		function step() {
			var index = chunkIndex * CHUNK_SIZE;
			if (index < size)
			{
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					var wordArray = CryptoJS.enc.u8array.parse(array);
					hmac.update(wordArray);
					
					var deryptedChuck = aesDecryptor.process(wordArray);
					
					if (onprogress)
						onprogress(index, size, array);
					
					if (deryptedChuck.sigBytes > 0)
					{										
						var dBytes = CryptoJS.enc.u8array.stringify(deryptedChuck);
						
						writer.writeUint8Array([dBytes], function() {
							chunkIndex++;
							step();
						}, onwriteerror);
					}
					else
					{
						chunkIndex++;
						step();
					}
				}, onreaderror);
			}
			else
			{
				hmac.finalize();
			
				
				if (aesHashEq(hmac, hmacChksum))
				{	
					var deryptedChuck = aesDecryptor.finalize();
					if (deryptedChuck.sigBytes > 0)
					{										
						var dBytes = CryptoJS.enc.u8array.stringify(deryptedChuck);	
						writer.writeUint8Array(dBytes, function() {
							onend(size);
						}, onwriteerror);
					}
					else
					{
						onend(size);
					}
				}
				else
				{
					onbadpassword();
				}
			}
		}

		step();
		
		return abort;
	}
	
	
	function aesInflate(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) 
	{
		var worker, crc32 = new CRC32();		
		var abort = new AbortHandler();

		function oninflateappend(sending, array) {
			if (computeCrc32 && !sending)
				crc32.append(array);
		}

		function oninflateend(outputSize) {
			onend(outputSize, crc32.get());
		}

		var inflater = new zip.Inflater();
		abort.req = aesLaunchProcess(inflater, reader, writer, offset, size, oninflateappend, onprogress, oninflateend, onreaderror, onwriteerror , aesDecryptor, hmac, hmacChksum, onbadpassword);
				
		return abort;
	}
	
	function convertCryptoArray(array)
	{
		if (!isTypedArraysSupported)
		{
			var buffer = new bin.DataBuffer();
			buffer.attachData(array);
			array = buffer;
		}
		return array;
	}
	
	function aesLaunchProcess(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) {
		var chunkIndex = 0, index, outputSize = 0;
		var aesFlushed = false;
		var abort = new AbortHandler();
		
		function step() {
			var outputData;
			index = chunkIndex * CHUNK_SIZE;
			
			if (aesFlushed)
			{
				outputData = process.flush();
				if (outputData) {
					outputSize += outputData.length;
					writer.writeUint8Array(outputData, function() {
						onappend(false, outputData);
						onend(outputSize);
					}, onwriteerror);
				} else
					onend(outputSize);
			}
			else if (index < size)
			{
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					var wordArray = CryptoJS.enc.u8array.parse(array);
					hmac.update(wordArray);
					
					var deryptedChuck = aesDecryptor.process(wordArray);
					chunkIndex++;
				
					if (onprogress)
						onprogress(offset + index, size);
						
					if (deryptedChuck.sigBytes > 0)
					{	
						var dBytes = convertCryptoArray(CryptoJS.enc.u8array.stringify(deryptedChuck));
										
						var outputData = process.append(dBytes, function() {});
						if (outputData === -1)
						{
							step();
						}
						
						outputSize += outputData.length;
						onappend(true, dBytes);
						
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							step();													
						}, onwriteerror);
					}
					else
					{
						step();
					}
				}, onreaderror);
			}
			else {
				hmac.finalize();
				if (aesHashEq(hmac, hmacChksum))
				{	
					var deryptedChuck = aesDecryptor.finalize();
					aesFlushed = true;
					if (deryptedChuck.sigBytes > 0)
					{	
						var dBytes = convertCryptoArray(CryptoJS.enc.u8array.stringify(deryptedChuck));				
						var outputData = process.append(dBytes, function() {});
						
						outputSize += outputData.length;
						onappend(true, dBytes);
						
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							step();
						}, onwriteerror);
					}
					else
					{
						step();
					}
				}
				else
				{
					onbadpassword();
				}
			}
		}

		step();
		
		return abort;
	}

	// ZipReader

	function decodeASCII(str) {
		var i, out = "", charCode, extendedASCII = [ '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB',
				'\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
				'\u00FF', '\u00D6', '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1',
				'\u00AA', '\u00BA', '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB', '_', '_', '_', '\u00A6', '\u00A6',
				'\u00C1', '\u00C2', '\u00C0', '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-', '-', '+', '-', '+', '\u00E3',
				'\u00C3', '+', '+', '-', '-', '\u00A6', '-', '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i', '\u00CD', '\u00CE',
				'\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_', '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5', '\u00FE',
				'\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD', '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
				'\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3', '\u00B2', '_', ' ' ];
		for (i = 0; i < str.length; i++) {
			charCode = str.charCodeAt(i) & 0xFF;
			if (charCode > 127)
				out += extendedASCII[charCode - 128];
			else
				out += String.fromCharCode(charCode);
		}
		return out;
	}

	function decodeUTF8(str_data) {
		var tmp_arr = [], i = 0, ac = 0, c1 = 0, c2 = 0, c3 = 0;

		str_data += '';

		while (i < str_data.length) {
			c1 = str_data.charCodeAt(i);
			if (c1 < 128) {
				tmp_arr[ac++] = String.fromCharCode(c1);
				i++;
			} else if (c1 > 191 && c1 < 224) {
				c2 = str_data.charCodeAt(i + 1);
				tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = str_data.charCodeAt(i + 1);
				c3 = str_data.charCodeAt(i + 2);
				tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}

		return tmp_arr.join('');
	}


	 function getString(bytes) {
			var i, str = "";
			for (i = 0; i < bytes.length; i++)
				str += String.fromCharCode(bytes[i]);
			return str;
		};
	

	function getDate(timeRaw) {
		var date = (timeRaw & 0xffff0000) >> 16, time = timeRaw & 0x0000ffff;
		try {
			return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5,
					(time & 0x001F) * 2, 0);
		} catch (e) {
		}
	}

	function readCommonHeader(entry, data, index, centralDirectory, onerror) 
	{
		entry.version = data.view.getUint16(index, true);
		entry.bitFlag = data.view.getUint16(index + 2, true);
		entry.compressionMethod = data.view.getUint16(index + 4, true);
		entry.lastModDateRaw = data.view.getUint32(index + 6, true);
		entry.lastModDate = getDate(entry.lastModDateRaw);
		/*if ((entry.bitFlag & 0x01) === 0x01) {
			onerror(ERR_ENCRYPTED);
			return;
		}*/
		if (centralDirectory || (entry.bitFlag & 0x0008) != 0x0008) {
			entry.crc32 = data.view.getUint32(index + 10, true);
			entry.compressedSize = data.view.getUint32(index + 14, true);
			entry.uncompressedSize = data.view.getUint32(index + 18, true);
		}
		if (entry.compressedSize === 0xFFFFFFFF || entry.uncompressedSize === 0xFFFFFFFF) {
			onerror(ERR_ZIP64);
			return;
		}
		entry.filenameLength = data.view.getUint16(index + 22, true);
		entry.extraFieldLength = data.view.getUint16(index + 24, true);
	}
	
	function parseEncryptionHeader(data, start, len)
	{
		var step = len;
		var result = null;
		var e = start + len;
		for ( var i = start; i < e; i+=step)
		{
			var id = data.view.getUint16(i, true);
			i += 2;
			var len = data.view.getUint16(i, true); 
			i += 2;
			
			if (id === 0x9901) // AES extra field http://www.winzip.com/aes_info.htm
			{
				var version = data.view.getUint16(i, true);
				i += 2;
				var vendorId = data.view.getUint16(i, true);
				i += 2;
				var strength = data.view.getUint8(i);
				i += 1;
				var method = data.view.getUint16(i, true);
				i += 2;
				
				result = {
					version : version,
					vendorId : vendorId,
					strength : strength,
					method : method
				};
			
				break;
			}
			else
			{
				step = len;
			}
		}
		
		
		
		return result;
	}
	
	function aesKeyLen(mode) {  return (8 * (mode & 3) + 8); }
	function aesSaltLen(mode) { return (4 * (mode & 3) + 4); }

	var AES_MAC_LEN = 10;
	
	function readEntry(reader, that /*entry json*/, options)
	{
			//vitrium.log.debug("zip get data: "+this.filename);
			var writer  = options.writer;
			var onend = options.onend || function(){};
			var onprogress = options.onprogress || function(){};
			var onerrorentry = options.onerror || function(){};
			var onrangerecieved = options.onrange || function(){};
			
			var checkCrc32 = options.checkCrc32;
			var password = options.password;
	
			var worker = null;
			
			function getdataerror()
			{
				onerrorentry.apply(that, arguments);
			}

			function terminate(callback, param) 
			{
				if (worker)
					worker.terminate();
					
				worker = null;
				try
				{
					if (callback)
					{
						if (arguments.length > 2)
						{
							var args = [];
							for (var i = 1, len =arguments.length; i < len; ++i)
							{
								args.push(arguments[i]);
							}
							
							callback.apply(null, args);
						}
						else
						{
							callback(param);
						}
					}
					
					
					if (writer && writer.free)
					{
					
						writer.free();
					}
					abort = null;
				}
				catch(e)
				{
					getdataerror(e);
				}
			}
			
			function testCrc32(crc32) {
				var dataCrc32 = getDataHelper(4);
				dataCrc32.view.setUint32(0, crc32);
				return that.crc32 == dataCrc32.view.getUint32(0);
			}

			function getWriterData(uncompressedSize, crc32) {
			
				if (checkCrc32 && !testCrc32(crc32))
					onreaderror();
				else
				{
					try
					{
						writer.getData(function(data) {
							terminate(onend, data);
						});
					}
					catch(e)
					{
						terminate(getdataerror, e);
					}
				}
			}

			function onreaderror(e1, e2) {
				terminate(getdataerror, ERR_READ_DATA, e1, e2);
			}

			function onwriteerror() {
				terminate(getdataerror, ERR_WRITE_DATA);
			}
			
			function wrongpassword()
			{
				terminate(getdataerror, ERR_AES_WRONG_PASSWORD);
			}
			
			var abort = new AbortHandler();
			abort.req = reader.readUint8Array(that.offset, 30, function(bytes) {
				var data = getDataHelper(bytes.length, bytes), dataOffset;
				if (data.view.getUint32(0) != 0x504b0304) {
					getdataerror(ERR_BAD_FORMAT);
					return;
				}
				
				var headerError = false;
				readCommonHeader(that, data, 4, false, function(error) {
					getdataerror(error);
					headerError = true;
				});
				
				if (headerError)
				{
					return;
				}
				
				dataOffset = that.offset + 30 + that.filenameLength + that.extraFieldLength;
				onrangerecieved(that.offset, dataOffset+that.compressedSize);
				
				writer.init(function() {
					if (that.compressionMethod === 0)
					{
						worker = copy(reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
					}
					else if ((that.bitFlag & 0x01) === 0x01 && that.compressionMethod === 99 && that.encryptionHeader && (that.encryptionHeader.method === 0 || that.encryptionHeader.method === 8))
					{
						if (!password)
						{
							getdataerror(ERR_REQUIRED_AES_KEY);	
						}
						else
						{	
							var mode = that.encryptionHeader.strength;
							var saltLen = aesSaltLen(mode); // http://www.winzip.com/aes_info.htm III. Encrypted file storage format
							var keyLen = aesKeyLen(mode);
													
							abort.req = reader.readUint8Array(dataOffset, saltLen + 2, function(bytes) {
								var data = getDataHelper(bytes.length, bytes);
								var salt = data.array.subarray(0, saltLen);
								
								var passwordVerificationValue = data.view.getUint16(saltLen, true); 
								
								var wordSalt = CryptoJS.enc.u8array.parse(salt);							
								var myKey = crypto.PBKDF2(CryptoJS.enc.Utf8.parse(password), wordSalt, ((2*keyLen)+2)/4, 1000);
								
								var keyBytes =  CryptoJS.enc.u8array.stringify(myKey);
								if (!isTypedArraysSupported)	// IE
								{
									var b = new bin.DataBuffer();
									b.attachData(keyBytes);
									keyBytes = b;
								}
																
								var computedPVV = getDataHelper(keyBytes.length, keyBytes).view.getUint16(keyLen*2,true);
								
								if (computedPVV === passwordVerificationValue) // password is probably correct ( 1/65556)
								{
									//console.log("password is probably correct");
									var aesKey = CryptoJS.enc.u8array.parse(keyBytes.subarray(0, keyLen));
									var hmacKey = CryptoJS.enc.u8array.parse(keyBytes.subarray(keyLen, keyLen+keyLen));
									
									var aesDecryptor = CryptoJS.algo.AES.createDecryptor(aesKey, 
									{ 
										iv :  CryptoJS.enc.u8array.parse([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 
										mode: CryptoJS.mode.CTRGladman, 
										padding: CryptoJS.pad.NoPadding
									});
									
									 var hmacHasher = new crypto.HMACSha1(hmacKey);
									 //var cmphmacHasher= CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA1, hmacKey);
									
									abort.req = reader.readUint8Array(dataOffset+that.compressedSize-10,  10, function(hmacChkSum)
									{
										if (that.encryptionHeader.method === 0)
										{
											worker = aesCopy(
												reader, writer, dataOffset+saltLen+2, that.compressedSize - 10 -saltLen-2, getWriterData, 
												onprogress, onreaderror, onwriteerror, aesDecryptor, hmacHasher, hmacChkSum, wrongpassword
												);
										}
										else // 8
										{
											worker = aesInflate(
												reader, writer, dataOffset+saltLen+2, that.compressedSize - 10 -saltLen-2, checkCrc32, getWriterData, 
												onprogress, onreaderror, onwriteerror, aesDecryptor, hmacHasher, hmacChkSum, wrongpassword
												);
										}	
									}, onreaderror);	
								}
								else
								{
									getdataerror(ERR_AES_WRONG_PASSWORD);
								}
								
							}, onreaderror);	
						}
					}
					else if (that.compressionMethod === 8)
					{
						worker = inflate(reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror, that.filename);
					}
					else
					{
						getdataerror(ERR_COMPRESION_METHOD);			
					}
				}, onwriteerror);
			}, onreaderror);
			worker = abort;
			
			
			return function()
			{
				//vitrium.log.debug("zip abort: "+that.filename);
				terminate();
			};
	}
	
	function seekEOCDR(reader, offset, entriesCallback, onerror) {

	   var abortHandle = new AbortHandler();
		abortHandle.req = reader.readUint8Array(reader.size - offset, offset, function(bytes) {
			var dataView = getDataHelper(bytes.length, bytes).view;
			if (dataView.getUint32(0) != 0x504b0506) {
			   abortHandle.req = seekEOCDR(reader, offset + 1, entriesCallback, onerror);
			} else {
				entriesCallback(dataView);
			}
		}, onerror);

		return abortHandle;
	}
	
	function ZipEntry()
	{
		this.filename = null;
		this.version = null;
		this.bitFlag = null;
		this.compressionMethod = null;
		this.lastModDateRaw = null;
		this.lastModDate = null;
		this.crc32 = null;
		this.compressedSize = null;
		this.uncompressedSize = null;
		this.filenameLength = null;
		this.extraFieldLength = null;
		this.directory = null;
		this.offset = null;
		this.comment = null;
		this.commentLength = null;
		this.encryptionHeader = null;
	};
	
	function readEntries(reader, callback, onerror) {
				if (!reader)
				{
					onerror("reader must be specified");
					return;
				}
	
				if (reader.size < 22) {
					onerror(ERR_BAD_FORMAT);
					return;
				}
	   // look for End of central directory record
      
				var abortHandle = seekEOCDR(reader, 22, function(dataView) {
					var datalength = dataView.getUint32(16, true);
					var fileslength = dataView.getUint16(8, true);
					
					abortHandle.req = reader.readUint8Array(datalength, reader.size - datalength, function(bytes) 
					{
						var len = fileslength;
						var i, index = 0, entries = new Array(len), entry, filename, comment, data = getDataHelper(bytes.length, bytes);
						for (var i = 0; i < len; ++i)
						{
							entry = new ZipEntry();
							if (data.view.getUint32(index) != 0x504b0102) {
								onerror(ERR_BAD_FORMAT);
								return;
							}
							readCommonHeader(entry, data, index + 6, true, function(error) {
								onerror(error);
								return;
							});
							entry.commentLength = data.view.getUint16(index + 32, true);
							entry.directory = ((data.view.getUint8(index + 38) & 0x10) == 0x10);
							entry.offset = data.view.getUint32(index + 42, true);
							filename = getString(data.array.subarray(index + 46, index + 46 + entry.filenameLength));
							entry.filename = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(filename) : decodeASCII(filename);
							if (entry.bitFlag & 0x01 === 0x01)
							{
								entry.encryptionHeader = parseEncryptionHeader(data, index + 46 + entry.filenameLength, entry.extraFieldLength);
								
								if (entry.encryptionHeader === null)
								{
									onerror(ERR_AES_HEADER_MISSING);
									return;
								}
							}
							
							
							if (!entry.directory && entry.filename.charAt(entry.filename.length - 1) == "/")
								entry.directory = true;
							comment = getString(data.array.subarray(index + 46 + entry.filenameLength + entry.extraFieldLength, index + 46
									+ entry.filenameLength + entry.extraFieldLength + entry.commentLength));
							entry.comment = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(comment) : decodeASCII(comment);
							entries[i] = entry;
							index += 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength;
						}
						callback(entries);
					},
					onerror);
				}, onerror);

				return abortHandle;
	}

	// ZipWriter

	function encodeUTF8(string) {
		var n, c1, enc, utftext = [], start = 0, end = 0, stringl = string.length;
		for (n = 0; n < stringl; n++) {
			c1 = string.charCodeAt(n);
			enc = null;
			if (c1 < 128)
				end++;
			else if (c1 > 127 && c1 < 2048)
				enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
			else
				enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
			if (enc != null) {
				if (end > start)
					utftext += string.slice(start, end);
				utftext += enc;
				start = end = n + 1;
			}
		}
		if (end > start)
			utftext += string.slice(start, stringl);
		return utftext;
	}

	function getBytes(str) {
		var i, array = [];
		for (i = 0; i < str.length; i++)
			array.push(str.charCodeAt(i));
		return array;
	}

		
	function AbortHandler()
	{
		this.req = null;
		this.worker = null;
	}
	
	AbortHandler.prototype.terminate =  function()
	{
		if(this.req) this.req.abort();
		if(this.worker) this.worker.terminate();
	};
	AbortHandler.prototype.abort = AbortHandler.prototype.terminate; 

	zip.readEntries = readEntries;
  zip.readEntry = readEntry;
	zip.errors = {
      ERR_BAD_FORMAT:  ERR_BAD_FORMAT, 
      ERR_ENCRYPTED : ERR_ENCRYPTED,
      ERR_ZIP64 : ERR_ZIP64, 
      ERR_READ : ERR_READ, 
      ERR_WRITE : ERR_WRITE, 
      ERR_WRITE_DATA : ERR_WRITE_DATA,
      ERR_READ_DATA : ERR_READ_DATA, 
      ERR_DUPLICATED_NAME : ERR_DUPLICATED_NAME, 
      ERR_HTTP_RANGE : ERR_HTTP_RANGE, 
      ERR_AES_HEADER_MISSING : ERR_AES_HEADER_MISSING, 
      ERR_COMPRESION_METHOD : ERR_COMPRESION_METHOD, 
      ERR_REQUIRED_AES_KEY  : ERR_REQUIRED_AES_KEY, 
      ERR_AES_UNKNOWN_STRENGTH : ERR_AES_UNKNOWN_STRENGTH, 
      ERR_AES_WRONG_PASSWORD : ERR_AES_WRONG_PASSWORD
    };
}
(
vitrium.zip, 
CRC32, 
vitrium.bin,
vitrium.crypto,
CryptoJS,
__globals__
));



// script:viewer\io\inflate-fast.js
/*
 Copyright (c) 2012 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * This program is based on JZlib 1.0.2 ymnk, JCraft,Inc.
 * JZlib is based on zlib-1.1.3, so all credit should go authors
 * Jean-loup Gailly(jloup@gzip.org) and Mark Adler(madler@alumni.caltech.edu)
 * and contributors of zlib.
 */
 
(function(zip, globals) {

	var arrayTypeCreator;
	var int32arrayCreator;

	if (typeof globals.Uint8Array === "function" || typeof globals.Uint8Array === "object")
	{		
		arrayTypeCreator = function(argument) { 
			var res = new Uint8Array(argument); 
			if (navigator.appName === "Opera")
			{
				res.insert = function(array, offset)
				{
					var selfLen = this.length;
					var arrLen = array.length;
					
					if ((offset + arrLen - 1) >= selfLen)
					{
					
						var cpy = new Uint8Array(offset + arrLen)
						cpy.set(this);
						cpy.set(array, offset);
						cpy.insert = res.insert;
						
						return cpy;
					}
					else if (arrLen > 0)
					{
						this.set(array,offset);
						return this;
					}
					else
					{
						return this;
					}
					
				};
			}
			
			return res;
		};
		
		int32arrayCreator = function(size)
		{
			return new Int32Array(size);
		};
	}
	else
	{
		return;
	}
	// Global
	var MAX_BITS = 15;

	var Z_OK = 0;
	var Z_STREAM_END = 1;
	var Z_NEED_DICT = 2;
	var Z_STREAM_ERROR = -2;
	var Z_DATA_ERROR = -3;
	var Z_MEM_ERROR = -4;
	var Z_BUF_ERROR = -5;

	var inflate_mask = [ 0x00000000, 0x00000001, 0x00000003, 0x00000007, 0x0000000f, 0x0000001f, 0x0000003f, 0x0000007f, 0x000000ff, 0x000001ff, 0x000003ff,
			0x000007ff, 0x00000fff, 0x00001fff, 0x00003fff, 0x00007fff, 0x0000ffff ];

	var MANY = 1440;

	// JZlib version : "1.0.2"
	var Z_NO_FLUSH = 0;
	var Z_FINISH = 4;

	// InfTree
	var fixed_bl = 9;
	var fixed_bd = 5;

	var fixed_tl = [ 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0,
			0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40,
			0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13,
			0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60,
			0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7,
			35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8,
			26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80,
			7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0,
			8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0,
			8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97,
			0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210,
			81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117,
			0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154,
			84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83,
			0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230,
			80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139,
			0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174,
			0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111,
			0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9,
			193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8,
			120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8,
			227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8,
			92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9,
			249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8,
			130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9,
			181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8,
			102, 0, 8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9,
			221, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0,
			8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9,
			147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8,
			85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9,
			235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8,
			141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9,
			167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8,
			107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9,
			207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8,
			127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255 ];
	var fixed_td = [ 80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5,
			8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5,
			24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577 ];

	// Tables for deflate from PKZIP's appnote.txt.
	var cplens = [ // Copy lengths for literal codes 257..285
	3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0 ];

	// see note #13 above about 258
	var cplext = [ // Extra bits for literal codes 257..285
	0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112 // 112==invalid
	];

	var cpdist = [ // Copy offsets for distance codes 0..29
	1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577 ];

	var cpdext = [ // Extra bits for distance codes
	0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13 ];

	// If BMAX needs to be larger than 16, then h and x[] should be uLong.
	var BMAX = 15; // maximum bit length of any code

	function InfTree() {
		var that = this;

		var hn; // hufts used in space
		var v; // work area for huft_build
		var c; // bit length count table
		var r; // table entry for structure assignment
		var u; // table stack
		var x; // bit offsets, then code stack

		function huft_build(b, // code lengths in bits (all assumed <=
		// BMAX)
		bindex, n, // number of codes (assumed <= 288)
		s, // number of simple-valued codes (0..s-1)
		d, // list of base values for non-simple codes
		e, // list of extra bits for non-simple codes
		t, // result: starting table
		m, // maximum lookup bits, returns actual
		hp,// space for trees
		hn,// hufts used in space
		v // working area: values in order of bit length
		) {
			// Given a list of code lengths and a maximum table size, make a set of
			// tables to decode that set of codes. Return Z_OK on success,
			// Z_BUF_ERROR
			// if the given code set is incomplete (the tables are still built in
			// this
			// case), Z_DATA_ERROR if the input is invalid (an over-subscribed set
			// of
			// lengths), or Z_MEM_ERROR if not enough memory.

			var a; // counter for codes of length k
			var f; // i repeats in table every f entries
			var g; // maximum code length
			var h; // table level
			var i; // counter, current code
			var j; // counter
			var k; // number of bits in current code
			var l; // bits per table (returned in m)
			var mask; // (1 << w) - 1, to avoid cc -O bug on HP
			var p; // pointer into c[], b[], or v[]
			var q; // points to current table
			var w; // bits before this table == (l * h)
			var xp; // pointer into x
			var y; // number of dummy codes added
			var z; // number of entries in current table

			// Generate counts for each bit length

			p = 0;
			i = n;
			do {
				c[b[bindex + p]]++;
				p++;
				i--; // assume all entries <= BMAX
			} while (i !== 0);

			if (c[0] == n) { // null input--all zero length codes
				t[0] = -1;
				m[0] = 0;
				return Z_OK;
			}

			// Find minimum and maximum length, bound *m by those
			l = m[0];
			for (j = 1; j <= BMAX; j++)
				if (c[j] !== 0)
					break;
			k = j; // minimum code length
			if (l < j) {
				l = j;
			}
			for (i = BMAX; i !== 0; i--) {
				if (c[i] !== 0)
					break;
			}
			g = i; // maximum code length
			if (l > i) {
				l = i;
			}
			m[0] = l;

			// Adjust last length count to fill out codes, if needed
			for (y = 1 << j; j < i; j++, y <<= 1) {
				if ((y -= c[j]) < 0) {
					return Z_DATA_ERROR;
				}
			}
			if ((y -= c[i]) < 0) {
				return Z_DATA_ERROR;
			}
			c[i] += y;

			// Generate starting offsets into the value table for each length
			x[1] = j = 0;
			p = 1;
			xp = 2;
			while (--i !== 0) { // note that i == g from above
				x[xp] = (j += c[p]);
				xp++;
				p++;
			}

			// Make a table of values in order of bit lengths
			i = 0;
			p = 0;
			do {
				if ((j = b[bindex + p]) !== 0) {
					v[x[j]++] = i;
				}
				p++;
			} while (++i < n);
			n = x[g]; // set n to length of v

			// Generate the Huffman codes and for each, make the table entries
			x[0] = i = 0; // first Huffman code is zero
			p = 0; // grab values in bit order
			h = -1; // no tables yet--level -1
			w = -l; // bits decoded == (l * h)
			u[0] = 0; // just to keep compilers happy
			q = 0; // ditto
			z = 0; // ditto

			// go through the bit lengths (k already is bits in shortest code)
			for (; k <= g; k++) {
				a = c[k];
				while (a-- !== 0) {
					// here i is the Huffman code of length k bits for value *p
					// make tables up to required level
					while (k > w + l) {
						h++;
						w += l; // previous table always l bits
						// compute minimum size table less than or equal to l bits
						z = g - w;
						z = (z > l) ? l : z; // table size upper limit
						if ((f = 1 << (j = k - w)) > a + 1) { // try a k-w bit table
							// too few codes for
							// k-w bit table
							f -= a + 1; // deduct codes from patterns left
							xp = k;
							if (j < z) {
								while (++j < z) { // try smaller tables up to z bits
									if ((f <<= 1) <= c[++xp])
										break; // enough codes to use up j bits
									f -= c[xp]; // else deduct codes from patterns
								}
							}
						}
						z = 1 << j; // table entries for j-bit table

						// allocate new table
						if (hn[0] + z > MANY) { // (note: doesn't matter for fixed)
							return Z_DATA_ERROR; // overflow of MANY
						}
						u[h] = q = /* hp+ */hn[0]; // DEBUG
						hn[0] += z;

						// connect to last table, if there is one
						if (h !== 0) {
							x[h] = i; // save pattern for backing up
							r[0] = /* (byte) */j; // bits in this table
							r[1] = /* (byte) */l; // bits to dump before this table
							j = i >>> (w - l);
							r[2] = /* (int) */(q - u[h - 1] - j); // offset to this table
							hp.set(r, (u[h - 1] + j) * 3);
							// to
							// last
							// table
						} else {
							t[0] = q; // first table is returned result
						}
					}

					// set up table entry in r
					r[1] = /* (byte) */(k - w);
					if (p >= n) {
						r[0] = 128 + 64; // out of values--invalid code
					} else if (v[p] < s) {
						r[0] = /* (byte) */(v[p] < 256 ? 0 : 32 + 64); // 256 is
						// end-of-block
						r[2] = v[p++]; // simple code is just the value
					} else {
						r[0] = /* (byte) */(e[v[p] - s] + 16 + 64); // non-simple--look
						// up in lists
						r[2] = d[v[p++] - s];
					}

					// fill code-like entries with r
					f = 1 << (k - w);
					for (j = i >>> w; j < z; j += f) {
						hp.set(r, (q + j) * 3);
					}

					// backwards increment the k-bit code i
					for (j = 1 << (k - 1); (i & j) !== 0; j >>>= 1) {
						i ^= j;
					}
					i ^= j;

					// backup over finished tables
					mask = (1 << w) - 1; // needed on HP, cc -O bug
					while ((i & mask) != x[h]) {
						h--; // don't need to update q
						w -= l;
						mask = (1 << w) - 1;
					}
				}
			}
			// Return Z_BUF_ERROR if we were given an incomplete table
			return y !== 0 && g != 1 ? Z_BUF_ERROR : Z_OK;
		}

		function initWorkArea(vsize) {
			var i;
			if (!hn) {
				hn = []; // []; //new Array(1);
				v = []; // new Array(vsize);
				c = int32arrayCreator(BMAX + 1); // new Array(BMAX + 1);
				r = []; // new Array(3);
				u = int32arrayCreator(BMAX); // new Array(BMAX);
				x = int32arrayCreator(BMAX + 1); // new Array(BMAX + 1);
			}
			if (v.length < vsize) {
				v = []; // new Array(vsize);
			}
			for (i = 0; i < vsize; i++) {
				v[i] = 0;
			}
			for (i = 0; i < BMAX + 1; i++) {
				c[i] = 0;
			}
			for (i = 0; i < 3; i++) {
				r[i] = 0;
			}
			// for(int i=0; i<BMAX; i++){u[i]=0;}
			u.set(c.subarray(0, BMAX), 0);
			// for(int i=0; i<BMAX+1; i++){x[i]=0;}
			x.set(c.subarray(0, BMAX + 1), 0);
		}

		that.inflate_trees_bits = function(c, // 19 code lengths
		bb, // bits tree desired/actual depth
		tb, // bits tree result
		hp, // space for trees
		z // for messages
		) {
			var result;
			initWorkArea(19);
			hn[0] = 0;
			result = huft_build(c, 0, 19, 19, null, null, tb, bb, hp, hn, v);

			if (result == Z_DATA_ERROR) {
				z.msg = "oversubscribed dynamic bit lengths tree";
			} else if (result == Z_BUF_ERROR || bb[0] === 0) {
				z.msg = "incomplete dynamic bit lengths tree";
				result = Z_DATA_ERROR;
			}
			return result;
		};

		that.inflate_trees_dynamic = function(nl, // number of literal/length codes
		nd, // number of distance codes
		c, // that many (total) code lengths
		bl, // literal desired/actual bit depth
		bd, // distance desired/actual bit depth
		tl, // literal/length tree result
		td, // distance tree result
		hp, // space for trees
		z // for messages
		) {
			var result;

			// build literal/length tree
			initWorkArea(288);
			hn[0] = 0;
			result = huft_build(c, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
			if (result != Z_OK || bl[0] === 0) {
				if (result == Z_DATA_ERROR) {
					z.msg = "oversubscribed literal/length tree";
				} else if (result != Z_MEM_ERROR) {
					z.msg = "incomplete literal/length tree";
					result = Z_DATA_ERROR;
				}
				return result;
			}

			// build distance tree
			initWorkArea(288);
			result = huft_build(c, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);

			if (result != Z_OK || (bd[0] === 0 && nl > 257)) {
				if (result == Z_DATA_ERROR) {
					z.msg = "oversubscribed distance tree";
				} else if (result == Z_BUF_ERROR) {
					z.msg = "incomplete distance tree";
					result = Z_DATA_ERROR;
				} else if (result != Z_MEM_ERROR) {
					z.msg = "empty distance tree with lengths";
					result = Z_DATA_ERROR;
				}
				return result;
			}

			return Z_OK;
		};

	}

	InfTree.inflate_trees_fixed = function(bl, // literal desired/actual bit depth
	bd, // distance desired/actual bit depth
	tl,// literal/length tree result
	td// distance tree result
	) {
		bl[0] = fixed_bl;
		bd[0] = fixed_bd;
		tl[0] = fixed_tl;
		td[0] = fixed_td;
		return Z_OK;
	};

	// InfCodes

	// waiting for "i:"=input,
	// "o:"=output,
	// "x:"=nothing
	var START = 0; // x: set up for LEN
	var LEN = 1; // i: get length/literal/eob next
	var LENEXT = 2; // i: getting length extra (have base)
	var DIST = 3; // i: get distance next
	var DISTEXT = 4;// i: getting distance extra
	var COPY = 5; // o: copying bytes in window, waiting
	// for space
	var LIT = 6; // o: got literal, waiting for output
	// space
	var WASH = 7; // o: got eob, possibly still output
	// waiting
	var END = 8; // x: got eob and all data flushed
	var BADCODE = 9;// x: got error

	function InfCodes() {
		var that = this;

		var mode; // current inflate_codes mode

		// mode dependent information
		var len = 0;

		var tree; // pointer into tree
		var tree_index = 0;
		var need = 0; // bits needed

		var lit = 0;

		// if EXT or COPY, where and how much
		var get = 0; // bits to get for extra
		var dist = 0; // distance back to copy from

		var lbits = 0; // ltree bits decoded per branch
		var dbits = 0; // dtree bits decoder per branch
		var ltree; // literal/length/eob tree
		var ltree_index = 0; // literal/length/eob tree
		var dtree; // distance tree
		var dtree_index = 0; // distance tree

		// Called with number of bytes left to write in window at least 258
		// (the maximum string length) and number of input bytes available
		// at least ten. The ten bytes are six bytes for the longest length/
		// distance pair plus four bytes for overloading the bit buffer.

		function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
			var t; // temporary pointer
			var tp; // temporary pointer
			var tp_index; // temporary pointer
			var e; // extra bits or operation
			var b; // bit buffer
			var k; // bits in bit buffer
			var p; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer
			var ml; // mask for literal/length tree
			var md; // mask for distance tree
			var c; // bytes to copy
			var d; // distance back to copy from
			var r; // copy source pointer
			var zi;

			var tp_index_t_3; // (tp_index+t)*3

			// load input, output, bit values
			p = z.next_in_index;
			n = z.avail_in;
			b = s.bitb;
			k = s.bitk;
			q = s.write;
			m = q < s.read ? s.read - q - 1 : s.end - q;
			zi = z.next_in;
			// initialize masks
			ml = inflate_mask[bl];
			md = inflate_mask[bd];

			// do until not enough input or output space for fast loop
			do { // assume called with m >= 258 && n >= 10
				// get literal/length code
				while (k < (20)) { // max bits for literal/length code
					n--;
					b |= (zi[p++] & 0xff) << k;
					k += 8;
				}

				t = b & ml;
				tp = tl;
				tp_index = tl_index;
				tp_index_t_3 = (tp_index + t) * 3;
				if ((e = tp[tp_index_t_3]) === 0) {
					b >>= (tp[tp_index_t_3 + 1]);
					k -= (tp[tp_index_t_3 + 1]);

					s.window[q++] = /* (byte) */tp[tp_index_t_3 + 2];
					m--;
					continue;
				}
				do {

					b >>= (tp[tp_index_t_3 + 1]);
					k -= (tp[tp_index_t_3 + 1]);

					if ((e & 16) !== 0) {
						e &= 15;
						c = tp[tp_index_t_3 + 2] + (/* (int) */b & inflate_mask[e]);

						b >>= e;
						k -= e;

						// decode distance base of block to copy
						while (k < (15)) { // max bits for distance code
							n--;
							b |= (zi[p++] & 0xff) << k;
							k += 8;
						}

						t = b & md;
						tp = td;
						tp_index = td_index;
						tp_index_t_3 = (tp_index + t) * 3;
						e = tp[tp_index_t_3];

						do {

							b >>= (tp[tp_index_t_3 + 1]);
							k -= (tp[tp_index_t_3 + 1]);

							if ((e & 16) !== 0) {
								// get extra bits to add to distance base
								e &= 15;
								while (k < (e)) { // get extra bits (up to 13)
									n--;
									b |= (zi[p++] & 0xff) << k;
									k += 8;
								}

								d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]);

								b >>= (e);
								k -= (e);

								// do the copy
								m -= c;
								if (q >= d) { // offset before dest
									// just copy
									r = q - d;
									if (q - r > 0 && 2 > (q - r)) {
										s.window[q++] = s.window[r++]; // minimum
										// count is
										// three,
										s.window[q++] = s.window[r++]; // so unroll
										// loop a
										// little
										c -= 2;
									} else {
										s.window.set(s.window.subarray(r, r + 2), q);
										q += 2;
										r += 2;
										c -= 2;
									}
								} else { // else offset after destination
									r = q - d;
									do {
										r += s.end; // force pointer in window
									} while (r < 0); // covers invalid distances
									e = s.end - r;
									if (c > e) { // if source crosses,
										c -= e; // wrapped copy
										if (q - r > 0 && e > (q - r)) {
											do {
												s.window[q++] = s.window[r++];
											} while (--e !== 0);
										} else {
											s.window.set(s.window.subarray(r, r + e), q);
											q += e;
											r += e;
											e = 0;
										}
										r = 0; // copy rest from start of window
									}

								}

								// copy all or what's left
								if (q - r > 0 && c > (q - r)) {
									do {
										s.window[q++] = s.window[r++];
									} while (--c !== 0);
								} else {
									s.window.set(s.window.subarray(r, r + c), q);
									q += c;
									r += c;
									c = 0;
								}
								break;
							} else if ((e & 64) === 0) {
								t += tp[tp_index_t_3 + 2];
								t += (b & inflate_mask[e]);
								tp_index_t_3 = (tp_index + t) * 3;
								e = tp[tp_index_t_3];
							} else {
								z.msg = "invalid distance code";

								c = z.avail_in - n;
								c = (k >> 3) < c ? k >> 3 : c;
								n += c;
								p -= c;
								k -= c << 3;

								s.bitb = b;
								s.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								s.write = q;

								return Z_DATA_ERROR;
							}
						} while (true);
						break;
					}

					if ((e & 64) === 0) {
						t += tp[tp_index_t_3 + 2];
						t += (b & inflate_mask[e]);
						tp_index_t_3 = (tp_index + t) * 3;
						if ((e = tp[tp_index_t_3]) === 0) {

							b >>= (tp[tp_index_t_3 + 1]);
							k -= (tp[tp_index_t_3 + 1]);

							s.window[q++] = /* (byte) */tp[tp_index_t_3 + 2];
							m--;
							break;
						}
					} else if ((e & 32) !== 0) {

						c = z.avail_in - n;
						c = (k >> 3) < c ? k >> 3 : c;
						n += c;
						p -= c;
						k -= c << 3;

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;

						return Z_STREAM_END;
					} else {
						z.msg = "invalid literal/length code";

						c = z.avail_in - n;
						c = (k >> 3) < c ? k >> 3 : c;
						n += c;
						p -= c;
						k -= c << 3;

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;

						return Z_DATA_ERROR;
					}
				} while (true);
			} while (m >= 258 && n >= 10);

			// not enough input or output--restore pointers and return
			c = z.avail_in - n;
			c = (k >> 3) < c ? k >> 3 : c;
			n += c;
			p -= c;
			k -= c << 3;

			s.bitb = b;
			s.bitk = k;
			z.avail_in = n;
			z.total_in += p - z.next_in_index;
			z.next_in_index = p;
			s.write = q;

			return Z_OK;
		}

		that.init = function(bl, bd, tl, tl_index, td, td_index) {
			mode = START;
			lbits = /* (byte) */bl;
			dbits = /* (byte) */bd;
			ltree = tl;
			ltree_index = tl_index;
			dtree = td;
			dtree_index = td_index;
			tree = null;
		};

		that.proc = function(s, z, r) {
			var j; // temporary storage
			var tindex; // temporary pointer
			var e; // extra bits or operation
			var b = 0; // bit buffer
			var k = 0; // bits in bit buffer
			var p = 0; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer
			var f; // pointer to copy strings from

			// copy input/output information to locals (UPDATE macro restores)
			p = z.next_in_index;
			n = z.avail_in;
			b = s.bitb;
			k = s.bitk;
			q = s.write;
			m = q < s.read ? s.read - q - 1 : s.end - q;

			// process input and output based on current state
			while (true) {
				switch (mode) {
				// waiting for "i:"=input, "o:"=output, "x:"=nothing
				case START: // x: set up for LEN
					if (m >= 258 && n >= 10) {

						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;
						r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);

						p = z.next_in_index;
						n = z.avail_in;
						b = s.bitb;
						k = s.bitk;
						q = s.write;
						m = q < s.read ? s.read - q - 1 : s.end - q;

						if (r != Z_OK) {
							mode = r == Z_STREAM_END ? WASH : BADCODE;
							break;
						}
					}
					need = lbits;
					tree = ltree;
					tree_index = ltree_index;

					mode = LEN;
				case LEN: // i: get length/literal/eob next
					j = need;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}

					tindex = (tree_index + (b & inflate_mask[j])) * 3;

					b >>>= (tree[tindex + 1]);
					k -= (tree[tindex + 1]);

					e = tree[tindex];

					if (e === 0) { // literal
						lit = tree[tindex + 2];
						mode = LIT;
						break;
					}
					if ((e & 16) !== 0) { // length
						get = e & 15;
						len = tree[tindex + 2];
						mode = LENEXT;
						break;
					}
					if ((e & 64) === 0) { // next table
						need = e;
						tree_index = tindex / 3 + tree[tindex + 2];
						break;
					}
					if ((e & 32) !== 0) { // end of block
						mode = WASH;
						break;
					}
					mode = BADCODE; // invalid code
					z.msg = "invalid literal/length code";
					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case LENEXT: // i: getting length extra (have base)
					j = get;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}

					len += (b & inflate_mask[j]);

					b >>= j;
					k -= j;

					need = dbits;
					tree = dtree;
					tree_index = dtree_index;
					mode = DIST;
				case DIST: // i: get distance next
					j = need;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}

					tindex = (tree_index + (b & inflate_mask[j])) * 3;

					b >>= tree[tindex + 1];
					k -= tree[tindex + 1];

					e = (tree[tindex]);
					if ((e & 16) !== 0) { // distance
						get = e & 15;
						dist = tree[tindex + 2];
						mode = DISTEXT;
						break;
					}
					if ((e & 64) === 0) { // next table
						need = e;
						tree_index = tindex / 3 + tree[tindex + 2];
						break;
					}
					mode = BADCODE; // invalid code
					z.msg = "invalid distance code";
					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case DISTEXT: // i: getting distance extra
					j = get;

					while (k < (j)) {
						if (n !== 0)
							r = Z_OK;
						else {

							s.bitb = b;
							s.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							s.write = q;
							return s.inflate_flush(z, r);
						}
						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}

					dist += (b & inflate_mask[j]);

					b >>= j;
					k -= j;

					mode = COPY;
				case COPY: // o: copying bytes in window, waiting for space
					f = q - dist;
					while (f < 0) { // modulo window size-"while" instead
						f += s.end; // of "if" handles invalid distances
					}
					while (len !== 0) {

						if (m === 0) {
							if (q == s.end && s.read !== 0) {
								q = 0;
								m = q < s.read ? s.read - q - 1 : s.end - q;
							}
							if (m === 0) {
								s.write = q;
								r = s.inflate_flush(z, r);
								q = s.write;
								m = q < s.read ? s.read - q - 1 : s.end - q;

								if (q == s.end && s.read !== 0) {
									q = 0;
									m = q < s.read ? s.read - q - 1 : s.end - q;
								}

								if (m === 0) {
									s.bitb = b;
									s.bitk = k;
									z.avail_in = n;
									z.total_in += p - z.next_in_index;
									z.next_in_index = p;
									s.write = q;
									return s.inflate_flush(z, r);
								}
							}
						}

						s.window[q++] = s.window[f++];
						m--;

						if (f == s.end)
							f = 0;
						len--;
					}
					mode = START;
					break;
				case LIT: // o: got literal, waiting for output space
					if (m === 0) {
						if (q == s.end && s.read !== 0) {
							q = 0;
							m = q < s.read ? s.read - q - 1 : s.end - q;
						}
						if (m === 0) {
							s.write = q;
							r = s.inflate_flush(z, r);
							q = s.write;
							m = q < s.read ? s.read - q - 1 : s.end - q;

							if (q == s.end && s.read !== 0) {
								q = 0;
								m = q < s.read ? s.read - q - 1 : s.end - q;
							}
							if (m === 0) {
								s.bitb = b;
								s.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								s.write = q;
								return s.inflate_flush(z, r);
							}
						}
					}
					r = Z_OK;

					s.window[q++] = /* (byte) */lit;
					m--;

					mode = START;
					break;
				case WASH: // o: got eob, possibly more output
					if (k > 7) { // return unused byte, if any
						k -= 8;
						n++;
						p--; // can always return one
					}

					s.write = q;
					r = s.inflate_flush(z, r);
					q = s.write;
					m = q < s.read ? s.read - q - 1 : s.end - q;

					if (s.read != s.write) {
						s.bitb = b;
						s.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						s.write = q;
						return s.inflate_flush(z, r);
					}
					mode = END;
				case END:
					r = Z_STREAM_END;
					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				case BADCODE: // x: got error

					r = Z_DATA_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);

				default:
					r = Z_STREAM_ERROR;

					s.bitb = b;
					s.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					s.write = q;
					return s.inflate_flush(z, r);
				}
			}
		};

		that.free = function() {
			// ZFREE(z, c);
		};

	};



	// InfBlocks

	// Table for deflate from PKZIP's appnote.txt.
	var border = [ // Order of the bit length code lengths
	16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];

	var TYPE = 0; // get type bits (3, including end bit)
	var LENS = 1; // get lengths for stored
	var STORED = 2;// processing stored block
	var TABLE = 3; // get table lengths
	var BTREE = 4; // get bit lengths tree for a dynamic
	// block
	var DTREE = 5; // get length, distance trees for a
	// dynamic block
	var CODES = 6; // processing fixed or dynamic block
	var DRY = 7; // output remaining window bytes
	var DONELOCKS = 8; // finished last block, done
	var BADBLOCKS = 9; // ot a data error--stuck here
	
	function InfBlocks(z, w) {
		var that = this;

		var mode = TYPE; // current inflate_block mode

		var left = 0; // if STORED, bytes left to copy

		var table = 0; // table lengths (14 bits)
		var index = 0; // index into blens (or border)
		var blens; // bit lengths of codes
		var bb = [ 0 ]; // bit length tree depth
		var tb = [ 0 ]; // bit length decoding tree

		var codes = new InfCodes(); // if CODES, current state

		var last = 0; // true if this block is the last block

		var hufts = int32arrayCreator(MANY * 3); // single malloc for tree space
		var check = 0; // check on output
		var inftree = new InfTree();

		that.bitk = 0; // bits in bit buffer
		that.bitb = 0; // bit buffer
		that.window = arrayTypeCreator(w); // sliding window
		that.end = w; // one byte after sliding window
		that.read = 0; // window read pointer
		that.write = 0; // window write pointer

		that.reset = function(z, c) {
			if (c)
				c[0] = check;
			// if (mode == BTREE || mode == DTREE) {
			// }
			if (mode == CODES) {
				codes.free(z);
			}
			mode = TYPE;
			that.bitk = 0;
			that.bitb = 0;
			that.read = that.write = 0;
		};

		that.reset(z, null);

		// copy as much as possible from the sliding window to the output area
		that.inflate_flush = function(z, r) {
			var n;
			var p;
			var q;

			// local copies of source and destination pointers
			p = z.next_out_index;
			q = that.read;

			// compute number of bytes to copy as far as end of window
			n = /* (int) */((q <= that.write ? that.write : that.end) - q);
			if (n > z.avail_out)
				n = z.avail_out;
			if (n !== 0 && r == Z_BUF_ERROR)
				r = Z_OK;

			// update counters
			z.avail_out -= n;
			z.total_out += n;

			// copy as far as end of window
			if (z.next_out.insert)
			{
				//JH this is because of opera
				z.next_out = z.next_out.insert(that.window.subarray(q, q + n), p);
			}
			else
			{
				z.next_out.set(that.window.subarray(q, q + n), p);
			}
			
			p += n;
			q += n;

			// see if more to copy at beginning of window
			if (q == that.end) {
				// wrap pointers
				q = 0;
				if (that.write == that.end)
					that.write = 0;

				// compute bytes to copy
				n = that.write - q;
				if (n > z.avail_out)
					n = z.avail_out;
				if (n !== 0 && r == Z_BUF_ERROR)
					r = Z_OK;

				// update counters
				z.avail_out -= n;
				z.total_out += n;

				// copy
				if (z.next_out.insert)
				{
					z.next_out = z.next_out.insert(that.window.subarray(q, q + n), p);
				}
				else
				{
					z.next_out.set(that.window.subarray(q, q + n), p);
				}
				p += n;
				q += n;
			}

			// update pointers
			z.next_out_index = p;
			that.read = q;

			// done
			return r;
		};

		that.proc = function(z, r) {
			var t; // temporary storage
			var b; // bit buffer
			var k; // bits in bit buffer
			var p; // input data pointer
			var n; // bytes available there
			var q; // output window write pointer
			var m; // bytes to end of window or read pointer

			var i;

			// copy input/output information to locals (UPDATE macro restores)
			// {
			p = z.next_in_index;
			n = z.avail_in;
			b = that.bitb;
			k = that.bitk;
			// }
			// {
			q = that.write;
			m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
			// }

			// process input based on current state
			// DEBUG dtree
			while (true) {
				switch (mode) {
				case TYPE:

					while (k < (3)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}
						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}
					t = /* (int) */(b & 7);
					last = t & 1;

					switch (t >>> 1) {
					case 0: // stored
						// {
						b >>>= (3);
						k -= (3);
						// }
						t = k & 7; // go to byte boundary

						// {
						b >>>= (t);
						k -= (t);
						// }
						mode = LENS; // get length of stored block
						break;
					case 1: // fixed
						// {
						var bl = []; // new Array(1);
						var bd = []; // new Array(1);
						var tl = [ [] ]; // new Array(1);
						var td = [ [] ]; // new Array(1);

						InfTree.inflate_trees_fixed(bl, bd, tl, td);
						codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
						// }

						// {
						b >>>= (3);
						k -= (3);
						// }

						mode = CODES;
						break;
					case 2: // dynamic

						// {
						b >>>= (3);
						k -= (3);
						// }

						mode = TABLE;
						break;
					case 3: // illegal

						// {
						b >>>= (3);
						k -= (3);
						// }
						mode = BADBLOCKS;
						z.msg = "invalid block type";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					break;
				case LENS:

					while (k < (32)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}
						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}

					if ((((~b) >>> 16) & 0xffff) != (b & 0xffff)) {
						mode = BADBLOCKS;
						z.msg = "invalid stored block lengths";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					left = (b & 0xffff);
					b = k = 0; // dump bits
					mode = left !== 0 ? STORED : (last !== 0 ? DRY : TYPE);
					break;
				case STORED:
					if (n === 0) {
						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}

					if (m === 0) {
						if (q == that.end && that.read !== 0) {
							q = 0;
							m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
						}
						if (m === 0) {
							that.write = q;
							r = that.inflate_flush(z, r);
							q = that.write;
							m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
							if (q == that.end && that.read !== 0) {
								q = 0;
								m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
							}
							if (m === 0) {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
						}
					}
					r = Z_OK;

					t = left;
					if (t > n)
						t = n;
					if (t > m)
						t = m;
					that.window.set(z.read_buf(p, t), q);
					p += t;
					n -= t;
					q += t;
					m -= t;
					if ((left -= t) !== 0)
						break;
					mode = last !== 0 ? DRY : TYPE;
					break;
				case TABLE:

					while (k < (14)) {
						if (n !== 0) {
							r = Z_OK;
						} else {
							that.bitb = b;
							that.bitk = k;
							z.avail_in = n;
							z.total_in += p - z.next_in_index;
							z.next_in_index = p;
							that.write = q;
							return that.inflate_flush(z, r);
						}

						n--;
						b |= (z.next_in[p++] & 0xff) << k;
						k += 8;
					}

					table = t = (b & 0x3fff);
					if ((t & 0x1f) > 29 || ((t >> 5) & 0x1f) > 29) {
						mode = BADBLOCKS;
						z.msg = "too many length or distance symbols";
						r = Z_DATA_ERROR;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					t = 258 + (t & 0x1f) + ((t >> 5) & 0x1f);
					if (!blens || blens.length < t) {
						blens = []; // new Array(t);
					} else {
						for (i = 0; i < t; i++) {
							blens[i] = 0;
						}
					}

					// {
					b >>>= (14);
					k -= (14);
					// }

					index = 0;
					mode = BTREE;
				case BTREE:
					while (index < 4 + (table >>> 10)) {
						while (k < (3)) {
							if (n !== 0) {
								r = Z_OK;
							} else {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
							n--;
							b |= (z.next_in[p++] & 0xff) << k;
							k += 8;
						}

						blens[border[index++]] = b & 7;

						// {
						b >>>= (3);
						k -= (3);
						// }
					}

					while (index < 19) {
						blens[border[index++]] = 0;
					}

					bb[0] = 7;
					t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z);
					if (t != Z_OK) {
						r = t;
						if (r == Z_DATA_ERROR) {
							blens = null;
							mode = BADBLOCKS;
						}

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}

					index = 0;
					mode = DTREE;
				case DTREE:
					while (true) {
						t = table;
						if (!(index < 258 + (t & 0x1f) + ((t >> 5) & 0x1f))) {
							break;
						}

						var j, c;

						t = bb[0];

						while (k < (t)) {
							if (n !== 0) {
								r = Z_OK;
							} else {
								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}
							n--;
							b |= (z.next_in[p++]& 0xff) << k;
							k += 8;
						}

						// if (tb[0] == -1) {
						// System.err.println("null...");
						// }

						t = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 1];
						c = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 2];

						if (c < 16) {
							b >>>= (t);
							k -= (t);
							blens[index++] = c;
						} else { // c == 16..18
							i = c == 18 ? 7 : c - 14;
							j = c == 18 ? 11 : 3;

							while (k < (t + i)) {
								if (n !== 0) {
									r = Z_OK;
								} else {
									that.bitb = b;
									that.bitk = k;
									z.avail_in = n;
									z.total_in += p - z.next_in_index;
									z.next_in_index = p;
									that.write = q;
									return that.inflate_flush(z, r);
								}
								n--;
								b |= (z.next_in[p++] & 0xff) << k;
								k += 8;
							}

							b >>>= (t);
							k -= (t);

							j += (b & inflate_mask[i]);

							b >>>= (i);
							k -= (i);

							i = index;
							t = table;
							if (i + j > 258 + (t & 0x1f) + ((t >> 5) & 0x1f) || (c == 16 && i < 1)) {
								blens = null;
								mode = BADBLOCKS;
								z.msg = "invalid bit length repeat";
								r = Z_DATA_ERROR;

								that.bitb = b;
								that.bitk = k;
								z.avail_in = n;
								z.total_in += p - z.next_in_index;
								z.next_in_index = p;
								that.write = q;
								return that.inflate_flush(z, r);
							}

							c = c == 16 ? blens[i - 1] : 0;
							do {
								blens[i++] = c;
							} while (--j !== 0);
							index = i;
						}
					}

					tb[0] = -1;
					// {
					var bl_ = []; // new Array(1);
					var bd_ = []; // new Array(1);
					var tl_ = []; // new Array(1);
					var td_ = []; // new Array(1);
					bl_[0] = 9; // must be <= 9 for lookahead assumptions
					bd_[0] = 6; // must be <= 9 for lookahead assumptions

					t = table;
					t = inftree.inflate_trees_dynamic(257 + (t & 0x1f), 1 + ((t >> 5) & 0x1f), blens, bl_, bd_, tl_, td_, hufts, z);

					if (t != Z_OK) {
						if (t == Z_DATA_ERROR) {
							blens = null;
							mode = BADBLOCKS;
						}
						r = t;

						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
					// }
					mode = CODES;
				case CODES:
					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;

					if ((r = codes.proc(that, z, r)) != Z_STREAM_END) {
						return that.inflate_flush(z, r);
					}
					r = Z_OK;
					codes.free(z);

					p = z.next_in_index;
					n = z.avail_in;
					b = that.bitb;
					k = that.bitk;
					q = that.write;
					m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);

					if (last === 0) {
						mode = TYPE;
						break;
					}
					mode = DRY;
				case DRY:
					that.write = q;
					r = that.inflate_flush(z, r);
					q = that.write;
					m = /* (int) */(q < that.read ? that.read - q - 1 : that.end - q);
					if (that.read != that.write) {
						that.bitb = b;
						that.bitk = k;
						z.avail_in = n;
						z.total_in += p - z.next_in_index;
						z.next_in_index = p;
						that.write = q;
						return that.inflate_flush(z, r);
					}
					mode = DONELOCKS;
				case DONELOCKS:
					r = Z_STREAM_END;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);
				case BADBLOCKS:
					r = Z_DATA_ERROR;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);

				default:
					r = Z_STREAM_ERROR;

					that.bitb = b;
					that.bitk = k;
					z.avail_in = n;
					z.total_in += p - z.next_in_index;
					z.next_in_index = p;
					that.write = q;
					return that.inflate_flush(z, r);
				}
			}
		};

		that.free = function(z) {
			that.reset(z, null);
			that.window = null;
			hufts = null;
			// ZFREE(z, s);
		};

		that.set_dictionary = function(d, start, n) {
			that.window.set(d.subarray(start, start + n), 0);
			that.read = that.write = n;
		};

		// Returns true if inflate is currently at the end of a block generated
		// by Z_SYNC_FLUSH or Z_FULL_FLUSH.
		that.sync_point = function() {
			return mode == LENS ? 1 : 0;
		};

		};



	// Inflate

	// preset dictionary flag in zlib header
	var PRESET_DICT = 0x20;

	var Z_DEFLATED = 8;

	var METHOD = 0; // waiting for method byte
	var FLAG = 1; // waiting for flag byte
	var DICT4 = 2; // four dictionary check bytes to go
	var DICT3 = 3; // three dictionary check bytes to go
	var DICT2 = 4; // two dictionary check bytes to go
	var DICT1 = 5; // one dictionary check byte to go
	var DICT0 = 6; // waiting for inflateSetDictionary
	var BLOCKS = 7; // decompressing blocks
	var DONE = 12; // finished check, done
	var BAD = 13; // got an error--stay here

	var mark = [ 0, 0, 0xff, 0xff ];

	function Inflate() {
		var that = this;

		that.mode = 0; // current inflate mode

		// mode dependent information
		that.method = 0; // if FLAGS, method byte

		// if CHECK, check values to compare
		that.was = [ 0 ]; // new Array(1); // computed check value
		that.need = 0; // stream check value

		// if BAD, inflateSync's marker bytes count
		that.marker = 0;

		// mode independent information
		that.wbits = 0; // log2(window size) (8..15, defaults to 15)

		// this.blocks; // current inflate_blocks state

		function inflateReset(z) {
			if (!z || !z.istate)
				return Z_STREAM_ERROR;

			z.total_in = z.total_out = 0;
			z.msg = null;
			z.istate.mode = BLOCKS;
			z.istate.blocks.reset(z, null);
			return Z_OK;
		}

		that.inflateEnd = function(z) {
			if (that.blocks)
				that.blocks.free(z);
			that.blocks = null;
			// ZFREE(z, z->state);
			return Z_OK;
		};

		that.inflateInit = function(z, w) {
			z.msg = null;
			that.blocks = null;

			// set window size
			if (w < 8 || w > 15) {
				that.inflateEnd(z);
				return Z_STREAM_ERROR;
			}
			that.wbits = w;

			z.istate.blocks = new InfBlocks(z, 1 << w);

			// reset state
			inflateReset(z);
			return Z_OK;
		};

		that.inflate = function(z, f) {
			var r;
			var b;

			if (!z || !z.istate || !z.next_in)
				return Z_STREAM_ERROR;
			f = f == Z_FINISH ? Z_BUF_ERROR : Z_OK;
			r = Z_BUF_ERROR;
			while (true) {
				// System.out.println("mode: "+z.istate.mode);
				switch (z.istate.mode) {
				case METHOD:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					if (((z.istate.method = z.next_in[z.next_in_index++]) & 0xf) != Z_DEFLATED) {
						z.istate.mode = BAD;
						z.msg = "unknown compression method";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}
					if ((z.istate.method >> 4) + 8 > z.istate.wbits) {
						z.istate.mode = BAD;
						z.msg = "invalid window size";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}
					z.istate.mode = FLAG;
				case FLAG:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					b = (z.next_in[z.next_in_index++]) & 0xff;

					if ((((z.istate.method << 8) + b) % 31) !== 0) {
						z.istate.mode = BAD;
						z.msg = "incorrect header check";
						z.istate.marker = 5; // can't try inflateSync
						break;
					}

					if ((b & PRESET_DICT) === 0) {
						z.istate.mode = BLOCKS;
						break;
					}
					z.istate.mode = DICT4;
				case DICT4:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need = ((z.next_in[z.next_in_index++] & 0xff) << 24) & 0xff000000;
					z.istate.mode = DICT3;
				case DICT3:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += ((z.next_in[z.next_in_index++] & 0xff) << 16) & 0xff0000;
					z.istate.mode = DICT2;
				case DICT2:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += ((z.next_in[z.next_in_index++] & 0xff) << 8) & 0xff00;
					z.istate.mode = DICT1;
				case DICT1:

					if (z.avail_in === 0)
						return r;
					r = f;

					z.avail_in--;
					z.total_in++;
					z.istate.need += (z.next_in[z.next_in_index++] & 0xff);
					z.istate.mode = DICT0;
					return Z_NEED_DICT;
				case DICT0:
					z.istate.mode = BAD;
					z.msg = "need dictionary";
					z.istate.marker = 0; // can try inflateSync
					return Z_STREAM_ERROR;
				case BLOCKS:

					r = z.istate.blocks.proc(z, r);
					if (r == Z_DATA_ERROR) {
						z.istate.mode = BAD;
						z.istate.marker = 0; // can try inflateSync
						break;
					}
					if (r == Z_OK) {
						r = f;
					}
					if (r != Z_STREAM_END) {
						return r;
					}
					r = f;
					z.istate.blocks.reset(z, z.istate.was);
					z.istate.mode = DONE;
				case DONE:
					return Z_STREAM_END;
				case BAD:
					return Z_DATA_ERROR;
				default:
					return Z_STREAM_ERROR;
				}
			}
		};

		that.inflateSetDictionary = function(z, dictionary, dictLength) {
			var index = 0;
			var length = dictLength;
			if (!z || !z.istate || z.istate.mode != DICT0)
				return Z_STREAM_ERROR;

			if (length >= (1 << z.istate.wbits)) {
				length = (1 << z.istate.wbits) - 1;
				index = dictLength - length;
			}
			z.istate.blocks.set_dictionary(dictionary, index, length);
			z.istate.mode = BLOCKS;
			return Z_OK;
		};

		that.inflateSync = function(z) {
			var n; // number of bytes to look at
			var p; // pointer to bytes
			var m; // number of marker bytes found in a row
			var r, w; // temporaries to save total_in and total_out

			// set up
			if (!z || !z.istate)
				return Z_STREAM_ERROR;
			if (z.istate.mode != BAD) {
				z.istate.mode = BAD;
				z.istate.marker = 0;
			}
			if ((n = z.avail_in) === 0)
				return Z_BUF_ERROR;
			p = z.next_in_index;
			m = z.istate.marker;

			// search
			while (n !== 0 && m < 4) {
				if (z.read_byte(p) == mark[m]) {
					m++;
				} else if (z.read_byte(p) !== 0) {
					m = 0;
				} else {
					m = 4 - m;
				}
				p++;
				n--;
			}

			// restore
			z.total_in += p - z.next_in_index;
			z.next_in_index = p;
			z.avail_in = n;
			z.istate.marker = m;

			// return no joy or set up to restart on a new block
			if (m != 4) {
				return Z_DATA_ERROR;
			}
			r = z.total_in;
			w = z.total_out;
			inflateReset(z);
			z.total_in = r;
			z.total_out = w;
			z.istate.mode = BLOCKS;
			return Z_OK;
		};

		// Returns true if inflate is currently at the end of a block generated
		// by Z_SYNC_FLUSH or Z_FULL_FLUSH. This function is used by one PPP
		// implementation to provide an additional safety check. PPP uses
		// Z_SYNC_FLUSH
		// but removes the length bytes of the resulting empty stored block. When
		// decompressing, PPP checks that at the end of input packet, inflate is
		// waiting for these length bytes.
		that.inflateSyncPoint = function(z) {
			if (!z || !z.istate || !z.istate.blocks)
				return Z_STREAM_ERROR;
			return z.istate.blocks.sync_point();
		};
	};
	
	
	// ZStream

	function ZStream() {
	}

	ZStream.prototype = {
		inflateInit : function(bits) {
			var that = this;
			that.istate = new Inflate();
			if (!bits)
				bits = MAX_BITS;
			return that.istate.inflateInit(that, bits);
		},

		inflate : function(f) {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflate(that, f);
		},

		inflateEnd : function() {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			var ret = that.istate.inflateEnd(that);
			that.istate = null;
			return ret;
		},

		inflateSync : function() {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflateSync(that);
		},
		inflateSetDictionary : function(dictionary, dictLength) {
			var that = this;
			if (!that.istate)
				return Z_STREAM_ERROR;
			return that.istate.inflateSetDictionary(that, dictionary, dictLength);
		},
		read_byte : function(start) {
			var that = this;
			if (that.next_in.readNumber)
			{
				return that.next_in.readNumber(1,start);
			}
			//return that.next_in.subarray(start, start + 1)[0];
			return that.next_in[start];
		},
		read_buf : function(start, size) {
			var that = this;
			return that.next_in.subarray(start, start + size);
		}
	};

	// Inflater

	function Inflater() {
		var that = this;
		var z = new ZStream();
		var bufsize = 512;
		var flush = Z_NO_FLUSH;
		var buf = arrayTypeCreator(bufsize);


		z.inflateInit();
		z.next_out = buf;

		that.append = function(data) {
			var err, buffers = [];
			if (data.length === 0)
				return;
			z.next_in_index = 0;
			z.next_in = data;
			z.avail_in = data.length;
			
			do {
				z.next_out_index = 0;
				z.avail_out = bufsize;
							
				err = z.inflate(flush);
				
						
				if (err != Z_OK && err != Z_STREAM_END  && err != Z_BUF_ERROR)
					throw "inflating: " + z.msg;
				
				if (z.next_out_index)
					if (z.next_out_index == bufsize)
						buffers.push(arrayTypeCreator(z.next_out));
					else
						buffers.push(arrayTypeCreator(z.next_out.subarray(0, z.next_out_index)));
			
//				console.log(z.avail_in +" "+ z.avail_out);
			
			} while (z.avail_out === 0);			

			
			return buffers;
		};
		that.flush = function() {
			z.inflateEnd();
		};
	}

	zip.Inflater = Inflater;	

}(
vitrium.zip,
__globals__
));

// script:viewer\io\remote-file.js
(function (exports, bin) {
	"use strict";

	var ERR_ETAG_CHANGED = 0xFFFF;

	exports.RemoteFile = RemoteFile;

	function RemoteFile(url, loader) {
		this.url = url;
		this.loader = loader || bin;
		this.etag = null;
		this.size = null;
	}

	var ETAG_RE = /.*["](.+)["]/;

	RemoteFile.prototype = {
		init : function (success, error, endbyte) {
			if (typeof endbyte === "undefined") {
				endbyte = 2;
			}

			var self = this;

			var url = this.url;

			if (url.indexOf("?") === -1) {
				url += "?";
			} else {
				url += "&";
			}

			url += "_ts=" + Date.now().toString(16);
         
			return this.loader.loadData({
				url : url,
				headers : [
                    ["Cache-Control", "no-cache"],
                    ["Range", "bytes=0-" + endbyte],
                    ["x-dd-enabled", "true"]
                  ],
				method : "GET",

				success : function (data, xhr) {
					var contentRange = xhr.getResponseHeader("Content-Range");

					var contentLen = 0;
					if (contentRange) {
						var idx = contentRange.indexOf("/");
						if (idx !== -1 && (idx + 1) < contentRange.length) {
							contentLen = contentRange.substring(idx + 1, contentRange.length);
						}
					}

					var etag = xhr.getResponseHeader("ETag");
					if (etag) {
						var etagM = etag.match(ETAG_RE);
						if (etagM && etagM.length == 2) {
							etag = etagM[1];
						}

					} else {
						etag = null;
					}
					self.etag = etag;

					if (contentLen > 0) {
						self.size = parseInt(contentLen, 10);
						success(self.size, self.etag, data, xhr.getResponseHeader("x-supports-dd"));
					} else {
						error();
					}
				},
				error : error
			});
		},
		checkETag : function (success, error) {
			var url = this.url;
			if (url.indexOf("?") == -1) {
				url += "?";
			} else {
				url += "&";
			}
			url += "_ts=" + Date.now().toString(16);

			var self = this;
			this.loader.loadData({
				url : url,
				headers : [["Cache-Control", "no-cache"],
					["Range", "bytes=0-1"]
				],
				method : "GET",
				success : function (data, xhr) {
					var contentRange = xhr.getResponseHeader("Content-Range");
					var etag = xhr.getResponseHeader("ETag");
					if (etag) {
						var etagM = etag.match(ETAG_RE);
						if (etagM && etagM.length == 2) {
							etag = etagM[1];
						}

					} else {
						etag = null;
					}

					success(self.etag === etag);
				},
				error : error
			});

		},
		readAndDecode : function (index, length, callback, onerror, encoding, contentType) {
			if (!index) {
				index = 0;
			}

			if (!contentType) {
				contentType = "text/plain; charset=utf-8";
			}

			//vitrium.log.debug("read: "+index+ " len:"+length);

			var len = this.size;

			if (len > 0) {
				var start = index;
				var end = (index + length) - 1;
				var url = this.url;
				if (url.indexOf("?") == -1) {
					url += "?";
				} else {
					url += "&";
				}

				var blockId = "_ts=" + Date.now().toString(16);

				url += blockId;

				if (start < len && end < len) {
					var self = this;
					return this.loader.loadData({
					   method: "GET",
                  directDecode: true,
						url : url,
						headers : [
							["Range", "bytes=" + start + "-" + end],
							["Cache-Control", "no-cache"],
							["x-dd-enabled", "true"],
							["x-dd", encoding + "|" + contentType]
						],
						success : function (data, xhr) {
							var etag = xhr.getResponseHeader("ETag");
							if (etag) {
								var etagM = etag.match(ETAG_RE);
								if (etagM && etagM.length == 2) {
									etag = etagM[1];
								}
							} else {
								etag = null;
							}

							if (etag !== self.etag) {
								onerror(ERR_ETAG_CHANGED, xhr);
							} else {
								callback(data);
							}
						},
						error : function (err, xhr) {
							var h = false;
							if (err === 416) {
								var etag = xhr.getResponseHeader("ETag");
								if (!etag) {
									etag = null;
								}

								if (etag !== self.etag) {
									onerror(ERR_ETAG_CHANGED, xhr);
									h = true;
								}
							}

							if (!h) {
								onerror(err, xhr);
							}
						}
					});
				} else {
					onerror("The requested range of bytes is out of range: fileLen:" + len + " start:" + start + " end:" + end);
				}
			} else {
				onerror("The file is empty or must be initialized first");
			}

			return null;
		},
		readUint8Array : function (index, length, callback, onerror) {

			if (!index) {
				index = 0;
			}

			//vitrium.log.debug("read: "+index+ " len:"+length);

			var len = this.size;

			if (len > 0) {
				var start = index;
				var end = (index + length) - 1;
				var url = this.url;
				if (url.indexOf("?") == -1) {
					url += "?";
				} else {
					url += "&";
				}

				//var blockId = "_rfStart="+start+"&_rfEnd="+end+"&_ts="+new Date().getTime().toString(16);
				var blockId = "_ts=" + Date.now().toString(16);
				/*var blocks = this.blocks;
				var buffer = blocks[blockId];
				if (buffer){
				buffer.readUint8Array(0, length, callback, onerror);
				}*/

				url += blockId;

				if (start < len && end < len) {
					var self = this;
					return this.loader.loadData({
						method : "GET",
						url : url,
						headers : [
							["Range", "bytes=" + start + "-" + end],
							["Cache-Control", "no-cache"]
						],
						success : function (data, xhr) {
							var buffer = new bin.DataBuffer();
							buffer.attachData(data);

							var etag = xhr.getResponseHeader("ETag");
							if (etag) {
								var etagM = etag.match(ETAG_RE);
								if (etagM && etagM.length == 2) {
									etag = etagM[1];
								}
							} else {
								etag = null;
							}

							if (etag !== self.etag) {
								onerror(ERR_ETAG_CHANGED, xhr);
							} else {
								buffer.readUint8Array(0, length, callback, onerror);
							}
						},
						error : function (err, xhr) {
							var h = false;
							if (err === 416) {
								var etag = xhr.getResponseHeader("ETag");
								if (!etag) {
									etag = null;
								}

								if (etag !== self.etag) {
									onerror(ERR_ETAG_CHANGED, xhr);
									h = true;
								}
							}

							if (!h) {
								onerror(err, xhr);
							}
						}
					});
				} else {
					onerror("The requested range of bytes is out of range: fileLen:" + len + " start:" + start + " end:" + end);
				}
			} else {
				onerror("The file is empty or must be initialized first");
			}

			return null;
		}

	};

}(
vitrium.bin, 
vitrium.bin));
// script:viewer\io\io-scheduler.js
(function(exports, bin, vitrium, _, globals)
{
	"use strict";
	var isDomReady = !!globals.document;
	exports.IOScheduler = IOScheduler;
	
	function IOScheduler(limit, loader)
	{
		this.limit = limit;
		this.numRequest = 0;
		this.queue = [];
		
		this.loader = loader || bin;
	}
	
	var IOSP = IOScheduler.prototype; 
	IOSP.loadData = function(options)
	{
		//vitrium.log.debug("load data: "+options.url);
		var req = new IORequest(this, options);
		this.queue.push(req);
		this.execute();
		
		return req;
	};
	
	IOSP.abort = function (request)
	{
		this.queue = _.without(this.queue, request);
	};
	
	IOSP.release = function (request)
	{
		if (isDomReady)
		{
			var self = this;
			setTimeout(function(){
				--self.numRequest;
				self.execute();
			},0);
		}
		else
		{
			--this.numRequest;
			this.execute();
		}
	};
	
	IOSP.execute = function ()
	{
		var reqs = this.queue;
		var execute = Math.min(this.limit - this.numRequest, reqs.length);
		for (var i =  execute; i--;)
		{
			var r = reqs.shift();
			r.xhr = this.loader.loadData(r.request);
		}
		
		this.numRequest += execute;		
	};
	
	function IORequest(scheduler, options)
	{
		this.scheduler = scheduler;
		var request = this.request = _.clone(options);
		
		this.success = options.success || noop;
		this.error = options.error || noop;
		this.xhr = null;
		
		request.success = _.bind(onSuccess, this);
		request.error =  _.bind(onError, this);
	}
	
	IORequest.prototype.abort = function()
	{
		if (this.xhr)
		{
			this.xhr.abort();
			this.xhr = null;
		}
		
		if (this.scheduler)
		{
			this.scheduler.abort(this);
			this.scheduler.release(this);
			
			this.scheduler = null;
		}
	};
	
	
	var lastResult = 0;
	
	function onSuccess()
	{
		this.success.apply(this, arguments);		
		this.xhr = null;
		
		releaseRequest.call(this);
	}
	
	function onError()
	{
		releaseRequest.call(this);
		
		this.error.apply(this, arguments);		
		this.xhr = null;
		
		
	}
	
	function releaseRequest()
	{
		if (this.scheduler)
		{
			this.scheduler.release(this);
			this.scheduler = null;
		}
	}
	
	
	function noop(){};
	
}(
vitrium.bin, 
vitrium.bin,
vitrium,
_,
__globals__));
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
// script:viewer\io\binary-image-decoder.js
(function (exports, log, _, global) 
{
	"use strict";

	_.extend(exports, {
		Base64BinaryImageDecoder :  Base64BinaryImageDecoder,
		ChunkBuffer: ChunkBuffer
	});
	
	
	//
	function ChunkBuffer() {		
		this.tmp_arr = null; 
	}
	
	var CB = ChunkBuffer.prototype;
	CB.init = function(callback) 
	{
		this.tmp_arr = [];
		callback();
	};
	
	CB.writeUint8Array = function(arrays, callback) 
	{
		for (var i = 0, len = arrays.length; i < len; ++i)
		{
			this.tmp_arr.push(arrays[i]);	
		}
		
		callback();
	};
	
	CB.getData = function(callback, onerror) 
	{	
		callback(this.tmp_arr);
	};
	
	
	var LOOKUP_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");
	function Base64BinaryImageDecoder(len, entry) {		
		this.tmp_arr = null; 
		this.len = len;
		this.o1 = this.o2 = this.o3 = this.ac = this.pos = 0;
		this.userData = entry.userData;
	}

	var UDP = Base64BinaryImageDecoder.prototype;
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
			if (this.tmp_arr === null) {	return;	}
		
			for (var i = 0, len = arrays.length; i < len; ++i)
			{
					this.addToBase64(arrays[i]);
			}
		
			callback();
		};
		
		UDP.getData = function(callback, onerror) 
		{	
			var b64 = LOOKUP_TABLE;
			var step = this.pos % 3;
			var tmp_arr = this.tmp_arr;
			if (step !== 0)
			{
				var o1 = this.o1, o2 = this.o2, o3 = this.o3;
				switch(step)
				{
					case 1: 
						o2 = 0;
					case 2:
						o3 = 0;
					break;			
				}
				
				var bits =  o1 << 16 | o2 << 8 | o3;
				var h1 = bits >> 18 & 0x3f;
				var h2 = bits >> 12 & 0x3f;
				var h3 = bits >> 6 & 0x3f;
				var h4 = bits & 0x3f;
				
				switch(step)
				{
					case 1: 
						h3 = h4 = 64;
					case 2:
						h4 = 64;
					break;			
				}
				
				var ac = this.ac;
				tmp_arr[ac] = b64[h1] + b64[h2] + b64[h3] + b64[h4];
			}
		
			
			var userData = this.userData;
			callback([{ 
				key : userData.key,
				data : "data:"+userData.mimetype+";base64,"+tmp_arr.join(''), 
				level : 0,
				dpi : userData.dpi
			}]);
		};
		
		UDP.addToBase64 = function(array) {
			var b64 = LOOKUP_TABLE;
			var o1 = this.o1,
			o2 = this.o2, 
			o3 = this.o3, 
			ac = this.ac,
			pos = this.pos;
			
			var tmp_arr = this.tmp_arr;
			var len = array.length;
	
			var h1 = 0,
			h2 = 0,
			h3 = 0,
			h4 = 0,
			bits = 0; 
		
			if (array.readNumber)
			{
				
				for (var i = 0; i < len; ++i) 
				{	
					var step = (pos + i + 1) % 3;
					var b = array.readNumber(1, i);
					switch (step)
					{
						case 1:
							o1 =  b;
						break;
						case 2: 
							o2 =  b;
						break;
						case 0:
							o3 = b;
							
							bits =  o1 << 16 | o2 << 8 | o3;
							
							h1 = bits >> 18 & 0x3f;
							h2 = bits >> 12 & 0x3f;
							h3 = bits >> 6 & 0x3f;
							h4 = bits & 0x3f;
							
							tmp_arr[ac++] = b64[h1] + b64[h2] + b64[h3] + b64[h4];
						break;						
					}	
				}	
			}
			else
			{	
				for (var i = 0; i < len; ++i) 
				{	
					var step = (pos + i + 1) % 3;
					var b = array[i];
					switch (step)
					{
						case 1:
							o1 =  b;
						break;
						case 2: 
							o2 =  b;
						break;
						case 0:
							o3 = b;
							
							bits =  o1 << 16 | o2 << 8 | o3;
							
							h1 = bits >> 18 & 0x3f;
							h2 = bits >> 12 & 0x3f;
							h3 = bits >> 6 & 0x3f;
							h4 = bits & 0x3f;
							
							tmp_arr[ac++] = b64[h1] + b64[h2] + b64[h3] + b64[h4];
						break;						
					}	
				}	
			}
		
		this.pos = pos + len;
		this.ac = ac;
		this.o1 = o1;
		this.o2 = o2;
		this.o3 = o3;
	};
	
	
	
}(
vitrium.bin,
vitrium.log, 
_, 
__globals__
));
// script:viewer\io\g4s-io-chunk-processors.js
(function(exports, utils, bin, globals, CRC32, zip, CryptoJS)
{

	"use strict";
	
	var isTypedArraysSupported = !!globals.ArrayBuffer;
	var CHUNK_SIZE = isTypedArraysSupported ? 1000000 : 500000 ; 
	
	
	var getDataHelper = bin.getDataHelper;

	var launchProcess;
	if (isTypedArraysSupported)
	{
			launchProcess = function(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror) {
			var chunkIndex = 0, index, outputSize = 0;
			var abort = new AbortHandler();
			
			function step() {
				var outputData;
				index = chunkIndex * CHUNK_SIZE;
				if (index < size)
					abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
						var outputData = process.append(inputData, function() {
							if (onprogress)
								onprogress(offset + index, size);
						});
						
						if (outputData === -1)
						{
							chunkIndex++;
							step();
						}
						outputSize += outputData.length;
						onappend(true, inputData);
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							chunkIndex++;
							step();
							//setTimeout(step, 1);
													
						}, onwriteerror);
						if (onprogress)
							onprogress(index, size);
					}, onreaderror);
				else {
					outputData = process.flush();
					if (outputData) {
						outputSize += outputData.length;
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							onend(outputSize);
						}, onwriteerror);
					} else
						onend(outputSize);
				}
			}

			step();
			
			return abort;
		};
	
	}
	else
	{
	launchProcess = function(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror) {
			var chunkIndex = 0, index, outputSize = 0;
			var abort = new AbortHandler();
			
			function step() {
				var outputData;
				index = chunkIndex * CHUNK_SIZE;
				if (index < size)
					abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
						var suboffset = 0;
						var rem = inputData.length;
						function substep()
						{
							if (rem > 0)
							{
				
									var lastoffset = suboffset + Math.min(rem, 1024);
									var chunk;
									if (offset == 0 && lastoffset === rem)
									{
										chunk = inputData;
									}
									else
									{
										chunk = inputData.subarray(suboffset, lastoffset);
									}
									var chsize = lastoffset - suboffset;
									suboffset += chsize;
									rem -= chsize;
									
									var outputData = process.append(chunk, function() {
										if (onprogress)
											onprogress(offset + suboffset, size);
									});
									
									onappend(true, inputData);
									if (outputData === -1)
									{
										var t = setTimeout(substep, 1);
										abort.req = { abort : function(){ clearTimeout(t);}};
									}
									else
									{
										outputSize += outputData.length;
										writer.writeUint8Array(outputData, function() {
											onappend(false, outputData);
											var t = setTimeout(substep, 1);
											abort.req = { abort : function(){ clearTimeout(t);}};
										}, onwriteerror);
									}
									
								if (onprogress)
									onprogress(index, size);
							}
							else
							{
								chunkIndex++;
								step();
							}
						}
						substep();
						
					}, onreaderror);
				else {
					outputData = process.flush();
					if (outputData) {
						outputSize += outputData.length;
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							onend(outputSize);
						}, onwriteerror);
					} else
						onend(outputSize);
				}
			}

			step();
			
			return abort;
		};
	
	}
	
		

	function inflate(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var worker, crc32 = new CRC32();
		var abort = new AbortHandler();
		
		function oninflateappend(sending, array) {
			if (computeCrc32 && !sending)
				crc32.append(array);
		}

		function oninflateend(outputSize) {
			onend(outputSize, crc32.get());
		}
	
		var inflater = new zip.Inflater();
		abort.req = launchProcess(inflater, reader, writer, offset, size, oninflateappend, onprogress, oninflateend, onreaderror, onwriteerror);
		
		return abort;
	}

	function copy(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var chunkIndex = 0, crc32 = new CRC32();
		var abort = new AbortHandler();
		
		function step() {
			var index = chunkIndex * CHUNK_SIZE;
			if (index < size)
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					if (computeCrc32)
						crc32.append(array);
					if (onprogress)
						onprogress(index, size, array);
					writer.writeUint8Array([array], function() {
						chunkIndex++;
						step();
					}, onwriteerror);
				}, onreaderror);
			else
				onend(size, crc32.get());
		}

		step();
		
		return abort;
	}
	
	function aesHashEq(hmac, hmacChksum)
	{
		var hash = utils.u8array.stringify({ words : hmac.hasher.hash, sigBytes: 20});
				
		if (hmacChksum.readByteAt)
		{
		
			for (var i = 0; i < 10; ++i)
			{
				if (hash[i] != hmacChksum.readByteAt(i))
				{
					return false;
				}
			}
		}
		else
		{
			for (var i = 0; i < 10; ++i)
			{
				if (hash[i] != hmacChksum[i])
				{
					return false;
				}
			}
		}
		
		return true;
	}
	
	function aesCopy(reader, writer, offset, size, onend, onprogress, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) {
		var chunkIndex = 0;
		var abort = new AbortHandler();

		function step() {
			var index = chunkIndex * CHUNK_SIZE;
			if (index < size)
			{
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					var wordArray = utils.u8array.parse(array);
					hmac.update(wordArray);
					
					var deryptedChuck = aesDecryptor.process(wordArray);
					
					if (onprogress)
						onprogress(index, size, array);
					
					if (deryptedChuck.sigBytes > 0)
					{										
						var dBytes = utils.u8array.stringify(deryptedChuck);
						
						writer.writeUint8Array([dBytes], function() {
							chunkIndex++;
							step();
						}, onwriteerror);
					}
					else
					{
						chunkIndex++;
						step();
					}
				}, onreaderror);
			}
			else
			{
				hmac.finalize();
			
				
				if (aesHashEq(hmac, hmacChksum))
				{	
					var deryptedChuck = aesDecryptor.finalize();
					if (deryptedChuck.sigBytes > 0)
					{										
						var dBytes = utils.u8array.stringify(deryptedChuck);	
						writer.writeUint8Array(dBytes, function() {
							onend(size);
						}, onwriteerror);
					}
					else
					{
						onend(size);
					}
				}
				else
				{
					onbadpassword();
				}
			}
		}

		step();
		
		return abort;
	}
	
	
	function aesInflate(reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) 
	{
		var worker, crc32 = new CRC32();		
		var abort = new AbortHandler();

		function oninflateappend(sending, array) {
			if (computeCrc32 && !sending)
				crc32.append(array);
		}

		function oninflateend(outputSize) {
			onend(outputSize, crc32.get());
		}

		var inflater = new zip.Inflater();
		abort.req = aesLaunchProcess(inflater, reader, writer, offset, size, oninflateappend, onprogress, oninflateend, onreaderror, onwriteerror , aesDecryptor, hmac, hmacChksum, onbadpassword);
				
		return abort;
	}
	
	function convertCryptoArray(array)
	{
		if (!isTypedArraysSupported)
		{
			var buffer = new bin.DataBuffer();
			buffer.attachData(array);
			array = buffer;
		}
		return array;
	}
	
	var aesLaunchProcess;
	if (isTypedArraysSupported)
	{
		aesLaunchProcess = function(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) 
		{
		var chunkIndex = 0, index, outputSize = 0;
		var aesFlushed = false;
		var abort = new AbortHandler();
		
		function step() {
			var outputData;
			index = chunkIndex * CHUNK_SIZE;
			
			if (aesFlushed)
			{
				outputData = process.flush();
				if (outputData) {
					outputSize += outputData.length;
					writer.writeUint8Array(outputData, function() {
						onappend(false, outputData);
						onend(outputSize);
					}, onwriteerror);
				} else
					onend(outputSize);
			}
			else if (index < size)
			{
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					var wordArray = utils.u8array.parse(array);
					hmac.update(wordArray);
					
					var deryptedChuck = aesDecryptor.process(wordArray);
					chunkIndex++;
				
					if (onprogress)
						onprogress(offset + index, size);
						
					if (deryptedChuck.sigBytes > 0)
					{	
						var dBytes = convertCryptoArray(utils.u8array.stringify(deryptedChuck));
										
						var outputData = process.append(dBytes, function() {});
						if (outputData === -1)
						{
							step();
						}
						
						outputSize += outputData.length;
						onappend(true, dBytes);
						
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							step();													
						}, onwriteerror);
					}
					else
					{
						step();
					}
				}, onreaderror);
			}
			else {
				hmac.finalize();
				if (aesHashEq(hmac, hmacChksum))
				{	
					var deryptedChuck = aesDecryptor.finalize();
					aesFlushed = true;
					if (deryptedChuck.sigBytes > 0)
					{	
						var dBytes = convertCryptoArray(utils.u8array.stringify(deryptedChuck));				
						var outputData = process.append(dBytes, function() {});
						
						outputSize += outputData.length;
						onappend(true, dBytes);
						
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							step();
						}, onwriteerror);
					}
					else
					{
						step();
					}
				}
				else
				{
					onbadpassword();
				}
			}
		}

		step();
		
		return abort;
		}
	}
	else
	{
		aesLaunchProcess = function(process, reader, writer, offset, size, onappend, onprogress, onend, onreaderror, onwriteerror, aesDecryptor, hmac, hmacChksum, onbadpassword) 
		{
		var chunkIndex = 0, index, outputSize = 0;
		var aesFlushed = false;
		var abort = new AbortHandler();
		
		function step() {
			var outputData;
			index = chunkIndex * CHUNK_SIZE;
			
			if (aesFlushed)
			{
				outputData = process.flush();
				if (outputData) {
					outputSize += outputData.length;
					writer.writeUint8Array(outputData, function() {
						onappend(false, outputData);
						onend(outputSize);
					}, onwriteerror);
				} else
					onend(outputSize);
			}
			else if (index < size)
			{
				
				abort.req = reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					var rem = array.length;
					var suboffset = 0;
					function substep()
					{
						if (rem > 0)
						{
								var lastoffset = suboffset + Math.min(rem, 1024);
								var chunk;
								if (offset == 0 && lastoffset === rem)
								{
									chunk = array;
								}
								else
								{
									chunk = array.subarray(suboffset, lastoffset);
								}
								var chsize = lastoffset - suboffset;
								suboffset += chsize;
								rem -= chsize;
						
							var wordArray = utils.u8array.parse(chunk);
							hmac.update(wordArray);
							
							var deryptedChuck = aesDecryptor.process(wordArray);
							chunkIndex++;
						
							if (onprogress)
								onprogress(offset + index, size);
								
							if (deryptedChuck.sigBytes > 0)
							{	
								var dBytes = convertCryptoArray(utils.u8array.stringify(deryptedChuck));
												
								var outputData = process.append(dBytes, function() {});
								if (outputData === -1)
								{
									var t = setTimeout(substep, 1);
									abort.req = { abort : function(){ clearTimeout(t);}};
								}
								else
								{
									outputSize += outputData.length;
									writer.writeUint8Array(outputData, function() {
										onappend(false, outputData);
										var t = setTimeout(substep, 1);
										abort.req = { abort : function(){ clearTimeout(t);}};
									}, onwriteerror);
								}
							}
							else
							{
								chunkIndex++;
								step();
							}
						}
						else
						{
								chunkIndex++;
								step();
						}
					}
					
					substep();
				}, onreaderror);
				
			}
			else {
				hmac.finalize();
				if (aesHashEq(hmac, hmacChksum))
				{	
					var deryptedChuck = aesDecryptor.finalize();
					aesFlushed = true;
					if (deryptedChuck.sigBytes > 0)
					{	
						var dBytes = convertCryptoArray(utils.u8array.stringify(deryptedChuck));				
						var outputData = process.append(dBytes, function() {});
						
						outputSize += outputData.length;
						onappend(true, dBytes);
						
						writer.writeUint8Array(outputData, function() {
							onappend(false, outputData);
							step();
						}, onwriteerror);
					}
					else
					{
						step();
					}
				}
				else
				{
					onbadpassword();
				}
			}
		}

		step();
		
		return abort;
		}
	
	
	
	
	
	
	}
	
	function AbortHandler()
	{
		this.req = null;
		this.worker = null;
	}
	
	AbortHandler.prototype.terminate =  function()
	{
		if(this.req) this.req.abort();
		if(this.worker) this.worker.terminate();
	};
	AbortHandler.prototype.abort = AbortHandler.prototype.terminate; 

	
	exports.inflate = inflate;
	exports.copy = copy;	
	exports.aesCopy = aesCopy;
	exports.aesInflate = aesInflate;
	
}(
vitrium.g4s,
vitrium.utils,
vitrium.bin,
__globals__,
CRC32,
vitrium.zip,
CryptoJS));
// script:viewer\io\g4s.js
(function(exports, bin, global, crypto, utils, AES)
{
	"use strict";
	var ERR_TOO_SMALL = "file is too small to hold G4S format";
	var ERR_INVALID_HEADER = "invalid G4S header";
	var ERR_INVALID_DIRECTORY_CHECKSUM = "invalid G4S directory checksum";
	
	var ERR_READ = "Error while reading zip file.";
	var ERR_WRITE = "Error while writing zip file.";
	var ERR_WRITE_DATA = "Error while writing file data.";
	var ERR_READ_DATA = "Error while reading file data.";
	var ERR_AES_HEADER_MISSING = "AES header 0x9901 not found";
	var ERR_COMPRESION_METHOD = "Unknown compression method";
	var ERR_REQUIRED_AES_KEY = "Required AES key";
	var ERR_AES_UNKNOWN_STRENGTH = "Unknown strength value.";
	var ERR_AES_WRONG_PASSWORD = "Wrong password.";
	var ERR_AES_GLOBAL_METADATA = "Missing global AES metadata";
	var ERR_AES_METADATA = "Missing AES metadata";
	
	var Header = exports.Header;
	var FileEntry = exports.FileEntry;
	var inflate = exports.inflate;
	var copy = exports.copy;
	var aesInflate = exports.aesInflate;
	var aesCopy = exports.aesCopy;
	
	var CRC32 = global.CRC32;
	var isTypedArraysSupported = !!global.ArrayBuffer;
	
	exports.readEntries = function (reader, callback, onerror, headerBytes)
	{
		if (!reader)
		{
			onerror("reader must be specified");
			return;
		}
		
		if (reader.size < Header.SIZE)
		{
			onerror(ERR_TOO_SMALL);
			return;
		}
		
		var abortHandle = new AbortHandle();
		if (!headerBytes)
		{
			abortHandle.req = reader.readUint8Array(0, Header.SIZE, onHeaderReturned, onerror);
		}
		else
		{
			if (!isTypedArraysSupported)
			{
				var buffer = new bin.DataBuffer();
				buffer.attachData(headerBytes);
				
				onHeaderReturned(buffer);
			}
			else
			{
				onHeaderReturned(headerBytes);
			}
		}
		
		function onHeaderReturned(bytes) 
		{	
			if (bytes.length < Header.SIZE) { onerror(ERR_TOO_SMALL); return;}
		
			var helper = bin.getDataHelper(bytes.length, bytes);
			var header = Header.parse(helper);
			if (header.isValid())
			{
				abortHandle.req = reader.readUint8Array(header.directoryOffset, header.directoryLen, function(bytes)
				{
					var checksum = new CRC32();
					checksum.append(bytes);
					
					if (checksum.equals(header.directoryCRC32))
					{
						var helper = bin.getDataHelper(bytes.length, bytes);
						var entries = [];
						var offset = 0;
						for (var i = 0, len = header.numberOfEntries; i < len;++i)
						{
							var entry = FileEntry.parse(helper, offset);
							if (entry.isValid())
							{
								entries.push(entry);
							}
							
							offset += entry.size;
						}

						
						if ((header.globalFlags & (1|2)))	
						{
							
							//GF_SINGLE_PWD_SINGLE_KEY_AES|GF_SINGLE_PWD_MULTIPLE_KEYS_AES
							var aesGlobalSalt = null;
							var aesGlobalPV = null;
							var aesGlobalMode = null;
							if ((header.globalFlags & 1) === 1)
							{
								if (helper.array.length  - offset  > 0)
								{
									var view = helper.view;
									aesGlobalMode = view.getUint8(offset);
									var aesDataLen = offset + 1+2+(4*(aesGlobalMode&3) +4);
									// aes metadata are located after entries
									if (helper.array.length < aesDataLen)
									{
										onerror(ERR_AES_GLOBAL_METADATA);
										return;
									}
									
									/* global metadata contains
												1 byte	mode <1,3> (currently just 3=>AES256)
												2 bytes	password verification
												(4 * (mode & 3) + 4) bytes	salt											
									*/
									
									aesGlobalPV = view.getUint16(offset + 1, true);								
									aesGlobalSalt = helper.array.subarray(offset + 3, aesDataLen);
								}
								else
								{
										onerror(ERR_AES_GLOBAL_METADATA);
										return;
								}
							}
								
							for (var i = 0, len=entries.length; i < len; ++i)
							{
								var entry = entries[i];
								var fl = entry.flags;
								
								if ((fl & 2) === 2 && aesGlobalSalt !== null)
								{
										entry.hmacChecksum = entry.metadata;
										entry.aesSalt = aesGlobalSalt;
										entry.aesPV = aesGlobalPV;
										entry.aesMode = aesGlobalMode;
								}
								else if ((fl & 4) === 4 && entry.metadata.length > 0)
								{								
										var eHelper = bin.getDataHelper(entry.metadata.length, entry.metadata);
										var view = eHelper.view;
										var mode = entry.aesMode = view.getUint8(0);
										var saltLen = (4*(mode&3) +4);
										if (entry.metadata.length === 1+2+saltLen+10)
										{
											entry.aesPV = view.getUint16(1, true);
											entry.aesSalt =  entry.metadata.subarray(1+2, 1+2+saltLen);
											entry.hmacChecksum = entry.metadata.subarray(1+2+saltLen,1+2+saltLen+10);
										}
										else
										{
											onerror(ERR_AES_METADATA );
											return;
										}
								}
								else if ((fl & (2|4)) !== 0)
								{
									onerror(ERR_AES_METADATA);
									return;
								}
							}
						}
						
						callback(entries, header.globalFlags);
					}
					else
					{
						onerror(ERR_INVALID_DIRECTORY_CHECKSUM);
					}									
				}, onerror);
			}
			else
			{
				onerror(ERR_INVALID_HEADER);				
			}
		}
		
		return abortHandle;
	};
	
	exports.readEntry = function(reader, entry, options)
	{
			var ddSupport = options.ddSupport;
			var writer  = options.writer;
			var onend = options.onend || function(){};
			var onprogress = options.onprogress || function(){};
			var onerrorentry = options.onerror || function(){};
			var onrangerecieved = options.onrange || function(){};
			
			var checkCrc32 = !!options.checkCrc32;
			var password = options.password;
	
			var worker = null;
			
			function getdataerror()
			{
				onerrorentry.apply(entry, arguments);
			}

			function terminate(callback, param) 
			{
				if (worker)
					worker.terminate();
					
				worker = null;
				try
				{
					if (callback)
					{
						if (arguments.length > 2)
						{
							var args = [];
							for (var i = 1, len =arguments.length; i < len; ++i)
							{
								args.push(arguments[i]);
							}
							
							callback.apply(null, args);
						}
						else
						{
							callback(param);
						}
					}
					
					
					if (writer && writer.free)
					{
					
						writer.free();
					}
					
				}
				catch(e)
				{
					getdataerror(e);
				}
			}
						
			function getWriterData(uncompressedSize, crc32) {
			
				if (checkCrc32 && crc32.equals(entry.crc32))
					onreaderror();
				else
				{
					try
					{
						writer.getData(function(data) {
							terminate(onend, data);
						});
					}
					catch(e)
					{
						terminate(getdataerror, e);
					}
				}
			}
			
			function onreaderror(e1, e2) {
				terminate(getdataerror, ERR_READ_DATA, e1, e2);
			}

			function onwriteerror() {
				terminate(getdataerror, ERR_WRITE_DATA);
			}
			
			function wrongpassword()
			{
				terminate(getdataerror, ERR_AES_WRONG_PASSWORD);
			}
			
			writer.init(function()
			{
				if (entry.flags & (2|4))
				{
					var aesKey = utils.u8array.parse(entry.aesDerivedKey);
					var hmacKey = utils.u8array.parse(entry.hmacKey);
					var hmacChecksum = entry.hmacChecksum;
					
					var aesDecryptor = AES.createDecryptor(aesKey, 
					{ 
						iv :  utils.u8array.parse([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 
						mode: CryptoJS.mode.CTRGladman, 
						padding: CryptoJS.pad.NoPadding
					});
					 
					var hmacHasher = new crypto.HMACSha1(hmacKey);
					
					if (entry.flags & 0x0001 === 0x0001)
					{
						worker = aesInflate(reader, writer, entry.offset, entry.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror, aesDecryptor, hmacHasher, hmacChecksum, wrongpassword);
					}
					else
					{
						worker = aesCopy(reader, writer, entry.offset, entry.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror, aesDecryptor, hmacHasher, hmacChecksum, wrongpassword);
					}
				}
				else if (ddSupport)
				{
					var req = null;
					if (entry.flags & 0x0001 === 0x0001)
					{
						req = reader.readAndDecode(entry.offset, entry.compressedSize, function(data) {	terminate(onend, data);	},onreaderror, "deflate");
					}
					else
					{
						req = reader.readAndDecode(entry.offset, entry.compressedSize, function(data) {	terminate(onend, data);	},onreaderror, "");
					}
					
					worker = {
							terminate :function()
							{
								req.abort();
							}
					};
				}
				else
				{
					if (entry.flags & 0x0001 === 0x0001)
					{
						worker = inflate(reader, writer, entry.offset, entry.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
					}
					else
					{
						worker = copy(reader, writer, entry.offset, entry.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
					}
				}
			}, onwriteerror);
			
			return 	function(){worker.terminate();};
	};
	
	function AbortHandle()
	{
		this.req = null;
	}
	AbortHandle.prototype.terminate =  function()
	{
		if(this.req) this.req.abort();
	};
	AbortHandle.prototype.abort = AbortHandle.prototype.terminate; 
	
}(
vitrium.g4s,
vitrium.bin,
__globals__,
vitrium.crypto,
vitrium.utils,
CryptoJS.algo.AES
));
// script:viewer\io\direct-decode.js
(function (exports, bin)
{
	exports.DirectDecodeDataLoader = 
	{
		loadData: function (options)
		{
			var url = options.url;
			var method = options.method || "GET";
			var success = options.success || function(){};
			var failed = options.error || function(){};
			var headers = options.headers || [];
					
			var xhr = new XMLHttpRequest();

			var headersCount = headers.length;

			for (var i = 0; i < headersCount; ++i) {
			   var v = headers[i];
			   if (v[0] === "Range") {
			      url = bin.appendEncodedToUrl(url, v[1]);
			   }
			   else if (bin.EXTENSION_MATCHER.test(v[0])) {
			      var parts = v[0].split(bin.EXTENSION_MATCHER);
			      url = bin.appendToUrl(url, parts[1].replace(/-/g, ''), v[1]);
			   }
			}

			xhr.open(method, url, true);
			
			var len = headers.length;
			for (var i = 0; i < len; ++i)
			{
				var v = headers[i];
				xhr.setRequestHeader(v[0], v[1]);
			}
			
			xhr.onreadystatechange = function(e) {
				
				if (this.readyState === 4)
				{	
					var status = this.status;
					if (status >= 200 && status < 300 || status === 304)
					{
							var data = this.responseText; 
							if (!data)
							{
								data = null;
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
			xhr.send(null);	
			return xhr;
		}
	};
	
	

}(vitrium.bin, vitrium.bin));


// script:viewer/io/zip-web-worker.js
//

(function(self, zip,g4s, bin, is_mobile)
{	
   var CMD_INIT = 0x0001;
   var CMD_INITIALIZED = 0x0002;
   var CMD_JOB_MSG = 0x0003;
   var CMD_TERMINATE = 0x0004;
   var CMD_TERMINATED = 0x0005;
   
   var ZIP_SUCCESS = 0x1234;
   var ZIP_ERROR = 0xDEAD;
   var remoteFile = null;
   var jobs = {};
   var reader = null;
   var ddSupport = false;
   
   self.onmessage = function (event)
   {
      var msg = event.data;
      var data = msg.data;
      var id = msg.id;
      
      switch(msg.cmd)
      {
         case CMD_JOB_MSG:
            
            var entry = null;
            var type = null;
            var blobLevel = 0;
            
            if (data.entry)
            {
              entry = data.entry;
              if (data.options !== null)
              {
                blobLevel = data.options.blobLevel;
                type = data.options.type;
              }
            }
            else
            {
          // fallback for older requests
               entry = data;
            }
            
            var DecoderClass = bin.Utf8Decoder;
            
            if (ddSupport)
            {
               DecoderClass = function(){this.init = function(call){call();};};
               if (type === "BinaryImage")
               {
                  /*we dont use this anyway*/
                  self.postMessage({ id : id, cmd: CMD_JOB_MSG, data : { id : 	ZIP_ERROR,  reason : ["not supported",-1]  }});
                  self.postMessage({ id : id, cmd : CMD_TERMINATED});
                  return;
               }
            }
            else
            if (type === "BinaryImage")
            {
               if (blobLevel >= 2 && vitrium.features.Blob.level >= 1)
               {
                  DecoderClass = bin.ChunkBuffer;
               }
               else
               {
                  DecoderClass = bin.Base64BinaryImageDecoder;
               }
            }
            
            
            jobs[id] = reader.readEntry(remoteFile, entry, {
               ddSupport : ddSupport,
               writer : new DecoderClass(entry.uncompressedSize, data), 
               onerror : function(error, reason) {
                  if (typeof reason === "undefined")
                  {
                     reason = null;
                  }
                  
                  if (jobs[id])
                  {
                     delete jobs[id];
                     self.postMessage({ id : id, cmd: CMD_JOB_MSG, data : { id : 	ZIP_ERROR,  reason : [error, reason]  }});
                     self.postMessage({ id : id, cmd : CMD_TERMINATED});
                  }
               },
               onend : function (imgdata)
               {
                  if (jobs[id])
                  {
                     delete jobs[id];
                     
                     if (type === "Images" && blobLevel >= 2 && vitrium.features.Blob.level >= 1)
                     {
                        try
                        {	
                           imgdata = JSON.parse(imgdata);
                           preprocessImages(imgdata);
                        }catch(e){}
                     }
                     else if (type === "BinaryImage" && blobLevel >= 2 && vitrium.features.Blob.level >= 1)
                     {
                        imgdata = handleBinaryImage(imgdata,data);
                     }
                     
                     self.postMessage({ id : id, cmd: CMD_JOB_MSG, data : { id : 	ZIP_SUCCESS,  data : imgdata }});
                     self.postMessage({ id : id, cmd : CMD_TERMINATED});
                  }
               }
            }); 

         break;
         case CMD_TERMINATE:
            if (jobs[id])
            {
               jobs[id]();
               delete jobs[id];
               self.postMessage({ id : id, cmd : CMD_TERMINATED});
            }
         break;
         case CMD_INIT:
            var loader = bin;
            
            if (data.parser === "g4s")
            {
               reader = g4s;
               if (data.ddSupport === "true")
               {
                  loader = bin.DirectDecodeDataLoader;
                  ddSupport = true;
               }
            }
            else
            {
               reader = zip;
            }
            
            remoteFile = new bin.RemoteFile(data.url, new bin.IOScheduler(is_mobile ? 2 : 3, loader));
            remoteFile.size = data.size;
            remoteFile.etag = data.etag;
            
            self.postMessage({ id : id, cmd : CMD_INITIALIZED});
         break;	
      }
   };
   
   var DATAURL_RE = /data[:](.+)[;](.+)[,](.+)/;
   function preprocessImages(images)
   {
      var dataurlparser = DATAURL_RE;
      
      var level = vitrium.features.Blob.level;
      var URL = vitrium.features.Blob.URL;
   
      for (var i = 0, len=images.length; i < len; ++i)
      {
         var record = images[i];
         var match = record.data.match(dataurlparser);
         if (match && match.length === 4 && match[2] === "base64")
         {
            var arr = Base64Binary.decodeArrayBuffer(match[3]);
            var blob = new Blob([arr.buffer],{ type : match[1]});
            // is createObjectURL supported
            if (level >= 2)
            {
               record.data = URL.createObjectURL(blob);
            }
            else
            {
               record.data = blob;
            }
            record.level = level;
         }
         else
         {
            record.level = 0;
         }
      }
   };
   
   function handleBinaryImage(chunks, data)
   {
      var dataurlparser = DATAURL_RE;
      
      var level = vitrium.features.Blob.level;
      var URL = vitrium.features.Blob.URL;
   
      var userData = data.userData;
      var blob = new Blob(chunks, { type : userData.mimetype});
         
      var record = {
         data : null,
         key : userData.key,		
         dpi : userData.dpi,
         level : level
      };
      
      if (level >= 2)
      {
         record.data = URL.createObjectURL(blob);
      }
      else
      {
         record.data = blob;
      }		
      
      return [record];
   };


}(
__globals__, 
vitrium.zip, 
vitrium.g4s, 
vitrium.bin, 
vitrium.is_mobile));

}.call(this, this));
    