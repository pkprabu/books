function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{wE72:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){function l(n,u,t){_classCallCheck(this,l),this.route=n,this.bookService=u,this.router=t,this.noImage="https://dummyimage.com/200X200/cccccc/000000&text=No+Image",this.books=[]}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.route.paramMap.subscribe((function(n){l.searchQuery=n.get("searchQuery").split("-").join(" ")})),this.bookService.getSingle(this.searchQuery).subscribe((function(n){l.books=n,console.log(n)}))}},{key:"back",value:function(){this.router.navigate(["/"])}}]),l}(),a=function l(){_classCallCheck(this,l)},i=u("pMnS"),o=u("SVse"),s=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"transform",value:function(l){if(!(l<=5))return null;for(var n="",u=0;u<l;u++)n+='<i class="fas fa-star ratings"></i>';return console.log(n),n}}]),l}(),c=u("iInd"),r=u("+9od"),b=t.nb({encapsulation:0,styles:[[".search-results[_ngcontent-%COMP%]{padding-top:56px}.navbar-link[_ngcontent-%COMP%], .navbar-link[_ngcontent-%COMP%]:hover{color:#28a745;cursor:pointer}.sale[_ngcontent-%COMP%]{background:#fff;display:inline-block;padding:4px 10px;border:1px solid #ffcc29;border-radius:2px}"]],data:{}});function p(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","text-center product-spinner"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","spinner-border text-success"]],null,null,null,null,null))],null,null)}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,[", "]))],null,null)}function m(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),t.Cb(1,1)],null,(function(l,n){var u=t.Gb(n,0,0,l(n,1,0,t.zb(n.parent.parent,0),n.parent.context.$implicit.volumeInfo.averageRating));l(n,0,0,u)}))}function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Fb(1,null,["("," ratings)"]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.volumeInfo.ratingsCount)}))}function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"p",[["class","sale mb-0"]],null,null,null,null,null)),(l()(),t.Fb(1,null,[" ",""])),t.Cb(2,3)],null,(function(l,n){var u=t.Gb(n,1,0,l(n,2,0,t.zb(n.parent.parent,1),n.parent.context.$implicit.saleInfo.listPrice.amount,"INR","symbol"));l(n,1,0,u)}))}function d(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","sale mb-0"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Not For Sale "]))],null,null)}function h(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","sale mb-0"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Free"]))],null,null)}function k(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,23,"div",[["class","col-sm-6 mb-3"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,22,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,21,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,20,"div",[["class","media"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"img",[["class","align-self-start mr-3"],["style","width:60px"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(5,0,null,null,18,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"h4",[["class","m-0"]],null,null,null,null,null)),(l()(),t.Fb(7,null,["",""])),(l()(),t.pb(8,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,7,"small",[],null,null,null,null,null)),(l()(),t.Fb(10,null,["By ",""])),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(12,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,m)),t.ob(14,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(16,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(17,0,null,null,6,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,g)),t.ob(19,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,d)),t.ob(21,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(23,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,12,0,n.context.$implicit.volumeInfo.averageRating),l(n,14,0,n.context.$implicit.volumeInfo.averageRating),l(n,16,0,n.context.$implicit.volumeInfo.ratingsCount),l(n,19,0,"FOR_SALE"===n.context.$implicit.saleInfo.saleability),l(n,21,0,"NOT_FOR_SALE"===n.context.$implicit.saleInfo.saleability),l(n,23,0,"FREE"===n.context.$implicit.saleInfo.saleability)}),(function(l,n){l(n,4,0,n.context.$implicit.volumeInfo.imageLinks?n.context.$implicit.volumeInfo.imageLinks.thumbnail:n.component.noImage),l(n,7,0,n.context.$implicit.volumeInfo.title),l(n,10,0,n.context.$implicit.volumeInfo.authors?n.context.$implicit.volumeInfo.authors:"Unknown")}))}function I(l){return t.Hb(0,[t.Bb(0,s,[]),t.Bb(0,o.c,[t.s]),(l()(),t.pb(2,0,null,null,9,"nav",[["class","navbar navbar-expand-sm bg-dark fixed-top"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,4,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,3,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,2,"a",[["class","navbar-link"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t}),null,null)),(l()(),t.pb(6,0,null,null,0,"i",[["class","fas fa-arrow-left"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,[" Back to Search"])),(l()(),t.pb(8,0,null,null,3,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,1,"a",[["class","navbar-link"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,0,"i",[["class","fas fa-filter"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,p)),t.ob(13,16384,null,0,o.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(14,0,null,null,4,"div",[["class","search-results"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,2,"div",[["class","row mt-4 mb-5"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,k)),t.ob(18,278528,null,0,o.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,13,0,0===u.books.length),l(n,18,0,u.books.items)}),null)}var y=t.lb("app-search-results",e,(function(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-search-results",[],null,null,null,I,b)),t.ob(1,114688,null,0,e,[c.a,r.a,c.k],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=u("d2mR");u.d(n,"SearchResultsModuleNgFactory",(function(){return C}));var C=t.mb(a,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,y]],[3,t.j],t.v]),t.yb(4608,o.l,o.k,[t.s,[2,o.r]]),t.yb(1073742336,o.b,o.b,[]),t.yb(1073742336,c.m,c.m,[[2,c.r],[2,c.k]]),t.yb(1073742336,x.a,x.a,[]),t.yb(1073742336,a,a,[]),t.yb(1024,c.i,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);