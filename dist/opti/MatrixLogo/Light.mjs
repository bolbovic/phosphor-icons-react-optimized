var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(v, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M46,46V210H64a6,6,0,0,1,0,12H40a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6H64a6,6,0,0,1,0,12ZM216,34H192a6,6,0,0,0,0,12h18V210H192a6,6,0,0,0,0,12h24a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM152,90a30,30,0,0,0-24,12,30,30,0,0,0-42-6v0a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V120a18,18,0,0,1,36,0v40a6,6,0,0,0,12,0V120a18,18,0,0,1,36,0v40a6,6,0,0,0,12,0V120A30,30,0,0,0,152,90Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
