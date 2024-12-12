var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    r.call(e, H) && h(a, H, e[H]);
  if (V)
    for (var H of V(e))
      o.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import v, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((t, H) => {
  var m = t, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ v.createElement(c, i({ ref: H }, e), a, /* @__PURE__ */ v.createElement("path", { d: "M248,124H236V88a12,12,0,0,0-12-12H204V64a12,12,0,0,0-12-12H168a12,12,0,0,0-12,12v60H100V64A12,12,0,0,0,88,52H64A12,12,0,0,0,52,64V76H32A12,12,0,0,0,20,88v36H8a4,4,0,0,0,0,8H20v36a12,12,0,0,0,12,12H52v12a12,12,0,0,0,12,12H88a12,12,0,0,0,12-12V132h56v60a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V180h20a12,12,0,0,0,12-12V132h12a4,4,0,0,0,0-8ZM32,172a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4H52v88Zm60,20a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4H88a4,4,0,0,1,4,4Zm104,0a4,4,0,0,1-4,4H168a4,4,0,0,1-4-4V64a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4Zm32-24a4,4,0,0,1-4,4H204V84h20a4,4,0,0,1,4,4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
