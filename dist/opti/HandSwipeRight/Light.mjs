var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && c(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const v = h((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M214,140v36c0,25.13-8.28,42-8.64,42.68A6,6,0,0,1,200,222a5.87,5.87,0,0,1-2.68-.64,6,6,0,0,1-2.68-8c.07-.14,7.37-15.19,7.37-37.32V140a14,14,0,0,0-28,0v4a6,6,0,0,1-12,0V124a14,14,0,0,0-28,0v12a6,6,0,0,1-12,0V68a14,14,0,0,0-28,0V176a6,6,0,0,1-11.09,3.17l-18.68-30a1,1,0,0,1-.1-.17,14,14,0,0,0-24.25,14l29.29,50A6,6,0,0,1,58.81,219L29.49,169a26,26,0,0,1,45-26.13L82,155V68a26,26,0,0,1,52,0v34.1a26,26,0,0,1,39.42,16.39A26,26,0,0,1,214,140Zm38.24-88.24-32-32a6,6,0,0,0-8.48,8.48L233.51,50H176a6,6,0,1,0,0,12h57.51L211.76,83.76a6,6,0,1,0,8.48,8.48l32-32A6,6,0,0,0,252.24,51.76Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
