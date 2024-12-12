var f = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (h)
    for (var e of h(t))
      H.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M200,74H158V32a14,14,0,0,0-14-14H112A14,14,0,0,0,98,32V74H56A14,14,0,0,0,42,88v32a14,14,0,0,0,14,14H98v90a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V134h42a14,14,0,0,0,14-14V88A14,14,0,0,0,200,74Zm2,46a2,2,0,0,1-2,2H152a6,6,0,0,0-6,6v96a2,2,0,0,1-2,2H112a2,2,0,0,1-2-2V128a6,6,0,0,0-6-6H56a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h48a6,6,0,0,0,6-6V32a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a6,6,0,0,0,6,6h48a2,2,0,0,1,2,2Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
