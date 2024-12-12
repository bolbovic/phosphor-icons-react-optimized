var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var v = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && v(a, e, m[e]);
  if (t)
    for (var e of t(m))
      V.call(m, e) && v(a, e, m[e]);
  return a;
};
var o = (a, m) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((r, e) => {
  var h = r, { children: a } = h, m = o(h, ["children"]);
  return /* @__PURE__ */ p.createElement(c, Z({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
