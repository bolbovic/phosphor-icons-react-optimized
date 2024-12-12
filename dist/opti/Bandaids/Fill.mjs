var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(d, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M128,116a12,12,0,1,1-12,12A12,12,0,0,1,128,116Zm84.28,39.72a40,40,0,1,1-56.56,56.56L128,184.57l-27.72,27.71a40,40,0,1,1-56.56-56.56L71.43,128,43.72,100.28a40,40,0,1,1,56.56-56.56L128,71.43l27.72-27.71a40,40,0,1,1,56.56,56.56L184.57,128Zm-95.59,17.53L82.75,139.31,55,167A24,24,0,1,0,89,201ZM161.94,128,128,94.06,94.06,128,128,161.94Zm39-39A24,24,0,1,0,167,55L139.31,82.75l33.94,33.94Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
