var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    o.call(e, H) && h(a, H, e[H]);
  if (r)
    for (var H of r(e))
      v.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && v.call(a, t) && (H[t] = a[t]);
  return H;
};
import c, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const d = s((t, H) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(A, i({ ref: H }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M248,162H190V94h58a6,6,0,0,0,0-12H188.63A14,14,0,0,0,176,74H112a14,14,0,0,0-12.63,8H62V80a6,6,0,0,0-12,0v2H8A6,6,0,0,0,8,94H50v68H8a6,6,0,0,0,0,12H50v2a6,6,0,0,0,12,0v-2H99.37A14,14,0,0,0,112,182h64a14,14,0,0,0,12.63-8H248a6,6,0,0,0,0-12ZM62,94H98v68H62Zm114,76H112a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2v34H144a6,6,0,0,0,0,12h34v34A2,2,0,0,1,176,170Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
