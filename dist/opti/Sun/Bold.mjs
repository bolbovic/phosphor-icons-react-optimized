var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && o(a, e, m[e]);
  if (l)
    for (var e of l(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((t, e) => {
  var Z = t, { children: a } = Z, m = A(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};