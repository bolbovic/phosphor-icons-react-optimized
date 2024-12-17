var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && Z(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && Z(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var H in a)
    r.call(a, H) && m.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && t)
    for (var H of t(a))
      m.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((H, e) => {
  var h = H, { children: a } = h, m = p(h, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M28,104a4,4,0,0,1,4-4h80a4,4,0,0,1,0,8H32A4,4,0,0,1,28,104Zm196-4H144a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8ZM72,140H32a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm152,0H184a4,4,0,0,0,0,8h40a4,4,0,0,0,0-8Zm-124,4a4,4,0,0,0,4,4h48a4,4,0,0,0,0-8H104A4,4,0,0,0,100,144ZM56,180H32a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm56,0H88a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm56,0H144a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Zm56,0H200a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8ZM32,68H224a4,4,0,0,0,0-8H32a4,4,0,0,0,0,8Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
