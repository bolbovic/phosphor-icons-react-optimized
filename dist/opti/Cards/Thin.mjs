var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M184,76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V88A12,12,0,0,0,184,76Zm4,124a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4ZM228,56V176a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H64a4,4,0,0,1,0-8H216A12,12,0,0,1,228,56Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
