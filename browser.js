// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,v,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,g,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function T(r){var t,e;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var F,I=Object.prototype,k=I.toString,V=I.__defineGetter__,N=I.__defineSetter__,P=I.__lookupGetter__,L=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&N&&N.call(r,t,e.set),r};var G=F;function $(r,t,e){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ur.exec(n.toString()))return t[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?lr(r).toLowerCase():t};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString,br=B();function vr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||vr(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",vr);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(t=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&pr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&pr(t.isPrototypeOf)&&(t===Er||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function Sr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Or(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:yr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),t,n)})),o}function xr(r){return r!=r}var Ur,Tr="function"==typeof Uint32Array,Fr="function"==typeof Uint32Array?Uint32Array:null,Ir="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,t,e;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Tr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var kr,Vr=Ur,Nr="function"==typeof Float64Array,Pr="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;kr=function(){var r,t,e;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),e=t,r=(Nr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Gr,$r=kr,Cr="function"==typeof Uint8Array,Hr="function"==typeof Uint8Array?Uint8Array:null,Wr="function"==typeof Uint8Array?Uint8Array:void 0;Gr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,256,257]),e=t,r=(Cr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br,Rr=Gr,Mr="function"==typeof Uint16Array,Zr="function"==typeof Uint16Array?Uint16Array:null,Xr="function"==typeof Uint16Array?Uint16Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Zr)return!1;try{t=new Zr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Mr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,zr={uint16:Br,uint8:Rr};(Yr=new zr.uint16(1))[0]=4660;var qr=52===new zr.uint8(Yr.buffer)[0],Dr=!0===qr?1:0,Jr=new $r(1),Kr=new Vr(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}var rt=!0===qr?1:0,tt=new $r(1),et=new Vr(tt.buffer);function nt(r,t){return tt[0]=r,et[rt]=t>>>0,tt[0]}var ot=Number.POSITIVE_INFINITY,it=gr.NEGATIVE_INFINITY,at=1023,ut=.6931471803691238,ct=1.9082149292705877e-10,ft=.41421356237309503,lt=-.2928932188134525,st=1.862645149230957e-9,pt=5551115123125783e-32,yt=9007199254740992,gt=.6666666666666666,dt=Math.floor,bt=Math.ceil;function vt(r){return r<0?bt(r):dt(r)}var ht=1023,wt=-1023,mt=-1074;function jt(r){return r===ot||r===it}var At,_t,Et=2147483648,Ot=2147483647;!0===qr?(At=1,_t=0):(At=0,_t=1);var St,xt,Ut={HIGH:At,LOW:_t},Tt=new $r(1),Ft=new Vr(Tt.buffer),It=Ut.HIGH,kt=Ut.LOW;function Vt(r,t,e,n){return Tt[0]=r,t[n]=Ft[It],t[n+e]=Ft[kt],t}function Nt(r){return Vt(r,[0,0],1,0)}$(Nt,"assign",Vt),!0===qr?(St=1,xt=0):(St=0,xt=1);var Pt={HIGH:St,LOW:xt},Lt=new $r(1),Gt=new Vr(Lt.buffer),$t=Pt.HIGH,Ct=Pt.LOW;function Ht(r,t){return Gt[$t]=r,Gt[Ct]=t,Lt[0]}var Wt=[0,0],Bt=22250738585072014e-324,Rt=4503599627370496;function Mt(r,t,e,n){return xr(r)||jt(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Bt?(t[n]=r*Rt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Mt(r,[0,0],1,0)}),"assign",Mt);var Zt=2146435072,Xt=2220446049250313e-31,Yt=2148532223,zt=[0,0],qt=[0,0];function Dt(r,t){var e,n,o,i,a,u;return 0===t||0===r||xr(r)||jt(r)?r:(Mt(r,zt,1,0),r=zt[0],t+=zt[1],t+=function(r){var t=Qr(r);return(t=(t&Zt)>>>20)-at|0}(r),t<mt?(o=0,i=r,Nt.assign(o,Wt,1,0),a=Wt[0],a&=Ot,u=Qr(i),Ht(a|=u&=Et,Wt[1])):t>ht?r<0?it:ot:(t<=wt?(t+=52,n=Xt):n=1,Nt.assign(r,qt,1,0),e=qt[0],e&=Yt,n*Ht(e|=t+at<<20,qt[1])))}var Jt=.6931471803691238,Kt=1.9082149292705877e-10,Qt=1.4426950408889634,re=709.782712893384,te=-745.1332191019411,ee=1/(1<<28),ne=-ee;function oe(r){var t;return xr(r)||r===ot?r:r===it?0:r>re?ot:r<te?0:r>ne&&r<ee?1+r:function(r,t,e){var n,o,i,a;return Dt(1-(t-(n=r-t)*(i=n-(o=n*n)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-(t=vt(r<0?Qt*r-.5:Qt*r+.5))*Jt,t*Kt,t)}function ie(r){return xr(r)?NaN:r<=-37?oe(r):r<=18?function(r){var t,e,n,o,i,a,u,c,f,l;if(r<-1||xr(r))return NaN;if(-1===r)return it;if(r===ot)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<ft){if(n<st)return n<pt?r:r-r*r*.5;r>lt&&(l=0,o=r,e=1)}return 0!==l&&(n<yt?(i=(l=((e=Qr(f=1+r))>>20)-at)>0?1-(f-r):r-(f-1),i/=f):(l=((e=Qr(f=r))>>20)-at,i=0),(e&=1048575)<434334?f=nt(f,1072693248|e):(l+=1,f=nt(f,1071644672|e),e=1048576-e>>2),o=f-1),t=.5*o*o,0===e?0===o?l*ut+(i+=l*ct):l*ut-((c=t*(1-gt*o))-(l*ct+i)-o):(c=(u=(a=o/(2+o))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?o-(t-a*(t+c)):l*ut-(t-(a*(t+c)+(l*ct+i))-o))}(oe(r)):r<=33.3?r+oe(-r):r}return function(r){return Sr(r,ie)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog1pexp=t();
//# sourceMappingURL=browser.js.map