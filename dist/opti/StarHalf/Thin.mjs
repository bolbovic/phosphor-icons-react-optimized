var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var L = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && L(a, l, e[l]);
  if (m)
    for (var l of m(e))
      i.call(e, l) && L(a, l, e[l]);
  return a;
};
var n = (a, e) => {
  var l = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((t, l) => {
  var r = t, { children: a } = r, e = n(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, p({ ref: l }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M231.66,111.81l-5.06,4.36a4,4,0,1,1-5.22-6.06l5.05-4.36a4.37,4.37,0,0,0,1.32-4.77,4.29,4.29,0,0,0-3.81-3l-8.27-.67a4,4,0,1,1,.64-8l8.28.67a12.45,12.45,0,0,1,7.07,21.84ZM176.47,151.7l4.08,17.21a4,4,0,0,0,3.88,3.08,3.69,3.69,0,0,0,.93-.11,4,4,0,0,0,3-4.81l-3.52-14.85,9.79-8.45a4,4,0,0,0-5.22-6.06l-11.63,10A4,4,0,0,0,176.47,151.7Zm21.34,55.37a4,4,0,0,0-7.79,1.84l1.32,5.58a4.38,4.38,0,0,1-1.71,4.65,4.26,4.26,0,0,1-4.82.18l-6.72-4.13A4,4,0,1,0,173.9,222l6.72,4.13a12.4,12.4,0,0,0,18.51-13.49Zm-22.14-113L160,92.79a4,4,0,0,1-3.38-2.46L132,30.73l0-.09v156.2l9.34,5.74a4,4,0,0,1-4.2,6.82L128,193.77,75.38,226.13a12.4,12.4,0,0,1-18.51-13.49l14.32-60.42L24.34,111.81A12.45,12.45,0,0,1,31.41,90l61.47-5,23.68-57.34a12.37,12.37,0,0,1,22.88,0L163.12,85l13.2,1.06a4,4,0,0,1-.65,8ZM124,186.84V30.64l0,.09L99.34,90.33A4,4,0,0,1,96,92.79L32.06,98a4.29,4.29,0,0,0-3.81,3,4.37,4.37,0,0,0,1.32,4.77l48.68,42a4,4,0,0,1,1.28,3.95L64.66,214.49a4.38,4.38,0,0,0,1.71,4.65,4.28,4.28,0,0,0,4.82.18Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};