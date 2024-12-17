var s = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M138,204a10,10,0,1,1-10-10A10,10,0,0,1,138,204ZM52.44,36A6,6,0,0,0,43.56,44L61.33,63.58a169.41,169.41,0,0,0-41.14,25,6,6,0,1,0,7.62,9.27A157.58,157.58,0,0,1,69.91,73l26.48,29.13a122.21,122.21,0,0,0-44.12,22.19,6,6,0,0,0,7.46,9.41,110,110,0,0,1,45.87-21.47l31.13,34.25A74.4,74.4,0,0,0,128,146a73.44,73.44,0,0,0-43.53,14.15A6,6,0,0,0,88,171a5.93,5.93,0,0,0,3.53-1.15,62,62,0,0,1,59.76-7.31L203.56,220a6,6,0,0,0,8.88-8.08ZM235.81,88.55A170.32,170.32,0,0,0,128,50a173.45,173.45,0,0,0-21.76,1.38,6,6,0,1,0,1.52,11.9A160.58,160.58,0,0,1,128,62,158.26,158.26,0,0,1,228.19,97.82a6,6,0,1,0,7.62-9.27Zm-39.54,45.2A6,6,0,0,0,200,135a6,6,0,0,0,3.73-10.7,122.26,122.26,0,0,0-50.9-23.81,6,6,0,1,0-2.43,11.75A110,110,0,0,1,196.27,133.75Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
