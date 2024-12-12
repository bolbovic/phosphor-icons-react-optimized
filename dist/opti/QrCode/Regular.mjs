var l = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var h = (a, m, e) => m in a ? l(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && h(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && h(a, e, m[e]);
  return a;
};
var o = (a, m) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((r, e) => {
  var v = r, { children: a } = v, m = o(v, ["children"]);
  return /* @__PURE__ */ p.createElement(c, H({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm0,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48ZM200,40H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-64,72V144a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm80-16a8,8,0,0,1-8,8H184v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24V144a8,8,0,0,1,16,0v8h24A8,8,0,0,1,216,160Zm0,32v16a8,8,0,0,1-16,0V192a8,8,0,0,1,16,0Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
