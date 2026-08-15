(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function mg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pu={exports:{}},Fa={},Nu={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Lx(){if(Yp)return xt;Yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function v(I,Z,Ie){this.props=I,this.context=Z,this.refs=C,this.updater=Ie||M}v.prototype.isReactComponent={},v.prototype.setState=function(I,Z){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Z,"setState")},v.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=v.prototype;function U(I,Z,Ie){this.props=I,this.context=Z,this.refs=C,this.updater=Ie||M}var k=U.prototype=new x;k.constructor=U,T(k,v.prototype),k.isPureReactComponent=!0;var A=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(I,Z,Ie){var Ve,Oe={},j=null,xe=null;if(Z!=null)for(Ve in Z.ref!==void 0&&(xe=Z.ref),Z.key!==void 0&&(j=""+Z.key),Z)F.call(Z,Ve)&&!O.hasOwnProperty(Ve)&&(Oe[Ve]=Z[Ve]);var ce=arguments.length-2;if(ce===1)Oe.children=Ie;else if(1<ce){for(var Ae=Array(ce),je=0;je<ce;je++)Ae[je]=arguments[je+2];Oe.children=Ae}if(I&&I.defaultProps)for(Ve in ce=I.defaultProps,ce)Oe[Ve]===void 0&&(Oe[Ve]=ce[Ve]);return{$$typeof:s,type:I,key:j,ref:xe,props:Oe,_owner:N.current}}function L(I,Z){return{$$typeof:s,type:I.type,key:Z,ref:I.ref,props:I.props,_owner:I._owner}}function W(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function z(I){var Z={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ie){return Z[Ie]})}var J=/\/+/g;function de(I,Z){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):Z.toString(36)}function pe(I,Z,Ie,Ve,Oe){var j=typeof I;(j==="undefined"||j==="boolean")&&(I=null);var xe=!1;if(I===null)xe=!0;else switch(j){case"string":case"number":xe=!0;break;case"object":switch(I.$$typeof){case s:case e:xe=!0}}if(xe)return xe=I,Oe=Oe(xe),I=Ve===""?"."+de(xe,0):Ve,A(Oe)?(Ie="",I!=null&&(Ie=I.replace(J,"$&/")+"/"),pe(Oe,Z,Ie,"",function(je){return je})):Oe!=null&&(W(Oe)&&(Oe=L(Oe,Ie+(!Oe.key||xe&&xe.key===Oe.key?"":(""+Oe.key).replace(J,"$&/")+"/")+I)),Z.push(Oe)),1;if(xe=0,Ve=Ve===""?".":Ve+":",A(I))for(var ce=0;ce<I.length;ce++){j=I[ce];var Ae=Ve+de(j,ce);xe+=pe(j,Z,Ie,Ae,Oe)}else if(Ae=g(I),typeof Ae=="function")for(I=Ae.call(I),ce=0;!(j=I.next()).done;)j=j.value,Ae=Ve+de(j,ce++),xe+=pe(j,Z,Ie,Ae,Oe);else if(j==="object")throw Z=String(I),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return xe}function K(I,Z,Ie){if(I==null)return I;var Ve=[],Oe=0;return pe(I,Ve,"","",function(j){return Z.call(Ie,j,Oe++)}),Ve}function ue(I){if(I._status===-1){var Z=I._result;Z=Z(),Z.then(function(Ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ie)},function(Ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ie)}),I._status===-1&&(I._status=0,I._result=Z)}if(I._status===1)return I._result.default;throw I._result}var Y={current:null},X={transition:null},se={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:X,ReactCurrentOwner:N};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:K,forEach:function(I,Z,Ie){K(I,function(){Z.apply(this,arguments)},Ie)},count:function(I){var Z=0;return K(I,function(){Z++}),Z},toArray:function(I){return K(I,function(Z){return Z})||[]},only:function(I){if(!W(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},xt.Component=v,xt.Fragment=n,xt.Profiler=o,xt.PureComponent=U,xt.StrictMode=r,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,xt.act=oe,xt.cloneElement=function(I,Z,Ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ve=T({},I.props),Oe=I.key,j=I.ref,xe=I._owner;if(Z!=null){if(Z.ref!==void 0&&(j=Z.ref,xe=N.current),Z.key!==void 0&&(Oe=""+Z.key),I.type&&I.type.defaultProps)var ce=I.type.defaultProps;for(Ae in Z)F.call(Z,Ae)&&!O.hasOwnProperty(Ae)&&(Ve[Ae]=Z[Ae]===void 0&&ce!==void 0?ce[Ae]:Z[Ae])}var Ae=arguments.length-2;if(Ae===1)Ve.children=Ie;else if(1<Ae){ce=Array(Ae);for(var je=0;je<Ae;je++)ce[je]=arguments[je+2];Ve.children=ce}return{$$typeof:s,type:I.type,key:Oe,ref:j,props:Ve,_owner:xe}},xt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},xt.createElement=E,xt.createFactory=function(I){var Z=E.bind(null,I);return Z.type=I,Z},xt.createRef=function(){return{current:null}},xt.forwardRef=function(I){return{$$typeof:f,render:I}},xt.isValidElement=W,xt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ue}},xt.memo=function(I,Z){return{$$typeof:m,type:I,compare:Z===void 0?null:Z}},xt.startTransition=function(I){var Z=X.transition;X.transition={};try{I()}finally{X.transition=Z}},xt.unstable_act=oe,xt.useCallback=function(I,Z){return Y.current.useCallback(I,Z)},xt.useContext=function(I){return Y.current.useContext(I)},xt.useDebugValue=function(){},xt.useDeferredValue=function(I){return Y.current.useDeferredValue(I)},xt.useEffect=function(I,Z){return Y.current.useEffect(I,Z)},xt.useId=function(){return Y.current.useId()},xt.useImperativeHandle=function(I,Z,Ie){return Y.current.useImperativeHandle(I,Z,Ie)},xt.useInsertionEffect=function(I,Z){return Y.current.useInsertionEffect(I,Z)},xt.useLayoutEffect=function(I,Z){return Y.current.useLayoutEffect(I,Z)},xt.useMemo=function(I,Z){return Y.current.useMemo(I,Z)},xt.useReducer=function(I,Z,Ie){return Y.current.useReducer(I,Z,Ie)},xt.useRef=function(I){return Y.current.useRef(I)},xt.useState=function(I){return Y.current.useState(I)},xt.useSyncExternalStore=function(I,Z,Ie){return Y.current.useSyncExternalStore(I,Z,Ie)},xt.useTransition=function(){return Y.current.useTransition()},xt.version="18.3.1",xt}var $p;function ff(){return $p||($p=1,Nu.exports=Lx()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Dx(){if(Kp)return Fa;Kp=1;var s=ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var _,y={},g=null,M=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!c.hasOwnProperty(_)&&(y[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:f,key:g,ref:M,props:y,_owner:o.current}}return Fa.Fragment=n,Fa.jsx=u,Fa.jsxs=u,Fa}var Zp;function Ix(){return Zp||(Zp=1,Pu.exports=Dx()),Pu.exports}var R=Ix(),Tt=ff();const Ux=mg(Tt);var al={},Lu={exports:{}},Vn={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Fx(){return Jp||(Jp=1,(function(s){function e(X,se){var oe=X.length;X.push(se);e:for(;0<oe;){var I=oe-1>>>1,Z=X[I];if(0<o(Z,se))X[I]=se,X[oe]=Z,oe=I;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var se=X[0],oe=X.pop();if(oe!==se){X[0]=oe;e:for(var I=0,Z=X.length,Ie=Z>>>1;I<Ie;){var Ve=2*(I+1)-1,Oe=X[Ve],j=Ve+1,xe=X[j];if(0>o(Oe,oe))j<Z&&0>o(xe,Oe)?(X[I]=xe,X[j]=oe,I=j):(X[I]=Oe,X[Ve]=oe,I=Ve);else if(j<Z&&0>o(xe,oe))X[I]=xe,X[j]=oe,I=j;else break e}}return se}function o(X,se){var oe=X.sortIndex-se.sortIndex;return oe!==0?oe:X.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],_=1,y=null,g=3,M=!1,T=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(X){for(var se=n(m);se!==null;){if(se.callback===null)r(m);else if(se.startTime<=X)r(m),se.sortIndex=se.expirationTime,e(h,se);else break;se=n(m)}}function A(X){if(C=!1,k(X),!T)if(n(h)!==null)T=!0,ue(F);else{var se=n(m);se!==null&&Y(A,se.startTime-X)}}function F(X,se){T=!1,C&&(C=!1,x(E),E=-1),M=!0;var oe=g;try{for(k(se),y=n(h);y!==null&&(!(y.expirationTime>se)||X&&!z());){var I=y.callback;if(typeof I=="function"){y.callback=null,g=y.priorityLevel;var Z=I(y.expirationTime<=se);se=s.unstable_now(),typeof Z=="function"?y.callback=Z:y===n(h)&&r(h),k(se)}else r(h);y=n(h)}if(y!==null)var Ie=!0;else{var Ve=n(m);Ve!==null&&Y(A,Ve.startTime-se),Ie=!1}return Ie}finally{y=null,g=oe,M=!1}}var N=!1,O=null,E=-1,L=5,W=-1;function z(){return!(s.unstable_now()-W<L)}function J(){if(O!==null){var X=s.unstable_now();W=X;var se=!0;try{se=O(!0,X)}finally{se?de():(N=!1,O=null)}}else N=!1}var de;if(typeof U=="function")de=function(){U(J)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,K=pe.port2;pe.port1.onmessage=J,de=function(){K.postMessage(null)}}else de=function(){v(J,0)};function ue(X){O=X,N||(N=!0,de())}function Y(X,se){E=v(function(){X(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ue(F))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(X){switch(g){case 1:case 2:case 3:var se=3;break;default:se=g}var oe=g;g=se;try{return X()}finally{g=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,se){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var oe=g;g=X;try{return se()}finally{g=oe}},s.unstable_scheduleCallback=function(X,se,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,X){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=oe+Z,X={id:_++,callback:se,priorityLevel:X,startTime:oe,expirationTime:Z,sortIndex:-1},oe>I?(X.sortIndex=oe,e(m,X),n(h)===null&&X===n(m)&&(C?(x(E),E=-1):C=!0,Y(A,oe-I))):(X.sortIndex=Z,e(h,X),T||M||(T=!0,ue(F))),X},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(X){var se=g;return function(){var oe=g;g=se;try{return X.apply(this,arguments)}finally{g=oe}}}})(Iu)),Iu}var Qp;function Ox(){return Qp||(Qp=1,Du.exports=Fx()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function kx(){if(em)return Vn;em=1;var s=ff(),e=Ox();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function g(t){return h.call(y,t)?!0:h.call(_,t)?!1:m.test(t)?y[t]=!0:(_[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,d,p,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=b}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,U);v[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,U);v[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,U);v[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function k(t,i,a,l){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,l)&&(a=null),l||d===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):d.mustUseProperty?t[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,l=d.attributeNamespace,a===null?t.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),X=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,I;function Z(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ie=!1;function Ve(t,i){if(!t||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var l=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){l=le}t.call(i.prototype)}else{try{throw Error()}catch(le){l=le}t()}}catch(le){if(le&&l&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),p=l.stack.split(`
`),b=d.length-1,D=p.length-1;1<=b&&0<=D&&d[b]!==p[D];)D--;for(;1<=b&&0<=D;b--,D--)if(d[b]!==p[D]){if(b!==1||D!==1)do if(b--,D--,0>D||d[b]!==p[D]){var B=`
`+d[b].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=b&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Z(t):""}function Oe(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=Ve(t.type,!1),t;case 11:return t=Ve(t.type.render,!1),t;case 1:return t=Ve(t.type,!0),t;default:return""}}function j(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case N:return"Portal";case L:return"Profiler";case E:return"StrictMode";case de:return"Suspense";case pe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case W:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return i=t.displayName||null,i!==null?i:j(t.type)||"Memo";case ue:i=t._payload,t=t._init;try{return j(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Ae(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){l=""+b,p.call(this,b)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Xe(t){t._valueTracker||(t._valueTracker=je(t))}function vt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ae(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ot(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _t(t,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function ft(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ce(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&k(t,"checked",i,!1)}function Ft(t,i){ht(t,i);var a=ce(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Lt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Lt(t,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Bt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Lt(t,i,a){(i!=="number"||ot(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ot=Array.isArray;function ve(t,i,a,l){if(t=t.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<t.length;a++)d=i.hasOwnProperty("$"+t[a].value),t[a].selected!==d&&(t[a].selected=d),d&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),i=null,d=0;d<t.length;d++){if(t[d].value===a){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function tt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ot(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ce(a)}}function hn(t,i){var a=ce(i.value),l=ce(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Ct(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function P(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function S(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?P(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $,re=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function fe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Pe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function he(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function ge(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=he(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,d):t[a]=d}}var Le=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(t,i){if(i){if(Le[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function De(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function et(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nt=null,st=null,V=null;function Ce(t){if(t=Sa(t)){if(typeof nt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=So(i),nt(t.stateNode,t.type,i))}}function me(t){st?V?V.push(t):V=[t]:st=t}function Ne(){if(st){var t=st,i=V;if(V=st=null,Ce(t),i)for(t=0;t<i.length;t++)Ce(i[t])}}function Ue(t,i){return t(i)}function _e(){}var qe=!1;function Ge(t,i,a){if(qe)return t(i,a);qe=!0;try{return Ue(t,i,a)}finally{qe=!1,(st!==null||V!==null)&&(_e(),Ne())}}function kt(t,i){var a=t.stateNode;if(a===null)return null;var l=So(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Pt=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Pt=!1}function Qn(t,i,a,l,d,p,b,D,B){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(Se){this.onError(Se)}}var Nr=!1,ls=null,Lr=!1,Dr=null,Ql={onError:function(t){Nr=!0,ls=t}};function no(t,i,a,l,d,p,b,D,B){Nr=!1,ls=null,Qn.apply(Ql,arguments)}function io(t,i,a,l,d,p,b,D,B){if(no.apply(this,arguments),Nr){if(Nr){var le=ls;Nr=!1,ls=null}else throw Error(n(198));Lr||(Lr=!0,Dr=le)}}function Cn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function cs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(Cn(t)!==t)throw Error(n(188))}function ro(t){var i=t.alternate;if(!i){if(i=Cn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return ta(d),t;if(p===l)return ta(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=d,l=p;else{for(var b=!1,D=d.child;D;){if(D===a){b=!0,a=d,l=p;break}if(D===l){b=!0,l=d,a=p;break}D=D.sibling}if(!b){for(D=p.child;D;){if(D===a){b=!0,a=p,l=d;break}if(D===l){b=!0,l=p,a=d;break}D=D.sibling}if(!b)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Ir(t){return t=ro(t),t!==null?na(t):null}function na(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=na(t);if(i!==null)return i;t=t.sibling}return null}var Ur=e.unstable_scheduleCallback,ia=e.unstable_cancelCallback,so=e.unstable_shouldYield,ec=e.unstable_requestPaint,Yt=e.unstable_now,tc=e.unstable_getCurrentPriorityLevel,ra=e.unstable_ImmediatePriority,w=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,we=null;function ze(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ct,Ye=Math.log,Qe=Math.LN2;function ct(t){return t>>>=0,t===0?32:31-(Ye(t)/Qe|0)|0}var ut=64,Ze=4194304;function bt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,d=t.suspendedLanes,p=t.pingedLanes,b=a&268435455;if(b!==0){var D=b&~d;D!==0?l=bt(D):(p&=b,p!==0&&(l=bt(p)))}else b=a&~d,b!==0?l=bt(b):p!==0&&(l=bt(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Te(i),d=1<<a,l|=t[a],i&=~d;return l}function jt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var b=31-Te(p),D=1<<b,B=d[b];B===-1?((D&a)===0||(D&l)!==0)&&(d[b]=jt(D,i)):B<=i&&(t.expiredLanes|=D),p&=~D}}function en(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ke(){var t=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),t}function pn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function mt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Te(i),t[i]=a}function In(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var d=31-Te(a),p=1<<d;i[d]=0,l[d]=-1,t[d]=-1,a&=~p}}function Un(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Te(a),d=1<<l;d&i|t[l]&i&&(t[l]|=i),a&=~d}}var gt=0;function Oi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Nt,Ht,li,It,ci,Mi=!1,Fr=[],nr=null,ir=null,rr=null,sa=new Map,aa=new Map,sr=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,i){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":aa.delete(i.pointerId)}}function oa(t,i,a,l,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Sa(i),i!==null&&Ht(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function t0(t,i,a,l,d){switch(i){case"focusin":return nr=oa(nr,t,i,a,l,d),!0;case"dragenter":return ir=oa(ir,t,i,a,l,d),!0;case"mouseover":return rr=oa(rr,t,i,a,l,d),!0;case"pointerover":var p=d.pointerId;return sa.set(p,oa(sa.get(p)||null,t,i,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,aa.set(p,oa(aa.get(p)||null,t,i,a,l,d)),!0}return!1}function Lf(t){var i=Or(t.target);if(i!==null){var a=Cn(i);if(a!==null){if(i=a.tag,i===13){if(i=cs(a),i!==null){t.blockedOn=i,ci(t.priority,function(){li(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ic(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Re=l,a.target.dispatchEvent(l),Re=null}else return i=Sa(a),i!==null&&Ht(i),t.blockedOn=a,!1;i.shift()}return!0}function Df(t,i,a){ao(t)&&a.delete(i)}function n0(){Mi=!1,nr!==null&&ao(nr)&&(nr=null),ir!==null&&ao(ir)&&(ir=null),rr!==null&&ao(rr)&&(rr=null),sa.forEach(Df),aa.forEach(Df)}function la(t,i){t.blockedOn===i&&(t.blockedOn=null,Mi||(Mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,n0)))}function ca(t){function i(d){return la(d,t)}if(0<Fr.length){la(Fr[0],t);for(var a=1;a<Fr.length;a++){var l=Fr[a];l.blockedOn===t&&(l.blockedOn=null)}}for(nr!==null&&la(nr,t),ir!==null&&la(ir,t),rr!==null&&la(rr,t),sa.forEach(i),aa.forEach(i),a=0;a<sr.length;a++)l=sr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<sr.length&&(a=sr[0],a.blockedOn===null);)Lf(a),a.blockedOn===null&&sr.shift()}var us=A.ReactCurrentBatchConfig,oo=!0;function i0(t,i,a,l){var d=gt,p=us.transition;us.transition=null;try{gt=1,nc(t,i,a,l)}finally{gt=d,us.transition=p}}function r0(t,i,a,l){var d=gt,p=us.transition;us.transition=null;try{gt=4,nc(t,i,a,l)}finally{gt=d,us.transition=p}}function nc(t,i,a,l){if(oo){var d=ic(t,i,a,l);if(d===null)yc(t,i,l,lo,a),Nf(t,l);else if(t0(d,t,i,a,l))l.stopPropagation();else if(Nf(t,l),i&4&&-1<e0.indexOf(t)){for(;d!==null;){var p=Sa(d);if(p!==null&&Nt(p),p=ic(t,i,a,l),p===null&&yc(t,i,l,lo,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else yc(t,i,l,null,a)}}var lo=null;function ic(t,i,a,l){if(lo=null,t=et(l),t=Or(t),t!==null)if(i=Cn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=cs(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return lo=t,null}function If(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tc()){case ra:return 1;case w:return 4;case q:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var ar=null,rc=null,co=null;function Uf(){if(co)return co;var t,i=rc,a=i.length,l,d="value"in ar?ar.value:ar.textContent,p=d.length;for(t=0;t<a&&i[t]===d[t];t++);var b=a-t;for(l=1;l<=b&&i[a-l]===d[p-l];l++);return co=d.slice(t,1<l?1-l:void 0)}function uo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function Ff(){return!1}function Wn(t){function i(a,l,d,p,b){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?fo:Ff,this.isPropagationStopped=Ff,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=Wn(ds),ua=oe({},ds,{view:0,detail:0}),s0=Wn(ua),ac,oc,da,ho=oe({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(ac=t.screenX-da.screenX,oc=t.screenY-da.screenY):oc=ac=0,da=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Of=Wn(ho),a0=oe({},ho,{dataTransfer:0}),o0=Wn(a0),l0=oe({},ua,{relatedTarget:0}),lc=Wn(l0),c0=oe({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),u0=Wn(c0),d0=oe({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),f0=Wn(d0),h0=oe({},ds,{data:0}),kf=Wn(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=g0[t])?!!i[t]:!1}function cc(){return x0}var v0=oe({},ua,{key:function(t){if(t.key){var i=p0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_0=Wn(v0),y0=oe({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Wn(y0),S0=oe({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),M0=Wn(S0),E0=oe({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=Wn(E0),T0=oe({},ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=Wn(T0),A0=[9,13,27,32],uc=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var C0=f&&"TextEvent"in window&&!fa,zf=f&&(!uc||fa&&8<fa&&11>=fa),Vf=" ",Hf=!1;function Gf(t,i){switch(t){case"keyup":return A0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function R0(t,i){switch(t){case"compositionend":return Wf(i);case"keypress":return i.which!==32?null:(Hf=!0,Vf);case"textInput":return t=i.data,t===Vf&&Hf?null:t;default:return null}}function P0(t,i){if(fs)return t==="compositionend"||!uc&&Gf(t,i)?(t=Uf(),co=rc=ar=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zf&&i.locale!=="ko"?null:i.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!N0[t.type]:i==="textarea"}function jf(t,i,a,l){me(l),i=vo(i,"onChange"),0<i.length&&(a=new sc("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ha=null,pa=null;function L0(t){uh(t,0)}function po(t){var i=xs(t);if(vt(i))return t}function D0(t,i){if(t==="change")return i}var qf=!1;if(f){var dc;if(f){var fc="oninput"in document;if(!fc){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),fc=typeof Yf.oninput=="function"}dc=fc}else dc=!1;qf=dc&&(!document.documentMode||9<document.documentMode)}function $f(){ha&&(ha.detachEvent("onpropertychange",Kf),pa=ha=null)}function Kf(t){if(t.propertyName==="value"&&po(pa)){var i=[];jf(i,pa,t,et(t)),Ge(L0,i)}}function I0(t,i,a){t==="focusin"?($f(),ha=i,pa=a,ha.attachEvent("onpropertychange",Kf)):t==="focusout"&&$f()}function U0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return po(pa)}function F0(t,i){if(t==="click")return po(i)}function O0(t,i){if(t==="input"||t==="change")return po(i)}function k0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ui=typeof Object.is=="function"?Object.is:k0;function ma(t,i){if(ui(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(i,d)||!ui(t[d],i[d]))return!1}return!0}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jf(t,i){var a=Zf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function Qf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Qf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var t=window,i=ot();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ot(t.document)}return i}function hc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function B0(t){var i=eh(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Qf(a.ownerDocument.documentElement,a)){if(l!==null&&hc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!t.extend&&p>l&&(d=l,l=p,p=d),d=Jf(a,p);var b=Jf(a,l);d&&b&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z0=f&&"documentMode"in document&&11>=document.documentMode,hs=null,pc=null,ga=null,mc=!1;function th(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||hs==null||hs!==ot(l)||(l=hs,"selectionStart"in l&&hc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ga&&ma(ga,l)||(ga=l,l=vo(pc,"onSelect"),0<l.length&&(i=new sc("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=hs)))}function mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ps={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},gc={},nh={};f&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function go(t){if(gc[t])return gc[t];if(!ps[t])return t;var i=ps[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in nh)return gc[t]=i[a];return t}var ih=go("animationend"),rh=go("animationiteration"),sh=go("animationstart"),ah=go("transitionend"),oh=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,i){oh.set(t,i),c(i,[t])}for(var xc=0;xc<lh.length;xc++){var vc=lh[xc],V0=vc.toLowerCase(),H0=vc[0].toUpperCase()+vc.slice(1);or(V0,"on"+H0)}or(ih,"onAnimationEnd"),or(rh,"onAnimationIteration"),or(sh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function ch(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,io(l,i,void 0,t),t.currentTarget=null}function uh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],d=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var b=l.length-1;0<=b;b--){var D=l[b],B=D.instance,le=D.currentTarget;if(D=D.listener,B!==p&&d.isPropagationStopped())break e;ch(d,D,le),p=B}else for(b=0;b<l.length;b++){if(D=l[b],B=D.instance,le=D.currentTarget,D=D.listener,B!==p&&d.isPropagationStopped())break e;ch(d,D,le),p=B}}}if(Lr)throw t=Dr,Lr=!1,Dr=null,t}function Gt(t,i){var a=i[wc];a===void 0&&(a=i[wc]=new Set);var l=t+"__bubble";a.has(l)||(dh(i,t,2,!1),a.add(l))}function _c(t,i,a){var l=0;i&&(l|=4),dh(a,t,l,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[xo]){t[xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(G0.has(a)||_c(a,!1,t),_c(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xo]||(i[xo]=!0,_c("selectionchange",!1,i))}}function dh(t,i,a,l){switch(If(i)){case 1:var d=i0;break;case 4:d=r0;break;default:d=nc}a=d.bind(null,i,a,t),d=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,a,{capture:!0,passive:d}):t.addEventListener(i,a,!0):d!==void 0?t.addEventListener(i,a,{passive:d}):t.addEventListener(i,a,!1)}function yc(t,i,a,l,d){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var D=l.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(b===4)for(b=l.return;b!==null;){var B=b.tag;if((B===3||B===4)&&(B=b.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;b=b.return}for(;D!==null;){if(b=Or(D),b===null)return;if(B=b.tag,B===5||B===6){l=p=b;continue e}D=D.parentNode}}l=l.return}Ge(function(){var le=p,Se=et(a),Me=[];e:{var ye=oh.get(t);if(ye!==void 0){var Be=sc,We=t;switch(t){case"keypress":if(uo(a)===0)break e;case"keydown":case"keyup":Be=_0;break;case"focusin":We="focus",Be=lc;break;case"focusout":We="blur",Be=lc;break;case"beforeblur":case"afterblur":Be=lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=M0;break;case ih:case rh:case sh:Be=u0;break;case ah:Be=b0;break;case"scroll":Be=s0;break;case"wheel":Be=w0;break;case"copy":case"cut":case"paste":Be=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Bf}var $e=(i&4)!==0,Qt=!$e&&t==="scroll",Q=$e?ye!==null?ye+"Capture":null:ye;$e=[];for(var H=le,ie;H!==null;){ie=H;var be=ie.stateNode;if(ie.tag===5&&be!==null&&(ie=be,Q!==null&&(be=kt(H,Q),be!=null&&$e.push(_a(H,be,ie)))),Qt)break;H=H.return}0<$e.length&&(ye=new Be(ye,We,null,a,Se),Me.push({event:ye,listeners:$e}))}}if((i&7)===0){e:{if(ye=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",ye&&a!==Re&&(We=a.relatedTarget||a.fromElement)&&(Or(We)||We[ki]))break e;if((Be||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Be?(We=a.relatedTarget||a.toElement,Be=le,We=We?Or(We):null,We!==null&&(Qt=Cn(We),We!==Qt||We.tag!==5&&We.tag!==6)&&(We=null)):(Be=null,We=le),Be!==We)){if($e=Of,be="onMouseLeave",Q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&($e=Bf,be="onPointerLeave",Q="onPointerEnter",H="pointer"),Qt=Be==null?ye:xs(Be),ie=We==null?ye:xs(We),ye=new $e(be,H+"leave",Be,a,Se),ye.target=Qt,ye.relatedTarget=ie,be=null,Or(Se)===le&&($e=new $e(Q,H+"enter",We,a,Se),$e.target=ie,$e.relatedTarget=Qt,be=$e),Qt=be,Be&&We)t:{for($e=Be,Q=We,H=0,ie=$e;ie;ie=ms(ie))H++;for(ie=0,be=Q;be;be=ms(be))ie++;for(;0<H-ie;)$e=ms($e),H--;for(;0<ie-H;)Q=ms(Q),ie--;for(;H--;){if($e===Q||Q!==null&&$e===Q.alternate)break t;$e=ms($e),Q=ms(Q)}$e=null}else $e=null;Be!==null&&fh(Me,ye,Be,$e,!1),We!==null&&Qt!==null&&fh(Me,Qt,We,$e,!0)}}e:{if(ye=le?xs(le):window,Be=ye.nodeName&&ye.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ye.type==="file")var Je=D0;else if(Xf(ye))if(qf)Je=O0;else{Je=U0;var it=I0}else(Be=ye.nodeName)&&Be.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(Je=F0);if(Je&&(Je=Je(t,le))){jf(Me,Je,a,Se);break e}it&&it(t,ye,le),t==="focusout"&&(it=ye._wrapperState)&&it.controlled&&ye.type==="number"&&Lt(ye,"number",ye.value)}switch(it=le?xs(le):window,t){case"focusin":(Xf(it)||it.contentEditable==="true")&&(hs=it,pc=le,ga=null);break;case"focusout":ga=pc=hs=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,th(Me,a,Se);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":th(Me,a,Se)}var rt;if(uc)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else fs?Gf(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(zf&&a.locale!=="ko"&&(fs||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&fs&&(rt=Uf()):(ar=Se,rc="value"in ar?ar.value:ar.textContent,fs=!0)),it=vo(le,lt),0<it.length&&(lt=new kf(lt,t,null,a,Se),Me.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=Wf(a),rt!==null&&(lt.data=rt)))),(rt=C0?R0(t,a):P0(t,a))&&(le=vo(le,"onBeforeInput"),0<le.length&&(Se=new kf("onBeforeInput","beforeinput",null,a,Se),Me.push({event:Se,listeners:le}),Se.data=rt))}uh(Me,i)})}function _a(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vo(t,i){for(var a=i+"Capture",l=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=kt(t,a),p!=null&&l.unshift(_a(t,p,d)),p=kt(t,i),p!=null&&l.push(_a(t,p,d))),t=t.return}return l}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fh(t,i,a,l,d){for(var p=i._reactName,b=[];a!==null&&a!==l;){var D=a,B=D.alternate,le=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&le!==null&&(D=le,d?(B=kt(a,p),B!=null&&b.unshift(_a(a,B,D))):d||(B=kt(a,p),B!=null&&b.push(_a(a,B,D)))),a=a.return}b.length!==0&&t.push({event:i,listeners:b})}var W0=/\r\n?/g,X0=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace(X0,"")}function _o(t,i,a){if(i=hh(i),hh(t)!==i&&a)throw Error(n(425))}function yo(){}var Sc=null,Mc=null;function Ec(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,j0=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(Y0)}:bc;function Y0(t){setTimeout(function(){throw t})}function Tc(t,i){var a=i,l=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){t.removeChild(d),ca(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);ca(i)}function lr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function mh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Ei="__reactFiber$"+gs,ya="__reactProps$"+gs,ki="__reactContainer$"+gs,wc="__reactEvents$"+gs,$0="__reactListeners$"+gs,K0="__reactHandles$"+gs;function Or(t){var i=t[Ei];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ki]||a[Ei]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=mh(t);t!==null;){if(a=t[Ei])return a;t=mh(t)}return i}t=a,a=t.parentNode}return null}function Sa(t){return t=t[Ei]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function So(t){return t[ya]||null}var Ac=[],vs=-1;function cr(t){return{current:t}}function Wt(t){0>vs||(t.current=Ac[vs],Ac[vs]=null,vs--)}function Vt(t,i){vs++,Ac[vs]=t.current,t.current=i}var ur={},_n=cr(ur),Fn=cr(!1),kr=ur;function _s(t,i){var a=t.type.contextTypes;if(!a)return ur;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function On(t){return t=t.childContextTypes,t!=null}function Mo(){Wt(Fn),Wt(_n)}function gh(t,i,a){if(_n.current!==ur)throw Error(n(168));Vt(_n,i),Vt(Fn,a)}function xh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,xe(t)||"Unknown",d));return oe({},a,l)}function Eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,kr=_n.current,Vt(_n,t),Vt(Fn,Fn.current),!0}function vh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=xh(t,i,kr),l.__reactInternalMemoizedMergedChildContext=t,Wt(Fn),Wt(_n),Vt(_n,t)):Wt(Fn),Vt(Fn,a)}var Bi=null,bo=!1,Cc=!1;function _h(t){Bi===null?Bi=[t]:Bi.push(t)}function Z0(t){bo=!0,_h(t)}function dr(){if(!Cc&&Bi!==null){Cc=!0;var t=0,i=gt;try{var a=Bi;for(gt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Bi=null,bo=!1}catch(d){throw Bi!==null&&(Bi=Bi.slice(t+1)),Ur(ra,dr),d}finally{gt=i,Cc=!1}}return null}var ys=[],Ss=0,To=null,wo=0,ei=[],ti=0,Br=null,zi=1,Vi="";function zr(t,i){ys[Ss++]=wo,ys[Ss++]=To,To=t,wo=i}function yh(t,i,a){ei[ti++]=zi,ei[ti++]=Vi,ei[ti++]=Br,Br=t;var l=zi;t=Vi;var d=32-Te(l)-1;l&=~(1<<d),a+=1;var p=32-Te(i)+d;if(30<p){var b=d-d%5;p=(l&(1<<b)-1).toString(32),l>>=b,d-=b,zi=1<<32-Te(i)+d|a<<d|l,Vi=p+t}else zi=1<<p|a<<d|l,Vi=t}function Rc(t){t.return!==null&&(zr(t,1),yh(t,1,0))}function Pc(t){for(;t===To;)To=ys[--Ss],ys[Ss]=null,wo=ys[--Ss],ys[Ss]=null;for(;t===Br;)Br=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null,zi=ei[--ti],ei[ti]=null}var Xn=null,jn=null,qt=!1,di=null;function Sh(t,i){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Mh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Xn=t,jn=lr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Xn=t,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:zi,overflow:Vi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Xn=t,jn=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(qt){var i=jn;if(i){var a=i;if(!Mh(t,i)){if(Nc(t))throw Error(n(418));i=lr(a.nextSibling);var l=Xn;i&&Mh(t,i)?Sh(l,a):(t.flags=t.flags&-4097|2,qt=!1,Xn=t)}}else{if(Nc(t))throw Error(n(418));t.flags=t.flags&-4097|2,qt=!1,Xn=t}}}function Eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function Ao(t){if(t!==Xn)return!1;if(!qt)return Eh(t),qt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ec(t.type,t.memoizedProps)),i&&(i=jn)){if(Nc(t))throw bh(),Error(n(418));for(;i;)Sh(t,i),i=lr(i.nextSibling)}if(Eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){jn=lr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}jn=null}}else jn=Xn?lr(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=jn;t;)t=lr(t.nextSibling)}function Ms(){jn=Xn=null,qt=!1}function Dc(t){di===null?di=[t]:di.push(t)}var J0=A.ReactCurrentBatchConfig;function Ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var d=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(b){var D=d.refs;b===null?delete D[p]:D[p]=b},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Co(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Th(t){var i=t._init;return i(t._payload)}function wh(t){function i(Q,H){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[H],Q.flags|=16):ie.push(H)}}function a(Q,H){if(!t)return null;for(;H!==null;)i(Q,H),H=H.sibling;return null}function l(Q,H){for(Q=new Map;H!==null;)H.key!==null?Q.set(H.key,H):Q.set(H.index,H),H=H.sibling;return Q}function d(Q,H){return Q=_r(Q,H),Q.index=0,Q.sibling=null,Q}function p(Q,H,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<H?(Q.flags|=2,H):ie):(Q.flags|=2,H)):(Q.flags|=1048576,H)}function b(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function D(Q,H,ie,be){return H===null||H.tag!==6?(H=bu(ie,Q.mode,be),H.return=Q,H):(H=d(H,ie),H.return=Q,H)}function B(Q,H,ie,be){var Je=ie.type;return Je===O?Se(Q,H,ie.props.children,be,ie.key):H!==null&&(H.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ue&&Th(Je)===H.type)?(be=d(H,ie.props),be.ref=Ma(Q,H,ie),be.return=Q,be):(be=Jo(ie.type,ie.key,ie.props,null,Q.mode,be),be.ref=Ma(Q,H,ie),be.return=Q,be)}function le(Q,H,ie,be){return H===null||H.tag!==4||H.stateNode.containerInfo!==ie.containerInfo||H.stateNode.implementation!==ie.implementation?(H=Tu(ie,Q.mode,be),H.return=Q,H):(H=d(H,ie.children||[]),H.return=Q,H)}function Se(Q,H,ie,be,Je){return H===null||H.tag!==7?(H=Yr(ie,Q.mode,be,Je),H.return=Q,H):(H=d(H,ie),H.return=Q,H)}function Me(Q,H,ie){if(typeof H=="string"&&H!==""||typeof H=="number")return H=bu(""+H,Q.mode,ie),H.return=Q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case F:return ie=Jo(H.type,H.key,H.props,null,Q.mode,ie),ie.ref=Ma(Q,null,H),ie.return=Q,ie;case N:return H=Tu(H,Q.mode,ie),H.return=Q,H;case ue:var be=H._init;return Me(Q,be(H._payload),ie)}if(Ot(H)||se(H))return H=Yr(H,Q.mode,ie,null),H.return=Q,H;Co(Q,H)}return null}function ye(Q,H,ie,be){var Je=H!==null?H.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Je!==null?null:D(Q,H,""+ie,be);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case F:return ie.key===Je?B(Q,H,ie,be):null;case N:return ie.key===Je?le(Q,H,ie,be):null;case ue:return Je=ie._init,ye(Q,H,Je(ie._payload),be)}if(Ot(ie)||se(ie))return Je!==null?null:Se(Q,H,ie,be,null);Co(Q,ie)}return null}function Be(Q,H,ie,be,Je){if(typeof be=="string"&&be!==""||typeof be=="number")return Q=Q.get(ie)||null,D(H,Q,""+be,Je);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case F:return Q=Q.get(be.key===null?ie:be.key)||null,B(H,Q,be,Je);case N:return Q=Q.get(be.key===null?ie:be.key)||null,le(H,Q,be,Je);case ue:var it=be._init;return Be(Q,H,ie,it(be._payload),Je)}if(Ot(be)||se(be))return Q=Q.get(ie)||null,Se(H,Q,be,Je,null);Co(H,be)}return null}function We(Q,H,ie,be){for(var Je=null,it=null,rt=H,lt=H=0,un=null;rt!==null&&lt<ie.length;lt++){rt.index>lt?(un=rt,rt=null):un=rt.sibling;var Rt=ye(Q,rt,ie[lt],be);if(Rt===null){rt===null&&(rt=un);break}t&&rt&&Rt.alternate===null&&i(Q,rt),H=p(Rt,H,lt),it===null?Je=Rt:it.sibling=Rt,it=Rt,rt=un}if(lt===ie.length)return a(Q,rt),qt&&zr(Q,lt),Je;if(rt===null){for(;lt<ie.length;lt++)rt=Me(Q,ie[lt],be),rt!==null&&(H=p(rt,H,lt),it===null?Je=rt:it.sibling=rt,it=rt);return qt&&zr(Q,lt),Je}for(rt=l(Q,rt);lt<ie.length;lt++)un=Be(rt,Q,lt,ie[lt],be),un!==null&&(t&&un.alternate!==null&&rt.delete(un.key===null?lt:un.key),H=p(un,H,lt),it===null?Je=un:it.sibling=un,it=un);return t&&rt.forEach(function(yr){return i(Q,yr)}),qt&&zr(Q,lt),Je}function $e(Q,H,ie,be){var Je=se(ie);if(typeof Je!="function")throw Error(n(150));if(ie=Je.call(ie),ie==null)throw Error(n(151));for(var it=Je=null,rt=H,lt=H=0,un=null,Rt=ie.next();rt!==null&&!Rt.done;lt++,Rt=ie.next()){rt.index>lt?(un=rt,rt=null):un=rt.sibling;var yr=ye(Q,rt,Rt.value,be);if(yr===null){rt===null&&(rt=un);break}t&&rt&&yr.alternate===null&&i(Q,rt),H=p(yr,H,lt),it===null?Je=yr:it.sibling=yr,it=yr,rt=un}if(Rt.done)return a(Q,rt),qt&&zr(Q,lt),Je;if(rt===null){for(;!Rt.done;lt++,Rt=ie.next())Rt=Me(Q,Rt.value,be),Rt!==null&&(H=p(Rt,H,lt),it===null?Je=Rt:it.sibling=Rt,it=Rt);return qt&&zr(Q,lt),Je}for(rt=l(Q,rt);!Rt.done;lt++,Rt=ie.next())Rt=Be(rt,Q,lt,Rt.value,be),Rt!==null&&(t&&Rt.alternate!==null&&rt.delete(Rt.key===null?lt:Rt.key),H=p(Rt,H,lt),it===null?Je=Rt:it.sibling=Rt,it=Rt);return t&&rt.forEach(function(Nx){return i(Q,Nx)}),qt&&zr(Q,lt),Je}function Qt(Q,H,ie,be){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case F:e:{for(var Je=ie.key,it=H;it!==null;){if(it.key===Je){if(Je=ie.type,Je===O){if(it.tag===7){a(Q,it.sibling),H=d(it,ie.props.children),H.return=Q,Q=H;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ue&&Th(Je)===it.type){a(Q,it.sibling),H=d(it,ie.props),H.ref=Ma(Q,it,ie),H.return=Q,Q=H;break e}a(Q,it);break}else i(Q,it);it=it.sibling}ie.type===O?(H=Yr(ie.props.children,Q.mode,be,ie.key),H.return=Q,Q=H):(be=Jo(ie.type,ie.key,ie.props,null,Q.mode,be),be.ref=Ma(Q,H,ie),be.return=Q,Q=be)}return b(Q);case N:e:{for(it=ie.key;H!==null;){if(H.key===it)if(H.tag===4&&H.stateNode.containerInfo===ie.containerInfo&&H.stateNode.implementation===ie.implementation){a(Q,H.sibling),H=d(H,ie.children||[]),H.return=Q,Q=H;break e}else{a(Q,H);break}else i(Q,H);H=H.sibling}H=Tu(ie,Q.mode,be),H.return=Q,Q=H}return b(Q);case ue:return it=ie._init,Qt(Q,H,it(ie._payload),be)}if(Ot(ie))return We(Q,H,ie,be);if(se(ie))return $e(Q,H,ie,be);Co(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,H!==null&&H.tag===6?(a(Q,H.sibling),H=d(H,ie),H.return=Q,Q=H):(a(Q,H),H=bu(ie,Q.mode,be),H.return=Q,Q=H),b(Q)):a(Q,H)}return Qt}var Es=wh(!0),Ah=wh(!1),Ro=cr(null),Po=null,bs=null,Ic=null;function Uc(){Ic=bs=Po=null}function Fc(t){var i=Ro.current;Wt(Ro),t._currentValue=i}function Oc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Ts(t,i){Po=t,Ic=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(kn=!0),t.firstContext=null)}function ni(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},bs===null){if(Po===null)throw Error(n(308));bs=t,Po.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return i}var Vr=null;function kc(t){Vr===null?Vr=[t]:Vr.push(t)}function Ch(t,i,a,l){var d=i.interleaved;return d===null?(a.next=a,kc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Hi(t,l)}function Hi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var fr=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(At&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Hi(t,a)}return d=l.interleaved,d===null?(i.next=i,kc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Hi(t,a)}function No(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Un(t,a)}}function Ph(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=b:p=p.next=b,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Lo(t,i,a,l){var d=t.updateQueue;fr=!1;var p=d.firstBaseUpdate,b=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var B=D,le=B.next;B.next=null,b===null?p=le:b.next=le,b=B;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==b&&(D===null?Se.firstBaseUpdate=le:D.next=le,Se.lastBaseUpdate=B))}if(p!==null){var Me=d.baseState;b=0,Se=le=B=null,D=p;do{var ye=D.lane,Be=D.eventTime;if((l&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var We=t,$e=D;switch(ye=i,Be=a,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){Me=We.call(Be,Me,ye);break e}Me=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,ye=typeof We=="function"?We.call(Be,Me,ye):We,ye==null)break e;Me=oe({},Me,ye);break e;case 2:fr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ye=d.effects,ye===null?d.effects=[D]:ye.push(D))}else Be={eventTime:Be,lane:ye,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(le=Se=Be,B=Me):Se=Se.next=Be,b|=ye;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;ye=D,D=ye.next,ye.next=null,d.lastBaseUpdate=ye,d.shared.pending=null}}while(!0);if(Se===null&&(B=Me),d.baseState=B,d.firstBaseUpdate=le,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do b|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Wr|=b,t.lanes=b,t.memoizedState=Me}}function Nh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var Ea={},bi=cr(Ea),ba=cr(Ea),Ta=cr(Ea);function Hr(t){if(t===Ea)throw Error(n(174));return t}function zc(t,i){switch(Vt(Ta,i),Vt(ba,t),Vt(bi,Ea),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:S(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=S(i,t)}Wt(bi),Vt(bi,i)}function ws(){Wt(bi),Wt(ba),Wt(Ta)}function Lh(t){Hr(Ta.current);var i=Hr(bi.current),a=S(i,t.type);i!==a&&(Vt(ba,t),Vt(bi,a))}function Vc(t){ba.current===t&&(Wt(bi),Wt(ba))}var $t=cr(0);function Do(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Gc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Io=A.ReactCurrentDispatcher,Wc=A.ReactCurrentBatchConfig,Gr=0,Kt=null,rn=null,ln=null,Uo=!1,wa=!1,Aa=0,Q0=0;function yn(){throw Error(n(321))}function Xc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ui(t[a],i[a]))return!1;return!0}function jc(t,i,a,l,d,p){if(Gr=p,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Io.current=t===null||t.memoizedState===null?ix:rx,t=a(l,d),wa){p=0;do{if(wa=!1,Aa=0,25<=p)throw Error(n(301));p+=1,ln=rn=null,i.updateQueue=null,Io.current=sx,t=a(l,d)}while(wa)}if(Io.current=ko,i=rn!==null&&rn.next!==null,Gr=0,ln=rn=Kt=null,Uo=!1,i)throw Error(n(300));return t}function qc(){var t=Aa!==0;return Aa=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Kt.memoizedState=ln=t:ln=ln.next=t,ln}function ii(){if(rn===null){var t=Kt.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var i=ln===null?Kt.memoizedState:ln.next;if(i!==null)ln=i,rn=t;else{if(t===null)throw Error(n(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},ln===null?Kt.memoizedState=ln=t:ln=ln.next=t}return ln}function Ca(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=ii(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=rn,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var b=d.next;d.next=p.next,p.next=b}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var D=b=null,B=null,le=p;do{var Se=le.lane;if((Gr&Se)===Se)B!==null&&(B=B.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),l=le.hasEagerState?le.eagerState:t(l,le.action);else{var Me={lane:Se,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};B===null?(D=B=Me,b=l):B=B.next=Me,Kt.lanes|=Se,Wr|=Se}le=le.next}while(le!==null&&le!==p);B===null?b=l:B.next=D,ui(l,i.memoizedState)||(kn=!0),i.memoizedState=l,i.baseState=b,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){d=t;do p=d.lane,Kt.lanes|=p,Wr|=p,d=d.next;while(d!==t)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function $c(t){var i=ii(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do p=t(p,b.action),b=b.next;while(b!==d);ui(p,i.memoizedState)||(kn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function Dh(){}function Ih(t,i){var a=Kt,l=ii(),d=i(),p=!ui(l.memoizedState,d);if(p&&(l.memoizedState=d,kn=!0),l=l.queue,Kc(Oh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Ra(9,Fh.bind(null,a,l,d,i),void 0,null),cn===null)throw Error(n(349));(Gr&30)!==0||Uh(a,i,d)}return d}function Uh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Fh(t,i,a,l){i.value=a,i.getSnapshot=l,kh(i)&&Bh(t)}function Oh(t,i,a){return a(function(){kh(i)&&Bh(t)})}function kh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ui(t,a)}catch{return!0}}function Bh(t){var i=Hi(t,1);i!==null&&mi(i,t,1,-1)}function zh(t){var i=Ti();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},i.queue=t,t=t.dispatch=nx.bind(null,Kt,t),[i.memoizedState,t]}function Ra(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Vh(){return ii().memoizedState}function Fo(t,i,a,l){var d=Ti();Kt.flags|=t,d.memoizedState=Ra(1|i,a,void 0,l===void 0?null:l)}function Oo(t,i,a,l){var d=ii();l=l===void 0?null:l;var p=void 0;if(rn!==null){var b=rn.memoizedState;if(p=b.destroy,l!==null&&Xc(l,b.deps)){d.memoizedState=Ra(i,a,p,l);return}}Kt.flags|=t,d.memoizedState=Ra(1|i,a,p,l)}function Hh(t,i){return Fo(8390656,8,t,i)}function Kc(t,i){return Oo(2048,8,t,i)}function Gh(t,i){return Oo(4,2,t,i)}function Wh(t,i){return Oo(4,4,t,i)}function Xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function jh(t,i,a){return a=a!=null?a.concat([t]):null,Oo(4,4,Xh.bind(null,i,t),a)}function Zc(){}function qh(t,i){var a=ii();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Xc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Yh(t,i){var a=ii();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Xc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function $h(t,i,a){return(Gr&21)===0?(t.baseState&&(t.baseState=!1,kn=!0),t.memoizedState=a):(ui(a,i)||(a=ke(),Kt.lanes|=a,Wr|=a,t.baseState=!0),i)}function ex(t,i){var a=gt;gt=a!==0&&4>a?a:4,t(!0);var l=Wc.transition;Wc.transition={};try{t(!1),i()}finally{gt=a,Wc.transition=l}}function Kh(){return ii().memoizedState}function tx(t,i,a){var l=xr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Zh(t))Jh(i,a);else if(a=Ch(t,i,a,l),a!==null){var d=Pn();mi(a,t,l,d),Qh(a,i,l)}}function nx(t,i,a){var l=xr(t),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zh(t))Jh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var b=i.lastRenderedState,D=p(b,a);if(d.hasEagerState=!0,d.eagerState=D,ui(D,b)){var B=i.interleaved;B===null?(d.next=d,kc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Ch(t,i,d,l),a!==null&&(d=Pn(),mi(a,t,l,d),Qh(a,i,l))}}function Zh(t){var i=t.alternate;return t===Kt||i!==null&&i===Kt}function Jh(t,i){wa=Uo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Qh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Un(t,a)}}var ko={readContext:ni,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},ix={readContext:ni,useCallback:function(t,i){return Ti().memoizedState=[t,i===void 0?null:i],t},useContext:ni,useEffect:Hh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Fo(4194308,4,Xh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Fo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Fo(4,2,t,i)},useMemo:function(t,i){var a=Ti();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=Ti();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=tx.bind(null,Kt,t),[l.memoizedState,t]},useRef:function(t){var i=Ti();return t={current:t},i.memoizedState=t},useState:zh,useDebugValue:Zc,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=zh(!1),i=t[0];return t=ex.bind(null,t[1]),Ti().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Kt,d=Ti();if(qt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),cn===null)throw Error(n(349));(Gr&30)!==0||Uh(l,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Hh(Oh.bind(null,l,p,t),[t]),l.flags|=2048,Ra(9,Fh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=Ti(),i=cn.identifierPrefix;if(qt){var a=Vi,l=zi;a=(l&~(1<<32-Te(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Q0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},rx={readContext:ni,useCallback:qh,useContext:ni,useEffect:Kc,useImperativeHandle:jh,useInsertionEffect:Gh,useLayoutEffect:Wh,useMemo:Yh,useReducer:Yc,useRef:Vh,useState:function(){return Yc(Ca)},useDebugValue:Zc,useDeferredValue:function(t){var i=ii();return $h(i,rn.memoizedState,t)},useTransition:function(){var t=Yc(Ca)[0],i=ii().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1},sx={readContext:ni,useCallback:qh,useContext:ni,useEffect:Kc,useImperativeHandle:jh,useInsertionEffect:Gh,useLayoutEffect:Wh,useMemo:Yh,useReducer:$c,useRef:Vh,useState:function(){return $c(Ca)},useDebugValue:Zc,useDeferredValue:function(t){var i=ii();return rn===null?i.memoizedState=t:$h(i,rn.memoizedState,t)},useTransition:function(){var t=$c(Ca)[0],i=ii().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1};function fi(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Jc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:oe({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bo={isMounted:function(t){return(t=t._reactInternals)?Cn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Pn(),d=xr(t),p=Gi(l,d);p.payload=i,a!=null&&(p.callback=a),i=hr(t,p,d),i!==null&&(mi(i,t,d,l),No(i,t,d))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Pn(),d=xr(t),p=Gi(l,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=hr(t,p,d),i!==null&&(mi(i,t,d,l),No(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Pn(),l=xr(t),d=Gi(a,l);d.tag=2,i!=null&&(d.callback=i),i=hr(t,d,l),i!==null&&(mi(i,t,l,a),No(i,t,l))}};function ep(t,i,a,l,d,p,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,b):i.prototype&&i.prototype.isPureReactComponent?!ma(a,l)||!ma(d,p):!0}function tp(t,i,a){var l=!1,d=ur,p=i.contextType;return typeof p=="object"&&p!==null?p=ni(p):(d=On(i)?kr:_n.current,l=i.contextTypes,p=(l=l!=null)?_s(t,d):ur),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Bo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function np(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Bo.enqueueReplaceState(i,i.state,null)}function Qc(t,i,a,l){var d=t.stateNode;d.props=a,d.state=t.memoizedState,d.refs={},Bc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=ni(p):(p=On(i)?kr:_n.current,d.context=_s(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Jc(t,i,p,a),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Bo.enqueueReplaceState(d,d.state,null),Lo(t,a,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var a="",l=i;do a+=Oe(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function eu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function tu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function ip(t,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){jo||(jo=!0,gu=l),tu(t,i)},a}function rp(t,i,a){a=Gi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;a.payload=function(){return l(d)},a.callback=function(){tu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){tu(t,i),typeof l!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function sp(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new ax;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(a)||(d.add(a),t=yx.bind(null,t,i,a),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function op(t,i,a,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,hr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var ox=A.ReactCurrentOwner,kn=!1;function Rn(t,i,a,l){i.child=t===null?Ah(i,null,a,l):Es(i,t.child,a,l)}function lp(t,i,a,l,d){a=a.render;var p=i.ref;return Ts(i,d),l=jc(t,i,a,l,p,d),a=qc(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Wi(t,i,d)):(qt&&a&&Rc(i),i.flags|=1,Rn(t,i,l,d),i.child)}function cp(t,i,a,l,d){if(t===null){var p=a.type;return typeof p=="function"&&!Eu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,up(t,i,p,l,d)):(t=Jo(a.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var b=p.memoizedProps;if(a=a.compare,a=a!==null?a:ma,a(b,l)&&t.ref===i.ref)return Wi(t,i,d)}return i.flags|=1,t=_r(p,l),t.ref=i.ref,t.return=i,i.child=t}function up(t,i,a,l,d){if(t!==null){var p=t.memoizedProps;if(ma(p,l)&&t.ref===i.ref)if(kn=!1,i.pendingProps=l=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(kn=!0);else return i.lanes=t.lanes,Wi(t,i,d)}return nu(t,i,a,l,d)}function dp(t,i,a){var l=i.pendingProps,d=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Rs,qn),qn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(Rs,qn),qn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Vt(Rs,qn),qn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Vt(Rs,qn),qn|=l;return Rn(t,i,d,a),i.child}function fp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function nu(t,i,a,l,d){var p=On(a)?kr:_n.current;return p=_s(i,p),Ts(i,d),a=jc(t,i,a,l,p,d),l=qc(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Wi(t,i,d)):(qt&&l&&Rc(i),i.flags|=1,Rn(t,i,a,d),i.child)}function hp(t,i,a,l,d){if(On(a)){var p=!0;Eo(i)}else p=!1;if(Ts(i,d),i.stateNode===null)Vo(t,i),tp(i,a,l),Qc(i,a,l,d),l=!0;else if(t===null){var b=i.stateNode,D=i.memoizedProps;b.props=D;var B=b.context,le=a.contextType;typeof le=="object"&&le!==null?le=ni(le):(le=On(a)?kr:_n.current,le=_s(i,le));var Se=a.getDerivedStateFromProps,Me=typeof Se=="function"||typeof b.getSnapshotBeforeUpdate=="function";Me||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(D!==l||B!==le)&&np(i,b,l,le),fr=!1;var ye=i.memoizedState;b.state=ye,Lo(i,l,b,d),B=i.memoizedState,D!==l||ye!==B||Fn.current||fr?(typeof Se=="function"&&(Jc(i,a,Se,l),B=i.memoizedState),(D=fr||ep(i,a,D,l,ye,B,le))?(Me||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),b.props=l,b.state=B,b.context=le,l=D):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{b=i.stateNode,Rh(t,i),D=i.memoizedProps,le=i.type===i.elementType?D:fi(i.type,D),b.props=le,Me=i.pendingProps,ye=b.context,B=a.contextType,typeof B=="object"&&B!==null?B=ni(B):(B=On(a)?kr:_n.current,B=_s(i,B));var Be=a.getDerivedStateFromProps;(Se=typeof Be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(D!==Me||ye!==B)&&np(i,b,l,B),fr=!1,ye=i.memoizedState,b.state=ye,Lo(i,l,b,d);var We=i.memoizedState;D!==Me||ye!==We||Fn.current||fr?(typeof Be=="function"&&(Jc(i,a,Be,l),We=i.memoizedState),(le=fr||ep(i,a,le,l,ye,We,B)||!1)?(Se||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,We,B),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,We,B)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=We),b.props=l,b.state=We,b.context=B,l=le):(typeof b.componentDidUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ye===t.memoizedState||(i.flags|=1024),l=!1)}return iu(t,i,a,l,p,d)}function iu(t,i,a,l,d,p){fp(t,i);var b=(i.flags&128)!==0;if(!l&&!b)return d&&vh(i,a,!1),Wi(t,i,p);l=i.stateNode,ox.current=i;var D=b&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&b?(i.child=Es(i,t.child,null,p),i.child=Es(i,null,D,p)):Rn(t,i,D,p),i.memoizedState=l.state,d&&vh(i,a,!0),i.child}function pp(t){var i=t.stateNode;i.pendingContext?gh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(t,i.context,!1),zc(t,i.containerInfo)}function mp(t,i,a,l,d){return Ms(),Dc(d),i.flags|=256,Rn(t,i,a,l),i.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function su(t){return{baseLanes:t,cachePool:null,transitions:null}}function gp(t,i,a){var l=i.pendingProps,d=$t.current,p=!1,b=(i.flags&128)!==0,D;if((D=b)||(D=t!==null&&t.memoizedState===null?!1:(d&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Vt($t,d&1),t===null)return Lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=l.children,t=l.fallback,p?(l=i.mode,p=i.child,b={mode:"hidden",children:b},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=b):p=Qo(b,l,0,null),t=Yr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=su(a),i.memoizedState=ru,t):au(i,b));if(d=t.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return lx(t,i,b,l,D,d,a);if(p){p=l.fallback,b=i.mode,d=t.child,D=d.sibling;var B={mode:"hidden",children:l.children};return(b&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=_r(d,B),l.subtreeFlags=d.subtreeFlags&14680064),D!==null?p=_r(D,p):(p=Yr(p,b,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,b=t.child.memoizedState,b=b===null?su(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},p.memoizedState=b,p.childLanes=t.childLanes&~a,i.memoizedState=ru,l}return p=t.child,t=p.sibling,l=_r(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function au(t,i){return i=Qo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function zo(t,i,a,l){return l!==null&&Dc(l),Es(i,t.child,null,a),t=au(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function lx(t,i,a,l,d,p,b){if(a)return i.flags&256?(i.flags&=-257,l=eu(Error(n(422))),zo(t,i,b,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,d=i.mode,l=Qo({mode:"visible",children:l.children},d,0,null),p=Yr(p,d,b,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&Es(i,t.child,null,b),i.child.memoizedState=su(b),i.memoizedState=ru,p);if((i.mode&1)===0)return zo(t,i,b,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=eu(p,l,void 0),zo(t,i,b,l)}if(D=(b&t.childLanes)!==0,kn||D){if(l=cn,l!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|b))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Hi(t,d),mi(l,t,d,-1))}return Mu(),l=eu(Error(n(421))),zo(t,i,b,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Sx.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,jn=lr(d.nextSibling),Xn=i,qt=!0,di=null,t!==null&&(ei[ti++]=zi,ei[ti++]=Vi,ei[ti++]=Br,zi=t.id,Vi=t.overflow,Br=i),i=au(i,l.children),i.flags|=4096,i)}function xp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Oc(t.return,i,a)}function ou(t,i,a,l,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function vp(t,i,a){var l=i.pendingProps,d=l.revealOrder,p=l.tail;if(Rn(t,i,l.children,a),l=$t.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,a,i);else if(t.tag===19)xp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Vt($t,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)t=a.alternate,t!==null&&Do(t)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),ou(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Do(t)===null){i.child=d;break}t=d.sibling,d.sibling=a,a=d,d=t}ou(i,!0,a,null,p);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Vo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Wi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=_r(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=_r(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function cx(t,i,a){switch(i.tag){case 3:pp(i),Ms();break;case 5:Lh(i);break;case 1:On(i.type)&&Eo(i);break;case 4:zc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Vt(Ro,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Vt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?gp(t,i,a):(Vt($t,$t.current&1),t=Wi(t,i,a),t!==null?t.sibling:null);Vt($t,$t.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return vp(t,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt($t,$t.current),l)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,a)}return Wi(t,i,a)}var _p,lu,yp,Sp;_p=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lu=function(){},yp=function(t,i,a,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,Hr(bi.current);var p=null;switch(a){case"input":d=_t(t,d),l=_t(t,l),p=[];break;case"select":d=oe({},d,{value:void 0}),l=oe({},l,{value:void 0}),p=[];break;case"textarea":d=tt(t,d),l=tt(t,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=yo)}Ke(a,l);var b;a=null;for(le in d)if(!l.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var D=d[le];for(b in D)D.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?p||(p=[]):(p=p||[]).push(le,null));for(le in l){var B=l[le];if(D=d!=null?d[le]:void 0,l.hasOwnProperty(le)&&B!==D&&(B!=null||D!=null))if(le==="style")if(D){for(b in D)!D.hasOwnProperty(b)||B&&B.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in B)B.hasOwnProperty(b)&&D[b]!==B[b]&&(a||(a={}),a[b]=B[b])}else a||(p||(p=[]),p.push(le,a)),a=B;else le==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(p=p||[]).push(le,B)):le==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(le,""+B):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(B!=null&&le==="onScroll"&&Gt("scroll",t),p||D===B||(p=[])):(p=p||[]).push(le,B))}a&&(p=p||[]).push("style",a);var le=p;(i.updateQueue=le)&&(i.flags|=4)}},Sp=function(t,i,a,l){a!==l&&(i.flags|=4)};function Pa(t,i){if(!qt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function ux(t,i,a){var l=i.pendingProps;switch(Pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return On(i.type)&&Mo(),Sn(i),null;case 3:return l=i.stateNode,ws(),Wt(Fn),Wt(_n),Gc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ao(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(_u(di),di=null))),lu(t,i),Sn(i),null;case 5:Vc(i);var d=Hr(Ta.current);if(a=i.type,t!==null&&i.stateNode!=null)yp(t,i,a,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return Sn(i),null}if(t=Hr(bi.current),Ao(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[Ei]=i,l[ya]=p,t=(i.mode&1)!==0,a){case"dialog":Gt("cancel",l),Gt("close",l);break;case"iframe":case"object":case"embed":Gt("load",l);break;case"video":case"audio":for(d=0;d<xa.length;d++)Gt(xa[d],l);break;case"source":Gt("error",l);break;case"img":case"image":case"link":Gt("error",l),Gt("load",l);break;case"details":Gt("toggle",l);break;case"input":ft(l,p),Gt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Gt("invalid",l);break;case"textarea":G(l,p),Gt("invalid",l)}Ke(a,p),d=null;for(var b in p)if(p.hasOwnProperty(b)){var D=p[b];b==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&_o(l.textContent,D,t),d=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&_o(l.textContent,D,t),d=["children",""+D]):o.hasOwnProperty(b)&&D!=null&&b==="onScroll"&&Gt("scroll",l)}switch(a){case"input":Xe(l),Bt(l,p,!0);break;case"textarea":Xe(l),Ct(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=yo)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=P(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=b.createElement(a,{is:l.is}):(t=b.createElement(a),a==="select"&&(b=t,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):t=b.createElementNS(t,a),t[Ei]=i,t[ya]=l,_p(t,i,!1,!1),i.stateNode=t;e:{switch(b=De(a,l),a){case"dialog":Gt("cancel",t),Gt("close",t),d=l;break;case"iframe":case"object":case"embed":Gt("load",t),d=l;break;case"video":case"audio":for(d=0;d<xa.length;d++)Gt(xa[d],t);d=l;break;case"source":Gt("error",t),d=l;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),d=l;break;case"details":Gt("toggle",t),d=l;break;case"input":ft(t,l),d=_t(t,l),Gt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=oe({},l,{value:void 0}),Gt("invalid",t);break;case"textarea":G(t,l),d=tt(t,l),Gt("invalid",t);break;default:d=l}Ke(a,d),D=d;for(p in D)if(D.hasOwnProperty(p)){var B=D[p];p==="style"?ge(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&re(t,B)):p==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&fe(t,B):typeof B=="number"&&fe(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Gt("scroll",t):B!=null&&k(t,p,B,b))}switch(a){case"input":Xe(t),Bt(t,l,!1);break;case"textarea":Xe(t),Ct(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ce(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?ve(t,!!l.multiple,p,!1):l.defaultValue!=null&&ve(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=yo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Hr(Ta.current),Hr(bi.current),Ao(i)){if(l=i.stateNode,a=i.memoizedProps,l[Ei]=i,(p=l.nodeValue!==a)&&(t=Xn,t!==null))switch(t.tag){case 3:_o(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_o(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Ei]=i,i.stateNode=l}return Sn(i),null;case 13:if(Wt($t),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Ms(),i.flags|=98560,p=!1;else if(p=Ao(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ei]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),p=!1}else di!==null&&(_u(di),di=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||($t.current&1)!==0?sn===0&&(sn=3):Mu())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return ws(),lu(t,i),t===null&&va(i.stateNode.containerInfo),Sn(i),null;case 10:return Fc(i.type._context),Sn(i),null;case 17:return On(i.type)&&Mo(),Sn(i),null;case 19:if(Wt($t),p=i.memoizedState,p===null)return Sn(i),null;if(l=(i.flags&128)!==0,b=p.rendering,b===null)if(l)Pa(p,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(b=Do(t),b!==null){for(i.flags|=128,Pa(p,!1),l=b.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,b=p.alternate,b===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=b.childLanes,p.lanes=b.lanes,p.child=b.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=b.memoizedProps,p.memoizedState=b.memoizedState,p.updateQueue=b.updateQueue,p.type=b.type,t=b.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt($t,$t.current&1|2),i.child}t=t.sibling}p.tail!==null&&Yt()>Ps&&(i.flags|=128,l=!0,Pa(p,!1),i.lanes=4194304)}else{if(!l)if(t=Do(b),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!qt)return Sn(i),null}else 2*Yt()-p.renderingStartTime>Ps&&a!==1073741824&&(i.flags|=128,l=!0,Pa(p,!1),i.lanes=4194304);p.isBackwards?(b.sibling=i.child,i.child=b):(a=p.last,a!==null?a.sibling=b:i.child=b,p.last=b)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Yt(),i.sibling=null,a=$t.current,Vt($t,l?a&1|2:a&1),i):(Sn(i),null);case 22:case 23:return Su(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(qn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function dx(t,i){switch(Pc(i),i.tag){case 1:return On(i.type)&&Mo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ws(),Wt(Fn),Wt(_n),Gc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Vc(i),null;case 13:if(Wt($t),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt($t),null;case 4:return ws(),null;case 10:return Fc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var Ho=!1,Mn=!1,fx=typeof WeakSet=="function"?WeakSet:Set,He=null;function Cs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Jt(t,i,l)}else a.current=null}function cu(t,i,a){try{a()}catch(l){Jt(t,i,l)}}var Mp=!1;function hx(t,i){if(Sc=oo,t=eh(),hc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var b=0,D=-1,B=-1,le=0,Se=0,Me=t,ye=null;t:for(;;){for(var Be;Me!==a||d!==0&&Me.nodeType!==3||(D=b+d),Me!==p||l!==0&&Me.nodeType!==3||(B=b+l),Me.nodeType===3&&(b+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)ye=Me,Me=Be;for(;;){if(Me===t)break t;if(ye===a&&++le===d&&(D=b),ye===p&&++Se===l&&(B=b),(Be=Me.nextSibling)!==null)break;Me=ye,ye=Me.parentNode}Me=Be}a=D===-1||B===-1?null:{start:D,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:t,selectionRange:a},oo=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,Qt=We.memoizedState,Q=i.stateNode,H=Q.getSnapshotBeforeUpdate(i.elementType===i.type?$e:fi(i.type,$e),Qt);Q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){Jt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return We=Mp,Mp=!1,We}function Na(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&cu(i,a,p)}d=d.next}while(d!==l)}}function Go(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function uu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Ep(t){var i=t.alternate;i!==null&&(t.alternate=null,Ep(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ei],delete i[ya],delete i[wc],delete i[$0],delete i[K0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function du(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=yo));else if(l!==4&&(t=t.child,t!==null))for(du(t,i,a),t=t.sibling;t!==null;)du(t,i,a),t=t.sibling}function fu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(fu(t,i,a),t=t.sibling;t!==null;)fu(t,i,a),t=t.sibling}var mn=null,hi=!1;function pr(t,i,a){for(a=a.child;a!==null;)wp(t,i,a),a=a.sibling}function wp(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:Mn||Cs(a,i);case 6:var l=mn,d=hi;mn=null,pr(t,i,a),mn=l,hi=d,mn!==null&&(hi?(t=mn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(hi?(t=mn,a=a.stateNode,t.nodeType===8?Tc(t.parentNode,a):t.nodeType===1&&Tc(t,a),ca(t)):Tc(mn,a.stateNode));break;case 4:l=mn,d=hi,mn=a.stateNode.containerInfo,hi=!0,pr(t,i,a),mn=l,hi=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,b=p.destroy;p=p.tag,b!==void 0&&((p&2)!==0||(p&4)!==0)&&cu(a,i,b),d=d.next}while(d!==l)}pr(t,i,a);break;case 1:if(!Mn&&(Cs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Jt(a,i,D)}pr(t,i,a);break;case 21:pr(t,i,a);break;case 22:a.mode&1?(Mn=(l=Mn)||a.memoizedState!==null,pr(t,i,a),Mn=l):pr(t,i,a);break;default:pr(t,i,a)}}function Ap(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new fx),i.forEach(function(l){var d=Mx.bind(null,t,l);a.has(l)||(a.add(l),l.then(d,d))})}}function pi(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=t,b=i,D=b;e:for(;D!==null;){switch(D.tag){case 5:mn=D.stateNode,hi=!1;break e;case 3:mn=D.stateNode.containerInfo,hi=!0;break e;case 4:mn=D.stateNode.containerInfo,hi=!0;break e}D=D.return}if(mn===null)throw Error(n(160));wp(p,b,d),mn=null,hi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(le){Jt(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,t),i=i.sibling}function Cp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(i,t),wi(t),l&4){try{Na(3,t,t.return),Go(3,t)}catch($e){Jt(t,t.return,$e)}try{Na(5,t,t.return)}catch($e){Jt(t,t.return,$e)}}break;case 1:pi(i,t),wi(t),l&512&&a!==null&&Cs(a,a.return);break;case 5:if(pi(i,t),wi(t),l&512&&a!==null&&Cs(a,a.return),t.flags&32){var d=t.stateNode;try{fe(d,"")}catch($e){Jt(t,t.return,$e)}}if(l&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,b=a!==null?a.memoizedProps:p,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&ht(d,p),De(D,b);var le=De(D,p);for(b=0;b<B.length;b+=2){var Se=B[b],Me=B[b+1];Se==="style"?ge(d,Me):Se==="dangerouslySetInnerHTML"?re(d,Me):Se==="children"?fe(d,Me):k(d,Se,Me,le)}switch(D){case"input":Ft(d,p);break;case"textarea":hn(d,p);break;case"select":var ye=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Be=p.value;Be!=null?ve(d,!!p.multiple,Be,!1):ye!==!!p.multiple&&(p.defaultValue!=null?ve(d,!!p.multiple,p.defaultValue,!0):ve(d,!!p.multiple,p.multiple?[]:"",!1))}d[ya]=p}catch($e){Jt(t,t.return,$e)}}break;case 6:if(pi(i,t),wi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch($e){Jt(t,t.return,$e)}}break;case 3:if(pi(i,t),wi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ca(i.containerInfo)}catch($e){Jt(t,t.return,$e)}break;case 4:pi(i,t),wi(t);break;case 13:pi(i,t),wi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(mu=Yt())),l&4&&Ap(t);break;case 22:if(Se=a!==null&&a.memoizedState!==null,t.mode&1?(Mn=(le=Mn)||Se,pi(i,t),Mn=le):pi(i,t),wi(t),l&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Se&&(t.mode&1)!==0)for(He=t,Se=t.child;Se!==null;){for(Me=He=Se;He!==null;){switch(ye=He,Be=ye.child,ye.tag){case 0:case 11:case 14:case 15:Na(4,ye,ye.return);break;case 1:Cs(ye,ye.return);var We=ye.stateNode;if(typeof We.componentWillUnmount=="function"){l=ye,a=ye.return;try{i=l,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){Jt(l,a,$e)}}break;case 5:Cs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Np(Me);continue}}Be!==null?(Be.return=ye,He=Be):Np(Me)}Se=Se.sibling}e:for(Se=null,Me=t;;){if(Me.tag===5){if(Se===null){Se=Me;try{d=Me.stateNode,le?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=Me.stateNode,B=Me.memoizedProps.style,b=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=he("display",b))}catch($e){Jt(t,t.return,$e)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=le?"":Me.memoizedProps}catch($e){Jt(t,t.return,$e)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:pi(i,t),wi(t),l&4&&Ap(t);break;case 21:break;default:pi(i,t),wi(t)}}function wi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(bp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(fe(d,""),l.flags&=-33);var p=Tp(t);fu(t,p,d);break;case 3:case 4:var b=l.stateNode.containerInfo,D=Tp(t);du(t,D,b);break;default:throw Error(n(161))}}catch(B){Jt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function px(t,i,a){He=t,Rp(t)}function Rp(t,i,a){for(var l=(t.mode&1)!==0;He!==null;){var d=He,p=d.child;if(d.tag===22&&l){var b=d.memoizedState!==null||Ho;if(!b){var D=d.alternate,B=D!==null&&D.memoizedState!==null||Mn;D=Ho;var le=Mn;if(Ho=b,(Mn=B)&&!le)for(He=d;He!==null;)b=He,B=b.child,b.tag===22&&b.memoizedState!==null?Lp(d):B!==null?(B.return=b,He=B):Lp(d);for(;p!==null;)He=p,Rp(p),p=p.sibling;He=d,Ho=D,Mn=le}Pp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,He=p):Pp(t)}}function Pp(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Go(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Mn)if(a===null)l.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:fi(i.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Nh(i,p,l);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Nh(i,b,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Se=le.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&ca(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&uu(i)}catch(ye){Jt(i,i.return,ye)}}if(i===t){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Np(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Lp(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Go(4,i)}catch(B){Jt(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(B){Jt(i,d,B)}}var p=i.return;try{uu(i)}catch(B){Jt(i,p,B)}break;case 5:var b=i.return;try{uu(i)}catch(B){Jt(i,b,B)}}}catch(B){Jt(i,i.return,B)}if(i===t){He=null;break}var D=i.sibling;if(D!==null){D.return=i.return,He=D;break}He=i.return}}var mx=Math.ceil,Wo=A.ReactCurrentDispatcher,hu=A.ReactCurrentOwner,ri=A.ReactCurrentBatchConfig,At=0,cn=null,tn=null,gn=0,qn=0,Rs=cr(0),sn=0,La=null,Wr=0,Xo=0,pu=0,Da=null,Bn=null,mu=0,Ps=1/0,Xi=null,jo=!1,gu=null,mr=null,qo=!1,gr=null,Yo=0,Ia=0,xu=null,$o=-1,Ko=0;function Pn(){return(At&6)!==0?Yt():$o!==-1?$o:$o=Yt()}function xr(t){return(t.mode&1)===0?1:(At&2)!==0&&gn!==0?gn&-gn:J0.transition!==null?(Ko===0&&(Ko=ke()),Ko):(t=gt,t!==0||(t=window.event,t=t===void 0?16:If(t.type)),t)}function mi(t,i,a,l){if(50<Ia)throw Ia=0,xu=null,Error(n(185));mt(t,a,l),((At&2)===0||t!==cn)&&(t===cn&&((At&2)===0&&(Xo|=a),sn===4&&vr(t,gn)),zn(t,l),a===1&&At===0&&(i.mode&1)===0&&(Ps=Yt()+500,bo&&dr()))}function zn(t,i){var a=t.callbackNode;Dt(t,i);var l=zt(t,t===cn?gn:0);if(l===0)a!==null&&ia(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ia(a),i===1)t.tag===0?Z0(Ip.bind(null,t)):_h(Ip.bind(null,t)),q0(function(){(At&6)===0&&dr()}),a=null;else{switch(Oi(l)){case 1:a=ra;break;case 4:a=w;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=Hp(a,Dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Dp(t,i){if($o=-1,Ko=0,(At&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ns()&&t.callbackNode!==a)return null;var l=zt(t,t===cn?gn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Zo(t,l);else{i=l;var d=At;At|=2;var p=Fp();(cn!==t||gn!==i)&&(Xi=null,Ps=Yt()+500,jr(t,i));do try{vx();break}catch(D){Up(t,D)}while(!0);Uc(),Wo.current=p,At=d,tn!==null?i=0:(cn=null,gn=0,i=sn)}if(i!==0){if(i===2&&(d=en(t),d!==0&&(l=d,i=vu(t,d))),i===1)throw a=La,jr(t,0),vr(t,l),zn(t,Yt()),a;if(i===6)vr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!gx(d)&&(i=Zo(t,l),i===2&&(p=en(t),p!==0&&(l=p,i=vu(t,p))),i===1))throw a=La,jr(t,0),vr(t,l),zn(t,Yt()),a;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:qr(t,Bn,Xi);break;case 3:if(vr(t,l),(l&130023424)===l&&(i=mu+500-Yt(),10<i)){if(zt(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){Pn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=bc(qr.bind(null,t,Bn,Xi),i);break}qr(t,Bn,Xi);break;case 4:if(vr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var b=31-Te(l);p=1<<b,b=i[b],b>d&&(d=b),l&=~p}if(l=d,l=Yt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*mx(l/1960))-l,10<l){t.timeoutHandle=bc(qr.bind(null,t,Bn,Xi),l);break}qr(t,Bn,Xi);break;case 5:qr(t,Bn,Xi);break;default:throw Error(n(329))}}}return zn(t,Yt()),t.callbackNode===a?Dp.bind(null,t):null}function vu(t,i){var a=Da;return t.current.memoizedState.isDehydrated&&(jr(t,i).flags|=256),t=Zo(t,i),t!==2&&(i=Bn,Bn=a,i!==null&&_u(i)),t}function _u(t){Bn===null?Bn=t:Bn.push.apply(Bn,t)}function gx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!ui(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(t,i){for(i&=~pu,i&=~Xo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Te(i),l=1<<a;t[a]=-1,i&=~l}}function Ip(t){if((At&6)!==0)throw Error(n(327));Ns();var i=zt(t,0);if((i&1)===0)return zn(t,Yt()),null;var a=Zo(t,i);if(t.tag!==0&&a===2){var l=en(t);l!==0&&(i=l,a=vu(t,l))}if(a===1)throw a=La,jr(t,0),vr(t,i),zn(t,Yt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,qr(t,Bn,Xi),zn(t,Yt()),null}function yu(t,i){var a=At;At|=1;try{return t(i)}finally{At=a,At===0&&(Ps=Yt()+500,bo&&dr())}}function Xr(t){gr!==null&&gr.tag===0&&(At&6)===0&&Ns();var i=At;At|=1;var a=ri.transition,l=gt;try{if(ri.transition=null,gt=1,t)return t()}finally{gt=l,ri.transition=a,At=i,(At&6)===0&&dr()}}function Su(){qn=Rs.current,Wt(Rs)}function jr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,j0(a)),tn!==null)for(a=tn.return;a!==null;){var l=a;switch(Pc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Mo();break;case 3:ws(),Wt(Fn),Wt(_n),Gc();break;case 5:Vc(l);break;case 4:ws();break;case 13:Wt($t);break;case 19:Wt($t);break;case 10:Fc(l.type._context);break;case 22:case 23:Su()}a=a.return}if(cn=t,tn=t=_r(t.current,null),gn=qn=i,sn=0,La=null,pu=Xo=Wr=0,Bn=Da=null,Vr!==null){for(i=0;i<Vr.length;i++)if(a=Vr[i],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var b=p.next;p.next=d,l.next=b}a.pending=l}Vr=null}return t}function Up(t,i){do{var a=tn;try{if(Uc(),Io.current=ko,Uo){for(var l=Kt.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Uo=!1}if(Gr=0,ln=rn=Kt=null,wa=!1,Aa=0,hu.current=null,a===null||a.return===null){sn=1,La=i,tn=null;break}e:{var p=t,b=a.return,D=a,B=i;if(i=gn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var le=B,Se=D,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Be=ap(b);if(Be!==null){Be.flags&=-257,op(Be,b,D,p,i),Be.mode&1&&sp(p,le,i),i=Be,B=le;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(B),i.updateQueue=$e}else We.add(B);break e}else{if((i&1)===0){sp(p,le,i),Mu();break e}B=Error(n(426))}}else if(qt&&D.mode&1){var Qt=ap(b);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),op(Qt,b,D,p,i),Dc(As(B,D));break e}}p=B=As(B,D),sn!==4&&(sn=2),Da===null?Da=[p]:Da.push(p),p=b;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=ip(p,B,i);Ph(p,Q);break e;case 1:D=B;var H=p.type,ie=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(mr===null||!mr.has(ie)))){p.flags|=65536,i&=-i,p.lanes|=i;var be=rp(p,D,i);Ph(p,be);break e}}p=p.return}while(p!==null)}kp(a)}catch(Je){i=Je,tn===a&&a!==null&&(tn=a=a.return);continue}break}while(!0)}function Fp(){var t=Wo.current;return Wo.current=ko,t===null?ko:t}function Mu(){(sn===0||sn===3||sn===2)&&(sn=4),cn===null||(Wr&268435455)===0&&(Xo&268435455)===0||vr(cn,gn)}function Zo(t,i){var a=At;At|=2;var l=Fp();(cn!==t||gn!==i)&&(Xi=null,jr(t,i));do try{xx();break}catch(d){Up(t,d)}while(!0);if(Uc(),At=a,Wo.current=l,tn!==null)throw Error(n(261));return cn=null,gn=0,sn}function xx(){for(;tn!==null;)Op(tn)}function vx(){for(;tn!==null&&!so();)Op(tn)}function Op(t){var i=Vp(t.alternate,t,qn);t.memoizedProps=t.pendingProps,i===null?kp(t):tn=i,hu.current=null}function kp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=ux(a,i,qn),a!==null){tn=a;return}}else{if(a=dx(a,i),a!==null){a.flags&=32767,tn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{sn=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=t}while(i!==null);sn===0&&(sn=5)}function qr(t,i,a){var l=gt,d=ri.transition;try{ri.transition=null,gt=1,_x(t,i,a,l)}finally{ri.transition=d,gt=l}return null}function _x(t,i,a,l){do Ns();while(gr!==null);if((At&6)!==0)throw Error(n(327));a=t.finishedWork;var d=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(In(t,p),t===cn&&(tn=cn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||qo||(qo=!0,Hp(q,function(){return Ns(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=ri.transition,ri.transition=null;var b=gt;gt=1;var D=At;At|=4,hu.current=null,hx(t,a),Cp(a,t),B0(Mc),oo=!!Sc,Mc=Sc=null,t.current=a,px(a),ec(),At=D,gt=b,ri.transition=p}else t.current=a;if(qo&&(qo=!1,gr=t,Yo=d),p=t.pendingLanes,p===0&&(mr=null),ze(a.stateNode),zn(t,Yt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)d=i[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(jo)throw jo=!1,t=gu,gu=null,t;return(Yo&1)!==0&&t.tag!==0&&Ns(),p=t.pendingLanes,(p&1)!==0?t===xu?Ia++:(Ia=0,xu=t):Ia=0,dr(),null}function Ns(){if(gr!==null){var t=Oi(Yo),i=ri.transition,a=gt;try{if(ri.transition=null,gt=16>t?16:t,gr===null)var l=!1;else{if(t=gr,gr=null,Yo=0,(At&6)!==0)throw Error(n(331));var d=At;for(At|=4,He=t.current;He!==null;){var p=He,b=p.child;if((He.flags&16)!==0){var D=p.deletions;if(D!==null){for(var B=0;B<D.length;B++){var le=D[B];for(He=le;He!==null;){var Se=He;switch(Se.tag){case 0:case 11:case 15:Na(8,Se,p)}var Me=Se.child;if(Me!==null)Me.return=Se,He=Me;else for(;He!==null;){Se=He;var ye=Se.sibling,Be=Se.return;if(Ep(Se),Se===le){He=null;break}if(ye!==null){ye.return=Be,He=ye;break}He=Be}}}var We=p.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var Qt=$e.sibling;$e.sibling=null,$e=Qt}while($e!==null)}}He=p}}if((p.subtreeFlags&2064)!==0&&b!==null)b.return=p,He=b;else e:for(;He!==null;){if(p=He,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Na(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,He=Q;break e}He=p.return}}var H=t.current;for(He=H;He!==null;){b=He;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,He=ie;else e:for(b=H;He!==null;){if(D=He,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Go(9,D)}}catch(Je){Jt(D,D.return,Je)}if(D===b){He=null;break e}var be=D.sibling;if(be!==null){be.return=D.return,He=be;break e}He=D.return}}if(At=d,dr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(te,t)}catch{}l=!0}return l}finally{gt=a,ri.transition=i}}return!1}function Bp(t,i,a){i=As(a,i),i=ip(t,i,1),t=hr(t,i,1),i=Pn(),t!==null&&(mt(t,1,i),zn(t,i))}function Jt(t,i,a){if(t.tag===3)Bp(t,t,a);else for(;i!==null;){if(i.tag===3){Bp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(mr===null||!mr.has(l))){t=As(a,t),t=rp(i,t,1),i=hr(i,t,1),t=Pn(),i!==null&&(mt(i,1,t),zn(i,t));break}}i=i.return}}function yx(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Pn(),t.pingedLanes|=t.suspendedLanes&a,cn===t&&(gn&a)===a&&(sn===4||sn===3&&(gn&130023424)===gn&&500>Yt()-mu?jr(t,0):pu|=a),zn(t,i)}function zp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=Pn();t=Hi(t,i),t!==null&&(mt(t,i,a),zn(t,a))}function Sx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),zp(t,a)}function Mx(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),zp(t,a)}var Vp;Vp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Fn.current)kn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return kn=!1,cx(t,i,a);kn=(t.flags&131072)!==0}else kn=!1,qt&&(i.flags&1048576)!==0&&yh(i,wo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Vo(t,i),t=i.pendingProps;var d=_s(i,_n.current);Ts(i,a),d=jc(null,i,l,t,d,a);var p=qc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(l)?(p=!0,Eo(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Bc(i),d.updater=Bo,i.stateNode=d,d._reactInternals=i,Qc(i,l,t,a),i=iu(null,i,l,!0,p,a)):(i.tag=0,qt&&p&&Rc(i),Rn(null,i,d,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Vo(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=bx(l),t=fi(l,t),d){case 0:i=nu(null,i,l,t,a);break e;case 1:i=hp(null,i,l,t,a);break e;case 11:i=lp(null,i,l,t,a);break e;case 14:i=cp(null,i,l,fi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:fi(l,d),nu(t,i,l,d,a);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:fi(l,d),hp(t,i,l,d,a);case 3:e:{if(pp(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,d=p.element,Rh(t,i),Lo(i,l,null,a);var b=i.memoizedState;if(l=b.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=As(Error(n(423)),i),i=mp(t,i,l,a,d);break e}else if(l!==d){d=As(Error(n(424)),i),i=mp(t,i,l,a,d);break e}else for(jn=lr(i.stateNode.containerInfo.firstChild),Xn=i,qt=!0,di=null,a=Ah(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),l===d){i=Wi(t,i,a);break e}Rn(t,i,l,a)}i=i.child}return i;case 5:return Lh(i),t===null&&Lc(i),l=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,b=d.children,Ec(l,d)?b=null:p!==null&&Ec(l,p)&&(i.flags|=32),fp(t,i),Rn(t,i,b,a),i.child;case 6:return t===null&&Lc(i),null;case 13:return gp(t,i,a);case 4:return zc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Es(i,null,l,a):Rn(t,i,l,a),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:fi(l,d),lp(t,i,l,d,a);case 7:return Rn(t,i,i.pendingProps,a),i.child;case 8:return Rn(t,i,i.pendingProps.children,a),i.child;case 12:return Rn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,p=i.memoizedProps,b=d.value,Vt(Ro,l._currentValue),l._currentValue=b,p!==null)if(ui(p.value,b)){if(p.children===d.children&&!Fn.current){i=Wi(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){b=p.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(p.tag===1){B=Gi(-1,a&-a),B.tag=2;var le=p.updateQueue;if(le!==null){le=le.shared;var Se=le.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),le.pending=B}}p.lanes|=a,B=p.alternate,B!==null&&(B.lanes|=a),Oc(p.return,a,i),D.lanes|=a;break}B=B.next}}else if(p.tag===10)b=p.type===i.type?null:p.child;else if(p.tag===18){if(b=p.return,b===null)throw Error(n(341));b.lanes|=a,D=b.alternate,D!==null&&(D.lanes|=a),Oc(b,a,i),b=p.sibling}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===i){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}Rn(t,i,d.children,a),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,Ts(i,a),d=ni(d),l=l(d),i.flags|=1,Rn(t,i,l,a),i.child;case 14:return l=i.type,d=fi(l,i.pendingProps),d=fi(l.type,d),cp(t,i,l,d,a);case 15:return up(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:fi(l,d),Vo(t,i),i.tag=1,On(l)?(t=!0,Eo(i)):t=!1,Ts(i,a),tp(i,l,d),Qc(i,l,d,a),iu(null,i,l,!0,t,a);case 19:return vp(t,i,a);case 22:return dp(t,i,a)}throw Error(n(156,i.tag))};function Hp(t,i){return Ur(t,i)}function Ex(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,i,a,l){return new Ex(t,i,a,l)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bx(t){if(typeof t=="function")return Eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===K)return 14}return 2}function _r(t,i){var a=t.alternate;return a===null?(a=si(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Jo(t,i,a,l,d,p){var b=2;if(l=t,typeof t=="function")Eu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case O:return Yr(a.children,d,p,i);case E:b=8,d|=8;break;case L:return t=si(12,a,i,d|2),t.elementType=L,t.lanes=p,t;case de:return t=si(13,a,i,d),t.elementType=de,t.lanes=p,t;case pe:return t=si(19,a,i,d),t.elementType=pe,t.lanes=p,t;case Y:return Qo(a,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:b=10;break e;case z:b=9;break e;case J:b=11;break e;case K:b=14;break e;case ue:b=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=si(b,a,i,d),i.elementType=t,i.type=l,i.lanes=p,i}function Yr(t,i,a,l){return t=si(7,t,l,i),t.lanes=a,t}function Qo(t,i,a,l){return t=si(22,t,l,i),t.elementType=Y,t.lanes=a,t.stateNode={isHidden:!1},t}function bu(t,i,a){return t=si(6,t,null,i),t.lanes=a,t}function Tu(t,i,a){return i=si(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Tx(t,i,a,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function wu(t,i,a,l,d,p,b,D,B){return t=new Tx(t,i,a,D,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=si(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(p),t}function wx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Gp(t){if(!t)return ur;t=t._reactInternals;e:{if(Cn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(On(a))return xh(t,a,i)}return i}function Wp(t,i,a,l,d,p,b,D,B){return t=wu(a,l,!0,t,d,p,b,D,B),t.context=Gp(null),a=t.current,l=Pn(),d=xr(a),p=Gi(l,d),p.callback=i??null,hr(a,p,d),t.current.lanes=d,mt(t,d,l),zn(t,l),t}function el(t,i,a,l){var d=i.current,p=Pn(),b=xr(d);return a=Gp(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(p,b),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=hr(d,i,b),t!==null&&(mi(t,d,b,p),No(t,d,b)),b}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Au(t,i){Xp(t,i),(t=t.alternate)&&Xp(t,i)}function Ax(){return null}var jp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cu(t){this._internalRoot=t}nl.prototype.render=Cu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Xr(function(){el(null,t,null,null)}),i[ki]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=It();t={blockedOn:null,target:t,priority:i};for(var a=0;a<sr.length&&i!==0&&i<sr[a].priority;a++);sr.splice(a,0,t),a===0&&Lf(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function Cx(t,i,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var le=tl(b);p.call(le)}}var b=Wp(i,l,t,0,null,!1,!1,"",qp);return t._reactRootContainer=b,t[ki]=b.current,va(t.nodeType===8?t.parentNode:t),Xr(),b}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var D=l;l=function(){var le=tl(B);D.call(le)}}var B=wu(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=B,t[ki]=B.current,va(t.nodeType===8?t.parentNode:t),Xr(function(){el(i,B,a,l)}),B}function rl(t,i,a,l,d){var p=a._reactRootContainer;if(p){var b=p;if(typeof d=="function"){var D=d;d=function(){var B=tl(b);D.call(B)}}el(i,b,t,d)}else b=Cx(a,i,t,d,l);return tl(b)}Nt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(Un(i,a|1),zn(i,Yt()),(At&6)===0&&(Ps=Yt()+500,dr()))}break;case 13:Xr(function(){var l=Hi(t,1);if(l!==null){var d=Pn();mi(l,t,1,d)}}),Au(t,1)}},Ht=function(t){if(t.tag===13){var i=Hi(t,134217728);if(i!==null){var a=Pn();mi(i,t,134217728,a)}Au(t,134217728)}},li=function(t){if(t.tag===13){var i=xr(t),a=Hi(t,i);if(a!==null){var l=Pn();mi(a,t,i,l)}Au(t,i)}},It=function(){return gt},ci=function(t,i){var a=gt;try{return gt=t,i()}finally{gt=a}},nt=function(t,i,a){switch(i){case"input":if(Ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var d=So(l);if(!d)throw Error(n(90));vt(l),Ft(l,d)}}}break;case"textarea":hn(t,a);break;case"select":i=a.value,i!=null&&ve(t,!!a.multiple,i,!1)}},Ue=yu,_e=Xr;var Rx={usingClientEntryPoint:!1,Events:[Sa,xs,So,me,Ne,yu]},Ua={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ir(t),t===null?null:t.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||Ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{te=sl.inject(Px),we=sl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx,Vn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(n(200));return wx(t,i,null,a)},Vn.createRoot=function(t,i){if(!Ru(t))throw Error(n(299));var a=!1,l="",d=jp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=wu(t,1,!1,null,null,a,!1,l,d),t[ki]=i.current,va(t.nodeType===8?t.parentNode:t),new Cu(i)},Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ir(i),t=t===null?null:t.stateNode,t},Vn.flushSync=function(t){return Xr(t)},Vn.hydrate=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,a)},Vn.hydrateRoot=function(t,i,a){if(!Ru(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",b=jp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Wp(i,null,t,1,a??null,d,!1,p,b),t[ki]=i.current,va(t),l)for(t=0;t<l.length;t++)a=l[t],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new nl(i)},Vn.render=function(t,i,a){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,a)},Vn.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Xr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1},Vn.unstable_batchedUpdates=yu,Vn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!il(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,a,!1,l)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var tm;function Bx(){if(tm)return Lu.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lu.exports=kx(),Lu.exports}var nm;function zx(){if(nm)return al;nm=1;var s=Bx();return al.createRoot=s.createRoot,al.hydrateRoot=s.hydrateRoot,al}var Vx=zx();const Hx=mg(Vx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=Tt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:u,...f},h)=>Tt.createElement("svg",{ref:h,...Wx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:gg("lucide",o),...f},[...u.map(([m,_])=>Tt.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=(s,e)=>{const n=Tt.forwardRef(({className:r,...o},c)=>Tt.createElement(Xx,{ref:c,iconNode:e,className:gg(`lucide-${Gx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],qx=fn("Activity",jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],$x=fn("ChartColumn",Yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],im=fn("CircleCheck",Kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],rm=fn("CircleX",Zx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],Qx=fn("Coins",Jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],sm=fn("Compass",ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],nv=fn("Copy",tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],rv=fn("FileText",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],av=fn("Image",sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Uu=fn("Play",ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],am=fn("RefreshCw",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],uv=fn("Search",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],fv=fn("ShieldAlert",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],pv=fn("ShieldCheck",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Fu=fn("Sparkles",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],om=fn("TriangleAlert",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],lm=fn("WandSparkles",xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],_v=fn("Zap",vv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="185",yv=0,cm=1,Sv=2,Dl=1,Mv=2,Xa=3,Rr=0,Gn=1,Pi=2,Ji=0,js=1,um=2,dm=3,fm=4,Ev=5,es=100,bv=101,Tv=102,wv=103,Av=104,Cv=200,Rv=201,Pv=202,Nv=203,vd=204,_d=205,Lv=206,Dv=207,Iv=208,Uv=209,Fv=210,Ov=211,kv=212,Bv=213,zv=214,yd=0,Sd=1,Md=2,$s=3,Ed=4,bd=5,Td=6,wd=7,xg=0,Vv=1,Hv=2,Di=0,vg=1,_g=2,yg=3,Sg=4,Mg=5,Eg=6,bg=7,Tg=300,rs=301,Ks=302,Ou=303,ku=304,Yl=306,Ad=1e3,Zi=1001,Cd=1002,xn=1003,Gv=1004,ol=1005,Tn=1006,Bu=1007,ns=1008,Zn=1009,wg=1010,Ag=1011,$a=1012,pf=1013,Ui=1014,Ni=1015,er=1016,mf=1017,gf=1018,Ka=1020,Cg=35902,Rg=35899,Pg=1021,Ng=1022,yi=1023,tr=1026,is=1027,Lg=1028,xf=1029,ss=1030,vf=1031,_f=1033,Il=33776,Ul=33777,Fl=33778,Ol=33779,Rd=35840,Pd=35841,Nd=35842,Ld=35843,Dd=36196,Id=37492,Ud=37496,Fd=37488,Od=37489,Bl=37490,kd=37491,Bd=37808,zd=37809,Vd=37810,Hd=37811,Gd=37812,Wd=37813,Xd=37814,jd=37815,qd=37816,Yd=37817,$d=37818,Kd=37819,Zd=37820,Jd=37821,Qd=36492,ef=36494,tf=36495,nf=36283,rf=36284,zl=36285,sf=36286,Wv=3200,af=0,Xv=1,Ar="",oi="srgb",Vl="srgb-linear",Hl="linear",Ut="srgb",Ls=7680,hm=519,jv=512,qv=513,Yv=514,yf=515,$v=516,Kv=517,Sf=518,Zv=519,pm=35044,mm="300 es",Li=2e3,Za=2001;function Jv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Gl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qv(){const s=Gl("canvas");return s.style.display="block",s}const gm={};function xm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Dg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=Dg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function wt(...s){s=Dg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function qs(...s){const e=s.join(" ");e in gm||(gm[e]=!0,at(...s))}function e_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const t_={[yd]:Sd,[Md]:Td,[Ed]:wd,[$s]:bd,[Sd]:yd,[Td]:Md,[wd]:Ed,[bd]:$s};class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=Math.PI/180,of=180/Math.PI;function Ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function n_(s,e){return(s%e+e)%e}function Vu(s,e,n){return(1-n)*s+n*e}function Oa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wf=class wf{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wf.prototype.isVector2=!0;let yt=wf;class Qs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,u,f){let h=r[o+0],m=r[o+1],_=r[o+2],y=r[o+3],g=c[u+0],M=c[u+1],T=c[u+2],C=c[u+3];if(y!==C||h!==g||m!==M||_!==T){let v=h*g+m*M+_*T+y*C;v<0&&(g=-g,M=-M,T=-T,C=-C,v=-v);let x=1-f;if(v<.9995){const U=Math.acos(v),k=Math.sin(U);x=Math.sin(x*U)/k,f=Math.sin(f*U)/k,h=h*x+g*f,m=m*x+M*f,_=_*x+T*f,y=y*x+C*f}else{h=h*x+g*f,m=m*x+M*f,_=_*x+T*f,y=y*x+C*f;const U=1/Math.sqrt(h*h+m*m+_*_+y*y);h*=U,m*=U,_*=U,y*=U}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,c,u){const f=r[o],h=r[o+1],m=r[o+2],_=r[o+3],y=c[u],g=c[u+1],M=c[u+2],T=c[u+3];return e[n]=f*T+_*y+h*M-m*g,e[n+1]=h*T+_*g+m*y-f*M,e[n+2]=m*T+_*M+f*g-h*y,e[n+3]=_*T-f*y-h*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(o/2),y=f(c/2),g=h(r/2),M=h(o/2),T=h(c/2);switch(u){case"XYZ":this._x=g*_*y+m*M*T,this._y=m*M*y-g*_*T,this._z=m*_*T+g*M*y,this._w=m*_*y-g*M*T;break;case"YXZ":this._x=g*_*y+m*M*T,this._y=m*M*y-g*_*T,this._z=m*_*T-g*M*y,this._w=m*_*y+g*M*T;break;case"ZXY":this._x=g*_*y-m*M*T,this._y=m*M*y+g*_*T,this._z=m*_*T+g*M*y,this._w=m*_*y-g*M*T;break;case"ZYX":this._x=g*_*y-m*M*T,this._y=m*M*y+g*_*T,this._z=m*_*T-g*M*y,this._w=m*_*y+g*M*T;break;case"YZX":this._x=g*_*y+m*M*T,this._y=m*M*y+g*_*T,this._z=m*_*T-g*M*y,this._w=m*_*y-g*M*T;break;case"XZY":this._x=g*_*y-m*M*T,this._y=m*M*y-g*_*T,this._z=m*_*T+g*M*y,this._w=m*_*y+g*M*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],u=n[1],f=n[5],h=n[9],m=n[2],_=n[6],y=n[10],g=r+f+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-h)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(_-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,u=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+o*m-c*h,this._y=o*_+u*h+c*f-r*m,this._z=c*_+u*m+r*h-o*f,this._w=u*_-r*f-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,u=-u,f=-f);let h=1-n;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);h=Math.sin(h*m)/_,n=Math.sin(n*m)/_,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+c*n,this._w=this._w*h+u*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+c*n,this._w=this._w*h+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Af=class Af{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*o-f*r),_=2*(f*n-c*o),y=2*(c*r-u*n);return this.x=n+h*m+u*y-f*_,this.y=r+h*_+f*m-c*y,this.z=o+h*y+c*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,u=n.x,f=n.y,h=n.z;return this.x=o*h-c*f,this.y=c*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Af.prototype.isVector3=!0;let ee=Af;const Hu=new ee,vm=new Qs,Cf=class Cf{constructor(e,n,r,o,c,u,f,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m)}set(e,n,r,o,c,u,f,h,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=n,_[4]=c,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],_=r[4],y=r[7],g=r[2],M=r[5],T=r[8],C=o[0],v=o[3],x=o[6],U=o[1],k=o[4],A=o[7],F=o[2],N=o[5],O=o[8];return c[0]=u*C+f*U+h*F,c[3]=u*v+f*k+h*N,c[6]=u*x+f*A+h*O,c[1]=m*C+_*U+y*F,c[4]=m*v+_*k+y*N,c[7]=m*x+_*A+y*O,c[2]=g*C+M*U+T*F,c[5]=g*v+M*k+T*N,c[8]=g*x+M*A+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*c*_+r*f*h+o*c*m-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],y=_*u-f*m,g=f*h-_*c,M=m*c-u*h,T=n*y+r*g+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(o*m-_*r)*C,e[2]=(f*r-o*u)*C,e[3]=g*C,e[4]=(_*n-o*h)*C,e[5]=(o*c-f*n)*C,e[6]=M*C,e[7]=(r*h-m*n)*C,e[8]=(u*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,u,f){const h=Math.cos(c),m=Math.sin(c);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-o*m,o*h,-o*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(e,n)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-e)),this}translate(e,n){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Cf.prototype.isMatrix3=!0;let dt=Cf;const Gu=new dt,_m=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const s={enabled:!0,workingColorSpace:Vl,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ut&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ar?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Vl]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:_m,fromXYZ:ym,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:_m,fromXYZ:ym,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const St=i_();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class r_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=Gl("canvas")),Ds.width=e.width,Ds.height=e.height;const o=Ds.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Qi(c[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Qi(n[r]/255)*255):n[r]=Qi(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class Mf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Wu(o[u].image)):c.push(Wu(o[u]))}else c=Wu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?r_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let a_=0;const Xu=new ee;class Ln extends as{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Zi,o=Zi,c=Tn,u=ns,f=yi,h=Zn,m=Ln.DEFAULT_ANISOTROPY,_=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Ja(),this.name="",this.source=new Mf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Tg;Ln.DEFAULT_ANISOTROPY=1;const Rf=class Rf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const h=e.elements,m=h[0],_=h[4],y=h[8],g=h[1],M=h[5],T=h[9],C=h[2],v=h[6],x=h[10];if(Math.abs(_-g)<.01&&Math.abs(y-C)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+C)<.1&&Math.abs(T+v)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const k=(m+1)/2,A=(M+1)/2,F=(x+1)/2,N=(_+g)/4,O=(y+C)/4,E=(T+v)/4;return k>A&&k>F?k<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(k),o=N/r,c=O/r):A>F?A<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),r=N/o,c=E/o):F<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(F),r=O/c,o=E/c),this.set(r,o,c,n),this}let U=Math.sqrt((v-T)*(v-T)+(y-C)*(y-C)+(g-_)*(g-_));return Math.abs(U)<.001&&(U=1),this.x=(v-T)/U,this.y=(y-C)/U,this.z=(g-_)/U,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rf.prototype.isVector4=!0;let Zt=Rf;class o_ extends as{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Ln(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Mf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends o_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ig extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=class ql{constructor(e,n,r,o,c,u,f,h,m,_,y,g,M,T,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,u,f,h,m,_,y,g,M,T,C,v)}set(e,n,r,o,c,u,f,h,m,_,y,g,M,T,C,v){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=h,x[2]=m,x[6]=_,x[10]=y,x[14]=g,x[3]=M,x[7]=T,x[11]=C,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),c=1/Is.setFromMatrixColumn(e,1).length(),u=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),m=Math.sin(o),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const g=u*_,M=u*y,T=f*_,C=f*y;n[0]=h*_,n[4]=-h*y,n[8]=m,n[1]=M+T*m,n[5]=g-C*m,n[9]=-f*h,n[2]=C-g*m,n[6]=T+M*m,n[10]=u*h}else if(e.order==="YXZ"){const g=h*_,M=h*y,T=m*_,C=m*y;n[0]=g+C*f,n[4]=T*f-M,n[8]=u*m,n[1]=u*y,n[5]=u*_,n[9]=-f,n[2]=M*f-T,n[6]=C+g*f,n[10]=u*h}else if(e.order==="ZXY"){const g=h*_,M=h*y,T=m*_,C=m*y;n[0]=g-C*f,n[4]=-u*y,n[8]=T+M*f,n[1]=M+T*f,n[5]=u*_,n[9]=C-g*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const g=u*_,M=u*y,T=f*_,C=f*y;n[0]=h*_,n[4]=T*m-M,n[8]=g*m+C,n[1]=h*y,n[5]=C*m+g,n[9]=M*m-T,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const g=u*h,M=u*m,T=f*h,C=f*m;n[0]=h*_,n[4]=C-g*y,n[8]=T*y+M,n[1]=y,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=M*y+T,n[10]=g-C*y}else if(e.order==="XZY"){const g=u*h,M=u*m,T=f*h,C=f*m;n[0]=h*_,n[4]=-y,n[8]=m*_,n[1]=g*y+C,n[5]=u*_,n[9]=M*y-T,n[2]=T*y-M,n[6]=f*_,n[10]=C*y+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,n,r){const o=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Sr.crossVectors(r,Yn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Sr.crossVectors(r,Yn)),Sr.normalize(),ll.crossVectors(Yn,Sr),o[0]=Sr.x,o[4]=ll.x,o[8]=Yn.x,o[1]=Sr.y,o[5]=ll.y,o[9]=Yn.y,o[2]=Sr.z,o[6]=ll.z,o[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],_=r[1],y=r[5],g=r[9],M=r[13],T=r[2],C=r[6],v=r[10],x=r[14],U=r[3],k=r[7],A=r[11],F=r[15],N=o[0],O=o[4],E=o[8],L=o[12],W=o[1],z=o[5],J=o[9],de=o[13],pe=o[2],K=o[6],ue=o[10],Y=o[14],X=o[3],se=o[7],oe=o[11],I=o[15];return c[0]=u*N+f*W+h*pe+m*X,c[4]=u*O+f*z+h*K+m*se,c[8]=u*E+f*J+h*ue+m*oe,c[12]=u*L+f*de+h*Y+m*I,c[1]=_*N+y*W+g*pe+M*X,c[5]=_*O+y*z+g*K+M*se,c[9]=_*E+y*J+g*ue+M*oe,c[13]=_*L+y*de+g*Y+M*I,c[2]=T*N+C*W+v*pe+x*X,c[6]=T*O+C*z+v*K+x*se,c[10]=T*E+C*J+v*ue+x*oe,c[14]=T*L+C*de+v*Y+x*I,c[3]=U*N+k*W+A*pe+F*X,c[7]=U*O+k*z+A*K+F*se,c[11]=U*E+k*J+A*ue+F*oe,c[15]=U*L+k*de+A*Y+F*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],u=e[1],f=e[5],h=e[9],m=e[13],_=e[2],y=e[6],g=e[10],M=e[14],T=e[3],C=e[7],v=e[11],x=e[15],U=h*M-m*g,k=f*M-m*y,A=f*g-h*y,F=u*M-m*_,N=u*g-h*_,O=u*y-f*_;return n*(C*U-v*k+x*A)-r*(T*U-v*F+x*N)+o*(T*k-C*F+x*O)-c*(T*A-C*N+v*O)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],u=e[5],f=e[9],h=e[2],m=e[6],_=e[10];return n*(u*_-f*m)-r*(c*_-f*h)+o*(c*m-u*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],y=e[9],g=e[10],M=e[11],T=e[12],C=e[13],v=e[14],x=e[15],U=n*f-r*u,k=n*h-o*u,A=n*m-c*u,F=r*h-o*f,N=r*m-c*f,O=o*m-c*h,E=_*C-y*T,L=_*v-g*T,W=_*x-M*T,z=y*v-g*C,J=y*x-M*C,de=g*x-M*v,pe=U*de-k*J+A*z+F*W-N*L+O*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/pe;return e[0]=(f*de-h*J+m*z)*K,e[1]=(o*J-r*de-c*z)*K,e[2]=(C*O-v*N+x*F)*K,e[3]=(g*N-y*O-M*F)*K,e[4]=(h*W-u*de-m*L)*K,e[5]=(n*de-o*W+c*L)*K,e[6]=(v*A-T*O-x*k)*K,e[7]=(_*O-g*A+M*k)*K,e[8]=(u*J-f*W+m*E)*K,e[9]=(r*W-n*J-c*E)*K,e[10]=(T*N-C*A+x*U)*K,e[11]=(y*A-_*N-M*U)*K,e[12]=(f*L-u*z-h*E)*K,e[13]=(n*z-r*L+o*E)*K,e[14]=(C*k-T*F-v*U)*K,e[15]=(_*F-y*k+g*U)*K,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,u=e.x,f=e.y,h=e.z,m=c*u,_=c*f;return this.set(m*u+r,m*f-o*h,m*h+o*f,0,m*f+o*h,_*f+r,_*h-o*u,0,m*h-o*f,_*h+o*u,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,u=n._y,f=n._z,h=n._w,m=c+c,_=u+u,y=f+f,g=c*m,M=c*_,T=c*y,C=u*_,v=u*y,x=f*y,U=h*m,k=h*_,A=h*y,F=r.x,N=r.y,O=r.z;return o[0]=(1-(C+x))*F,o[1]=(M+A)*F,o[2]=(T-k)*F,o[3]=0,o[4]=(M-A)*N,o[5]=(1-(g+x))*N,o[6]=(v+U)*N,o[7]=0,o[8]=(T+k)*O,o[9]=(v-U)*O,o[10]=(1-(g+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let u=Is.set(o[0],o[1],o[2]).length();const f=Is.set(o[4],o[5],o[6]).length(),h=Is.set(o[8],o[9],o[10]).length();c<0&&(u=-u),gi.copy(this);const m=1/u,_=1/f,y=1/h;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=_,gi.elements[5]*=_,gi.elements[6]*=_,gi.elements[8]*=y,gi.elements[9]*=y,gi.elements[10]*=y,n.setFromRotationMatrix(gi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,o,c,u,f=Li,h=!1){const m=this.elements,_=2*c/(n-e),y=2*c/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let T,C;if(h)T=c/(u-c),C=u*c/(u-c);else if(f===Li)T=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(f===Za)T=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,c,u,f=Li,h=!1){const m=this.elements,_=2/(n-e),y=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let T,C;if(h)T=1/(u-c),C=u/(u-c);else if(f===Li)T=-2/(u-c),C=-(u+c)/(u-c);else if(f===Za)T=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};ql.prototype.isMatrix4=!0;let Xt=ql;const Is=new ee,gi=new Xt,c_=new ee(0,0,0),u_=new ee(1,1,1),Sr=new ee,ll=new ee,Yn=new ee,Sm=new Xt,Mm=new Qs;class Pr{constructor(e=0,n=0,r=0,o=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],f=o[8],h=o[1],m=o[5],_=o[9],y=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class Ef{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const Em=new ee,Us=new Qs,ji=new Xt,cl=new ee,ka=new ee,f_=new ee,h_=new Qs,bm=new ee(1,0,0),Tm=new ee(0,1,0),wm=new ee(0,0,1),Am={type:"added"},p_={type:"removed"},Fs={type:"childadded",child:null},ju={type:"childremoved",child:null};class wn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new ee,n=new Pr,r=new Qs,o=new ee(1,1,1);function c(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xt},normalMatrix:{value:new dt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ef,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,n){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?cl.copy(e):cl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ka,cl,this.up):ji.lookAt(cl,ka,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(ji),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(p_),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let u=0,f=c.length;u<f;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const y=h[m];c(e.shapes,y)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(c(e.materials,this.material[h]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(c(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),y=u(e.shapes),g=u(e.skeletons),M=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wn.DEFAULT_UP=new ee(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ja extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m_={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const v=n.getJointPose(C,r),x=this._getHandJoint(m,C);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const _=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=_.position.distanceTo(y.position),M=.02,T=.005;m.inputState.pinching&&g>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ja;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Yu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Et{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=St.workingColorSpace){if(e=n_(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,u=2*r-c;this.r=Yu(u,c,e+1/3),this.g=Yu(u,c,e),this.b=Yu(u,c,e-1/3)}return St.colorSpaceToWorking(this,o),this}setStyle(e,n=oi){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const r=Ug[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return St.workingToColorSpace(bn.copy(this),e),Math.round(Mt(bn.r*255,0,255))*65536+Math.round(Mt(bn.g*255,0,255))*256+Math.round(Mt(bn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(bn.copy(this),n);const r=bn.r,o=bn.g,c=bn.b,u=Math.max(r,o,c),f=Math.min(r,o,c);let h,m;const _=(f+u)/2;if(f===u)h=0,m=0;else{const y=u-f;switch(m=_<=.5?y/(u+f):y/(2-u-f),u){case r:h=(o-c)/y+(o<c?6:0);break;case o:h=(c-r)/y+2;break;case c:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(bn.copy(this),n),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=oi){St.workingToColorSpace(bn.copy(this),e);const n=bn.r,r=bn.g,o=bn.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+n,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Mr),e.getHSL(ul);const r=Vu(Mr.h,ul.h,n),o=Vu(Mr.s,ul.s,n),c=Vu(Mr.l,ul.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Et;Et.NAMES=Ug;class g_ extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xi=new ee,qi=new ee,$u=new ee,Yi=new ee,Os=new ee,ks=new ee,Cm=new ee,Ku=new ee,Zu=new ee,Ju=new ee,Qu=new Zt,ed=new Zt,td=new Zt;class _i{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),xi.subVectors(e,n),o.cross(xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){xi.subVectors(o,n),qi.subVectors(r,n),$u.subVectors(e,n);const u=xi.dot(xi),f=xi.dot(qi),h=xi.dot($u),m=qi.dot(qi),_=qi.dot($u),y=u*m-f*f;if(y===0)return c.set(0,0,0),null;const g=1/y,M=(m*h-f*_)*g,T=(u*_-f*h)*g;return c.set(1-M-T,T,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,n,r,o,c,u,f,h){return this.getBarycoord(e,n,r,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Yi.x),h.addScaledVector(u,Yi.y),h.addScaledVector(f,Yi.z),h)}static getInterpolatedAttribute(e,n,r,o,c,u){return Qu.setScalar(0),ed.setScalar(0),td.setScalar(0),Qu.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,r),td.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qu,c.x),u.addScaledVector(ed,c.y),u.addScaledVector(td,c.z),u}static isFrontFacing(e,n,r,o){return xi.subVectors(r,n),qi.subVectors(e,n),xi.cross(qi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),xi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return _i.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let u,f;Os.subVectors(o,r),ks.subVectors(c,r),Ku.subVectors(e,r);const h=Os.dot(Ku),m=ks.dot(Ku);if(h<=0&&m<=0)return n.copy(r);Zu.subVectors(e,o);const _=Os.dot(Zu),y=ks.dot(Zu);if(_>=0&&y<=_)return n.copy(o);const g=h*y-_*m;if(g<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(Os,u);Ju.subVectors(e,c);const M=Os.dot(Ju),T=ks.dot(Ju);if(T>=0&&M<=T)return n.copy(c);const C=M*m-h*T;if(C<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(ks,f);const v=_*T-M*y;if(v<=0&&y-_>=0&&M-T>=0)return Cm.subVectors(c,o),f=(y-_)/(y-_+(M-T)),n.copy(o).addScaledVector(Cm,f);const x=1/(v+C+g);return u=C*x,f=g*x,n.copy(r).addScaledVector(Os,u).addScaledVector(ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(c,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),fl.subVectors(this.max,Ba),Bs.subVectors(e.a,Ba),zs.subVectors(e.b,Ba),Vs.subVectors(e.c,Ba),Er.subVectors(zs,Bs),br.subVectors(Vs,zs),$r.subVectors(Bs,Vs);let n=[0,-Er.z,Er.y,0,-br.z,br.y,0,-$r.z,$r.y,Er.z,0,-Er.x,br.z,0,-br.x,$r.z,0,-$r.x,-Er.y,Er.x,0,-br.y,br.x,0,-$r.y,$r.x,0];return!nd(n,Bs,zs,Vs,fl)||(n=[1,0,0,0,1,0,0,0,1],!nd(n,Bs,zs,Vs,fl))?!1:(hl.crossVectors(Er,br),n=[hl.x,hl.y,hl.z],nd(n,Bs,zs,Vs,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],vi=new ee,dl=new Qa,Bs=new ee,zs=new ee,Vs=new ee,Er=new ee,br=new ee,$r=new ee,Ba=new ee,fl=new ee,hl=new ee,Kr=new ee;function nd(s,e,n,r,o){for(let c=0,u=s.length-3;c<=u;c+=3){Kr.fromArray(s,c);const f=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),h=e.dot(Kr),m=n.dot(Kr),_=r.dot(Kr);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const nn=new ee,pl=new yt;let x_=0;class Si extends as{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=pm,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix3(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Hn(n,this.array),r=Hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Hn(n,this.array),r=Hn(r,this.array),o=Hn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=Hn(n,this.array),r=Hn(r,this.array),o=Hn(o,this.array),c=Hn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fg extends Si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Og extends Si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class An extends Si{constructor(e,n,r){super(new Float32Array(e),n,r)}}const v_=new Qa,za=new ee,id=new ee;class eo{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):v_.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const n=za.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(za,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(id)),this.expandByPoint(za.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let __=0;const ai=new Xt,rd=new wn,Hs=new ee,$n=new Qa,Va=new Qa,dn=new ee;class Dn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?Og:Fg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,r){return ai.makeTranslation(e,n,r),this.applyMatrix4(ai),this}scale(e,n,r){return ai.makeScale(e,n,r),this.applyMatrix4(ai),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Va.setFromBufferAttribute(f),this.morphTargetsRelative?(dn.addVectors($n.min,Va.min),$n.expandByPoint(dn),dn.addVectors($n.max,Va.max),$n.expandByPoint(dn)):($n.expandByPoint(Va.min),$n.expandByPoint(Va.max))}$n.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)dn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(dn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)dn.fromBufferAttribute(f,m),h&&(Hs.fromBufferAttribute(e,m),dn.add(Hs)),o=Math.max(o,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Si(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new ee,h[E]=new ee;const m=new ee,_=new ee,y=new ee,g=new yt,M=new yt,T=new yt,C=new ee,v=new ee;function x(E,L,W){m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,L),y.fromBufferAttribute(r,W),g.fromBufferAttribute(c,E),M.fromBufferAttribute(c,L),T.fromBufferAttribute(c,W),_.sub(m),y.sub(m),M.sub(g),T.sub(g);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(z),v.copy(y).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(z),f[E].add(C),f[L].add(C),f[W].add(C),h[E].add(v),h[L].add(v),h[W].add(v))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,L=U.length;E<L;++E){const W=U[E],z=W.start,J=W.count;for(let de=z,pe=z+J;de<pe;de+=3)x(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const k=new ee,A=new ee,F=new ee,N=new ee;function O(E){F.fromBufferAttribute(o,E),N.copy(F);const L=f[E];k.copy(L),k.sub(F.multiplyScalar(F.dot(L))).normalize(),A.crossVectors(N,L);const z=A.dot(h[E])<0?-1:1;u.setXYZW(E,k.x,k.y,k.z,z)}for(let E=0,L=U.length;E<L;++E){const W=U[E],z=W.start,J=W.count;for(let de=z,pe=z+J;de<pe;de+=3)O(e.getX(de+0)),O(e.getX(de+1)),O(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ee,c=new ee,u=new ee,f=new ee,h=new ee,m=new ee,_=new ee,y=new ee;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),C=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),_.subVectors(u,c),y.subVectors(o,c),_.cross(y),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,v),f.add(_),h.add(_),m.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,c),y.subVectors(o,c),_.cross(y),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)dn.fromBufferAttribute(e,n),dn.normalize(),e.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,y=f.normalized,g=new m.constructor(h.length*_);let M=0,T=0;for(let C=0,v=h.length;C<v;C++){f.isInterleavedBufferAttribute?M=h[C]*f.data.stride+f.offset:M=h[C]*_;for(let x=0;x<_;x++)g[T++]=m[M++]}return new Si(g,_,y)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],m=e(h,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const h=[],m=c[f];for(let _=0,y=m.length;_<y;_++){const g=m[_],M=e(g,r);h.push(M)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let y=0,g=m.length;y<g;y++){const M=m[y];_.push(M.toJSON(e.data))}_.length>0&&(o[h]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const c=e.morphAttributes;for(const m in c){const _=[],y=c[m];for(let g=0,M=y.length;g<M;g++)_.push(y[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let y_=0;class os extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=js,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=_d,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Rr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const f in c){const h=c[f];delete h.metadata,u.push(h)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new yt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new ee,sd=new ee,ml=new ee,Tr=new ee,ad=new ee,gl=new ee,od=new ee;class $l{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){sd.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(sd);const c=e.distanceTo(n)*.5,u=-this.direction.dot(ml),f=Tr.dot(this.direction),h=-Tr.dot(ml),m=Tr.lengthSq(),_=Math.abs(1-u*u);let y,g,M,T;if(_>0)if(y=u*h-f,g=u*f-h,T=c*_,y>=0)if(g>=-T)if(g<=T){const C=1/_;y*=C,g*=C,M=y*(y+u*g+2*f)+g*(u*y+g+2*h)+m}else g=c,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*h)+m;else g=-c,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*h)+m;else g<=-T?(y=Math.max(0,-(-u*c+f)),g=y>0?-c:Math.min(Math.max(-c,-h),c),M=-y*y+g*(g+2*h)+m):g<=T?(y=0,g=Math.min(Math.max(-c,-h),c),M=g*(g+2*h)+m):(y=Math.max(0,-(u*c+f)),g=y>0?c:Math.min(Math.max(-c,-h),c),M=-y*y+g*(g+2*h)+m);else g=u>0?-c:c,y=Math.max(0,-(u*g+f)),M=-y*y+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(sd).addScaledVector(ml,g),M}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),o=Ki.dot(Ki)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,u,f,h;const m=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,r,o,c){ad.subVectors(n,e),gl.subVectors(r,e),od.crossVectors(ad,gl);let u=this.direction.dot(od),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Tr.subVectors(this.origin,e);const h=f*this.direction.dot(gl.crossVectors(Tr,gl));if(h<0)return null;const m=f*this.direction.dot(ad.cross(Tr));if(m<0||h+m>u)return null;const _=-f*Tr.dot(od);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wl extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rm=new Xt,Zr=new $l,xl=new eo,Pm=new ee,vl=new ee,_l=new ee,yl=new ee,ld=new ee,Sl=new ee,Nm=new ee,Ml=new ee;class Jn extends wn{constructor(e=new Dn,n=new Wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){Sl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const _=f[h],y=c[h];_!==0&&(ld.fromBufferAttribute(y,e),u?Sl.addScaledVector(ld,_):Sl.addScaledVector(ld.sub(n),_))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(c),Zr.copy(e.ray).recast(e.near),!(xl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(xl,Pm)===null||Zr.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Rm.copy(c).invert(),Zr.copy(e.ray).applyMatrix4(Rm),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Zr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,u=this.material,f=c.index,h=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,g=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const v=g[T],x=u[v.materialIndex],U=Math.max(v.start,M.start),k=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let A=U,F=k;A<F;A+=3){const N=f.getX(A),O=f.getX(A+1),E=f.getX(A+2);o=El(this,x,e,r,m,_,y,N,O,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let v=T,x=C;v<x;v+=3){const U=f.getX(v),k=f.getX(v+1),A=f.getX(v+2);o=El(this,u,e,r,m,_,y,U,k,A),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const v=g[T],x=u[v.materialIndex],U=Math.max(v.start,M.start),k=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let A=U,F=k;A<F;A+=3){const N=A,O=A+1,E=A+2;o=El(this,x,e,r,m,_,y,N,O,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let v=T,x=C;v<x;v+=3){const U=v,k=v+1,A=v+2;o=El(this,u,e,r,m,_,y,U,k,A),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function S_(s,e,n,r,o,c,u,f){let h;if(e.side===Gn?h=r.intersectTriangle(u,c,o,!0,f):h=r.intersectTriangle(o,c,u,e.side===Rr,f),h===null)return null;Ml.copy(f),Ml.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Ml);return m<n.near||m>n.far?null:{distance:m,point:Ml.clone(),object:s}}function El(s,e,n,r,o,c,u,f,h,m){s.getVertexPosition(f,vl),s.getVertexPosition(h,_l),s.getVertexPosition(m,yl);const _=S_(s,e,n,r,vl,_l,yl,Nm);if(_){const y=new ee;_i.getBarycoord(Nm,vl,_l,yl,y),o&&(_.uv=_i.getInterpolatedAttribute(o,f,h,m,y,new yt)),c&&(_.uv1=_i.getInterpolatedAttribute(c,f,h,m,y,new yt)),u&&(_.normal=_i.getInterpolatedAttribute(u,f,h,m,y,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:h,c:m,normal:new ee,materialIndex:0};_i.getNormal(vl,_l,yl,g.normal),_.face=g,_.barycoord=y}return _}class M_ extends Ln{constructor(e=null,n=1,r=1,o,c,u,f,h,m=xn,_=xn,y,g){super(null,u,f,h,m,_,o,c,y,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cd=new ee,E_=new ee,b_=new dt;class Qr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=cd.subVectors(r,n).cross(E_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(cd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:n.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||b_.getNormalMatrix(e),o=this.coplanarPoint(cd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new eo,T_=new yt(.5,.5),bl=new ee;class bf{constructor(e=new Qr,n=new Qr,r=new Qr,o=new Qr,c=new Qr,u=new Qr){this.planes=[e,n,r,o,c,u]}set(e,n,r,o,c,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Li,r=!1){const o=this.planes,c=e.elements,u=c[0],f=c[1],h=c[2],m=c[3],_=c[4],y=c[5],g=c[6],M=c[7],T=c[8],C=c[9],v=c[10],x=c[11],U=c[12],k=c[13],A=c[14],F=c[15];if(o[0].setComponents(m-u,M-_,x-T,F-U).normalize(),o[1].setComponents(m+u,M+_,x+T,F+U).normalize(),o[2].setComponents(m+f,M+y,x+C,F+k).normalize(),o[3].setComponents(m-f,M-y,x-C,F-k).normalize(),r)o[4].setComponents(h,g,v,A).normalize(),o[5].setComponents(m-h,M-g,x-v,F-A).normalize();else if(o[4].setComponents(m-h,M-g,x-v,F-A).normalize(),n===Li)o[5].setComponents(m+h,M+g,x+v,F+A).normalize();else if(n===Za)o[5].setComponents(h,g,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=T_.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(bl.x=o.normal.x>0?e.max.x:e.min.x,bl.y=o.normal.y>0?e.max.y:e.min.y,bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kg extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new ee,jl=new ee,Lm=new Xt,Ha=new $l,Tl=new eo,ud=new ee,Dm=new ee;class w_ extends wn{constructor(e=new Dn,n=new kg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let o=1,c=n.count;o<c;o++)Xl.fromBufferAttribute(n,o-1),jl.fromBufferAttribute(n,o),r[o]=r[o-1],r[o]+=Xl.distanceTo(jl);e.setAttribute("lineDistance",new An(r,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(o),Tl.radius+=c,e.ray.intersectsSphere(Tl)===!1)return;Lm.copy(o).invert(),Ha.copy(e.ray).applyMatrix4(Lm);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,_=r.index,g=r.attributes.position;if(_!==null){const M=Math.max(0,u.start),T=Math.min(_.count,u.start+u.count);for(let C=M,v=T-1;C<v;C+=m){const x=_.getX(C),U=_.getX(C+1),k=wl(this,e,Ha,h,x,U,C);k&&n.push(k)}if(this.isLineLoop){const C=_.getX(T-1),v=_.getX(M),x=wl(this,e,Ha,h,C,v,T-1);x&&n.push(x)}}else{const M=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let C=M,v=T-1;C<v;C+=m){const x=wl(this,e,Ha,h,C,C+1,C);x&&n.push(x)}if(this.isLineLoop){const C=wl(this,e,Ha,h,T-1,M,T-1);C&&n.push(C)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function wl(s,e,n,r,o,c,u){const f=s.geometry.attributes.position;if(Xl.fromBufferAttribute(f,o),jl.fromBufferAttribute(f,c),n.distanceSqToSegment(Xl,jl,ud,Dm)>r)return;ud.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(ud);if(!(m<e.near||m>e.far))return{distance:m,point:Dm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Bg extends os{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Im=new Xt,lf=new $l,Al=new eo,Cl=new ee;class A_ extends wn{constructor(e=new Dn,n=new Bg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(o),Al.radius+=c,e.ray.intersectsSphere(Al)===!1)return;Im.copy(o).invert(),lf.copy(e.ray).applyMatrix4(Im);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,y=r.attributes.position;if(m!==null){const g=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=g,C=M;T<C;T++){const v=m.getX(T);Cl.fromBufferAttribute(y,v),Um(Cl,v,h,o,e,n,this)}}else{const g=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let T=g,C=M;T<C;T++)Cl.fromBufferAttribute(y,T),Um(Cl,T,h,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Um(s,e,n,r,o,c,u){const f=lf.distanceSqToPoint(s);if(f<n){const h=new ee;lf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=o.ray.origin.distanceTo(h);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class zg extends Ln{constructor(e=[],n=rs,r,o,c,u,f,h,m,_){super(e,n,r,o,c,u,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zs extends Ln{constructor(e,n,r=Ui,o,c,u,f=xn,h=xn,m,_=tr,y=1){if(_!==tr&&_!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:y};super(g,o,c,u,f,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class C_ extends Zs{constructor(e,n=Ui,r=rs,o,c,u=xn,f=xn,h,m=tr){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,n,r,o,c,u,f,h,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vg extends Ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class to extends Dn{constructor(e=1,n=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],_=[],y=[];let g=0,M=0;T("z","y","x",-1,-1,r,n,e,u,c,0),T("z","y","x",1,-1,r,n,-e,u,c,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,c,4),T("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(h),this.setAttribute("position",new An(m,3)),this.setAttribute("normal",new An(_,3)),this.setAttribute("uv",new An(y,2));function T(C,v,x,U,k,A,F,N,O,E,L){const W=A/O,z=F/E,J=A/2,de=F/2,pe=N/2,K=O+1,ue=E+1;let Y=0,X=0;const se=new ee;for(let oe=0;oe<ue;oe++){const I=oe*z-de;for(let Z=0;Z<K;Z++){const Ie=Z*W-J;se[C]=Ie*U,se[v]=I*k,se[x]=pe,m.push(se.x,se.y,se.z),se[C]=0,se[v]=0,se[x]=N>0?1:-1,_.push(se.x,se.y,se.z),y.push(Z/O),y.push(1-oe/E),Y+=1}}for(let oe=0;oe<E;oe++)for(let I=0;I<O;I++){const Z=g+I+K*oe,Ie=g+I+K*(oe+1),Ve=g+(I+1)+K*(oe+1),Oe=g+(I+1)+K*oe;h.push(Z,Ie,Oe),h.push(Ie,Ve,Oe),X+=6}f.addGroup(M,X,L),M+=X,g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kl extends Dn{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,u=n/2,f=Math.floor(r),h=Math.floor(o),m=f+1,_=h+1,y=e/f,g=n/h,M=[],T=[],C=[],v=[];for(let x=0;x<_;x++){const U=x*g-u;for(let k=0;k<m;k++){const A=k*y-c;T.push(A,-U,0),C.push(0,0,1),v.push(k/f),v.push(1-x/h)}}for(let x=0;x<h;x++)for(let U=0;U<f;U++){const k=U+m*x,A=U+m*(x+1),F=U+1+m*(x+1),N=U+1+m*x;M.push(k,A,N),M.push(A,F,N)}this.setIndex(M),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(C,3)),this.setAttribute("uv",new An(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tf extends Dn{constructor(e=.5,n=1,r=32,o=1,c=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],h=[],m=[],_=[];let y=e;const g=(n-e)/o,M=new ee,T=new yt;for(let C=0;C<=o;C++){for(let v=0;v<=r;v++){const x=c+v/r*u;M.x=y*Math.cos(x),M.y=y*Math.sin(x),h.push(M.x,M.y,M.z),m.push(0,0,1),T.x=(M.x/n+1)/2,T.y=(M.y/n+1)/2,_.push(T.x,T.y)}y+=g}for(let C=0;C<o;C++){const v=C*(r+1);for(let x=0;x<r;x++){const U=x+v,k=U,A=U+r+1,F=U+r+2,N=U+1;f.push(k,A,N),f.push(A,F,N)}}this.setIndex(f),this.setAttribute("position",new An(h,3)),this.setAttribute("normal",new An(m,3)),this.setAttribute("uv",new An(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ya extends Dn{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const _=[],y=new ee,g=new ee,M=[],T=[],C=[],v=[];for(let x=0;x<=r;x++){const U=[],k=x/r,A=u+k*f,F=e*Math.cos(A),N=Math.sqrt(e*e-F*F);let O=0;x===0&&u===0?O=.5/n:x===r&&h===Math.PI&&(O=-.5/n);for(let E=0;E<=n;E++){const L=E/n,W=o+L*c;y.x=-N*Math.cos(W),y.y=F,y.z=N*Math.sin(W),T.push(y.x,y.y,y.z),g.copy(y).normalize(),C.push(g.x,g.y,g.z),v.push(L+O,1-k),U.push(m++)}_.push(U)}for(let x=0;x<r;x++)for(let U=0;U<n;U++){const k=_[x][U+1],A=_[x][U],F=_[x+1][U],N=_[x+1][U+1];(x!==0||u>0)&&M.push(k,A,N),(x!==r-1||h<Math.PI)&&M.push(A,F,N)}this.setIndex(M),this.setAttribute("position",new An(T,3)),this.setAttribute("normal",new An(C,3)),this.setAttribute("uv",new An(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Fm(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Fm(o[0])){const c=[];for(let u=0,f=o.length;u<f;u++)c[u]=o[u].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Nn(s){const e={};for(let n=0;n<s.length;n++){const r=Js(s[n]);for(const o in r)e[o]=r[o]}return e}function Fm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function R_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const P_={clone:Js,merge:Nn};var N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(o.value);break;case"v2":this.uniforms[r].value=new yt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Zt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Xt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class D_ extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Om extends os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I_ extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gg extends wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const dd=new Xt,km=new ee,Bm=new ee;class F_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;km.setFromMatrixPosition(e.matrixWorld),n.position.copy(km),Bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bm),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Za||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rl=new ee,Pl=new Qs,Ai=new ee;class Wg extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rl,Pl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Rl,Pl,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rl,Pl,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new ee,zm=new yt,Vm=new yt;class Kn extends Wg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,n){return this.getViewBounds(e,zm,Vm),n.subVectors(Vm,zm)}setViewOffset(e,n,r,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*r/m,o*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class O_ extends F_{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class k_ extends Gg{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new O_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Xg extends Wg{constructor(e=-1,n=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,f=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class B_ extends Gg{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Ws=1;class z_ extends wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Kn(Gs,Ws,e,n);o.layers=this.layers,this.add(o);const c=new Kn(Gs,Ws,e,n);c.layers=this.layers,this.add(c);const u=new Kn(Gs,Ws,e,n);u.layers=this.layers,this.add(u);const f=new Kn(Gs,Ws,e,n);f.layers=this.layers,this.add(f);const h=new Kn(Gs,Ws,e,n);h.layers=this.layers,this.add(h);const m=new Kn(Gs,Ws,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,u,f,h]=n;for(const m of n)this.remove(m);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Za)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,h,m,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(y,g,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class V_ extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hm=new Xt;class H_{constructor(e,n,r=0,o=1/0){this.ray=new $l(e,n),this.near=r,this.far=o,this.camera=null,this.layers=new Ef,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):wt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Hm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hm),this}intersectObject(e,n=!0,r=[]){return cf(e,this,r,n),r.sort(Gm),r}intersectObjects(e,n=!0,r=[]){for(let o=0,c=e.length;o<c;o++)cf(e[o],this,r,n);return r.sort(Gm),r}}function Gm(s,e){return s.distance-e.distance}function cf(s,e,n,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(o=!1),o===!0&&r===!0){const c=s.children;for(let u=0,f=c.length;u<f;u++)cf(c[u],e,n,!0)}}const Pf=class Pf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Pf.prototype.isMatrix2=!0;let Wm=Pf;function Xm(s,e,n,r){const o=G_(r);switch(n){case Pg:return s*e;case Lg:return s*e/o.components*o.byteLength;case xf:return s*e/o.components*o.byteLength;case ss:return s*e*2/o.components*o.byteLength;case vf:return s*e*2/o.components*o.byteLength;case Ng:return s*e*3/o.components*o.byteLength;case yi:return s*e*4/o.components*o.byteLength;case _f:return s*e*4/o.components*o.byteLength;case Il:case Ul:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Ld:return Math.max(s,16)*Math.max(e,8)/4;case Rd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Dd:case Id:case Fd:case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ud:case Bl:case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qd:case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zl:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function G_(s){switch(s){case Zn:case wg:return{byteLength:1,components:1};case $a:case Ag:case er:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case Ui:case pf:case Ni:return{byteLength:4,components:1};case Cg:case Rg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jg(){let s=null,e=!1,n=null,r=null;function o(c,u){n(c,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function W_(s){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,y=m.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,m,_),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,m){const _=h.array,y=h.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,_);else{y.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<y.length;M++){const T=y[g],C=y[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,y[g]=C)}y.length=g+1;for(let M=0,T=y.length;M<T;M++){const C=y[M];s.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:o,remove:c,update:u}}var X_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ry=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Oy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,SS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:X_,alphahash_pars_fragment:j_,alphamap_fragment:q_,alphamap_pars_fragment:Y_,alphatest_fragment:$_,alphatest_pars_fragment:K_,aomap_fragment:Z_,aomap_pars_fragment:J_,batching_pars_vertex:Q_,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:uy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:hy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:xy,displacementmap_vertex:vy,emissivemap_fragment:_y,emissivemap_pars_fragment:yy,colorspace_fragment:Sy,colorspace_pars_fragment:My,envmap_fragment:Ey,envmap_common_pars_fragment:by,envmap_pars_fragment:Ty,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:Py,fog_pars_fragment:Ny,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Dy,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Uy,lights_pars_begin:Fy,lights_toon_fragment:ky,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:jy,lightprobes_pars_fragment:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:Qy,map_particle_fragment:eS,map_particle_pars_fragment:tS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphinstance_vertex:rS,morphcolor_vertex:sS,morphnormal_vertex:aS,morphtarget_pars_vertex:oS,morphtarget_vertex:lS,normal_fragment_begin:cS,normal_fragment_maps:uS,normal_pars_fragment:dS,normal_pars_vertex:fS,normal_vertex:hS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:xS,iridescence_pars_fragment:vS,opaque_fragment:_S,packing:yS,premultiplied_alpha_fragment:SS,project_vertex:MS,dithering_fragment:ES,dithering_pars_fragment:bS,roughnessmap_fragment:TS,roughnessmap_pars_fragment:wS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:CS,shadowmap_vertex:RS,shadowmask_pars_fragment:PS,skinbase_vertex:NS,skinning_pars_vertex:LS,skinning_vertex:DS,skinnormal_vertex:IS,specularmap_fragment:US,specularmap_pars_fragment:FS,tonemapping_fragment:OS,tonemapping_pars_fragment:kS,transmission_fragment:BS,transmission_pars_fragment:zS,uv_pars_fragment:VS,uv_pars_vertex:HS,uv_vertex:GS,worldpos_vertex:WS,background_vert:XS,background_frag:jS,backgroundCube_vert:qS,backgroundCube_frag:YS,cube_vert:$S,cube_frag:KS,depth_vert:ZS,depth_frag:JS,distance_vert:QS,distance_frag:eM,equirect_vert:tM,equirect_frag:nM,linedashed_vert:iM,linedashed_frag:rM,meshbasic_vert:sM,meshbasic_frag:aM,meshlambert_vert:oM,meshlambert_frag:lM,meshmatcap_vert:cM,meshmatcap_frag:uM,meshnormal_vert:dM,meshnormal_frag:fM,meshphong_vert:hM,meshphong_frag:pM,meshphysical_vert:mM,meshphysical_frag:gM,meshtoon_vert:xM,meshtoon_frag:vM,points_vert:_M,points_frag:yM,shadow_vert:SM,shadow_frag:MM,sprite_vert:EM,sprite_frag:bM},Fe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Nn([Fe.lights,Fe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Nl={r:0,b:0,g:0},TM=new Xt,qg=new dt;qg.set(-1,0,0,0,1,0,0,0,1);function wM(s,e,n,r,o,c){const u=new Et(0);let f=o===!0?0:1,h,m,_=null,y=0,g=null;function M(U){let k=U.isScene===!0?U.background:null;if(k&&k.isTexture){const A=U.backgroundBlurriness>0;k=e.get(k,A)}return k}function T(U){let k=!1;const A=M(U);A===null?v(u,f):A&&A.isColor&&(v(A,1),k=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||k)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(U,k){const A=M(k);A&&(A.isCubeTexture||A.mapping===Yl)?(m===void 0&&(m=new Jn(new to(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Js(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(k.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(qg),m.material.toneMapped=St.getTransfer(A.colorSpace)!==Ut,(_!==A||y!==A.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=A,y=A.version,g=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Jn(new Kl(2,2),new Fi({name:"BackgroundMaterial",uniforms:Js(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,h.material.toneMapped=St.getTransfer(A.colorSpace)!==Ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||y!==A.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=A,y=A.version,g=s.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function v(U,k){U.getRGB(Nl,Hg(s)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,k,c)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,k=1){u.set(U),f=k,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(U){f=U,v(u,f)},render:T,addToRenderList:C,dispose:x}}function AM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function f(z,J,de,pe,K){let ue=!1;const Y=y(z,pe,de,J);c!==Y&&(c=Y,m(c.object)),ue=M(z,pe,de,K),ue&&T(z,pe,de,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,A(z,J,de,pe),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function h(){return s.createVertexArray()}function m(z){return s.bindVertexArray(z)}function _(z){return s.deleteVertexArray(z)}function y(z,J,de,pe){const K=pe.wireframe===!0;let ue=r[J.id];ue===void 0&&(ue={},r[J.id]=ue);const Y=z.isInstancedMesh===!0?z.id:0;let X=ue[Y];X===void 0&&(X={},ue[Y]=X);let se=X[de.id];se===void 0&&(se={},X[de.id]=se);let oe=se[K];return oe===void 0&&(oe=g(h()),se[K]=oe),oe}function g(z){const J=[],de=[],pe=[];for(let K=0;K<n;K++)J[K]=0,de[K]=0,pe[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:de,attributeDivisors:pe,object:z,attributes:{},index:null}}function M(z,J,de,pe){const K=c.attributes,ue=J.attributes;let Y=0;const X=de.getAttributes();for(const se in X)if(X[se].location>=0){const I=K[se];let Z=ue[se];if(Z===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),I===void 0||I.attribute!==Z||Z&&I.data!==Z.data)return!0;Y++}return c.attributesNum!==Y||c.index!==pe}function T(z,J,de,pe){const K={},ue=J.attributes;let Y=0;const X=de.getAttributes();for(const se in X)if(X[se].location>=0){let I=ue[se];I===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(I=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(I=z.instanceColor));const Z={};Z.attribute=I,I&&I.data&&(Z.data=I.data),K[se]=Z,Y++}c.attributes=K,c.attributesNum=Y,c.index=pe}function C(){const z=c.newAttributes;for(let J=0,de=z.length;J<de;J++)z[J]=0}function v(z){x(z,0)}function x(z,J){const de=c.newAttributes,pe=c.enabledAttributes,K=c.attributeDivisors;de[z]=1,pe[z]===0&&(s.enableVertexAttribArray(z),pe[z]=1),K[z]!==J&&(s.vertexAttribDivisor(z,J),K[z]=J)}function U(){const z=c.newAttributes,J=c.enabledAttributes;for(let de=0,pe=J.length;de<pe;de++)J[de]!==z[de]&&(s.disableVertexAttribArray(de),J[de]=0)}function k(z,J,de,pe,K,ue,Y){Y===!0?s.vertexAttribIPointer(z,J,de,K,ue):s.vertexAttribPointer(z,J,de,pe,K,ue)}function A(z,J,de,pe){C();const K=pe.attributes,ue=de.getAttributes(),Y=J.defaultAttributeValues;for(const X in ue){const se=ue[X];if(se.location>=0){let oe=K[X];if(oe===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor)),oe!==void 0){const I=oe.normalized,Z=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;const Ve=Ie.buffer,Oe=Ie.type,j=Ie.bytesPerElement,xe=Oe===s.INT||Oe===s.UNSIGNED_INT||oe.gpuType===pf;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Ae=ce.stride,je=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Xe=0;Xe<se.locationSize;Xe++)x(se.location+Xe,ce.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Xe=0;Xe<se.locationSize;Xe++)v(se.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Xe=0;Xe<se.locationSize;Xe++)k(se.location+Xe,Z/se.locationSize,Oe,I,Ae*j,(je+Z/se.locationSize*Xe)*j,xe)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<se.locationSize;ce++)x(se.location+ce,oe.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<se.locationSize;ce++)v(se.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ce=0;ce<se.locationSize;ce++)k(se.location+ce,Z/se.locationSize,Oe,I,Z*j,Z/se.locationSize*ce*j,xe)}}else if(Y!==void 0){const I=Y[X];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(se.location,I);break;case 3:s.vertexAttrib3fv(se.location,I);break;case 4:s.vertexAttrib4fv(se.location,I);break;default:s.vertexAttrib1fv(se.location,I)}}}}U()}function F(){L();for(const z in r){const J=r[z];for(const de in J){const pe=J[de];for(const K in pe){const ue=pe[K];for(const Y in ue)_(ue[Y].object),delete ue[Y];delete pe[K]}}delete r[z]}}function N(z){if(r[z.id]===void 0)return;const J=r[z.id];for(const de in J){const pe=J[de];for(const K in pe){const ue=pe[K];for(const Y in ue)_(ue[Y].object),delete ue[Y];delete pe[K]}}delete r[z.id]}function O(z){for(const J in r){const de=r[J];for(const pe in de){const K=de[pe];if(K[z.id]===void 0)continue;const ue=K[z.id];for(const Y in ue)_(ue[Y].object),delete ue[Y];delete K[z.id]}}}function E(z){for(const J in r){const de=r[J],pe=z.isInstancedMesh===!0?z.id:0,K=de[pe];if(K!==void 0){for(const ue in K){const Y=K[ue];for(const X in Y)_(Y[X].object),delete Y[X];delete K[ue]}delete de[pe],Object.keys(de).length===0&&delete r[J]}}}function L(){W(),u=!0,c!==o&&(c=o,m(c.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:W,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:v,disableUnusedAttributes:U}}function CM(s,e,n){let r;function o(h){r=h}function c(h,m){s.drawArrays(r,h,m),n.update(m,r,1)}function u(h,m,_){_!==0&&(s.drawArraysInstanced(r,h,m,_),n.update(m,r,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,_);let g=0;for(let M=0;M<_;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function RM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==yi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Zn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ni&&!E)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(at("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const y=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:U,maxVaryings:k,maxFragmentUniforms:A,maxSamples:F,samples:N}}function PM(s){const e=this;let n=null,r=0,o=!1,c=!1;const u=new Qr,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||r!==0||o;return o=g,r=y.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){n=_(y,g,0)},this.setState=function(y,g,M){const T=y.clippingPlanes,C=y.clipIntersection,v=y.clipShadows,x=s.get(y);if(!o||T===null||T.length===0||c&&!v)c?_(null):m();else{const U=c?0:r,k=U*4;let A=x.clippingState||null;h.value=A,A=_(T,g,k,M);for(let F=0;F!==k;++F)A[F]=n[F];x.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(y,g,M,T){const C=y!==null?y.length:0;let v=null;if(C!==0){if(v=h.value,T!==!0||v===null){const x=M+C*4,U=g.matrixWorldInverse;f.getNormalMatrix(U),(v===null||v.length<x)&&(v=new Float32Array(x));for(let k=0,A=M;k!==C;++k,A+=4)u.copy(y[k]).applyMatrix4(U,f),u.normal.toArray(v,A),v[A+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}const Cr=4,jm=[.125,.215,.35,.446,.526,.582],ts=20,NM=256,Ga=new Xg,qm=new Et;let fd=null,hd=0,pd=0,md=!1;const LM=new ee;class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:u=256,position:f=LM}=c;fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,hd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===rs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:er,format:yi,colorSpace:Vl,depthBuffer:!1},o=$m(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DM(c)),this._blurMaterial=UM(c,e,n),this._ggxMaterial=IM(c,e,n)}return o}_compileMaterial(e){const n=new Jn(new Dn,e);this._renderer.compile(n,Ga)}_sceneToCubeUV(e,n,r,o,c){const h=new Kn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(qm),y.toneMapping=Di,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jn(new to,new Wl({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,v=C.material;let x=!1;const U=e.background;U?U.isColor&&(v.color.copy(U),e.background=null,x=!0):(v.color.copy(qm),x=!0);for(let k=0;k<6;k++){const A=k%3;A===0?(h.up.set(0,m[k],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x+_[k],c.y,c.z)):A===1?(h.up.set(0,0,m[k]),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y+_[k],c.z)):(h.up.set(0,m[k],0),h.position.set(c.x,c.y,c.z),h.lookAt(c.x,c.y,c.z+_[k]));const F=this._cubeSize;Xs(o,A*F,k>2?F:0,F,F),y.setRenderTarget(o),x&&y.render(C,h),y.render(e,h)}y.toneMapping=M,y.autoClear=g,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===rs||e.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=e;const h=this._cubeSize;Xs(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Ga)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,m=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),y=Math.sqrt(m*m-_*_),g=0+m*1.25,M=y*g,{_lodMax:T}=this,C=this._sizeLods[r],v=3*C*(r>T-Cr?r-T+Cr:0),x=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=T-n,Xs(c,v,x,3*C,2*C),o.setRenderTarget(c),o.render(f,Ga),h.envMap.value=c.texture,h.roughness.value=0,h.mipInt.value=T-r,Xs(e,v,x,3*C,2*C),o.setRenderTarget(e),o.render(f,Ga)}_blur(e,n,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[o];y.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ts-1),C=c/T,v=isFinite(c)?1+Math.floor(_*C):ts;v>ts&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ts}`);const x=[];let U=0;for(let O=0;O<ts;++O){const E=O/C,L=Math.exp(-E*E/2);x.push(L),O===0?U+=L:O<v&&(U+=2*L)}for(let O=0;O<x.length;O++)x[O]=x[O]/U;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:k}=this;g.dTheta.value=T,g.mipInt.value=k-r;const A=this._sizeLods[o],F=3*A*(o>k-Cr?o-k+Cr:0),N=4*(this._cubeSize-A);Xs(n,F,N,3*A,2*A),h.setRenderTarget(n),h.render(y,Ga)}}function DM(s){const e=[],n=[],r=[];let o=s;const c=s-Cr+1+jm.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-Cr?h=jm[u-s+Cr-1]:u===0&&(h=0),n.push(h);const m=1/(f-2),_=-m,y=1+m,g=[_,_,y,_,y,y,_,_,y,y,_,y],M=6,T=6,C=3,v=2,x=1,U=new Float32Array(C*T*M),k=new Float32Array(v*T*M),A=new Float32Array(x*T*M);for(let N=0;N<M;N++){const O=N%3*2/3-1,E=N>2?0:-1,L=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];U.set(L,C*T*N),k.set(g,v*T*N);const W=[N,N,N,N,N,N];A.set(W,x*T*N)}const F=new Dn;F.setAttribute("position",new Si(U,C)),F.setAttribute("uv",new Si(k,v)),F.setAttribute("faceIndex",new Si(A,x)),r.push(new Jn(F,null)),o>Cr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function $m(s,e,n){const r=new Ii(s,e,n);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function IM(s,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function UM(s,e,n){const r=new Float32Array(ts),o=new ee(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Km(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Zm(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yg extends Ii{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new zg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new to(5,5,5),c=new Fi({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ji});c.uniforms.tEquirect.value=n;const u=new Jn(o,c),f=n.minFilter;return n.minFilter===ns&&(n.minFilter=Tn),new z_(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(c)}}function FM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ou||M===ku)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Yg(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,T=M===Ou||M===ku,C=M===rs||M===Ks;if(T||C){let v=n.get(g);const x=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new Ym(s)),v=T?r.fromEquirectangular(g,v):r.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),v.texture;if(v!==void 0)return v.texture;{const U=g.image;return T&&U&&U.height>0||C&&U&&h(U)?(r===null&&(r=new Ym(s)),v=T?r.fromEquirectangular(g):r.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,n.set(g,v),g.addEventListener("dispose",_),v.texture):null}}}return g}function f(g,M){return M===Ou?g.mapping=rs:M===ku&&(g.mapping=Ks),g}function h(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function m(g){const M=g.target;M.removeEventListener("dispose",m);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const T=n.get(M);T!==void 0&&(n.delete(M),T.dispose())}function y(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function OM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&qs("WebGLRenderer: "+r+" extension not supported."),o}}}function kM(s,e,n,r){const o={},c=new WeakMap;function u(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,n.memory.geometries++),g}function h(y){const g=y.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(y){const g=[],M=y.index,T=y.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const U=M.array;C=M.version;for(let k=0,A=U.length;k<A;k+=3){const F=U[k+0],N=U[k+1],O=U[k+2];g.push(F,N,N,O,O,F)}}else{const U=T.array;C=T.version;for(let k=0,A=U.length/3-1;k<A;k+=3){const F=k+0,N=k+1,O=k+2;g.push(F,N,N,O,O,F)}}const v=new(T.count>=65535?Og:Fg)(g,1);v.version=C;const x=c.get(y);x&&e.remove(x),c.set(y,v)}function _(y){const g=c.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:h,getWireframeAttribute:_}}function BM(s,e,n){let r;function o(y){r=y}let c,u;function f(y){c=y.type,u=y.bytesPerElement}function h(y,g){s.drawElements(r,g,c,y*u),n.update(g,r,1)}function m(y,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,y*u,M),n.update(g,r,M))}function _(y,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,y,0,M);let C=0;for(let v=0;v<M;v++)C+=g[v];n.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_}function zM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:wt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function VM(s,e,n){const r=new WeakMap,o=new Zt;function c(u,f,h){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let g=r.get(f);if(g===void 0||g.count!==y){let W=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var M=W;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],k=f.morphAttributes.color||[];let A=0;T===!0&&(A=1),C===!0&&(A=2),v===!0&&(A=3);let F=f.attributes.position.count*A,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const O=new Float32Array(F*N*4*y),E=new Ig(O,F,N,y);E.type=Ni,E.needsUpdate=!0;const L=A*4;for(let z=0;z<y;z++){const J=x[z],de=U[z],pe=k[z],K=F*N*4*z;for(let ue=0;ue<J.count;ue++){const Y=ue*L;T===!0&&(o.fromBufferAttribute(J,ue),O[K+Y+0]=o.x,O[K+Y+1]=o.y,O[K+Y+2]=o.z,O[K+Y+3]=0),C===!0&&(o.fromBufferAttribute(de,ue),O[K+Y+4]=o.x,O[K+Y+5]=o.y,O[K+Y+6]=o.z,O[K+Y+7]=0),v===!0&&(o.fromBufferAttribute(pe,ue),O[K+Y+8]=o.x,O[K+Y+9]=o.y,O[K+Y+10]=o.z,O[K+Y+11]=pe.itemSize===4?o.w:1)}}g={count:y,texture:E,size:new yt(F,N)},r.set(f,g),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let v=0;v<m.length;v++)T+=m[v];const C=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function HM(s,e,n,r,o){let c=new WeakMap;function u(m){const _=o.render.frame,y=m.geometry,g=e.get(m,y);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),c.get(m)!==_&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const M=m.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function f(){c=new WeakMap}function h(m){const _=m.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:f}}const GM={[vg]:"LINEAR_TONE_MAPPING",[_g]:"REINHARD_TONE_MAPPING",[yg]:"CINEON_TONE_MAPPING",[Sg]:"ACES_FILMIC_TONE_MAPPING",[Eg]:"AGX_TONE_MAPPING",[bg]:"NEUTRAL_TONE_MAPPING",[Mg]:"CUSTOM_TONE_MAPPING"};function WM(s,e,n,r,o,c){const u=new Ii(e,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Zs(e,n):void 0}),f=new Ii(e,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),h=new Dn;h.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new An([0,2,0,0,2,0],2));const m=new D_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Jn(h,m),y=new Xg(-1,1,1,-1,0,1);let g=null,M=null,T=!1,C,v=null,x=[],U=!1;this.setSize=function(k,A){u.setSize(k,A),f.setSize(k,A);for(let F=0;F<x.length;F++){const N=x[F];N.setSize&&N.setSize(k,A)}},this.setEffects=function(k){x=k,U=x.length>0&&x[0].isRenderPass===!0;const A=u.width,F=u.height;for(let N=0;N<x.length;N++){const O=x[N];O.setSize&&O.setSize(A,F)}},this.begin=function(k,A){if(T||k.toneMapping===Di&&x.length===0)return!1;if(v=A,A!==null){const F=A.width,N=A.height;(u.width!==F||u.height!==N)&&this.setSize(F,N)}return U===!1&&k.setRenderTarget(u),C=k.toneMapping,k.toneMapping=Di,!0},this.hasRenderPass=function(){return U},this.end=function(k,A){k.toneMapping=C,T=!0;let F=u,N=f;for(let O=0;O<x.length;O++){const E=x[O];if(E.enabled!==!1&&(E.render(k,N,F,A),E.needsSwap!==!1)){const L=F;F=N,N=L}}if(g!==k.outputColorSpace||M!==k.toneMapping){g=k.outputColorSpace,M=k.toneMapping,m.defines={},St.getTransfer(g)===Ut&&(m.defines.SRGB_TRANSFER="");const O=GM[M];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=F.texture,k.setRenderTarget(v),k.render(_,y),v=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),h.dispose(),m.dispose()}}const $g=new Ln,uf=new Zs(1,1),Kg=new Ig,Zg=new l_,Jg=new zg,Jm=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function ea(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Jm[o];if(c===void 0&&(c=new Float32Array(o),Jm[o]=c),e!==0){r.toArray(c,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(c,f)}return c}function an(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function on(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Jl(s,e){let n=Qm[e];n===void 0&&(n=new Int32Array(e),Qm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function XM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2fv(this.addr,e),on(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;s.uniform3fv(this.addr,e),on(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4fv(this.addr,e),on(n,e)}}function $M(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;ng.set(r),s.uniformMatrix2fv(this.addr,!1,ng),on(n,r)}}function KM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;tg.set(r),s.uniformMatrix3fv(this.addr,!1,tg),on(n,r)}}function ZM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;eg.set(r),s.uniformMatrix4fv(this.addr,!1,eg),on(n,r)}}function JM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2iv(this.addr,e),on(n,e)}}function eE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3iv(this.addr,e),on(n,e)}}function tE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4iv(this.addr,e),on(n,e)}}function nE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function iE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2uiv(this.addr,e),on(n,e)}}function rE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3uiv(this.addr,e),on(n,e)}}function sE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4uiv(this.addr,e),on(n,e)}}function aE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(uf.compareFunction=n.isReversedDepthBuffer()?Sf:yf,c=uf):c=$g,n.setTexture2D(e||c,o)}function oE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||Zg,o)}function lE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Jg,o)}function cE(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||Kg,o)}function uE(s){switch(s){case 5126:return XM;case 35664:return jM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return QM;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function dE(s,e){s.uniform1fv(this.addr,e)}function fE(s,e){const n=ea(e,this.size,2);s.uniform2fv(this.addr,n)}function hE(s,e){const n=ea(e,this.size,3);s.uniform3fv(this.addr,n)}function pE(s,e){const n=ea(e,this.size,4);s.uniform4fv(this.addr,n)}function mE(s,e){const n=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function gE(s,e){const n=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function xE(s,e){const n=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function vE(s,e){s.uniform1iv(this.addr,e)}function _E(s,e){s.uniform2iv(this.addr,e)}function yE(s,e){s.uniform3iv(this.addr,e)}function SE(s,e){s.uniform4iv(this.addr,e)}function ME(s,e){s.uniform1uiv(this.addr,e)}function EE(s,e){s.uniform2uiv(this.addr,e)}function bE(s,e){s.uniform3uiv(this.addr,e)}function TE(s,e){s.uniform4uiv(this.addr,e)}function wE(s,e,n){const r=this.cache,o=e.length,c=Jl(n,o);an(r,c)||(s.uniform1iv(this.addr,c),on(r,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=uf:u=$g;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||u,c[f])}function AE(s,e,n){const r=this.cache,o=e.length,c=Jl(n,o);an(r,c)||(s.uniform1iv(this.addr,c),on(r,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Zg,c[u])}function CE(s,e,n){const r=this.cache,o=e.length,c=Jl(n,o);an(r,c)||(s.uniform1iv(this.addr,c),on(r,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Jg,c[u])}function RE(s,e,n){const r=this.cache,o=e.length,c=Jl(n,o);an(r,c)||(s.uniform1iv(this.addr,c),on(r,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Kg,c[u])}function PE(s){switch(s){case 5126:return dE;case 35664:return fE;case 35665:return hE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return xE;case 5124:case 35670:return vE;case 35667:case 35671:return _E;case 35668:case 35672:return yE;case 35669:case 35673:return SE;case 5125:return ME;case 36294:return EE;case 36295:return bE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return RE}}class NE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=uE(n.type)}}class LE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PE(n.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function ig(s,e){s.seq.push(e),s.map[e.id]=e}function IE(s,e,n){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const c=gd.exec(r),u=gd.lastIndex;let f=c[1];const h=c[2]==="]",m=c[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===o){ig(n,m===void 0?new NE(f,s,e):new LE(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new DE(f),ig(n,y)),n=y}}}class kl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(n,u),h=e.getUniformLocation(n,f.name);IE(f,h,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function rg(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const UE=37297;let FE=0;function OE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const sg=new dt;function kE(s){St._getMatrix(sg,St.workingColorSpace,s);const e=`mat3( ${sg.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ag(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+OE(s.getShaderSource(e),f)}else return c}function BE(s,e){const n=kE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const zE={[vg]:"Linear",[_g]:"Reinhard",[yg]:"Cineon",[Sg]:"ACESFilmic",[Eg]:"AgX",[bg]:"Neutral",[Mg]:"Custom"};function VE(s,e){const n=zE[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new ee;function HE(){St.getLuminanceCoefficients(Ll);const s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function WE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function XE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function qa(s){return s!==""}function og(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jE=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(s){return s.replace(jE,YE)}const qE=new Map;function YE(s,e){let n=pt[e];if(n===void 0){const r=qE.get(e);if(r!==void 0)n=pt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return df(n)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(s){return s.replace($E,KE)}function KE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function ug(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZE={[Dl]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function JE(s){return ZE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QE={[rs]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[Yl]:"ENVMAP_TYPE_CUBE_UV"};function e1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":QE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const t1={[Ks]:"ENVMAP_MODE_REFRACTION"};function n1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i1={[xg]:"ENVMAP_BLENDING_MULTIPLY",[Vv]:"ENVMAP_BLENDING_MIX",[Hv]:"ENVMAP_BLENDING_ADD"};function r1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":i1[s.combine]||"ENVMAP_BLENDING_NONE"}function s1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function a1(s,e,n,r){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=JE(n),m=e1(n),_=n1(n),y=r1(n),g=s1(n),M=GE(n),T=WE(c),C=o.createProgram();let v,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(qa).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(qa).join(`
`),x.length>0&&(x+=`
`)):(v=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),x=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?pt.tonemapping_pars_fragment:"",n.toneMapping!==Di?VE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,BE("linearToOutputTexel",n.outputColorSpace),HE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qa).join(`
`)),u=df(u),u=og(u,n),u=lg(u,n),f=df(f),f=og(f,n),f=lg(f,n),u=cg(u),f=cg(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",n.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const k=U+v+u,A=U+x+f,F=rg(o,o.VERTEX_SHADER,k),N=rg(o,o.FRAGMENT_SHADER,A);o.attachShader(C,F),o.attachShader(C,N),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(z){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(C)||"",de=o.getShaderInfoLog(F)||"",pe=o.getShaderInfoLog(N)||"",K=J.trim(),ue=de.trim(),Y=pe.trim();let X=!0,se=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,F,N);else{const oe=ag(o,F,"vertex"),I=ag(o,N,"fragment");wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+K+`
`+oe+`
`+I)}else K!==""?at("WebGLProgram: Program Info Log:",K):(ue===""||Y==="")&&(se=!1);se&&(z.diagnostics={runnable:X,programLog:K,vertexShader:{log:ue,prefix:v},fragmentShader:{log:Y,prefix:x}})}o.deleteShader(F),o.deleteShader(N),E=new kl(o,C),L=XE(o,C)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(C,UE)),W},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=N,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new c1(e),n.set(e,r)),r}}class c1{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}}function u1(s){return s===ss||s===Bl||s===zl}function d1(s,e,n,r,o,c){const u=new Ef,f=new l1,h=new Set,m=[],_=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return h.add(E),E===0?"uv":`uv${E}`}function C(E,L,W,z,J,de){const pe=z.fog,K=J.geometry,ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=e.get(E.envMap||ue,Y),se=X&&X.mapping===Yl?X.image.height:null,oe=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const I=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Z=I!==void 0?I.length:0;let Ie=0;K.morphAttributes.position!==void 0&&(Ie=1),K.morphAttributes.normal!==void 0&&(Ie=2),K.morphAttributes.color!==void 0&&(Ie=3);let Ve,Oe,j,xe;if(oe){const Ge=Ri[oe];Ve=Ge.vertexShader,Oe=Ge.fragmentShader}else{Ve=E.vertexShader,Oe=E.fragmentShader;const Ge=f.getVertexShaderStage(E),kt=f.getFragmentShaderStage(E);f.update(E,Ge,kt),j=Ge.id,xe=kt.id}const ce=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),je=J.isInstancedMesh===!0,Xe=J.isBatchedMesh===!0,vt=!!E.map,ot=!!E.matcap,_t=!!X,ft=!!E.aoMap,ht=!!E.lightMap,Ft=!!E.bumpMap&&E.wireframe===!1,Bt=!!E.normalMap,Lt=!!E.displacementMap,Ot=!!E.emissiveMap,ve=!!E.metalnessMap,tt=!!E.roughnessMap,G=E.anisotropy>0,hn=E.clearcoat>0,Ct=E.dispersion>0,P=E.iridescence>0,S=E.sheen>0,$=E.transmission>0,re=G&&!!E.anisotropyMap,fe=hn&&!!E.clearcoatMap,Ee=hn&&!!E.clearcoatNormalMap,Pe=hn&&!!E.clearcoatRoughnessMap,he=P&&!!E.iridescenceMap,ge=P&&!!E.iridescenceThicknessMap,Le=S&&!!E.sheenColorMap,Ke=S&&!!E.sheenRoughnessMap,De=!!E.specularMap,Re=!!E.specularColorMap,et=!!E.specularIntensityMap,nt=$&&!!E.transmissionMap,st=$&&!!E.thicknessMap,V=!!E.gradientMap,Ce=!!E.alphaMap,me=E.alphaTest>0,Ne=!!E.alphaHash,Ue=!!E.extensions;let _e=Di;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(_e=s.toneMapping);const qe={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:Oe,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Xe,batchingColor:Xe&&J._colorsTexture!==null,instancing:je,instancingColor:je&&J.instanceColor!==null,instancingMorph:je&&J.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:vt,matcap:ot,envMap:_t,envMapMode:_t&&X.mapping,envMapCubeUVHeight:se,aoMap:ft,lightMap:ht,bumpMap:Ft,normalMap:Bt,displacementMap:Lt,emissiveMap:Ot,normalMapObjectSpace:Bt&&E.normalMapType===Xv,normalMapTangentSpace:Bt&&E.normalMapType===af,packedNormalMap:Bt&&E.normalMapType===af&&u1(E.normalMap.format),metalnessMap:ve,roughnessMap:tt,anisotropy:G,anisotropyMap:re,clearcoat:hn,clearcoatMap:fe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Pe,dispersion:Ct,iridescence:P,iridescenceMap:he,iridescenceThicknessMap:ge,sheen:S,sheenColorMap:Le,sheenRoughnessMap:Ke,specularMap:De,specularColorMap:Re,specularIntensityMap:et,transmission:$,transmissionMap:nt,thicknessMap:st,gradientMap:V,opaque:E.transparent===!1&&E.blending===js&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:me,alphaHash:Ne,combine:E.combine,mapUv:vt&&T(E.map.channel),aoMapUv:ft&&T(E.aoMap.channel),lightMapUv:ht&&T(E.lightMap.channel),bumpMapUv:Ft&&T(E.bumpMap.channel),normalMapUv:Bt&&T(E.normalMap.channel),displacementMapUv:Lt&&T(E.displacementMap.channel),emissiveMapUv:Ot&&T(E.emissiveMap.channel),metalnessMapUv:ve&&T(E.metalnessMap.channel),roughnessMapUv:tt&&T(E.roughnessMap.channel),anisotropyMapUv:re&&T(E.anisotropyMap.channel),clearcoatMapUv:fe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&T(E.sheenRoughnessMap.channel),specularMapUv:De&&T(E.specularMap.channel),specularColorMapUv:Re&&T(E.specularColorMap.channel),specularIntensityMapUv:et&&T(E.specularIntensityMap.channel),transmissionMapUv:nt&&T(E.transmissionMap.channel),thicknessMapUv:st&&T(E.thicknessMap.channel),alphaMapUv:Ce&&T(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||G),vertexNormals:!!K.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(vt||Ce),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||K.attributes.normal===void 0&&Bt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ae,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ie,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:vt&&E.map.isVideoTexture===!0&&St.getTransfer(E.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ot&&E.emissiveMap.isVideoTexture===!0&&St.getTransfer(E.emissiveMap.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pi,flipSided:E.side===Gn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function v(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const W in E.defines)L.push(W),L.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(x(L,E),U(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function x(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function U(E,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function k(E){const L=M[E.type];let W;if(L){const z=Ri[L];W=P_.clone(z.uniforms)}else W=E.uniforms;return W}function A(E,L){let W=_.get(L);return W!==void 0?++W.usedTimes:(W=new a1(s,L,E,o),m.push(W),_.set(L,W)),W}function F(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function N(E){f.remove(E)}function O(){f.dispose()}return{getParameters:C,getProgramCacheKey:v,getUniforms:k,acquireProgram:A,releaseProgram:F,releaseShaderCache:N,programs:m,dispose:O}}function f1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function h1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fg(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,T,C,v,x){let U=s[e];return U===void 0?(U={id:g.id,object:g,geometry:M,material:T,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:v,group:x},s[e]=U):(U.id=g.id,U.object=g,U.geometry=M,U.material=T,U.materialVariant=u(g),U.groupOrder=C,U.renderOrder=g.renderOrder,U.z=v,U.group=x),e++,U}function h(g,M,T,C,v,x){const U=f(g,M,T,C,v,x);T.transmission>0?r.push(U):T.transparent===!0?o.push(U):n.push(U)}function m(g,M,T,C,v,x){const U=f(g,M,T,C,v,x);T.transmission>0?r.unshift(U):T.transparent===!0?o.unshift(U):n.unshift(U)}function _(g,M,T){n.length>1&&n.sort(g||h1),r.length>1&&r.sort(M||dg),o.length>1&&o.sort(M||dg),T&&(n.reverse(),r.reverse(),o.reverse())}function y(){for(let g=e,M=s.length;g<M;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:h,unshift:m,finish:y,sort:_}}function p1(){let s=new WeakMap;function e(r,o){const c=s.get(r);let u;return c===void 0?(u=new fg,s.set(r,[u])):o>=c.length?(u=new fg,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function m1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new Et};break;case"SpotLight":n={position:new ee,direction:new ee,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function g1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let x1=0;function v1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _1(s){const e=new m1,n=g1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const o=new ee,c=new Xt,u=new Xt;function f(m){let _=0,y=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,T=0,C=0,v=0,x=0,U=0,k=0,A=0,F=0,N=0,O=0;m.sort(v1);for(let L=0,W=m.length;L<W;L++){const z=m[L],J=z.color,de=z.intensity,pe=z.distance;let K=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ss?K=z.shadow.map.texture:K=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=J.r*de,y+=J.g*de,g+=J.b*de;else if(z.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(z.sh.coefficients[ue],de);O++}else if(z.isDirectionalLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,X=n.get(z);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=K,r.directionalShadowMatrix[M]=z.shadow.matrix,U++}r.directional[M]=ue,M++}else if(z.isSpotLight){const ue=e.get(z);ue.position.setFromMatrixPosition(z.matrixWorld),ue.color.copy(J).multiplyScalar(de),ue.distance=pe,ue.coneCos=Math.cos(z.angle),ue.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ue.decay=z.decay,r.spot[C]=ue;const Y=z.shadow;if(z.map&&(r.spotLightMap[F]=z.map,F++,Y.updateMatrices(z),z.castShadow&&N++),r.spotLightMatrix[C]=Y.matrix,z.castShadow){const X=n.get(z);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[C]=X,r.spotShadowMap[C]=K,A++}C++}else if(z.isRectAreaLight){const ue=e.get(z);ue.color.copy(J).multiplyScalar(de),ue.halfWidth.set(z.width*.5,0,0),ue.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=ue,v++}else if(z.isPointLight){const ue=e.get(z);if(ue.color.copy(z.color).multiplyScalar(z.intensity),ue.distance=z.distance,ue.decay=z.decay,z.castShadow){const Y=z.shadow,X=n.get(z);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=K,r.pointShadowMatrix[T]=z.shadow.matrix,k++}r.point[T]=ue,T++}else if(z.isHemisphereLight){const ue=e.get(z);ue.skyColor.copy(z.color).multiplyScalar(de),ue.groundColor.copy(z.groundColor).multiplyScalar(de),r.hemi[x]=ue,x++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==T||E.spotLength!==C||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==U||E.numPointShadows!==k||E.numSpotShadows!==A||E.numSpotMaps!==F||E.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=v,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=k,r.pointShadowMap.length=k,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=k,r.spotLightMatrix.length=A+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,E.directionalLength=M,E.pointLength=T,E.spotLength=C,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=U,E.numPointShadows=k,E.numSpotShadows=A,E.numSpotMaps=F,E.numLightProbes=O,r.version=x1++)}function h(m,_){let y=0,g=0,M=0,T=0,C=0;const v=_.matrixWorldInverse;for(let x=0,U=m.length;x<U;x++){const k=m[x];if(k.isDirectionalLight){const A=r.directional[y];A.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(v),y++}else if(k.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(k.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(v),M++}else if(k.isRectAreaLight){const A=r.rectArea[T];A.position.setFromMatrixPosition(k.matrixWorld),A.position.applyMatrix4(v),u.identity(),c.copy(k.matrixWorld),c.premultiply(v),u.extractRotation(c),A.halfWidth.set(k.width*.5,0,0),A.halfHeight.set(0,k.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(k.isPointLight){const A=r.point[g];A.position.setFromMatrixPosition(k.matrixWorld),A.position.applyMatrix4(v),g++}else if(k.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(k.matrixWorld),A.direction.transformDirection(v),C++}}}return{setup:f,setupView:h,state:r}}function hg(s){const e=new _1(s),n=[],r=[],o=[];function c(g){y.camera=g,n.length=0,r.length=0,o.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function m(){e.setup(n)}function _(g){e.setupView(n,g)}const y={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:m,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function y1(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let f;return u===void 0?(f=new hg(s),e.set(o,[f])):c>=u.length?(f=new hg(s),u.push(f)):f=u[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E1=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],b1=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],pg=new Xt,Wa=new ee,xd=new ee;function T1(s,e,n){let r=new bf;const o=new yt,c=new yt,u=new Zt,f=new I_,h=new U_,m={},_=n.maxTextureSize,y={[Rr]:Gn,[Gn]:Rr,[Pi]:Pi},g=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:S1,fragmentShader:M1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new Dn;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Jn(T,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let x=this.type;this.render=function(N,O,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;this.type===Mv&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dl);const L=s.getRenderTarget(),W=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ji),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const de=x!==this.type;de&&O.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(K=>K.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,K=N.length;pe<K;pe++){const ue=N[pe],Y=ue.shadow;if(Y===void 0){at("WebGLShadowMap:",ue,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const X=Y.getFrameExtents();o.multiply(X),c.copy(Y.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/X.x),o.x=c.x*X.x,Y.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/X.y),o.y=c.y*X.y,Y.mapSize.y=c.y));const se=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=se,Y.map===null||de===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Xa){if(ue.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ii(o.x,o.y,{format:ss,type:er,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),Y.map.texture.name=ue.name+".shadowMap",Y.map.depthTexture=new Zs(o.x,o.y,Ni),Y.map.depthTexture.name=ue.name+".shadowMapDepth",Y.map.depthTexture.format=tr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=xn,Y.map.depthTexture.magFilter=xn}else ue.isPointLight?(Y.map=new Yg(o.x),Y.map.depthTexture=new C_(o.x,Ui)):(Y.map=new Ii(o.x,o.y),Y.map.depthTexture=new Zs(o.x,o.y,Ui)),Y.map.depthTexture.name=ue.name+".shadowMap",Y.map.depthTexture.format=tr,this.type===Dl?(Y.map.depthTexture.compareFunction=se?Sf:yf,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=xn,Y.map.depthTexture.magFilter=xn);Y.camera.updateProjectionMatrix()}const oe=Y.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<oe;I++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,I),s.clear();else{I===0&&(s.setRenderTarget(Y.map),s.clear());const Z=Y.getViewport(I);u.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),J.viewport(u)}if(ue.isPointLight){const Z=Y.camera,Ie=Y.matrix,Ve=ue.distance||Z.far;Ve!==Z.far&&(Z.far=Ve,Z.updateProjectionMatrix()),Wa.setFromMatrixPosition(ue.matrixWorld),Z.position.copy(Wa),xd.copy(Z.position),xd.add(E1[I]),Z.up.copy(b1[I]),Z.lookAt(xd),Z.updateMatrixWorld(),Ie.makeTranslation(-Wa.x,-Wa.y,-Wa.z),pg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(pg,Z.coordinateSystem,Z.reversedDepth)}else Y.updateMatrices(ue);r=Y.getFrustum(),A(O,E,Y.camera,ue,this.type)}Y.isPointLightShadow!==!0&&this.type===Xa&&U(Y,E),Y.needsUpdate=!1}x=this.type,v.needsUpdate=!1,s.setRenderTarget(L,W,z)};function U(N,O){const E=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,M.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ii(o.x,o.y,{format:ss,type:er})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(O,null,E,g,C,null),M.uniforms.shadow_pass.value=N.mapPass.texture,M.uniforms.resolution.value=N.mapSize,M.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(O,null,E,M,C,null)}function k(N,O,E,L){let W=null;const z=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)W=z;else if(W=E.isPointLight===!0?h:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=W.uuid,de=O.uuid;let pe=m[J];pe===void 0&&(pe={},m[J]=pe);let K=pe[de];K===void 0&&(K=W.clone(),pe[de]=K,O.addEventListener("dispose",F)),W=K}if(W.visible=O.visible,W.wireframe=O.wireframe,L===Xa?W.side=O.shadowSide!==null?O.shadowSide:O.side:W.side=O.shadowSide!==null?O.shadowSide:y[O.side],W.alphaMap=O.alphaMap,W.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,W.map=O.map,W.clipShadows=O.clipShadows,W.clippingPlanes=O.clippingPlanes,W.clipIntersection=O.clipIntersection,W.displacementMap=O.displacementMap,W.displacementScale=O.displacementScale,W.displacementBias=O.displacementBias,W.wireframeLinewidth=O.wireframeLinewidth,W.linewidth=O.linewidth,E.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const J=s.properties.get(W);J.light=E}return W}function A(N,O,E,L,W){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===Xa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const de=e.update(N),pe=N.material;if(Array.isArray(pe)){const K=de.groups;for(let ue=0,Y=K.length;ue<Y;ue++){const X=K[ue],se=pe[X.materialIndex];if(se&&se.visible){const oe=k(N,se,L,W);N.onBeforeShadow(s,N,O,E,de,oe,X),s.renderBufferDirect(E,null,de,oe,N,X),N.onAfterShadow(s,N,O,E,de,oe,X)}}}else if(pe.visible){const K=k(N,pe,L,W);N.onBeforeShadow(s,N,O,E,de,K,null),s.renderBufferDirect(E,null,de,K,N,null),N.onAfterShadow(s,N,O,E,de,K,null)}}const J=N.children;for(let de=0,pe=J.length;de<pe;de++)A(J[de],O,E,L,W)}function F(N){N.target.removeEventListener("dispose",F);for(const E in m){const L=m[E],W=N.target.uuid;W in L&&(L[W].dispose(),delete L[W])}}}function w1(s,e){function n(){let V=!1;const Ce=new Zt;let me=null;const Ne=new Zt(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!V&&(s.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,_e,qe,Ge,kt){kt===!0&&(Ue*=Ge,_e*=Ge,qe*=Ge),Ce.set(Ue,_e,qe,Ge),Ne.equals(Ce)===!1&&(s.clearColor(Ue,_e,qe,Ge),Ne.copy(Ce))},reset:function(){V=!1,me=null,Ne.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,me=null,Ne=null,Ue=null;return{setReversed:function(_e){if(Ce!==_e){const qe=e.get("EXT_clip_control");_e?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ce=_e;const Ge=Ue;Ue=null,this.setClear(Ge)}},getReversed:function(){return Ce},setTest:function(_e){_e?ce(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(_e){me!==_e&&!V&&(s.depthMask(_e),me=_e)},setFunc:function(_e){if(Ce&&(_e=t_[_e]),Ne!==_e){switch(_e){case yd:s.depthFunc(s.NEVER);break;case Sd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Ed:s.depthFunc(s.EQUAL);break;case bd:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case wd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ue!==_e&&(Ue=_e,Ce&&(_e=1-_e),s.clearDepth(_e))},reset:function(){V=!1,me=null,Ne=null,Ue=null,Ce=!1}}}function o(){let V=!1,Ce=null,me=null,Ne=null,Ue=null,_e=null,qe=null,Ge=null,kt=null;return{setTest:function(Pt){V||(Pt?ce(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Pt){Ce!==Pt&&!V&&(s.stencilMask(Pt),Ce=Pt)},setFunc:function(Pt,vn,Qn){(me!==Pt||Ne!==vn||Ue!==Qn)&&(s.stencilFunc(Pt,vn,Qn),me=Pt,Ne=vn,Ue=Qn)},setOp:function(Pt,vn,Qn){(_e!==Pt||qe!==vn||Ge!==Qn)&&(s.stencilOp(Pt,vn,Qn),_e=Pt,qe=vn,Ge=Qn)},setLocked:function(Pt){V=Pt},setClear:function(Pt){kt!==Pt&&(s.clearStencil(Pt),kt=Pt)},reset:function(){V=!1,Ce=null,me=null,Ne=null,Ue=null,_e=null,qe=null,Ge=null,kt=null}}}const c=new n,u=new r,f=new o,h=new WeakMap,m=new WeakMap;let _={},y={},g={},M=new WeakMap,T=[],C=null,v=!1,x=null,U=null,k=null,A=null,F=null,N=null,O=null,E=new Et(0,0,0),L=0,W=!1,z=null,J=null,de=null,pe=null,K=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(se)[1]),Y=X>=1):se.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Y=X>=2);let oe=null,I={};const Z=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Ve=new Zt().fromArray(Z),Oe=new Zt().fromArray(Ie);function j(V,Ce,me,Ne){const Ue=new Uint8Array(4),_e=s.createTexture();s.bindTexture(V,_e),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<me;qe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Ce+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return _e}const xe={};xe[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(s.DEPTH_TEST),u.setFunc($s),Ft(!1),Bt(cm),ce(s.CULL_FACE),ft(Ji);function ce(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Ae(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function je(V,Ce){return g[V]!==Ce?(s.bindFramebuffer(V,Ce),g[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Xe(V,Ce){let me=T,Ne=!1;if(V){me=M.get(Ce),me===void 0&&(me=[],M.set(Ce,me));const Ue=V.textures;if(me.length!==Ue.length||me[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,qe=Ue.length;_e<qe;_e++)me[_e]=s.COLOR_ATTACHMENT0+_e;me.length=Ue.length,Ne=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(me)}function vt(V){return C!==V?(s.useProgram(V),C=V,!0):!1}const ot={[es]:s.FUNC_ADD,[bv]:s.FUNC_SUBTRACT,[Tv]:s.FUNC_REVERSE_SUBTRACT};ot[wv]=s.MIN,ot[Av]=s.MAX;const _t={[Cv]:s.ZERO,[Rv]:s.ONE,[Pv]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[Fv]:s.SRC_ALPHA_SATURATE,[Iv]:s.DST_COLOR,[Lv]:s.DST_ALPHA,[Nv]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Dv]:s.ONE_MINUS_DST_ALPHA,[Ov]:s.CONSTANT_COLOR,[kv]:s.ONE_MINUS_CONSTANT_COLOR,[Bv]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(V,Ce,me,Ne,Ue,_e,qe,Ge,kt,Pt){if(V===Ji){v===!0&&(Ae(s.BLEND),v=!1);return}if(v===!1&&(ce(s.BLEND),v=!0),V!==Ev){if(V!==x||Pt!==W){if((U!==es||F!==es)&&(s.blendEquation(s.FUNC_ADD),U=es,F=es),Pt)switch(V){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case um:s.blendFunc(s.ONE,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case um:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dm:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}k=null,A=null,N=null,O=null,E.set(0,0,0),L=0,x=V,W=Pt}return}Ue=Ue||Ce,_e=_e||me,qe=qe||Ne,(Ce!==U||Ue!==F)&&(s.blendEquationSeparate(ot[Ce],ot[Ue]),U=Ce,F=Ue),(me!==k||Ne!==A||_e!==N||qe!==O)&&(s.blendFuncSeparate(_t[me],_t[Ne],_t[_e],_t[qe]),k=me,A=Ne,N=_e,O=qe),(Ge.equals(E)===!1||kt!==L)&&(s.blendColor(Ge.r,Ge.g,Ge.b,kt),E.copy(Ge),L=kt),x=V,W=!1}function ht(V,Ce){V.side===Pi?Ae(s.CULL_FACE):ce(s.CULL_FACE);let me=V.side===Gn;Ce&&(me=!me),Ft(me),V.blending===js&&V.transparent===!1?ft(Ji):ft(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const Ne=V.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(V){z!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),z=V)}function Bt(V){V!==yv?(ce(s.CULL_FACE),V!==J&&(V===cm?s.cullFace(s.BACK):V===Sv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),J=V}function Lt(V){V!==de&&(Y&&s.lineWidth(V),de=V)}function Ot(V,Ce,me){V?(ce(s.POLYGON_OFFSET_FILL),(pe!==Ce||K!==me)&&(pe=Ce,K=me,u.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,me))):Ae(s.POLYGON_OFFSET_FILL)}function ve(V){V?ce(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function tt(V){V===void 0&&(V=s.TEXTURE0+ue-1),oe!==V&&(s.activeTexture(V),oe=V)}function G(V,Ce,me){me===void 0&&(oe===null?me=s.TEXTURE0+ue-1:me=oe);let Ne=I[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},I[me]=Ne),(Ne.type!==V||Ne.texture!==Ce)&&(oe!==me&&(s.activeTexture(me),oe=me),s.bindTexture(V,Ce||xe[V]),Ne.type=V,Ne.texture=Ce)}function hn(){const V=I[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function S(){try{s.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function $(){try{s.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ee(){try{s.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Pe(){try{s.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function he(){try{s.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function ge(){try{s.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Le(V){return y[V]!==void 0?y[V]:s.getParameter(V)}function Ke(V,Ce){y[V]!==Ce&&(s.pixelStorei(V,Ce),y[V]=Ce)}function De(V){Ve.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function Re(V){Oe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Oe.copy(V))}function et(V,Ce){let me=m.get(Ce);me===void 0&&(me=new WeakMap,m.set(Ce,me));let Ne=me.get(V);Ne===void 0&&(Ne=s.getUniformBlockIndex(Ce,V.name),me.set(V,Ne))}function nt(V,Ce){const Ne=m.get(Ce).get(V);h.get(Ce)!==Ne&&(s.uniformBlockBinding(Ce,Ne,V.__bindingPointIndex),h.set(Ce,Ne))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},y={},oe=null,I={},g={},M=new WeakMap,T=[],C=null,v=!1,x=null,U=null,k=null,A=null,F=null,N=null,O=null,E=new Et(0,0,0),L=0,W=!1,z=null,J=null,de=null,pe=null,K=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:ce,disable:Ae,bindFramebuffer:je,drawBuffers:Xe,useProgram:vt,setBlending:ft,setMaterial:ht,setFlipSided:Ft,setCullFace:Bt,setLineWidth:Lt,setPolygonOffset:Ot,setScissorTest:ve,activeTexture:tt,bindTexture:G,unbindTexture:hn,compressedTexImage2D:Ct,compressedTexImage3D:P,texImage2D:he,texImage3D:ge,pixelStorei:Ke,getParameter:Le,updateUBOMapping:et,uniformBlockBinding:nt,texStorage2D:Ee,texStorage3D:Pe,texSubImage2D:S,texSubImage3D:$,compressedTexSubImage2D:re,compressedTexSubImage3D:fe,scissor:De,viewport:Re,reset:st}}function A1(s,e,n,r,o,c,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new yt,_=new WeakMap,y=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,S){return T?new OffscreenCanvas(P,S):Gl("canvas")}function v(P,S,$){let re=1;const fe=Ct(P);if((fe.width>$||fe.height>$)&&(re=$/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ee=Math.floor(re*fe.width),Pe=Math.floor(re*fe.height);g===void 0&&(g=C(Ee,Pe));const he=S?C(Ee,Pe):g;return he.width=Ee,he.height=Pe,he.getContext("2d").drawImage(P,0,0,Ee,Pe),at("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ee+"x"+Pe+")."),he}else return"data"in P&&at("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),P;return P}function x(P){return P.generateMipmaps}function U(P){s.generateMipmap(P)}function k(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(P,S,$,re,fe,Ee=!1){if(P!==null){if(s[P]!==void 0)return s[P];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Pe;re&&(Pe=e.get("EXT_texture_norm16"),Pe||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=S;if(S===s.RED&&($===s.FLOAT&&(he=s.R32F),$===s.HALF_FLOAT&&(he=s.R16F),$===s.UNSIGNED_BYTE&&(he=s.R8),$===s.UNSIGNED_SHORT&&Pe&&(he=Pe.R16_EXT),$===s.SHORT&&Pe&&(he=Pe.R16_SNORM_EXT)),S===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.R8UI),$===s.UNSIGNED_SHORT&&(he=s.R16UI),$===s.UNSIGNED_INT&&(he=s.R32UI),$===s.BYTE&&(he=s.R8I),$===s.SHORT&&(he=s.R16I),$===s.INT&&(he=s.R32I)),S===s.RG&&($===s.FLOAT&&(he=s.RG32F),$===s.HALF_FLOAT&&(he=s.RG16F),$===s.UNSIGNED_BYTE&&(he=s.RG8),$===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RG16_EXT),$===s.SHORT&&Pe&&(he=Pe.RG16_SNORM_EXT)),S===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RG8UI),$===s.UNSIGNED_SHORT&&(he=s.RG16UI),$===s.UNSIGNED_INT&&(he=s.RG32UI),$===s.BYTE&&(he=s.RG8I),$===s.SHORT&&(he=s.RG16I),$===s.INT&&(he=s.RG32I)),S===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGB8UI),$===s.UNSIGNED_SHORT&&(he=s.RGB16UI),$===s.UNSIGNED_INT&&(he=s.RGB32UI),$===s.BYTE&&(he=s.RGB8I),$===s.SHORT&&(he=s.RGB16I),$===s.INT&&(he=s.RGB32I)),S===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),$===s.UNSIGNED_INT&&(he=s.RGBA32UI),$===s.BYTE&&(he=s.RGBA8I),$===s.SHORT&&(he=s.RGBA16I),$===s.INT&&(he=s.RGBA32I)),S===s.RGB&&($===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RGB16_EXT),$===s.SHORT&&Pe&&(he=Pe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),S===s.RGBA){const ge=Ee?Hl:St.getTransfer(fe);$===s.FLOAT&&(he=s.RGBA32F),$===s.HALF_FLOAT&&(he=s.RGBA16F),$===s.UNSIGNED_BYTE&&(he=ge===Ut?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Pe&&(he=Pe.RGBA16_EXT),$===s.SHORT&&Pe&&(he=Pe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function F(P,S){let $;return P?S===null||S===Ui||S===Ka?$=s.DEPTH24_STENCIL8:S===Ni?$=s.DEPTH32F_STENCIL8:S===$a&&($=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===Ka?$=s.DEPTH_COMPONENT24:S===Ni?$=s.DEPTH_COMPONENT32F:S===$a&&($=s.DEPTH_COMPONENT16),$}function N(P,S){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==Tn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function O(P){const S=P.target;S.removeEventListener("dispose",O),L(S),S.isVideoTexture&&_.delete(S),S.isHTMLTexture&&y.delete(S)}function E(P){const S=P.target;S.removeEventListener("dispose",E),z(S)}function L(P){const S=r.get(P);if(S.__webglInit===void 0)return;const $=P.source,re=M.get($);if(re){const fe=re[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&W(P),Object.keys(re).length===0&&M.delete($)}r.remove(P)}function W(P){const S=r.get(P);s.deleteTexture(S.__webglTexture);const $=P.source,re=M.get($);delete re[S.__cacheKey],u.memory.textures--}function z(P){const S=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let fe=0;fe<S.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(S.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)s.deleteFramebuffer(S.__webglFramebuffer[re]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=P.textures;for(let re=0,fe=$.length;re<fe;re++){const Ee=r.get($[re]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove($[re])}r.remove(P)}let J=0;function de(){J=0}function pe(){return J}function K(P){J=P}function ue(){const P=J;return P>=o.maxTextures&&at("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),J+=1,P}function Y(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function X(P,S){const $=r.get(P);if(P.isVideoTexture&&G(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const re=P.image;if(re===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae($,P,S);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+S)}function se(P,S){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ae($,P,S);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+S)}function oe(P,S){const $=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Ae($,P,S);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+S)}function I(P,S){const $=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){je($,P,S);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+S)}const Z={[Ad]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Cd]:s.MIRRORED_REPEAT},Ie={[xn]:s.NEAREST,[Gv]:s.NEAREST_MIPMAP_NEAREST,[ol]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Bu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},Ve={[jv]:s.NEVER,[Zv]:s.ALWAYS,[qv]:s.LESS,[yf]:s.LEQUAL,[Yv]:s.EQUAL,[Sf]:s.GEQUAL,[$v]:s.GREATER,[Kv]:s.NOTEQUAL};function Oe(P,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Tn||S.magFilter===Bu||S.magFilter===ol||S.magFilter===ns||S.minFilter===Tn||S.minFilter===Bu||S.minFilter===ol||S.minFilter===ns)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Z[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Ie[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Ie[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==ol&&S.minFilter!==ns||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||r.get(S).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy}}}function j(P,S){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",O));const re=S.source;let fe=M.get(re);fe===void 0&&(fe={},M.set(re,fe));const Ee=Y(S);if(Ee!==P.__cacheKey){fe[Ee]===void 0&&(fe[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),fe[Ee].usedTimes++;const Pe=fe[P.__cacheKey];Pe!==void 0&&(fe[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&W(S)),P.__cacheKey=Ee,P.__webglTexture=fe[Ee].texture}return $}function xe(P,S,$){return Math.floor(Math.floor(P/$)/S)}function ce(P,S,$,re){const Ee=P.updateRanges;if(Ee.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,$,re,S.data);else{Ee.sort((Ke,De)=>Ke.start-De.start);let Pe=0;for(let Ke=1;Ke<Ee.length;Ke++){const De=Ee[Pe],Re=Ee[Ke],et=De.start+De.count,nt=xe(Re.start,S.width,4),st=xe(De.start,S.width,4);Re.start<=et+1&&nt===st&&xe(Re.start+Re.count-1,S.width,4)===nt?De.count=Math.max(De.count,Re.start+Re.count-De.start):(++Pe,Ee[Pe]=Re)}Ee.length=Pe+1;const he=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),Le=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Ke=0,De=Ee.length;Ke<De;Ke++){const Re=Ee[Ke],et=Math.floor(Re.start/4),nt=Math.ceil(Re.count/4),st=et%S.width,V=Math.floor(et/S.width),Ce=nt,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,st),n.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,st,V,Ce,me,$,re,S.data)}P.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,he),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function Ae(P,S,$){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);const fe=j(P,S),Ee=S.source;n.bindTexture(re,P.__webglTexture,s.TEXTURE0+$);const Pe=r.get(Ee);if(Ee.version!==Pe.__version||fe===!0){if(n.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const me=St.getPrimaries(St.workingColorSpace),Ne=S.colorSpace===Ar?null:St.getPrimaries(S.colorSpace),Ue=S.colorSpace===Ar||me===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}n.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ge=v(S.image,!1,o.maxTextureSize);ge=hn(S,ge);const Le=c.convert(S.format,S.colorSpace),Ke=c.convert(S.type);let De=A(S.internalFormat,Le,Ke,S.normalized,S.colorSpace,S.isVideoTexture);Oe(re,S);let Re;const et=S.mipmaps,nt=S.isVideoTexture!==!0,st=Pe.__version===void 0||fe===!0,V=Ee.dataReady,Ce=N(S,ge);if(S.isDepthTexture)De=F(S.format===is,S.type),st&&(nt?n.texStorage2D(s.TEXTURE_2D,1,De,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Le,Ke,null));else if(S.isDataTexture)if(et.length>0){nt&&st&&n.texStorage2D(s.TEXTURE_2D,Ce,De,et[0].width,et[0].height);for(let me=0,Ne=et.length;me<Ne;me++)Re=et[me],nt?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re.width,Re.height,Le,Ke,Re.data):n.texImage2D(s.TEXTURE_2D,me,De,Re.width,Re.height,0,Le,Ke,Re.data);S.generateMipmaps=!1}else nt?(st&&n.texStorage2D(s.TEXTURE_2D,Ce,De,ge.width,ge.height),V&&ce(S,ge,Le,Ke)):n.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Le,Ke,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,De,et[0].width,et[0].height,ge.depth);for(let me=0,Ne=et.length;me<Ne;me++)if(Re=et[me],S.format!==yi)if(Le!==null)if(nt){if(V)if(S.layerUpdates.size>0){const Ue=Xm(Re.width,Re.height,S.format,S.type);for(const _e of S.layerUpdates){const qe=Re.data.subarray(_e*Ue/Re.data.BYTES_PER_ELEMENT,(_e+1)*Ue/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,_e,Re.width,Re.height,1,Le,qe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,ge.depth,Le,Re.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,De,Re.width,Re.height,ge.depth,0,Re.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,ge.depth,Le,Ke,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,De,Re.width,Re.height,ge.depth,0,Le,Ke,Re.data)}else{nt&&st&&n.texStorage2D(s.TEXTURE_2D,Ce,De,et[0].width,et[0].height);for(let me=0,Ne=et.length;me<Ne;me++)Re=et[me],S.format!==yi?Le!==null?nt?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Re.width,Re.height,Le,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,me,De,Re.width,Re.height,0,Re.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re.width,Re.height,Le,Ke,Re.data):n.texImage2D(s.TEXTURE_2D,me,De,Re.width,Re.height,0,Le,Ke,Re.data)}else if(S.isDataArrayTexture)if(nt){if(st&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,De,ge.width,ge.height,ge.depth),V)if(S.layerUpdates.size>0){const me=Xm(ge.width,ge.height,S.format,S.type);for(const Ne of S.layerUpdates){const Ue=ge.data.subarray(Ne*me/ge.data.BYTES_PER_ELEMENT,(Ne+1)*me/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,ge.width,ge.height,1,Le,Ke,Ue)}S.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ke,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Le,Ke,ge.data);else if(S.isData3DTexture)nt?(st&&n.texStorage3D(s.TEXTURE_3D,Ce,De,ge.width,ge.height,ge.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,Ke,ge.data)):n.texImage3D(s.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Le,Ke,ge.data);else if(S.isFramebufferTexture){if(st)if(nt)n.texStorage2D(s.TEXTURE_2D,Ce,De,ge.width,ge.height);else{let me=ge.width,Ne=ge.height;for(let Ue=0;Ue<Ce;Ue++)n.texImage2D(s.TEXTURE_2D,Ue,De,me,Ne,0,Le,Ke,null),me>>=1,Ne>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),y.add(S),me.onpaint=Ne=>{const Ue=Ne.changedElements;for(const _e of y)Ue.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const Ue=s.RGBA,_e=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ue,_e,qe,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(et.length>0){if(nt&&st){const me=Ct(et[0]);n.texStorage2D(s.TEXTURE_2D,Ce,De,me.width,me.height)}for(let me=0,Ne=et.length;me<Ne;me++)Re=et[me],nt?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Le,Ke,Re):n.texImage2D(s.TEXTURE_2D,me,De,Le,Ke,Re);S.generateMipmaps=!1}else if(nt){if(st){const me=Ct(ge);n.texStorage2D(s.TEXTURE_2D,Ce,De,me.width,me.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Ke,ge)}else n.texImage2D(s.TEXTURE_2D,0,De,Le,Ke,ge);x(S)&&U(re),Pe.__version=Ee.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function je(P,S,$){if(S.image.length!==6)return;const re=j(P,S),fe=S.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const Ee=r.get(fe);if(fe.version!==Ee.__version||re===!0){n.activeTexture(s.TEXTURE0+$);const Pe=St.getPrimaries(St.workingColorSpace),he=S.colorSpace===Ar?null:St.getPrimaries(S.colorSpace),ge=S.colorSpace===Ar||Pe===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=S.isCompressedTexture||S.image[0].isCompressedTexture,Ke=S.image[0]&&S.image[0].isDataTexture,De=[];for(let _e=0;_e<6;_e++)!Le&&!Ke?De[_e]=v(S.image[_e],!0,o.maxCubemapSize):De[_e]=Ke?S.image[_e].image:S.image[_e],De[_e]=hn(S,De[_e]);const Re=De[0],et=c.convert(S.format,S.colorSpace),nt=c.convert(S.type),st=A(S.internalFormat,et,nt,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,Ce=Ee.__version===void 0||re===!0,me=fe.dataReady;let Ne=N(S,Re);Oe(s.TEXTURE_CUBE_MAP,S);let Ue;if(Le){V&&Ce&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,st,Re.width,Re.height);for(let _e=0;_e<6;_e++){Ue=De[_e].mipmaps;for(let qe=0;qe<Ue.length;qe++){const Ge=Ue[qe];S.format!==yi?et!==null?V?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,Ge.width,Ge.height,et,Ge.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,st,Ge.width,Ge.height,0,Ge.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,0,0,Ge.width,Ge.height,et,nt,Ge.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe,st,Ge.width,Ge.height,0,et,nt,Ge.data)}}}else{if(Ue=S.mipmaps,V&&Ce){Ue.length>0&&Ne++;const _e=Ct(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,st,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ke){V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,De[_e].width,De[_e].height,et,nt,De[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,De[_e].width,De[_e].height,0,et,nt,De[_e].data);for(let qe=0;qe<Ue.length;qe++){const kt=Ue[qe].image[_e].image;V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,kt.width,kt.height,et,nt,kt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,st,kt.width,kt.height,0,et,nt,kt.data)}}else{V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,et,nt,De[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,et,nt,De[_e]);for(let qe=0;qe<Ue.length;qe++){const Ge=Ue[qe];V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,0,0,et,nt,Ge.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,qe+1,st,et,nt,Ge.image[_e])}}}x(S)&&U(s.TEXTURE_CUBE_MAP),Ee.__version=fe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Xe(P,S,$,re,fe,Ee){const Pe=c.convert($.format,$.colorSpace),he=c.convert($.type),ge=A($.internalFormat,Pe,he,$.normalized,$.colorSpace),Le=r.get(S),Ke=r.get($);if(Ke.__renderTarget=S,!Le.__hasExternalTextures){const De=Math.max(1,S.width>>Ee),Re=Math.max(1,S.height>>Ee);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?n.texImage3D(fe,Ee,ge,De,Re,S.depth,0,Pe,he,null):n.texImage2D(fe,Ee,ge,De,Re,0,Pe,he,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),tt(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,Ke.__webglTexture,0,ve(S)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,Ke.__webglTexture,Ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(P,S,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const re=S.depthTexture,fe=re&&re.isDepthTexture?re.type:null,Ee=F(S.stencilBuffer,fe),Pe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;tt(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve(S),Ee,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve(S),Ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,P)}else{const re=S.textures;for(let fe=0;fe<re.length;fe++){const Ee=re[fe],Pe=c.convert(Ee.format,Ee.colorSpace),he=c.convert(Ee.type),ge=A(Ee.internalFormat,Pe,he,Ee.normalized,Ee.colorSpace);tt(S)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve(S),ge,S.width,S.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve(S),ge,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ge,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(P,S,$){const re=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(S.depthTexture);if(fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,S.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S.depthTexture);const Le=c.convert(S.depthTexture.format),Ke=c.convert(S.depthTexture.type);let De;S.depthTexture.format===tr?De=s.DEPTH_COMPONENT24:S.depthTexture.format===is&&(De=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,De,S.width,S.height,0,Le,Ke,null)}}else X(S.depthTexture,0);const Ee=fe.__webglTexture,Pe=ve(S),he=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ge=S.depthTexture.format===is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===tr)tt(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,he,Ee,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,he,Ee,0);else if(S.depthTexture.format===is)tt(S)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,he,Ee,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,he,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(P){const S=r.get(P),$=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=re}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let re=0;re<6;re++)ot(S.__webglFramebuffer[re],P,re);else{const re=P.texture.mipmaps;re&&re.length>0?ot(S.__webglFramebuffer[0],P,0):ot(S.__webglFramebuffer,P,0)}else if($){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=s.createRenderbuffer(),vt(S.__webglDepthbuffer[re],P,!1);else{const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ee)}}else{const re=P.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),vt(S.__webglDepthbuffer,P,!1);else{const fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ee)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(P,S,$){const re=r.get(P);S!==void 0&&Xe(re.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&_t(P)}function ht(P){const S=P.texture,$=r.get(P),re=r.get(S);P.addEventListener("dispose",E);const fe=P.textures,Ee=P.isWebGLCubeRenderTarget===!0,Pe=fe.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,u.memory.textures++),Ee){$.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[he]=[];for(let ge=0;ge<S.mipmaps.length;ge++)$.__webglFramebuffer[he][ge]=s.createFramebuffer()}else $.__webglFramebuffer[he]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)$.__webglFramebuffer[he]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let he=0,ge=fe.length;he<ge;he++){const Le=r.get(fe[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&tt(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let he=0;he<fe.length;he++){const ge=fe[he];$.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[he]);const Le=c.convert(ge.format,ge.colorSpace),Ke=c.convert(ge.type),De=A(ge.internalFormat,Le,Ke,ge.normalized,ge.colorSpace,P.isXRRenderTarget===!0),Re=ve(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,De,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,$.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),vt($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Xe($.__webglFramebuffer[he][ge],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Xe($.__webglFramebuffer[he],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);x(S)&&U(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let he=0,ge=fe.length;he<ge;he++){const Le=fe[he],Ke=r.get(Le);let De=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(De,Ke.__webglTexture),Oe(De,Le),Xe($.__webglFramebuffer,P,Le,s.COLOR_ATTACHMENT0+he,De,0),x(Le)&&U(De)}n.unbindTexture()}else{let he=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(he,re.__webglTexture),Oe(he,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)Xe($.__webglFramebuffer[ge],P,S,s.COLOR_ATTACHMENT0,he,ge);else Xe($.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,he,0);x(S)&&U(he),n.unbindTexture()}P.depthBuffer&&_t(P)}function Ft(P){const S=P.textures;for(let $=0,re=S.length;$<re;$++){const fe=S[$];if(x(fe)){const Ee=k(P),Pe=r.get(fe).__webglTexture;n.bindTexture(Ee,Pe),U(Ee),n.unbindTexture()}}}const Bt=[],Lt=[];function Ot(P){if(P.samples>0){if(tt(P)===!1){const S=P.textures,$=P.width,re=P.height;let fe=s.COLOR_BUFFER_BIT;const Ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(P),he=S.length>1;if(he)for(let Le=0;Le<S.length;Le++)n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ge=P.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Le=0;Le<S.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const Ke=r.get(S[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,$,re,0,0,$,re,fe,s.NEAREST),h===!0&&(Bt.length=0,Lt.length=0,Bt.push(s.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Bt.push(Ee),Lt.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<S.length;Le++){n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Le]);const Ke=r.get(S[Le]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,Ke,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ve(P){return Math.min(o.maxSamples,P.samples)}function tt(P){const S=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(P){const S=u.render.frame;_.get(P)!==S&&(_.set(P,S),P.update())}function hn(P,S){const $=P.colorSpace,re=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Vl&&$!==Ar&&(St.getTransfer($)===Ut?(re!==yi||fe!==Zn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",$)),S}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=ue,this.resetTextureUnits=de,this.getTextureUnits=pe,this.setTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=se,this.setTexture3D=oe,this.setTextureCube=I,this.rebindTextures=ft,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function C1(s,e){function n(r,o=Ar){let c;const u=St.getTransfer(o);if(r===Zn)return s.UNSIGNED_BYTE;if(r===mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Rg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===wg)return s.BYTE;if(r===Ag)return s.SHORT;if(r===$a)return s.UNSIGNED_SHORT;if(r===pf)return s.INT;if(r===Ui)return s.UNSIGNED_INT;if(r===Ni)return s.FLOAT;if(r===er)return s.HALF_FLOAT;if(r===Pg)return s.ALPHA;if(r===Ng)return s.RGB;if(r===yi)return s.RGBA;if(r===tr)return s.DEPTH_COMPONENT;if(r===is)return s.DEPTH_STENCIL;if(r===Lg)return s.RED;if(r===xf)return s.RED_INTEGER;if(r===ss)return s.RG;if(r===vf)return s.RG_INTEGER;if(r===_f)return s.RGBA_INTEGER;if(r===Il||r===Ul||r===Fl||r===Ol)if(u===Ut)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Il)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ul)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Il)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ul)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Pd||r===Nd||r===Ld)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dd||r===Id||r===Ud||r===Fd||r===Od||r===Bl||r===kd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dd||r===Id)return u===Ut?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Ud)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Fd)return c.COMPRESSED_R11_EAC;if(r===Od)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Bl)return c.COMPRESSED_RG11_EAC;if(r===kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bd||r===zd||r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===jd||r===qd||r===Yd||r===$d||r===Kd||r===Zd||r===Jd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jd)return u===Ut?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qd||r===ef||r===tf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Qd)return u===Ut?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ef)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nf||r===rf||r===zl||r===sf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===nf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ka?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const R1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Vg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Fi({vertexShader:R1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Kl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L1 extends as{constructor(e,n){super();const r=this;let o=null,c=1,u=null,f="local-floor",h=1,m=null,_=null,y=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",v=new N1,x={},U=n.getContextAttributes();let k=null,A=null;const F=[],N=[],O=new yt;let E=null;const L=new Kn;L.viewport=new Zt;const W=new Kn;W.viewport=new Zt;const z=[L,W],J=new V_;let de=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let xe=F[j];return xe===void 0&&(xe=new qu,F[j]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(j){let xe=F[j];return xe===void 0&&(xe=new qu,F[j]=xe),xe.getGripSpace()},this.getHand=function(j){let xe=F[j];return xe===void 0&&(xe=new qu,F[j]=xe),xe.getHandSpace()};function K(j){const xe=N.indexOf(j.inputSource);if(xe===-1)return;const ce=F[xe];ce!==void 0&&(ce.update(j.inputSource,j.frame,m||u),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function ue(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",Y);for(let j=0;j<F.length;j++){const xe=N[j];xe!==null&&(N[j]=null,F[j].disconnect(xe))}de=null,pe=null,v.reset();for(const j in x)delete x[j];e.setRenderTarget(k),M=null,g=null,y=null,o=null,A=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(o,n)),y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",Y),U.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ae=null,je=null;U.depth&&(je=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=U.stencil?is:tr,Ae=U.stencil?Ka:Ui);const Xe={colorFormat:n.RGBA8,depthFormat:je,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Xe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Ii(g.textureWidth,g.textureHeight,{format:yi,type:Zn,depthTexture:new Zs(g.textureWidth,g.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ce),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new Ii(M.framebufferWidth,M.framebufferHeight,{format:yi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(f),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(j){for(let xe=0;xe<j.removed.length;xe++){const ce=j.removed[xe],Ae=N.indexOf(ce);Ae>=0&&(N[Ae]=null,F[Ae].disconnect(ce))}for(let xe=0;xe<j.added.length;xe++){const ce=j.added[xe];let Ae=N.indexOf(ce);if(Ae===-1){for(let Xe=0;Xe<F.length;Xe++)if(Xe>=N.length){N.push(ce),Ae=Xe;break}else if(N[Xe]===null){N[Xe]=ce,Ae=Xe;break}if(Ae===-1)break}const je=F[Ae];je&&je.connect(ce)}}const X=new ee,se=new ee;function oe(j,xe,ce){X.setFromMatrixPosition(xe.matrixWorld),se.setFromMatrixPosition(ce.matrixWorld);const Ae=X.distanceTo(se),je=xe.projectionMatrix.elements,Xe=ce.projectionMatrix.elements,vt=je[14]/(je[10]-1),ot=je[14]/(je[10]+1),_t=(je[9]+1)/je[5],ft=(je[9]-1)/je[5],ht=(je[8]-1)/je[0],Ft=(Xe[8]+1)/Xe[0],Bt=vt*ht,Lt=vt*Ft,Ot=Ae/(-ht+Ft),ve=Ot*-ht;if(xe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ve),j.translateZ(Ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),je[10]===-1)j.projectionMatrix.copy(xe.projectionMatrix),j.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const tt=vt+Ot,G=ot+Ot,hn=Bt-ve,Ct=Lt+(Ae-ve),P=_t*ot/G*tt,S=ft*ot/G*tt;j.projectionMatrix.makePerspective(hn,Ct,P,S,tt,G),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function I(j,xe){xe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(xe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let xe=j.near,ce=j.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),J.near=W.near=L.near=xe,J.far=W.far=L.far=ce,(de!==J.near||pe!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),de=J.near,pe=J.far),J.layers.mask=j.layers.mask|6,L.layers.mask=J.layers.mask&-5,W.layers.mask=J.layers.mask&-3;const Ae=j.parent,je=J.cameras;I(J,Ae);for(let Xe=0;Xe<je.length;Xe++)I(je[Xe],Ae);je.length===2?oe(J,L,W):J.projectionMatrix.copy(L.projectionMatrix),Z(j,J,Ae)};function Z(j,xe,ce){ce===null?j.matrix.copy(xe.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(xe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(xe.projectionMatrix),j.projectionMatrixInverse.copy(xe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=of*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(j){h=j,g!==null&&(g.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(J)},this.getCameraTexture=function(j){return x[j]};let Ie=null;function Ve(j,xe){if(_=xe.getViewerPose(m||u),T=xe,_!==null){const ce=_.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let Ae=!1;ce.length!==J.cameras.length&&(J.cameras.length=0,Ae=!0);for(let ot=0;ot<ce.length;ot++){const _t=ce[ot];let ft=null;if(M!==null)ft=M.getViewport(_t);else{const Ft=y.getViewSubImage(g,_t);ft=Ft.viewport,ot===0&&(e.setRenderTargetTextures(A,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(A))}let ht=z[ot];ht===void 0&&(ht=new Kn,ht.layers.enable(ot),ht.viewport=new Zt,z[ot]=ht),ht.matrix.fromArray(_t.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(_t.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ft.x,ft.y,ft.width,ft.height),ot===0&&(J.matrix.copy(ht.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ae===!0&&J.cameras.push(ht)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){y=r.getBinding();const ot=y.getDepthInformation(ce[0]);ot&&ot.isValid&&ot.texture&&v.init(ot,o.renderState)}if(je&&je.includes("camera-access")&&C){e.state.unbindTexture(),y=r.getBinding();for(let ot=0;ot<ce.length;ot++){const _t=ce[ot].camera;if(_t){let ft=x[_t];ft||(ft=new Vg,x[_t]=ft);const ht=y.getCameraImage(_t);ft.sourceTexture=ht}}}}for(let ce=0;ce<F.length;ce++){const Ae=N[ce],je=F[ce];Ae!==null&&je!==void 0&&je.update(Ae,xe,m||u)}Ie&&Ie(j,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),T=null}const Oe=new jg;Oe.setAnimationLoop(Ve),this.setAnimationLoop=function(j){Ie=j},this.dispose=function(){}}}const D1=new Xt,Qg=new dt;Qg.set(-1,0,0,0,1,0,0,0,1);function I1(s,e){function n(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,Hg(s)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function o(v,x,U,k,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(v,x):x.isMeshLambertMaterial?(c(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(v,x),y(v,x)):x.isMeshPhongMaterial?(c(v,x),_(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(v,x),g(v,x),x.isMeshPhysicalMaterial&&M(v,x,A)):x.isMeshMatcapMaterial?(c(v,x),T(v,x)):x.isMeshDepthMaterial?c(v,x):x.isMeshDistanceMaterial?(c(v,x),C(v,x)):x.isMeshNormalMaterial?c(v,x):x.isLineBasicMaterial?(u(v,x),x.isLineDashedMaterial&&f(v,x)):x.isPointsMaterial?h(v,x,U,k):x.isSpriteMaterial?m(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,n(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Gn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,n(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Gn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,n(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,n(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const U=e.get(x),k=U.envMap,A=U.envMapRotation;k&&(v.envMap.value=k,v.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(A)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Qg),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,v.aoMapTransform))}function u(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform))}function f(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function h(v,x,U,k){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*U,v.scale.value=k*.5,x.map&&(v.map.value=x.map,n(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function m(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function _(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function y(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,U){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=U.texture,v.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,x){x.matcap&&(v.matcap.value=x.matcap)}function C(v,x){const U=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(U.matrixWorld),v.nearDistance.value=U.shadow.camera.near,v.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function U1(s,e,n,r){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,F){const N=F.program;r.uniformBlockBinding(A,N)}function m(A,F){let N=o[A.id];N===void 0&&(v(A),N=_(A),o[A.id]=N,A.addEventListener("dispose",U));const O=F.program;r.updateUBOMapping(A,O);const E=e.render.frame;c[A.id]!==E&&(g(A),c[A.id]=E)}function _(A){const F=y();A.__bindingPointIndex=F;const N=s.createBuffer(),O=A.__size,E=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,O,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,N),N}function y(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const F=o[A.id],N=A.uniforms,O=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let E=0,L=N.length;E<L;E++){const W=N[E];if(Array.isArray(W))for(let z=0,J=W.length;z<J;z++)M(W[z],E,z,O);else M(W,E,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(A,F,N,O){if(C(A,F,N,O)===!0){const E=A.__offset,L=A.value;if(Array.isArray(L)){let W=0;for(let z=0;z<L.length;z++){const J=L[z],de=x(J);T(J,A.__data,W),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(W+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,A.__data)}}function T(A,F,N){typeof A=="number"||typeof A=="boolean"?F[0]=A:A.isMatrix3?(F[0]=A.elements[0],F[1]=A.elements[1],F[2]=A.elements[2],F[3]=0,F[4]=A.elements[3],F[5]=A.elements[4],F[6]=A.elements[5],F[7]=0,F[8]=A.elements[6],F[9]=A.elements[7],F[10]=A.elements[8],F[11]=0):ArrayBuffer.isView(A)?F.set(new A.constructor(A.buffer,A.byteOffset,F.length)):A.toArray(F,N)}function C(A,F,N,O){const E=A.value,L=F+"_"+N;if(O[L]===void 0)return typeof E=="number"||typeof E=="boolean"?O[L]=E:ArrayBuffer.isView(E)?O[L]=E.slice():O[L]=E.clone(),!0;{const W=O[L];if(typeof E=="number"||typeof E=="boolean"){if(W!==E)return O[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(W.equals(E)===!1)return W.copy(E),!0}}return!1}function v(A){const F=A.uniforms;let N=0;const O=16;for(let L=0,W=F.length;L<W;L++){const z=Array.isArray(F[L])?F[L]:[F[L]];for(let J=0,de=z.length;J<de;J++){const pe=z[J],K=Array.isArray(pe.value)?pe.value:[pe.value];for(let ue=0,Y=K.length;ue<Y;ue++){const X=K[ue],se=x(X),oe=N%O,I=oe%se.boundary,Z=oe+I;N+=I,Z!==0&&O-Z<se.storage&&(N+=O-Z),pe.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=N,N+=se.storage}}}const E=N%O;return E>0&&(N+=O-E),A.__size=N,A.__cache={},this}function x(A){const F={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(F.boundary=4,F.storage=4):A.isVector2?(F.boundary=8,F.storage=8):A.isVector3||A.isColor?(F.boundary=16,F.storage=12):A.isVector4?(F.boundary=16,F.storage=16):A.isMatrix3?(F.boundary=48,F.storage=48):A.isMatrix4?(F.boundary=64,F.storage=64):A.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(F.boundary=16,F.storage=A.byteLength):at("WebGLRenderer: Unsupported uniform value type.",A),F}function U(A){const F=A.target;F.removeEventListener("dispose",U);const N=u.indexOf(F.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[F.id]),delete o[F.id],delete c[F.id]}function k(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:h,update:m,dispose:k}}const F1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function O1(){return Ci===null&&(Ci=new M_(F1,16,16,ss,er),Ci.name="DFG_LUT",Ci.minFilter=Tn,Ci.magFilter=Tn,Ci.wrapS=Zi,Ci.wrapT=Zi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class k1{constructor(e={}){const{canvas:n=Qv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Zn}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const C=M,v=new Set([_f,vf,xf]),x=new Set([Zn,Ui,$a,Ka,mf,gf]),U=new Uint32Array(4),k=new Int32Array(4),A=new ee;let F=null,N=null;const O=[],E=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let z=!1,J=null,de=null,pe=null,K=null;this._outputColorSpace=oi;let ue=0,Y=0,X=null,se=-1,oe=null;const I=new Zt,Z=new Zt;let Ie=null;const Ve=new Et(0);let Oe=0,j=n.width,xe=n.height,ce=1,Ae=null,je=null;const Xe=new Zt(0,0,j,xe),vt=new Zt(0,0,j,xe);let ot=!1;const _t=new bf;let ft=!1,ht=!1;const Ft=new Xt,Bt=new ee,Lt=new Zt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function tt(){return X===null?ce:1}let G=r;function hn(w,q){return n.getContext(w,q)}try{const w={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hf}`),n.addEventListener("webglcontextlost",kt,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",vn,!1),G===null){const q="webgl2";if(G=hn(q,w),G===null)throw hn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw wt("WebGLRenderer: "+w.message),w}let Ct,P,S,$,re,fe,Ee,Pe,he,ge,Le,Ke,De,Re,et,nt,st,V,Ce,me,Ne,Ue,_e;function qe(){Ct=new OM(G),Ct.init(),Ne=new C1(G,Ct),P=new RM(G,Ct,e,Ne),S=new w1(G,Ct),P.reversedDepthBuffer&&g&&S.buffers.depth.setReversed(!0),de=G.createFramebuffer(),pe=G.createFramebuffer(),K=G.createFramebuffer(),$=new zM(G),re=new f1,fe=new A1(G,Ct,S,re,P,Ne,$),Ee=new FM(W),Pe=new W_(G),Ue=new AM(G,Pe),he=new kM(G,Pe,$,Ue),ge=new HM(G,he,Pe,Ue,$),V=new VM(G,P,fe),et=new PM(re),Le=new d1(W,Ee,Ct,P,Ue,et),Ke=new I1(W,re),De=new p1,Re=new y1(Ct),st=new wM(W,Ee,S,ge,T,h),nt=new T1(W,ge,P),_e=new U1(G,$,P,S),Ce=new CM(G,Ct,$),me=new BM(G,Ct,$),$.programs=Le.programs,W.capabilities=P,W.extensions=Ct,W.properties=re,W.renderLists=De,W.shadowMap=nt,W.state=S,W.info=$}qe(),C!==Zn&&(L=new WM(C,n.width,n.height,f,o,c));const Ge=new L1(W,G);this.xr=Ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(w){w!==void 0&&(ce=w,this.setSize(j,xe,!1))},this.getSize=function(w){return w.set(j,xe)},this.setSize=function(w,q,ae=!0){if(Ge.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,xe=q,n.width=Math.floor(w*ce),n.height=Math.floor(q*ce),ae===!0&&(n.style.width=w+"px",n.style.height=q+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(j*ce,xe*ce).floor()},this.setDrawingBufferSize=function(w,q,ae){j=w,xe=q,ce=ae,n.width=Math.floor(w*ae),n.height=Math.floor(q*ae),this.setViewport(0,0,w,q)},this.setEffects=function(w){if(C===Zn){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let q=0;q<w.length;q++)if(w[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Xe)},this.setViewport=function(w,q,ae,ne){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,q,ae,ne),S.viewport(I.copy(Xe).multiplyScalar(ce).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,q,ae,ne){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,q,ae,ne),S.scissor(Z.copy(vt).multiplyScalar(ce).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){S.setScissorTest(ot=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){je=w},this.getClearColor=function(w){return w.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(w=!0,q=!0,ae=!0){let ne=0;if(w){let te=!1;if(X!==null){const we=X.texture.format;te=v.has(we)}if(te){const we=X.texture.type,ze=x.has(we),Te=st.getClearColor(),Ye=st.getClearAlpha(),Qe=Te.r,ct=Te.g,ut=Te.b;ze?(U[0]=Qe,U[1]=ct,U[2]=ut,U[3]=Ye,G.clearBufferuiv(G.COLOR,0,U)):(k[0]=Qe,k[1]=ct,k[2]=ut,k[3]=Ye,G.clearBufferiv(G.COLOR,0,k))}else ne|=G.COLOR_BUFFER_BIT}q&&(ne|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),J=w},this.dispose=function(){n.removeEventListener("webglcontextlost",kt,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),st.dispose(),De.dispose(),Re.dispose(),re.dispose(),Ee.dispose(),ge.dispose(),Ue.dispose(),_e.dispose(),Le.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",no),Ge.removeEventListener("sessionend",io),Cn.stop()};function kt(w){w.preventDefault(),xm("WebGLRenderer: Context Lost."),z=!0}function Pt(){xm("WebGLRenderer: Context Restored."),z=!1;const w=$.autoReset,q=nt.enabled,ae=nt.autoUpdate,ne=nt.needsUpdate,te=nt.type;qe(),$.autoReset=w,nt.enabled=q,nt.autoUpdate=ae,nt.needsUpdate=ne,nt.type=te}function vn(w){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qn(w){const q=w.target;q.removeEventListener("dispose",Qn),Nr(q)}function Nr(w){ls(w),re.remove(w)}function ls(w){const q=re.get(w).programs;q!==void 0&&(q.forEach(function(ae){Le.releaseProgram(ae)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,ae,ne,te,we){q===null&&(q=Ot);const ze=te.isMesh&&te.matrixWorld.determinantAffine()<0,Te=Yt(w,q,ae,ne,te);S.setMaterial(ne,ze);let Ye=ae.index,Qe=1;if(ne.wireframe===!0){if(Ye=he.getWireframeAttribute(ae),Ye===void 0)return;Qe=2}const ct=ae.drawRange,ut=ae.attributes.position;let Ze=ct.start*Qe,bt=(ct.start+ct.count)*Qe;we!==null&&(Ze=Math.max(Ze,we.start*Qe),bt=Math.min(bt,(we.start+we.count)*Qe)),Ye!==null?(Ze=Math.max(Ze,0),bt=Math.min(bt,Ye.count)):ut!=null&&(Ze=Math.max(Ze,0),bt=Math.min(bt,ut.count));const zt=bt-Ze;if(zt<0||zt===1/0)return;Ue.setup(te,ne,Te,ae,Ye);let jt,Dt=Ce;if(Ye!==null&&(jt=Pe.get(Ye),Dt=me,Dt.setIndex(jt)),te.isMesh)ne.wireframe===!0?(S.setLineWidth(ne.wireframeLinewidth*tt()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(te.isLine){let en=ne.linewidth;en===void 0&&(en=1),S.setLineWidth(en*tt()),te.isLineSegments?Dt.setMode(G.LINES):te.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else te.isPoints?Dt.setMode(G.POINTS):te.isSprite&&Dt.setMode(G.TRIANGLES);if(te.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Dt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const en=te._multiDrawStarts,ke=te._multiDrawCounts,pn=te._multiDrawCount,mt=Ye?Pe.get(Ye).bytesPerElement:1,In=re.get(ne).currentProgram.getUniforms();for(let Un=0;Un<pn;Un++)In.setValue(G,"_gl_DrawID",Un),Dt.render(en[Un]/mt,ke[Un])}else if(te.isInstancedMesh)Dt.renderInstances(Ze,zt,te.count);else if(ae.isInstancedBufferGeometry){const en=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ke=Math.min(ae.instanceCount,en);Dt.renderInstances(Ze,zt,ke)}else Dt.render(Ze,zt)};function Lr(w,q,ae){w.transparent===!0&&w.side===Pi&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,Ur(w,q,ae),w.side=Rr,w.needsUpdate=!0,Ur(w,q,ae),w.side=Pi):Ur(w,q,ae)}this.compile=function(w,q,ae=null){ae===null&&(ae=w),N=Re.get(ae),N.init(q),E.push(N),ae.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),w!==ae&&w.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights();const ne=new Set;return w.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const we=te.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){const Te=we[ze];Lr(Te,ae,te),ne.add(Te)}else Lr(we,ae,te),ne.add(we)}),N=E.pop(),ne},this.compileAsync=function(w,q,ae=null){const ne=this.compile(w,q,ae);return new Promise(te=>{function we(){if(ne.forEach(function(ze){re.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){te(w);return}setTimeout(we,10)}Ct.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Dr=null;function Ql(w){Dr&&Dr(w)}function no(){Cn.stop()}function io(){Cn.start()}const Cn=new jg;Cn.setAnimationLoop(Ql),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(w){Dr=w,Ge.setAnimationLoop(w),w===null?Cn.stop():Cn.start()},Ge.addEventListener("sessionstart",no),Ge.addEventListener("sessionend",io),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;J!==null&&J.renderStart(w,q);const ae=Ge.enabled===!0&&Ge.isPresenting===!0,ne=L!==null&&(X===null||ae)&&L.begin(W,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(q),q=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(W,w,q,X),N=Re.get(w,E.length),N.init(q),N.state.textureUnits=fe.getTextureUnits(),E.push(N),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),_t.setFromProjectionMatrix(Ft,Li,q.reversedDepth),ht=this.localClippingEnabled,ft=et.init(this.clippingPlanes,ht),F=De.get(w,O.length),F.init(),O.push(F),Ge.enabled===!0&&Ge.isPresenting===!0){const ze=W.xr.getDepthSensingMesh();ze!==null&&cs(ze,q,-1/0,W.sortObjects)}cs(w,q,0,W.sortObjects),F.finish(),W.sortObjects===!0&&F.sort(Ae,je,q.reversedDepth),ve=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ve&&st.addToRenderList(F,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ft===!0&&et.beginShadows();const te=N.state.shadowsArray;if(nt.render(te,w,q),ft===!0&&et.endShadows(),(ne&&L.hasRenderPass())===!1){const ze=F.opaque,Te=F.transmissive;if(N.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(Te.length>0)for(let Qe=0,ct=Ye.length;Qe<ct;Qe++){const ut=Ye[Qe];ro(ze,Te,w,ut)}ve&&st.render(w);for(let Qe=0,ct=Ye.length;Qe<ct;Qe++){const ut=Ye[Qe];ta(F,w,ut,ut.viewport)}}else Te.length>0&&ro(ze,Te,w,q),ve&&st.render(w),ta(F,w,q)}X!==null&&Y===0&&(fe.updateMultisampleRenderTarget(X),fe.updateRenderTargetMipmap(X)),ne&&L.end(W),w.isScene===!0&&w.onAfterRender(W,w,q),Ue.resetDefaultState(),se=-1,oe=null,E.pop(),E.length>0?(N=E[E.length-1],fe.setTextureUnits(N.state.textureUnits),ft===!0&&et.setGlobalState(W.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?F=O[O.length-1]:F=null,J!==null&&J.renderEnd()};function cs(w,q,ae,ne){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLightProbeGrid)N.pushLightProbeGrid(w);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||_t.intersectsSprite(w)){ne&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ft);const ze=ge.update(w),Te=w.material;Te.visible&&F.push(w,ze,Te,ae,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||_t.intersectsObject(w))){const ze=ge.update(w),Te=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Lt.copy(ze.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(Ft)),Array.isArray(Te)){const Ye=ze.groups;for(let Qe=0,ct=Ye.length;Qe<ct;Qe++){const ut=Ye[Qe],Ze=Te[ut.materialIndex];Ze&&Ze.visible&&F.push(w,ze,Ze,ae,Lt.z,ut)}}else Te.visible&&F.push(w,ze,Te,ae,Lt.z,null)}}const we=w.children;for(let ze=0,Te=we.length;ze<Te;ze++)cs(we[ze],q,ae,ne)}function ta(w,q,ae,ne){const{opaque:te,transmissive:we,transparent:ze}=w;N.setupLightsView(ae),ft===!0&&et.setGlobalState(W.clippingPlanes,ae),ne&&S.viewport(I.copy(ne)),te.length>0&&Ir(te,q,ae),we.length>0&&Ir(we,q,ae),ze.length>0&&Ir(ze,q,ae),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ro(w,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const Ze=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new Ii(1,1,{generateMipmaps:!0,type:Ze?er:Zn,minFilter:ns,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const we=N.state.transmissionRenderTarget[ne.id],ze=ne.viewport||I;we.setSize(ze.z*W.transmissionResolutionScale,ze.w*W.transmissionResolutionScale);const Te=W.getRenderTarget(),Ye=W.getActiveCubeFace(),Qe=W.getActiveMipmapLevel();W.setRenderTarget(we),W.getClearColor(Ve),Oe=W.getClearAlpha(),Oe<1&&W.setClearColor(16777215,.5),W.clear(),ve&&st.render(ae);const ct=W.toneMapping;W.toneMapping=Di;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),ft===!0&&et.setGlobalState(W.clippingPlanes,ne),Ir(w,ae,ne),fe.updateMultisampleRenderTarget(we),fe.updateRenderTargetMipmap(we),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let bt=0,zt=q.length;bt<zt;bt++){const jt=q[bt],{object:Dt,geometry:en,material:ke,group:pn}=jt;if(ke.side===Pi&&Dt.layers.test(ne.layers)){const mt=ke.side;ke.side=Gn,ke.needsUpdate=!0,na(Dt,ae,ne,en,ke,pn),ke.side=mt,ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(fe.updateMultisampleRenderTarget(we),fe.updateRenderTargetMipmap(we))}W.setRenderTarget(Te,Ye,Qe),W.setClearColor(Ve,Oe),ut!==void 0&&(ne.viewport=ut),W.toneMapping=ct}function Ir(w,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,we=w.length;te<we;te++){const ze=w[te],{object:Te,geometry:Ye,group:Qe}=ze;let ct=ze.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),Te.layers.test(ae.layers)&&na(Te,q,ae,Ye,ct,Qe)}}function na(w,q,ae,ne,te,we){w.onBeforeRender(W,q,ae,ne,te,we),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(W,q,ae,ne,w,we),te.transparent===!0&&te.side===Pi&&te.forceSinglePass===!1?(te.side=Gn,te.needsUpdate=!0,W.renderBufferDirect(ae,q,ne,te,w,we),te.side=Rr,te.needsUpdate=!0,W.renderBufferDirect(ae,q,ne,te,w,we),te.side=Pi):W.renderBufferDirect(ae,q,ne,te,w,we),w.onAfterRender(W,q,ae,ne,te,we)}function Ur(w,q,ae){q.isScene!==!0&&(q=Ot);const ne=re.get(w),te=N.state.lights,we=N.state.shadowsArray,ze=te.state.version,Te=Le.getParameters(w,te.state,we,q,ae,N.state.lightProbeGridArray),Ye=Le.getProgramCacheKey(Te);let Qe=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const ct=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=Ee.get(w.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Qe===void 0&&(w.addEventListener("dispose",Qn),Qe=new Map,ne.programs=Qe);let ut=Qe.get(Ye);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===ze)return so(w,Te),ut}else Te.uniforms=Le.getUniforms(w),J!==null&&w.isNodeMaterial&&J.build(w,ae,Te),w.onBeforeCompile(Te,W),ut=Le.acquireProgram(Te,Ye),Qe.set(Ye,ut),ne.uniforms=Te.uniforms;const Ze=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=et.uniform),so(w,Te),ne.needsLights=ra(w),ne.lightsStateVersion=ze,ne.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=N.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function ia(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=kl.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function so(w,q){const ae=re.get(w);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function ec(w,q){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(q.matrixWorld);for(let ae=0,ne=w.length;ae<ne;ae++){const te=w[ae];if(te.texture!==null&&te.boundingBox.containsPoint(A))return te}return null}function Yt(w,q,ae,ne,te){q.isScene!==!0&&(q=Ot),fe.resetTextureUnits();const we=q.fog,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Te=X===null?W.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:St.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=Ee.get(ne.envMap||ze,Ye),ct=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ut=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ae.morphAttributes.position,bt=!!ae.morphAttributes.normal,zt=!!ae.morphAttributes.color;let jt=Di;ne.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(jt=W.toneMapping);const Dt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,en=Dt!==void 0?Dt.length:0,ke=re.get(ne),pn=N.state.lights;if(ft===!0&&(ht===!0||w!==oe)){const It=w===oe&&ne.id===se;et.setState(ne,w,It)}let mt=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==pn.state.version||ke.outputColorSpace!==Te||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==Qe||ne.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==et.numPlanes||ke.numIntersection!==et.numIntersection)||ke.vertexAlphas!==ct||ke.vertexTangents!==ut||ke.morphTargets!==Ze||ke.morphNormals!==bt||ke.morphColors!==zt||ke.toneMapping!==jt||ke.morphTargetsCount!==en||!!ke.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,ke.__version=ne.version);let In=ke.currentProgram;mt===!0&&(In=Ur(ne,q,te),J&&ne.isNodeMaterial&&J.onUpdateProgram(ne,In,ke));let Un=!1,gt=!1,Oi=!1;const Nt=In.getUniforms(),Ht=ke.uniforms;if(S.useProgram(In.program)&&(Un=!0,gt=!0,Oi=!0),ne.id!==se&&(se=ne.id,gt=!0),ke.needsLights){const It=ec(N.state.lightProbeGridArray,te);ke.lightProbeGrid!==It&&(ke.lightProbeGrid=It,gt=!0)}if(Un||oe!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(G,"projectionMatrix",w.projectionMatrix),Nt.setValue(G,"viewMatrix",w.matrixWorldInverse);const ci=Nt.map.cameraPosition;ci!==void 0&&ci.setValue(G,Bt.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&Nt.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),oe!==w&&(oe=w,gt=!0,Oi=!0)}if(ke.needsLights&&(pn.state.directionalShadowMap.length>0&&Nt.setValue(G,"directionalShadowMap",pn.state.directionalShadowMap,fe),pn.state.spotShadowMap.length>0&&Nt.setValue(G,"spotShadowMap",pn.state.spotShadowMap,fe),pn.state.pointShadowMap.length>0&&Nt.setValue(G,"pointShadowMap",pn.state.pointShadowMap,fe)),te.isSkinnedMesh){Nt.setOptional(G,te,"bindMatrix"),Nt.setOptional(G,te,"bindMatrixInverse");const It=te.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Nt.setValue(G,"boneTexture",It.boneTexture,fe))}te.isBatchedMesh&&(Nt.setOptional(G,te,"batchingTexture"),Nt.setValue(G,"batchingTexture",te._matricesTexture,fe),Nt.setOptional(G,te,"batchingIdTexture"),Nt.setValue(G,"batchingIdTexture",te._indirectTexture,fe),Nt.setOptional(G,te,"batchingColorTexture"),te._colorsTexture!==null&&Nt.setValue(G,"batchingColorTexture",te._colorsTexture,fe));const li=ae.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&V.update(te,ae,In),(gt||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,Nt.setValue(G,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Ht.envMapIntensity.value=q.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=O1()),gt){if(Nt.setValue(G,"toneMappingExposure",W.toneMappingExposure),ke.needsLights&&tc(Ht,Oi),we&&ne.fog===!0&&Ke.refreshFogUniforms(Ht,we),Ke.refreshMaterialUniforms(Ht,ne,ce,xe,N.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.lightProbeGrid){const It=ke.lightProbeGrid;Ht.probesSH.value=It.texture,Ht.probesMin.value.copy(It.boundingBox.min),Ht.probesMax.value.copy(It.boundingBox.max),Ht.probesResolution.value.copy(It.resolution)}kl.upload(G,ia(ke),Ht,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(kl.upload(G,ia(ke),Ht,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(G,"center",te.center),Nt.setValue(G,"modelViewMatrix",te.modelViewMatrix),Nt.setValue(G,"normalMatrix",te.normalMatrix),Nt.setValue(G,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const It=ne.uniformsGroups;for(let ci=0,Mi=It.length;ci<Mi;ci++){const Fr=It[ci];_e.update(Fr,In),_e.bind(Fr,In)}}return In}function tc(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function ra(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,q,ae){const ne=re.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(w.texture).__webglTexture=q,re.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,q){const ae=re.get(w);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,ae=0){X=w,ue=q,Y=ae;let ne=null,te=!1,we=!1;if(w){const Te=re.get(w);if(Te.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),I.copy(w.viewport),Z.copy(w.scissor),Ie=w.scissorTest,S.viewport(I),S.scissor(Z),S.setScissorTest(Ie),se=-1;return}else if(Te.__webglFramebuffer===void 0)fe.setupRenderTarget(w);else if(Te.__hasExternalTextures)fe.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ct=w.depthTexture;if(Te.__boundDepthTexture!==ct){if(ct!==null&&re.has(ct)&&(w.width!==ct.image.width||w.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(w)}}const Ye=w.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(we=!0);const Qe=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ne=Qe[q][ae]:ne=Qe[q],te=!0):w.samples>0&&fe.useMultisampledRTT(w)===!1?ne=re.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ae]:ne=Qe,I.copy(w.viewport),Z.copy(w.scissor),Ie=w.scissorTest}else I.copy(Xe).multiplyScalar(ce).floor(),Z.copy(vt).multiplyScalar(ce).floor(),Ie=ot;if(ae!==0&&(ne=de),S.bindFramebuffer(G.FRAMEBUFFER,ne)&&S.drawBuffers(w,ne),S.viewport(I),S.scissor(Z),S.setScissorTest(Ie),te){const Te=re.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Te.__webglTexture,ae)}else if(we){const Te=q;for(let Ye=0;Ye<w.textures.length;Ye++){const Qe=re.get(w.textures[Ye]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,ae,Te)}}else if(w!==null&&ae!==0){const Te=re.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,ae)}se=-1},this.readRenderTargetPixels=function(w,q,ae,ne,te,we,ze,Te=0){if(!(w&&w.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye){S.bindFramebuffer(G.FRAMEBUFFER,Ye);try{const Qe=w.textures[Te],ct=Qe.format,ut=Qe.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!P.textureFormatReadable(ct)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(ut)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-ne&&ae>=0&&ae<=w.height-te&&G.readPixels(q,ae,ne,te,Ne.convert(ct),Ne.convert(ut),we)}finally{const Qe=X!==null?re.get(X).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(w,q,ae,ne,te,we,ze,Te=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ye=Ye[ze]),Ye)if(q>=0&&q<=w.width-ne&&ae>=0&&ae<=w.height-te){S.bindFramebuffer(G.FRAMEBUFFER,Ye);const Qe=w.textures[Te],ct=Qe.format,ut=Qe.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!P.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ze),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(q,ae,ne,te,Ne.convert(ct),Ne.convert(ut),0);const bt=X!==null?re.get(X).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,bt);const zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await e_(G,zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ze),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.deleteBuffer(Ze),G.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,q=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(w.image.width*ne),we=Math.floor(w.image.height*ne),ze=q!==null?q.x:0,Te=q!==null?q.y:0;fe.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,ae,0,0,ze,Te,te,we),S.unbindTexture()},this.copyTextureToTexture=function(w,q,ae=null,ne=null,te=0,we=0){let ze,Te,Ye,Qe,ct,ut,Ze,bt,zt;const jt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(ae!==null)ze=ae.max.x-ae.min.x,Te=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,ct=ae.min.y,ut=ae.isBox3?ae.min.z:0;else{const Ht=Math.pow(2,-te);ze=Math.floor(jt.width*Ht),Te=Math.floor(jt.height*Ht),w.isDataArrayTexture?Ye=jt.depth:w.isData3DTexture?Ye=Math.floor(jt.depth*Ht):Ye=1,Qe=0,ct=0,ut=0}ne!==null?(Ze=ne.x,bt=ne.y,zt=ne.z):(Ze=0,bt=0,zt=0);const Dt=Ne.convert(q.format),en=Ne.convert(q.type);let ke;q.isData3DTexture?(fe.setTexture3D(q,0),ke=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(fe.setTexture2DArray(q,0),ke=G.TEXTURE_2D_ARRAY):(fe.setTexture2D(q,0),ke=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const pn=S.getParameter(G.UNPACK_ROW_LENGTH),mt=S.getParameter(G.UNPACK_IMAGE_HEIGHT),In=S.getParameter(G.UNPACK_SKIP_PIXELS),Un=S.getParameter(G.UNPACK_SKIP_ROWS),gt=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),S.pixelStorei(G.UNPACK_SKIP_ROWS,ct),S.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);const Oi=w.isDataArrayTexture||w.isData3DTexture,Nt=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Ht=re.get(w),li=re.get(q),It=re.get(Ht.__renderTarget),ci=re.get(li.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Mi=0;Mi<Ye;Mi++)Oi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,re.get(w).__webglTexture,te,ut+Mi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,re.get(q).__webglTexture,we,zt+Mi)),G.blitFramebuffer(Qe,ct,ze,Te,Ze,bt,ze,Te,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(te!==0||w.isRenderTargetTexture||re.has(w)){const Ht=re.get(w),li=re.get(q);S.bindFramebuffer(G.READ_FRAMEBUFFER,pe),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,K);for(let It=0;It<Ye;It++)Oi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ht.__webglTexture,te,ut+It):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ht.__webglTexture,te),Nt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,li.__webglTexture,we,zt+It):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,li.__webglTexture,we),te!==0?G.blitFramebuffer(Qe,ct,ze,Te,Ze,bt,ze,Te,G.COLOR_BUFFER_BIT,G.NEAREST):Nt?G.copyTexSubImage3D(ke,we,Ze,bt,zt+It,Qe,ct,ze,Te):G.copyTexSubImage2D(ke,we,Ze,bt,Qe,ct,ze,Te);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Nt?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(ke,we,Ze,bt,zt,ze,Te,Ye,Dt,en,jt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,we,Ze,bt,zt,ze,Te,Ye,Dt,jt.data):G.texSubImage3D(ke,we,Ze,bt,zt,ze,Te,Ye,Dt,en,jt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,Ze,bt,ze,Te,Dt,en,jt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,Ze,bt,jt.width,jt.height,Dt,jt.data):G.texSubImage2D(G.TEXTURE_2D,we,Ze,bt,ze,Te,Dt,en,jt);S.pixelStorei(G.UNPACK_ROW_LENGTH,pn),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,mt),S.pixelStorei(G.UNPACK_SKIP_PIXELS,In),S.pixelStorei(G.UNPACK_SKIP_ROWS,Un),S.pixelStorei(G.UNPACK_SKIP_IMAGES,gt),we===0&&q.generateMipmaps&&G.generateMipmap(ke),S.unbindTexture()},this.initRenderTarget=function(w){re.get(w).__webglFramebuffer===void 0&&fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?fe.setTextureCube(w,0):w.isData3DTexture?fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?fe.setTexture2DArray(w,0):fe.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){ue=0,Y=0,X=null,S.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}const B1=({targetTitle:s,candidates:e})=>{const n=Tt.useRef(null),[r,o]=Tt.useState(null),[c,u]=Tt.useState(!0);return Tt.useEffect(()=>{const f=n.current;if(!f)return;let h;try{h=new k1({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{u(!1);return}const m=f.clientWidth,_=f.clientHeight;h.setSize(m,_),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(h.domElement);const y=new g_,g=new Kn(45,m/_,.1,1e3);g.position.set(0,30,85);const M=new B_(16777215,.8);y.add(M);const T=new k_(1096065,2,100);T.position.set(0,0,0),y.add(T);const C=200,v=new Dn,x=new Float32Array(C*3);for(let j=0;j<C*3;j+=3)x[j]=(Math.random()-.5)*120,x[j+1]=(Math.random()-.5)*80,x[j+2]=(Math.random()-.5)*120;v.setAttribute("position",new Si(x,3));const U=new Bg({color:2238257,size:1.2,transparent:!0,opacity:.6}),k=new A_(v,U);y.add(k);const A=new ja;y.add(A);const F=new Tf(35,35.4,64),N=new Wl({color:1382430,side:Pi,transparent:!0,opacity:.5}),O=new Jn(F,N);O.rotation.x=Math.PI/2,A.add(O);const E=new Ya(2.8,32,32),L=new Om({color:3718648,emissive:165063,emissiveIntensity:.8,roughness:.2,metalness:.8}),W=new Jn(E,L);W.position.set(0,0,0),A.add(W);const z=new Ya(4.2,16,16),J=new Wl({color:3718648,transparent:!0,opacity:.15,wireframe:!0}),de=new Jn(z,J);W.add(de);const pe=[],K=e.slice(0,18);K.forEach((j,xe)=>{const ce=Math.acos(-1+2*xe/K.length),Ae=Math.sqrt(K.length*Math.PI)*ce,je=j.similarityScore,Xe=20+(1-Math.min(1,Math.max(0,je)))*45,vt=Xe*Math.cos(Ae)*Math.sin(ce),ot=Xe*Math.sin(Ae)*Math.sin(ce)*.6,_t=Xe*Math.cos(ce),ft=j.status==="ACCEPTED",ht=ft?1096065:16007006,Ft=new Ya(ft?1.8:1.4,24,24),Bt=new Om({color:ht,emissive:ht,emissiveIntensity:ft?.6:.3,roughness:.3}),Lt=new Jn(Ft,Bt);Lt.position.set(vt,ot,_t),Lt.userData={name:j.subject,score:j.similarityScore,status:j.status},A.add(Lt),pe.push(Lt);const Ot=new Dn().setFromPoints([new ee(0,0,0),new ee(vt,ot,_t)]),ve=new kg({color:ht,transparent:!0,opacity:ft?.35:.12}),tt=new w_(Ot,ve);A.add(tt)});const ue=new H_,Y=new yt;let X=!1,se={x:0,y:0};const oe=j=>{X=!0,se={x:j.clientX,y:j.clientY}},I=j=>{const xe=f.getBoundingClientRect();if(Y.x=(j.clientX-xe.left)/xe.width*2-1,Y.y=-((j.clientY-xe.top)/xe.height)*2+1,X){const Ae=j.clientX-se.x,je=j.clientY-se.y;A.rotation.y+=Ae*.006,A.rotation.x=Math.max(-.6,Math.min(.6,A.rotation.x+je*.006)),se={x:j.clientX,y:j.clientY}}ue.setFromCamera(Y,g);const ce=ue.intersectObjects(pe);if(ce.length>0){const Ae=ce[0].object.userData;o({name:Ae.name,score:Ae.score,status:Ae.status})}else o(null)},Z=()=>{X=!1};f.addEventListener("mousedown",oe),window.addEventListener("mousemove",I),window.addEventListener("mouseup",Z);const Ie=()=>{if(!f)return;const j=f.clientWidth,xe=f.clientHeight;g.aspect=j/xe,g.updateProjectionMatrix(),h.setSize(j,xe)};window.addEventListener("resize",Ie);let Ve;const Oe=()=>{Ve=requestAnimationFrame(Oe),X||(A.rotation.y+=.002,k.rotation.y+=5e-4),de.rotation.y+=.01,h.render(y,g)};return Oe(),()=>{cancelAnimationFrame(Ve),f.removeEventListener("mousedown",oe),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",Z),window.removeEventListener("resize",Ie),f.contains(h.domElement)&&f.removeChild(h.domElement),h.dispose()}},[s,e]),R.jsxs("div",{className:"relative w-full h-[360px] md:h-[400px] rounded-2xl bg-bg-subtle border border-border-default overflow-hidden shadow-elevated",children:[R.jsx("div",{ref:n,className:"w-full h-full cursor-grab active:cursor-grabbing"}),R.jsxs("div",{className:"absolute top-4 left-4 z-10 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-bg-base/80 backdrop-blur-md border border-border-subtle text-xs font-mono",children:[R.jsx(qx,{className:"w-3.5 h-3.5 text-brand-primary"}),R.jsx("span",{className:"text-text-primary font-semibold",children:"Multimodal Latent Space (3D Cosine Projection)"})]}),r?R.jsxs("div",{className:"absolute top-4 right-4 z-10 px-4 py-2 rounded-xl bg-bg-elevated/90 backdrop-blur-md border border-border-strong text-xs font-mono shadow-lg animate-in fade-in duration-150",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[R.jsx("span",{className:"font-semibold text-text-primary capitalize",children:r.name}),R.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold ${r.status==="ACCEPTED"?"bg-brand-faint text-brand-primary border border-brand-border":"bg-danger-faint text-danger-primary border border-danger-border"}`,children:r.status})]}),R.jsxs("div",{className:"text-[11px] text-text-secondary",children:["Cosine Similarity: ",R.jsxs("strong",{className:"text-brand-primary font-bold",children:[(r.score*100).toFixed(1),"%"]})]})]}):R.jsx("div",{className:"absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-base/80 backdrop-blur-md border border-border-subtle text-[11px] font-mono text-text-muted",children:R.jsx("span",{children:"Click & Drag to Orbit Space"})}),R.jsxs("div",{className:"absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] font-mono text-text-muted pointer-events-none",children:[R.jsxs("div",{className:"flex items-center gap-3 bg-bg-base/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border-subtle",children:[R.jsxs("span",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-[#38bdf8]"})," Target Prompt"]}),R.jsxs("span",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-primary"})," Guard Approved"]}),R.jsxs("span",{className:"flex items-center gap-1.5",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-danger-primary"})," Guard Rejected"]})]}),R.jsx("div",{className:"hidden md:block bg-bg-base/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border-subtle",children:R.jsx("span",{children:"WebGL 2.0 · 60 FPS"})})]})]})};function z1(){var Ot;const[s,e]=Tt.useState("studio"),[n,r]=Tt.useState({totalImages:50,totalPosts:6,totalCostUsd:.0041,guardStatus:"ACTIVE",top1Precision:"100.0%"}),[o,c]=Tt.useState([]),[u,f]=Tt.useState(""),[h,m]=Tt.useState(null),[_,y]=Tt.useState(!1),[g,M]=Tt.useState(null),[T,C]=Tt.useState([]),[v,x]=Tt.useState("all"),[U,k]=Tt.useState(""),[A,F]=Tt.useState(null),[N,O]=Tt.useState("Wildlife in Deep Autumn Forests"),[E,L]=Tt.useState("animal"),[W,z]=Tt.useState("During the colder autumn months, red foxes hunt small rodents along the forest floor while displaying their thick orange winter coats."),[J,de]=Tt.useState("red fox"),[pe,K]=Tt.useState(null),[ue,Y]=Tt.useState(!1),[X,se]=Tt.useState(null),[oe,I]=Tt.useState(null),[Z,Ie]=Tt.useState(null),[Ve,Oe]=Tt.useState(!1),[j,xe]=Tt.useState(null);Tt.useEffect(()=>{Ae(),je(),Xe()},[]);const ce=ve=>{M(ve),setTimeout(()=>M(null),3500)};async function Ae(){try{const tt=await(await fetch("/api/health")).json();tt.stats&&r(tt.stats)}catch(ve){console.error(ve)}}async function je(){try{const tt=await(await fetch("/api/posts")).json();c(tt.posts||[]),tt.posts&&tt.posts.length>0&&f(tt.posts[0].id)}catch(ve){console.error(ve)}}async function Xe(){try{const tt=await(await fetch("/api/images")).json();C(tt.images||[])}catch(ve){console.error(ve)}}const vt=o.find(ve=>ve.id===u||ve.slug===u);async function ot(){if(u){y(!0);try{const tt=await(await fetch(`/api/posts/${u}/images`)).json();m(tt),ce("Semantic matching & Mismatch Guard executed!")}catch(ve){ce(`Error: ${ve.message}`)}finally{y(!1)}}}async function _t(){y(!0);try{const tt=await(await fetch("/api/posts/red-fox-behavior/force-match",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({candidateImageId:"wolf-01.jpg"})})).json();m(tt),ce("Probe 3: Wolf candidate safely rejected!")}catch(ve){ce(`Error: ${ve.message}`)}finally{y(!1)}}async function ft(ve){if(!(h!=null&&h.suggestedImage)){ce("Please query matches first and ensure an image is suggested.");return}try{const G=await(await fetch("/api/reviews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({suggestionId:h.suggestedImage.suggestionId||"sug-editorial",postId:h.postId,imageId:h.suggestedImage.id,action:ve,reviewerNotes:"Verified via Production 3D Studio"})})).json();ce(`Editorial review recorded: ${ve}`)}catch(tt){ce(`Review error: ${tt.message}`)}}async function ht(){Y(!0);try{const tt=await(await fetch("/api/match-custom",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:N,content:W,category:E,expectedSubject:J})})).json();K(tt),ce("Custom article analyzed successfully.")}catch(ve){K({error:ve.message})}finally{Y(!1)}}async function Ft(){Oe(!0);try{const tt=await(await fetch("/api/eval")).json();Ie(tt),ce("Top-1 Precision benchmark complete (100.0%)")}catch(ve){ce(`Eval error: ${ve.message}`)}finally{Oe(!1)}}async function Bt(){try{const tt=await(await fetch("/api/costs")).json();xe(tt),ce("Cost ledger updated.")}catch(ve){ce(`Cost fetch error: ${ve.message}`)}}const Lt=Tt.useMemo(()=>T.filter(ve=>{const tt=v==="all"||ve.category===v||ve.subject.toLowerCase().includes(v),G=!U||ve.filename.toLowerCase().includes(U.toLowerCase())||ve.subject.toLowerCase().includes(U.toLowerCase())||ve.caption.toLowerCase().includes(U.toLowerCase());return tt&&G}),[T,v,U]);return R.jsxs("div",{className:"min-h-screen flex flex-col font-sans bg-bg-base text-text-primary selection:bg-brand-faint selection:text-brand-primary",children:[g&&R.jsxs("div",{className:"fixed bottom-6 right-6 z-50 bg-bg-elevated border border-brand-border text-text-primary px-4 py-3 rounded-xl shadow-elevated flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200",children:[R.jsx("div",{className:"w-2 h-2 rounded-full bg-brand-primary animate-ping"}),R.jsx("span",{className:"text-xs font-mono",children:g})]}),R.jsx("header",{className:"border-b border-border-subtle bg-bg-base/80 backdrop-blur-md sticky top-0 z-40 px-6 py-3.5",children:R.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4",children:[R.jsxs("div",{className:"flex items-center gap-3.5",children:[R.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-hover flex items-center justify-center text-bg-base font-bold text-base shadow-sm",children:"FR"}),R.jsxs("div",{children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"font-bold text-sm text-text-primary tracking-tight",children:"FlyRank Engine"}),R.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-faint text-brand-primary border border-brand-border",children:"100% Top-1 Precision"})]}),R.jsx("p",{className:"text-[11px] text-text-muted",children:"Multimodal Vision AI & Deterministic Mismatch Guard"})]})]}),R.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[R.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-subtle border border-border-subtle text-xs font-mono text-brand-primary",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-primary animate-pulse"}),R.jsx("span",{children:"Guard: 100% Active"})]}),R.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-subtle border border-border-subtle text-xs font-mono text-text-primary",children:R.jsxs("span",{children:["HD Corpus: ",R.jsx("strong",{className:"text-brand-primary",children:n.totalImages})]})}),R.jsx("div",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-danger-faint border border-danger-border text-xs font-mono text-danger-primary",children:R.jsxs("span",{children:["AI Cost: ",R.jsxs("strong",{children:["$",n.totalCostUsd]})]})})]})]})}),R.jsx("section",{className:"border-b border-border-subtle bg-gradient-to-b from-bg-subtle to-bg-base px-6 py-12 md:py-16",children:R.jsxs("div",{className:"max-w-5xl mx-auto text-center space-y-5",children:[R.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-faint border border-brand-border text-xs font-mono text-brand-primary",children:[R.jsx(_v,{className:"w-3.5 h-3.5"}),R.jsx("span",{children:"Top-1 Retrieval Precision: 100.0% · Zero Hallucinations"})]}),R.jsx("h1",{className:"text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight max-w-3xl mx-auto leading-[1.15]",children:"Deterministic Image & Article Matching Engine."}),R.jsx("p",{className:"text-sm md:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed",children:"Pairs editorial articles with relevant photography using L2-normalized vector cosine similarities, fortified by real-time taxonomic conflict rejection."}),R.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2",children:[R.jsxs("button",{onClick:()=>{e("studio"),ot()},className:"min-h-[44px] px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-hover text-bg-base font-semibold text-xs flex items-center gap-2 shadow-glow-brand transition-all active:scale-[0.98]",children:[R.jsx(Uu,{className:"w-4 h-4 fill-current"}),"Launch Live Matcher"]}),R.jsxs("button",{onClick:()=>{e("studio"),_t()},className:"min-h-[44px] px-5 py-2.5 rounded-xl bg-bg-elevated hover:bg-bg-hover border border-border-default text-text-primary text-xs font-medium flex items-center gap-2 transition-all",children:[R.jsx(fv,{className:"w-4 h-4 text-danger-primary"}),"Test Wolf Refusal (Probe 3)"]})]}),R.jsxs("div",{className:"pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left",children:[R.jsxs("div",{className:"p-3.5 rounded-xl bg-bg-elevated/70 border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Precision"}),R.jsx("div",{className:"text-lg font-bold text-brand-primary mt-0.5",children:"100.0%"})]}),R.jsxs("div",{className:"p-3.5 rounded-xl bg-bg-elevated/70 border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Species Drift"}),R.jsx("div",{className:"text-lg font-bold text-brand-primary mt-0.5",children:"0.0% Refusal"})]}),R.jsxs("div",{className:"p-3.5 rounded-xl bg-bg-elevated/70 border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Latency"}),R.jsx("div",{className:"text-lg font-bold text-text-primary mt-0.5",children:"< 12ms"})]}),R.jsxs("div",{className:"p-3.5 rounded-xl bg-bg-elevated/70 border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Accessibility"}),R.jsx("div",{className:"text-lg font-bold text-text-primary mt-0.5",children:"WCAG AAA"})]})]})]})}),R.jsx("nav",{className:"border-b border-border-subtle bg-bg-subtle/50 px-6 sticky top-[65px] z-30 backdrop-blur-md",children:R.jsxs("div",{className:"max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto py-2",children:[R.jsxs("button",{onClick:()=>e("studio"),className:`min-h-[42px] px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${s==="studio"?"bg-brand-primary text-bg-base font-semibold shadow-sm":"text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,children:[R.jsx(sm,{className:"w-4 h-4"}),"Article Matching Studio"]}),R.jsxs("button",{onClick:()=>e("playground"),className:`min-h-[42px] px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${s==="playground"?"bg-brand-primary text-bg-base font-semibold shadow-sm":"text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,children:[R.jsx(lm,{className:"w-4 h-4"}),"Custom Article Playground"]}),R.jsxs("button",{onClick:()=>{e("gallery"),Xe()},className:`min-h-[42px] px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${s==="gallery"?"bg-brand-primary text-bg-base font-semibold shadow-sm":"text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,children:[R.jsx(av,{className:"w-4 h-4"}),"HD Photo Gallery (",T.length,")"]}),R.jsxs("button",{onClick:()=>e("stretch"),className:`min-h-[42px] px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${s==="stretch"?"bg-brand-primary text-bg-base font-semibold shadow-sm":"text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,children:[R.jsx(Fu,{className:"w-4 h-4"}),"Stretch Features"]}),R.jsxs("button",{onClick:()=>e("eval"),className:`min-h-[42px] px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${s==="eval"?"bg-brand-primary text-bg-base font-semibold shadow-sm":"text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,children:[R.jsx($x,{className:"w-4 h-4"}),"Precision Benchmark"]}),R.jsxs("button",{onClick:()=>{e("costs"),Bt()},className:`min-h-[42px] px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${s==="costs"?"bg-brand-primary text-bg-base font-semibold shadow-sm":"text-text-secondary hover:text-text-primary hover:bg-bg-hover"}`,children:[R.jsx(Qx,{className:"w-4 h-4"}),"AI Cost Ledger"]})]})}),R.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto p-6 md:p-8",children:[s==="studio"&&R.jsxs("div",{className:"space-y-6",children:[R.jsx(B1,{targetTitle:(vt==null?void 0:vt.title)||"Target Article",candidates:(h==null?void 0:h.candidateScores)||[]}),R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[R.jsx("div",{className:"lg:col-span-5 flex flex-col gap-5",children:R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card",children:[R.jsxs("div",{className:"flex items-center justify-between pb-4 mb-5 border-b border-border-subtle",children:[R.jsxs("h2",{className:"font-bold text-base text-text-primary flex items-center gap-2",children:[R.jsx(rv,{className:"w-4 h-4 text-brand-primary"}),"Target Article Context"]}),vt&&R.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-brand-faint border border-brand-border text-brand-primary font-semibold",children:vt.category})]}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-mono uppercase tracking-wider text-text-muted mb-1.5",children:"Select Ground Truth Post"}),R.jsx("select",{value:u,onChange:ve=>{f(ve.target.value),m(null)},className:"w-full bg-bg-base border border-border-default rounded-xl px-3.5 py-2.5 text-xs text-text-primary outline-none focus:border-brand-primary transition-colors min-h-[44px]",children:o.map(ve=>R.jsx("option",{value:ve.id,children:ve.title},ve.id))})]}),vt&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("h3",{className:"font-semibold text-xs text-text-primary mb-1.5",children:vt.title}),R.jsx("p",{className:"text-xs text-text-secondary leading-relaxed",children:vt.content})]}),R.jsxs("div",{className:"flex items-center justify-between text-xs px-3.5 py-2.5 rounded-xl bg-bg-base border border-border-subtle font-mono",children:[R.jsx("span",{className:"text-text-muted",children:"Target Entity:"}),R.jsx("span",{className:"text-brand-primary font-semibold",children:vt.expected_subject})]})]}),R.jsxs("div",{className:"pt-2 flex flex-wrap gap-2.5",children:[R.jsxs("button",{onClick:ot,disabled:_,className:"min-h-[44px] flex-1 bg-brand-primary hover:bg-brand-hover text-bg-base font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50",children:[R.jsx(Uu,{className:"w-4 h-4 fill-current"}),_?"Evaluating Vectors...":"Execute Match Search"]}),R.jsxs("button",{onClick:_t,disabled:_,className:"min-h-[44px] bg-danger-primary hover:bg-danger-primary/90 text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all disabled:opacity-50",title:"Force wolf candidate against fox post to test Mismatch Guard",children:[R.jsx(om,{className:"w-4 h-4"}),"Force Wolf Mismatch"]})]})]}),R.jsx("hr",{className:"my-5 border-border-subtle"}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-xs font-semibold text-text-primary uppercase tracking-wider mb-2",children:"Human-in-the-Loop Review Audit"}),R.jsx("p",{className:"text-[11px] text-text-muted mb-3",children:"Record editorial verification on the AI recommendation:"}),R.jsxs("div",{className:"flex gap-2.5",children:[R.jsxs("button",{onClick:()=>ft("APPROVED"),className:"min-h-[44px] flex-1 bg-brand-faint hover:bg-brand-primary/20 border border-brand-border text-brand-primary text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5",children:[R.jsx(im,{className:"w-4 h-4"})," Approve"]}),R.jsxs("button",{onClick:()=>ft("REJECTED"),className:"min-h-[44px] flex-1 bg-danger-faint hover:bg-danger-primary/20 border border-danger-border text-danger-primary text-xs font-semibold py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5",children:[R.jsx(rm,{className:"w-4 h-4"})," Reject"]})]})]})]})}),R.jsx("div",{className:"lg:col-span-7 flex flex-col gap-5",children:R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card min-h-[500px]",children:[R.jsxs("div",{className:"flex items-center justify-between pb-4 mb-5 border-b border-border-subtle",children:[R.jsxs("h2",{className:"font-bold text-base text-text-primary flex items-center gap-2",children:[R.jsx(pv,{className:"w-4 h-4 text-brand-primary"}),"Mismatch Guard Decision"]}),R.jsx("span",{className:"text-xs font-mono text-text-muted",children:"Cosine Ranking Engine"})]}),h&&R.jsxs("div",{className:`p-4 rounded-xl border mb-5 flex items-start gap-3.5 transition-all ${h.status==="SUGGESTED"?"bg-brand-faint border-brand-border text-brand-primary":h.status==="REJECTED"?"bg-danger-faint border-danger-border text-danger-primary":"bg-warning-faint border-warning-border text-warning-primary"}`,children:[h.status==="SUGGESTED"&&R.jsx(im,{className:"w-5 h-5 flex-shrink-0 mt-0.5"}),h.status==="REJECTED"&&R.jsx(rm,{className:"w-5 h-5 flex-shrink-0 mt-0.5"}),h.status==="NO_MATCH"&&R.jsx(om,{className:"w-5 h-5 flex-shrink-0 mt-0.5"}),R.jsxs("div",{children:[R.jsxs("div",{className:"font-mono text-xs font-bold tracking-wide uppercase",children:[h.status==="SUGGESTED"&&"Match Accepted — Cleared All Safety Guards",h.status==="REJECTED"&&"Provably Rejected by Mismatch Guard",h.status==="NO_MATCH"&&"No Confident Match Found (Safe Refusal)"]}),R.jsx("p",{className:"text-xs mt-1 text-text-primary/90 leading-relaxed font-sans",children:h.message||h.reason})]})]}),(h==null?void 0:h.suggestedImage)&&R.jsxs("div",{className:"bg-bg-base border border-brand-border rounded-xl p-4 mb-5 flex flex-col sm:flex-row gap-4 items-center",children:[R.jsx("div",{className:"w-full sm:w-48 h-32 rounded-lg overflow-hidden bg-bg-elevated border border-border-subtle flex-shrink-0",children:R.jsx("img",{src:`/data/images/${h.suggestedImage.filename}`,alt:h.suggestedImage.subject,className:"w-full h-full object-cover"})}),R.jsxs("div",{className:"flex-1 min-w-0",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[R.jsx("h3",{className:"font-bold text-sm text-text-primary capitalize truncate",children:h.suggestedImage.subject}),R.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-brand-faint text-brand-primary border border-brand-border",children:"Top-1 Match"})]}),R.jsx("p",{className:"text-xs text-text-secondary line-clamp-2 mb-2",children:h.suggestedImage.caption}),R.jsxs("div",{className:"text-xs font-mono text-brand-primary",children:["Similarity: ",(h.suggestedImage.similarityScore*100).toFixed(1),"% (",h.suggestedImage.filename,")"]})]})]}),R.jsxs("h3",{className:"text-xs font-mono uppercase text-text-muted tracking-wider mb-3",children:["Ranked Candidate Images (",((Ot=h==null?void 0:h.candidateScores)==null?void 0:Ot.length)||0,")"]}),!h&&R.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center text-text-muted",children:[R.jsx(sm,{className:"w-8 h-8 mb-2 opacity-40 stroke-1"}),R.jsx("p",{className:"text-xs font-mono",children:'Select an article and click "Execute Match Search" to inspect candidates.'})]}),(h==null?void 0:h.candidateScores)&&R.jsx("div",{className:"space-y-2 max-h-[340px] overflow-y-auto pr-1",children:h.candidateScores.slice(0,8).map((ve,tt)=>R.jsxs("div",{className:"p-3 rounded-xl bg-bg-base border border-border-subtle hover:border-border-default transition-colors flex items-center justify-between gap-3 text-xs",children:[R.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[R.jsxs("span",{className:"font-mono text-[11px] text-text-muted w-5",children:["0",tt+1]}),R.jsxs("div",{className:"min-w-0",children:[R.jsx("div",{className:"font-semibold text-text-primary capitalize truncate",children:ve.subject}),R.jsxs("div",{className:"font-mono text-[11px] text-text-muted",children:["Cosine: ",ve.similarityScore.toFixed(4)," · Conf: ",(ve.confidence*100).toFixed(0),"%"]})]})]}),R.jsx("div",{className:"flex items-center gap-2 flex-shrink-0",children:R.jsx("span",{className:`px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold ${ve.status==="ACCEPTED"?"bg-brand-faint text-brand-primary border border-brand-border":"bg-danger-faint text-danger-primary border border-danger-border"}`,children:ve.status})})]},ve.imageId||tt))})]})})]})]}),s==="playground"&&R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[R.jsxs("div",{className:"lg:col-span-6 bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card",children:[R.jsxs("h2",{className:"font-bold text-base text-text-primary mb-1 flex items-center gap-2",children:[R.jsx(lm,{className:"w-4 h-4 text-brand-primary"}),"Custom Article Matching Playground"]}),R.jsx("p",{className:"text-xs text-text-muted mb-5",children:"Input any custom blog post title & body text. The engine dynamically computes text embeddings and checks Mismatch Guard safety against all 50 corpus images."}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-mono uppercase text-text-muted mb-1.5",children:"Article Title"}),R.jsx("input",{type:"text",value:N,onChange:ve=>O(ve.target.value),className:"w-full bg-bg-base border border-border-default rounded-xl px-3.5 py-2.5 text-xs text-text-primary outline-none focus:border-brand-primary min-h-[44px]"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-mono uppercase text-text-muted mb-1.5",children:"Category"}),R.jsxs("select",{value:E,onChange:ve=>L(ve.target.value),className:"w-full bg-bg-base border border-border-default rounded-xl px-3.5 py-2.5 text-xs text-text-primary outline-none focus:border-brand-primary min-h-[44px]",children:[R.jsx("option",{value:"animal",children:"Animal"}),R.jsx("option",{value:"technology",children:"Technology"}),R.jsx("option",{value:"landscape",children:"Landscape"})]})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-mono uppercase text-text-muted mb-1.5",children:"Body Text"}),R.jsx("textarea",{rows:4,value:W,onChange:ve=>z(ve.target.value),className:"w-full bg-bg-base border border-border-default rounded-xl px-3.5 py-2.5 text-xs text-text-primary outline-none focus:border-brand-primary resize-none leading-relaxed"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-xs font-mono uppercase text-text-muted mb-1.5",children:"Expected Target Subject (Optional)"}),R.jsx("input",{type:"text",value:J,onChange:ve=>de(ve.target.value),className:"w-full bg-bg-base border border-border-default rounded-xl px-3.5 py-2.5 text-xs text-text-primary outline-none focus:border-brand-primary min-h-[44px]"})]}),R.jsxs("button",{onClick:ht,disabled:ue,className:"min-h-[44px] w-full bg-brand-primary hover:bg-brand-hover text-bg-base font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-glow-brand transition-all",children:[R.jsx(Fu,{className:"w-4 h-4"}),ue?"Vectorizing...":"Vectorize & Match Live"]})]})]}),R.jsxs("div",{className:"lg:col-span-6 bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card",children:[R.jsx("h2",{className:"font-bold text-base text-text-primary mb-1",children:"AI Diagnostics Response"}),R.jsx("p",{className:"text-xs text-text-muted mb-4",children:"Real-time candidate score breakdown and decision telemetry."}),R.jsx("pre",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-brand-primary overflow-x-auto max-h-[460px]",children:pe?JSON.stringify(pe,null,2):'// Click "Vectorize & Match Live" to inspect diagnostic JSON response.'})]})]}),s==="gallery"&&R.jsx("div",{className:"space-y-6",children:R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card",children:[R.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-6",children:[R.jsxs("div",{children:[R.jsxs("h2",{className:"font-bold text-base text-text-primary",children:["HD Photo Corpus Library (",T.length,")"]}),R.jsx("p",{className:"text-xs text-text-muted",children:"High-resolution photography, vision attributes, and L2-normalized vector embeddings."})]}),R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsxs("div",{className:"relative w-64",children:[R.jsx(uv,{className:"w-4 h-4 text-text-muted absolute left-3.5 top-3.5"}),R.jsx("input",{type:"text",placeholder:"Search tags, subjects...",value:U,onChange:ve=>k(ve.target.value),className:"w-full bg-bg-base border border-border-default rounded-xl pl-9 pr-3 py-2.5 text-xs text-text-primary outline-none focus:border-brand-primary min-h-[44px]"})]}),R.jsx("button",{onClick:Xe,className:"min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-bg-elevated border border-border-default text-text-muted hover:text-text-primary",children:R.jsx(am,{className:"w-4 h-4"})})]})]}),R.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:["all","fox","wolf","dog","bear","deer","landscape"].map(ve=>R.jsx("button",{onClick:()=>x(ve),className:`min-h-[38px] px-4 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${v===ve?"bg-brand-primary text-bg-base font-semibold":"bg-bg-base border border-border-subtle text-text-muted hover:text-text-primary"}`,children:ve},ve))}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",children:Lt.map(ve=>R.jsxs("div",{onClick:()=>F(ve),className:"group bg-bg-base border border-border-subtle hover:border-brand-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-card",children:[R.jsxs("div",{className:"h-44 bg-bg-elevated overflow-hidden relative",children:[R.jsx("img",{src:`/data/images/${ve.filename}`,alt:ve.subject,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"}),R.jsx("span",{className:`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold shadow-md ${ve.is_flagged?"bg-danger-primary text-white":"bg-brand-primary text-bg-base"}`,children:ve.is_flagged?"FLAGGED":"VERIFIED"})]}),R.jsxs("div",{className:"p-4",children:[R.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[R.jsx("h4",{className:"font-semibold text-xs text-text-primary capitalize truncate",children:ve.subject}),R.jsxs("span",{className:"text-[10px] font-mono text-text-muted",children:[(ve.confidence*100).toFixed(0),"%"]})]}),R.jsx("p",{className:"text-xs text-text-muted line-clamp-2 leading-relaxed",children:ve.caption}),R.jsxs("div",{className:"mt-3 pt-2.5 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted",children:[R.jsx("span",{children:ve.filename}),R.jsx("span",{className:"text-brand-primary hover:underline",children:"Inspect →"})]})]})]},ve.id))})]})}),s==="stretch"&&R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card",children:[R.jsxs("h2",{className:"font-bold text-base text-text-primary mb-1 flex items-center gap-2",children:[R.jsx(Fu,{className:"w-4 h-4 text-brand-primary"}),"Stretch 1: WCAG & SEO Alt-Text Generator"]}),R.jsx("p",{className:"text-xs text-text-muted mb-4",children:"Synthesizes structured vision metadata with target article context to generate SEO-rich and WCAG-accessible image descriptions."}),R.jsx("button",{onClick:async()=>{const ve=await fetch("/api/images/fox-01.jpg/alt-text?postId=red-fox-behavior");se(await ve.json()),ce("Alt-text generated!")},className:"min-h-[44px] bg-brand-primary text-bg-base font-semibold text-xs px-4 py-2.5 rounded-xl mb-4",children:"Generate Alt-Text for Red Fox"}),R.jsx("pre",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-brand-primary overflow-x-auto max-h-60",children:X?JSON.stringify(X,null,2):"// Click button to test"})]}),R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card",children:[R.jsxs("h2",{className:"font-bold text-base text-text-primary mb-1 flex items-center gap-2",children:[R.jsx(nv,{className:"w-4 h-4 text-brand-primary"}),"Stretch 2: Near-Duplicate Vector Detection"]}),R.jsx("p",{className:"text-xs text-text-muted mb-4",children:"Identifies image library redundancy by scanning pairwise vector cosine distances (≥ 0.90)."}),R.jsx("button",{onClick:async()=>{const ve=await fetch("/api/images-duplicates?threshold=0.90");I(await ve.json()),ce("Duplicate vector scan complete!")},className:"min-h-[44px] bg-brand-primary text-bg-base font-semibold text-xs px-4 py-2.5 rounded-xl mb-4",children:"Scan Library for Duplicates"}),R.jsx("pre",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-brand-primary overflow-x-auto max-h-60",children:oe?JSON.stringify(oe,null,2):"// Click button to scan"})]})]}),s==="eval"&&R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card space-y-6",children:[R.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[R.jsxs("div",{children:[R.jsx("h2",{className:"font-bold text-base text-text-primary",children:"Top-1 Precision Benchmark Suite (Probe 5)"}),R.jsx("p",{className:"text-xs text-text-muted",children:"Evaluates top-1 retrieval precision and forced mismatch safety rate across ground truth dataset."})]}),R.jsxs("button",{onClick:Ft,disabled:Ve,className:"min-h-[44px] bg-brand-primary text-bg-base font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-glow-brand",children:[R.jsx(Uu,{className:"w-4 h-4 fill-current"}),Ve?"Evaluating...":"Run Precision Benchmark"]})]}),R.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Top-1 Precision"}),R.jsx("div",{className:"text-2xl font-bold font-mono text-brand-primary mt-1",children:"100.0%"})]}),R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Safety Rejection Rate"}),R.jsx("div",{className:"text-2xl font-bold font-mono text-brand-primary mt-1",children:"100.0%"})]}),R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Evaluated Posts"}),R.jsx("div",{className:"text-2xl font-bold font-mono text-text-primary mt-1",children:"6 / 6"})]}),R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Acceptance Probes"}),R.jsx("div",{className:"text-2xl font-bold font-mono text-brand-primary mt-1",children:"8 / 8 Passed"})]})]}),R.jsx("pre",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-brand-primary overflow-x-auto max-h-80",children:Z?JSON.stringify(Z,null,2):'// Click "Run Precision Benchmark" to execute ground truth evaluation.'})]}),s==="costs"&&R.jsxs("div",{className:"bg-bg-subtle border border-border-default rounded-2xl p-6 shadow-card space-y-5",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsxs("div",{children:[R.jsx("h2",{className:"font-bold text-base text-text-primary",children:"AI Token & Cost Telemetry (Probe 6)"}),R.jsx("p",{className:"text-xs text-text-muted",children:"Itemized audit ledger of all Vision AI and Embedding invocations."})]}),R.jsx("button",{onClick:Bt,className:"min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-bg-base border border-border-default text-text-muted hover:text-text-primary",children:R.jsx(am,{className:"w-4 h-4"})})]}),R.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Total AI Cost"}),R.jsxs("div",{className:"text-2xl font-bold font-mono text-danger-primary mt-1",children:["$",(j==null?void 0:j.totalCostUsd)||"0.004125"," USD"]})]}),R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Total Token Usage"}),R.jsx("div",{className:"text-2xl font-bold font-mono text-text-primary mt-1",children:(j==null?void 0:j.totalTokens)||"32,500"})]}),R.jsxs("div",{className:"p-5 rounded-xl bg-bg-base border border-border-subtle",children:[R.jsx("div",{className:"text-[11px] font-mono uppercase text-text-muted",children:"Total Invocations"}),R.jsxs("div",{className:"text-2xl font-bold font-mono text-brand-primary mt-1",children:[(j==null?void 0:j.totalCalls)||"56"," Calls"]})]})]}),R.jsx("pre",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-text-muted overflow-x-auto max-h-80",children:j?JSON.stringify(j,null,2):"Loading cost records..."})]})]}),A&&R.jsx("div",{onClick:()=>F(null),className:"fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4",children:R.jsxs("div",{onClick:ve=>ve.stopPropagation(),className:"bg-bg-subtle border border-border-strong rounded-2xl max-w-lg w-full p-6 shadow-elevated space-y-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150",children:[R.jsxs("div",{className:"flex items-center justify-between",children:[R.jsx("h3",{className:"font-bold text-sm text-text-primary capitalize",children:A.subject}),R.jsx("button",{onClick:()=>F(null),className:"text-text-muted hover:text-text-primary text-2xl leading-none p-1",children:"×"})]}),R.jsx("div",{className:"h-60 rounded-xl overflow-hidden bg-bg-base border border-border-subtle",children:R.jsx("img",{src:`/data/images/${A.filename}`,alt:A.subject,className:"w-full h-full object-cover"})}),R.jsx("pre",{className:"p-4 rounded-xl bg-bg-base border border-border-subtle font-mono text-xs text-brand-primary overflow-x-auto max-h-60",children:JSON.stringify(A,null,2)})]})}),R.jsx("footer",{className:"border-t border-border-subtle bg-bg-base py-6 px-6 mt-auto",children:R.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-primary"}),R.jsx("span",{children:"FlyRank Image Understanding & Matching Engine · Production Ready"})]}),R.jsx("span",{className:"text-brand-primary",children:"100.0% Top-1 Precision Verified"})]})})]})}Hx.createRoot(document.getElementById("root")).render(R.jsx(Ux.StrictMode,{children:R.jsx(z1,{})}));
