var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? A(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, o = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      h.call(m, e) && V(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as n } from "react";
import c from "../../lib/OptiBase.mjs";
const f = n((t, e) => {
  var H = t, { children: a } = H, m = i(H, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, m), a, /* @__PURE__ */ p.createElement("path", { d: "M76,48a4,4,0,0,1-4,4H40a4,4,0,0,0-4,4V72a4,4,0,0,1-8,0V56A12,12,0,0,1,40,44H72A4,4,0,0,1,76,48ZM32,148a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,32,148Zm40,56H40a4,4,0,0,1-4-4V184a4,4,0,0,0-8,0v16a12,12,0,0,0,12,12H72a4,4,0,0,0,0-8Zm72,0H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm80-24a4,4,0,0,0-4,4v16a4,4,0,0,1-4,4H184a4,4,0,0,0,0,8h32a12,12,0,0,0,12-12V184A4,4,0,0,0,224,180Zm0-72a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,224,108Zm-8-64H184a4,4,0,0,0,0,8h32a4,4,0,0,1,4,4V72a4,4,0,0,0,8,0V56A12,12,0,0,0,216,44Zm-72,0H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};