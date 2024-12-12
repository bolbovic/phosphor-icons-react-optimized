var M = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var Z = (a, e, H) => e in a ? M(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, o = (a, e) => {
  for (var H in e || (e = {}))
    h.call(e, H) && Z(a, H, e[H]);
  if (A)
    for (var H of A(e))
      r.call(e, H) && Z(a, H, e[H]);
  return a;
};
var i = (a, e) => {
  var H = {};
  for (var t in a)
    h.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      e.indexOf(t) < 0 && r.call(a, t) && (H[t] = a[t]);
  return H;
};
import p, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, H) => {
  var m = t, { children: a } = m, e = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M237.82,158.54,215.34,68.61A14,14,0,0,0,201.75,58H134V40a14,14,0,0,0-14-14H80A14,14,0,0,0,66,40V58H54.25A14,14,0,0,0,40.66,68.6L18.18,158.54A6,6,0,0,0,18,160v32a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V160A6,6,0,0,0,237.82,158.54ZM78,40a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2V58H78ZM52.31,71.51A2,2,0,0,1,54.25,70h147.5a2,2,0,0,1,1.94,1.51L224.32,154H31.68ZM224,194H32a2,2,0,0,1-2-2V166H226v26A2,2,0,0,1,224,194ZM66,96a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H72A6,6,0,0,1,66,96Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,96Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H168A6,6,0,0,1,162,96ZM66,128a6,6,0,0,1,6-6H88a6,6,0,0,1,0,12H72A6,6,0,0,1,66,128Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H120A6,6,0,0,1,114,128Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H168A6,6,0,0,1,162,128Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
