(self.webpackChunkbiz_app=self.webpackChunkbiz_app||[]).push([[870],{10770:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(22122),a=r(87329),o=r(81253),l=r(67294),c=(r(59864),r(45697),r(86010)),s=r(14670),i=r(22318),u=r(59693);const m=(0,r(25209).Z)(l.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var d=r(54720);const p=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,o.Z)(e,["classes"]);return l.createElement(d.Z,(0,n.Z)({component:"li",className:t.root,focusRipple:!0},r),l.createElement(m,{className:t.icon}))}));var f=l.forwardRef((function(e,t){var r=e.children,s=e.classes,u=e.className,m=e.component,d=void 0===m?"nav":m,f=e.expandText,h=void 0===f?"Show path":f,g=e.itemsAfterCollapse,v=void 0===g?1:g,y=e.itemsBeforeCollapse,E=void 0===y?1:y,b=e.maxItems,k=void 0===b?8:b,S=e.separator,w=void 0===S?"/":S,Z=(0,o.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=l.useState(!1),R=N[0],O=N[1],_=l.Children.toArray(r).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return l.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return l.createElement(i.Z,(0,n.Z)({ref:t,component:d,color:"textSecondary",className:(0,c.Z)(s.root,u)},Z),l.createElement("ol",{className:s.ol},function(e,t,r){return e.reduce((function(n,a,o){return o<e.length-1?n=n.concat(a,l.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},r)):n.push(a),n}),[])}(R||k&&_.length<=k?_:function(e){return E+v>=e.length?e:[].concat((0,a.Z)(e.slice(0,E)),[l.createElement(p,{"aria-label":h,key:"ellipsis",onClick:function(e){O(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,a.Z)(e.slice(e.length-v,e.length)))}(_),s.separator,w)))}));const h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},89659:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(22122),a=r(81253),o=r(67294),l=(r(45697),r(86010)),c=r(93871),s=r(14670),i=r(24896),u=r(17294),m=r(22318),d=o.forwardRef((function(e,t){var r=e.classes,s=e.className,d=e.color,p=void 0===d?"primary":d,f=e.component,h=void 0===f?"a":f,g=e.onBlur,v=e.onFocus,y=e.TypographyClasses,E=e.underline,b=void 0===E?"hover":E,k=e.variant,S=void 0===k?"inherit":k,w=(0,a.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),Z=(0,i.Z)(),N=Z.isFocusVisible,R=Z.onBlurVisible,O=Z.ref,_=o.useState(!1),B=_[0],x=_[1],C=(0,u.Z)(t,O);return o.createElement(m.Z,(0,n.Z)({className:(0,l.Z)(r.root,r["underline".concat((0,c.Z)(b))],s,B&&r.focusVisible,"button"===h&&r.button),classes:y,color:p,component:h,onBlur:function(e){B&&(R(),x(!1)),g&&g(e)},onFocus:function(e){N(e)&&x(!0),v&&v(e)},ref:C,variant:S},w))}));const p=(0,s.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d)},40757:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(67294),a=r(37703),o=r(36361),l=r(17196),c=r(29130),s=r(8295),i=r(42905),u=r(78101),m=r(21539),d=r(41076),p=r(87748),f=r(66037),h=r(17812),g=r(22318),v=r(90482),y=r(68134);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e){var t=e.delivery,r=e.index,a=e.viewOrderLogs,o=E((0,n.useState)(!1),2),l=o[0],c=o[1],s=E((0,n.useState)(null),2),i=s[0],u=s[1],b={anchorEl:i,popUpItems:[{icon:n.createElement("i",{className:"fas fa-info text-success btn_type"}),name:"View",value:"View"},{icon:n.createElement("i",{className:"fas fa-clipboard btn_type"}),name:"Logs",value:"Logs"}]};return n.createElement(n.Fragment,null,n.createElement("tr",null,n.createElement("td",null,r+1),n.createElement("td",null,"#",t.order.ref_number),n.createElement("td",null,t.order.retailer?t.order.retailer.contact_name:""),n.createElement("td",null,t.remarks?t.remarks:""),n.createElement("td",null,t.confirmed?n.createElement("td",null,n.createElement("span",{className:"dot"},n.createElement("i",{className:"bg-success"}),"Completed")):n.createElement("td",null,n.createElement("span",{className:"dot"},n.createElement("i",{className:"bg-warning"}),"Pending"))),n.createElement("td",null,n.createElement(h.Z,{"aria-label":"expand row",size:"small",onClick:function(){return c(!l)}},l?n.createElement("i",{className:"fas fa-sort-up bg_themed"}):n.createElement("i",{className:"fas fa-sort-down bg_themed"}))),n.createElement("td",null,n.createElement("div",{onClick:function(e){return u(e.currentTarget)},className:"btn_type"},n.createElement("i",{className:"fas fa-ellipsis-h"})))),t.order.ret_orders?n.createElement("tr",null,n.createElement("td",{style:{paddingBottom:0,paddingTop:0},colSpan:12},n.createElement(f.Z,{in:l,timeout:"auto",unmountOnExit:!0},n.createElement(p.Z,{margin:1},n.createElement(g.Z,{variant:"h6",gutterBottom:!0,component:"div"},"Order Details"),n.createElement(m.Z,{size:"small","aria-label":"purchases"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"#"),n.createElement("th",null,"Name"),n.createElement("th",{align:"right"},"Amount"),n.createElement("th",{className:"row justify-content-end"},"Total price"),n.createElement("th",{align:"right"},"Offer"))),n.createElement(d.Z,null,t.order.ret_orders.map((function(e,t){return n.createElement("tr",{key:t},n.createElement("td",null,t+1),n.createElement("td",null,e.product.name),n.createElement("td",null,e.free_qty?e.free_qty+e.qty:e.qty),n.createElement("td",{className:"row justify-content-end"},e.order_price_currency," ",(0,y.Z)(e.order_price)),n.createElement("td",null,"   "))})))))))):n.createElement("div",null),n.createElement(v.Z,{popUpValues:b,handlePopUpClick:function(e){"View"==e?window.open("/delivery/print/".concat(t.id)):"Logs"==e&&a(t.order.id),u(null)},handlePopUp:function(e){return u(i?null:e.currentTarget)}}))}function S(e){var t=e.deliveries,r=e.viewOrderLogs;return n.createElement("div",{className:"row justify-content-between"},n.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-header"},n.createElement("h3",null,"Deliveries")),n.createElement("div",{className:"card-content"},n.createElement(m.Z,{"aria-label":"collapsible table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"#"),n.createElement("th",null,"Reference No."),n.createElement("th",null,"Retailer"),n.createElement("th",null,"Reference Note"),n.createElement("th",null,"Status"),n.createElement("th",null,"Orders"),n.createElement("th",null,"Actions"))),n.createElement(d.Z,null,null!=t?t.map((function(e,t){return n.createElement(k,{delivery:e,index:t,key:t,viewOrderLogs:r})})):n.createElement("div",null)))))))}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(m,e);var t,r,a,o,l=(a=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(a);if(o){var r=_(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return R(this,e)});function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=l.call(this,e)).state={openSnackBar:!1,isError:null,responseMessage:"",snackPosition:{vertical:"top",horizontal:"center"},currentPage:1},t.closeSnackBar=t.closeSnackBar.bind(O(t)),t.setResponse=t.setResponse.bind(O(t)),t.viewOrderLogs=t.viewOrderLogs.bind(O(t)),t.changePage=t.changePage.bind(O(t)),t}return t=m,(r=[{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.error,n=t.message;r!==e.error?this.setResponse(r):n!==e.message&&this.setResponse(n)}},{key:"componentDidMount",value:function(){this.props.fetchDeliveries(1)}},{key:"setResponse",value:function(e){var t=Object.keys(e.responseMessage)[0],r=e.responseMessage[t];r instanceof Array?this.setState({responseMessage:r[0],isError:e.isError,openSnackBar:!0}):this.setState({responseMessage:r,isError:e.isError,openSnackBar:!0})}},{key:"changePage",value:function(e){this.setState({currentPage:e})}},{key:"viewOrderLogs",value:function(e){this.props.fetchOrderLogs(e),this.setState({currentPage:2})}},{key:"closeSnackBar",value:function(){this.setState({openSnackBar:!1})}},{key:"render",value:function(){var e=this.props,t=e.deliveryReducer,r=e.auth,a=e.ordersReducer,o=t.deliveries,l=t.isLoading,m=this.state,d=m.openSnackBar,p=m.isError,f=m.responseMessage,h=m.snackPosition,g=m.currentPage,v={isError:p,responseMessage:f,openSnackBar:d,snackPosition:h};if(!r.group.permission.can_view_orders)return(0,c.Z)(this.props.auth.group.permission);switch(g){case 1:return n.createElement("div",null,n.createElement(i.Z,{open:l||a.isLoading}),n.createElement(S,{deliveries:o,viewOrderLogs:this.viewOrderLogs}),n.createElement(s.Z,{values:v,closeSnackBar:this.closeSnackBar}));case 2:return n.createElement("div",null,n.createElement(i.Z,{open:l||a.isLoading}),n.createElement(u.Z,{order_logs:a.order_logs,changePage:this.changePage}),n.createElement(s.Z,{values:v,closeSnackBar:this.closeSnackBar}));default:return n.createElement("div",null,n.createElement(i.Z,{open:l||a.isLoading}),n.createElement(S,{deliveries:o}),n.createElement(s.Z,{values:v,closeSnackBar:this.closeSnackBar}))}}}])&&Z(t.prototype,r),m}(n.Component);const x=(0,a.$j)((function(e){return{auth:e.authReducer,deliveryReducer:e.deliveryReducer,ordersReducer:e.ordersReducer,error:e.errorsReducer,message:e.messagesReducer}}),{fetchDeliveries:o.p7,fetchOrderLogs:l.T8})(B)}}]);