var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var A in a)
    i.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && r)
    for (var A of r(a))
      t.indexOf(A) < 0 && p.call(a, A) && (e[A] = a[A]);
  return e;
};
import Z, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var m = A, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M234.9,56a62.86,62.86,0,0,0-92,0A68.16,68.16,0,0,0,128,80.44a68.16,68.16,0,0,0-15-24.45A62.86,62.86,0,0,0,21.1,56a4,4,0,0,0,1.3,6.42L90.86,92.2a68.66,68.66,0,0,0-12.45,2.11,67.49,67.49,0,0,0-41.28,31.46A66.72,66.72,0,0,0,30.33,177a4,4,0,0,0,2.57,2.75,4.1,4.1,0,0,0,1.29.21,4,4,0,0,0,2.43-.82L124,112.6V224a4,4,0,0,0,8,0V112.6l87.38,66.58a4,4,0,0,0,2.43.82,4.1,4.1,0,0,0,1.29-.21,4,4,0,0,0,2.57-2.75,66.72,66.72,0,0,0-6.8-51.27,67.49,67.49,0,0,0-41.28-31.46,68.66,68.66,0,0,0-12.45-2.11L233.6,62.41A4,4,0,0,0,234.9,56ZM67.08,44a55.13,55.13,0,0,1,40.18,17.5A60.86,60.86,0,0,1,123.7,97.77L31.12,57.48A54.75,54.75,0,0,1,67.08,44ZM36.77,169A58.72,58.72,0,0,1,44,129.79,59.57,59.57,0,0,1,80.47,102,61,61,0,0,1,96.1,100a59.71,59.71,0,0,1,24.41,5.22ZM212,129.79A58.72,58.72,0,0,1,219.23,169L135.49,105.2A60.24,60.24,0,0,1,212,129.79Zm-79.66-32A60.86,60.86,0,0,1,148.74,61.5a54.8,54.8,0,0,1,76.14-4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
