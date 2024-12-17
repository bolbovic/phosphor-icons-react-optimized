var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, Z = (a, l) => {
  for (var e in l || (l = {}))
    A.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && r(a, e, l[e]);
  return a;
};
var d = (a, l) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import L, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, l = d(o, ["children"]);
  return /* @__PURE__ */ L.createElement(i, Z({ ref: e }, l), a, /* @__PURE__ */ L.createElement("path", { d: "M164,216a12,12,0,0,1-12,12H104a12,12,0,0,1,0-24h48A12,12,0,0,1,164,216Zm76.26-29.9L235.6,178a12,12,0,1,0-20.79,12l4.65,8.08a3.56,3.56,0,0,1,0,3.73,4.46,4.46,0,0,1-4,2.2H192a12,12,0,0,0,0,24h23.46a28.31,28.31,0,0,0,24.79-14.19A27.47,27.47,0,0,0,240.26,186.1ZM64,204H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L41.19,190A12,12,0,1,0,20.4,178l-4.66,8.09a27.47,27.47,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228H64a12,12,0,0,0,0-24Zm138.17-48a12,12,0,0,0,10.39-18l-23-40a12,12,0,0,0-20.8,12l23,40A12,12,0,0,0,202.18,156ZM166.5,58,152.81,34.23a28.74,28.74,0,0,0-49.62,0L89.5,58a12,12,0,1,0,20.79,12L124,46.2a4.75,4.75,0,0,1,8,0L145.71,70a12,12,0,0,0,10.41,6,11.87,11.87,0,0,0,6-1.6A12,12,0,0,0,166.5,58ZM82.85,93.6A12,12,0,0,0,66.46,98l-23,40a12,12,0,0,0,20.8,12l23-40A12,12,0,0,0,82.85,93.6Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
