var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const V = s((m, e) => {
  var h = m, { children: a } = h, t = Z(h, ["children"]);
  return /* @__PURE__ */ c.createElement(A, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M222,40a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM206,80v96a14,14,0,0,1-14,14H152a14,14,0,0,1-14-14V80a14,14,0,0,1,14-14h40A14,14,0,0,1,206,80Zm-12,0a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2Zm-76,0V216a14,14,0,0,1-14,14H64a14,14,0,0,1-14-14V80A14,14,0,0,1,64,66h40A14,14,0,0,1,118,80Zm-12,0a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
