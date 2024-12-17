var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, A, e) => A in a ? n(a, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[A] = e, i = (a, A) => {
  for (var e in A || (A = {}))
    H.call(A, e) && o(a, e, A[e]);
  if (m)
    for (var e of m(A))
      h.call(A, e) && o(a, e, A[e]);
  return a;
};
var l = (a, A) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && A.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      A.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as L } from "react";
import c from "../../lib/OptiBase.mjs";
const f = L((t, e) => {
  var r = t, { children: a } = r, A = l(r, ["children"]);
  return /* @__PURE__ */ p.createElement(c, i({ ref: e }, A), a, /* @__PURE__ */ p.createElement("path", { d: "M208,100H145.66L98.83,53.17A4,4,0,0,0,96,52H88A12,12,0,0,0,76.63,67.79L87.36,100H57.66L34.83,77.17A4,4,0,0,0,32,76H24A12,12,0,0,0,12.52,91.45l14.06,46.89A35.79,35.79,0,0,0,61.06,164H240a4,4,0,0,0,4-4V136A36,36,0,0,0,208,100Zm28,56H61.06a27.83,27.83,0,0,1-26.81-19.95L20.18,89.15A4,4,0,0,1,24,84h6.34l22.83,22.83A4,4,0,0,0,56,108H92.91a4,4,0,0,0,3.79-5.26L84.21,65.26A4,4,0,0,1,88,60h6.34l46.82,46.83A4,4,0,0,0,144,108h64a28,28,0,0,1,28,28Zm-16,44a12,12,0,1,1-12-12A12,12,0,0,1,220,200Zm-96,0a12,12,0,1,1-12-12A12,12,0,0,1,124,200Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
