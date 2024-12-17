var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var A = r, { children: a } = A, t = L(A, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228.77,50.34A13.8,13.8,0,0,0,216,42H40A14,14,0,0,0,29.67,65.42l.06.07L98,138.38V216a14,14,0,0,0,21.77,11.64l32-21.33A14,14,0,0,0,158,194.66V138.38l68.33-73A13.82,13.82,0,0,0,228.77,50.34Zm-11.26,6.94L147.62,131.9A6,6,0,0,0,146,136v58.66a2,2,0,0,1-.89,1.67l-32,21.33A2,2,0,0,1,110,216V136a6,6,0,0,0-1.62-4.1L38.53,57.32A2,2,0,0,1,40,54H216a1.9,1.9,0,0,1,1.83,1.19A1.86,1.86,0,0,1,217.51,57.28Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
