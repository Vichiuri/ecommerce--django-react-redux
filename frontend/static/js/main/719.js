(self.webpackChunkbiz_app=self.webpackChunkbiz_app||[]).push([[719],{8719:(t,a,e)=>{"use strict";e.d(a,{t2:()=>i,rp:()=>u,RQ:()=>d,s3:()=>l,gK:()=>y,nM:()=>f,Jz:()=>g,Ir:()=>v,pE:()=>h,JD:()=>_,i8:()=>M,XV:()=>m,uu:()=>x,sP:()=>Z,Qf:()=>$,rn:()=>P,KR:()=>b,ss:()=>w,Iy:()=>k,_o:()=>U,yU:()=>q,$G:()=>T,zn:()=>z,S5:()=>L,fy:()=>A,kB:()=>j,T6:()=>S,Vo:()=>C,Qz:()=>I,zz:()=>V,ND:()=>B,Rr:()=>J,Ac:()=>Q,$g:()=>K,rs:()=>R,Jb:()=>D,xB:()=>E});var n=e(9669),s=e.n(n),r=e(34464),o=e(44997),c=e(58343),p=e(66808),i=function(t,a,e,n){return function(o,i){o({type:p.$3});var u=(0,r.Z)(i),d="../retailer/api/products/?page=".concat(t);a&&(d+="&category_id=".concat(a)),e&&(d+="&query=".concat(e)),n&&(d+="&rows=".concat(n)),s().get(d,u).then((function(a){o({type:p.om,payload:{products:a.data.products,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};o((0,c.x)(a)),o({type:p.e5})}))}},u=function(t,a,e){return function(n,o){var i=(0,r.Z)(o),u="../retailer/api/products/?page=".concat(t);a&&(u+="&category_id=".concat(a)),e&&(u+="&query=".concat(e)),s().get(u,i).then((function(a){n({type:p.gy,payload:{products:a.data.products,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};n((0,c.x)(a)),n({type:p.e5})}))}};function d(t,a,e){var n=e.page,r=localStorage.getItem("token"),o={headers:{Accept:"application/json","Content-Type":"application/json"}};r&&(o.headers.Authorization="Token ".concat(r));var c=t?"../retailer/api/search_product/?page=".concat(n,"&query=").concat(t):"../retailer/api/search_product/?page=".concat(n);return new Promise((function(t,a){s().get(c,o).then((function(a){var e=!1;a.data.last_page>n&&(e=!0);var s=a.data.products.map((function(t){return{value:t,label:t.name}}));t({options:s,hasMore:e,additional:{page:n+1}})})).catch((function(t){a(t.response.data)}))}))}var l=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().get("../retailer/api/search_product/?query=".concat(t),n).then((function(t){a({type:p.om,payload:{products:t.data.products,currentPage:1,lastPage:t.data.last_page}})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},y=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().post("../retailer/api/products/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.be,payload:t.data}),a({type:p.SV,payload:t.data.view_complete})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},f=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().put("../retailer/api/products/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.rU,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},g=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().patch("../retailer/api/products/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.rU,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},v=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/products?product_id=".concat(t),n).then((function(e){a((0,c.i)(e.data,e.status)),a({type:p.VO,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},h=function(t,a,e){return function(n,o){n({type:p.$3});var i=(0,r.Z)(o),u="../retailer/api/product_category/?page=".concat(t);a&&(u+="&query=".concat(a)),e&&(u+="&rows=".concat(e)),s().get(u,i).then((function(a){n({type:p.Zy,payload:{categories:a.data.categories,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};n((0,c.x)(a)),n({type:p.e5})}))}};function _(t,a,e){var n=e.page,r=localStorage.getItem("token"),o={headers:{Accept:"application/json","Content-Type":"application/json"}};r&&(o.headers.Authorization="Token ".concat(r));var c=t?"../retailer/api/product_category/?page=".concat(n,"&query=").concat(t):"../retailer/api/product_category/?page=".concat(n);return new Promise((function(t,a){s().get(c,o).then((function(a){var e=!1;a.data.last_page>n&&(e=!0);var s=a.data.categories.map((function(t){return{value:t,label:t.name}}));t({options:s,hasMore:e,additional:{page:n+1}})})).catch((function(t){a(t.response.data)}))}))}var M=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().post("../retailer/api/product_category/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.eV,payload:t.data}),a({type:p.SV,payload:t.data.view_complete})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},m=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().put("../retailer/api/product_category/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.MJ,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},x=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/product_category?category_id=".concat(t),n).then((function(e){a((0,c.i)(e.data,e.status)),a({type:p.PO,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},Z=function(t,a,e){return function(n,o){n({type:p.$3});var i=(0,r.Z)(o),u="../retailer/api/mUnit/?page=".concat(t);a&&(u+="&rows=".concat(a)),e&&(u+="&query=".concat(e)),s().get(u,i).then((function(a){n({type:p.B7,payload:{units:a.data.units,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};n((0,c.x)(a)),n({type:p.e5})}))}},$=function(t,a,e){var n=e.page,r=localStorage.getItem("token"),o={headers:{Accept:"application/json","Content-Type":"application/json"}};r&&(o.headers.Authorization="Token ".concat(r));var c=t?"../retailer/api/mUnit/?page=".concat(n,"&query=").concat(t):"../retailer/api/mUnit/?page=".concat(n);return new Promise((function(t,a){s().get(c,o).then((function(a){var e=!1;a.data.last_page>n&&(e=!0);var s=a.data.units.map((function(t){return{value:t,label:t.name}}));t({options:s,hasMore:e,additional:{page:n+1}})})).catch((function(t){a(t.response.data)}))}))},P=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().post("../retailer/api/mUnit/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.wF,payload:t.data}),a({type:p.SV,payload:t.data.view_complete})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},b=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().put("../retailer/api/mUnit/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.Mm,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},w=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/mUnit/?unit_id=".concat(t),n).then((function(e){a((0,c.i)(e.data,e.status)),a({type:p.Ls,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},k=function(t,a,e){return function(n,o){n({type:p.$3});var i=(0,r.Z)(o),u="../retailer/api/compoundUnit/?page=".concat(t);a&&(u+="&rows=".concat(a)),e&&(u+="&query=".concat(e)),s().get(u,i).then((function(a){console.log(a.data),n({type:p.Ey,payload:{c_units:a.data.c_units,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};n((0,c.x)(a)),n({type:p.e5})}))}},U=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().post("../retailer/api/compoundUnit/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.Cx,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},q=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().put("../retailer/api/compoundUnit/",t,n).then((function(t){a((0,c.i)(t.data)),a({type:p.hK,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},T=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/compoundUnit/?c_unit_id=".concat(t),n).then((function(e){a((0,c.i)(e.data)),a({type:p.nQ,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},z=function(t,a,e){return function(n,o){n({type:p.$3});var i=(0,r.Z)(o),u="../retailer/api/priceLevel/?page=".concat(t);a&&(u+="&rows=".concat(a)),e&&(u+="&query=".concat(e)),s().get(u,i).then((function(a){console.log(a.data),n({type:p.U3,payload:{price_levels:a.data.price_levels,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};n((0,c.x)(a)),n({type:p.e5})}))}};function L(t,a,e){var n=e.page,r=localStorage.getItem("token"),o={headers:{Accept:"application/json","Content-Type":"application/json"}};r&&(o.headers.Authorization="Token ".concat(r));var c=t?"../retailer/api/priceLevel?page=".concat(n,"&query=").concat(t):"../retailer/api/priceLevel?page=".concat(n);return new Promise((function(t,a){s().get(c,o).then((function(a){var e=!1;a.data.last_page>n&&(e=!0);var s=a.data.price_levels.map((function(t){return{value:t,label:t.level_name}}));t({options:s,hasMore:e,additional:{page:n+1}})})).catch((function(t){a(t.response.data)}))}))}var A=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().post("../retailer/api/priceLevel/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.x9,payload:t.data}),a({type:p.SV,payload:t.data.view_complete})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},j=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().put("../retailer/api/priceLevel/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.Zr,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},S=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/priceLevel/?level_id=".concat(t),n).then((function(e){a((0,c.i)(e.data)),a({type:p.rd,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},C=function(t,a,e,n){return function(o,i){o({type:p.$3});var u=(0,r.Z)(i),d="../retailer/api/view_price_list/?page=".concat(t);a&&(d+="&product_id=".concat(a)),e&&(d+="&applicable_from=".concat(e)),n&&(d+="&price_level=".concat(n)),s().get(d,u).then((function(a){o({type:p.or,payload:{price_lists:a.data.price_lists,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};o((0,c.x)(a)),o({type:p.e5})}))}},I=function(t,a,e,n){return function(o,i){o({type:p.$3});var u=(0,r.Z)(i),d="../retailer/api/priceList/?page=".concat(t);a&&(d+="&category_id=".concat(a)),e&&(d+="&applicable_from=".concat(e)),n&&(d+="&price_level=".concat(n)),s().get(d,u).then((function(a){o({type:p.rv,payload:{price_lists:a.data.price_lists,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};o((0,c.x)(a)),o({type:p.e5})}))}},V=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().post("../retailer/api/priceList/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.s9,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},B=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().put("../retailer/api/priceList/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.vW,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},J=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/priceList/?price_id=".concat(t),n).then((function(e){a((0,c.i)(e.data,e.status)),a({type:p.MG,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},Q=function(t,a,e){return function(n,o){n({type:p.$3});var i=(0,r.Z)(o),u="../retailer/api/dist_brands/?page=".concat(t);a&&(u+="&rows=".concat(a)),e&&(u+="&query=".concat(e)),s().get(u,i).then((function(a){n({type:p.BL,payload:{brands:a.data.brands,currentPage:t,lastPage:a.data.last_page}})})).catch((function(t){var a={responseMessage:t.response.data,status:t.response.status};n((0,c.x)(a)),n({type:p.e5})}))}};function K(t,a,e){var n=e.page,r=localStorage.getItem("token"),o={headers:{Accept:"application/json","Content-Type":"application/json"}};r&&(o.headers.Authorization="Token ".concat(r));var c=t?"../retailer/api/dist_brands/?page=".concat(n,"&query=").concat(t):"../retailer/api/dist_brands/?page=".concat(n);return new Promise((function(t,a){s().get(c,o).then((function(a){var e=!1;a.data.last_page>n&&(e=!0);var s=a.data.brands.map((function(t){return{value:t,label:t.name}}));t({options:s,hasMore:e,additional:{page:n+1}})})).catch((function(t){a(t.response.data)}))}))}var R=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().post("../retailer/api/dist_brands/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.Tp,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},D=function(t){return function(a,e){a({type:p.$3});var n=(0,o.Z)(e);s().put("../retailer/api/dist_brands/",t,n).then((function(t){a((0,c.i)(t.data,t.status)),a({type:p.bT,payload:t.data})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}},E=function(t){return function(a,e){a({type:p.$3});var n=(0,r.Z)(e);s().delete("../retailer/api/dist_brands/?brand_id=".concat(t),n).then((function(e){a((0,c.i)(e.data,e.status)),a({type:p.Ip,payload:t})})).catch((function(t){var e={responseMessage:t.response.data,status:t.response.status};a((0,c.x)(e)),a({type:p.e5})}))}}}}]);