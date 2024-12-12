var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      H.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && H.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, d({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M112.56,196H44V92H212v20a12,12,0,0,0,24,0V88a20,20,0,0,0-20-20H133.39l-26-29.29h0A20,20,0,0,0,92.41,32H40A20,20,0,0,0,20,52V200.62A19.41,19.41,0,0,0,39.38,220h73.18a12,12,0,0,0,0-24ZM44,56H90.61l10.67,12H44ZM243.44,158a12,12,0,0,0-10.52-8.34l-27.42-2.12L195,123.25a12,12,0,0,0-22,0L162.5,147.53l-27.42,2.12a12,12,0,0,0-6.72,21.22l20.58,17-6.25,25.26a12,12,0,0,0,17.73,13.22L184,212.46l23.58,13.88a12,12,0,0,0,17.73-13.22l-6.25-25.26,20.58-17A12,12,0,0,0,243.44,158ZM198,174.16a12,12,0,0,0-4,12.13l1.21,4.89-5.07-3a12.06,12.06,0,0,0-12.18,0l-5.07,3,1.21-4.89a12,12,0,0,0-4-12.13l-3.48-2.87,5-.39a12,12,0,0,0,10.1-7.21l2.33-5.4,2.33,5.4a12,12,0,0,0,10.09,7.21l5,.39Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
