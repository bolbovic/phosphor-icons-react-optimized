var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && l(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var A in a)
    o.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && Z.call(a, A) && (e[A] = a[A]);
  return e;
};
import p, { forwardRef as L } from "react";
import c from "../../lib/OptiBase.mjs";
const f = L((A, e) => {
  var r = A, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, h({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M128,26a102,102,0,0,0,0,204,6,6,0,0,0,3.76-10.67h0c-.1-.07-9.6-7.84-18.95-22.95A124,124,0,0,1,99.35,166H128a6,6,0,0,0,0-12H96.45a139.18,139.18,0,0,1,0-52h63.1A137.47,137.47,0,0,1,162,128a6,6,0,0,0,12,0,152.91,152.91,0,0,0-2.19-26h42.36A89.7,89.7,0,0,1,218,128a6,6,0,0,0,12,0A102.12,102.12,0,0,0,128,26ZM112.54,39.33A132.58,132.58,0,0,0,86.81,90H46.43A90.29,90.29,0,0,1,112.54,39.33Zm0,177.34A90.29,90.29,0,0,1,46.43,166H86.81A132.58,132.58,0,0,0,112.54,216.67ZM84.19,154H41.83a90.17,90.17,0,0,1,0-52H84.19a155.43,155.43,0,0,0,0,52ZM99.35,90a124,124,0,0,1,13.46-30.37A109.19,109.19,0,0,1,128,40.18a109.19,109.19,0,0,1,15.19,19.45A124,124,0,0,1,156.65,90Zm69.84,0a132.58,132.58,0,0,0-25.73-50.67A90.29,90.29,0,0,1,209.57,90Zm51.05,82.24L200.49,192l19.75,19.76a6,6,0,1,1-8.48,8.48L192,200.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L183.51,192l-19.75-19.76a6,6,0,0,1,8.48-8.48L192,183.51l19.76-19.75a6,6,0,0,1,8.48,8.48Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
