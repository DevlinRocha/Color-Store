(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(17),s=c.n(i),o=(c(24),c(12)),a=c(4),j=c(2),l=c(0);function h(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Welcome to the color store!"}),Object(l.jsxs)("p",{children:["The website is currently under construction. Visit our ",Object(l.jsx)(a.b,{to:"/shop",children:"Shop!"})]})]})}function d(e){return Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{className:"logo",children:Object(l.jsx)(a.b,{exact:!0,to:"/",style:{textDecoration:"none",color:"#1C77C3"},children:"Color Store"})}),Object(l.jsxs)("ul",{className:"navLinks",children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{exact:!0,to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/shop",children:"Shop"})}),Object(l.jsx)("li",{children:Object(l.jsxs)(a.c,{to:"/cart",children:["Cart",e.cart.length>0?"(".concat(function(){var t=0;for(var c in e.cart)t+=e.cart[c].inCart;return t}(),")"):null]})})]})]})}var b=c(13);function u(e){var t=Object(n.useRef)(null);return Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)("h4",{children:e.item.name}),Object(l.jsx)("section",{className:"item",style:{backgroundColor:e.item.color}}),Object(l.jsxs)("p",{children:["$",e.item.price]}),Object(l.jsx)("input",{ref:t,type:"number",defaultValue:"1"}),Object(l.jsx)("button",{onClick:function(){var c=Object(b.a)(e.cart),n=e.item,r=Number(t.current.value);if(0!==r){if(c.length>0){var i=!1;for(var s in c)c[s].id===n.id?(i=!0,c[s].inCart+=r):n.inCart=r;i||c.push(n)}else n.inCart=r,c.push(n);e.setCart(c)}},children:"Add to cart"})]})}function O(e){var t=Object(n.useState)([{name:"Blue",id:0,color:"blue",price:14.99,inStock:!0},{name:"Red",id:1,color:"red",price:14.99,inStock:!0},{name:"Green",id:2,color:"green",price:14.99,inStock:!0},{name:"Yellow",id:3,color:"yellow",price:14.99,inStock:!0},{name:"Pink",id:4,color:"pink",price:14.99,inStock:!0}]),c=Object(o.a)(t,2),r=c[0];c[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Shop"}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"header",children:"Featured Items"}),Object(l.jsx)("section",{className:"container",children:r.map((function(t){return Object(l.jsx)(u,{item:t,cart:e.cart,setCart:e.setCart},t.id)}))})]})]})}function x(e){return Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)("h4",{children:e.item.name}),Object(l.jsx)("section",{className:"item",style:{backgroundColor:e.item.color}}),Object(l.jsxs)("p",{children:["$",e.item.price]}),Object(l.jsxs)("p",{children:["In cart: ",e.item.inCart]}),Object(l.jsx)("button",{onClick:function(){var t=Object(b.a)(e.cart),c=e.item,n=t.filter((function(e){return e.id!==c.id}));e.setCart(n)},children:"Remove from cart"})]})}function m(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Cart"}),Object(l.jsx)("section",{className:"container",children:e.cart.length>0?Object(l.jsxs)("div",{className:"container-column",children:[Object(l.jsx)("section",{className:"container",children:e.cart.map((function(t){return Object(l.jsx)(x,{item:t,cart:e.cart,setCart:e.setCart},t.id)}))}),Object(l.jsxs)("section",{className:"container-column",children:[Object(l.jsxs)("b",{children:["Total: $",e.cart.reduce((function(e,t){return e+t.price*t.inCart}),0)]}),Object(l.jsx)(a.b,{to:"/checkout",children:Object(l.jsx)("button",{onClick:function(){e.setCart([])},children:"Checkout"})})]})]}):Object(l.jsxs)("p",{children:["Your cart is empty! Head over to the ",Object(l.jsx)(a.b,{to:"/shop",children:"Shop!"})]})})]})}function p(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"ERROR: 404 - Page not found"}),Object(l.jsx)("p",{children:"Click on one of the links above or go back to continue browsing"})]})}function f(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Thanks for shopping at the color store!"}),Object(l.jsxs)("p",{children:["Your order is on the way! ",Object(l.jsx)(a.b,{to:"/shop",children:"Continue shopping!"})]})]})}c(34);function C(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(d,{cart:c}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(j.a,{path:"/shop",children:Object(l.jsx)(O,{cart:c,setCart:r})}),Object(l.jsx)(j.a,{path:"/cart",children:Object(l.jsx)(m,{cart:c,setCart:r})}),Object(l.jsx)(j.a,{path:"/checkout",component:f}),Object(l.jsx)(j.a,{component:p})]})]})}s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e0ccb19a.chunk.js.map