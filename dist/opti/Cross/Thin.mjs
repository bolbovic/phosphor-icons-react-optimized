var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var h in a)
    o.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && r)
    for (var h of r(a))
      t.indexOf(h) < 0 && i.call(a, h) && (e[h] = a[h]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((h, e) => {
  var m = h, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M200,76H156V32a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12V76H56A12,12,0,0,0,44,88v32a12,12,0,0,0,12,12h44v92a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V132h44a12,12,0,0,0,12-12V88A12,12,0,0,0,200,76Zm4,44a4,4,0,0,1-4,4H152a4,4,0,0,0-4,4v96a4,4,0,0,1-4,4H112a4,4,0,0,1-4-4V128a4,4,0,0,0-4-4H56a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h48a4,4,0,0,0,4-4V32a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V80a4,4,0,0,0,4,4h48a4,4,0,0,1,4,4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
