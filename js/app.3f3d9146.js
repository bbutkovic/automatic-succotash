(function(e){function t(t){for(var s,o,c=t[0],a=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00c4":function(e,t,n){"use strict";n("9011")},"034f":function(e,t,n){"use strict";n("85ec")},4065:function(e,t,n){"use strict";n("fd2c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Monitor")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"monitor"},[n("div",{staticClass:"bezel"},[n("div",{staticClass:"display"},[n("div",{staticClass:"scanline"}),e.isMenuActive?n("Menu",{attrs:{pages:e.pages},on:{navigated:e.navigate}}):e._e(),e.currentPage?n("div",{staticClass:"page"},[n("div",{staticClass:"header"},[n("span",{staticClass:"page-title"},[n("h2",[e._v(e._s(e.currentPage.title))])])]),n(e.currentPage.component,{tag:"component"})],1):e._e()],1)])])},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},[e.started?n("div",{staticClass:"options"},[n("ul",{staticClass:"column column-left"},e._l(e.menuItems,(function(t){return n("li",{key:t.title,staticClass:"menu-item"},[n("span",{class:{selected:t.selected},on:{mouseover:function(n){return e.select(t.index)}}},[e._v(e._s(t.title))])])})),0)]):n("div",{staticClass:"greeter"},[n("h1",[e._v("Press Start")])])])},u=[],l=(n("7db0"),n("d81d"),n("fb6a"),n("5530")),d=4,f={data:function(){return{started:!1,selectedMenuIdx:0}},props:["pages"],created:function(){window.addEventListener("keypress",this.doKeyboard),window.addEventListener("mousedown",this.doMouse)},destroyed:function(){window.removeEventListener("keypress",this.doKeyboard),window.removeEventListener("mousedown",this.doMouse)},computed:{menuItems:function(){var e=this;return this.pages.map((function(t,n){return Object(l["a"])(Object(l["a"])({},t),{},{index:n,selected:n===e.selectedMenuIdx})}))},leftMenuItems:function(){return this.menuItems.slice(0,d)}},methods:{select:function(e){this.selectedMenuIdx=e},doKeyboard:function(e){var t=!this.started;if(this.start(),!t){var n=e.code.toUpperCase();switch(n){case"ARROWDOWN":case"KEYS":this.goDown();break;case"ARROWUP":case"KEYW":this.goUp();break;case"SPACE":case"ENTER":this.menuSelect();break}}},doMouse:function(){this.start()},goUp:function(){this.selectedMenuIdx<=0?this.selectedMenuIdx=0:this.selectedMenuIdx--},goDown:function(){this.selectedMenuIdx>=this.pages.length-1?this.selectedMenuIdx=this.pages.length-1:this.selectedMenuIdx++},menuSelect:function(){var e=this;this.$emit("navigated",this.menuItems.find((function(t){return t.index===e.selectedMenuIdx})))},start:function(){this.started||(this.started=!0)}}},p=f,h=(n("00c4"),n("2877")),v=Object(h["a"])(p,a,u,!1,null,"1810410a",null),m=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Hi")])},b=[],y={},M=Object(h["a"])(y,g,b,!1,null,null,null),w=M.exports,x=[{title:"Contact",content:w},{title:"About",content:w}],_={components:{Menu:m},data:function(){return{pages:x,isMenuActive:!0,currentPage:null}},methods:{navigate:function(e){this.isMenuActive=!1,this.currentPage=e}}},O=_,j=(n("4065"),Object(h["a"])(O,o,c,!1,null,null,null)),C=j.exports,I={name:"App",components:{Monitor:C}},P=I,E=(n("034f"),Object(h["a"])(P,r,i,!1,null,null,null)),S=E.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,t,n){},9011:function(e,t,n){},fd2c:function(e,t,n){}});
//# sourceMappingURL=app.3f3d9146.js.map