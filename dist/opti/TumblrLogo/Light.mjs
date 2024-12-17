var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ v.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M192,118a6,6,0,0,0,6-6V72a6,6,0,0,0-6-6H150V24a6,6,0,0,0-6-6H112a6,6,0,0,0-6,6A42,42,0,0,1,64,66a6,6,0,0,0-6,6v40a6,6,0,0,0,6,6H90v58a62.07,62.07,0,0,0,62,62h40a6,6,0,0,0,6-6V184a6,6,0,0,0-6-6H160a10,10,0,0,1-10-10V118Zm-32,72h26v36H152a50.06,50.06,0,0,1-50-50V112a6,6,0,0,0-6-6H70V77.67A54.12,54.12,0,0,0,117.67,30H138V72a6,6,0,0,0,6,6h42v28H144a6,6,0,0,0-6,6v56A22,22,0,0,0,160,190Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
