var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((r, e) => {
  var H = r, { children: a } = H, t = p(H, ["children"]);
  return /* @__PURE__ */ h.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M216,130a37.72,37.72,0,0,0-7.56.76L173.62,37.89A6,6,0,0,0,168,34H136a6,6,0,0,0,0,12h27.84l33.37,89a38.08,38.08,0,0,0-18.73,27H135.16L109.62,93.89A6,6,0,0,0,104,90H24a6,6,0,0,0,0,12H34v16.67A54.12,54.12,0,0,0,2,168a6,6,0,0,0,6,6H18.48a38,38,0,0,0,75,0h85A38,38,0,1,0,216,130ZM42,128.39a6,6,0,0,0,4-5.66V102H99.84l22.5,60H14.43A42.07,42.07,0,0,1,42,128.39ZM56,194a26,26,0,0,1-25.29-20H81.29A26,26,0,0,1,56,194Zm160,0a26,26,0,0,1-14.5-47.57l8.88,23.68a6,6,0,0,0,11.24-4.22l-8.88-23.68A26.91,26.91,0,0,1,216,142a26,26,0,0,1,0,52Z" }));
});
L.displayName = "Light";
export {
  L as Light
};
