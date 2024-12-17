var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ c.createElement(H, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M161.76,28.41a4,4,0,0,0-4.22.43L86.63,84H40A12,12,0,0,0,28,96v64a12,12,0,0,0,12,12H86.63l70.91,55.16A4.07,4.07,0,0,0,160,228a3.92,3.92,0,0,0,1.76-.41A4,4,0,0,0,164,224V32A4,4,0,0,0,161.76,28.41ZM156,215.82l-65.54-51A4.06,4.06,0,0,0,88,164H40a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H88a4.06,4.06,0,0,0,2.46-.84l65.54-51Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
