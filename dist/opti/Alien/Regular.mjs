var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && A(a, e, m[e]);
  if (t)
    for (var e of t(m))
      c.call(m, e) && A(a, e, m[e]);
  return a;
};
var s = (a, m) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const d = i((r, e) => {
  var o = r, { children: a } = o, m = s(o, ["children"]);
  return /* @__PURE__ */ l.createElement(R, p({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M128,16a96.11,96.11,0,0,0-96,96c0,24,12.56,55.06,33.61,83,21.18,28.15,44.5,45,62.39,45s41.21-16.81,62.39-45c21.05-28,33.61-59,33.61-83A96.11,96.11,0,0,0,128,16Zm49.61,169.42C160.24,208.49,140.31,224,128,224s-32.24-15.51-49.61-38.58C59.65,160.5,48,132.37,48,112a80,80,0,0,1,160,0C208,132.37,196.35,160.5,177.61,185.42ZM120,136A40,40,0,0,0,80,96a16,16,0,0,0-16,16,40,40,0,0,0,40,40A16,16,0,0,0,120,136ZM80,112a24,24,0,0,1,24,24h0A24,24,0,0,1,80,112Zm96-16a40,40,0,0,0-40,40,16,16,0,0,0,16,16,40,40,0,0,0,40-40A16,16,0,0,0,176,96Zm-24,40a24,24,0,0,1,24-24A24,24,0,0,1,152,136Zm0,48a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,184Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
