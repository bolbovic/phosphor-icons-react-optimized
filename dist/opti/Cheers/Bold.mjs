var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, M = (a, e) => {
  for (var l in e || (e = {}))
    Z.call(e, l) && r(a, l, e[l]);
  if (m)
    for (var l of m(e))
      c.call(e, l) && r(a, l, e[l]);
  return a;
};
var p = (a, e) => {
  var l = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && c.call(a, t) && (l[t] = a[t]);
  return l;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, l) => {
  var o = t, { children: a } = o, e = p(o, ["children"]);
  return /* @__PURE__ */ d.createElement(i, M({ ref: l }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M212.89,210.08l-13.78,3.69-8.57-32a44.07,44.07,0,0,0,20-49.17C197.73,85,171.23,43.28,170.11,41.53a12,12,0,0,0-13-5.17l-16.9,4.22c0-5.34-.18-8.63-.2-9.13a12,12,0,0,0-9.08-11.09l-32-8a12,12,0,0,0-13,5.17C84.77,19.28,58.27,61,45.51,108.6a44.07,44.07,0,0,0,19.95,49.17l-8.57,32-13.78-3.69a12,12,0,0,0-6.22,23.18l48,12.86a12,12,0,0,0,6.22-23.18l-11-3,8.57-32a44.21,44.21,0,0,0,34.62-17.65q1,4.53,2.23,9A44.06,44.06,0,0,0,167.36,188l8.57,32-11,3a12,12,0,0,0,6.22,23.18l48-12.86a12,12,0,1,0-6.22-23.18ZM162.59,77l-22.82,5.71c-.21-6.92-.19-12.83-.1-17.24l14.62-3.65C156.5,65.61,159.38,70.79,162.59,77ZM101.72,37.8l14.46,3.61c0,4,0,9.25-.24,15.34,0,.92-.11,2.2-.17,3.82L92.51,54.76C96.08,47.78,99.3,42,101.72,37.8ZM82.83,139.31a20,20,0,0,1-14.14-24.49,281,281,0,0,1,13.4-37.93l31.94,8a304.16,304.16,0,0,1-6.73,40.4A20,20,0,0,1,82.83,139.31Zm65.84,9.86A264.83,264.83,0,0,1,141.31,107l31.82-8a283,283,0,0,1,14.18,39.73,20,20,0,0,1-38.64,10.35Zm36-109.38a12,12,0,0,1,7.59-15.17l12-4a12,12,0,0,1,7.58,22.76l-12,4a12,12,0,0,1-15.17-7.59ZM236,72a12,12,0,0,1-12,12H212a12,12,0,0,1,0-24h12A12,12,0,0,1,236,72ZM28.62,20.21a12,12,0,0,1,15.17-7.59l12,4a12,12,0,1,1-7.58,22.76l-12-4A12,12,0,0,1,28.62,20.21ZM36,76H24a12,12,0,0,1,0-24H36a12,12,0,0,1,0,24Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
