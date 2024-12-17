var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const V = s((m, e) => {
  var A = m, { children: a } = A, t = l(A, ["children"]);
  return /* @__PURE__ */ c.createElement(L, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M192,18H104A14,14,0,0,0,90,32v77.51L50.67,148.85a56.91,56.91,0,1,0,80.48,80.48l68.41-68.4A21.88,21.88,0,0,0,206,145.37V32A14,14,0,0,0,192,18ZM104,30h88a2,2,0,0,1,2,2V50H102V32A2,2,0,0,1,104,30Zm18.67,190.85a44.92,44.92,0,0,1-63.52-63.52l41.09-41.09A6,6,0,0,0,102,112V62h92v44.34A54.07,54.07,0,0,0,146,160a53.39,53.39,0,0,0,8.47,29Zm68.4-68.41L163.22,180.3A41.54,41.54,0,0,1,158,160a42.05,42.05,0,0,1,36-41.56v26.93A9.93,9.93,0,0,1,191.07,152.44Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
