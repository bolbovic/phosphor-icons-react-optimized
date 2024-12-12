var V = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const h = c((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M216,24H72A40,40,0,0,0,32,64v72a24,24,0,0,0,24,24h48l-7.89,46.67A8.42,8.42,0,0,0,96,208a32,32,0,0,0,64,0,8.42,8.42,0,0,0-.11-1.33L152,160h48a24,24,0,0,0,24-24V32A8,8,0,0,0,216,24ZM72,40H176V80a8,8,0,0,0,16,0V40h16v64H48V64A24,24,0,0,1,72,40ZM200,144H152a16,16,0,0,0-15.84,18.26l0,.2L144,208.6a16,16,0,0,1-32,0l7.8-46.14,0-.2A16,16,0,0,0,104,144H56a8,8,0,0,1-8-8V120H208v16A8,8,0,0,1,200,144Z" }));
});
h.displayName = "Regular";
export {
  h as Regular,
  h as default
};
