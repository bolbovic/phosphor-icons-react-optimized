var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var V = (a, e, H) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, h = (a, e) => {
  for (var H in e || (e = {}))
    o.call(e, H) && V(a, H, e[H]);
  if (m)
    for (var H of m(e))
      Z.call(e, H) && V(a, H, e[H]);
  return a;
};
var i = (a, e) => {
  var H = {};
  for (var t in a)
    o.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (H[t] = a[t]);
  return H;
};
import p, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((t, H) => {
  var r = t, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M240,92H227.23l-10-46.51A12.07,12.07,0,0,0,205.53,36H50.47a12.07,12.07,0,0,0-11.74,9.49L28.77,92H16a4,4,0,0,0,0,8H28V200a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V172H180v28a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V100h12a4,4,0,0,0,0-8ZM46.56,47.16A4,4,0,0,1,50.47,44H205.53a4,4,0,0,1,3.91,3.16L219.05,92H37ZM68,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V172H68Zm148,4H192a4,4,0,0,1-4-4V172h32v28A4,4,0,0,1,216,204Zm4-40H148V128a4,4,0,0,0-8,0v36H116V128a4,4,0,0,0-8,0v36H36V100H220ZM60,132a8,8,0,1,1,8,8A8,8,0,0,1,60,132Zm120,0a8,8,0,1,1,8,8A8,8,0,0,1,180,132Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
