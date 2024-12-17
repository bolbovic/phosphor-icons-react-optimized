var M = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? M(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    Z.call(e, H) && r(a, H, e[H]);
  if (h)
    for (var H of h(e))
      o.call(e, H) && r(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    Z.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import A, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((t, H) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ A.createElement(c, i({ ref: H }, e), a, /* @__PURE__ */ A.createElement("path", { d: "M232,226H206V30h10a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12H50V226H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,30H194V226H158V184a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v42H62Zm84,196H110V190h36ZM90,64a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,64ZM90,104a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H96A6,6,0,0,1,90,104Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,104ZM96,150a6,6,0,0,1,0-12h16a6,6,0,0,1,0,12Zm42-6a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H144A6,6,0,0,1,138,144Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
