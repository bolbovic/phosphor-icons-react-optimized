var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var A in a)
    c.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && r)
    for (var A of r(a))
      t.indexOf(A) < 0 && i.call(a, A) && (e[A] = a[A]);
  return e;
};
import Z, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const v = h((A, e) => {
  var m = A, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44l13.1,14.41A86,86,0,0,0,48,58a6,6,0,0,0-6,6v80a86.1,86.1,0,0,0,86,86h0a85.8,85.8,0,0,0,61.28-25.67L203.56,220a6,6,0,0,0,8.88-8.08ZM70.27,73.42l68.6,75.45A85.9,85.9,0,0,0,128,168.5a86.18,86.18,0,0,0-74-54.27v-44A73.11,73.11,0,0,1,70.27,73.42ZM122,217.76A74.1,74.1,0,0,1,54,144V126.24A74.1,74.1,0,0,1,122,200Zm12,0V200A74.05,74.05,0,0,1,147.12,158l34.06,37.47A73.81,73.81,0,0,1,134,217.76ZM214,64v80a86.2,86.2,0,0,1-3.08,22.87,6,6,0,0,1-5.78,4.41,6.26,6.26,0,0,1-1.59-.21,6,6,0,0,1-4.2-7.38A74.07,74.07,0,0,0,202,144V126.24A72.92,72.92,0,0,0,174.54,134a6,6,0,1,1-5.44-10.7,84.85,84.85,0,0,1,32.9-9.07v-44a74.29,74.29,0,0,0-54,30.39,6,6,0,1,1-9.72-7,86.23,86.23,0,0,1,26.1-23.7c-9.65-21.59-29.26-34.77-36.41-39a101.52,101.52,0,0,0-24.92,21,6,6,0,1,1-9.16-7.75,110.31,110.31,0,0,1,31.4-25.47,6,6,0,0,1,5.36,0c1.33.67,30.79,15.69,44.49,45.93A85.68,85.68,0,0,1,208,58,6,6,0,0,1,214,64Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
