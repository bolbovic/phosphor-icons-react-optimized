var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && l(a, e, t[e]);
  if (A)
    for (var e of A(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var h = r, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ c.createElement(L, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M238,88.18a52.42,52.42,0,0,1-15.4,35.66l-34.75,34.75A52.28,52.28,0,0,1,150.62,174h-.05A52.63,52.63,0,0,1,98,119.9a6,6,0,0,1,6-5.84h.17a6,6,0,0,1,5.83,6.16A40.62,40.62,0,0,0,150.58,162h0a40.4,40.4,0,0,0,28.73-11.9l34.75-34.74A40.63,40.63,0,0,0,156.63,57.9l-11,11a6,6,0,0,1-8.49-8.49l11-11a52.62,52.62,0,0,1,74.43,0A52.83,52.83,0,0,1,238,88.18Zm-127.62,98.9-11,11A40.36,40.36,0,0,1,70.6,210h0a40.63,40.63,0,0,1-28.7-69.36L76.62,105.9A40.63,40.63,0,0,1,146,135.77a6,6,0,0,0,5.83,6.16H152a6,6,0,0,0,6-5.84A52.63,52.63,0,0,0,68.14,97.42L33.38,132.16A52.63,52.63,0,0,0,70.56,222h0a52.26,52.26,0,0,0,37.22-15.42l11-11a6,6,0,1,0-8.49-8.48Z" }));
});
d.displayName = "Light";
export {
  d as Light
};