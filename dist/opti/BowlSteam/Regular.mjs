var i = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, c, e) => c in a ? i(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, l = (a, c) => {
  for (var e in c || (c = {}))
    o.call(c, e) && A(a, e, c[e]);
  if (t)
    for (var e of t(c))
      p.call(c, e) && A(a, e, c[e]);
  return a;
};
var Z = (a, c) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && c.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      c.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, c = Z(m, ["children"]);
  return /* @__PURE__ */ f.createElement(R, l({ ref: e }, c), a, /* @__PURE__ */ f.createElement("path", { d: "M224,112H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V216a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,120,8,8,0,0,0,224,112Zm-59.34,88a8,8,0,0,0-4.66,7.27V216H96v-8.71A8,8,0,0,0,91.34,200a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,200ZM81.77,55c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,88,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,88,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C70.37,74.81,73.38,65.43,81.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,128,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,128,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C110.37,74.81,113.38,65.43,121.77,55Zm40,0c5.35-6.66,6.67-11.16,6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8,8,0,0,1,168,24a8.11,8.11,0,0,1,2.38.36c1,.31,9.91,3.33,12.79,12.76,2.46,8.07-.55,17.45-8.94,27.89-5.35,6.66-6.67,11.16-6.12,13.14.42,1.49,2.37,2.24,2.39,2.25A8,8,0,0,1,168,96a8.11,8.11,0,0,1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76C150.37,74.81,153.38,65.43,161.77,55Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};