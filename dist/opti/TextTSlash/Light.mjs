var f = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ c.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M212,220.44a6,6,0,0,1-8.48-.4L134,143.52V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V130.32l-60-66V88a6,6,0,0,1-12,0V56a6,6,0,0,1,1.19-3.57L43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44ZM105.79,62H122V80.43a6,6,0,0,0,12,0V62h60V88a6,6,0,0,0,12,0V56a6,6,0,0,0-6-6H105.79a6,6,0,0,0,0,12Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
