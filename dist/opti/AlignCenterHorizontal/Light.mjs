var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ v.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M208,138H134V118h50a14,14,0,0,0,14-14V64a14,14,0,0,0-14-14H134V32a6,6,0,0,0-12,0V50H72A14,14,0,0,0,58,64v40a14,14,0,0,0,14,14h50v20H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14h74v18a6,6,0,0,0,12,0V206h74a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138ZM70,104V64a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2v40a2,2,0,0,1-2,2H72A2,2,0,0,1,70,104Zm140,88a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
