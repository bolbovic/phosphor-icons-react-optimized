var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && c(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,88A32,32,0,1,0,96,56,32,32,0,0,0,128,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,40ZM48,96a16,16,0,1,1,16,16A16,16,0,0,1,48,96Zm174.24,14.61A8,8,0,0,1,211,111.87c-1.15-.89-23.71-17.7-59.32.61a214.93,214.93,0,0,1-3,30.35l32.43,27a8,8,0,0,1,2.47,8.68l-16,48a8,8,0,0,1-15.18-5.06l14.27-42.82-22.08-18.4a141.86,141.86,0,0,1-5.1,14.33c-13.75,32.74-38.38,54.63-73.2,65.08a8,8,0,0,1-4.6-15.32c60.68-18.21,71.14-72.22,73.42-101.65C108,139.88,86.57,144,72.36,144a59.59,59.59,0,0,1-19.67-3.27A8,8,0,0,1,56,125.4a7.82,7.82,0,0,1,3.31.73s26.76,10.68,72.19-20.2c52.29-35.54,88-7.77,89.51-6.57A8,8,0,0,1,222.24,110.61Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
