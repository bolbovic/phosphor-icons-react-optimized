var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var A in a)
    i.call(a, A) && t.indexOf(A) < 0 && (e[A] = a[A]);
  if (a != null && r)
    for (var A of r(a))
      t.indexOf(A) < 0 && p.call(a, A) && (e[A] = a[A]);
  return e;
};
import Z, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((A, e) => {
  var m = A, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M164,224a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,224ZM223.84,62.16a107.34,107.34,0,0,0-37.71-41.54,4,4,0,1,0-4.26,6.76,99.41,99.41,0,0,1,34.87,38.46A4,4,0,0,0,220.29,68a3.94,3.94,0,0,0,1.84-.45A4,4,0,0,0,223.84,62.16ZM39.26,65.84A99.41,99.41,0,0,1,74.13,27.38a4,4,0,0,0-4.26-6.76A107.34,107.34,0,0,0,32.16,62.16a4,4,0,0,0,1.71,5.39,3.94,3.94,0,0,0,1.84.45A4,4,0,0,0,39.26,65.84ZM218.36,178A12,12,0,0,1,208,196H48A12,12,0,0,1,37.64,178C47.17,161.56,52,139.37,52,112a76,76,0,0,1,152,0C204,139.36,208.83,161.55,218.36,178Zm-6.92,4C201.19,164.34,196,140.79,196,112a68,68,0,0,0-136,0c0,28.8-5.19,52.34-15.44,70a4,4,0,0,0,0,4A3.89,3.89,0,0,0,48,188H208a3.89,3.89,0,0,0,3.43-2A4,4,0,0,0,211.44,182Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
