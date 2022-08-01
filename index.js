// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterLog1pexp=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var c=r;function l(t,r,n){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},g=Boolean.prototype.toString;var A=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(A?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function _(t){return p(t)||h(t)}function O(){return new Function("return this;")()}l(_,"isPrimitive",p),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,I=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",x);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function G(t){return null!==t&&"object"==typeof t}function H(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=x.exec(e.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!V(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(G));var L="function"==typeof y||"object"==typeof I||"function"==typeof F?function(t){return H(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?H(t).toLowerCase():r};function B(t){return"function"===L(t)}function M(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&B(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=B(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&B(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&B(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!B(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),q&&B(t[q])&&l(o,q,c),o;function f(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:W(n.value)?r(n.value):e.invalid,done:!1}}function a(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function c(){return $(t[q](),r,e)}}function tt(t){return t!=t}var rt="function"==typeof Uint32Array;var nt="function"==typeof Uint32Array?Uint32Array:null;var et,ot="function"==typeof Uint32Array?Uint32Array:void 0;et=function(){var t,r,n;if("function"!=typeof nt)return!1;try{r=new nt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(rt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var ut=et,it="function"==typeof Float64Array;var ft="function"==typeof Float64Array?Float64Array:null;var at,ct="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,r,n;if("function"!=typeof ft)return!1;try{r=new ft([1,3.14,-3.14,NaN]),n=r,t=(it&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var lt=at,yt="function"==typeof Uint8Array;var pt="function"==typeof Uint8Array?Uint8Array:null;var vt,bt="function"==typeof Uint8Array?Uint8Array:void 0;vt=function(){var t,r,n;if("function"!=typeof pt)return!1;try{r=new pt(r=[1,3.14,-3.14,256,257]),n=r,t=(yt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?bt:function(){throw new Error("not implemented")};var st=vt,dt="function"==typeof Uint16Array;var mt="function"==typeof Uint16Array?Uint16Array:null;var wt,jt="function"==typeof Uint16Array?Uint16Array:void 0;wt=function(){var t,r,n;if("function"!=typeof mt)return!1;try{r=new mt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(dt&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?jt:function(){throw new Error("not implemented")};var gt,At={uint16:wt,uint8:st};(gt=new At.uint16(1))[0]=4660;var ht=52===new At.uint8(gt.buffer)[0],_t=!0===ht?1:0,Ot=new lt(1),Ut=new ut(Ot.buffer);function St(t){return Ot[0]=t,Ut[_t]}var Et=!0===ht?1:0,Nt=new lt(1),Tt=new ut(Nt.buffer);function Ft(t,r){return Nt[0]=t,Tt[Et]=r>>>0,Nt[0]}var It=Number.POSITIVE_INFINITY,Pt=k.NEGATIVE_INFINITY,xt=1023;var Vt=.6931471803691238,Gt=1.9082149292705877e-10;var Ht=Math.floor,Lt=Math.ceil;function Bt(t){return t<0?Lt(t):Ht(t)}var Mt,Wt;function kt(t){return t===It||t===Pt}!0===ht?(Mt=1,Wt=0):(Mt=0,Wt=1);var Ct,Yt,Rt={HIGH:Mt,LOW:Wt},Xt=new lt(1),qt=new ut(Xt.buffer),zt=Rt.HIGH,Dt=Rt.LOW;function Jt(t,r){return Xt[0]=r,t[0]=qt[zt],t[1]=qt[Dt],t}function Kt(t,r){return 1===arguments.length?Jt([0,0],t):Jt(t,r)}!0===ht?(Ct=1,Yt=0):(Ct=0,Yt=1);var Qt={HIGH:Ct,LOW:Yt},Zt=new lt(1),$t=new ut(Zt.buffer),tr=Qt.HIGH,rr=Qt.LOW;function nr(t,r){return $t[tr]=t,$t[rr]=r,Zt[0]}var er=[0,0];function or(t,r){return tt(r)||kt(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var ur=[0,0],ir=[0,0];function fr(t,r){var n,e,o,u,i;return 0===r||0===t||tt(t)||kt(t)?t:(function(t,r){1===arguments.length?or([0,0],t):or(t,r)}(ur,t),r+=ur[1],r+=function(t){var r=St(t);return(r=(2146435072&r)>>>20)-xt|0}(t=ur[0]),r<-1074?(o=t,Kt(er,0),u=er[0],u&=2147483647,i=St(o),nr(u|=i&=2147483648,er[1])):r>1023?t<0?Pt:It:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Kt(ir,t),n=ir[0],n&=2148532223,e*nr(n|=r+xt<<20,ir[1])))}var ar=1.4426950408889634,cr=1/(1<<28);function lr(t){var r;return tt(t)||t===It?t:t===Pt?0:t>709.782712893384?It:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<cr?1+t:function(t,r,n){var e,o,u,i;return fr(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=Bt(t<0?ar*t-.5:ar*t+.5)),1.9082149292705877e-10*r,r)}function yr(t){return tt(t)?NaN:t<=-37?lr(t):t<=18?function(t){var r,n,e,o,u,i,f,a,c,l;if(t<-1||tt(t))return NaN;if(-1===t)return Pt;if(t===It)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=St(c=1+t))>>20)-xt)>0?1-(c-t):t-(c-1),u/=c):(l=((n=St(c=t))>>20)-xt,u=0),(n&=1048575)<434334?c=Ft(c,1072693248|n):(l+=1,c=Ft(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*Vt+(u+=l*Gt):l*Vt-((a=r*(1-.6666666666666666*o))-(l*Gt+u)-o):(a=(f=(i=o/(2+o))*i)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(f),0===l?o-(r-i*(r+a)):l*Vt-(r-(i*(r+a)+(l*Gt+u))-o))}(lr(t)):t<=33.3?t+lr(-t):t}return function(t){return $(t,yr)}}));
//# sourceMappingURL=index.js.map
