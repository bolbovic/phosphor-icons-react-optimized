var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && A(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228.79,50.34A13.83,13.83,0,0,0,216,42H40A14,14,0,0,0,29.67,65.42l.06.06L98,138.38V216a14,14,0,0,0,21.76,11.64l32-21.33A14,14,0,0,0,158,194.66V138.38l68.34-73A13.83,13.83,0,0,0,228.79,50.34Zm-11.26,6.94-69.9,74.62A6,6,0,0,0,146,136v58.66a2,2,0,0,1-.89,1.67l-32,21.33A2,2,0,0,1,110,216V136a6,6,0,0,0-1.62-4.1L38.53,57.32a1.89,1.89,0,0,1-.33-2.13A1.91,1.91,0,0,1,40,54H216a1.9,1.9,0,0,1,1.82,1.19A1.87,1.87,0,0,1,217.53,57.28Zm26.71,154.49a6,6,0,1,1-8.48,8.48L216,200.49l-19.75,19.76a6,6,0,0,1-8.49-8.48L207.52,192l-19.76-19.76a6,6,0,0,1,8.49-8.49L216,183.52l19.76-19.76a6,6,0,0,1,8.48,8.49L224.49,192Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
