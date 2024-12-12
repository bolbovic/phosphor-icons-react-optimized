var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, d = (a, e) => {
  for (var H in e || (e = {}))
    V.call(e, H) && r(a, H, e[H]);
  if (m)
    for (var H of m(e))
      p.call(e, H) && r(a, H, e[H]);
  return a;
};
var l = (a, e) => {
  var H = {};
  for (var t in a)
    V.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && p.call(a, t) && (H[t] = a[t]);
  return H;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((t, H) => {
  var o = t, { children: a } = o, e = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: H }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M28,132a12,12,0,0,1,0-24H56a4,4,0,0,0,0-8H40a28,28,0,0,1-3.38-55.79A12,12,0,0,1,59.3,44H64a12,12,0,0,1,0,24H40a4,4,0,0,0,0,8H56a28,28,0,0,1,3.38,55.79A12,12,0,0,1,36.7,132ZM236,56V192a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V164a12,12,0,0,1,24,0v24H156V164H88a12,12,0,0,1,0-24h68V116H112a12,12,0,0,1,0-24H212V68H104a12,12,0,0,1,0-24H224A12,12,0,0,1,236,56Zm-56,84h32V116H180Zm32,48V164H180v24Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
