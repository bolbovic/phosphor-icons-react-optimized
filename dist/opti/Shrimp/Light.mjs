var M = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && A(a, e, t[e]);
  if (h)
    for (var e of h(t))
      H.call(t, e) && A(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M138,116a10,10,0,1,1,10,10A10,10,0,0,1,138,116Zm83.9-32A78.1,78.1,0,0,1,144,158H112a14,14,0,0,0,0,28h56a6,6,0,0,1,0,12H118v20h34a6,6,0,0,1,0,12H96A78,78,0,0,1,96,74H212a14,14,0,0,0,0-28H128a22,22,0,0,1-22-22,6,6,0,0,1,12,0,10,10,0,0,0,10,10h84a26,26,0,0,1,9.9,50ZM50.65,199.88l35.48-25.34A23.74,23.74,0,0,1,86,172a25.92,25.92,0,0,1,1.46-8.57L31.51,138a65.8,65.8,0,0,0,19.14,61.88ZM90.3,186.3,60.49,207.59A65.56,65.56,0,0,0,96,218h10V197.29A26.05,26.05,0,0,1,90.3,186.3ZM106,146.71V86H96a66.1,66.1,0,0,0-60.86,40.47L94,153.24A25.86,25.86,0,0,1,106,146.71ZM209.73,86H118v60h26A66.09,66.09,0,0,0,209.73,86Z" }));
});
l.displayName = "Light";
export {
  l as Light
};