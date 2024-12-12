var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var n = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import A, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((t, l) => {
  var m = t, { children: a } = m, e = n(m, ["children"]);
  return /* @__PURE__ */ A.createElement(s, c({ ref: l }, e), a, /* @__PURE__ */ A.createElement("path", { d: "M202.83,53.15a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66-5.66l56-56A4,4,0,0,1,202.83,53.15ZM244,58.41a46.13,46.13,0,0,1-13.6,32.83l-53.23,53.24a11.93,11.93,0,0,1-8.48,3.51H152a4,4,0,0,0-4,4v16.83a12.08,12.08,0,0,1-2.44,7.25c-.11.14-.23.28-.35.41l-8,8a12,12,0,0,1-17,0L98.7,163,18.83,242.83a4,4,0,0,1-5.66-5.66l79.88-79.88L71.51,135.75a12,12,0,0,1,0-17l8-8a3.62,3.62,0,0,1,.42-.36A12,12,0,0,1,87.17,108H104a4,4,0,0,0,4-4V87.3a12,12,0,0,1,3.51-8.49l53.24-53.23A46.43,46.43,0,0,1,244,58.41Zm-8,0a38.43,38.43,0,0,0-65.6-27.18L117.17,84.47A4,4,0,0,0,116,87.3V104a12,12,0,0,1-12,12H87.17a4,4,0,0,0-2.23.68l-7.77,7.77a4,4,0,0,0,0,5.66l48.72,48.72a4,4,0,0,0,5.66,0l7.77-7.77a4,4,0,0,0,.68-2.23V152a12,12,0,0,1,12-12h16.69a4,4,0,0,0,2.82-1.17l53.24-53.24A38.21,38.21,0,0,0,236,58.41Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
