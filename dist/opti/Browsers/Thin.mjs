var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((H, e) => {
  var m = H, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,44H72A12,12,0,0,0,60,56V76H40A12,12,0,0,0,28,88V200a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,84H184a4,4,0,0,1,4,4v20H36V88A4,4,0,0,1,40,84ZM188,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V116H188Zm32-32a4,4,0,0,1-4,4H196V88a12,12,0,0,0-12-12H68V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
