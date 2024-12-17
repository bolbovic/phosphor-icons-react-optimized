var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var L = m, { children: a } = L, t = H(L, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M146,92a10,10,0,1,1,10,10A10,10,0,0,1,146,92ZM100,82a10,10,0,1,0,10,10A10,10,0,0,0,100,82Zm146,46a6,6,0,0,1-6,6H214v10a85.88,85.88,0,0,1-3.45,24.08L234.4,178.5a6,6,0,0,1-4.8,11l-23.23-10.15a86,86,0,0,1-156.74,0L26.4,189.5a6,6,0,1,1-4.8-11l23.85-10.42A85.88,85.88,0,0,1,42,144V134H16a6,6,0,0,1,0-12H42V112a85.88,85.88,0,0,1,3.45-24.08L21.6,77.5a6,6,0,0,1,4.8-11L49.63,76.65a86,86,0,0,1,156.74,0L229.6,66.5a6,6,0,1,1,4.8,11L210.55,87.92A85.88,85.88,0,0,1,214,112v10h26A6,6,0,0,1,246,128ZM54,122H202V112a74,74,0,0,0-148,0Zm68,95.74V134H54v10A74.09,74.09,0,0,0,122,217.74ZM202,134H134v83.74A74.09,74.09,0,0,0,202,144Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
