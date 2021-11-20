(this["webpackJsonpbookstore-test"]=this["webpackJsonpbookstore-test"]||[]).push([[0],{12:function(e,t,a){e.exports={page:"book-list_page__2LTpT",text:"book-list_text__3fJgN",list:"book-list_list__3ViVm",button:"book-list_button__1QD5D"}},20:function(e,t,a){e.exports={app:"app_app__M9MMq",start:"app_start__1JS1W"}},22:function(e,t,a){e.exports={error:"error-indicator_error__1rsSk",title:"error-indicator_title__h9uQQ"}},39:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(4),o=a(17),r=a(2),s=a(3),i=(a(39),a(1)),l=function(){return Object(i.jsx)("div",{className:"loadingio-spinner-rolling-liig12v7lb",children:Object(i.jsx)("div",{className:"ldio-hd6l29vdydb",children:Object(i.jsx)("div",{})})})},b=a(12),u=a.n(b),j=function(e,t){return function(a){a({type:"FETCH_BOOKS_REQUEST"}),e.getBooks(t).then((function(e){return a({type:"FETCH_BOOKS_SUCCESS",payload:e})})).catch((function(e){return a({type:"FETCH_BOOKS_FAILURE",payload:e})}))}},d=a(13),h=a.n(d),O=a(19),_=a(15),p=function e(){var t=this;Object(_.a)(this,e),this._apiBase="https://www.googleapis.com/books/v1/volumes?q=",this._pagination=30,this.getResource=function(){var e=Object(O.a)(h.a.mark((function e(a,n,c,o){var r,s,i,l,b,u,j;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t._apiBase,s=t._pagination,i=a.split(" ").join("+"),l="newest"===n?"&orderBy=newest":"",b=c?"&startIndex=".concat(c):"",u="all"!==o?"+subject:".concat(o):"",e.next=7,fetch("".concat(r).concat(i).concat(u,"&maxResults=").concat(s).concat(b).concat(l,"&printType=books&key=").concat("AIzaSyBeHQfr0O1DTsjDhj1eYM3r8LTwWfjwlyQ"));case 7:if((j=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(a)+", recieved ".concat(j.status));case 10:return e.next=12,j.json();case 12:return e.abrupt("return",e.sent);case 13:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}(),this.getBooks=function(){var e=Object(O.a)(h.a.mark((function e(a){var n,c,o,r,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.searchTerm,c=a.sortBy,o=a.category,r=a.startAt,e.next=3,t.getResource(n,c,r,o);case 3:return s=e.sent,e.abrupt("return",{booksFound:s.totalItems,booksLoaded:s.items.map(t._transformBook)});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformBook=function(e){return{id:e.id,authors:e.volumeInfo.authors||["N/a"],title:e.volumeInfo.title||"N/a",categories:e.volumeInfo.categories||["N/a"],description:e.volumeInfo.description||"N/a",image:e.volumeInfo.imageLinks.thumbnail||"N/a"}}},f=a(9),g=a.n(f),m=function(e){var t=e.book,a=t.title,n=t.categories,c=t.authors,o=t.image,s=t.id,l=Object(r.e)();return Object(i.jsxs)("div",{className:g.a.container,onClick:function(){return function(e){var t="/".concat(e);l(t)}(s)},children:[Object(i.jsx)("div",{className:g.a.image,style:{backgroundImage:"url(".concat(o,")")}}),Object(i.jsxs)("div",{className:g.a.info,children:[Object(i.jsx)("p",{className:g.a.category,children:n[0]}),Object(i.jsx)("p",{className:g.a.title,children:a}),Object(i.jsx)("p",{className:g.a.author,children:c[0]})]})]})},x=new p,k=function(){var e=Object(c.c)((function(e){return e.loading})),t=Object(c.c)((function(e){return e.books.booksFound})),a=Object(c.c)((function(e){return e.books.booksLoaded})),o=Object(c.c)((function(e){return e.currentSearch})),r=Object(c.c)((function(e){return e.currentSearch})),b=Object(c.b)();Object(n.useEffect)((function(){return function(){}}),[r]);var d=e?Object(i.jsx)(l,{}):Object(i.jsx)("button",{className:u.a.button,onClick:function(){var e=Object(s.a)(Object(s.a)({},o),{},{startAt:a.length});b(j(x,e)),b({type:"ON_CONTINUE_SEARCH",payload:a.length})},children:"Load more"});return Object(i.jsxs)("div",{className:u.a.page,children:[Object(i.jsxs)("p",{className:u.a.text,children:[Object(i.jsx)("b",{children:t})," books found"]}),Object(i.jsx)("ul",{className:u.a.list,children:a.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(m,{book:e})},e.id)}))}),a.length>=t?null:d]})},v=a(7),N=a.n(v),y=function(e){var t=e.books,a=e.bookId,n=t.find((function(e){return e.id===a})),c=n.title,o=n.image,s=n.categories,l=n.authors,b=n.description,u=s.join(" / "),j=l.join(" / "),d=Object(r.e)();return Object(i.jsxs)("div",{className:N.a.page,children:[Object(i.jsxs)("button",{className:N.a.button,onClick:function(){d("/")},children:[Object(i.jsx)("i",{className:"fas fa-angle-left fa-2x"}),Object(i.jsx)("p",{className:N.a.buttonText,children:"back"})]}),Object(i.jsx)("div",{className:N.a.left,children:Object(i.jsx)("div",{className:N.a.image,style:{backgroundImage:"url(".concat(o,")")}})}),Object(i.jsxs)("div",{className:N.a.right,children:[Object(i.jsx)("p",{className:N.a.category,children:u}),Object(i.jsx)("p",{className:N.a.title,children:c}),Object(i.jsx)("p",{className:N.a.author,children:j}),Object(i.jsx)("div",{className:N.a.container,children:Object(i.jsx)("p",{className:N.a.description,children:b})})]})]})},S=a(8),C=a(6),E=a.n(C),T=new p,A=function(){var e=Object(c.c)((function(e){return e.loading})),t=Object(c.b)(),a=Object(n.useState)(""),o=Object(S.a)(a,2),r=o[0],s=o[1],b=Object(n.useState)("relevance"),u=Object(S.a)(b,2),d=u[0],h=u[1],O=Object(n.useState)("all"),_=Object(S.a)(O,2),p=_[0],f=_[1],g=function(){var e={searchTerm:r,category:p,sortBy:d,startAt:0};t({type:"CLEAR_DATA"}),t(j(T,e)),t(function(e){return{type:"ON_FIRST_SEARCH",payload:e}}(e))};Object(n.useEffect)((function(){t({type:"CLEAR_SEARCH"})}),[r,d,p,t]);var m=e?Object(i.jsx)(l,{}):Object(i.jsx)("i",{className:"fas fa-search",onClick:g});return Object(i.jsxs)("div",{className:E.a.container,onKeyPress:function(e){"Enter"===e.key&&g()},children:[Object(i.jsx)("h1",{className:E.a.title,children:"Search for books"}),Object(i.jsxs)("div",{className:E.a.search,children:[Object(i.jsx)("input",{className:E.a.input,onChange:function(e){s(e.target.value)},placeholder:"Search"}),Object(i.jsx)("span",{className:E.a.button,children:m})]}),Object(i.jsxs)("div",{className:E.a.sorting,children:[Object(i.jsxs)("span",{className:E.a.categories,children:[Object(i.jsx)("label",{className:E.a.label,children:"Categories"}),Object(i.jsxs)("select",{className:E.a.options,onChange:function(e){f(e.target.value)},children:[Object(i.jsx)("option",{children:"all"}),Object(i.jsx)("option",{children:"art"}),Object(i.jsx)("option",{children:"biography"}),Object(i.jsx)("option",{children:"computers"}),Object(i.jsx)("option",{children:"history"}),Object(i.jsx)("option",{children:"medical"}),Object(i.jsx)("option",{children:"poetry"})]})]}),Object(i.jsxs)("span",{className:E.a.sortby,children:[Object(i.jsx)("label",{className:E.a.label,children:"Sorting by"}),Object(i.jsxs)("select",{className:E.a.options,onChange:function(e){h(e.target.value)},children:[Object(i.jsx)("option",{children:"relevance"}),Object(i.jsx)("option",{children:"newest"})]})]})]})]})},w=a(20),R=a.n(w),B=function(){var e=Object(c.c)((function(e){return e.books.booksLoaded})),t=Object(c.c)((function(e){return e.loading})),a=e.length>0?Object(i.jsx)(k,{}):t?Object(i.jsx)(l,{}):Object(i.jsx)("p",{className:R.a.start,children:"Start searching for the book!"}),n=Object(r.d)("/:id"),o=(null===n||void 0===n?void 0:n.params.id)?null===n||void 0===n?void 0:n.params.id:"",s=[{path:"/",element:a},{path:"/:id",element:Object(i.jsx)(y,{books:e,bookId:o})}],b=Object(r.g)(s);return Object(i.jsxs)("div",{className:R.a.app,children:[Object(i.jsx)(A,{}),b]})},F=a(21),L=a(25),I=a(23),H={books:{booksFound:0,booksLoaded:[]},currentSearch:{searchTerm:"",category:"all",sortBy:"relevance",startAt:0},loading:!1,error:null},K=function(e,t){var a=e.books,n=[].concat(Object(I.a)(a.booksLoaded),Object(I.a)(t.booksLoaded));return Object(s.a)(Object(s.a)({},e),{},{books:{booksFound:t.booksFound,booksLoaded:n},loading:!1,error:null})},Q=function(e,t){return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:t})},D=function(e,t){return Object(s.a)(Object(s.a)({},e),{},{currentSearch:t})},U=function(e,t){return Object(s.a)(Object(s.a)({},e),{},{currentSearch:Object(s.a)(Object(s.a)({},e.currentSearch),{},{startAt:t})})},M=function(e){return Object(s.a)(Object(s.a)({},e),{},{currentSearch:{searchTerm:"",category:"all",sortBy:"relevance",startAt:0}})},J=function(e){return Object(s.a)(Object(s.a)({},e),{},{books:{booksFound:0,booksLoaded:[]}})},X=Object(F.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS_REQUEST":return Object(s.a)(Object(s.a)({},e),{},{loading:!0,error:null});case"FETCH_BOOKS_SUCCESS":return K(e,t.payload);case"FETCH_BOOKS_FAILURE":return Q(e,t.payload);case"ON_FIRST_SEARCH":return D(e,t.payload);case"ON_CONTINUE_SEARCH":return U(e,t.payload);case"CLEAR_SEARCH":return M(e);case"CLEAR_DATA":return J(e);default:return e}}),Object(F.a)(L.a)),Y=X,q=a(14),G=a.n(q),P=a(26),V=a(28),W=a(27),Z=a(22),z=a.n(Z),$=function(){return Object(i.jsxs)("div",{className:z.a.error,children:[Object(i.jsx)("p",{className:z.a.title,children:"Error!"}),Object(i.jsx)("p",{children:"Something went wrong"})]})},ee=function(e){Object(V.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(P.a)(a,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(i.jsx)($,{}):this.props.children}}]),a}(n.Component);a(42);G.a.render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(c.a,{store:Y,children:Object(i.jsx)(ee,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(B,{})})})})}),document.getElementById("root"))},6:function(e,t,a){e.exports={container:"header_container__Qg6Mi",title:"header_title__1DXxp",input:"header_input__2cfQn",sorting:"header_sorting__1op8t",label:"header_label__5gY9r",options:"header_options__2uQYe",categories:"header_categories__Hrmmh",sortby:"header_sortby__2njdc",search:"header_search__130F1",button:"header_button__G3RR8"}},7:function(e,t,a){e.exports={page:"book-page_page__3w5u0",left:"book-page_left__2JpXO",image:"book-page_image__38L3Z",right:"book-page_right__2th9H",category:"book-page_category__iB54K",title:"book-page_title__1Hoja",author:"book-page_author__2cELh",container:"book-page_container__2guiP",description:"book-page_description__kSeF4",button:"book-page_button__8cSDH",buttonText:"book-page_buttonText__2G3oX"}},9:function(e,t,a){e.exports={container:"book-list-item_container__3YSdd",info:"book-list-item_info__1v0FZ",category:"book-list-item_category__3g5Ki",author:"book-list-item_author__36aul",title:"book-list-item_title__3jXk-",image:"book-list-item_image__1KfFU"}}},[[43,1,2]]]);
//# sourceMappingURL=main.44cae93a.chunk.js.map