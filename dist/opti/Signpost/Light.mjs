var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(V, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M244.46,108,210.84,70.63A14,14,0,0,0,200.44,66H134V32a6,6,0,0,0-12,0V66H40A14,14,0,0,0,26,80v64a14,14,0,0,0,14,14h82v66a6,6,0,0,0,12,0V158h66.44a14,14,0,0,0,10.4-4.63L244.46,116A6,6,0,0,0,244.46,108Zm-42.54,37.35a2,2,0,0,1-1.48.66H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H200.44a2,2,0,0,1,1.48.66l30,33.34Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
