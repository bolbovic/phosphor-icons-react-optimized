var d = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (a, e, l) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, c = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && Z(a, l, e[l]);
  if (t)
    for (var l of t(e))
      r.call(e, l) && Z(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var m in a)
    o.call(a, m) && e.indexOf(m) < 0 && (l[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && r.call(a, m) && (l[m] = a[m]);
  return l;
};
import M, { forwardRef as L } from "react";
import f from "../../lib/OptiBase.mjs";
const i = L((m, l) => {
  var A = m, { children: a } = A, e = p(A, ["children"]);
  return /* @__PURE__ */ M.createElement(f, c({ ref: l }, e), a, /* @__PURE__ */ M.createElement("path", { d: "M212,92a31.86,31.86,0,0,0-9.16,1.34l-27-33.68A32,32,0,1,0,116,44c0,.11,0,.22,0,.33L74.75,61.52a32,32,0,1,0-33.55,52.6l1.62,40.73a32,32,0,1,0,38.49,48.7l42.89,12A32,32,0,1,0,182,193.43l24.16-38a31.68,31.68,0,0,0,5.8.54,32,32,0,0,0,0-64ZM71.64,109.24l34.93,20.22L72,156.33a31.68,31.68,0,0,0-5.24-2.45l-1.62-40.73A32.32,32.32,0,0,0,71.64,109.24Zm81.16-33.6a33.2,33.2,0,0,0,4.36-1l27,33.68a32.81,32.81,0,0,0-2.31,5.08l-38.43,1.83Zm-66,99.62L122,147.89l13.26,39.79a32.6,32.6,0,0,0-4.55,4.77l-42.89-12A33,33,0,0,0,86.78,175.26ZM158,180.07l-13.62-40.84L183,137.4a31.7,31.7,0,0,0,3,5.17l-24.16,38A31.64,31.64,0,0,0,158,180.07ZM148,36a8,8,0,1,1-8,8A8,8,0,0,1,148,36ZM125.25,66.48a33.46,33.46,0,0,0,4.21,3.58l-9.4,39.48L83.68,88.48A31.6,31.6,0,0,0,84,84c0-.11,0-.22,0-.33ZM52,76a8,8,0,1,1-8,8A8,8,0,0,1,52,76Zm4,116a8,8,0,1,1,8-8A8,8,0,0,1,56,192Zm100,28a8,8,0,1,1,8-8A8,8,0,0,1,156,220Zm56-88a8,8,0,1,1,8-8A8,8,0,0,1,212,132Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};