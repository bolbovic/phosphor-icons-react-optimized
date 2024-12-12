var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var A in a)
    H.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && m)
    for (var A of m(a))
      t.indexOf(A) < 0 && i.call(a, A) && (e[A] = a[A]);
  return e;
};
import n, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((A, e) => {
  var r = A, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ n.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M224,108H211.9a84,84,0,0,0-167.8,0H32a4,4,0,0,0-4,4,100.32,100.32,0,0,0,56,89.82V208a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12v-6.18A100.32,100.32,0,0,0,228,112,4,4,0,0,0,224,108Zm-20.11,0H141.05a75.92,75.92,0,0,1,50.16-38.14A75.45,75.45,0,0,1,203.89,108ZM186,62.93A83.92,83.92,0,0,0,132.08,108H94.68A76.22,76.22,0,0,1,168,52c2.33,0,4.68.13,7,.34A76.81,76.81,0,0,1,186,62.93ZM128,36a75.48,75.48,0,0,1,34.3,8.21A84.26,84.26,0,0,0,86.41,108H52.11A76.09,76.09,0,0,1,128,36Zm38.33,159.66A4,4,0,0,0,164,199.3V208a4,4,0,0,1-4,4H96a4,4,0,0,1-4-4v-8.7a4,4,0,0,0-2.33-3.64A92.33,92.33,0,0,1,36.09,116H219.91A92.33,92.33,0,0,1,166.33,195.66Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
