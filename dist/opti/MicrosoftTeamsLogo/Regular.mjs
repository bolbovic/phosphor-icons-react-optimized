var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as s } from "react";
import c from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var A = m, { children: a } = A, t = l(A, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M112,104a8,8,0,0,1-8,8H96v40a8,8,0,0,1-16,0V112H72a8,8,0,0,1,0-16h32A8,8,0,0,1,112,104ZM232,92.74V152a40,40,0,0,1-36.63,39.85,64,64,0,0,1-118.7.15H40a16,16,0,0,1-16-16V80A16,16,0,0,1,40,64H96.81a40,40,0,0,1,73.31-28.85A32,32,0,0,1,211.69,80h7.57A12.76,12.76,0,0,1,232,92.74ZM112,56a23.82,23.82,0,0,0,1.38,8H136a16,16,0,0,1,15.07,10.68A24,24,0,1,0,112,56Zm24,120h0V80H40v96h96Zm48-80H152v80a16,16,0,0,1-16,16H94.44A48,48,0,0,0,184,168Zm16-32a16,16,0,0,0-24.4-13.6A39.89,39.89,0,0,1,168,80h16A16,16,0,0,0,200,64Zm16,32H200v72a62.76,62.76,0,0,1-.36,6.75A24,24,0,0,0,216,152Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
