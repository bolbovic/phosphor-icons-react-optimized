var p = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, r = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && H(a, e, m[e]);
  if (h)
    for (var e of h(m))
      Z.call(m, e) && H(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import o, { forwardRef as c } from "react";
import n from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var v = t, { children: a } = v, m = A(v, ["children"]);
  return /* @__PURE__ */ o.createElement(n, r({ ref: e }, m), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z" }));
});
i.displayName = "Duotone";
export {
  i as Duotone
};
