var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const d = h((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228.11,148.63l-55.88-96-.06-.09a52,52,0,0,0-88.34,0l-.06.09-55.88,96A52,52,0,0,0,72.09,228H183.91a52,52,0,0,0,44.2-79.37ZM164,220H92V168a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm58.36-22.61A43.43,43.43,0,0,1,183.91,220H172V168a12,12,0,0,0-12-12H96a12,12,0,0,0-12,12v52H72.09a44,44,0,0,1-37.37-67.2.31.31,0,0,1,.05-.1L90.65,56.75a44,44,0,0,1,74.7,0l55.88,95.95a.31.31,0,0,1,.05.1A43.43,43.43,0,0,1,222.35,197.39Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
