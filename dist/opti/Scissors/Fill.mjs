var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? Z(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (m)
    for (var l of m(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var t in a)
    i.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const A = d((t, l) => {
  var r = t, { children: a } = r, e = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(n, c({ ref: l }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M236.52,187.09l-143-97.87a36,36,0,1,0-14.38,17.27l21.39,21.69L79.15,149.54l0,0a35.91,35.91,0,1,0,14.38,17.27l26.91-18.41L170,198.64a32.26,32.26,0,0,0,22.7,9.37,31.52,31.52,0,0,0,4.11-.27l.28,0,36.27-6.11a8,8,0,0,0,3.19-14.5Zm-162.38-97A20,20,0,1,1,80,76,20,20,0,0,1,74.14,90.13Zm0,104A20,20,0,1,1,80,180,20,20,0,0,1,74.14,194.15Zm61-101.5L169.94,57.4a32.19,32.19,0,0,1,26.84-9.14l.28,0,36,6.07a8.21,8.21,0,0,1,6.09,4.42,8,8,0,0,1-2.67,10.12l-69.93,47.85a4,4,0,0,1-4.51,0l-26.31-18A4,4,0,0,1,135.18,92.65Z" }));
});
A.displayName = "Fill";
export {
  A as Fill
};
