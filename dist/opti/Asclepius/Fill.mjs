var V = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && l(a, e, t[e]);
  if (H)
    for (var e of H(t))
      o.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as v } from "react";
import f from "../../lib/OptiBase.mjs";
const h = v((r, e) => {
  var c = r, { children: a } = c, t = p(c, ["children"]);
  return /* @__PURE__ */ A.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M136,128v72h11.62A12.25,12.25,0,0,0,160,188.53a12,12,0,0,0-5.93-10.87,4.08,4.08,0,0,1-2.06-3.49v-8.79a4,4,0,0,1,5.25-3.81A28.06,28.06,0,0,1,176,187.71c.16,15.56-13,28.29-28.59,28.29H136v16a8,8,0,0,1-16,0V216H96a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,96.27,200H120V128H104.46c-8.6,0-16,6.6-16.44,15.19a16,16,0,0,0,12.87,16.51,3.94,3.94,0,0,1,3.11,3.89V172a4,4,0,0,1-4,4,36,36,0,0,1-36-36.87C64.47,119.48,81,104,100.68,104H120V24a8,8,0,0,1,16,0v80h32a16,16,0,0,0,16-16.81C183.56,78.6,176.14,72,167.54,72H156a4,4,0,0,1-4-4V44a4,4,0,0,1,4-4h15.22c24.62,0,45.2,20.15,44.77,44.76A44,44,0,0,1,172,128ZM92.66,72H100a4,4,0,0,0,4-4V44a4,4,0,0,0-4-4H64A40,40,0,0,0,24,80v8a8,8,0,0,0,8,8H56A40,40,0,0,0,92.66,72Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
