(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[3],{44:function(e,r,t){"use strict";t.r(r);var n=t(1),s=t(28),c=t(14),u=t(7);var i=function(e){var r=e.users;return r?Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:r.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(c.b,{to:"/users/".concat(e.id),children:e.username})},e.id)}))})}):null},j=t(24),a=Object(n.createContext)(null),l=function(e){var r=e.resolve,t=Object(n.useContext)(a);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null};var b=Object(s.b)((function(e){return{users:e.users.users}}),{getUsers:j.b})((function(e){var r=e.users,t=e.getUsers;return Object(n.useEffect)((function(){r||t()}),[t,r]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i,{users:r}),Object(u.jsx)(l,{resolve:t})]})}));var o=function(e){var r=e.email,t=e.name,n=e.username;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[n," (",t,")"]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"e-mail:"})," ",r]})]})};var O=function(e){var r=e.id,t=Object(s.d)((function(e){return e.users.user})),c=Object(s.c)();return function(e){var r=Object(n.useContext)(a);r&&(r.done||r.promises.push(Promise.resolve(e())))}((function(){return c(Object(j.a)(parseInt(r)))})),Object(n.useEffect)((function(){t&&t.id===parseInt(r,10)||c(Object(j.a)(parseInt(r)))}),[c,r,t]),t?Object(u.jsx)(o,{id:t.id,email:t.email,username:t.username,name:t.name}):null},d=t(6);r.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(d.a,{path:"/users/:id",render:function(e){var r=e.match;return Object(u.jsx)(O,{id:r.params.id})}})]})}}}]);
//# sourceMappingURL=pages-UsersPage.972c4f2c.chunk.js.map