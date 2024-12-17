var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M175.47,197.14a8,8,0,0,1-4.61,10.33A125.91,125.91,0,0,1,136,215.68V248a8,8,0,0,1-16,0V215.68a125.91,125.91,0,0,1-34.86-8.21,8,8,0,1,1,5.72-14.94C104,197.56,116.15,200,128,200s24-2.44,37.14-7.47A8,8,0,0,1,175.47,197.14ZM216,96A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-72,36a12,12,0,1,0-12,12A12,12,0,0,0,144,132Zm32-32a12,12,0,1,0-12,12A12,12,0,0,0,176,100Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
