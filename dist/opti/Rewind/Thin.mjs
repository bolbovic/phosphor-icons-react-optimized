var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M221.85,61.48a12,12,0,0,0-12.18.39L124,116.43V71.84a11.66,11.66,0,0,0-6.15-10.36,12,12,0,0,0-12.18.39L17.48,118a11.81,11.81,0,0,0,0,19.94l88.19,56.16a12,12,0,0,0,12.18.39A11.66,11.66,0,0,0,124,184.16V139.57l85.67,54.56a12,12,0,0,0,12.18.39A11.66,11.66,0,0,0,228,184.16V71.84A11.66,11.66,0,0,0,221.85,61.48ZM116,184.16a3.76,3.76,0,0,1-2,3.35,3.91,3.91,0,0,1-4-.13L21.78,131.22a3.8,3.8,0,0,1,0-6.44L110,68.62a3.94,3.94,0,0,1,2.13-.63,4,4,0,0,1,1.91.5,3.76,3.76,0,0,1,2,3.35Zm104,0a3.76,3.76,0,0,1-2,3.35,3.91,3.91,0,0,1-4-.13l-88.18-56.16a3.8,3.8,0,0,1,0-6.44L214,68.62a3.94,3.94,0,0,1,2.13-.63,4,4,0,0,1,1.91.5,3.76,3.76,0,0,1,2,3.35Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
