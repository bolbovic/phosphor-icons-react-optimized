var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && c(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((r, e) => {
  var A = r, { children: a } = A, t = p(A, ["children"]);
  return /* @__PURE__ */ h.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M190.37,170.62A86.27,86.27,0,0,0,222,102c-1-44.68-36.76-81.51-81.34-83.86A86,86,0,0,0,50,102.51l-22.69,43.6c-.07.13-.13.26-.19.4a14,14,0,0,0,6.61,18l.18.09,24.08,11V208a14,14,0,0,0,14,14h48a6,6,0,0,0,0-12H72a2,2,0,0,1-2-2V171.81a6,6,0,0,0-3.5-5.46L39,153.78a2,2,0,0,1-.93-2.4l23.21-44.61A6,6,0,0,0,62,104a74.05,74.05,0,0,1,60-72.68V50.84a22,22,0,1,0,12,0V30.05c2-.05,4-.05,6,.06A74.29,74.29,0,0,1,206.63,82H184a6,6,0,0,0-4.61,2.16L152.94,115.9a22.06,22.06,0,1,0,9.21,7.69L186.81,94h22.5a72.44,72.44,0,0,1,.67,8.26A74.24,74.24,0,0,1,180.4,163.2a6,6,0,0,0-2.35,5.54l8,64A6,6,0,0,0,192,238a6.3,6.3,0,0,0,.75-.05,6,6,0,0,0,5.21-6.7ZM138,72a10,10,0,1,1-10-10A10,10,0,0,1,138,72Zm6,74a10,10,0,1,1,10-10A10,10,0,0,1,144,146Z" }));
});
V.displayName = "Light";
export {
  V as Light
};