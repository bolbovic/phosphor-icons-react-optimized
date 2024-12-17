var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? V(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && A(a, e, m[e]);
  if (r)
    for (var e of r(m))
      h.call(m, e) && A(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as n } from "react";
import H from "../../lib/OptiBase.mjs";
const c = n((t, e) => {
  var o = t, { children: a } = o, m = l(o, ["children"]);
  return /* @__PURE__ */ p.createElement(H, i({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M236,166.87V134a11.92,11.92,0,0,0-8.55-11.49l-.11,0L188,111.77V72a4,4,0,0,0-8,0v37.61l-32-8.67V52h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52V92H40a4,4,0,0,0,0,8H68a72.08,72.08,0,0,1,72,72v12a4,4,0,0,0,4,4h36a32,32,0,1,0,56-21.13ZM68,92H60V52h80v85.15A80.1,80.1,0,0,0,68,92Zm80,88V109.23l77.19,20.9A4,4,0,0,1,228,134v26.36A31.71,31.71,0,0,0,212,156a32.06,32.06,0,0,0-31,24Zm64,32a24,24,0,1,1,24-24A24,24,0,0,1,212,212ZM68,124a48,48,0,1,0,48,48A48.05,48.05,0,0,0,68,124Zm0,88a40,40,0,1,1,40-40A40,40,0,0,1,68,212Zm8-40a8,8,0,1,1-8-8A8,8,0,0,1,76,172Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
