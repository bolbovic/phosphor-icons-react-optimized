var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import s, { forwardRef as C } from "react";
import d from "../../lib/OptiBase.mjs";
const h = C((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M228.79,93C174.15,38.34,81.85,38.34,27.21,93,8.69,111.5,6.9,138.81,22.85,159.39a12,12,0,0,0,13.83,3.77l49-17.39.15-.06a12,12,0,0,0,7.31-8.79l5.9-29.51a3.93,3.93,0,0,1,2.51-3,80.59,80.59,0,0,1,52.5-.12,3.94,3.94,0,0,1,2.52,2.94L162.81,137a12,12,0,0,0,7.29,8.69l.15.06,49.07,17.41a12,12,0,0,0,13.83-3.77C249.1,138.81,247.31,111.5,228.79,93Zm-2,61.51a4,4,0,0,1-4.61,1.21l-.15-.06L173,138.24a4,4,0,0,1-2.37-2.87l-6.21-29.75a12,12,0,0,0-7.75-8.87,88.63,88.63,0,0,0-57.74.14,12,12,0,0,0-7.72,9l-5.9,29.51A4,4,0,0,1,83,138.26l-49,17.38-.15.06a4,4,0,0,1-4.61-1.21c-13.42-17.3-11.9-40.26,3.69-55.85C58.65,72.85,93.33,60,128,60s69.35,12.89,95.13,38.68C238.71,114.23,240.24,137.19,226.82,154.49ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,200Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
