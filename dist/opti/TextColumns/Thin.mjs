var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    Z.call(m, e) && H(a, e, m[e]);
  if (t)
    for (var e of t(m))
      o.call(m, e) && H(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var h in a)
    Z.call(a, h) && m.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && t)
    for (var h of t(a))
      m.indexOf(h) < 0 && o.call(a, h) && (e[h] = a[h]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((h, e) => {
  var r = h, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: e }, m), a, /* @__PURE__ */ n.createElement("path", { d: "M116,64a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8h72A4,4,0,0,1,116,64Zm-4,36H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM144,68h72a4,4,0,0,0,0-8H144a4,4,0,0,0,0,8Zm72,32H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Zm0,40H144a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
