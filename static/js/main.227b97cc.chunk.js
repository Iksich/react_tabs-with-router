(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(4),i=c(2),b=(c(14),c(15),c(16),c(6)),j=c.n(b),r=c(1),d=function(e){var t=e.to,c=e.text;return Object(r.jsx)(n.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:c})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(d,{to:"/",text:"Home"}),Object(r.jsx)(d,{to:"/tabs",text:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{context:l})})})]})},x=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},O=c(0),h=function(e){var t=e.tab,c=e.isActive;return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":c}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)},m=function(e){var t=e.tabs,c=e.selectedTabId;return Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(h,{tab:e,isActive:c===e.id},e.id)}))})})},u=function(){var e=Object(i.i)(),t=Object(i.j)().tabId,c=void 0===t?"":t,s=Object(O.useMemo)((function(){return e.find((function(e){return e.id===c}))}),[c,e]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(m,{tabs:e,selectedTabId:c}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===s||void 0===s?void 0:s.content)||"Please select a tab"})]})};a.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(o,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(x,{})}),Object(r.jsxs)(i.c,{path:"tabs",children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(u,{})}),Object(r.jsx)(i.c,{path:":tabId",element:Object(r.jsx)(u,{})})]}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.227b97cc.chunk.js.map