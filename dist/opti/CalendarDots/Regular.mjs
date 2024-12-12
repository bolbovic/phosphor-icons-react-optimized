var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, H = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      A.call(m, e) && Z(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, m = p(V, ["children"]);
  return /* @__PURE__ */ l.createElement(i, H({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
