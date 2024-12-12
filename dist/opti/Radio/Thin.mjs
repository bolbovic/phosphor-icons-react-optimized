var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (H)
    for (var e of H(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((t, e) => {
  var r = t, { children: a } = r, m = n(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M100,168a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H96A4,4,0,0,1,100,168Zm-4-36H64a4,4,0,0,0,0,8H96a4,4,0,0,0,0-8ZM228,80V192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V72a4,4,0,0,1,2.85-3.81l160-48a4,4,0,0,1,2.3,7.66L59.25,68H216A12,12,0,0,1,228,80Zm-8,0a4,4,0,0,0-4-4H36V192a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Zm-24,56a36,36,0,1,1-36-36A36,36,0,0,1,196,136Zm-8,0a28,28,0,1,0-28,28A28,28,0,0,0,188,136ZM96,100H64a4,4,0,0,0,0,8H96a4,4,0,0,0,0-8Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
