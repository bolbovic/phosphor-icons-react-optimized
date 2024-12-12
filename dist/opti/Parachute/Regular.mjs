var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((r, e) => {
  var c = r, { children: a } = c, m = p(c, ["children"]);
  return /* @__PURE__ */ A.createElement(s, h({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M232,120A104.12,104.12,0,0,0,128,16h0A104.12,104.12,0,0,0,24,120a7.94,7.94,0,0,0,3.05,6.27.93.93,0,0,0,.15.13L120,196v20h-8a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16h-8V196l92.8-69.6h0A8,8,0,0,0,232,120Zm-16.36-8H175.83c-1.54-37.95-13.91-62.43-25.11-77A88.2,88.2,0,0,1,215.64,112ZM128,34a76.89,76.89,0,0,1,13.88,16.22C149.49,62,158.45,81.87,159.82,112H96.18c1.37-30.13,10.33-50,17.94-61.74A76.92,76.92,0,0,1,128,34Zm26.4,94L128,175.53,101.6,128Zm-71.11,0,19.5,35.09L56,128Zm89.42,0H200l-46.79,35.09ZM105.28,35c-11.2,14.57-23.57,39.05-25.11,77H40.36A88.2,88.2,0,0,1,105.28,35Z" }));
});
H.displayName = "Regular";
export {
  H as Regular
};
