var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    L.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    L.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M172,86a26,26,0,1,0-26-26A26,26,0,0,0,172,86Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,172,46ZM38.32,85.76l111.47,32.51,6,6A6,6,0,0,0,160,126h40a6,6,0,0,0,0-12H162.49L132.24,83.75a6,6,0,0,0-8.48,0L112.59,94.92,41.68,74.24a6,6,0,1,0-3.36,11.52ZM128,96.48l4.14,4.14-6.41-1.87Zm107.33,106.1a67.79,67.79,0,0,1-56.7,8.69L22.32,165.75a6,6,0,1,1,3.36-11.52l77.13,22.46L132.55,147l-46.2-13.2a6,6,0,0,1,3.3-11.54l56,16a6,6,0,0,1,2.59,10L116,180.52l66,19.23a55.79,55.79,0,0,0,46.68-7.15,6,6,0,1,1,6.66,10Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
