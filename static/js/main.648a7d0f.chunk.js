(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(17),s=c.n(i),a=(c(24),c(12)),o=c(7),j=c(2),l=c(0);function h(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Welcome to the color store!"}),Object(l.jsxs)("p",{children:["The website is currently under construction. Visit our ",Object(l.jsx)(o.b,{to:"/shop",children:"Shop!"})]})]})}function d(e){return Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{className:"logo",children:Object(l.jsx)(o.b,{exact:!0,to:"/",style:{textDecoration:"none",color:"#1C77C3"},children:"Color Store"})}),Object(l.jsxs)("ul",{className:"navLinks",children:[Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{exact:!0,to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{to:"/shop",children:"Shop"})}),Object(l.jsx)("li",{children:Object(l.jsxs)(o.c,{to:"/cart",children:["Cart",e.cart.length>0?"(".concat(function(){var t=0;for(var c in e.cart)t+=e.cart[c].inCart;return t}(),")"):null]})})]})]})}var b=c(13);function u(e){var t=Object(r.useRef)(null);return Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)("h4",{children:e.item.name}),Object(l.jsx)("section",{className:"item",style:{backgroundColor:e.item.color}}),Object(l.jsx)("p",{children:e.item.price}),Object(l.jsx)("input",{ref:t,type:"number",defaultValue:"1"}),Object(l.jsx)("button",{onClick:function(){var c=Object(b.a)(e.cart),r=e.item,n=Number(t.current.value);if(0!==n){if(c.length>0){var i=!1;for(var s in c)c[s].id===r.id?(i=!0,c[s].inCart+=n):r.inCart=n;i||c.push(r)}else r.inCart=n,c.push(r);e.setCart(c)}},children:"Add to cart"})]})}function O(e){var t=Object(r.useState)([{name:"Blue",id:0,color:"blue",price:"$14.99",inStock:!0},{name:"Red",id:1,color:"red",price:"$14.99",inStock:!0},{name:"Green",id:2,color:"green",price:"$14.99",inStock:!0},{name:"Yellow",id:3,color:"yellow",price:"$14.99",inStock:!0},{name:"Pink",id:4,color:"pink",price:"$14.99",inStock:!0}]),c=Object(a.a)(t,2),n=c[0];c[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Shop"}),Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:"header",children:"Featured Items"}),Object(l.jsx)("section",{className:"container",children:n.map((function(t){return Object(l.jsx)(u,{item:t,cart:e.cart,setCart:e.setCart},t.id)}))})]})]})}function x(e){return Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)("h4",{children:e.item.name}),Object(l.jsx)("section",{className:"item",style:{backgroundColor:e.item.color}}),Object(l.jsx)("p",{children:e.item.price}),Object(l.jsxs)("p",{children:["In cart: ",e.item.inCart]}),Object(l.jsx)("button",{onClick:function(){var t=Object(b.a)(e.cart),c=e.item,r=t.filter((function(e){return e.id!==c.id}));e.setCart(r)},children:"Remove from cart"})]})}function m(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"header",children:"Cart"}),Object(l.jsx)("section",{className:"container",children:e.cart.length>0?e.cart.map((function(t){return Object(l.jsx)(x,{item:t,cart:e.cart,setCart:e.setCart},t.id)})):Object(l.jsxs)("p",{children:["Your cart is empty! Head over to the ",Object(l.jsx)(o.b,{to:"/shop",children:"Shop!"})]})})]})}function p(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"ERROR: 404 - Page not found"}),Object(l.jsx)("p",{children:"Click on one of the links above or go back to continue browsing"})]})}c(34);function f(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(d,{cart:c}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(j.a,{path:"/shop",children:Object(l.jsx)(O,{cart:c,setCart:n})}),Object(l.jsx)(j.a,{path:"/cart",children:Object(l.jsx)(m,{cart:c,setCart:n})}),Object(l.jsx)(j.a,{component:p})]})]})}s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.648a7d0f.chunk.js.map