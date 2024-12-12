var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const C = h((m, e) => {
  var c = m, { children: a } = c, t = l(c, ["children"]);
  return /* @__PURE__ */ A.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M166,76a10,10,0,1,1-10-10A10,10,0,0,1,166,76Zm49,66.67c-19.17,34.54-55.11,53.08-106.85,55.14L85.62,250.36A6,6,0,0,1,80.1,254h-.38a6,6,0,0,1-5.39-4.34L59.22,196.77,6.35,181.63a6,6,0,0,1-.71-11.29L58.2,147.85C60.28,96.13,78.81,60.2,113.33,41,159.56,15.34,219,30,222.09,31.78a6,6,0,0,1,2.12,2.11C226,36.94,240.67,96.38,215,142.65Zm-48,29.64A50.06,50.06,0,0,1,130,126,50.09,50.09,0,0,1,83.71,89c-8.46,16.93-13,38-13.63,63a6,6,0,0,1-3.64,5.38L25.88,174.74l39.85,11.41a6,6,0,0,1,4.12,4.12l11.38,39.85,17.39-40.56a6,6,0,0,1,5.37-3.64C129,185.33,150.05,180.76,167,172.29Zm51-94.53a171.1,171.1,0,0,0-3.86-35.92A170.78,170.78,0,0,0,178.25,38H178c-18.52,0-45,3.22-66.67,18.47A83.53,83.53,0,0,0,94.17,72.56a38,38,0,0,0,41.47,41.25,6,6,0,0,1,6.54,6.55,38,38,0,0,0,41.28,41.46,83.13,83.13,0,0,0,16.07-17.07C214.87,123,218.05,96.31,218,77.76Z" }));
});
C.displayName = "Light";
export {
  C as Light
};
