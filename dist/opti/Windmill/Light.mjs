var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, l, L) => l in a ? f(a, l, { enumerable: !0, configurable: !0, writable: !0, value: L }) : a[l] = L, p = (a, l) => {
  for (var L in l || (l = {}))
    o.call(l, L) && r(a, L, l[L]);
  if (t)
    for (var L of t(l))
      i.call(l, L) && r(a, L, l[L]);
  return a;
};
var Z = (a, l) => {
  var L = {};
  for (var e in a)
    o.call(a, e) && l.indexOf(e) < 0 && (L[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      l.indexOf(e) < 0 && i.call(a, e) && (L[e] = a[e]);
  return L;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((e, L) => {
  var m = e, { children: a } = m, l = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, p({ ref: L }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M224,226H181.2l-7.13-49.95,6.82,4a14,14,0,0,0,19.18-4.95l12-20.34a14,14,0,0,0-5-19.18L170.36,114l41.7-70.86a14,14,0,0,0-5-19.17L186.77,12a14,14,0,0,0-19.18,5L146,53.65,75.11,11.94a14,14,0,0,0-19.18,5l-12,20.34a14,14,0,0,0,5,19.17L85.64,78l-41.7,70.85a14,14,0,0,0,5,19.18l20.33,12A13.92,13.92,0,0,0,76.32,182a13.74,13.74,0,0,0,3.53-.46c.46-.12.91-.26,1.36-.42L74.8,226H32a6,6,0,0,0,0,12H224a6,6,0,0,0,0-12Zm-22.06-78.84a2,2,0,0,1-.22,1.51l-12,20.34a2,2,0,0,1-2.75.71L116.12,128l14-23.8L201,145.93A2,2,0,0,1,201.94,147.16ZM177.93,23a2,2,0,0,1,1.23-.92,2,2,0,0,1,1.51.21l20.34,12a2,2,0,0,1,.71,2.76L160,107.88l-23.81-14ZM54.06,44.85a2,2,0,0,1,.22-1.52L66.27,23A2,2,0,0,1,69,22.28L139.88,64l-14,23.8L55,46.07A2,2,0,0,1,54.06,44.85ZM78.07,169a2,2,0,0,1-2.74.71L55,157.73a2,2,0,0,1-.71-2.75L96,84.12l23.81,14Zm18-6.88,14-23.77,50.8,29.9L169.08,226H86.92Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
