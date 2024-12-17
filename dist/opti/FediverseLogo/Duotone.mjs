var c = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && l(a, e, t[e]);
  if (Z)
    for (var e of Z(t))
      M.call(t, e) && l(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var A in a)
    r.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && Z)
    for (var A of Z(a))
      t.indexOf(A) < 0 && M.call(a, A) && (e[A] = a[A]);
  return e;
};
import m, { forwardRef as n } from "react";
import i from "../../lib/OptiBase.mjs";
const d = n((A, e) => {
  var o = A, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ m.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M148,64a20,20,0,1,1,20-20A20,20,0,0,1,148,64Zm64,40a20,20,0,1,0,20,20A20,20,0,0,0,212,104Zm-56,88a20,20,0,1,0,20,20A20,20,0,0,0,156,192ZM56,164a20,20,0,1,0,20,20A20,20,0,0,0,56,164Zm-4-60A20,20,0,1,0,32,84,20,20,0,0,0,52,104Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M212,96a27.84,27.84,0,0,0-10.51,2L171,59.94A28,28,0,1,0,120,44a28.65,28.65,0,0,0,.15,2.94L73.68,66.3a28,28,0,1,0-28.6,44.83l1.85,46.38a28,28,0,1,0,32.74,41.42L128,212.47a28,28,0,1,0,49.13-18.79l27.21-42.75A28,28,0,1,0,212,96Zm-56,88-.89,0-16.18-48.53,46.65-2.22a27.94,27.94,0,0,0,5.28,9l-27.21,42.75A28,28,0,0,0,156,184ZM62.92,156.87l-1.85-46.38a28,28,0,0,0,10.12-6.13L113.72,129,72.26,161.22A28,28,0,0,0,62.92,156.87ZM149.57,72a27.8,27.8,0,0,0,8.94-2L189,108.06a27.86,27.86,0,0,0-4.18,9.22l-46.57,2.22ZM82.09,173.85,124,141.26l15.94,47.83a28.2,28.2,0,0,0-7.6,8L84,183.53A28,28,0,0,0,82.09,173.85ZM148,32a12,12,0,1,1-12,12A12,12,0,0,1,148,32ZM126.32,61.7A28.44,28.44,0,0,0,134,68.24l-11.3,47.45L79.23,90.52A28,28,0,0,0,80,84a28.65,28.65,0,0,0-.15-2.94ZM40,84A12,12,0,1,1,52,96,12,12,0,0,1,40,84ZM56,196a12,12,0,1,1,12-12A12,12,0,0,1,56,196Zm100,28a12,12,0,1,1,12-12A12,12,0,0,1,156,224Zm56-88a12,12,0,1,1,12-12A12,12,0,0,1,212,136Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
