var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && m(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const H = d((t, e) => {
  var V = t, { children: a } = V, l = s(V, ["children"]);
  return /* @__PURE__ */ A.createElement(i, f({ ref: e }, l), a, /* @__PURE__ */ A.createElement("path", { d: "M236.4,70.65,130.2,40.31a8,8,0,0,0-3.33-.23L21.74,55.1A16.08,16.08,0,0,0,8,70.94V185.06A16.08,16.08,0,0,0,21.74,200.9l105.13,15A8.47,8.47,0,0,0,128,216a7.85,7.85,0,0,0,2.2-.31l106.2-30.34A16.07,16.07,0,0,0,248,170V86A16.07,16.07,0,0,0,236.4,70.65ZM96,120H80V62.94l40-5.72V198.78l-40-5.72V136H96a8,8,0,0,0,0-16ZM24,70.94l40-5.72V120H48a8,8,0,0,0,0,16H64v54.78l-40-5.72ZM136,197.39V58.61L232,86V170Z" }));
});
H.displayName = "Regular";
export {
  H as Regular,
  H as default
};
