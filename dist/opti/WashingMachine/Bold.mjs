var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, d = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && l(a, e, m[e]);
  if (o)
    for (var e of o(m))
      Z.call(m, e) && l(a, e, m[e]);
  return a;
};
var A = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((t, e) => {
  var r = t, { children: a } = r, m = A(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M160,80a16,16,0,1,1,16,16A16,16,0,0,1,160,80Zm72-36V212a20,20,0,0,1-20,20H44a20,20,0,0,1-20-20V44A20,20,0,0,1,44,24H212A20,20,0,0,1,232,44Zm-24,4H48V208H208Zm-68.49,75.51-16,16a12,12,0,0,0,17,17l16-16a12,12,0,1,0-17-17Zm-15-16a12,12,0,0,0-17,0l-8,8a12,12,0,0,0,17,17l8-8A12,12,0,0,0,124.49,107.51ZM128,196a68.05,68.05,0,0,0,67.19-78.52,12,12,0,0,0-23.72,3.69,44,44,0,1,1-36.64-36.64,12,12,0,0,0,3.69-23.72A68,68,0,1,0,128,196Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
