var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (e, m, a) => m in e ? v(e, m, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[m] = a, o = (e, m) => {
  for (var a in m || (m = {}))
    Z.call(m, a) && V(e, a, m[a]);
  if (r)
    for (var a of r(m))
      h.call(m, a) && V(e, a, m[a]);
  return e;
};
var l = (e, m) => {
  var a = {};
  for (var t in e)
    Z.call(e, t) && m.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && r)
    for (var t of r(e))
      m.indexOf(t) < 0 && h.call(e, t) && (a[t] = e[t]);
  return a;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const c = f((t, a) => {
  var H = t, { children: e } = H, m = l(H, ["children"]);
  return /* @__PURE__ */ p.createElement(s, o({ ref: a }, m), e, /* @__PURE__ */ p.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,88h80v80H40Zm96-16V56h32V72Zm-16,0H88V56h32Zm0,112v16H88V184Zm16,0h32v16H136Zm0-16V88h80v80Zm80-96H184V56h32ZM72,56V72H40V56ZM40,184H72v16H40Zm176,16H184V184h32v16Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
