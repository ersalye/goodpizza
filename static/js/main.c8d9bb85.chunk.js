(this["webpackJsonpgood-pizza"]=this["webpackJsonpgood-pizza"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/5.019e3c43.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/bg-1.aa0fd6d6.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/bg-2.735eaf2d.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/3.485ec987.jpg"},34:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/1.c81cea7c.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/2.142f63c6.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/4.0998b5b6.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/6.0b94137b.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/cover.a80e2015.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/cover2.f8d33c27.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/cover3.a51ac3f5.png"},47:function(e,t,a){e.exports=a.p+"static/media/cover4.8a83bfd6.jpeg"},52:function(e,t,a){e.exports=a(86)},57:function(e,t,a){},58:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),s=(a(57),a(7)),o=a(6),i=(a(58),a(14)),m=a(15),u=a(4),p=a(12),d=a(38),g=a(21),b=a(39),E=a.n(b),f=a(40),y=a.n(f),h=a(26),N=a.n(h),v=a(41),O=a.n(v),w=a(22),j=a.n(w),x=a(42),P=a.n(x),k=[{name:"Anday wala burger",image:E.a,Price:240,isFeatured:"true",description:"Anday wala burger is best in Pakistan mje andaya wala burger.",category:"Burger"},{name:"Shawarma",image:y.a,Price:150,isFeatured:"true",description:"Shawarma with extra chiken and socies is best in Pakistan you can taste the best shwarma here.",category:"Shawarma"},{name:"Lazania Pizza",image:N.a,Price:540,isFeatured:"true",description:"Lizania has spicy and juicy tast and it is best in Pakistan Chiken Lazania",category:"Pizza"},{name:"Zinger Burger",image:O.a,Price:160,isFeatured:"true",description:"Zinger Burger is hot and crispy Burger and this is the best in Pakistan Burger Zinger",category:"Burger"},{name:"Zinger Burger 1",image:j.a,Price:190,isFeatured:"true",description:"Zinger Burger is hot and crispy Burger and this is the best in Pakistan Burger Zinger",category:"Burger"},{name:"Zinger Burger 3",image:P.a,Price:260,isFeatured:"true",description:"Zinger burger is hot and crispy burger and this is the best in Pakistan Burger Zinger",category:"burger"},{name:"Chicken Tikka Pizza",image:N.a,Price:540,isFeatured:"false",description:"Lizania has spicy and juicy tast and it is best in Pakistan Chiken Lazania",category:"Pizza"},{name:"mama mia Pizza",image:N.a,Price:540,isFeatured:"false",description:"Lizania has spicy and juicy tast and it is best in Pakistan Chiken Lazania",category:"Pizza"}],C=a(51);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e,t){switch(t.type){case"Change Category":return _({},e,{selectedCategory:t.payload});case"Add to Cart":return _({},e,{cart:[].concat(Object(C.a)(e.cart),[t.payload])});case"Increment Count":return _({},e,{cart:e.cart.map((function(e){return e.name===t.payload.name?_({},t.payload):e}))});case"Remove item from cart":return _({},e,{cart:e.cart.filter((function(e){return e.name!==t.payload.name}))});case"Set Email":return _({},e,{userDetails:{email:t.payload.email,name:t.payload.name,address:t.payload.address,phonenum:t.payload.phonenum}});default:return e}},z={category:["All","Deals","Burger","Pizza"],Products:k,cart:function(){var e=localStorage.getItem("cart");return e?JSON.parse(e):[]}(),selectedCategory:"All",userDetails:{email:"",name:"",address:"",phonenum:""}},A=Object(n.createContext)(),F=A.Provider;var I=a(16),T=function(){var e=Object(n.useContext)(A),t=e.state,a=e.dispatch,c=t.cart,l=t.category,s=t.userDetails,i=Object(n.useState)(0),m=Object(o.a)(i,2),b=m[0],E=m[1];Object(n.useEffect)((function(){return E(c.reduce((function(e,t){return e+t.count*t.Price}),0))}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"navbar",className:"push better-nav fixed-top",style:{height:"10vh"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"head"},r.a.createElement(u.c,{to:"/",className:"brand "},r.a.createElement("div",{className:"logo",style:{height:"42.7px"}},r.a.createElement("img",{className:"image",src:"assets/images/restaurant/goodpizza.jpg",alt:"Branding",style:{paddingBottom:"5px"}})),r.a.createElement("div",{className:"title",onClick:function(){return a({type:"Change Category",payload:"All"})}},r.a.createElement("h3",null,r.a.createElement("span",{style:{color:"#c4302b"}},"Good")," Pizza")))),r.a.createElement("div",{className:"body"},r.a.createElement("ul",null,r.a.createElement("li",{className:"home",onClick:function(){return a({type:"Change Category",payload:"All"})}},r.a.createElement(u.c,{to:"/"},"Home")),r.a.createElement("li",{className:"dropdown"},r.a.createElement(u.c,{to:"/sectionmenu/All"},r.a.createElement("span",{onClick:function(){return a({type:"Change Category",payload:"All"})}},"Menu")),r.a.createElement("span",{className:"selector"}),r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e,onClick:function(){return a({type:"Change Category",payload:e})}},r.a.createElement(u.c,{to:"/sectionmenu/".concat(e)},e))})))),r.a.createElement("li",{className:"page"},r.a.createElement(u.c,{to:"/about"},"About")),r.a.createElement("li",{className:"more dropdown"},r.a.createElement(u.c,{to:"/cart"},r.a.createElement(p.Icon,{icon:d.shoppingCart}),r.a.createElement("span",null,"(",c.length,")")),r.a.createElement("span",{className:"selector"}),r.a.createElement("ul",{style:{padding:"5px"}},c.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{style:{display:"flex",justifyContent:"space-between"}},e.name,r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return a({type:"Remove item from cart",payload:e})}},r.a.createElement(p.Icon,{icon:g.bin,size:16}))))})),r.a.createElement("hr",null),r.a.createElement("p",null,"Total: ",b))),s.email?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"page"},r.a.createElement(u.c,null,"Hello ",s.name)),r.a.createElement("li",{className:"page",onClick:function(){I.auth().signOut()}},r.a.createElement(u.c,null,"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"page"},r.a.createElement(u.c,{to:"/signin"},"Login")),r.a.createElement("li",{className:"page"},r.a.createElement(u.c,{to:"/signup"},"Sign up"))))),r.a.createElement("div",{className:"toggle"},r.a.createElement(u.c,{to:"/navbar-slide"},r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}))))),r.a.createElement("div",{id:"underlay",className:"better-nav-mobile-underlay"}),r.a.createElement("nav",{id:"navbar-slide",className:"better-nav-pills"}))},L=function(){return r.a.createElement("section",{className:"pb_cover_v1 cover-bg-black cover-bg-opacity-4 text-center",style:{backgroundImage:"url(assets/images/restaurant/1900x1200/1.jpg)"},id:"section-home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-md-9  order-md-1"},r.a.createElement("h1",{className:"display-1",style:{color:"black"}},r.a.createElement("span",{style:{color:"#c4302b"}},"Good"),"Pizza"),r.a.createElement("div",{className:"sub-heading"},r.a.createElement("p",{className:"mb-5"},r.a.createElement("b",null,"The Taste you wish for!"))),r.a.createElement("p",null,r.a.createElement("a",{href:"#section-menu",role:"button",className:"btn smoothscroll pb_outline-light rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3"},"Order"))))))};a(82);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G=function(){var e=Object(n.useContext)(A),t=e.state,a=e.dispatch,c=t.Products,l=t.selectedCategory,s=t.cart,m=Object(n.useState)(c),p=Object(o.a)(m,2),d=p[0],g=p[1],b=Object(i.h)(),E=Object(i.g)().name;return Object(n.useEffect)((function(){E&&a({type:"Change Category",payload:E})}),[E,a]),Object(n.useEffect)((function(){"All"===l&&"/"===b.path?g(c.filter((function(e){return"true"===e.isFeatured}))):g("All"===l?c:c.filter((function(e){return e.category===l})))}),[l,c,b.path]),r.a.createElement("div",{className:"itemsPage"},d.map((function(e,t){return r.a.createElement("div",{key:t,className:"grid"},r.a.createElement(u.c,{to:"/sectionmenu/product/".concat(e.name)},r.a.createElement("img",{src:e.image,alt:"itemImage"})),r.a.createElement("div",{className:"d"},r.a.createElement("p",null,e.name),r.a.createElement("p",null,e.Price," Rs"),r.a.createElement("button",{type:"button",className:"btn smoothscroll pb_outline-light rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3","data-toggle":"popover",title:"Popover title","data-content":"And here's some amazing content. It's very engaging. Right?",onClick:function(){return function(e){var t=s.findIndex((function(t){return t.name===e.name}));if(-1===t){var n=R({},e,{count:1});a({type:"Add to Cart",payload:n})}else{var r=R({},e,{count:s[t].count+1});a({type:"Increment Count",payload:r})}}(e)}},"Add to Cart")))})))},U=a(23);a(83);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(){var e=Object(n.useContext)(A),t=e.state,a=e.dispatch,c=t.Products,l=t.cart,s=Object(i.g)().name,m=Object(n.useState)(c.filter((function(e){return e.name===s}))),d=Object(o.a)(m,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-center mb-5"},r.a.createElement("div",{className:"col-md-10 text-center"},r.a.createElement("h2",{className:"mb-4 text-uppercase pb_letter-spacing-2",style:{marginTop:"40px",paddingBottom:"0px"}},s))),r.a.createElement("div",{className:"item-details"},d.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:"sure"})),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Description"),":",e.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price")," : ",e.Price),r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("strong",null,e.category.toUpperCase()))),r.a.createElement("p",null,r.a.createElement("button",{type:"button",className:"btn smoothscroll pb_outline-dark rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3","data-toggle":"popover",title:"Popover title",onClick:function(){return function(e){var t=l.findIndex((function(t){return t.name===e.name}));if(-1===t){var n=Z({},e,{count:1});a({type:"Add to Cart",payload:n})}else{var r=Z({},e,{count:l[t].count+1});a({type:"Increment Count",payload:r})}console.log(l)}(e)}},"Add to Cart"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn smoothscroll pb_outline-dark rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3","data-toggle":"popover",title:"Popover title",onClick:function(){return a({type:"Remove item from cart",payload:e})}},"Remove")))}))),r.a.createElement(u.c,{to:"/sectionmenu/All"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary m-2",style:{padding:"1.5rem 2rem",border:"none !important"}},r.a.createElement(p.Icon,{icon:U.arrowLeft2,size:24,style:{marginRight:"10px"}}),"Back to Menu")))},J=a(44),V=a.n(J),W=a(45),M=a.n(W),$=a(46),K=a.n($),Q=a(47),Y=a.n(Q),X=a(48),ee=[{des:"Deal 1",imgSrc:V.a},{des:"Deal 2",imgSrc:M.a},{des:"Deal 3",imgSrc:K.a},{des:"Deal 4",imgSrc:Y.a},{des:"Deal 5",imgSrc:j.a}],te={height:"450px",width:"100%"},ae={width:"100%",height:"100%",padding:"0px",background:"#FFCA28",borderRadius:"4px",margin:"0px 0px"},ne={},re={},ce={autoSliding:{interval:"4s"},duration:"0.5s"},le=function(){return r.a.createElement(X.a,{slideItems:ee,manner:ce,buttonSetting:re,sliderBoxStyle:te,itemsStyle:ae,textBoxStyle:ne})},se=function(){var e=Object(i.h)();return r.a.createElement("section",{id:"section-menu"},r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/sectionmenu/product/:name"},r.a.createElement(H,null)),r.a.createElement(i.a,{path:"/product/:name"},r.a.createElement(H,null)),r.a.createElement(i.a,{path:"".concat(e.path,"/:name")},r.a.createElement("div",{className:"row justify-content-center mb-5"},r.a.createElement("div",{className:"col-md-10 text-center"},r.a.createElement("h2",{className:"mb-4 text-uppercase pb_letter-spacing-2",style:{marginTop:"40px",paddingBottom:"0px"}},"Menu"))),r.a.createElement(G,null)),r.a.createElement(i.a,{path:"".concat(e.path)},r.a.createElement("div",{className:"row justify-content-center mb-5"},r.a.createElement("div",{className:"col-md-10 text-center"},r.a.createElement("h2",{className:"mb-4 text-uppercase pb_letter-spacing-2",style:{marginTop:"40px",paddingBottom:"0px"}},"Menu"))),r.a.createElement(le,null),r.a.createElement(G,null)))))},oe=function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(se,null))},ie=a(24),me=a.n(ie),ue=a(25),pe=a.n(ue),de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"pb_section",id:"section-about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 mb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("img",{src:pe.a,alt:"Instant",className:"img-fluid"}))),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("img",{src:me.a,alt:"Instant",className:"img-fluid"}))))),r.a.createElement("div",{className:"col-lg-4 pl-lg-5 pl-lg-0"},r.a.createElement("h2",{className:"mb-4 text-uppercase pb_letter-spacing-2"},"The Restaurant"),r.a.createElement("p",null,'"HERE GOES ABOUT!!"'),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement(u.c,{to:"/sectionmenu",className:"smoothscroll text-danger text-uppercase"},"See our menu ",r.a.createElement("i",{className:"ion-arrow-down-c"}))))))),r.a.createElement("section",{className:"pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4",style:{backgroundImage:"url(assets/images/restaurant/1900x1200/img_1.jpg)"},id:"section-home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-md-9  order-md-1"},r.a.createElement("h2",{className:"heading mb-3"},"Delicious & Nutritious"),r.a.createElement("p",{className:"sub-heading"},'"subheading"'))))),r.a.createElement("section",{className:"pb_section cover-bg-cyan cover-bg-opacity-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mb-5"},r.a.createElement("div",{className:"col-md-10 text-center"},r.a.createElement("h2",{className:"mb-4 text-uppercase pb_letter-spacing-2"},"What People Says..."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"media d-block text-center testimonial_v1 pb_quote_v1"},r.a.createElement("div",{className:"media-body"},r.a.createElement("div",{className:"quote pb_text-black"},"\u201c"),r.a.createElement("blockquote",{className:"mb-5 pb_font-20"},"Good Things about shop.."),r.a.createElement("img",{className:"d-flex text-center mx-auto mb-3 rounded-circle",src:"assets/images/persons/person_1.jpg",alt:"Generic placeholder"}),r.a.createElement("h3",{className:"heading"},"Usman Chaudhary"),r.a.createElement("p",{className:"subheading"},"@usman")))),r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"media d-block text-center testimonial_v1 pb_quote_v1"},r.a.createElement("div",{className:"media-body"},r.a.createElement("div",{className:"quote pb_text-black"},"\u201c"),r.a.createElement("blockquote",{className:"mb-5 pb_font-20"},"Good Things about shop.."),r.a.createElement("img",{className:"d-flex text-center mx-auto mb-3 rounded-circle",src:"assets/images/persons/person_5.jpg",alt:"Generic placeholder"}),r.a.createElement("h3",{className:"heading"},"Usman Chaudhary"),r.a.createElement("p",{className:"subheading"},"@usman")))),r.a.createElement("div",{className:"col-md"},r.a.createElement("div",{className:"media d-block text-center testimonial_v1 pb_quote_v1"},r.a.createElement("div",{className:"media-body"},r.a.createElement("div",{className:"quote pb_text-black"},"\u201c"),r.a.createElement("blockquote",{className:"mb-5 pb_font-20"},"Good Things about shop.."),r.a.createElement("img",{className:"d-flex text-center mx-auto mb-3 rounded-circle",src:"assets/images/persons/person_2.jpg",alt:"Generic placeholder"}),r.a.createElement("h3",{className:"heading"},"Usman Chaudhary"),r.a.createElement("p",{className:"subheading"},"@usman"))))))),r.a.createElement("section",{className:"pb_md_py_cover text-center cover-bg-black cover-bg-opacity-4",style:{backgroundImage:"url(assets/images/restaurant/1900x1200/img_1.jpg)"},id:"section-home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-md-9  order-md-1"},r.a.createElement("h2",{className:"heading mb-3"},"Good Food, Good Taste"),r.a.createElement("p",{className:"sub-heading"},'"subheading"'))))))},ge=(a(34),a(49)),be=a(50);function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ye(){var e=Object(n.useContext)(A),t=e.state,a=e.dispatch,c=t.cart,l=Object(n.useState)(0),s=Object(o.a)(l,2),i=s[0],m=s[1];return Object(n.useEffect)((function(){return m(c.reduce((function(e,t){return e+t.count*t.Price}),0))}),[c]),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("div",{className:"pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 p-5 bg-white rounded shadow-sm mb-5"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",className:"border-0 bg-light"},r.a.createElement("div",{className:"p-2 px-3 text-uppercase"},"Product")),r.a.createElement("th",{scope:"col",className:"border-0 bg-light"},r.a.createElement("div",{className:"py-2 text-uppercase"},"Price")),r.a.createElement("th",{scope:"col",className:"border-0 bg-light"},r.a.createElement("div",{className:"py-2 text-uppercase"},"Quantity")),r.a.createElement("th",{scope:"col",className:"border-0 bg-light"},r.a.createElement("div",{className:"py-2 text-uppercase"},"Remove")))),i>0?c.map((function(e){return r.a.createElement("tbody",{key:e},r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:"border-0"},r.a.createElement("div",{className:"p-2"},r.a.createElement("img",{src:e.image,alt:e.name,width:"70",className:"img-fluid rounded shadow-sm"}),r.a.createElement("div",{className:"ml-3 d-inline-block align-middle"},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("p",{className:"text-dark d-inline-block align-middle"},e.name)),r.a.createElement("span",{className:"text-muted font-weight-normal font-italic d-block"},"Category: ",e.category)))),r.a.createElement("td",{className:"border-0 align-middle"},r.a.createElement("strong",null,"\u20a8",e.Price.toFixed(2))),r.a.createElement("td",{className:"border-0 align-middle"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary m-2",onClick:function(){var t=fe({},e,{count:1===e.count?1:e.count-1});a({type:"Increment Count",payload:t})},style:e.count<2?{opacity:"0.5"}:{opacity:"1"}},r.a.createElement(p.Icon,{icon:be.minus,size:20})),r.a.createElement("strong",null,e.count),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary m-2",onClick:function(){var t=fe({},e,{count:e.count+1});a({type:"Increment Count",payload:t})}},r.a.createElement(p.Icon,{icon:ge.plus,size:20}))),r.a.createElement("td",{className:"border-0 align-middle"},r.a.createElement("p",{className:"text-dark",onClick:function(){return a({type:"Remove item from cart",payload:e})}},r.a.createElement(p.Icon,{icon:g.bin,size:24,style:{marginRight:"10px"}})))))})):r.a.createElement("h1",{className:"display-4"},"Your Cart is Empty")),r.a.createElement(u.c,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary m-2",style:{padding:"1.5rem 2rem",border:"none !important"}},r.a.createElement(p.Icon,{icon:U.arrowLeft2,size:24,style:{marginRight:"10px"}}),"Continue Shoping")))))))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"},"Order summary"),r.a.createElement("div",{className:"p-4"},r.a.createElement("ul",{className:"list-unstyled mb-4"},r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Order Subtotal "),r.a.createElement("strong",null,"\u20a8",i.toFixed(2))),r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Shipping and handling"),r.a.createElement("strong",null,"$0.00")),r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Tax"),r.a.createElement("strong",null,"$0.00")),r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Total"),r.a.createElement("h5",{className:"font-weight-bold"}," \u20a8",i.toFixed(2)))),r.a.createElement(u.c,{to:"/checkout"},r.a.createElement("span",{className:"btn btn-dark rounded-pill py-2 btn-block"},"Procceed to checkout"))))))}var he=function(){return r.a.createElement("footer",{className:"pb_footer bg-light",role:"contentinfo"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/usman.aslam.3950",className:"p-2"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/usman.aslam.3950",className:"p-2"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/usman.aslam.3950",className:"p-2"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/usman.aslam.3950",className:"p-2"},r.a.createElement("i",{className:"fa fa-tripadvisor"}))))))))},Ne=a(16),ve=function(){var e=Object(n.useContext)(A).state.userDetails;return r.a.createElement("div",null,r.a.createElement("ul",{className:"sidebar"},r.a.createElement("li",{className:"home"},r.a.createElement(u.c,{to:"/"},"Home")),r.a.createElement("li",{className:"dropdown"},r.a.createElement(u.c,{to:"/sectionmenu"},"Menu")),r.a.createElement("li",{className:"page"},r.a.createElement(u.c,{to:"/about"},"About")),e.email?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"page"},r.a.createElement(u.c,null,"Hello ",e.name)),r.a.createElement("li",{className:"page",onClick:function(){Ne.auth().signOut()}},r.a.createElement(u.c,null,"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"page"},r.a.createElement(u.c,{to:"/signin"},"Login")),r.a.createElement("li",{className:"page"},r.a.createElement(u.c,{to:"/signup"},"Sign up"))),r.a.createElement("li",{className:"more dropdown"},r.a.createElement(u.c,{to:"/cart"},"Cart"))))};function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var je=a(16),xe=function(){var e=Object(i.f)(),t=Object(n.useState)({email:"",pass:"",error:"",isLoading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){c.error&&setTimeout((function(){l(we({},c,{error:""}))}),4e3)}),[c.error]);var m=function(e){l(we({},c,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100"},r.a.createElement("form",{className:"login100-form validate-form"},r.a.createElement("span",{className:"login100-form-title p-b-34"},"Account Login"),r.a.createElement("div",{className:"wrap-input100 rs1-wrap-input100 validate-input m-b-20","data-validate":"Type email"},r.a.createElement("input",{id:"first-name",className:"input100",value:c.email,type:"text",name:"email",placeholder:"Email",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type password"},r.a.createElement("input",{className:"input100",value:c.pass,type:"password",name:"pass",placeholder:"Password",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),c.error&&r.a.createElement("p",{className:"alert alert-danger",style:{width:"100%"}},c.error),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("button",{className:"login100-form-btn",onClick:function(t){t.preventDefault(),l(we({},c,{isLoading:!0})),je.auth().signInWithEmailAndPassword(c.email,c.pass).then((function(){l(we({},c,{isLoading:!1})),e.push("./cart")}),(function(e){l(we({},c,{error:e.message,isLoading:!1}))}))}},"Sign in")),r.a.createElement("div",{className:"w-full text-center p-t-27 p-b-239"},r.a.createElement("span",{className:"txt1"},"Forgot"),r.a.createElement("span",{className:"txt2"},"User name / password?")),r.a.createElement("div",{className:"w-full text-center"},r.a.createElement(u.c,{to:"/signup",className:"txt3"},"Sign Up"))),r.a.createElement("div",{className:"login100-more",style:{backgroundImage:"url(".concat(pe.a,")")}})))),c.isLoading&&r.a.createElement("div",{id:"pb_loader",className:"show fullscreen"},r.a.createElement("svg",{className:"circular",width:"48px",height:"48px"},r.a.createElement("circle",{className:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),r.a.createElement("circle",{className:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#FDA04F"}))))};function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ce=a(16),Se=function(){var e=Object(i.f)(),t=Object(n.useState)({name:"",email:"",pass:"",cpass:"",address:"",phonenum:"",formerr:"",isLoading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){c.formerr&&setTimeout((function(){l(ke({},c,{formerr:""}))}),4e3)}),[c.formerr]);var m=function(e){l(ke({},c,Object(s.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("div",{className:"limiter"},r.a.createElement("div",{className:"container-login100"},r.a.createElement("div",{className:"wrap-login100"},r.a.createElement("form",{className:"login100-form validate-form"},r.a.createElement("span",{className:"login100-form-title p-b-34"},"Account Login"),r.a.createElement("div",{className:"wrap-input100 rs1-wrap-input100 validate-input m-b-20","data-validate":"Type Email"},r.a.createElement("input",{id:"email",className:"input100",type:"text",name:"email",value:c.email,placeholder:"Email",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 rs1-wrap-input100 validate-input m-b-20","data-validate":"Type Name"},r.a.createElement("input",{id:"name",className:"input100",type:"text",name:"name",value:c.name,placeholder:"Name",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type password"},r.a.createElement("input",{className:"input100",type:"password",name:"pass",value:c.pass,placeholder:"Password",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type cpassword"},r.a.createElement("input",{className:"input100",type:"password",name:"cpass",value:c.cpass,placeholder:"Confirm Password",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type Contact Number"},r.a.createElement("input",{className:"input100",type:"text",name:"phonenum",value:c.phonenum,placeholder:"Contact Num",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type Address"},r.a.createElement("input",{className:"input100",type:"text",name:"address",value:c.address,placeholder:"Address",onChange:m}),r.a.createElement("span",{className:"focus-input100"})),c.formerr&&r.a.createElement("p",{className:"alert alert-danger",style:{width:"100%"}},c.formerr),r.a.createElement("div",{className:"container-login100-form-btn"},r.a.createElement("button",{className:"login100-form-btn",onClick:function(t){if(t.preventDefault(),l(ke({},c,{isLoading:!0})),""===c.name||""===c.address||""===c.phonenum||""===c.pass||""===c.cpass?(l(ke({},c,{formerr:"Please Fill all Details"})),0):c.pass===c.cpass||void l(ke({},c,{formerr:"Password doesnt match"}))){var a={name:c.name,email:c.email,address:c.address,phonenum:c.phonenum};Ce.auth().createUserWithEmailAndPassword(c.email,c.pass).then((function(){Ce.firestore().collection("users").doc(c.email).set(a).then((function(){e.push("/checkout"),l(ke({},c,{isLoading:!1}))}),(function(e){return l(ke({},c,{formerr:e.message,isLoading:!1}))}))}),(function(e){return setTimeout((function(){l(ke({},c,{formerr:e.message,isLoading:!1}))}),2e3)}))}}},"Signup")),")}",r.a.createElement("div",{className:"w-full text-center p-t-27 p-b-239"},r.a.createElement("span",{className:"txt1"},"Forgot"),r.a.createElement("span",{className:"txt2"},"User name / password?")),r.a.createElement("div",{className:"w-full text-center"},r.a.createElement(u.c,{to:"/signin",className:"txt3"},"Sign in"))),r.a.createElement("div",{className:"login100-more",style:{backgroundImage:"url(".concat(me.a,")")}})))),c.isLoading&&r.a.createElement("div",{id:"pb_loader",className:"show fullscreen"},r.a.createElement("svg",{className:"circular",width:"48px",height:"48px"},r.a.createElement("circle",{className:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),r.a.createElement("circle",{className:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#FDA04F"}))))},_e=a(16);function De(){var e=Object(i.f)(),t=Object(n.useContext)(A).state,a=t.cart,c=t.userDetails,l=Object(n.useState)(0),s=Object(o.a)(l,2),m=s[0],p=s[1];return Object(n.useEffect)((function(){_e.auth().onAuthStateChanged((function(t){t||e.push("/signup")}))}),[e]),Object(n.useEffect)((function(){return p(a.reduce((function(e,t){return e+t.count*t.Price}),0))}),[a]),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 center",style:{margin:"auto"}},r.a.createElement("div",{className:"bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"},"Order summary"),r.a.createElement("div",{className:"p-4"},r.a.createElement("ul",{className:"list-unstyled mb-4"},r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Name: "),r.a.createElement("strong",null,c.name)),r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Contact Number"),r.a.createElement("strong",null,c.phonenum)),r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Address"),r.a.createElement("strong",null,c.address)),r.a.createElement("li",{className:"d-flex justify-content-between py-3 border-bottom"},r.a.createElement("strong",{className:"text-muted"},"Total"),r.a.createElement("h5",{className:"font-weight-bold"}," \u20a8",m.toFixed(2)))),r.a.createElement(u.c,{onClick:function(){alert("*******************\nTest Order\nName: "+c.name+" \nContact Num: "+c.phonenum+" \nAddress: "+c.address+"\nTotal Cost: "+m+" \nOrder Details\n"+JSON.stringify(a))}},r.a.createElement("span",{className:"btn btn-dark rounded-pill py-2 btn-block"},"Order"))))))}function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ae=a(16);var Fe=function(){var e=Object(n.useState)({webVer:"App",mobVer:"AApp display-4"}),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(i.f)(),u=Object(n.useContext)(A).dispatch;return Object(n.useEffect)((function(){Ae.auth().onAuthStateChanged((function(e){e?Ae.firestore().collection("users").doc(e.email).get().then((function(e){var t=e.data();u({type:"Set Email",payload:t})}),console.log("err")):u({type:"Set Email",payload:""})}))}),[u,l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.webVer},r.a.createElement("div",{className:"probootstrap-loader"}),r.a.createElement(T,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/cart"},r.a.createElement(m.a,null,r.a.createElement(ye,null))),r.a.createElement(i.a,{path:"/checkout"},r.a.createElement(m.a,null,r.a.createElement(De,null))),r.a.createElement(i.a,{path:"/about"},r.a.createElement(m.a,null,r.a.createElement(de,null))),r.a.createElement(i.a,{path:"/sectionmenu"},r.a.createElement(m.a,null,r.a.createElement(se,null))),r.a.createElement(i.a,{path:"/navbar-slide"},r.a.createElement(m.a,null,r.a.createElement(ve,null))),r.a.createElement(i.a,{path:"/signin"},r.a.createElement(m.a,null,r.a.createElement(xe,null))),r.a.createElement(i.a,{path:"/signup"},r.a.createElement(m.a,null,r.a.createElement(Se,null))),r.a.createElement(i.a,{path:"/"},r.a.createElement(m.a,null,r.a.createElement(oe,null)))),r.a.createElement(he,null),r.a.createElement("div",{id:"pb_loader",className:"show fullscreen"},r.a.createElement("svg",{className:"circular",width:"48px",height:"48px"},r.a.createElement("circle",{className:"path-bg",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4",stroke:"#eeeeee"}),r.a.createElement("circle",{className:"path",cx:"24",cy:"24",r:"22",fill:"none","stroke-width":"4","stroke-miterlimit":"10",stroke:"#FDA04F"})))),r.a.createElement("div",{className:a.mobVer},"Comming Soon on Android and iOS",r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn smoothscroll pb_outline-dark rounded-0 btn-xl pb_font-13 pb_letter-spacing-2 p-3","data-toggle":"popover",title:"Popover title",onClick:function(){c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{webVer:"App-1",mobVer:"AApp-1"}))}},"Click Here if you like to See Website version")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(16);a(85),Ie.initializeApp({apiKey:"AIzaSyDAigw0m3jOAn_r63jFRT0aCGRvu_8vU98",authDomain:"goodpizza-49bdb.firebaseapp.com",databaseURL:"https://goodpizza-49bdb.firebaseio.com",projectId:"goodpizza-49bdb",storageBucket:"goodpizza-49bdb.appspot.com",messagingSenderId:"82157270881",appId:"1:82157270881:web:56eda1254e1ab040a83720",measurementId:"G-7B2ST7PJLS"}),l.a.render(r.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(D,z),c=Object(o.a)(a,2),l=c[0],s=c[1];return console.log(l),Object(n.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(l.cart))}),[l.cart]),r.a.createElement(F,{value:{state:l,dispatch:s}},t)}),null,r.a.createElement(u.a,{history:!0},r.a.createElement(u.b,{basename:"/"},r.a.createElement(Fe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.c8d9bb85.chunk.js.map