var n = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, e, H) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, i = (a, e) => {
  for (var H in e || (e = {}))
    m.call(e, H) && h(a, H, e[H]);
  if (l)
    for (var H of l(e))
      o.call(e, H) && h(a, H, e[H]);
  return a;
};
var p = (a, e) => {
  var H = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      e.indexOf(t) < 0 && o.call(a, t) && (H[t] = a[t]);
  return H;
};
import c, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const V = f((t, H) => {
  var r = t, { children: a } = r, e = p(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, i({ ref: H }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M192,116H156V56a12,12,0,0,0-12-12H32a4,4,0,0,0-3.73,5.43c9.29,24.23,11.46,77.22-.11,117.46A3.82,3.82,0,0,0,28,168v32a12,12,0,0,0,12,12H66.11a12.08,12.08,0,0,0,5.37-1.27l12.62-6.31a4.09,4.09,0,0,1,1.79-.42h16.22a4.09,4.09,0,0,1,1.79.42l12.62,6.31a12.08,12.08,0,0,0,5.37,1.27h28.22a12.08,12.08,0,0,0,5.37-1.27l12.62-6.31a4.09,4.09,0,0,1,1.79-.42h16.22a4.09,4.09,0,0,1,1.79.42l12.62,6.31a12.08,12.08,0,0,0,5.37,1.27H232a12,12,0,0,0,12-12V168A52.06,52.06,0,0,0,192,116ZM37.6,52H144a4,4,0,0,1,4,4V84H112a4,4,0,0,0,0,8h36v24H112a4,4,0,0,0,0,8h80a44.06,44.06,0,0,1,43.81,40H37.2C45.24,131.81,47,82.65,37.6,52ZM236,200a4,4,0,0,1-4,4H205.89a4.09,4.09,0,0,1-1.79-.42l-12.62-6.31a12.08,12.08,0,0,0-5.37-1.27H169.89a12.08,12.08,0,0,0-5.37,1.27l-12.62,6.31a4.09,4.09,0,0,1-1.79.42H121.89a4.09,4.09,0,0,1-1.79-.42l-12.62-6.31a12.08,12.08,0,0,0-5.37-1.27H85.89a12.08,12.08,0,0,0-5.37,1.27L67.9,203.58a4.09,4.09,0,0,1-1.79.42H40a4,4,0,0,1-4-4V172H236Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
