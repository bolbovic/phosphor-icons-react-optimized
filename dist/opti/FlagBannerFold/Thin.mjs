var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var h = r, { children: a } = h, t = n(h, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M235.36,45.83A4,4,0,0,0,232,44H152a4,4,0,0,0-3.64,2.34L138.52,68H28a4,4,0,0,0-3,6.69L62.59,116,25,157.31A4,4,0,0,0,28,164h73.09a4,4,0,0,0,3.64-2.35L114.58,140h71.21l-37.43,82.34a4,4,0,0,0,2,5.3A4.07,4.07,0,0,0,152,228a4,4,0,0,0,3.64-2.35l80-176A4,4,0,0,0,235.36,45.83ZM98.52,156H37L71,118.69a4,4,0,0,0,0-5.38L37,76h97.84Zm90.9-24H118.21l36.37-80h71.21Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
