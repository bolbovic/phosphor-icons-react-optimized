var c = Object.defineProperty;
var Z = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var t = (a, H, m) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[H] = m, i = (a, H) => {
  for (var m in H || (H = {}))
    r.call(H, m) && t(a, m, H[m]);
  if (Z)
    for (var m of Z(H))
      o.call(H, m) && t(a, m, H[m]);
  return a;
};
var p = (a, H) => {
  var m = {};
  for (var e in a)
    r.call(a, e) && H.indexOf(e) < 0 && (m[e] = a[e]);
  if (a != null && Z)
    for (var e of Z(a))
      H.indexOf(e) < 0 && o.call(a, e) && (m[e] = a[e]);
  return m;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((e, m) => {
  var h = e, { children: a } = h, H = p(h, ["children"]);
  return /* @__PURE__ */ n.createElement(s, i({ ref: m }, H), a, /* @__PURE__ */ n.createElement("path", { d: "M76,96a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H72A4,4,0,0,1,76,96Zm-4,28H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm0,32H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm0,32H24a4,4,0,0,0,0,8H72a4,4,0,0,0,0-8Zm80-64H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H104a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm80-96H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8ZM184,68h48a4,4,0,0,0,0-8H184a4,4,0,0,0,0,8Zm48,56H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Zm0,32H184a4,4,0,0,0,0,8h48a4,4,0,0,0,0-8Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
