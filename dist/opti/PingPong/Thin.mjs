var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const L = f((l, e) => {
  var r = l, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M236,196.36a12,12,0,0,0-5-8.77L189.13,157.7l20.29-20.29a35.68,35.68,0,0,0,9.91-32.18,95.43,95.43,0,0,0-34-55.55A98.33,98.33,0,0,0,122.63,28,96.3,96.3,0,0,0,28,122.63a98.09,98.09,0,0,0,21.67,62.72,95.43,95.43,0,0,0,55.55,34,35.66,35.66,0,0,0,32.18-9.92l20.29-20.28L187.59,231a12,12,0,0,0,8.78,5c.33,0,.66,0,1,0a12,12,0,0,0,8.48-3.52l26.64-26.64A12,12,0,0,0,236,196.36Zm-180-16A90.11,90.11,0,0,1,36,122.74,88.27,88.27,0,0,1,122.75,36a90.13,90.13,0,0,1,57.59,19.9,89.13,89.13,0,0,1,21.28,24.81L80.72,201.62A89,89,0,0,1,55.91,180.33Zm170.92,19.85-26.65,26.65A4,4,0,0,1,197,228a3.92,3.92,0,0,1-2.93-1.67l-32.64-45.69a4,4,0,0,0-2.92-1.66h-.33a4,4,0,0,0-2.83,1.17l-23.63,23.63h0a27.66,27.66,0,0,1-25,7.72,84.36,84.36,0,0,1-18.6-6L205.47,88.18a84.36,84.36,0,0,1,6,18.6,27.69,27.69,0,0,1-7.72,25l-23.63,23.63a4,4,0,0,0,.5,6.08l45.69,32.64a4,4,0,0,1,.51,6.08Z" }));
});
L.displayName = "Thin";
export {
  L as Thin
};