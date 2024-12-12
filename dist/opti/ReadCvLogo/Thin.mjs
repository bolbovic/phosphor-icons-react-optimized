var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, n = (a, e) => {
  for (var l in e || (e = {}))
    i.call(e, l) && o(a, l, e[l]);
  if (t)
    for (var l of t(e))
      p.call(e, l) && o(a, l, e[l]);
  return a;
};
var A = (a, e) => {
  var l = {};
  for (var m in a)
    i.call(a, m) && e.indexOf(m) < 0 && (l[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && p.call(a, m) && (l[m] = a[m]);
  return l;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, l) => {
  var r = m, { children: a } = r, e = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, n({ ref: l }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M210.09,43.19l-130.25-23a12,12,0,0,0-13.91,9.73l-29.75,169a12,12,0,0,0,9.73,13.9l130.26,23a11.58,11.58,0,0,0,2.11.19,12,12,0,0,0,11.79-9.92l29.75-169A12,12,0,0,0,210.09,43.19Zm1.85,12.51-29.75,169a4,4,0,0,1-4.63,3.25l-130.26-23a4,4,0,0,1-3.24-4.63l29.75-169a4,4,0,0,1,4.63-3.25l130.26,23A4,4,0,0,1,211.94,55.7Zm-27.8,19.47a4,4,0,0,1-3.93,3.3,4.14,4.14,0,0,1-.7-.06l-83-14.66a4,4,0,1,1,1.39-7.88l83,14.66A4,4,0,0,1,184.14,75.17Zm-5.54,31.51a4,4,0,0,1-3.94,3.31,3.39,3.39,0,0,1-.7-.07L91,95.27a4,4,0,1,1,1.39-7.88l83,14.66A4,4,0,0,1,178.6,106.68Zm-47,24.19a4,4,0,0,1-3.94,3.3,4.23,4.23,0,0,1-.7-.06l-41.49-7.33a4,4,0,1,1,1.39-7.87l41.49,7.32A4,4,0,0,1,131.56,130.87Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
