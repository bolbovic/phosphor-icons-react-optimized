var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && r(a, e, t[e]);
  if (A)
    for (var e of A(t))
      o.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && A)
    for (var m of A(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M48,152v55.73A8.17,8.17,0,0,1,40.53,216,8,8,0,0,1,32,208V152.27A8.17,8.17,0,0,1,39.47,144,8,8,0,0,1,48,152Zm71.47-8a8.17,8.17,0,0,0-7.47,8.25V183L86.69,147.6a8.26,8.26,0,0,0-8-3.48A8,8,0,0,0,72,152v55.73A8.17,8.17,0,0,0,79.47,216,8,8,0,0,0,88,208V177l25.49,35.69A8,8,0,0,0,123.87,215a8.23,8.23,0,0,0,4.13-7.25V152A8,8,0,0,0,119.47,144Zm40,0a8.17,8.17,0,0,0-7.47,8.25v55.46a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V152A8,8,0,0,0,159.47,144ZM216,88V223.75a8.15,8.15,0,0,1-6.81,8.16A8,8,0,0,1,200,224V124a4,4,0,0,0-4-4H44a4,4,0,0,1-4-4V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-20,0L152,44V88Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};