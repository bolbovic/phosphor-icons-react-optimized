var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && r(a, e, m[e]);
  if (t)
    for (var e of t(m))
      p.call(m, e) && r(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var l in a)
    Z.call(a, l) && m.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && t)
    for (var l of t(a))
      m.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((l, e) => {
  var o = l, { children: a } = o, m = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M96,124a36,36,0,1,0,36,36A36,36,0,0,0,96,124Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,96,172Zm128.49-52.49a12,12,0,0,1,0,17l-48,48a12,12,0,0,1-17-17l48-48A12,12,0,0,1,224.49,119.51Zm-36-20a12,12,0,0,1,0,17l-20,20a12,12,0,0,1-17-17l20-20A12,12,0,0,1,188.49,99.51Zm44-27-16,16a12,12,0,0,1-17-17l16-16a12,12,0,0,1,17,17Zm-113,15,72-72a12,12,0,0,1,17,17l-72,72a12,12,0,1,1-17-17Zm30.23,109.26a12,12,0,0,1,0,17A76,76,0,1,1,42.26,106.26L125,23.51a12,12,0,1,1,17,17L59.23,123.23a52,52,0,0,0,73.54,73.54A12,12,0,0,1,149.74,196.77Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};