(this.webpackJsonpherbal=this.webpackJsonpherbal||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var s=a(23),r=a(2),n=a.n(r),c=a(5),i=a(4),o=a(3),d=a.n(o),l=a(1),u=a(38),m=a.n(u),b=a(16),j=a(6),h=function(){var e=Object(c.a)(n.a.mark((function e(t,a,s,r,i,o){var l,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=!1,e.next=4,d.a.get("/api/orders_products/order/".concat(t));case 4:if(e.sent.data.forEach(function(){var e=Object(c.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.productId!==a||!1!==l||t.size!==r){e.next=6;break}return l=!0,c={quantity:Number(t.quantity)+Number(s)},e.next=5,d.a.patch("/api/orders_products/quantity/".concat(t.id),c);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),!1!==l){e.next=11;break}return u={quantity:s,size:r,price:o},e.next=10,d.a.post("/api/orders_products/order/".concat(t,"/product/").concat(a),u);case 10:e.sent;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("ERROR-addtocart",e.t0),alert("There was an issue adding this item to your cart");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a,s,r,n,c){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(n.a.mark((function e(t,a){var s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={status:"checkout"},e.next=4,d.a.patch("/api/orders/".concat(t),s);case 4:return e.sent,e.next=7,d.a.post("/api/orders/users/".concat(a));case 7:return r=e.sent,e.abrupt("return",r.data.id);case 11:e.prev=11,e.t0=e.catch(0),console.log("ERROR-checkout",e.t0),alert("There was an issue checking out");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(n.a.mark((function e(t,a,s){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("/api/orders_products/product/".concat(a,"/order/").concat(t));case 3:return r=e.sent,e.next=6,d.a.delete("/api/orders_products/".concat(r.data[0].id));case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log("ERROR-removefromcart",e.t0),alert("There was an issue removing your item from the cart");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,s){return e.apply(this,arguments)}}(),O=a(0),x=function(e){var t=e.token,a=e.orderId,s=e.productId,r=e.setProductId,o=e.guestCart,u=e.setGuestCart,m=e.setUsesFilter,b=e.setUseToggle,j=Object(l.useState)([]),p=Object(i.a)(j,2),f=p[0],x=p[1],g=Object(l.useState)([]),v=Object(i.a)(g,2),w=v[0],k=v[1],y=Object(l.useState)(1),N=Object(i.a)(y,2),I=N[0],C=N[1],S=Object(l.useState)(""),P=Object(i.a)(S,2),R=P[0],E=P[1],q=Object(l.useState)(0),T=Object(i.a)(q,2),z=T[0],U=T[1],G=Object(l.useState)([]),_=Object(i.a)(G,2),A=_[0],L=_[1];f.banner;Object(l.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=5;break}return e.next=3,d.a.get("/api/products/".concat(s));case 3:t=e.sent,x(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=7;break}return e.next=3,d.a.get("/api/price/".concat(s));case 3:t=e.sent,k(t.data),U(t.data[0].price),E(t.data[0].size);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=5;break}return e.next=3,d.a.get("/api/uses/productId/".concat(s));case 3:t=e.sent,L(t.data.sort());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),a(),C(1)}),[s]);return s?Object(O.jsx)("div",{className:"modal-sp",children:Object(O.jsxs)("div",{className:"modal-sp-content",children:[Object(O.jsx)("div",{className:"modal-sp-header-backup",children:Object(O.jsx)("i",{className:"material-icons md-48 md-dark",id:"modal-sp-icon",onClick:function(){r(""),E(""),U(0),C(1)},children:"close"})}),Object(O.jsxs)("div",{className:"modal-sp-body",children:[Object(O.jsx)("img",{className:"modal-sp-image",src:f.image,alt:f.name}),Object(O.jsxs)("div",{className:"modal-sp-info",children:[Object(O.jsx)("h3",{className:"modal-sp-title",children:f.name}),Object(O.jsx)("p",{className:"item-description1",children:f.description})]}),Object(O.jsxs)("div",{className:"modal-sp-selection",children:[Object(O.jsxs)("div",{className:"modal-sp-selection-tools",children:[Object(O.jsx)("div",{className:"modal-sp-radio",children:w.map((function(e,t){return Object(O.jsxs)("div",{className:"item-sizes",children:[Object(O.jsx)("input",{className:"item-radio",type:"radio",name:"sizes",defaultChecked:0===t,onClick:function(t){!function(e,t){E(e),U(t)}(e.size,e.price)}}),Object(O.jsx)("label",{className:"item-radio-label",children:e.size})]},e.id)}))}),Object(O.jsx)("input",{className:"item-spinner",type:"number",min:"1",max:"10",defaultValue:"1",size:"2",onChange:function(e){C(e.target.value)}})]}),Object(O.jsxs)("p",{className:"item-price",children:[Object(O.jsx)("span",{className:"fact-name",children:"Price:"}),Object(O.jsx)("span",{children:z*I})]}),Object(O.jsx)("button",{className:"modal-sp-add-item",onClick:function(){!function(e,s){if(r(e),R)if(t)h(a,e,I,R,s,z),alert("".concat(I," ").concat(f.name," has been added to the cart"));else try{var n=!1;r(e);var c=o;c.forEach((function(t){if(t.productId===e&&t.size===R&&!1===n){n=!0;var a=Number(t.quantity)+Number(I);t.quantity=a,u(c),localStorage.setItem("cart",JSON.stringify(c))}})),!1===n&&(c.push({description:f.description,productId:f.id,image:f.image,name:f.name,price:z,sciname:f.sciname,size:R,quantity:I}),u(c),localStorage.setItem("cart",JSON.stringify(c))),alert("".concat(I," ").concat(f.name," has been added to the cart")),r("")}catch(i){console.log("ERROR-addtoguestcart",i),alert("There was an issue adding this item to your guest cart")}else alert("Please choose a valid size")}(f.id,f.name)},children:"add to cart"})]})]}),Object(O.jsxs)("div",{className:"modal-sp-uses",children:[Object(O.jsx)("h2",{children:"Uses"}),Object(O.jsx)("p",{children:"click below to filter products by use."}),A.map((function(e,t){return Object(O.jsx)("button",{onClick:function(){var t;t=e.usesId,m(t),b(!0),r("")},children:e.use},e.id)}))]})]})}):null},g=function(e){var t=e.token,a=e.productId,s=e.setProductId,r=e.usesFilter,o=e.setUsesFilter,u=e.orderId,m=e.guestCart,b=e.setGuestCart,j=Object(l.useState)([]),h=Object(i.a)(j,2),p=h[0],f=h[1],g=Object(l.useState)([]),v=Object(i.a)(g,2),w=v[0],k=v[1],y=Object(l.useState)(!1),N=Object(i.a)(y,2),I=N[0],C=N[1];Object(l.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/products");case 2:t=e.sent,f(t.data.sort((function(e,t){var a=e.name,s=t.name;return a<s?-1:a>s?1:0})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new URLSearchParams).append("usesId",r),e.next=4,d.a.get("/api/products/uses/",{params:t});case 4:a=e.sent,f(a.data.sort((function(e,t){var a=e.name,s=t.name;return a<s?-1:a>s?1:0})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/uses");case 2:t=e.sent,k(t.data.sort((function(e,t){var a=e.use,s=t.use;return a<s?-1:a>s?1:0})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a(),r.length<1?e():t()}),[r]);var S={};return a&&(S={height:"100vh",position:"fixed",overflowY:"none"}),Object(O.jsxs)("div",{id:"allProductsPage",style:S,children:[Object(O.jsx)(x,{token:t,orderId:u,productId:a,setProductId:s,guestCart:m,setGuestCart:b,setUsesFilter:o,setUseToggle:C}),Object(O.jsx)("div",{id:"use-toggle",children:I?Object(O.jsx)("button",{id:"use-toggle-button-hide",onClick:function(){C(!I)},children:"hide uses"}):Object(O.jsx)("button",{id:"use-toggle-button",onClick:function(){C(!I)},children:"select use"})}),I?Object(O.jsx)("div",{className:"uses",children:Object(O.jsx)("div",{className:"uses-mapped",children:w.map((function(e){return r===e.id?Object(O.jsx)("p",{className:"use-clicked",onClick:function(){o([])},children:e.use},e.id):Object(O.jsx)("p",{className:"use",onClick:function(){o(e.id)},children:e.use},e.id)}))})}):null,Object(O.jsx)("div",{className:"products",children:p.map((function(e){return Object(O.jsxs)("div",{className:"product",children:[Object(O.jsx)("div",{className:"product-image-container",children:Object(O.jsx)("img",{className:"product-image",src:e.image,alt:e.name,onClick:function(){var t,a;t=e.id,a=e.productId,r.length<1?s(t):s(a)}})}),Object(O.jsx)("h2",{className:"product-name",children:e.name})]},e.id)}))})]})},v=(a(98),a(67),function(e){var t=e.setToken,a=e.setOrderId,s=e.showLogin,r=e.setShowLogin,i=e.guestCart,o=e.setGuestCart,l=e.username,u=e.setUsername,m=e.password,b=e.setPassword;function j(){return(j=Object(c.a)(n.a.mark((function e(){var s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={username:l,password:m},e.prev=1,e.next=4,d.a.post("/api/users/login",s);case 4:return c=e.sent,t(c.data.token),localStorage.setItem("token",c.data.token),e.next=9,d.a.get("/api/orders/users/".concat(c.data.user.id));case 9:u=e.sent,a(u.data[0].id),i.length>0&&(confirm("You have previously saved items in your cart. Would you like to merge your new items with the previously saved items in your cart?")?(console.log("merge"),i.forEach((function(e){h(u.data[0].id,e.id,e.quantity,e.size,e.name)})),o([]),localStorage.removeItem("cart")):(o([]),localStorage.removeItem("cart"))),r(""),alert("You are logged in!"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.log("ERROR-login",e.t0),alert("There was an issue with your login attempt");case 20:case"end":return e.stop()}}),e,null,[[1,16]])})))).apply(this,arguments)}return"login"!==s?null:Object(O.jsx)("div",{className:"modal_overlay",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h3",{className:"modal-title",children:"Login"}),Object(O.jsx)("i",{className:"material-icons md-48 md-dark",id:"login-close-icon",onClick:function(){r(""),u(""),b("")},children:"close"})]}),Object(O.jsxs)("div",{className:"modal-body",children:[Object(O.jsxs)("form",{id:"modal-form",onSubmit:function(e){e.preventDefault(),function(){j.apply(this,arguments)}()},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"modal-label",children:Object(O.jsx)("p",{className:"modal-text",children:"Username"})}),Object(O.jsx)("input",{type:"text",placeholder:"username",name:"uname",value:l,onChange:function(e){u(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"modal-label",children:Object(O.jsx)("p",{className:"modal-text",children:"Password"})}),Object(O.jsx)("input",{type:"password",placeholder:"password",name:"psw",value:m,onChange:function(e){b(e.target.value)},required:!0})]}),Object(O.jsx)("div",{className:"modal-buttons",children:Object(O.jsx)("button",{className:"modal-button",type:"submit",children:"login"})})]}),Object(O.jsxs)("div",{className:"modal-end",children:[Object(O.jsx)("p",{className:"login-text",children:"Not a user? "}),Object(O.jsx)("button",{className:"modal-link",onClick:function(){r("register")},children:"click here to register"})]})]})]})})}),w=function(e){var t=e.setToken,a=e.setOrderId,s=e.showLogin,r=e.setShowLogin,i=e.guestCart,o=e.setGuestCart,l=e.username,u=e.setUsername,m=e.password,b=e.setPassword,j=e.passwordconfirm,p=e.setPasswordConfirm,f=e.email,x=e.setEmail;function g(){return(g=Object(c.a)(n.a.mark((function e(){var s,c,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={username:l,password:m,email:f},e.prev=1,m!==j){e.next=17;break}return e.next=5,d.a.post("/api/users/register",s);case 5:return c=e.sent,t(c.data.token),localStorage.setItem("token",c.data.token),e.next=10,d.a.post("/api/orders/users/".concat(c.data.user.id));case 10:u=e.sent,a(u.data.id),i.length>0&&(confirm("You have previously saved items in your cart. Would you like to merge your new items with the previously saved items in your cart?")?(console.log("merge"),i.forEach((function(e){console.log("orderId: ",u.data.id," productId: ",e.id," quantity: ",e.quantity," size: ",e.size," name: ",e.name),console.log("guestCart",e),h(u.data.id,e.id,e.quantity,e.size,e.name)})),o([]),localStorage.removeItem("cart")):(o([]),localStorage.removeItem("cart"))),r(""),alert("You registered and logged in!"),e.next=19;break;case 17:console.log(console.log("ERROR-password mismatch")),alert("Please reconfirm your password.");case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),console.log("ERROR-registration",e.t0),alert("There was an issue with your registration attempt");case 25:case"end":return e.stop()}}),e,null,[[1,21]])})))).apply(this,arguments)}return"register"!==s?null:Object(O.jsx)("div",{className:"modal_overlay",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("div",{className:"modal-header",children:[Object(O.jsx)("h3",{className:"modal-title",children:"Register"}),Object(O.jsx)("i",{className:"material-icons md-48 md-dark",id:"login-close-icon",onClick:function(){r(""),x(""),u(""),b(""),p("")},children:"close"})]}),Object(O.jsxs)("div",{className:"modal-body",children:[Object(O.jsxs)("form",{id:"modal-form",onSubmit:function(e){e.preventDefault(),function(){g.apply(this,arguments)}(),u(""),b(""),x("")},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"modal-label",children:Object(O.jsx)("p",{children:"Email"})}),Object(O.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email",value:f,onChange:function(e){x(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"modal-label",children:Object(O.jsx)("p",{className:"modal-text",children:"Username"})}),Object(O.jsx)("input",{type:"text",placeholder:"username",name:"uname",value:l,onChange:function(e){u(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"modal-label",children:Object(O.jsx)("p",{className:"modal-text",children:"Password"})}),Object(O.jsx)("input",{type:"password",placeholder:"password",name:"psw",value:m,onChange:function(e){b(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{className:"modal-label",children:Object(O.jsx)("p",{children:"Confirm Password"})}),Object(O.jsx)("input",{type:"password",placeholder:"confirm password",name:"psw",value:j,onChange:function(e){p(e.target.value)},required:!0})]}),Object(O.jsx)("div",{className:"modal-buttons",children:Object(O.jsx)("button",{className:"modal-button",type:"submit",children:"register"})})]}),Object(O.jsxs)("div",{className:"modal-end",children:[Object(O.jsx)("p",{className:"login-text",children:"Already registered? "}),Object(O.jsx)("button",{className:"modal-link",onClick:function(){r("login")},children:"click here to log in"})]})]})]})})},k=function(e){var t=e.token,a=e.setToken,s=e.orderId,r=e.setOrderId,n=e.guestCart,c=e.setGuestCart,o=e.setProductId,d=Object(l.useState)(""),u=Object(i.a)(d,2),m=u[0],j=u[1],h=Object(l.useState)(""),p=Object(i.a)(h,2),f=p[0],x=p[1],g=Object(l.useState)(""),k=Object(i.a)(g,2),y=k[0],N=k[1],I=Object(l.useState)(""),C=Object(i.a)(I,2),S=C[0],P=C[1],R=Object(l.useState)(""),E=Object(i.a)(R,2),q=E[0],T=E[1];return Object(O.jsxs)("div",{id:"nav-bar",children:[Object(O.jsxs)("div",{id:"nav-pages",children:[Object(O.jsx)(b.b,{to:"/products",id:"prod-btn",className:"nav-button linkto-styleA",onClick:function(){o("")},children:"products"}),Object(O.jsx)(b.b,{to:"/about",id:"abt-btn",className:"nav-button linkto-styleA",children:"about"})]}),Object(O.jsx)("h1",{id:"site-name",children:"herbal"}),Object(O.jsxs)("div",{id:"nav-account-items",children:[Object(O.jsx)("div",{id:"nav-account-icon-container",children:Object(O.jsx)(b.b,{to:"/cart",className:"material-icons md-48 md-dark",id:"nav-account-icon",children:"shopping_cart"})}),t?Object(O.jsx)("button",{className:"nav-account-login",onClick:function(e){e.preventDefault(),a(""),localStorage.removeItem("token"),r(""),x(""),N(""),q&&T(""),S&&P("")},children:"logout"}):Object(O.jsx)("button",{className:"nav-account-login",onClick:function(e){e.preventDefault(),j("login")},children:"login"})]}),Object(O.jsx)(v,{classname:"loginmodal",setToken:a,orderId:s,setOrderId:r,showLogin:m,setShowLogin:j,guestCart:n,setGuestCart:c,username:f,setUsername:x,password:y,setPassword:N}),Object(O.jsx)(w,{classname:"loginmodal",setToken:a,orderId:s,setOrderId:r,showLogin:m,setShowLogin:j,guestCart:n,setGuestCart:c,username:f,setUsername:x,password:y,setPassword:N,passwordconfirm:S,setPasswordConfirm:P,email:q,setEmail:T})]})},y=function(e){var t=e.token,a=e.orderId,s=e.setOrderId,r=e.productId,o=e.setProductId,u=e.guestCart,m=e.setGuestCart,b=e.user,j=Object(l.useState)([]),x=Object(i.a)(j,2),g=x[0],v=x[1];Object(l.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("---start to load data---"),e.next=3,d.a.get("/api/products/order/".concat(a));case 3:t=e.sent,console.log("orderProductsResponse: ",t.data),v(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a?e():a||v(u)}),[a,r,u]);var w=0,k=function(){var e=Object(c.a)(n.a.mark((function e(){var r,c,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(g.length>0)){e.next=21;break}if(!t){e.next=8;break}return e.next=4,p(a,b.id);case 4:r=e.sent,s(r),e.next=18;break;case 8:return e.next=10,d.a.post("/api/orders/guestusers");case 10:return c=e.sent,g.forEach((function(e){h(c.data.id,e.productId,e.quantity,e.size,e.name)})),i={status:"checkout"},e.next=15,d.a.patch("/api/orders/".concat(c.data.id),i);case 15:e.sent,m([]),localStorage.removeItem("cart");case 18:alert("You are checked out! Note: this is not a real e-commerce website. You have not actually purchased any items"),e.next=23;break;case 21:console.log("No Items in Cart"),alert("Notice: There are no items in your cart");case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(n.a.mark((function e(s,r,c,i){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return console.log("orderId: ",a," productId: ",s," productName: ",r),e.next=4,f(a,s,r);case 4:e.sent,o(s),alert("".concat(r," has been removed from the cart")),e.next=10;break;case 9:u.forEach((function(e){if(e.productId===s&&e.size===c){var t=u,a=t.indexOf(e);t.splice(a,1),m(t),localStorage.setItem("cart",JSON.stringify(t)),o(s)}}));case 10:case"end":return e.stop()}}),e)})));return function(t,a,s,r){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{id:"cart",children:[Object(O.jsx)("h2",{id:"cart-title",children:"your cart"}),Object(O.jsxs)("div",{id:"cart-screen",children:[Object(O.jsx)("div",{id:"cart-items",children:g.map((function(e,t){return w+=Number(e.price*e.quantity),Object(O.jsxs)("div",{className:"cart-item",children:[Object(O.jsx)("img",{src:e.image,className:"cart-item-image"}),Object(O.jsxs)("div",{className:"cart-item-info",children:[Object(O.jsx)("p",{className:"cart-item-name",name:"item-1",children:e.name}),Object(O.jsx)("p",{className:"cart-item-size",name:"item-1",children:e.size}),Object(O.jsxs)("p",{className:"cart-item-quantity",children:["qty: ",e.quantity]})]}),Object(O.jsxs)("div",{className:"cart-item-price-info",children:[Object(O.jsxs)("p",{className:"cart-item-price",children:["price: $",e.price*e.quantity]}),Object(O.jsx)("button",{className:"cart-item-button",onClick:function(){y(e.productId,e.name,e.size,e.quantity)},children:"Remove"})]})]},t)}))}),Object(O.jsx)("div",{id:"cart-checkout-container",children:Object(O.jsxs)("div",{id:"cart-checkout",children:[Object(O.jsx)("div",{id:"cart-checkout-header",children:Object(O.jsx)("h3",{id:"cart-checkout-title",children:"Cart Summary"})}),Object(O.jsxs)("p",{id:"cart-checkout-subTotalPrice",children:["sub-total: $",w]}),Object(O.jsx)("p",{id:"cart-checkout-shippingPrice",children:"estimated shipping: $7.95"}),Object(O.jsxs)("p",{id:"cart-checkout-grandTotalPrice",children:["Grand Total: $",w+7.95]}),Object(O.jsx)("button",{id:"cart-checkout-button",type:"submit",onClick:function(){k()},children:"Checkout"})]})})]})]})},N=function(e){return Object(O.jsxs)("div",{id:"about",children:[Object(O.jsx)("h2",{id:"about-title",children:"about herbal"}),Object(O.jsxs)("div",{id:"about-beginning",children:[Object(O.jsx)("div",{id:"image-container-herbs",children:Object(O.jsx)("img",{id:"about-beginning-image",src:"https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/2021-04/herbs.jpg?itok=g_UukhUg"})}),Object(O.jsxs)("div",{id:"about-info-container-one",children:[Object(O.jsx)("h3",{className:"about-info-header",children:"the beginning"}),Object(O.jsx)("p",{className:"about-info",children:"Hello. My name is Mason Swager and I created herbal. Recently I became interested in the beneficial medicinal uses of various herbs and spices. Around the same time I began my journey to become a full time web developer by graduating from the Full Stack Academy partnered with the University of Illinois Chicago. Naturally, when it came to designing a web-site to showcase what I had learned in my classes I decided to combine my two new interests."}),Object(O.jsx)("h3",{className:"about-info-header",children:"the motivation"}),Object(O.jsx)("p",{className:"about-info",children:"The motivation for herbal came from some of my frustration with matching herbal remedies with corresponding uses. On most of the sites I visited to purchase various herbal remedies and teas from, the process involved a lot of clicking on a product to determine its uses. I wanted to flip that on its head. I already know what I need a remedy for, so I built herbal to be able to easily provide the correct herbal remedies based on a selected use while still making it easy to find the remedy you want if you already know what it is."}),Object(O.jsx)("p",{className:"about-info",children:"It should be noted that herbal is currently just a display site for my web development skills. I am not a certified herbalist and the information on here was all gained from various informational websites and books."})]})]}),Object(O.jsxs)("div",{id:"about-site",children:[Object(O.jsxs)("div",{id:"about-info-container-two",children:[Object(O.jsx)("h3",{className:"about-info-header",children:"constructing the site"}),Object(O.jsx)("p",{className:"about-info",children:"herbal is built in two parts. The back-end is build using a PostGres database with express.js to interface with the front-end, which was built using REACT. The website is deployed on Heroku for public viewing. If you would like to see the code for herbal it can be found on GitHub here."}),Object(O.jsx)("h3",{className:"about-info-header",children:"about me"}),Object(O.jsx)("p",{className:"about-info",children:"As mentioned earlier, my name is Mason Swager. Before attending the Fullstack Academy UIC web development bootcamp I worked as a data analyst for a metrics company. I decided to leave to pursue a career in coding, because I felt that I wanted to learn and expand more than my trajectory was allowing. I graduated from Coe College in 2014 after majoring in Psychology and Art. My current favorite color is red and I have two black cats named Kuzco and Binx."})]}),Object(O.jsx)("div",{id:"image-container-portrait",children:Object(O.jsx)("img",{id:"about-site-image",src:"https://avatars.githubusercontent.com/u/17241621?v=4"})})]})]})},I=function(e){return Object(O.jsxs)("div",{id:"home",children:[Object(O.jsx)("img",{id:"cover",src:"https://healthylivingmarket.com/wp-content/uploads/2017/01/o-COOKING-WITH-HERBS-facebook.jpg"}),Object(O.jsx)(b.b,{to:"/products",id:"home-products-button",children:"meet the herbs"})]})},C=function(){var e=Object(l.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(l.useState)(""),u=Object(i.a)(o,2),m=u[0],h=u[1],p=Object(l.useState)(""),f=Object(i.a)(p,2),x=f[0],v=f[1],w=Object(l.useState)(""),C=Object(i.a)(w,2),S=C[0],P=C[1],R=Object(l.useState)([]),E=Object(i.a)(R,2),q=E[0],T=E[1],z=Object(l.useState)([]),U=Object(i.a)(z,2),G=U[0],_=U[1];return Object(l.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/users/me",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,h(t.data),e.next=6,d.a.get("/api/orders/users/".concat(t.data.id));case 6:a=e.sent,v(a.data[0].id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();localStorage.getItem("token")?(e(),r(localStorage.getItem("token"))):r(""),localStorage.getItem("cart")?_(JSON.parse(localStorage.getItem("cart"))):_([])}),[]),Object(O.jsx)("div",{id:"app",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(k,{token:a,setToken:r,orderId:x,setOrderId:v,guestCart:G,setGuestCart:_,setProductId:P}),Object(O.jsx)(j.a,{path:"/products",render:function(e){return Object(O.jsx)(g,Object(s.a)(Object(s.a)({},e),{},{token:a,productId:S,setProductId:P,usesFilter:q,setUsesFilter:T,orderId:x,guestCart:G,setGuestCart:_}))}}),Object(O.jsx)(j.a,{path:"/cart",render:function(e){return Object(O.jsx)(y,Object(s.a)(Object(s.a)({},e),{},{token:a,productId:S,setProductId:P,orderId:x,setOrderId:v,guestCart:G,setGuestCart:_,user:m}))}}),Object(O.jsx)(j.a,{path:"/about",render:function(e){return Object(O.jsx)(N,Object(s.a)({},e))}}),Object(O.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(I,{})}})]})})};m.a.render(Object(O.jsx)(C,{}),document.getElementById("app"))}},[[171,1,2]]]);
//# sourceMappingURL=main.6615893c.chunk.js.map