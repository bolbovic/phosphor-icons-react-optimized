var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, h = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      Z.call(m, e) && o(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, m = p(V, ["children"]);
  return /* @__PURE__ */ l.createElement(i, h({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M136,112H48a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V120A8,8,0,0,0,136,112Zm-8,88H56V128h72Zm88-16v16a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V184a8,8,0,0,1,16,0Zm0-72v32a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm0-56V72a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h16A16,16,0,0,1,216,56Zm-64-8a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,48ZM40,80V56A16,16,0,0,1,56,40H72a8,8,0,0,1,0,16H56V80a8,8,0,0,1-16,0Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
