var Z = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (c, s, a) => s in c ? Z(c, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : c[s] = a, i = (c, s) => {
  for (var a in s || (s = {}))
    V.call(s, a) && r(c, a, s[a]);
  if (t)
    for (var a of t(s))
      o.call(s, a) && r(c, a, s[a]);
  return c;
};
var p = (c, s) => {
  var a = {};
  for (var e in c)
    V.call(c, e) && s.indexOf(e) < 0 && (a[e] = c[e]);
  if (c != null && t)
    for (var e of t(c))
      s.indexOf(e) < 0 && o.call(c, e) && (a[e] = c[e]);
  return a;
};
import h, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const l = f((e, a) => {
  var m = e, { children: c } = m, s = p(m, ["children"]);
  return /* @__PURE__ */ h.createElement(d, i({ ref: a }, s), c, /* @__PURE__ */ h.createElement("path", { d: "M88,147.39a6,6,0,0,0,6-6V126h68v17.29a6,6,0,0,0,12,0V32a6,6,0,0,0-12,0V50H94V32a6,6,0,0,0-12,0V141.39A6,6,0,0,0,88,147.39ZM94,114V94h68v20Zm68-52V82H94V62ZM26,168a6,6,0,0,1,6-6c13.82,0,21,4.79,27.33,9,5.63,3.75,10.48,7,20.67,7s15-3.24,20.67-7c6.33-4.22,13.51-9,27.32-9s21,4.79,27.33,9c5.63,3.75,10.49,7,20.68,7s15-3.24,20.67-7c6.33-4.22,13.51-9,27.33-9a6,6,0,0,1,0,12c-10.18,0-15,3.24-20.67,7-6.34,4.22-13.52,9-27.33,9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15,3.24-20.67,7c-6.33,4.22-13.51,9-27.32,9s-21-4.79-27.33-9C47,177.24,42.18,174,32,174A6,6,0,0,1,26,168Zm204,40a6,6,0,0,1-6,6c-10.18,0-15,3.24-20.67,7-6.34,4.22-13.52,9-27.33,9s-21-4.79-27.33-9c-5.63-3.75-10.49-7-20.68-7s-15,3.24-20.67,7c-6.33,4.22-13.51,9-27.32,9s-21-4.79-27.33-9C47,217.24,42.18,214,32,214a6,6,0,0,1,0-12c13.82,0,21,4.79,27.33,9,5.63,3.75,10.48,7,20.67,7s15-3.24,20.67-7c6.33-4.22,13.51-9,27.32-9s21,4.79,27.33,9c5.63,3.75,10.49,7,20.68,7s15-3.24,20.67-7c6.33-4.22,13.51-9,27.33-9A6,6,0,0,1,230,208Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
