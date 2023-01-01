// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterLog1pexp=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||f.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function _(t){return p(t)||h(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=N.document&&N.document.childNodes,F=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;l(I,"REGEXP",P);var x=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function G(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=P.exec(e.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!x(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(V));var H="function"==typeof y||"object"==typeof F||"function"==typeof T?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function L(t){return"function"===H(t)}function B(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function M(t){return"number"==typeof t}var W=Number,k=W.prototype.toString;var C=b();function Y(t){return"object"==typeof t&&(t instanceof W||(C?function(t){try{return k.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function R(t){return M(t)||Y(t)}l(R,"isPrimitive",M),l(R,"isObject",Y);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var q,z=Object.getPrototypeOf;q=L(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=q;var J=Object.prototype;function K(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!x(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Q(t,r){return K(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!B(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Q(e,n)))throw u;return l(o={},"next",a),l(o,"return",f),X&&L(t[X])&&l(o,X,c),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:M(n.value)?r(n.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return Z(t[X](),r,e)}}function $(t){return t!=t}var tt="function"==typeof Uint32Array;var rt="function"==typeof Uint32Array?Uint32Array:null;var nt,et="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(tt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var ot=nt,ut="function"==typeof Float64Array;var it="function"==typeof Float64Array?Float64Array:null;var at,ft="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it([1,3.14,-3.14,NaN]),n=r,t=(ut&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ft:function(){throw new Error("not implemented")};var ct=at,lt="function"==typeof Uint8Array;var yt="function"==typeof Uint8Array?Uint8Array:null;var pt,vt="function"==typeof Uint8Array?Uint8Array:void 0;pt=function(){var t,r,n;if("function"!=typeof yt)return!1;try{r=new yt(r=[1,3.14,-3.14,256,257]),n=r,t=(lt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint16Array;var dt="function"==typeof Uint16Array?Uint16Array:null;var mt,wt="function"==typeof Uint16Array?Uint16Array:void 0;mt=function(){var t,r,n;if("function"!=typeof dt)return!1;try{r=new dt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(st&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt,gt={uint16:mt,uint8:bt};(jt=new gt.uint16(1))[0]=4660;var At=52===new gt.uint8(jt.buffer)[0],ht=!0===At?1:0,_t=new ct(1),Ot=new ot(_t.buffer);function Ut(t){return _t[0]=t,Ot[ht]}var St=!0===At?1:0,Et=new ct(1),Nt=new ot(Et.buffer);function Tt(t,r){return Et[0]=t,Nt[St]=r>>>0,Et[0]}var Ft=Number.POSITIVE_INFINITY,It=W.NEGATIVE_INFINITY,Pt=1023;var xt=.6931471803691238,Vt=1.9082149292705877e-10;var Gt=Math.floor,Ht=Math.ceil;function Lt(t){return t<0?Ht(t):Gt(t)}function Bt(t){return t===Ft||t===It}var Mt,Wt;!0===At?(Mt=1,Wt=0):(Mt=0,Wt=1);var kt,Ct,Yt={HIGH:Mt,LOW:Wt},Rt=new ct(1),Xt=new ot(Rt.buffer),qt=Yt.HIGH,zt=Yt.LOW;function Dt(t,r,n,e){return Rt[0]=t,r[e]=Xt[qt],r[e+n]=Xt[zt],r}function Jt(t){return Dt(t,[0,0],1,0)}l(Jt,"assign",Dt),!0===At?(kt=1,Ct=0):(kt=0,Ct=1);var Kt={HIGH:kt,LOW:Ct},Qt=new ct(1),Zt=new ot(Qt.buffer),$t=Kt.HIGH,tr=Kt.LOW;function rr(t,r){return Zt[$t]=t,Zt[tr]=r,Qt[0]}var nr=[0,0];function er(t,r,n,e){return $(t)||Bt(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return er(t,[0,0],1,0)}),"assign",er);var or=[0,0],ur=[0,0];function ir(t,r){var n,e,o,u,i,a;return 0===r||0===t||$(t)||Bt(t)?t:(er(t,or,1,0),r+=or[1],r+=function(t){var r=Ut(t);return(r=(2146435072&r)>>>20)-Pt|0}(t=or[0]),r<-1074?(o=0,u=t,Jt.assign(o,nr,1,0),i=nr[0],i&=2147483647,a=Ut(u),rr(i|=a&=2147483648,nr[1])):r>1023?t<0?It:Ft:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Jt.assign(t,ur,1,0),n=ur[0],n&=2148532223,e*rr(n|=r+Pt<<20,ur[1])))}var ar=1.4426950408889634,fr=1/(1<<28);function cr(t){var r;return $(t)||t===Ft?t:t===It?0:t>709.782712893384?Ft:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<fr?1+t:function(t,r,n){var e,o,u,i;return ir(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=Lt(t<0?ar*t-.5:ar*t+.5)),1.9082149292705877e-10*r,r)}function lr(t){return $(t)?NaN:t<=-37?cr(t):t<=18?function(t){var r,n,e,o,u,i,a,f,c,l;if(t<-1||$(t))return NaN;if(-1===t)return It;if(t===Ft)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=Ut(c=1+t))>>20)-Pt)>0?1-(c-t):t-(c-1),u/=c):(l=((n=Ut(c=t))>>20)-Pt,u=0),(n&=1048575)<434334?c=Tt(c,1072693248|n):(l+=1,c=Tt(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*xt+(u+=l*Vt):l*xt-((f=r*(1-.6666666666666666*o))-(l*Vt+u)-o):(f=(a=(i=o/(2+o))*i)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===l?o-(r-i*(r+f)):l*xt-(r-(i*(r+f)+(l*Vt+u))-o))}(cr(t)):t<=33.3?t+cr(-t):t}return function(t){return Z(t,lr)}}));
//# sourceMappingURL=index.js.map
