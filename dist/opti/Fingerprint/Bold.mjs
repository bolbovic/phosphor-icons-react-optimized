var f = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, A, e) => A in a ? f(a, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[A] = e, Z = (a, A) => {
  for (var e in A || (A = {}))
    r.call(A, e) && o(a, e, A[e]);
  if (t)
    for (var e of t(A))
      p.call(A, e) && o(a, e, A[e]);
  return a;
};
var d = (a, A) => {
  var e = {};
  for (var c in a)
    r.call(a, c) && A.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && t)
    for (var c of t(a))
      A.indexOf(c) < 0 && p.call(a, c) && (e[c] = a[c]);
  return e;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const M = i((c, e) => {
  var m = c, { children: a } = m, A = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(s, Z({ ref: e }, A), a, /* @__PURE__ */ l.createElement("path", { d: "M160,128a224.48,224.48,0,0,1-26.37,105.54,12,12,0,1,1-21.16-11.32A200.33,200.33,0,0,0,136,128a8,8,0,0,0-16,0,12,12,0,0,1-24,0,32,32,0,0,1,64,0ZM128,56a12,12,0,1,0,0,24,48.05,48.05,0,0,1,48,48c0,7.62-.36,15.32-1.07,22.87A12,12,0,0,0,185.74,164c.38,0,.76,0,1.14,0a12,12,0,0,0,11.93-10.87c.79-8.3,1.18-16.76,1.18-25.13A72.08,72.08,0,0,0,128,56ZM96,92.23A12,12,0,0,0,80,74.35,72.1,72.1,0,0,0,56,128a120.11,120.11,0,0,1-15.12,58.37,12,12,0,0,0,21,11.69A144.14,144.14,0,0,0,80,128,48.08,48.08,0,0,1,96,92.23Zm10.1,64.1a12,12,0,0,0-14.46,8.9,158.61,158.61,0,0,1-18.88,45.86,12,12,0,0,0,20.5,12.48A182.86,182.86,0,0,0,115,170.79,12,12,0,0,0,106.1,156.33Zm76.73,24.07A12,12,0,0,0,168.19,189a241.5,241.5,0,0,1-8,24.87,12,12,0,0,0,6.91,15.49,11.76,11.76,0,0,0,4.29.8,12,12,0,0,0,11.21-7.71,260.2,260.2,0,0,0,8.79-27.37A12,12,0,0,0,182.83,180.4ZM128,16A112.12,112.12,0,0,0,16,127.44c0,.19,0,.38,0,.57a79.81,79.81,0,0,1-5,27.82,12,12,0,1,0,22.5,8.35A103.59,103.59,0,0,0,40,128.58c0-.19,0-.38,0-.57a88,88,0,0,1,176-.5c0,.16,0,.33,0,.5a282.12,282.12,0,0,1-6.74,61.38,12,12,0,0,0,9.09,14.33A11.84,11.84,0,0,0,221,204a12,12,0,0,0,11.7-9.38A305.87,305.87,0,0,0,240,128.55c0-.18,0-.36,0-.54A112.13,112.13,0,0,0,128,16Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};