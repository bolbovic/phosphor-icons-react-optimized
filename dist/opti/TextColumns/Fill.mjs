var c = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (a, e, m) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, o = (a, e) => {
  for (var m in e || (e = {}))
    Z.call(e, m) && r(a, m, e[m]);
  if (H)
    for (var m of H(e))
      l.call(e, m) && r(a, m, e[m]);
  return a;
};
var i = (a, e) => {
  var m = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      e.indexOf(t) < 0 && l.call(a, t) && (m[t] = a[t]);
  return m;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((t, m) => {
  var h = t, { children: a } = h, e = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(s, o({ ref: m }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,184H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,96H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H144a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
