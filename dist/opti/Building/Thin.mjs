var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && r(a, H, e[H]);
  if (m)
    for (var H of m(e))
      o.call(e, H) && r(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var h in a)
    Z.call(a, h) && e.indexOf(h) < 0 && (H[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      e.indexOf(h) < 0 && o.call(a, h) && (H[h] = a[h]);
  return H;
};
import n, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const c = M((h, H) => {
  var t = h, { children: a } = t, e = p(t, ["children"]);
  return /* @__PURE__ */ n.createElement(V, i({ ref: H }, e), a, /* @__PURE__ */ n.createElement("path", { d: "M232,228H204V28h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52V228H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM60,28H196V228H156V184a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v44H60Zm88,200H108V188h40ZM92,64a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,64ZM92,104a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H96A4,4,0,0,1,92,104Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,104ZM96,148a4,4,0,0,1,0-8h16a4,4,0,0,1,0,8Zm44-4a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H144A4,4,0,0,1,140,144Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
