var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, H, m) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[H] = m, i = (a, H) => {
  for (var m in H || (H = {}))
    r.call(H, m) && h(a, m, H[m]);
  if (t)
    for (var m of t(H))
      o.call(H, m) && h(a, m, H[m]);
  return a;
};
var p = (a, H) => {
  var m = {};
  for (var e in a)
    r.call(a, e) && H.indexOf(e) < 0 && (m[e] = a[e]);
  if (a != null && t)
    for (var e of t(a))
      H.indexOf(e) < 0 && o.call(a, e) && (m[e] = a[e]);
  return m;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((e, m) => {
  var Z = e, { children: a } = Z, H = p(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(d, i({ ref: m }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M78,96a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H72A6,6,0,0,1,78,96Zm-6,26H24a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm0,32H24a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm0,32H24a6,6,0,0,0,0,12H72a6,6,0,0,0,0-12Zm80-64H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H104a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm80-96H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12ZM184,70h48a6,6,0,0,0,0-12H184a6,6,0,0,0,0,12Zm48,52H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm0,32H184a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
