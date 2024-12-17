var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const s = h((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(l, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,42H134V24a6,6,0,0,0-12,0V42H40A14,14,0,0,0,26,56V176a14,14,0,0,0,14,14H83.52L59.31,220.25a6,6,0,0,0,9.38,7.5L98.88,190h58.24l30.19,37.75a6,6,0,0,0,9.38-7.5L172.48,190H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,134a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
