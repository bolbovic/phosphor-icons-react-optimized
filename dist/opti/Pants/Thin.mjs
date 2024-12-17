var L = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (A)
    for (var e of A(t))
      h.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const M = Z((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ p.createElement(n, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M219.91,214.51l-22-176A12,12,0,0,0,186,28H70A12,12,0,0,0,58.09,38.51l-22,176A12,12,0,0,0,48,228H88.69a12,12,0,0,0,11.64-9.06L128,112l27.67,106.94A12,12,0,0,0,167.31,228H208a12,12,0,0,0,11.91-13.49ZM197.52,99.9A36,36,0,0,1,164.23,68h29.3ZM70,36H186a4,4,0,0,1,4,3.5L192.53,60H63.47L66,39.5A4,4,0,0,1,70,36ZM62.47,68h29.3A36,36,0,0,1,58.48,99.9Zm30.1,149a4,4,0,0,1-3.88,3H48a4,4,0,0,1-4-4.5L57.47,108A44.05,44.05,0,0,0,99.81,68H124V95.49ZM211,218.65a4,4,0,0,1-3,1.35H167.31a4,4,0,0,1-3.89-3.06L132,95.49V68h24.19a44.05,44.05,0,0,0,42.34,40L212,215.5A4,4,0,0,1,211,218.65Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
