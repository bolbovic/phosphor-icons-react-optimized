var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable;
var m = (a, e, c) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, i = (a, e) => {
  for (var c in e || (e = {}))
    o.call(e, c) && m(a, c, e[c]);
  if (r)
    for (var c of r(e))
      C.call(e, c) && m(a, c, e[c]);
  return a;
};
var p = (a, e) => {
  var c = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && C.call(a, t) && (c[t] = a[t]);
  return c;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const M = d((t, c) => {
  var l = t, { children: a } = l, e = p(l, ["children"]);
  return /* @__PURE__ */ s.createElement(n, i({ ref: c }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M138.62,128a53.54,53.54,0,0,1,13.1,1.63c-.57,8.21-3.34,15-8.11,19.61A23.89,23.89,0,0,1,127,156c-11.87,0-15-7.58-15-12.07C112,133,125.8,128,138.62,128ZM224,128c0,65.12-35.89,104-96,104S32,193.12,32,128,67.89,24,128,24,224,62.88,224,128ZM72,128c0-43.07,18.32-64,56-64,26.34,0,43,10.08,50.81,30.83a8,8,0,0,0,15-5.66C180.9,55.14,150.9,48,128,48c-26.1,0-45.52,8.7-57.72,25.86C60.8,87.19,56,105.4,56,128s4.8,40.81,14.28,54.14C82.48,199.3,101.9,208,128,208c24.45,0,39.82-8.8,48.41-16.18,10.76-9.25,17.19-21.89,17.19-33.82,0-14.3-6.59-26.79-18.56-35.17a54.16,54.16,0,0,0-7.77-4.5c-2.09-14.65-10-25.75-22.34-31.07C130.43,81,112,83.93,101.21,94.19a8,8,0,0,0,11,11.62c5.43-5.14,16.79-8,26.4-3.85a20.05,20.05,0,0,1,10.77,10.92,68.89,68.89,0,0,0-10.76-.85C113.53,112,96,125.15,96,143.93c0,16.27,13,28.07,31,28.07a40,40,0,0,0,27.75-11.29c4.7-4.59,10.11-12.2,12.17-24A25.55,25.55,0,0,1,177.6,158c0,13.71-15.76,34-49.6,34C90.32,192,72,171.07,72,128Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
