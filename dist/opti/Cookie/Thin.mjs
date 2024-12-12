var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && i(a, e, m[e]);
  if (r)
    for (var e of r(m))
      A.call(m, e) && i(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((t, e) => {
  var o = t, { children: a } = o, m = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, Z({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M161.66,166.34a8,8,0,1,1-11.32,0A8,8,0,0,1,161.66,166.34Zm-75.32-8a8,8,0,1,0,11.32,0A8,8,0,0,0,86.34,158.34Zm3.32-56a8,8,0,1,0,0,11.32A8,8,0,0,0,89.66,102.34Zm36.68,16a8,8,0,1,0,11.32,0A8,8,0,0,0,126.34,118.34ZM228,128A100,100,0,1,1,128,28a4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44,4,4,0,0,1,4,4,44.05,44.05,0,0,0,44,44A4,4,0,0,1,228,128Zm-8.08,3.84a52.08,52.08,0,0,1-47.78-48,52.08,52.08,0,0,1-48-47.78,92,92,0,1,0,95.76,95.76Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
