var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && o(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && V.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M100,122a10,10,0,1,1,10-10A10,10,0,0,1,100,122Zm56-20a10,10,0,1,0,10,10A10,10,0,0,0,156,102Zm-3.2,44.92a47,47,0,0,1-49.6,0,6,6,0,0,0-6.4,10.16,59,59,0,0,0,62.4,0,6,6,0,1,0-6.4-10.16ZM214,80v96a30.05,30.05,0,0,1-24,29.4V224a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V205.4A30.05,30.05,0,0,1,42,176V80A30,30,0,0,1,72,50H90V32a14,14,0,0,1,14-14h48a14,14,0,0,1,14,14V50h18A30,30,0,0,1,214,80ZM102,50h52V32a2,2,0,0,0-2-2H104a2,2,0,0,0-2,2Zm76,174V206H78v18a2,2,0,0,0,2,2h96A2,2,0,0,0,178,224ZM202,80a18,18,0,0,0-18-18H72A18,18,0,0,0,54,80v96a18,18,0,0,0,18,18H184a18,18,0,0,0,18-18Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
