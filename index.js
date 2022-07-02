// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLog1pexp=t()}(this,(function(){"use strict";function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,_=g;var h=function(r){return _.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=g;var N=h,T=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},F=j()?T:N,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},L=m,B=H;var M=s,k=function(r){return L(r)||B(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=F;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=F,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var gr=wr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},hr=function(r){return gr(r).toLowerCase()},Ar=ir()?hr:_r;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Nr=Pr.prototype.toString;var Tr=F,Fr=Pr,Ir=function(r){try{return Nr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Vr=Sr,Hr=Gr;var Lr=s,Br=function(r){return Vr(r)||Hr(r)},Mr=Gr;Lr(Br,"isPrimitive",Sr),Lr(Br,"isObject",Mr);var kr=Br,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=yr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=F,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,yt=kr.isPrimitive,vt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),vt&&ct(t[vt])&&ft(u,vt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt;var dt=function(r){return r!=r},mt=F,wt="function"==typeof Uint32Array;var jt="function"==typeof Uint32Array?Uint32Array:null,gt=function(r){return wt&&r instanceof Uint32Array||"[object Uint32Array]"===mt(r)},_t=jt;var ht=function(){var r,t;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),r=gt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var At="function"==typeof Uint32Array?Uint32Array:void 0,Ot=function(){throw new Error("not implemented")},Et=ht()?At:Ot,Ut=F,St="function"==typeof Float64Array;var Pt="function"==typeof Float64Array?Float64Array:null,Nt=function(r){return St&&r instanceof Float64Array||"[object Float64Array]"===Ut(r)},Tt=Pt;var Ft=function(){var r,t;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,NaN]),r=Nt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var It="function"==typeof Float64Array?Float64Array:void 0,xt=function(){throw new Error("not implemented")},Gt=Ft()?It:xt,Vt=F,Ht="function"==typeof Uint8Array;var Lt="function"==typeof Uint8Array?Uint8Array:null,Bt=function(r){return Ht&&r instanceof Uint8Array||"[object Uint8Array]"===Vt(r)},Mt=Lt;var kt=function(){var r,t;if("function"!=typeof Mt)return!1;try{t=new Mt(t=[1,3.14,-3.14,256,257]),r=Bt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Wt="function"==typeof Uint8Array?Uint8Array:void 0,Ct=function(){throw new Error("not implemented")},Rt=kt()?Wt:Ct,Xt=F,Yt="function"==typeof Uint16Array;var zt="function"==typeof Uint16Array?Uint16Array:null,Dt=function(r){return Yt&&r instanceof Uint16Array||"[object Uint16Array]"===Xt(r)},qt=zt;var Jt=function(){var r,t;if("function"!=typeof qt)return!1;try{t=new qt(t=[1,3.14,-3.14,65536,65537]),r=Dt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Kt,Qt="function"==typeof Uint16Array?Uint16Array:void 0,Zt=function(){throw new Error("not implemented")},$t={uint16:Jt()?Qt:Zt,uint8:Rt};(Kt=new $t.uint16(1))[0]=4660;var rn=52===new $t.uint8(Kt.buffer)[0],tn=Et,nn=!0===rn?1:0,en=new Gt(1),on=new tn(en.buffer);var un=function(r){return en[0]=r,on[nn]},an=Et,fn=!0===rn?1:0,cn=new Gt(1),ln=new an(cn.buffer);var yn=function(r,t){return cn[0]=r,ln[fn]=t>>>0,cn[0]},vn=yn,pn=Number.POSITIVE_INFINITY,bn=Pr.NEGATIVE_INFINITY;var sn=dt,dn=un,mn=vn,wn=pn,jn=bn,gn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},_n=.6931471803691238,hn=1.9082149292705877e-10;var An=function(r){var t,n,e,o,u,i,a,f,c,l;if(r<-1||sn(r))return NaN;if(-1===r)return jn;if(r===wn)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,o=r,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=dn(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),u/=c):(l=((n=dn(c=r))>>20)-1023,u=0),(n&=1048575)<434334?c=mn(c,1072693248|n):(l+=1,c=mn(c,1071644672|n),n=1048576-n>>2),o=c-1),t=.5*o*o,0===n?0===o?l*_n+(u+=l*hn):l*_n-((f=t*(1-.6666666666666666*o))-(l*hn+u)-o):(f=(a=(i=o/(2+o))*i)*gn(a),0===l?o-(t-i*(t+f)):l*_n-(t-(i*(t+f)+(l*hn+u))-o))},On=An,En=Math.floor,Un=Math.ceil,Sn=En,Pn=Un;var Nn=function(r){return r<0?Pn(r):Sn(r)},Tn=pn,Fn=bn;var In,xn,Gn=function(r){return r===Tn||r===Fn};!0===rn?(In=1,xn=0):(In=0,xn=1);var Vn=Et,Hn={HIGH:In,LOW:xn},Ln=new Gt(1),Bn=new Vn(Ln.buffer),Mn=Hn.HIGH,kn=Hn.LOW;var Wn=function(r,t){return Ln[0]=t,r[0]=Bn[Mn],r[1]=Bn[kn],r};var Cn,Rn,Xn=function(r,t){return 1===arguments.length?Wn([0,0],r):Wn(r,t)},Yn=Xn;!0===rn?(Cn=1,Rn=0):(Cn=0,Rn=1);var zn=Et,Dn={HIGH:Cn,LOW:Rn},qn=new Gt(1),Jn=new zn(qn.buffer),Kn=Dn.HIGH,Qn=Dn.LOW;var Zn=function(r,t){return Jn[Kn]=r,Jn[Qn]=t,qn[0]},$n=Yn,re=un,te=Zn,ne=[0,0];var ee=Gn,oe=dt,ue=function(r){return Math.abs(r)};var ie=function(r,t){return oe(t)||ee(t)?(r[0]=t,r[1]=0,r):0!==t&&ue(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var ae=function(r,t){return 1===arguments.length?ie([0,0],r):ie(r,t)},fe=un;var ce=function(r){var t=fe(r);return(t=(2146435072&t)>>>20)-1023|0},le=pn,ye=bn,ve=dt,pe=Gn,be=function(r,t){var n,e;return $n(ne,r),n=ne[0],n&=2147483647,e=re(t),te(n|=e&=2147483648,ne[1])},se=ae,de=ce,me=Yn,we=Zn,je=[0,0],ge=[0,0];var _e=function(r,t){var n,e;return 0===t||0===r||ve(r)||pe(r)?r:(se(je,r),t+=je[1],(t+=de(r=je[0]))<-1074?be(0,r):t>1023?r<0?ye:le:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,me(ge,r),n=ge[0],n&=2148532223,e*we(n|=t+1023<<20,ge[1])))};var he=_e,Ae=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Oe=dt,Ee=Nn,Ue=bn,Se=pn,Pe=function(r,t,n){var e,o,u;return u=(e=r-t)-(o=e*e)*Ae(o),he(1-(t-e*u/(2-u)-r),n)},Ne=1.4426950408889634,Te=1/(1<<28);var Fe=dt,Ie=On,xe=function(r){var t;return Oe(r)||r===Se?r:r===Ue?0:r>709.782712893384?Se:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Te?1+r:(t=Ee(r<0?Ne*r-.5:Ne*r+.5),Pe(r-.6931471803691238*t,1.9082149292705877e-10*t,t))};var Ge=function(r){return Fe(r)?NaN:r<=-37?xe(r):r<=18?Ie(xe(r)):r<=33.3?r+xe(-r):r};return function(r){return st(r,Ge)}}));
//# sourceMappingURL=index.js.map
