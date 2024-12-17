var p = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (H)
    for (var e of H(t))
      v.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import i, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var h = m, { children: a } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ i.createElement(c, A({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M222,152a6,6,0,0,1-6,6H190v20h18a6,6,0,0,1,0,12H190v18a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6h32A6,6,0,0,1,222,152ZM90,172a26,26,0,0,1-26,26H54v10a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6H64A26,26,0,0,1,90,172Zm-12,0a14,14,0,0,0-14-14H54v28H64A14,14,0,0,0,78,172Zm84,8a34,34,0,0,1-34,34H112a6,6,0,0,1-6-6V152a6,6,0,0,1,6-6h16A34,34,0,0,1,162,180Zm-12,0a22,22,0,0,0-22-22H118v44h10A22,22,0,0,0,150,180ZM42,112V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0ZM158,82h35.52L158,46.48Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
