var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      p.call(m, e) && Z(a, e, m[e]);
  return a;
};
var M = (a, m) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var A = r, { children: a } = A, m = M(A, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M212,80a28,28,0,1,0,28,28A28,28,0,0,0,212,80Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,120ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM44,120a12,12,0,1,1,12-12A12,12,0,0,1,44,120ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm0-40A12,12,0,1,1,80,60,12,12,0,0,1,92,48Zm72,40a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,48Zm23.12,100.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72ZM168,208a24,24,0,0,1-9.45-1.93,80.14,80.14,0,0,0-61.19,0,24,24,0,0,1-20.71-43.26,51.22,51.22,0,0,0,24.46-30.67,28,28,0,0,1,53.78,0,51.27,51.27,0,0,0,24.53,30.71A24,24,0,0,1,168,208Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
