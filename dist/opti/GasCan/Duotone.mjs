var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (l)
    for (var e of l(t))
      L.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && L.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as Z } from "react";
import i from "../../lib/OptiBase.mjs";
const M = Z((o, e) => {
  var m = o, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ r.createElement(i, c({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M208,40V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V107.31a8,8,0,0,1,2.34-5.65l67.32-67.32A8,8,0,0,1,123.31,32H200A8,8,0,0,1,208,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M200,24H123.31A15.86,15.86,0,0,0,112,28.69L101.66,39,91.31,28.69a16,16,0,0,0-22.62,0l-24,24a16,16,0,0,0,0,22.62L55,85.66,44.69,96A15.86,15.86,0,0,0,40,107.31V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM56,64,80,40,90.34,50.34l-24,24ZM200,216H56V107.31l16-16h0L123.31,40H200ZM128,64a8,8,0,0,1,8-8h40a8,8,0,0,1,0,16H136A8,8,0,0,1,128,64Zm52.8,62.4L141.33,156l39.47,29.6a8,8,0,1,1-9.6,12.8L128,166,84.8,198.4a8,8,0,0,1-9.6-12.8L114.67,156,75.2,126.4a8,8,0,0,1,9.6-12.8L128,146l43.2-32.4a8,8,0,0,1,9.6,12.8Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};