var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as L } from "react";
import V from "../../lib/OptiBase.mjs";
const c = L((m, e) => {
  var H = m, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ A.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM172,96v24a4,4,0,0,1-4,4H144a4,4,0,0,1,0-8h14.66l-5.27-5.52a36.12,36.12,0,0,0-47-3.29,4,4,0,1,1-4.8-6.39,44.17,44.17,0,0,1,57.51,4.09L164,110V96a4,4,0,0,1,8,0Zm-16.8,61.6a4,4,0,0,1-.8,5.6,44.15,44.15,0,0,1-57.51-4.09L92,154v14a4,4,0,0,1-8,0V144a4,4,0,0,1,4-4h24a4,4,0,0,1,0,8H97.34l5.27,5.52a36.12,36.12,0,0,0,47,3.29A4,4,0,0,1,155.2,157.6Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
