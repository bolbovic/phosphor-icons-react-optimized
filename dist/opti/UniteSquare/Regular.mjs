var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, l = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var L = (a, m) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((r, e) => {
  var H = r, { children: a } = H, m = L(H, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M224,152V96a8,8,0,0,0-8-8H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8v64h0v56a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V152Zm-68.69,56L48,100.69V59.31L196.69,208Zm-96-160h41.38L208,155.31v41.38ZM208,132.69,179.31,104H208Zm-56-56L123.31,48H152ZM48,123.31,76.69,152H48Zm56,56L132.69,208H104Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
