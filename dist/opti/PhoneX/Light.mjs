var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && o.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((l, e) => {
  var c = l, { children: a } = c, t = p(c, ["children"]);
  return /* @__PURE__ */ A.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M147.76,99.76,167.52,80,147.76,60.24a6,6,0,0,1,8.48-8.48L176,71.51l19.76-19.75a6,6,0,0,1,8.48,8.48L184.48,80l19.76,19.76a6,6,0,1,1-8.48,8.48L176,88.48l-19.76,19.76a6,6,0,0,1-8.48-8.48Zm74.13,83.07A54.25,54.25,0,0,1,168,230C89.7,230,26,166.3,26,88A54.25,54.25,0,0,1,73.17,34.11a14,14,0,0,1,14.56,8.38l21.1,47.11a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L86.22,128.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,221.89,182.83ZM210,181.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57L97.79,96.09a2,2,0,0,0,0-1.67L76.74,47.31A2,2,0,0,0,74.9,46h-.23A42.24,42.24,0,0,0,38,88c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,210,181.32Z" }));
});
d.displayName = "Light";
export {
  d as Light
};