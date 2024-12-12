var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ n.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M71.75,60.18h0L51,37.31A4,4,0,0,0,45,42.69L63.8,63.32A75.52,75.52,0,0,0,52,104c0,36.13-8.58,64-14.36,73.95A12,12,0,0,0,48,196H184.41L205,218.69a4,4,0,1,0,5.92-5.38ZM48,188a3.89,3.89,0,0,1-3.43-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a67.58,67.58,0,0,1,9.4-34.51L177.14,188Zm116,36a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224Zm48.53-48.48a3.94,3.94,0,0,1-1.46.28,4,4,0,0,1-3.72-2.54C200.24,155.17,196,129.28,196,104A68,68,0,0,0,94.46,44.83a4,4,0,1,1-4-6.95A76,76,0,0,1,204,104c0,36.05,8.26,59.89,10.79,66.34A4,4,0,0,1,212.53,175.52Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
