var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    V.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((t, e) => {
  var l = t, { children: a } = l, m = Z(l, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, m), a, /* @__PURE__ */ c.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,152a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,32a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32-16a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-16a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,8a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
