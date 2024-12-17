var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    i.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((t, e) => {
  var A = t, { children: a } = A, m = Z(A, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,84,120Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,172,120Zm56-56V192a12,12,0,0,1-12,12H81.49L47.76,233.13l0,0A11.89,11.89,0,0,1,40,236a12.17,12.17,0,0,1-5.1-1.14A11.89,11.89,0,0,1,28,224V64A12,12,0,0,1,40,52H216A12,12,0,0,1,228,64Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V224a4,4,0,0,0,6.56,3.08L77.38,197A4,4,0,0,1,80,196H216a4,4,0,0,0,4-4Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
