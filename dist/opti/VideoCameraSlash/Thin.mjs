var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M249.89,76.47a4,4,0,0,0-4.11.2L204,104.53V72a12,12,0,0,0-12-12H113.06a4,4,0,0,0,0,8H192a4,4,0,0,1,4,4v87.63a4,4,0,0,0,8,0v-8.16l41.78,27.86A4,4,0,0,0,252,176V80A4,4,0,0,0,249.89,76.47ZM244,168.53l-40-26.67V114.14l40-26.67ZM51,37.31A4,4,0,0,0,45,42.69L60.78,60H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H184.41L205,218.69a4,4,0,1,0,5.92-5.38ZM32,188a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H68.05L177.14,188Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
