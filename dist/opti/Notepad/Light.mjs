var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, e, V) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: V }) : a[e] = V, i = (a, e) => {
  for (var V in e || (e = {}))
    h.call(e, V) && H(a, V, e[V]);
  if (m)
    for (var V of m(e))
      o.call(e, V) && H(a, V, e[V]);
  return a;
};
var p = (a, e) => {
  var V = {};
  for (var t in a)
    h.call(a, t) && e.indexOf(t) < 0 && (V[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (V[t] = a[t]);
  return V;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((t, V) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, i({ ref: V }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M166,128a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,128Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12ZM214,40V200a30,30,0,0,1-30,30H72a30,30,0,0,1-30-30V40a6,6,0,0,1,6-6H74V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h36V24a6,6,0,0,1,12,0V34h26A6,6,0,0,1,214,40Zm-12,6H182V56a6,6,0,0,1-12,0V46H134V56a6,6,0,0,1-12,0V46H86V56a6,6,0,0,1-12,0V46H54V200a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
