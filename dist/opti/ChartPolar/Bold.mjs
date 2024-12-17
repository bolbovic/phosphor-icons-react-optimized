var c = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (e, m, A) => m in e ? c(e, m, { enumerable: !0, configurable: !0, writable: !0, value: A }) : e[m] = A, d = (e, m) => {
  for (var A in m || (m = {}))
    Z.call(m, A) && r(e, A, m[A]);
  if (a)
    for (var A of a(m))
      p.call(m, A) && r(e, A, m[A]);
  return e;
};
var l = (e, m) => {
  var A = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (A[t] = e[t]);
  if (e != null && a)
    for (var t of a(e))
      m.indexOf(t) < 0 && p.call(e, t) && (A[t] = e[t]);
  return A;
};
import M, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, A) => {
  var o = t, { children: e } = o, m = l(o, ["children"]);
  return /* @__PURE__ */ M.createElement(i, d({ ref: A }, m), e, /* @__PURE__ */ M.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96H194.92A68.16,68.16,0,0,0,140,61.08V44.87A84.18,84.18,0,0,1,211.13,116ZM116,116H85.68A44.13,44.13,0,0,1,116,85.68Zm0,24v30.32A44.13,44.13,0,0,1,85.68,140Zm24,0h30.32A44.13,44.13,0,0,1,140,170.32Zm0-24V85.68A44.13,44.13,0,0,1,170.32,116ZM116,44.87V61.08A68.16,68.16,0,0,0,61.08,116H44.87A84.18,84.18,0,0,1,116,44.87ZM44.87,140H61.08A68.16,68.16,0,0,0,116,194.92v16.21A84.18,84.18,0,0,1,44.87,140ZM140,211.13V194.92A68.16,68.16,0,0,0,194.92,140h16.21A84.18,84.18,0,0,1,140,211.13Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
