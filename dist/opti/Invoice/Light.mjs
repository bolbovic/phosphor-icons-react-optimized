var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, e, H) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    h.call(e, H) && V(a, H, e[H]);
  if (m)
    for (var H of m(e))
      o.call(e, H) && V(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    h.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((t, H) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(s, i({ ref: H }, e), a, /* @__PURE__ */ v.createElement("path", { d: "M28,126a6,6,0,0,1,0-12H56a10,10,0,0,0,0-20H40a22,22,0,0,1,0-44h2V48a6,6,0,0,1,12,0v2H64a6,6,0,0,1,0,12H40a10,10,0,0,0,0,20H56a22,22,0,0,1,0,44H54v2a6,6,0,0,1-12,0v-2ZM230,56V192a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V152a6,6,0,0,1,12,0v40a2,2,0,0,0,2,2H162V158H80a6,6,0,0,1,0-12h82V110H104a6,6,0,0,1,0-12H218V62H96a6,6,0,0,1,0-12H224A6,6,0,0,1,230,56Zm-56,90h44V110H174Zm44,46V158H174v36h42A2,2,0,0,0,218,192Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
