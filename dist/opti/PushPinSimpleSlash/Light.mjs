var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      L.call(t, e) && i(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && L.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M85.25,40a6,6,0,0,1,6-6H192a6,6,0,0,1,0,12h-8.85l19.17,108.64a6,6,0,0,1-4.86,7,5.41,5.41,0,0,1-1.05.1,6,6,0,0,1-5.9-5L171,46H91.25A6,6,0,0,1,85.25,40ZM212,220.44a6,6,0,0,1-8.48-.4L169,182H134v58a6,6,0,0,1-12,0V182H40a6,6,0,0,1,0-12H51L68.38,71.33,43.56,44A6,6,0,0,1,52.44,36l160,176A6,6,0,0,1,212,220.44Zm-54-50.44L78.58,82.56,63.15,170Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
