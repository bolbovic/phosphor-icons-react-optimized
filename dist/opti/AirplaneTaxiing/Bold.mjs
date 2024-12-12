var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var A in a)
    l.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && p.call(a, A) && (e[A] = a[A]);
  return e;
};
import L, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var o = A, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ L.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M208,88H149L104.49,43.51A12,12,0,0,0,96,40H88A20,20,0,0,0,69,66.33L76.27,88H61L40.49,67.51A12,12,0,0,0,32,64H24A20,20,0,0,0,4.86,89.75l14.07,46.89A43.72,43.72,0,0,0,61.07,168H240a12,12,0,0,0,12-12V132A44.05,44.05,0,0,0,208,88Zm20,56H61.07a19.89,19.89,0,0,1-19.16-14.25L30.4,91.36l17.12,17.13A12,12,0,0,0,56,112h36.9A12,12,0,0,0,104.3,96.21L94.83,67.79l40.69,40.7A12,12,0,0,0,144,112h64a20,20,0,0,1,20,20Zm0,60a20,20,0,1,1-20-20A20,20,0,0,1,228,204Zm-96,0a20,20,0,1,1-20-20A20,20,0,0,1,132,204Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
