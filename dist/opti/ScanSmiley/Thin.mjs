var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? H(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      c.call(m, e) && o(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as V } from "react";
import h from "../../lib/OptiBase.mjs";
const n = V((t, e) => {
  var Z = t, { children: a } = Z, m = p(Z, ["children"]);
  return /* @__PURE__ */ s.createElement(h, i({ ref: e }, m), a, /* @__PURE__ */ s.createElement("path", { d: "M220,40V76a4,4,0,0,1-8,0V44H180a4,4,0,0,1,0-8h36A4,4,0,0,1,220,40Zm-4,136a4,4,0,0,0-4,4v32H180a4,4,0,0,0,0,8h36a4,4,0,0,0,4-4V180A4,4,0,0,0,216,176ZM76,212H44V180a4,4,0,0,0-8,0v36a4,4,0,0,0,4,4H76a4,4,0,0,0,0-8ZM40,80a4,4,0,0,0,4-4V44H76a4,4,0,0,0,0-8H40a4,4,0,0,0-4,4V76A4,4,0,0,0,40,80Zm88,116a68,68,0,1,1,68-68A68.07,68.07,0,0,1,128,196Zm60-68a60,60,0,1,0-60,60A60.07,60.07,0,0,0,188,128Zm-76-12a8,8,0,1,0-8,8A8,8,0,0,0,112,116Zm40-8a8,8,0,1,0,8,8A8,8,0,0,0,152,108Zm-2.65,41c-4.52,4-13.7,7-21.35,7s-16.83-3-21.35-7a4,4,0,0,0-5.3,6c6,5.3,17,9,26.65,9s20.64-3.7,26.65-9a4,4,0,1,0-5.3-6Z" }));
});
n.displayName = "Thin";
export {
  n as Thin
};
