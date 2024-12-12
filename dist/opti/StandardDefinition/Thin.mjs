var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var c in a)
    i.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import s, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const M = Z((c, e) => {
  var m = c, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ s.createElement(f, h({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M144,76a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h24a52,52,0,0,0,0-104Zm68,52a44.05,44.05,0,0,1-44,44H148V84h20A44.05,44.05,0,0,1,212,128ZM28,48a4,4,0,0,1,4-4H224a4,4,0,0,1,0,8H32A4,4,0,0,1,28,48ZM228,208a4,4,0,0,1-4,4H32a4,4,0,0,1,0-8H224A4,4,0,0,1,228,208ZM108,152c0-12.58-11.79-16.92-29.78-22.11C63,125.51,45.78,120.54,45.78,104c0-16,14.71-28,34.22-28,14.21,0,26.3,6.46,31.55,16.85a4,4,0,1,1-7.13,3.61C100.53,88.78,91.17,84,80,84c-15,0-26.22,8.6-26.22,20,0,9.81,10.07,13.43,26.66,18.21S116,132.46,116,152c0,15.44-16.15,28-36,28s-36-12.56-36-28a4,4,0,0,1,8,0c0,11,12.56,20,28,20S108,163,108,152Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
