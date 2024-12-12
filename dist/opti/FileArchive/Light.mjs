var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    m.call(e, H) && h(a, H, e[H]);
  if (r)
    for (var H of r(e))
      o.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((t, H) => {
  var V = t, { children: a } = V, e = p(V, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: H }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H110V198h10a6,6,0,0,0,0-12H110V166h10a6,6,0,0,0,0-12H110V134h10a6,6,0,0,0,0-12H110V112a6,6,0,0,0-12,0v10H88a6,6,0,0,0,0,12H98v20H88a6,6,0,0,0,0,12H98v20H88a6,6,0,0,0,0,12H98v20H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
