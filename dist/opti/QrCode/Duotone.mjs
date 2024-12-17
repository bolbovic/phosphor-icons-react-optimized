var A = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, r = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (h)
    for (var e of h(m))
      H.call(m, e) && V(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      m.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as c } from "react";
import n from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, m = p(o, ["children"]);
  return /* @__PURE__ */ v.createElement(n, r({ ref: e }, m), a, /* @__PURE__ */ v.createElement(
    "path",
    {
      d: "M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm-8,88H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96-96H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ v.createElement("path", { d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm0,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48ZM200,40H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-64,72V144a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm80-16a8,8,0,0,1-8,8H184v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,160Zm0,32v16a8,8,0,0,1-16,0V192a8,8,0,0,1,16,0Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
