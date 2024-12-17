var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ V.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M216,44H132V24a4,4,0,0,0-8,0V44H40A12,12,0,0,0,28,56V176a12,12,0,0,0,12,12H87.68l-26.8,33.5a4,4,0,1,0,6.24,5L97.92,188h60.16l30.8,38.5a4,4,0,0,0,6.24-5L168.32,188H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44Zm4,132a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
