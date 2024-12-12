var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, A = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && p(a, e, m[e]);
  if (t)
    for (var e of t(m))
      s.call(m, e) && p(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && s.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const d = i((r, e) => {
  var o = r, { children: a } = o, m = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(R, A({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M176,100a12,12,0,1,1-12-12A12,12,0,0,1,176,100Zm-44,20a12,12,0,1,0,12,12A12,12,0,0,0,132,120Zm84-24A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-16,0a72,72,0,1,0-72,72A72.08,72.08,0,0,0,200,96Zm-34.86,96.53C152,197.56,139.85,200,128,200s-24-2.44-37.14-7.47a8,8,0,1,0-5.72,14.94A125.91,125.91,0,0,0,120,215.68V248a8,8,0,0,0,16,0V215.68a125.91,125.91,0,0,0,34.86-8.21,8,8,0,1,0-5.72-14.94Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
