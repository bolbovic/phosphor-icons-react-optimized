var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,172H220V72a20,20,0,0,0-20-20H56A20,20,0,0,0,36,72V172H24a4,4,0,0,0-4,4v16a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V176A4,4,0,0,0,232,172ZM44,72A12,12,0,0,1,56,60H200a12,12,0,0,1,12,12V172H44ZM228,192a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V180H228ZM148,88a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h32A4,4,0,0,1,148,88Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
