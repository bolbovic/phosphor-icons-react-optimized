var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? Z(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && l(a, e, m[e]);
  return a;
};
var n = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var h = t, { children: a } = h, m = n(h, ["children"]);
  return /* @__PURE__ */ A.createElement(f, p({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M235.81,36.19a28,28,0,0,0-39.6,0h0a28,28,0,0,0,0,39.6,26.62,26.62,0,0,0,3.14,2.71l-29.73,55.21a28.08,28.08,0,0,0-26.38,3.87l-24.82-24.82A28,28,0,0,0,76.2,76.19h0a28,28,0,0,0,3.14,42.31L49.6,173.72a28,28,0,0,0-29.41,6.49h0a28,28,0,1,0,39.6,0,28.63,28.63,0,0,0-3.14-2.71l29.73-55.21a28,28,0,0,0,26.38-3.87l24.82,24.82a28,28,0,1,0,39.09-5.74L206.4,82.28a28,28,0,0,0,29.41-46.09Zm-181.68,178a20,20,0,1,1,0-28.28A20,20,0,0,1,54.13,214.15Zm27.72-104a20,20,0,1,1,28.29,0h0A20,20,0,0,1,81.85,110.14Zm92.3,64a20,20,0,1,1,0-28.29A20,20,0,0,1,174.15,174.15Zm56-104a20,20,0,1,1,0-28.29A20,20,0,0,1,230.15,70.14Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
