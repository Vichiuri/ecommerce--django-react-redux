(self.webpackChunkbiz_app=self.webpackChunkbiz_app||[]).push([[107],{1143:e=>{"use strict";e.exports=function(e,n,t,r,o,a,i,u){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,a,i,u],s=0;(c=new Error(n.replace(/%s/g,(function(){return l[s++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},1107:(e,n,t)=>{"use strict";t.d(n,{Z:()=>L});var r=t(2122),o=t(9756),a=t(8146),i=t(7294);var u=t(2029),c=t(6454),l=t(5088),s=Math.pow(2,31)-1;function f(e,n,t){var r=t-Date.now();e.current=r<=s?setTimeout(n,r):setTimeout((function(){return f(e,n,t)}),s)}function d(){var e=(0,c.Z)(),n=(0,i.useRef)();return(0,l.Z)((function(){return clearTimeout(n.current)})),(0,i.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=s?n.current=setTimeout(r,o):f(n,r,Date.now()+o))},clear:t}}),[])}var v=t(4184),p=t.n(v),m=t(2666),h=t(5697),b=t.n(h);function y(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function w(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof n?n:String(n)}t(1143);const E=(0,t(4680).Z)("carousel-caption");var x=t(6792),k=i.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,u=e.bsPrefix,c=e.children,l=e.className,s=(0,o.Z)(e,["as","bsPrefix","children","className"]),f=p()(l,(0,x.vE)(u,"carousel-item"));return i.createElement(a,(0,r.Z)({ref:n},s,{className:f}),c)}));k.displayName="CarouselItem";const N=k;function g(e,n){var t=0;return i.Children.map(e,(function(e){return i.isValidElement(e)?n(e,t++):e}))}const C=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)};function S(e){return!e||"#"===e.trim()}var I=i.forwardRef((function(e,n){var t=e.as,a=void 0===t?"a":t,u=e.disabled,c=e.onKeyDown,l=(0,o.Z)(e,["as","disabled","onKeyDown"]),s=function(e){var n=l.href,t=l.onClick;(u||S(n))&&e.preventDefault(),u?e.stopPropagation():t&&t(e)};return S(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),u&&(l.tabIndex=-1,l["aria-disabled"]=!0),i.createElement(a,(0,r.Z)({ref:n},l,{onClick:s,onKeyDown:C((function(e){" "===e.key&&(e.preventDefault(),s(e))}),c)}))}));I.displayName="SafeAnchor";const T=I;var Z=t(3825),M=t(4509),D={bsPrefix:b().string,as:b().elementType,slide:b().bool,fade:b().bool,controls:b().bool,indicators:b().bool,activeIndex:b().number,onSelect:b().func,onSlide:b().func,onSlid:b().func,interval:b().number,keyboard:b().bool,pause:b().oneOf(["hover",!1]),wrap:b().bool,touch:b().bool,prevIcon:b().node,prevLabel:b().string,nextIcon:b().node,nextLabel:b().string},P={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function R(e,n){var t=function(e,n){return Object.keys(n).reduce((function(t,a){var u,c=t,l=c[y(a)],s=c[a],f=(0,o.Z)(c,[y(a),a].map(w)),d=n[a],v=function(e,n,t){var r=(0,i.useRef)(void 0!==e),o=(0,i.useState)(n),a=o[0],u=o[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&a!==n&&u(n),[c?e:a,(0,i.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),u(e)}),[t])]}(s,l,e[d]),p=v[0],m=v[1];return(0,r.Z)({},f,((u={})[a]=p,u[d]=m,u))}),e)}(e,{activeIndex:"onSelect"}),c=t.as,l=void 0===c?"div":c,s=t.bsPrefix,f=t.slide,v=t.fade,h=t.controls,b=t.indicators,E=t.activeIndex,k=t.onSelect,N=t.onSlide,C=t.onSlid,S=t.interval,I=t.keyboard,D=t.onKeyDown,P=t.pause,R=t.onMouseOver,A=t.onMouseOut,L=t.wrap,O=t.touch,K=t.onTouchStart,j=t.onTouchMove,V=t.onTouchEnd,z=t.prevIcon,X=t.prevLabel,_=t.nextIcon,F=t.nextLabel,H=t.className,U=t.children,q=(0,o.Z)(t,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),B=(0,x.vE)(s,"carousel"),G=(0,i.useRef)(null),J=(0,i.useState)("next"),Q=J[0],W=J[1],Y=(0,i.useState)(!1),$=Y[0],ee=Y[1],ne=(0,i.useState)(!1),te=ne[0],re=ne[1],oe=(0,i.useState)(E||0),ae=oe[0],ie=oe[1];te||E===ae||(G.current?W(G.current):W((E||0)>ae?"next":"prev"),f&&re(!0),ie(E||0)),(0,i.useEffect)((function(){G.current&&(G.current=null)}));var ue,ce=0;!function(e,n){var t=0;i.Children.forEach(e,(function(e){i.isValidElement(e)&&function(e,n){++ce,n===E&&(ue=e.props.interval)}(e,t++)}))}(U);var le=(0,u.Z)(ue),se=(0,i.useCallback)((function(e){if(!te){var n=ae-1;if(n<0){if(!L)return;n=ce-1}G.current="prev",k&&k(n,e)}}),[te,ae,k,L,ce]),fe=(0,a.Z)((function(e){if(!te){var n=ae+1;if(n>=ce){if(!L)return;n=0}G.current="next",k&&k(n,e)}})),de=(0,i.useRef)();(0,i.useImperativeHandle)(n,(function(){return{element:de.current,prev:se,next:fe}}));var ve,pe,me,he=(0,a.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&fe()})),be="next"===Q?"left":"right";ve=function(){f||(N&&N(ae,be),C&&C(ae,be))},pe=[ae],me=(0,i.useRef)(!0),(0,i.useEffect)((function(){if(!me.current)return ve();me.current=!1}),pe);var ye=B+"-item-"+Q,we=B+"-item-"+be,Ee=(0,i.useCallback)((function(e){(0,M.Z)(e),N&&N(ae,be)}),[N,ae,be]),xe=(0,i.useCallback)((function(){re(!1),C&&C(ae,be)}),[C,ae,be]),ke=(0,i.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void fe(e)}D&&D(e)}),[I,D,se,fe]),Ne=(0,i.useCallback)((function(e){"hover"===P&&ee(!0),R&&R(e)}),[P,R]),ge=(0,i.useCallback)((function(e){ee(!1),A&&A(e)}),[A]),Ce=(0,i.useRef)(0),Se=(0,i.useRef)(0),Ie=d(),Te=(0,i.useCallback)((function(e){Ce.current=e.touches[0].clientX,Se.current=0,"hover"===P&&ee(!0),K&&K(e)}),[P,K]),Ze=(0,i.useCallback)((function(e){e.touches&&e.touches.length>1?Se.current=0:Se.current=e.touches[0].clientX-Ce.current,j&&j(e)}),[j]),Me=(0,i.useCallback)((function(e){if(O){var n=Se.current;Math.abs(n)>40&&(n>0?se(e):fe(e))}"hover"===P&&Ie.set((function(){ee(!1)}),S||void 0),V&&V(e)}),[O,P,se,fe,Ie,S,V]),De=null!=S&&!$&&!te,Pe=(0,i.useRef)();(0,i.useEffect)((function(){var e,n;if(De)return Pe.current=window.setInterval(document.visibilityState?he:fe,null!=(e=null!=(n=le.current)?n:S)?e:void 0),function(){null!==Pe.current&&clearInterval(Pe.current)}}),[De,fe,le,S,he]);var Re=(0,i.useMemo)((function(){return b&&Array.from({length:ce},(function(e,n){return function(e){k&&k(n,e)}}))}),[b,ce,k]);return i.createElement(l,(0,r.Z)({ref:de},q,{onKeyDown:ke,onMouseOver:Ne,onMouseOut:ge,onTouchStart:Te,onTouchMove:Ze,onTouchEnd:Me,className:p()(H,B,f&&"slide",v&&B+"-fade")}),b&&i.createElement("ol",{className:B+"-indicators"},g(U,(function(e,n){return i.createElement("li",{key:n,className:n===ae?"active":void 0,onClick:Re?Re[n]:void 0})}))),i.createElement("div",{className:B+"-inner"},g(U,(function(e,n){var t=n===ae;return f?i.createElement(m.ZP,{in:t,onEnter:t?Ee:void 0,onEntered:t?xe:void 0,addEndListener:Z.Z},(function(n){return i.cloneElement(e,{className:p()(e.props.className,t&&"entered"!==n&&ye,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&we)})})):i.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))),h&&i.createElement(i.Fragment,null,(L||0!==E)&&i.createElement(T,{className:B+"-control-prev",onClick:se},z,X&&i.createElement("span",{className:"sr-only"},X)),(L||E!==ce-1)&&i.createElement(T,{className:B+"-control-next",onClick:fe},_,F&&i.createElement("span",{className:"sr-only"},F))))}var A=i.forwardRef(R);A.displayName="Carousel",A.propTypes=D,A.defaultProps=P,A.Caption=E,A.Item=N;const L=A}}]);