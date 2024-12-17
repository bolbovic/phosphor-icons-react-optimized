var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const l = f((m, e) => {
  var V = m, { children: a } = V, t = L(V, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, H({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M216,42H134V24a6,6,0,0,0-12,0V42H40A14,14,0,0,0,26,56V176a14,14,0,0,0,14,14H83.52L59.31,220.25a6,6,0,0,0,9.38,7.5L98.88,190h58.24l30.19,37.75a6,6,0,0,0,9.38-7.5L172.48,190H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,134a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM102,120v24a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm32-16v40a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm32-16v56a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
