var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const n = L((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M136,96.46V62.13l27.88,16.73a8,8,0,1,0,8.24-13.72L143.55,48l28.57-17.14a8,8,0,0,0-8.24-13.72L128,38.67,92.12,17.14a8,8,0,0,0-8.24,13.72L112.45,48,83.88,65.14a8,8,0,0,0,8.24,13.72L120,62.13V96.46a72,72,0,1,0,16,0ZM128,224a56,56,0,1,1,56-56A56.06,56.06,0,0,1,128,224Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
