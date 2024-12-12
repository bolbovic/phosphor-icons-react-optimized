var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((r, e) => {
  var l = r, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M133.37,85.32a6,6,0,0,0-10.74,0l-72,144a6,6,0,0,0,10.74,5.37L75.71,206H180.29l14.34,28.68A6,6,0,0,0,200,238a5.87,5.87,0,0,0,2.68-.64,6,6,0,0,0,2.69-8.05ZM128,101.42,158.29,162H97.71ZM81.71,194l10-20h72.58l10,20Zm79.74-99.9A33.59,33.59,0,0,0,162,88a34,34,0,0,0-68,0,33.59,33.59,0,0,0,.55,6.1,6,6,0,1,1-11.81,2.13,46,46,0,1,1,90.52,0,6,6,0,0,1-5.89,4.94,5.64,5.64,0,0,1-1.08-.1A6,6,0,0,1,161.45,94.1ZM65.75,135A78,78,0,1,1,206,88a77.33,77.33,0,0,1-15.75,47,6,6,0,1,1-9.57-7.24A65.42,65.42,0,0,0,194,88,66,66,0,0,0,62,88a65.42,65.42,0,0,0,13.32,39.76A6,6,0,1,1,65.75,135Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
