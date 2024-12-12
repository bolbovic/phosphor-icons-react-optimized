var n = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && l(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var A = m, { children: a } = A, t = H(A, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M148,92a8,8,0,1,1,8,8A8,8,0,0,1,148,92Zm-48-8a8,8,0,1,0,8,8A8,8,0,0,0,100,84Zm144,44a4,4,0,0,1-4,4H212v12a83.64,83.64,0,0,1-3.87,25.2l25.47,11.13A4,4,0,0,1,232,188a4.09,4.09,0,0,1-1.6-.33l-25-10.95a84,84,0,0,1-154.72,0l-25,10.95A4.09,4.09,0,0,1,24,188a4,4,0,0,1-1.6-7.67L47.87,169.2A83.64,83.64,0,0,1,44,144V132H16a4,4,0,0,1,0-8H44V112a83.64,83.64,0,0,1,3.87-25.2L22.4,75.67a4,4,0,0,1,3.2-7.34l25,11a84,84,0,0,1,154.72,0l25-11a4,4,0,1,1,3.2,7.34L208.13,86.8A83.64,83.64,0,0,1,212,112v12h28A4,4,0,0,1,244,128ZM52,124H204V112a76,76,0,0,0-152,0Zm72,95.89V132H52v12A76.09,76.09,0,0,0,124,219.89ZM204,132H132v87.89A76.09,76.09,0,0,0,204,144Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
