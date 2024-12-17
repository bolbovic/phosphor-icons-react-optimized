var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && c(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((r, e) => {
  var H = r, { children: a } = H, t = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M235.6,176H220.24a104,104,0,1,0-184.52,0H20.4A12.26,12.26,0,0,0,8,187.78,12,12,0,0,0,20,200H80a8,8,0,0,1,0,16H72.16a8.2,8.2,0,0,0-8,6.33A8,8,0,0,0,72,232H199.73a8.18,8.18,0,0,0,8.25-7.47,8,8,0,0,0-8-8.53H144a8,8,0,0,1,0-16h7.79a8.28,8.28,0,0,0,8.15-7.05A8,8,0,0,0,152,184H136c-14.93,0-30.59-5.78-43-15.85-13.55-11-21-25.27-21-40.15a57,57,0,0,1,.71-9,8.21,8.21,0,0,1,8.85-7,8,8,0,0,1,7,9.27A41.33,41.33,0,0,0,88,128c0,22.16,26.26,40,48,40h15.44c13.5,0,24.86,11.05,24.55,24.55a24,24,0,0,1-.23,2.83,4,4,0,0,0,4,4.62H236a12,12,0,0,0,12-12.22A12.26,12.26,0,0,0,235.6,176ZM127.9,93.56A12,12,0,1,1,114.44,80.1,12,12,0,0,1,127.9,93.56Zm48,48a12,12,0,1,1-13.46-13.46A12,12,0,0,1,175.9,141.56Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
