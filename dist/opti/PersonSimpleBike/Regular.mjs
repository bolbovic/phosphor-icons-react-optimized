var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? i(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && o(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var r in a)
    A.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var l = r, { children: a } = l, m = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(R, p({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,200,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,200ZM56,136a40,40,0,1,0,40,40A40,40,0,0,0,56,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,200Zm136-80H152a8,8,0,0,1-5.66-2.34L120,91.31,99.31,112l34.35,34.34A8,8,0,0,1,136,152v48a8,8,0,0,1-16,0V155.31L82.34,117.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0L155.31,104H192a8,8,0,0,1,0,16Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
