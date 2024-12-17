var A = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, e, L) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: L }) : a[e] = L, i = (a, e) => {
  for (var L in e || (e = {}))
    o.call(e, L) && r(a, L, e[L]);
  if (t)
    for (var L of t(e))
      c.call(e, L) && r(a, L, e[L]);
  return a;
};
var p = (a, e) => {
  var L = {};
  for (var l in a)
    o.call(a, l) && e.indexOf(l) < 0 && (L[l] = a[l]);
  if (a != null && t)
    for (var l of t(a))
      e.indexOf(l) < 0 && c.call(a, l) && (L[l] = a[l]);
  return L;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, L) => {
  var m = l, { children: a } = m, e = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, i({ ref: L }, e), a, /* @__PURE__ */ Z.createElement("path", { d: "M252.51,108.8,227,57.75a14,14,0,0,0-18.78-6.27L182.66,64.26,129.53,50.2a6.1,6.1,0,0,0-3.06,0L73.34,64.26,47.79,51.48A14,14,0,0,0,29,57.75L3.49,108.8a14,14,0,0,0,6.26,18.78L36.9,141.16l55.61,39.72a6,6,0,0,0,2,.94l64,16A6.08,6.08,0,0,0,160,198a6,6,0,0,0,4.24-1.76l55.31-55.31,26.7-13.35a14,14,0,0,0,6.26-18.78Zm-53,35.16-35.8-28.68a6,6,0,0,0-8,.45c-18.65,18.79-39.5,16.42-52.79,7.92a2,2,0,0,1-.94-1.5,1.9,1.9,0,0,1,.51-1.55L146.43,78h33.86l28.41,56.82ZM14.11,115.69a2,2,0,0,1,.11-1.52L39.74,63.11a2,2,0,0,1,1.8-1.1,2,2,0,0,1,.89.21l22.21,11.1L37.32,128l-22.21-11.1A2,2,0,0,1,14.11,115.69Zm144.05,69.67-59.6-14.9L47.66,134.1,76.84,75.75,128,62.21l14.8,3.92a5.92,5.92,0,0,0-3,1.57L94.1,112.05a14,14,0,0,0,2.39,21.72c20.22,12.92,44.75,10.49,63.8-5.89L191,152.5Zm83.73-69.67a2,2,0,0,1-1,1.16L218.68,128,191.36,73.32l22.21-11.1a2,2,0,0,1,1.53-.11,2,2,0,0,1,1.16,1l25.52,51.06A2,2,0,0,1,241.89,115.69Zm-112,101.76a6,6,0,0,1-7.27,4.37L80.89,211.39a5.88,5.88,0,0,1-2-.94L52.52,191.64a6,6,0,1,1,7-9.77L84.91,200l40.61,10.15A6,6,0,0,1,129.88,217.45Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
